import { SUPPORTED_LANGUAGES } from "../../models/user.model.js";
import { buildTranslationPrompt } from "../../services/gemini.prompt-builders.js";
import { generateGeminiContent } from "../../services/gemini.service.js";

export function languageOptions(_req, res) {
  res.json({ ok: true, languages: SUPPORTED_LANGUAGES });
}

export async function translateDynamicContent(req, res, next) {
  try {
    const result = await generateGeminiContent({
      prompt: buildTranslationPrompt({
        text: req.body?.text || "",
        targetLanguage: req.body?.targetLanguage || req.user?.preferred_language || "en",
      }),
    });

    res.json({ ok: true, output: result.text });
  } catch (error) {
    next(error);
  }
}
