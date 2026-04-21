import { useCallback, useMemo, useRef, useState } from "react";

type Command = {
  phrase: string;
  action: () => void;
};

type SpeechRecognitionConstructor = new () => {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  onresult: ((event: any) => void) | null;
  onerror: ((event: any) => void) | null;
  onend: (() => void) | null;
};

function getSpeechRecognition(): SpeechRecognitionConstructor | null {
  return (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition || null;
}

export function useVoiceCommands(commands: Command[], language: string) {
  const recognitionRef = useRef<InstanceType<SpeechRecognitionConstructor> | null>(null);
  const manuallyStoppedRef = useRef(false);
  const [isListening, setIsListening] = useState(false);
  const [lastCommand, setLastCommand] = useState("");
  const [error, setError] = useState("");
  const supported = Boolean(getSpeechRecognition());

  const normalizedCommands = useMemo(
    () => commands.map((command) => ({ ...command, normalized: command.phrase.toLowerCase() })),
    [commands]
  );

  const start = useCallback(() => {
    const Recognition = getSpeechRecognition();
    if (!Recognition) {
      setError("Voice commands are not supported in this browser.");
      return;
    }

    manuallyStoppedRef.current = false;
    const recognition = new Recognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = language;
    recognition.onresult = (event: any) => {
      const text = event.results[event.results.length - 1][0].transcript.toLowerCase().trim();
      setLastCommand(text);
      const match = normalizedCommands.find((command) => text.includes(command.normalized));
      if (match) match.action();
    };
    recognition.onerror = (event: any) => {
      setError(event.error ? `Voice command error: ${event.error}` : "Voice command recognition failed.");
      setIsListening(false);
    };
    recognition.onend = () => {
      setIsListening(false);
      if (!manuallyStoppedRef.current) {
        window.setTimeout(() => {
          try {
            recognition.start();
            setIsListening(true);
          } catch (_error) {
            setIsListening(false);
          }
        }, 350);
      }
    };
    recognitionRef.current = recognition;
    recognition.start();
    setError("");
    setIsListening(true);
  }, [language, normalizedCommands]);

  const stop = useCallback(() => {
    manuallyStoppedRef.current = true;
    recognitionRef.current?.stop();
    setIsListening(false);
  }, []);

  return { supported, isListening, lastCommand, error, start, stop };
}
