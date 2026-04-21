import { Headphones, Map, RadioTower, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ServicePanel } from "../../components/dashboard/ServicePanel";
import { TextToSpeechTool } from "../../features/tts/TextToSpeechTool";
import { VisionAssistPanel } from "../../features/vision/VisionAssistPanel";

export function BlindDashboard() {
  const { t } = useTranslation();
  return (
    <ServicePanel
      eyebrow={t("dashboard.blindEyebrow")}
      title={t("dashboard.blindTitle")}
      description={t("dashboard.blindDescription")}
    >
      <div className="grid gap-5 md:grid-cols-2">
        <article className="rounded-3xl border border-[#d8e4ec] bg-white p-6 shadow-sm">
          <Headphones className="mb-4 h-8 w-8 text-[#1A4F8D]" aria-hidden="true" />
          <h3 className="text-2xl font-semibold text-gray-950">Screen reader support</h3>
          <p className="mt-3 text-lg leading-8 text-gray-700">
            Request help configuring screen readers, accessible navigation, and device compatibility for daily use.
          </p>
          <button className="mt-6 rounded-full bg-[#1A4F8D] px-6 py-3 font-semibold text-white hover:bg-[#1C5B78] focus:outline-none focus:ring-4 focus:ring-[#1A4F8D]/25">
            Request support
          </button>
        </article>

        <article className="rounded-3xl border border-[#d8e4ec] bg-white p-6 shadow-sm">
          <RadioTower className="mb-4 h-8 w-8 text-[#1A4F8D]" aria-hidden="true" />
          <h3 className="text-2xl font-semibold text-gray-950">Smart Blind Stick</h3>
          <p className="mt-3 text-lg leading-8 text-gray-700">
            Track SBS onboarding, maintenance status, sensor checks, and future connected services from one place.
          </p>
          <button className="mt-6 rounded-full border border-[#1A4F8D] px-6 py-3 font-semibold text-[#1A4F8D] hover:bg-[#eef5f9] focus:outline-none focus:ring-4 focus:ring-[#1A4F8D]/25">
            View SBS service
          </button>
        </article>
      </div>

      <section className="rounded-3xl border border-[#d8e4ec] bg-white p-6 shadow-sm" aria-labelledby="blind-actions-title">
        <h3 id="blind-actions-title" className="text-2xl font-semibold text-gray-950">Quick actions</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {[
            { icon: ShieldCheck, label: "Check accessibility setup", body: "Review recommended settings and support status." },
            { icon: Map, label: "Navigation assistance", body: "Prepare for location-aware SBS modules." },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl bg-[#F5F7FA] p-5">
              <item.icon className="mb-3 h-6 w-6 text-[#1A4F8D]" aria-hidden="true" />
              <p className="text-lg font-semibold text-gray-950">{item.label}</p>
              <p className="mt-1 text-gray-700">{item.body}</p>
            </div>
          ))}
        </div>
      </section>
      <VisionAssistPanel />
      <TextToSpeechTool />
    </ServicePanel>
  );
}
