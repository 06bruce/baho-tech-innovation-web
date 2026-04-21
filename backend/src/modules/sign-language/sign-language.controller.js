import { buildSignLanguagePrompt } from "../../services/gemini.prompt-builders.js";
import { generateGeminiContent } from "../../services/gemini.service.js";

export async function interpretGesture(req, res, next) {
  try {
    const { imageBase64, mimeType, language } = req.body || {};
    if (!imageBase64 || !mimeType) {
      return res.status(400).json({ ok: false, error: "imageBase64 and mimeType are required." });
    }

    const result = await generateGeminiContent({
      prompt: buildSignLanguagePrompt({ language: language || req.user?.preferred_language || "en" }),
      inlineData: { mimeType, data: imageBase64 },
    });
    res.json({ ok: true, interpretation: result.text });
  } catch (error) {
    next(error);
  }
}
