import { Link } from "react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

/**
 * Unknown URLs previously fell through to React Router's built-in error
 * screen. This renders a branded page instead and marks the response
 * noindex so search engines do not index soft 404s (a static host cannot
 * return a real 404 status for an SPA route).
 */
export function NotFound() {
  const { t } = useTranslation();

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, follow";
    document.head.appendChild(meta);
    const previousTitle = document.title;
    document.title = t("notFound.title");
    return () => {
      meta.remove();
      document.title = previousTitle;
    };
  }, [t]);

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center gap-5 px-6 py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1A4F8D]">404</p>
      <h1 className="text-3xl text-gray-900 md:text-4xl">{t("notFound.title")}</h1>
      <p className="max-w-md text-lg text-gray-600">{t("notFound.body")}</p>
      <Link
        to="/"
        className="rounded-full bg-[#1A4F8D] px-8 py-4 text-white transition-colors hover:bg-[#1C5B78] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1A4F8D]/30"
      >
        {t("notFound.cta")}
      </Link>
    </section>
  );
}
