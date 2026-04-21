import { useRef, useState } from "react";
import { Camera, ImagePlus, Volume2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FormAlert } from "../../components/auth/FormAlert";
import { useAuth } from "../../hooks/useAuth";
import { visionService } from "../../services/visionService";
import { fileToBase64 } from "../../utils/pageContext";
import { speechCodeForAppLanguage } from "../speech/languages";
import { useTextToSpeech } from "../tts/useTextToSpeech";

export function VisionAssistPanel() {
  const { token } = useAuth();
  const { i18n, t } = useTranslation();
  const { speak } = useTextToSpeech();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [cameraActive, setCameraActive] = useState(false);

  async function startCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      streamRef.current = stream;
      if (videoRef.current) videoRef.current.srcObject = stream;
      setCameraActive(true);
    } catch (_error) {
      setError(t("vision.permissionError"));
    }
  }

  async function analyzeBlob(blob: Blob) {
    if (!token) return;
    setIsLoading(true);
    setError("");
    try {
      const imageBase64 = await fileToBase64(blob);
      const response = await visionService.analyze(token, {
        imageBase64,
        mimeType: blob.type || "image/jpeg",
        task: "Describe this scene for a blind user. Include text, objects, people, and safety concerns.",
        language: i18n.language,
      });
      setDescription(response.description);
      speak({ text: response.description, language: speechCodeForAppLanguage(i18n.language) });
    } catch (apiError) {
      setError(apiError instanceof Error ? apiError.message : t("vision.failed"));
    } finally {
      setIsLoading(false);
    }
  }

  function captureFrame() {
    const video = videoRef.current;
    if (!video) return;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    canvas.getContext("2d")?.drawImage(video, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => blob && void analyzeBlob(blob), "image/jpeg", 0.9);
  }

  return (
    <section className="rounded-3xl border border-[#d8e4ec] bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0B1F33]" aria-labelledby="vision-title">
      <h3 id="vision-title" className="text-2xl font-semibold text-gray-950 dark:text-white">{t("vision.title")}</h3>
      <div className="mt-4 space-y-3">
        {error && <FormAlert tone="error">{error}</FormAlert>}
        {description && <FormAlert tone="info">{description}</FormAlert>}
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_260px]">
        <video ref={videoRef} autoPlay playsInline muted className="min-h-64 w-full rounded-2xl bg-[#102A43] object-cover" aria-label={t("vision.cameraPreview")} />
        <div className="space-y-3">
          <button type="button" onClick={() => void startCamera()} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1A4F8D] px-5 py-3 font-semibold text-white hover:bg-[#1C5B78]">
            <Camera className="h-5 w-5" aria-hidden="true" /> {t("vision.startCamera")}
          </button>
          <button type="button" onClick={captureFrame} disabled={!cameraActive || isLoading} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#1A4F8D] px-5 py-3 font-semibold text-[#1A4F8D] hover:bg-[#eef5f9] disabled:opacity-60 dark:border-[#FEC629] dark:text-[#FEC629]">
            <ImagePlus className="h-5 w-5" aria-hidden="true" /> {t("vision.analyzeScene")}
          </button>
          <button type="button" onClick={() => description && speak({ text: description, language: speechCodeForAppLanguage(i18n.language) })} disabled={!description} className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gray-300 px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-60 dark:border-white/15 dark:text-white">
            <Volume2 className="h-5 w-5" aria-hidden="true" /> {t("vision.speakResult")}
          </button>
        </div>
      </div>
    </section>
  );
}
