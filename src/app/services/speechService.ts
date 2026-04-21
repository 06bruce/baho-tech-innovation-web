import { apiRequest } from "./apiClient";

export const speechService = {
  transcribe(token: string, payload: { audioBase64: string; mimeType: string; language: string }) {
    return apiRequest<{ ok: boolean; transcript: string }>("/speech/transcribe", {
      method: "POST",
      authToken: token,
      body: JSON.stringify(payload),
    });
  },
  optimizeTts(token: string, payload: { text: string; language: string }) {
    return apiRequest<{ ok: boolean; text: string }>("/speech/optimize-tts", {
      method: "POST",
      authToken: token,
      body: JSON.stringify(payload),
    });
  },
};
