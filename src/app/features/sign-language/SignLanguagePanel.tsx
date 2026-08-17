import { useRef, useState } from "react";
import { Camera, Hand, Volume2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FormAlert } from "../../components/auth/FormAlert";
import { useAuth } from "../../hooks/useAuth";
import { signLanguageService } from "../../services/signLanguageService";
import { fileToBase64 } from "../../utils/pageContext";
import { speechCodeForAppLanguage } from "../speech/languages";
import { useTextToSpeech } from "../tts/useTextToSpeech";

export function SignLanguagePanel() {
  const { token } = useAuth();
  const { i18n, t } = useTranslation();
  const { speak } = useTextToSpeech();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [interpretation, setInterpretation] = useState("");
  const [error, setError] = useState("");
  const [cameraActive, setCameraActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) videoRef.current.srcObject = stream;
      setCameraActive(true);
    } catch (_error) {
      setError(t("sign.permissionError"));
    }
  }

  function captureGesture() {
    const video = videoRef.current;
    if (!video || !token) return;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    canvas.getContext("2d")?.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob(async (blob) => {
      if (!blob) return;
      setIsLoading(true);
      setError("");
      try {
        const imageBase64 = await fileToBase64(blob);
        const response = await signLanguageService.interpret(token, {
          imageBase64,
          mimeType: "image/jpeg",
          language: i18n.language,
        });
        setInterpretation(response.interpretation);
      } catch (apiError) {
        setError(apiError instanceof Error ? apiError.message : t("sign.failed"));
      } finally {
        setIsLoading(false);
      }
    }, "image/jpeg", 0.9);
  }

  return (
    <section className="rounded-3xl border border-[#d8e4ec] bg-white p-6 shadow-sm" aria-labelledby="sign-title">
      <h3 id="sign-title" className="text-2xl font-semibold text-gray-950">{t("sign.title")}</h3>
      <div className="mt-4 space-y-3">
        {error && <FormAlert tone="error">{error}</FormAlert>}
        {interpretation && <FormAlert tone="success">{interpretation}</FormAlert>}
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_260px]">
        <video ref={videoRef} autoPlay playsInline muted className="min-h-64 w-full rounded-2xl bg-[#102A43] object-cover" aria-label={t("sign.cameraPreview")} />
        <div className="space-y-3">
          <button type="button" onClick={() => void startCamera()} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1A4F8D] px-5 py-3 font-semibold text-white hover:bg-[#1C5B78]">
            <Camera className="h-5 w-5" aria-hidden="true" /> {t("sign.startCamera")}
          </button>
          <button type="button" onClick={captureGesture} disabled={!cameraActive || isLoading} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#1A4F8D] px-5 py-3 font-semibold text-[#1A4F8D] hover:bg-[#eef5f9] disabled:opacity-60">
            <Hand className="h-5 w-5" aria-hidden="true" /> {t("sign.interpretGesture")}
          </button>
          <button type="button" onClick={() => interpretation && speak({ text: interpretation, language: speechCodeForAppLanguage(i18n.language) })} disabled={!interpretation} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-60">
            <Volume2 className="h-5 w-5" aria-hidden="true" /> {t("sign.speakResult")}
          </button>
        </div>
      </div>
    </section>
  );
}
