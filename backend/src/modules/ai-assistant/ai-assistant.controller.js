import { generateGeminiContent } from "../../services/gemini.service.js";
import {
  buildAiCommandPrompt,
  buildConversationPrompt,
  buildNavigationPrompt,
  buildScreenReaderPrompt,
} from "../../services/gemini.prompt-builders.js";

function parseJsonResponse(text) {
  const cleaned = String(text || "")
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```$/i, "")
    .trim();
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start === -1 || end === -1 || end <= start) return null;

  try {
    return JSON.parse(cleaned.slice(start, end + 1));
  } catch (_error) {
    return null;
  }
}

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

export async function command(req, res, next) {
  try {
    const result = await generateGeminiContent({
      prompt: buildAiCommandPrompt({
        command: req.body?.command || "",
        pageContext: req.body?.pageContext,
        user: req.user,
        language: req.body?.language || req.user?.preferred_language || "en",
      }),
      temperature: 0.2,
    });
    const parsed = parseJsonResponse(result.text);
    res.json({
      ok: true,
      response: parsed?.response || result.text || "I heard you, but I need a clearer command.",
      actions: Array.isArray(parsed?.actions) ? parsed.actions.slice(0, 3) : [{ type: "none" }],
    });
  } catch (error) {
    next(error);
  }
}
