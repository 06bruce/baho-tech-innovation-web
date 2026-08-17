import { useMemo, useState } from "react";
import { Pause, Play, Square } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FormAlert } from "../../components/auth/FormAlert";
import { useAuth } from "../../hooks/useAuth";
import { speechService } from "../../services/speechService";
import { speechCodeForAppLanguage, speechLanguages } from "../speech/languages";
import { useTextToSpeech } from "./useTextToSpeech";

export function TextToSpeechTool() {
  const { t, i18n } = useTranslation();
  const { token } = useAuth();
  const [text, setText] = useState("");
  const [language, setLanguage] = useState(() => speechCodeForAppLanguage(i18n.language));
  const [voiceURI, setVoiceURI] = useState("");
  const { supported, voices, isSpeaking, isPaused, history, speak, pause, resume, stop } = useTextToSpeech();
  const [isOptimizing, setIsOptimizing] = useState(false);
  const matchingVoices = useMemo(
    () => voices.filter((voice) => voice.lang.toLowerCase().startsWith(language.slice(0, 2).toLowerCase())),
    [language, voices]
  );
  const voiceOptions = matchingVoices.length ? matchingVoices : voices;

  return (
    <section className="rounded-3xl border border-[#d8e4ec] bg-white p-6 shadow-sm" aria-labelledby="tts-title">
      <h3 id="tts-title" className="text-2xl font-semibold text-gray-950">{t("speech.textToSpeech")}</h3>
      {!supported && <div className="mt-4"><FormAlert tone="error">{t("speech.unsupportedTts")}</FormAlert></div>}

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-gray-800">{t("speech.language")}</span>
          <select
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
            className="h-12 w-full rounded-2xl border border-gray-300 bg-white px-4 text-gray-950 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15"
          >
            {speechLanguages.map((item) => (
              <option key={item.code} value={item.code}>{t(item.labelKey)}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-gray-800">{t("speech.voice")}</span>
          <select
            value={voiceURI}
            onChange={(event) => setVoiceURI(event.target.value)}
            className="h-12 w-full rounded-2xl border border-gray-300 bg-white px-4 text-gray-950 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15"
          >
            <option value="">{t("speech.autoVoice")}</option>
            {voiceOptions.map((voice) => (
              <option key={voice.voiceURI} value={voice.voiceURI}>{voice.name} ({voice.lang})</option>
            ))}
          </select>
        </label>
      </div>

      <label htmlFor="tts-message" className="mt-5 block text-sm font-semibold text-gray-800">
        {t("speech.message")}
      </label>
      <textarea
        id="tts-message"
        value={text}
        onChange={(event) => setText(event.target.value)}
        rows={6}
        className="mt-2 w-full rounded-2xl border border-gray-300 bg-white p-4 text-lg leading-8 text-gray-950 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15"
        placeholder={t("speech.typeMessage")}
      />

      <div className="mt-5 flex flex-wrap gap-3">
        <button type="button" onClick={() => speak({ text, language, voiceURI })} disabled={!supported || !text.trim()} className="inline-flex items-center gap-2 rounded-full bg-[#1A4F8D] px-6 py-3 font-semibold text-white hover:bg-[#1C5B78] focus:outline-none focus:ring-4 focus:ring-[#1A4F8D]/25 disabled:opacity-60">
          <Play className="h-5 w-5" aria-hidden="true" /> {t("speech.play")}
        </button>
        <button type="button" onClick={isPaused ? resume : pause} disabled={!supported || !isSpeaking} className="inline-flex items-center gap-2 rounded-full border border-[#1A4F8D] px-6 py-3 font-semibold text-[#1A4F8D] hover:bg-[#eef5f9] focus:outline-none focus:ring-4 focus:ring-[#1A4F8D]/25 disabled:opacity-60">
          <Pause className="h-5 w-5" aria-hidden="true" /> {isPaused ? t("speech.resume") : t("speech.pause")}
        </button>
        <button type="button" onClick={stop} disabled={!supported} className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-[#1A4F8D]/15 disabled:opacity-60">
          <Square className="h-5 w-5" aria-hidden="true" /> {t("speech.stop")}
        </button>
        <button
          type="button"
          onClick={async () => {
            if (!token || !text.trim()) return;
            setIsOptimizing(true);
            try {
              const response = await speechService.optimizeTts(token, { text, language });
              setText(response.text);
            } finally {
              setIsOptimizing(false);
            }
          }}
          disabled={!token || !text.trim() || isOptimizing}
          className="inline-flex items-center gap-2 rounded-full border border-[#1A4F8D] px-6 py-3 font-semibold text-[#1A4F8D] hover:bg-[#eef5f9] focus:outline-none focus:ring-4 focus:ring-[#1A4F8D]/25 disabled:opacity-60"
        >
          {isOptimizing ? t("speech.optimizing") : t("speech.optimize")}
        </button>
      </div>

      {history.length > 0 && (
        <div className="mt-6 rounded-2xl bg-[#F5F7FA] p-5">
          <p className="mb-3 font-semibold text-gray-950">{t("speech.recentPhrases")}</p>
          <div className="flex flex-wrap gap-2">
            {history.map((phrase) => (
              <button key={phrase} type="button" onClick={() => setText(phrase)} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:text-[#1A4F8D]">
                {phrase}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
