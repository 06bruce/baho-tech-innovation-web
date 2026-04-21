import { generateGeminiContent } from "../../services/gemini.service.js";
import {
  buildConversationPrompt,
  buildNavigationPrompt,
  buildScreenReaderPrompt,
} from "../../services/gemini.prompt-builders.js";

export async function navigationHelp(req, res, next) {
  try {
    const result = await generateGeminiContent({
      prompt: buildNavigationPrompt({
        message: req.body?.message || "Help me use this page.",
        pageContext: req.body?.pageContext,
        user: req.user,
        language: req.body?.language || req.user?.preferred_language || "en",
      }),
    });
    res.json({ ok: true, response: result.text });
  } catch (error) {
    next(error);
  }
}

export async function screenReaderSummary(req, res, next) {
  try {
    const result = await generateGeminiContent({
      prompt: buildScreenReaderPrompt({
        pageContext: req.body?.pageContext,
        user: req.user,
        language: req.body?.language || req.user?.preferred_language || "en",
      }),
    });
    res.json({ ok: true, response: result.text });
  } catch (error) {
    next(error);
  }
}

export async function conversation(req, res, next) {
  try {
    const result = await generateGeminiContent({
      prompt: buildConversationPrompt({
        messages: req.body?.messages || [],
        pageContext: req.body?.pageContext,
        user: req.user,
        language: req.body?.language || req.user?.preferred_language || "en",
      }),
    });
    res.json({ ok: true, response: result.text });
  } catch (error) {
    next(error);
  }
}
