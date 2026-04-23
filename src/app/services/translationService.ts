import { apiRequest } from "./apiClient";

export const translationService = {
  translate(payload: { text: string; targetLanguage: string }) {
    return apiRequest<{ ok: boolean; output: string }>("/translation/translate", {
      method: "POST",
      body: JSON.stringify(payload),
    });
  },
};
