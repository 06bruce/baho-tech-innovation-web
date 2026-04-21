import { env } from "../config/env.js";

const GEMINI_BASE_URL = "https://generativelanguage.googleapis.com/v1beta";

function assertGeminiConfigured() {
  if (!env.gemini.apiKey) {
    const error = new Error("Gemini API key is not configured. Set GEMINI_API_KEY in the backend environment.");
    error.status = 503;
    throw error;
  }
}

function extractText(payload) {
  return (
    payload?.candidates?.[0]?.content?.parts
      ?.map((part) => part.text)
      .filter(Boolean)
      .join("\n")
      .trim() || ""
  );
}

export async function generateGeminiContent({ prompt, inlineData, temperature = 0.4 }) {
  assertGeminiConfigured();

  const parts = [{ text: prompt }];
  if (inlineData?.data && inlineData?.mimeType) {
    parts.push({
      inlineData: {
        mimeType: inlineData.mimeType,
        data: inlineData.data,
      },
    });
  }

  const response = await fetch(
    `${GEMINI_BASE_URL}/models/${env.gemini.model}:generateContent?key=${encodeURIComponent(env.gemini.apiKey)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{ role: "user", parts }],
        generationConfig: {
          temperature,
          topP: 0.9,
        },
      }),
    }
  );

  const payload = await response.json().catch(() => null);
  if (!response.ok) {
    const error = new Error(payload?.error?.message || "Gemini request failed.");
    error.status = response.status;
    throw error;
  }

  return {
    text: extractText(payload),
    raw: payload,
  };
}
