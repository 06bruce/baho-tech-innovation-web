import { useCallback, useMemo, useRef, useState } from "react";
import { speechService } from "../../services/speechService";
import { fileToBase64 } from "../../utils/pageContext";

type Command = {
  phrase: string;
  action: (transcript: string) => void;
};

function normalizeCommand(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function publishVoiceStatus(state: "idle" | "listening" | "processing", message?: string) {
  window.dispatchEvent(new CustomEvent("baho-voice-status", { detail: { state, message } }));
}

export function useVoiceCommands(commands: Command[], language: string, token?: string | null, onUnhandledCommand?: (transcript: string) => void) {
  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const processingRef = useRef(false);
  const [isListening, setIsListening] = useState(false);
  const [lastCommand, setLastCommand] = useState("");
  const [error, setError] = useState("");
  const supported = typeof window !== "undefined" && "MediaRecorder" in window && Boolean(navigator.mediaDevices?.getUserMedia) && Boolean(token);

  const normalizedCommands = useMemo(
    () => commands.map((command) => ({ ...command, normalized: normalizeCommand(command.phrase) })),
    [commands]
  );

  const handleTranscript = useCallback(
    (transcript: string) => {
      const text = normalizeCommand(transcript);
      if (!text) return;

      setLastCommand(text);
      const match = normalizedCommands.find((command) => text.includes(command.normalized));
      if (match) match.action(transcript);
      else onUnhandledCommand?.(transcript);
    },
    [normalizedCommands, onUnhandledCommand]
  );

  const processAudio = useCallback(
    async (audioBlob: Blob) => {
      if (!token || processingRef.current || audioBlob.size < 1024) return;

      processingRef.current = true;
      publishVoiceStatus("processing", "Understanding voice command");
      try {
        const audioBase64 = await fileToBase64(audioBlob);
        const response = await speechService.transcribe(token, {
          audioBase64,
          mimeType: audioBlob.type || "audio/ogg",
          language,
        });
        handleTranscript(response.transcript);
        setError("");
      } catch (transcriptionError) {
        const message = transcriptionError instanceof Error ? transcriptionError.message : "Voice command transcription failed.";
        setError(message);
      } finally {
        processingRef.current = false;
        if (recorderRef.current?.state === "recording") publishVoiceStatus("listening", "Voice control active");
      }
    },
    [handleTranscript, language, token]
  );

  const start = useCallback(async () => {
    if (!supported || !token) {
      setError("Voice commands need microphone recording and an active session.");
      return;
    }

    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch (captureError) {
      const name = captureError instanceof DOMException ? captureError.name : "";
      setError(name === "NotAllowedError" ? "Microphone permission was blocked. Please allow microphone access and try again." : "Could not start voice command recording.");
      setIsListening(false);
      publishVoiceStatus("idle");
      return;
    }
    const preferredType = MediaRecorder.isTypeSupported("audio/ogg;codecs=opus")
      ? "audio/ogg;codecs=opus"
      : MediaRecorder.isTypeSupported("audio/ogg")
        ? "audio/ogg"
        : "audio/webm";
    const recorder = new MediaRecorder(stream, { mimeType: preferredType });
    streamRef.current = stream;
    recorderRef.current = recorder;
    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) void processAudio(event.data);
    };
    recorder.onerror = () => {
      setError("Voice command recording failed.");
      setIsListening(false);
      publishVoiceStatus("idle");
    };
    recorder.onstop = () => {
      stream.getTracks().forEach((track) => track.stop());
      setIsListening(false);
      if (recorderRef.current === recorder) publishVoiceStatus("idle");
    };
    try {
      recorder.start(5000);
      setError("");
      setIsListening(true);
      publishVoiceStatus("listening", "Voice control active");
    } catch (_error) {
      setIsListening(false);
      publishVoiceStatus("idle");
      setError("Could not start voice command recording. Please try again.");
    }
  }, [processAudio, supported, token]);

  const stop = useCallback(() => {
    const recorder = recorderRef.current;
    if (recorder && recorder.state !== "inactive") recorder.stop();
    streamRef.current?.getTracks().forEach((track) => track.stop());
    recorderRef.current = null;
    streamRef.current = null;
    setIsListening(false);
    publishVoiceStatus("idle");
  }, []);

  return { supported, isListening, lastCommand, error, start, stop };
}
