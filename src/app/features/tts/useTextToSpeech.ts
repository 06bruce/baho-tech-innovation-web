import { useCallback, useEffect, useMemo, useState } from "react";

const HISTORY_KEY = "baho_tts_history";

export function useTextToSpeech() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [history, setHistory] = useState<string[]>(() => {
    try {
      return JSON.parse(window.localStorage.getItem(HISTORY_KEY) || "[]");
    } catch (_error) {
      return [];
    }
  });
  const supported = "speechSynthesis" in window;

  useEffect(() => {
    if (!supported) return;

    const loadVoices = () => setVoices(window.speechSynthesis.getVoices());
    loadVoices();
    window.speechSynthesis.addEventListener("voiceschanged", loadVoices);
    return () => window.speechSynthesis.removeEventListener("voiceschanged", loadVoices);
  }, [supported]);

  const savePhrase = useCallback((text: string) => {
    const phrase = text.trim();
    if (!phrase) return;
    setHistory((current) => {
      const next = [phrase, ...current.filter((item) => item !== phrase)].slice(0, 8);
      window.localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const speak = useCallback(
    ({ text, language, voiceURI }: { text: string; language: string; voiceURI?: string }) => {
      if (!supported || !text.trim()) return;

      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text.trim());
      utterance.lang = language;
      const selectedVoice =
        voices.find((voice) => voice.voiceURI === voiceURI) ||
        voices.find((voice) => voice.lang.toLowerCase().startsWith(language.slice(0, 2).toLowerCase()));
      if (selectedVoice) utterance.voice = selectedVoice;
      utterance.onstart = () => {
        setIsSpeaking(true);
        setIsPaused(false);
      };
      utterance.onend = () => {
        setIsSpeaking(false);
        setIsPaused(false);
      };
      utterance.onerror = () => {
        setIsSpeaking(false);
        setIsPaused(false);
      };
      savePhrase(text);
      window.speechSynthesis.speak(utterance);
    },
    [savePhrase, supported, voices]
  );

  const pause = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.pause();
    setIsPaused(true);
  }, [supported]);

  const resume = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.resume();
    setIsPaused(false);
  }, [supported]);

  const stop = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  }, [supported]);

  const availableVoices = useMemo(() => voices, [voices]);

  return { supported, voices: availableVoices, isSpeaking, isPaused, history, speak, pause, resume, stop };
}
