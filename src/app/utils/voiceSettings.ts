export const MAIN_ADMIN_EMAIL = "admin@bahotech.com";
export const VOICE_COMMANDS_STORAGE_KEY = "baho_voice_commands_enabled";

export function isMainAdmin(user?: { email?: string | null; role?: string | null } | null) {
  return user?.role === "admin" && String(user.email || "").trim().toLowerCase() === MAIN_ADMIN_EMAIL;
}

export function getVoiceCommandsEnabled() {
  try {
    return localStorage.getItem(VOICE_COMMANDS_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

export function setVoiceCommandsEnabled(enabled: boolean) {
  try {
    localStorage.setItem(VOICE_COMMANDS_STORAGE_KEY, String(enabled));
  } catch {
    // ignore storage failures
  }
}
