import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources } from "./locales/resources";

const savedLanguage = window.localStorage.getItem("baho_language");
const browserLanguage = navigator.language.slice(0, 2);
const initialLanguage = savedLanguage || (["en", "fr", "sw"].includes(browserLanguage) ? browserLanguage : "en");

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
