import { useEffect, useMemo, useRef } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { Mic, Square } from "lucide-react";
import { FormAlert } from "../../components/auth/FormAlert";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";
import { getDashboardPathForDisability } from "../../utils/disability";
import { speechCodeForAppLanguage } from "../speech/languages";
import { useVoiceCommands } from "./useVoiceCommands";

export function VoiceCommandPanel() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const { setTheme } = useTheme();
  const autoStartedRef = useRef(false);
  const stopVoiceCommandsRef = useRef<() => void>(() => undefined);
  const startVoiceCommandsRef = useRef<() => void>(() => undefined);
  const commands = useMemo(
    () => [
      { phrase: "go to dashboard", action: () => navigate(user?.role === "admin" ? "/admin/dashboard" : getDashboardPathForDisability(user?.disabilityCategory)) },
      { phrase: "hey activate", action: () => window.dispatchEvent(new CustomEvent("baho-ai-activate")) },
      {
        phrase: "hey talker",
        action: (transcript: string) => {
          const commandText = transcript.replace(/.*hey talker/i, "").trim();
          stopVoiceCommandsRef.current();
          window.dispatchEvent(new CustomEvent("baho-ai-command", { detail: { commandText } }));
        },
      },
      { phrase: "open profile", action: () => navigate(user?.role === "admin" ? "/admin/users" : getDashboardPathForDisability(user?.disabilityCategory)) },
      { phrase: "open blind tools", action: () => navigate("/dashboard/blind") },
      { phrase: "start reading", action: () => document.getElementById("main-content")?.focus() },
      { phrase: "switch to dark mode", action: () => setTheme("dark") },
      { phrase: "switch to light mode", action: () => setTheme("light") },
      { phrase: "logout", action: () => void logout().then(() => navigate("/login", { replace: true })) },
    ],
    [logout, navigate, setTheme, user?.disabilityCategory, user?.role]
  );
  const { supported, isListening, lastCommand, error, start, stop } = useVoiceCommands(commands, speechCodeForAppLanguage(i18n.language));
  stopVoiceCommandsRef.current = stop;
  startVoiceCommandsRef.current = start;

  useEffect(() => {
    if (supported && !isListening && !autoStartedRef.current) {
      autoStartedRef.current = true;
      start();
    }
  }, [isListening, start, supported]);

  useEffect(() => {
    function resumeVoiceCommands() {
      if (supported) startVoiceCommandsRef.current();
    }

    window.addEventListener("baho-voice-resume", resumeVoiceCommands);
    return () => window.removeEventListener("baho-voice-resume", resumeVoiceCommands);
  }, [supported]);

  return (
    <section className="rounded-3xl border border-[#d8e4ec] bg-white p-5 shadow-sm dark:border-white/10 dark:bg-[#0B1F33]" aria-labelledby="voice-command-title">
      <h3 id="voice-command-title" className="text-xl font-semibold text-gray-950 dark:text-white">{t("voice.title")}</h3>
      <div className="mt-3 space-y-3">
        {!supported && <FormAlert tone="error">{t("voice.unsupported")}</FormAlert>}
        {error && <FormAlert tone="error">{error}</FormAlert>}
        <FormAlert tone="info">{t("voice.wakeHint")}</FormAlert>
        {lastCommand && <FormAlert tone="info">{t("voice.lastHeard")}: {lastCommand}</FormAlert>}
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={start} disabled={!supported || isListening} className="inline-flex items-center gap-2 rounded-full bg-[#1A4F8D] px-5 py-2.5 font-semibold text-white hover:bg-[#1C5B78] focus:outline-none focus:ring-4 focus:ring-[#1A4F8D]/25 disabled:opacity-60">
          <Mic className="h-4 w-4" aria-hidden="true" /> {t("voice.start")}
        </button>
        <button type="button" onClick={stop} disabled={!supported || !isListening} className="inline-flex items-center gap-2 rounded-full border border-[#1A4F8D] px-5 py-2.5 font-semibold text-[#1A4F8D] hover:bg-[#eef5f9] focus:outline-none focus:ring-4 focus:ring-[#1A4F8D]/25 disabled:opacity-60 dark:border-[#FEC629] dark:text-[#FEC629]">
          <Square className="h-4 w-4" aria-hidden="true" /> {t("voice.stop")}
        </button>
      </div>
      <details className="mt-4">
        <summary className="cursor-pointer font-semibold text-[#1A4F8D] dark:text-[#FEC629]">{t("voice.available")}</summary>
        <ul className="mt-3 grid gap-2 text-sm text-gray-700 dark:text-gray-200 sm:grid-cols-2">
          {commands.map((command) => <li key={command.phrase} className="rounded-2xl bg-[#F5F7FA] px-3 py-2 dark:bg-[#102A43]">{command.phrase}</li>)}
        </ul>
      </details>
    </section>
  );
}
