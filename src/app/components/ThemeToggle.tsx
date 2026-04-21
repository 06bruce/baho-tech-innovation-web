import { Moon, Sun } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useAuth } from "../hooks/useAuth";
import { useTheme } from "../hooks/useTheme";
import { userService } from "../services/userService";

export function ThemeToggle() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const { token, refreshProfile } = useAuth();
  const nextTheme = theme === "dark" ? "light" : "dark";

  async function handleToggle() {
    setTheme(nextTheme);

    if (token) {
      await userService.updatePreferences(token, { preferredTheme: nextTheme }).catch(() => null);
      await refreshProfile();
    }
  }

  return (
    <button
      type="button"
      onClick={() => void handleToggle()}
      aria-label={t("theme.toggle")}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d8e4ec] bg-white text-[#1A4F8D] transition hover:bg-[#eef5f9] focus:outline-none focus:ring-4 focus:ring-[#1A4F8D]/25 dark:border-white/15 dark:bg-[#102A43] dark:text-[#FEC629] dark:hover:bg-white/10"
    >
      {theme === "dark" ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
    </button>
  );
}
