import { ServicePanel } from "../../components/dashboard/ServicePanel";
import { useTranslation } from "react-i18next";
import { TextToSpeechTool } from "../../features/tts/TextToSpeechTool";
import { WritingAssistantPanel } from "../../features/writing/WritingAssistantPanel";
import { SignLanguagePanel } from "../../features/sign-language/SignLanguagePanel";

export function MuteDashboard() {
  const { t } = useTranslation();
  return (
    <ServicePanel
      eyebrow={t("dashboard.muteEyebrow")}
      title={t("dashboard.muteTitle")}
      description={t("dashboard.muteDescription")}
    >
      <WritingAssistantPanel />
      <SignLanguagePanel />
      <TextToSpeechTool />
    </ServicePanel>
  );
}
