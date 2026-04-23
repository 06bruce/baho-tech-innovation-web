import { Clock, MapPinned, Settings } from "lucide-react";
import { ServicePanel } from "../../components/dashboard/ServicePanel";
import { useTranslation } from "react-i18next";

export function MobilityDashboard() {
  const { t } = useTranslation();
  return (
    <ServicePanel
      eyebrow={t("dashboard.mobilityEyebrow")}
      title={t("dashboard.mobilityTitle")}
      description={t("dashboard.mobilityDescription")}
    >
      <div className="grid gap-5 md:grid-cols-3">
        {[
          { icon: MapPinned, title: "Future route assistance", body: "Future plan for accessible navigation and route planning support." },
          { icon: Settings, title: "Future device setup", body: "Planned space for mobility device configuration in a later release." },
          { icon: Clock, title: "Coming soon", body: "Backend modules can be connected here as they are released." },
        ].map((item) => (
          <article key={item.title} className="rounded-3xl border border-[#d8e4ec] bg-white p-6 shadow-sm">
            <item.icon className="mb-4 h-8 w-8 text-[#1A4F8D]" aria-hidden="true" />
            <h3 className="text-2xl font-semibold text-gray-950">{item.title}</h3>
            <p className="mt-3 leading-7 text-gray-700">{item.body}</p>
          </article>
        ))}
      </div>
    </ServicePanel>
  );
}
