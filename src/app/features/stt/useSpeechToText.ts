import { useCallback, useRef, useState } from "react";
import { speechService } from "../../services/speechService";
import { fileToBase64 } from "../../utils/pageContext";

const HISTORY_KEY = "baho_stt_history";

export function useSpeechToText() {
  const recorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const [transcript, setTranscript] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState<string[]>(() => {
    try {
      return JSON.parse(window.localStorage.getItem(HISTORY_KEY) || "[]");
    } catch (_error) {
      return [];
    }
  });
  const supported = typeof window !== "undefined" && "MediaRecorder" in window && Boolean(navigator.mediaDevices?.getUserMedia);

  const saveTranscript = useCallback((text: string) => {
    const value = text.trim();
    if (!value) return;
    setHistory((current) => {
      const next = [value, ...current.filter((item) => item !== value)].slice(0, 8);
      window.localStorage.setItem(HISTORY_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const start = useCallback(async () => {
    if (!supported) {
      setError("This browser does not support microphone audio recording.");
      return;
    }

    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (captureError) {
      const name = captureError instanceof DOMException ? captureError.name : "";
      setIsListening(false);
      setError(
        name === "NotAllowedError"
          ? "Microphone permission was blocked. Please allow microphone access and try again."
          : "Could not start microphone recording. Please try again."
      );
      return;
    }
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
  }, [supported]);

  const stop = useCallback(
    async ({ token, language }: { token: string; language: string }) => {
      const recorder = recorderRef.current;
      if (!recorder) return;

      await new Promise<void>((resolve) => {
        recorder.onstop = () => {
          recorder.stream.getTracks().forEach((track) => track.stop());
          resolve();
        };
        if (recorder.state === "inactive") resolve();
        else recorder.stop();
      });

      setIsListening(false);
      const blob = new Blob(chunksRef.current, { type: recorder.mimeType || "audio/ogg" });
      recorderRef.current = null;

      try {
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
        setError("");
      } catch (transcriptionError) {
        const message = transcriptionError instanceof Error ? transcriptionError.message : "Audio transcription failed.";
        setError(message);
      }
    },
    [saveTranscript]
  );

  const clear = useCallback(() => {
    setTranscript("");
  }, []);

  return {
    supported,
    transcript,
    isListening,
    error,
    history,
    start,
    stop,
    clear,
  };
}
