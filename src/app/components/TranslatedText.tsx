import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { translationService } from "../services/translationService";

const memoryCache = new Map<string, string>();

function cacheKey(language: string, text: string) {
  return `baho_translation:${language}:${text}`;
}

type TranslatedTextProps = {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export function TranslatedText({ text, as: Element = "span", className }: TranslatedTextProps) {
  const { i18n } = useTranslation();
  const language = (i18n.resolvedLanguage || i18n.language || "en").slice(0, 2);
  const key = useMemo(() => cacheKey(language, text), [language, text]);
  const [value, setValue] = useState(text);

  useEffect(() => {
    let cancelled = false;

    if (language === "en" || !text.trim()) {
      setValue(text);
      return () => {
        cancelled = true;
      };
    }

    const cached = memoryCache.get(key) || window.localStorage.getItem(key);
    if (cached) {
      memoryCache.set(key, cached);
      setValue(cached);
      return () => {
        cancelled = true;
      };
    }

    setValue(text);
    translationService
      .translate({ text, targetLanguage: language })
      .then((response) => {
        const translated = response.output?.trim();
        if (!translated || cancelled) return;
        memoryCache.set(key, translated);
        window.localStorage.setItem(key, translated);
        setValue(translated);
      })
      .catch(() => {
        if (!cancelled) setValue(text);
      });

    return () => {
      cancelled = true;
    };
  }, [key, language, text]);

  return <Element className={className}>{value}</Element>;
}
