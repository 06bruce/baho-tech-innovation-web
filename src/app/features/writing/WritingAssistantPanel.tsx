import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PenLine } from "lucide-react";
import { FormAlert } from "../../components/auth/FormAlert";
import { useAuth } from "../../hooks/useAuth";
import { writingService } from "../../services/writingService";
import { SpeechToTextTool } from "../stt/SpeechToTextTool";

export function WritingAssistantPanel() {
  const { token } = useAuth();
  const { i18n, t } = useTranslation();
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("simple");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function runAssistant() {
    if (!token || !input.trim()) return;
    setIsLoading(true);
    setError("");
    try {
      const response = await writingService.assist(token, { input, mode, language: i18n.language });
      setOutput(response.output);
    } catch (apiError) {
      setError(apiError instanceof Error ? apiError.message : t("writing.failed"));
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="space-y-5 rounded-3xl border border-[#d8e4ec] bg-white p-6 shadow-sm" aria-labelledby="writing-title">
      <h3 id="writing-title" className="flex items-center gap-2 text-2xl font-semibold text-gray-950">
        <PenLine className="h-6 w-6 text-[#1A4F8D]" aria-hidden="true" />
        {t("writing.title")}
      </h3>
      {error && <FormAlert tone="error">{error}</FormAlert>}
      <div className="grid gap-4 lg:grid-cols-[1fr_280px]">
        <label>
          <span className="mb-2 block text-sm font-semibold text-gray-800">{t("writing.draft")}</span>
          <textarea value={input} onChange={(event) => setInput(event.target.value)} rows={6} className="w-full rounded-2xl border border-gray-300 bg-white p-4 text-gray-950 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15" />
        </label>
        <div>
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-gray-800">{t("writing.mode")}</span>
            <select value={mode} onChange={(event) => setMode(event.target.value)} className="h-12 w-full rounded-2xl border border-gray-300 bg-white px-4">
              <option value="simple">{t("writing.simplify")}</option>
              <option value="expand">{t("writing.expand")}</option>
              <option value="formal">{t("writing.formal")}</option>
              <option value="short">{t("writing.short")}</option>
              <option value="translate">{t("writing.translate")}</option>
            </select>
          </label>
          <button type="button" onClick={() => void runAssistant()} disabled={isLoading || !input.trim()} className="mt-4 w-full rounded-full bg-[#1A4F8D] px-5 py-3 font-semibold text-white hover:bg-[#1C5B78] disabled:opacity-60">
            {isLoading ? t("writing.working") : t("writing.action")}
          </button>
        </div>
      </div>
      {output && <FormAlert tone="success">{output}</FormAlert>}
      <SpeechToTextTool />
    </section>
  );
}
