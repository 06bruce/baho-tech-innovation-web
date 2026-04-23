import { useEffect, useState } from "react";
import { Mic } from "lucide-react";

type VoiceState = "idle" | "listening" | "processing";

type VoiceCommandEvent = CustomEvent<{
  state: VoiceState;
  message?: string;
}>;

export function VoiceCommandIndicator() {
  const [state, setState] = useState<VoiceState>("idle");
  const [message, setMessage] = useState("Voice control active");

  useEffect(() => {
    function handleStatus(event: Event) {
      const detail = (event as VoiceCommandEvent).detail;
      setState(detail?.state || "idle");
      if (detail?.message) setMessage(detail.message);
    }

    window.addEventListener("baho-voice-status", handleStatus);
    return () => window.removeEventListener("baho-voice-status", handleStatus);
  }, []);

  if (state === "idle") return null;

  return (
    <div className="fixed bottom-5 left-1/2 z-[130] -translate-x-1/2 px-4 sm:px-0" role="status" aria-live="polite">
      <div className="flex items-center gap-3 rounded-full border border-white/30 bg-[#0B1F33]/95 px-4 py-3 text-white shadow-2xl backdrop-blur-md">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A4F8D] text-white shadow-lg">
          <Mic className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold">{message}</span>
          <span className="mt-1 flex h-4 items-end gap-1" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((item) => (
              <span
                key={item}
                className="w-1.5 rounded-full bg-[#FEC629] animate-pulse"
                style={{
                  height: `${8 + (item % 3) * 4}px`,
                  animationDelay: `${item * 110}ms`,
                }}
              />
            ))}
          </span>
        </span>
      </div>
    </div>
  );
}
