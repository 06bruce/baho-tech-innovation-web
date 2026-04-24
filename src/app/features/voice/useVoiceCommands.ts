import { useCallback, useMemo, useRef, useState } from "react";
import { speechService } from "../../services/speechService";
import { fileToBase64 } from "../../utils/pageContext";

const WAKE_WORD = "hey baho";
const COMMAND_RECORD_MS = 5000;

type Command = {
  phrase: string;
  action: (transcript: string) => void;
};

type SpeechRecognitionEvent = Event & { results: SpeechRecognitionResultList };

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

function createSpeechRecognition(language: string): SpeechRecognition | null {
  const SR = (window as unknown as { SpeechRecognition?: new () => SpeechRecognition; webkitSpeechRecognition?: new () => SpeechRecognition }).SpeechRecognition
    ?? (window as unknown as { webkitSpeechRecognition?: new () => SpeechRecognition }).webkitSpeechRecognition;
  if (!SR) return null;
  const sr = new SR();
  sr.continuous = true;
  sr.interimResults = false;
  sr.lang = language;
  return sr;
}

export function useVoiceCommands(commands: Command[], language: string, token?: string | null, onUnhandledCommand?: (transcript: string) => void) {
  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const srRef = useRef<SpeechRecognition | null>(null);
  const processingRef = useRef(false);
  const awaitingCommandRef = useRef(false);
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
        publishVoiceStatus("listening", "Say \"Hey Baho\" to activate");
      }
    },
    [handleTranscript, language, token]
  );

  const recordCommand = useCallback(async () => {
    if (awaitingCommandRef.current) return;
    awaitingCommandRef.current = true;
    publishVoiceStatus("processing", "Listening for command...");

    let stream: MediaStream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    } catch {
      awaitingCommandRef.current = false;
      publishVoiceStatus("listening", "Say \"Hey Baho\" to activate");
      return;
    }

    const preferredType = MediaRecorder.isTypeSupported("audio/ogg;codecs=opus")
      ? "audio/ogg;codecs=opus"
      : MediaRecorder.isTypeSupported("audio/ogg")
        ? "audio/ogg"
        : "audio/webm";

    const recorder = new MediaRecorder(stream, { mimeType: preferredType });
    const chunks: Blob[] = [];

    recorder.ondataavailable = (e) => { if (e.data.size > 0) chunks.push(e.data); };
    recorder.onstop = () => {
      stream.getTracks().forEach((t) => t.stop());
      awaitingCommandRef.current = false;
      const blob = new Blob(chunks, { type: preferredType });
      void processAudio(blob);
    };

    recorder.start();
    setTimeout(() => { if (recorder.state === "recording") recorder.stop(); }, COMMAND_RECORD_MS);
  }, [processAudio]);

  const start = useCallback(async () => {
    if (!supported || !token) {
      setError("Voice commands need microphone recording and an active session.");
      return;
    }

    const sr = createSpeechRecognition(language);
    if (!sr) {
      setError("Wake word detection is not supported in this browser.");
      return;
    }

    sr.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = Array.from(event.results)
        .map((r) => r[0].transcript)
        .join(" ");
      if (normalizeCommand(transcript).includes(normalizeCommand(WAKE_WORD))) {
        void recordCommand();
      }
    };

    sr.onerror = (e: Event & { error?: string }) => {
      if (e.error !== "no-speech" && e.error !== "aborted") {
        setError("Wake word detection error.");
      }
    };

    sr.onend = () => {
      if (srRef.current === sr && isListening) sr.start();
    };

    srRef.current = sr;
    sr.start();
    setError("");
    setIsListening(true);
    publishVoiceStatus("listening", "Say \"Hey Baho\" to activate");
  }, [isListening, language, recordCommand, supported, token]);

  const stop = useCallback(() => {
    srRef.current?.stop();
    srRef.current = null;
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
