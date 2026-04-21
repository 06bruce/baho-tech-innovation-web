import { buildTranslationPrompt, buildWritingPrompt } from "../../services/gemini.prompt-builders.js";
import { generateGeminiContent } from "../../services/gemini.service.js";

export async function assistWriting(req, res, next) {
  try {
    const result = await generateGeminiContent({
      prompt: buildWritingPrompt({
        input: req.body?.input || "",
        mode: req.body?.mode || "expand",
        language: req.body?.language || req.user?.preferred_language || "en",
      }),
    });
    res.json({ ok: true, output: result.text });
  } catch (error) {
    next(error);
  }
}

export async function translateWriting(req, res, next) {
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
