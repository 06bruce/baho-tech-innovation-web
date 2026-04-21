import { apiRequest } from "./apiClient";

export const signLanguageService = {
  interpret(token: string, payload: { imageBase64: string; mimeType: string; language: string }) {
    return apiRequest<{ ok: boolean; interpretation: string }>("/sign-language/interpret", {
      method: "POST",
      authToken: token,
      body: JSON.stringify(payload),
    });
  },
};
