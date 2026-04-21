import { apiRequest } from "./apiClient";

export const writingService = {
  assist(token: string, payload: { input: string; mode: string; language: string }) {
    return apiRequest<{ ok: boolean; output: string }>("/writing/assist", {
      method: "POST",
      authToken: token,
      body: JSON.stringify(payload),
    });
  },
  translate(token: string, payload: { text: string; targetLanguage: string }) {
    return apiRequest<{ ok: boolean; output: string }>("/writing/translate", {
      method: "POST",
      authToken: token,
      body: JSON.stringify(payload),
    });
  },
};
