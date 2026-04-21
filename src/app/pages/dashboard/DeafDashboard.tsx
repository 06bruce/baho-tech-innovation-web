import { ServicePanel } from "../../components/dashboard/ServicePanel";
import { useTranslation } from "react-i18next";
import { SpeechToTextTool } from "../../features/stt/SpeechToTextTool";
import { WritingAssistantPanel } from "../../features/writing/WritingAssistantPanel";

export function DeafDashboard() {
  const { t } = useTranslation();
  return (
    <ServicePanel
      eyebrow={t("dashboard.deafEyebrow")}
      title={t("dashboard.deafTitle")}
      description={t("dashboard.deafDescription")}
    >
      <SpeechToTextTool />
      <WritingAssistantPanel />
    </ServicePanel>
  );
}
