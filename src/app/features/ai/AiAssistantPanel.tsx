import { FormEvent, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Bot, Mic, Send, Volume2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FormAlert } from "../../components/auth/FormAlert";
import { useAuth } from "../../hooks/useAuth";
import { aiService, type AiCommandAction, type ChatMessage } from "../../services/aiService";
import { collectPageContext } from "../../utils/pageContext";
import { useTextToSpeech } from "../tts/useTextToSpeech";
import { speechCodeForAppLanguage } from "../speech/languages";

type SpeechRecognitionConstructor = new () => {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  onresult: ((event: any) => void) | null;
  onerror: ((event: any) => void) | null;
  onend: (() => void) | null;
};

function getSpeechRecognition(): SpeechRecognitionConstructor | null {
  return (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition || null;
}

function normalizeText(text: string) {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

function setNativeValue(element: HTMLInputElement | HTMLTextAreaElement, value: string) {
  const prototype = Object.getPrototypeOf(element);
  const descriptor = Object.getOwnPropertyDescriptor(prototype, "value");
  descriptor?.set?.call(element, value);
  element.dispatchEvent(new Event("input", { bubbles: true }));
  element.dispatchEvent(new Event("change", { bubbles: true }));
}

function getElementLabel(element: HTMLElement) {
  const id = element.getAttribute("id");
  const label = id ? document.querySelector(`label[for="${CSS.escape(id)}"]`)?.textContent : "";
  return normalizeText(
    [
      label,
      element.getAttribute("aria-label"),
      element.getAttribute("placeholder"),
      element.getAttribute("name"),
      element.textContent,
    ]
      .filter(Boolean)
      .join(" ")
  );
}

function findInteractiveElement(target: string) {
  const normalizedTarget = normalizeText(target);
  if (!normalizedTarget) return null;
  const elements = Array.from(
    document.querySelectorAll<HTMLElement>("input, textarea, select, button, a, [tabindex]")
  );
  return elements.find((element) => getElementLabel(element).includes(normalizedTarget)) || null;
}

function highlightElement(element: HTMLElement) {
  element.scrollIntoView({ behavior: "smooth", block: "center" });
  element.setAttribute("tabindex", element.getAttribute("tabindex") || "-1");
  element.focus({ preventScroll: true });
  const previousOutline = element.style.outline;
  const previousOffset = element.style.outlineOffset;
  element.style.outline = "4px solid #FEC629";
  element.style.outlineOffset = "4px";
  window.setTimeout(() => {
    element.style.outline = previousOutline;
    element.style.outlineOffset = previousOffset;
  }, 2500);
}

function searchCurrentPage(query: string) {
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) return false;
  const main = document.getElementById("main-content") || document.body;
  const elements = Array.from(main.querySelectorAll<HTMLElement>("h1, h2, h3, p, li, label, button, a, td, th, span"));
  const match = elements.find((element) => normalizeText(element.innerText || element.textContent || "").includes(normalizedQuery));
  if (!match) return false;
  highlightElement(match);
  return true;
}

export function AiAssistantPanel() {
  const { token } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();
  const { speak, stop } = useTextToSpeech();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCommandListening, setIsCommandListening] = useState(false);
  const latestAssistant = [...messages].reverse().find((message) => message.role === "assistant")?.content;

  const speakResponse = useCallback(
    (text: string) => speak({ text, language: speechCodeForAppLanguage(i18n.language) }),
    [i18n.language, speak]
  );

  const executeAction = useCallback(
    async (action: AiCommandAction) => {
      if (action.type === "navigate" && action.route?.startsWith("/")) {
        navigate(action.route);
        return true;
      }

      if (action.type === "focus") {
        const element = findInteractiveElement(action.target);
        if (!element) return false;
        highlightElement(element);
        return true;
      }

      if (action.type === "type") {
        const element = findInteractiveElement(action.target);
        if (!(element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement)) return false;
        highlightElement(element);
        setNativeValue(element, action.text || "");
        return true;
      }

      if (action.type === "search") {
        return searchCurrentPage(action.query);
      }

      if (action.type === "readPage") {
        window.dispatchEvent(new CustomEvent("baho-ai-activate"));
        return true;
      }

      return false;
    },
    [navigate]
  );

  const runAiCommand = useCallback(
    async (command: string) => {
      if (!token || !command.trim()) return;
      setError("");
      setIsLoading(true);
      setMessages((current) => [...current, { role: "user", content: command.trim() }]);

      try {
        const response = await aiService.command(token, {
          command,
          language: i18n.language,
          pageContext: collectPageContext(location.pathname),
        });
        for (const action of response.actions || []) {
          await executeAction(action);
        }
        setMessages((current) => [...current, { role: "assistant", content: response.response }]);
        speakResponse(response.response);
      } catch (apiError) {
        const message = apiError instanceof Error ? apiError.message : t("ai.failed");
        setError(message);
        speakResponse(message);
      } finally {
        setIsLoading(false);
        window.dispatchEvent(new CustomEvent("baho-voice-resume"));
      }
    },
    [executeAction, i18n.language, location.pathname, speakResponse, t, token]
  );

  const listenForCommand = useCallback(() => {
    const Recognition = getSpeechRecognition();
    stop();

    if (!Recognition) {
      const message = t("voice.unsupported");
      setError(message);
      speakResponse(message);
      window.dispatchEvent(new CustomEvent("baho-voice-resume"));
      return;
    }

    const recognition = new Recognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = speechCodeForAppLanguage(i18n.language);
    setIsCommandListening(true);
    speakResponse(t("ai.listeningForCommand"));

    recognition.onresult = (event: any) => {
      const command = String(event.results[event.results.length - 1][0].transcript || "").trim();
      setIsCommandListening(false);
      void runAiCommand(command);
    };
    recognition.onerror = (event: any) => {
      const message = event.error ? `Voice command error: ${event.error}` : t("ai.commandFailed");
      setIsCommandListening(false);
      setError(message);
      speakResponse(message);
      window.dispatchEvent(new CustomEvent("baho-voice-resume"));
    };
    recognition.onend = () => setIsCommandListening(false);
    window.setTimeout(() => {
      try {
        recognition.start();
      } catch (_error) {
        setIsCommandListening(false);
        window.dispatchEvent(new CustomEvent("baho-voice-resume"));
      }
    }, 900);
  }, [i18n.language, runAiCommand, speakResponse, stop, t]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!token || !input.trim()) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: input.trim() }];
    setMessages(nextMessages);
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await aiService.conversation(token, {
        messages: nextMessages,
        language: i18n.language,
        pageContext: collectPageContext(location.pathname),
      });
      setMessages([...nextMessages, { role: "assistant", content: response.response }]);
    } catch (apiError) {
      setError(apiError instanceof Error ? apiError.message : t("ai.failed"));
    } finally {
      setIsLoading(false);
    }
  }

  const readPage = useCallback(async () => {
    if (!token) return;
    setIsLoading(true);
    setError("");
    try {
      const response = await aiService.screenReader(token, {
        language: i18n.language,
        pageContext: collectPageContext(location.pathname),
      });
      setMessages((current) => [...current, { role: "assistant", content: response.response }]);
      speakResponse(response.response);
    } catch (apiError) {
      setError(apiError instanceof Error ? apiError.message : t("ai.readFailed"));
    } finally {
      setIsLoading(false);
    }
  }, [i18n.language, location.pathname, speakResponse, t, token]);

  useEffect(() => {
    function handleWakeActivation() {
      void readPage();
    }

    function handleAiCommand(event: Event) {
      const commandText = (event as CustomEvent<{ commandText?: string }>).detail?.commandText?.trim() || "";
      if (commandText) void runAiCommand(commandText);
      else listenForCommand();
    }

    window.addEventListener("baho-ai-activate", handleWakeActivation);
    window.addEventListener("baho-ai-command", handleAiCommand);
    return () => {
      window.removeEventListener("baho-ai-activate", handleWakeActivation);
      window.removeEventListener("baho-ai-command", handleAiCommand);
    };
  }, [listenForCommand, readPage, runAiCommand]);

  return (
    <section className="rounded-3xl border border-[#d8e4ec] bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0B1F33]" aria-labelledby="ai-assistant-title">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 id="ai-assistant-title" className="flex items-center gap-2 text-xl font-semibold text-gray-950 dark:text-white">
          <Bot className="h-5 w-5 text-[#1A4F8D] dark:text-[#FEC629]" aria-hidden="true" />
          {t("ai.assistant")}
        </h3>
        <button type="button" onClick={() => void readPage()} disabled={isLoading} className="inline-flex items-center gap-2 rounded-full border border-[#1A4F8D] px-4 py-2 text-sm font-semibold text-[#1A4F8D] hover:bg-[#eef5f9] disabled:opacity-60 dark:border-[#FEC629] dark:text-[#FEC629]">
          <Volume2 className="h-4 w-4" aria-hidden="true" />
          {t("ai.readPage")}
        </button>
        <button type="button" onClick={listenForCommand} disabled={isLoading || isCommandListening} className="inline-flex items-center gap-2 rounded-full border border-[#1A4F8D] px-4 py-2 text-sm font-semibold text-[#1A4F8D] hover:bg-[#eef5f9] disabled:opacity-60 dark:border-[#FEC629] dark:text-[#FEC629]">
          <Mic className="h-4 w-4" aria-hidden="true" />
          {isCommandListening ? t("ai.listening") : t("ai.commandMode")}
        </button>
      </div>

      <div className="mt-4 space-y-3" aria-live="polite">
        {error && <FormAlert tone="error">{error}</FormAlert>}
        {latestAssistant && <FormAlert tone="info">{latestAssistant}</FormAlert>}
      </div>

      <form onSubmit={submit} className="mt-4 flex gap-2">
        <label className="sr-only" htmlFor="ai-message">{t("ai.askLabel")}</label>
        <input
          id="ai-message"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder={t("ai.askPlaceholder")}
          className="h-11 min-w-0 flex-1 rounded-full border border-gray-300 bg-white px-4 text-gray-950 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15 dark:border-white/15 dark:bg-[#102A43] dark:text-white"
        />
        <button type="submit" disabled={isLoading || !input.trim()} className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1A4F8D] text-white hover:bg-[#1C5B78] disabled:opacity-60" aria-label={t("ai.send")}>
          <Send className="h-5 w-5" aria-hidden="true" />
        </button>
      </form>
    </section>
  );
}
