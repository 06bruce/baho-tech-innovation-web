import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { userService } from "../services/userService";

const languages = ["en", "rw", "fr", "sw"] as const;

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { i18n, t } = useTranslation();
  const { token, refreshProfile } = useAuth();

  async function handleChange(language: string) {
    window.localStorage.setItem("baho_language", language);
    await i18n.changeLanguage(language);

    if (token) {
      await userService.updatePreferences(token, { preferredLanguage: language }).catch(() => null);
      await refreshProfile();
    }
  }

  return (
    <label className="inline-flex items-center gap-2 rounded-full border border-[#d8e4ec] bg-white px-3 py-2 text-sm font-semibold text-gray-700">
      <Languages className="h-4 w-4 text-[#1A4F8D]" aria-hidden="true" />
      <span className={compact ? "sr-only" : ""}>{t("speech.language")}</span>
      <select
        value={i18n.language}
        onChange={(event) => void handleChange(event.target.value)}
        aria-label={t("speech.language")}
        className="bg-transparent outline-none focus:ring-2 focus:ring-[#1A4F8D]/30"
      >
        {languages.map((language) => (
          <option key={language} value={language}>
            {t(`languages.${language}`)}
          </option>
        ))}
      </select>
    </label>
  );
}
