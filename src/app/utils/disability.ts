export const disabilityCategories = ["blind", "deaf", "mute", "mobility"] as const;

export type DisabilityCategory = (typeof disabilityCategories)[number];

export const disabilityLabels: Record<DisabilityCategory, string> = {
  blind: "Blind",
  deaf: "Deaf",
  mute: "Mute",
  mobility: "Mobility",
};

export const disabilityDescriptions: Record<DisabilityCategory, string> = {
  blind: "Screen reader support and Smart Blind Stick services.",
  deaf: "Real-time voice-to-text service.",
  mute: "Text-to-speech communication service.",
  mobility: "Mobility support modules are coming soon.",
};

export const disabilityDashboardPaths: Record<DisabilityCategory, string> = {
  blind: "/dashboard/blind",
  deaf: "/dashboard/deaf",
  mute: "/dashboard/mute",
  mobility: "/dashboard/mobility",
};

export function isDisabilityCategory(value: unknown): value is DisabilityCategory {
  return disabilityCategories.includes(String(value) as DisabilityCategory);
}

export function getDashboardPathForDisability(category?: string | null) {
  return isDisabilityCategory(category) ? disabilityDashboardPaths[category] : "/dashboard";
}
