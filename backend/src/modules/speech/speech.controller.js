import { buildAudioTranscriptionPrompt, buildTtsOptimizationPrompt } from "../../services/gemini.prompt-builders.js";
import { generateGeminiContent } from "../../services/gemini.service.js";

export function capabilities(_req, res) {
  res.json({
    ok: true,
    provider: "browser-web-speech-api",
    textToSpeech: {
      mode: "client",
      languages: ["en", "rw", "fr", "sw"],
      notes: "Uses SpeechSynthesis in supported browsers. Voice availability depends on the user's device.",
    },
    speechToText: {
      mode: "client",
      languages: ["en", "rw", "fr", "sw"],
      notes: "Uses SpeechRecognition/webkitSpeechRecognition in supported browsers. Kinyarwanda recognition depends on browser support.",
    },
  });
}

export async function transcribeAudio(req, res, next) {
  try {
    const { audioBase64, mimeType, language } = req.body || {};
    if (!audioBase64 || !mimeType) {
      return res.status(400).json({ ok: false, error: "audioBase64 and mimeType are required." });
    }

    const result = await generateGeminiContent({
      prompt: buildAudioTranscriptionPrompt({ language: language || req.user?.preferred_language || "en" }),
      inlineData: { mimeType, data: audioBase64 },
    });

    res.json({ ok: true, transcript: result.text });
  } catch (error) {
    next(error);
  }
}

export async function optimizeTextForSpeech(req, res, next) {
  try {
    const result = await generateGeminiContent({
      prompt: buildTtsOptimizationPrompt({
        text: req.body?.text || "",
        language: req.body?.language || req.user?.preferred_language || "en",
      }),
    });

    res.json({ ok: true, text: result.text });
  } catch (error) {
    next(error);
  }
}
