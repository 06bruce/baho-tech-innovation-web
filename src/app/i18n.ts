import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./locales/resources";

const supportedLanguages = Object.keys(resources);
const savedLanguage = window.localStorage.getItem("baho_language");
const browserLanguage = navigator.language.slice(0, 2);
const initialLanguage =
  (savedLanguage && supportedLanguages.includes(savedLanguage) && savedLanguage) ||
  (supportedLanguages.includes(browserLanguage) ? browserLanguage : "en");

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

// Keep the document language in sync so screen readers and search engines
// announce and index the page in the language the visitor selected.
function syncDocumentLanguage(language: string) {
  document.documentElement.lang = language;
}

syncDocumentLanguage(i18n.resolvedLanguage || initialLanguage);
i18n.on("languageChanged", syncDocumentLanguage);

export default i18n;
