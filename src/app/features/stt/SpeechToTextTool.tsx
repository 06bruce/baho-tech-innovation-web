import { useState } from "react";
import { Mic, Square, Trash2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FormAlert } from "../../components/auth/FormAlert";
import { useAuth } from "../../hooks/useAuth";
import { speechCodeForAppLanguage, speechLanguages } from "../speech/languages";
import { useSpeechToText } from "./useSpeechToText";

export function SpeechToTextTool() {
  const { t, i18n } = useTranslation();
  const { token } = useAuth();
  const [language, setLanguage] = useState(() => speechCodeForAppLanguage(i18n.language));
  const {
    supported,
    transcript,
    isListening,
    error,
    history,
    start,
    stop,
    clear,
  } = useSpeechToText();

  return (
    <section className="rounded-3xl border border-[#d8e4ec] bg-white p-6 shadow-sm" aria-labelledby="stt-title">
      <h3 id="stt-title" className="text-2xl font-semibold text-gray-950">{t("speech.speechToText")}</h3>
      <div className="mt-4 space-y-3">
        {supported && <FormAlert tone="info">{t("speech.ownTranscriptionReady")}</FormAlert>}
        {!supported && <FormAlert tone="error">{t("speech.unsupportedStt")}</FormAlert>}
        {error && <FormAlert tone="error">{error}</FormAlert>}
        {isListening && <FormAlert tone="success">{t("speech.listening")}</FormAlert>}
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-semibold text-gray-800">{t("speech.language")}</span>
        <select value={language} onChange={(event) => setLanguage(event.target.value)} className="h-12 w-full rounded-2xl border border-gray-300 bg-white px-4 text-gray-950 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15">
          {speechLanguages.map((item) => <option key={item.code} value={item.code}>{t(item.labelKey)}</option>)}
        </select>
      </label>

      <div className="mt-5 flex flex-wrap gap-3">
        <button type="button" onClick={() => void start()} disabled={!supported || isListening} className="inline-flex items-center gap-2 rounded-full bg-[#1A4F8D] px-6 py-3 font-semibold text-white hover:bg-[#1C5B78] focus:outline-none focus:ring-4 focus:ring-[#1A4F8D]/25 disabled:opacity-60">
          <Mic className="h-5 w-5" aria-hidden="true" /> {t("speech.startListening")}
        </button>
        <button type="button" onClick={() => token && void stop({ token, language })} disabled={!supported || !token || !isListening} className="inline-flex items-center gap-2 rounded-full border border-[#1A4F8D] px-6 py-3 font-semibold text-[#1A4F8D] hover:bg-[#eef5f9] focus:outline-none focus:ring-4 focus:ring-[#1A4F8D]/25 disabled:opacity-60">
          <Square className="h-5 w-5" aria-hidden="true" /> {t("speech.stopListening")}
        </button>
        <button type="button" onClick={clear} className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-[#1A4F8D]/15">
          <Trash2 className="h-5 w-5" aria-hidden="true" /> {t("speech.clear")}
        </button>
      </div>

      <div className="mt-6 min-h-64 rounded-2xl bg-[#F5F7FA] p-5 text-lg leading-8 text-gray-950" aria-live="polite">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#1A4F8D]">{t("speech.transcript")}</p>
        {transcript || t("speech.transcriptEmpty")}
      </div>

      {history.length > 0 && (
        <div className="mt-6">
          <p className="mb-3 font-semibold text-gray-950">{t("speech.recentTranscripts")}</p>
          <div className="space-y-2">
            {history.map((item) => <p key={item} className="rounded-2xl bg-[#F5F7FA] p-3 text-gray-700">{item}</p>)}
          </div>
        </div>
      )}
    </section>
  );
}
