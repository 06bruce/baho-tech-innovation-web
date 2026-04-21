export const speechLanguages = [
  { code: "en-US", appLanguage: "en", labelKey: "languages.en" },
  { code: "rw-RW", appLanguage: "rw", labelKey: "languages.rw" },
  { code: "fr-FR", appLanguage: "fr", labelKey: "languages.fr" },
  { code: "sw-KE", appLanguage: "sw", labelKey: "languages.sw" },
] as const;

export function speechCodeForAppLanguage(language?: string) {
  return speechLanguages.find((item) => item.appLanguage === language)?.code || "en-US";
}
