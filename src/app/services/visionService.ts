import { apiRequest } from "./apiClient";

export const visionService = {
  analyze(token: string, payload: { imageBase64: string; mimeType: string; task?: string; language: string }) {
    return apiRequest<{ ok: boolean; description: string }>("/vision/analyze", {
      method: "POST",
      authToken: token,
      body: JSON.stringify(payload),
    });
  },
};
