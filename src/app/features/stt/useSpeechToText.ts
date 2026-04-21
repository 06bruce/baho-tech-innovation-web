import { useCallback, useRef, useState } from "react";
import { speechService } from "../../services/speechService";
import { fileToBase64 } from "../../utils/pageContext";

const HISTORY_KEY = "baho_stt_history";

type SpeechRecognitionConstructor = new () => {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((event: any) => void) | null;
  onerror: ((event: any) => void) | null;
  onend: (() => void) | null;
};

function getSpeechRecognition(): SpeechRecognitionConstructor | null {
  return (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition || null;
}

export function useSpeechToText() {
  const recognitionRef = useRef<InstanceType<SpeechRecognitionConstructor> | null>(null);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const [transcript, setTranscript] = useState("");
  const [interimTranscript, setInterimTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState<string[]>(() => {
    try {
      return JSON.parse(window.localStorage.getItem(HISTORY_KEY) || "[]");
    } catch (_error) {
      return [];
    }
  });
  const supported = Boolean(getSpeechRecognition());
  const fallbackSupported = "MediaRecorder" in window && navigator.mediaDevices?.getUserMedia;

  const saveTranscript = useCallback((text: string) => {
    const value = text.trim();
    if (!value) return;
    setHistory((current) => {
      const next = [value, ...current.filter((item) => item !== value)].slice(0, 8);
      window.localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const start = useCallback(
    (language: string) => {
      const Recognition = getSpeechRecognition();
      if (!Recognition) {
        setError("Speech recognition is not supported in this browser.");
        return;
      }

      setError("");
      const recognition = new Recognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = language;
      recognition.onresult = (event: any) => {
        let finalText = "";
        let interimText = "";
        for (let index = event.resultIndex; index < event.results.length; index += 1) {
          const result = event.results[index];
          if (result.isFinal) finalText += result[0].transcript;
          else interimText += result[0].transcript;
        }
        if (finalText) setTranscript((current) => `${current} ${finalText}`.trim());
        setInterimTranscript(interimText);
      };
      recognition.onerror = (event: any) => {
        setError(event.error ? `Microphone error: ${event.error}` : "Speech recognition failed.");
        setIsListening(false);
      };
      recognition.onend = () => setIsListening(false);
      recognitionRef.current = recognition;
      recognition.start();
      setIsListening(true);
    },
    []
  );

  const startFallbackRecording = useCallback(async () => {
    if (!fallbackSupported) {
      setError("This browser does not support speech recognition or audio recording fallback.");
      return;
    }

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const preferredType = MediaRecorder.isTypeSupported("audio/ogg;codecs=opus")
      ? "audio/ogg;codecs=opus"
      : MediaRecorder.isTypeSupported("audio/ogg")
        ? "audio/ogg"
        : "audio/webm";
    const recorder = new MediaRecorder(stream, { mimeType: preferredType });
    chunksRef.current = [];
    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) chunksRef.current.push(event.data);
    };
    recorder.onstop = () => {
      stream.getTracks().forEach((track) => track.stop());
    };
    recorderRef.current = recorder;
    recorder.start();
    setError("");
    setIsListening(true);
  }, [fallbackSupported]);

  const stopFallbackRecording = useCallback(
    async ({ token, language }: { token: string; language: string }) => {
      const recorder = recorderRef.current;
      if (!recorder) return;

      await new Promise<void>((resolve) => {
        recorder.onstop = () => {
          recorder.stream.getTracks().forEach((track) => track.stop());
          resolve();
        };
        recorder.stop();
      });

      setIsListening(false);
      const blob = new Blob(chunksRef.current, { type: recorder.mimeType || "audio/ogg" });
      const audioBase64 = await fileToBase64(blob);
      const response = await speechService.transcribe(token, {
        audioBase64,
        mimeType: blob.type || "audio/ogg",
        language,
      });
      setTranscript((current) => {
        const next = `${current} ${response.transcript}`.trim();
        saveTranscript(next);
        return next;
      });
    },
    [saveTranscript]
  );

  const stop = useCallback(() => {
    recognitionRef.current?.stop();
    setIsListening(false);
    setInterimTranscript("");
    setTranscript((current) => {
      saveTranscript(current);
      return current;
    });
  }, [saveTranscript]);

  const clear = useCallback(() => {
    setTranscript("");
    setInterimTranscript("");
  }, []);

  return {
    supported,
    fallbackSupported,
    transcript,
    interimTranscript,
    isListening,
    error,
    history,
    start,
    stop,
    startFallbackRecording,
    stopFallbackRecording,
    clear,
  };
}
