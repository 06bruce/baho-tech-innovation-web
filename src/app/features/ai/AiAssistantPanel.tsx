import { FormEvent, useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Bot, Send, Volume2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FormAlert } from "../../components/auth/FormAlert";
import { useAuth } from "../../hooks/useAuth";
import { aiService, type ChatMessage } from "../../services/aiService";
import { collectPageContext } from "../../utils/pageContext";
import { useTextToSpeech } from "../tts/useTextToSpeech";
import { speechCodeForAppLanguage } from "../speech/languages";

export function AiAssistantPanel() {
  const { token } = useAuth();
  const location = useLocation();
  const { i18n, t } = useTranslation();
  const { speak } = useTextToSpeech();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const latestAssistant = [...messages].reverse().find((message) => message.role === "assistant")?.content;

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
      speak({ text: response.response, language: speechCodeForAppLanguage(i18n.language) });
    } catch (apiError) {
      setError(apiError instanceof Error ? apiError.message : t("ai.readFailed"));
    } finally {
      setIsLoading(false);
    }
  }, [i18n.language, location.pathname, speak, t, token]);

  useEffect(() => {
    function handleWakeActivation() {
      void readPage();
    }

    window.addEventListener("baho-ai-activate", handleWakeActivation);
    return () => window.removeEventListener("baho-ai-activate", handleWakeActivation);
  }, [readPage]);

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
