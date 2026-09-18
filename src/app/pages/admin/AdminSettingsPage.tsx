import { useMemo, useState } from "react";
import { ShieldCheck } from "lucide-react";
import { FormAlert } from "../../components/auth/FormAlert";
import { useAuth } from "../../hooks/useAuth";
import { getVoiceCommandsEnabled, isMainAdmin, setVoiceCommandsEnabled } from "../../utils/voiceSettings";

type AdminSettingsState = {
  roleApproval: boolean;
  emailAlerts: boolean;
  maintenanceMode: boolean;
  serviceAutoAssign: boolean;
  defaultLanguage: string;
  adminEmail: string;
  voiceCommands: boolean;
};

const initialSettings: AdminSettingsState = {
  roleApproval: true,
  emailAlerts: true,
  maintenanceMode: false,
  serviceAutoAssign: true,
  defaultLanguage: "en",
  adminEmail: "admin@bahotech.com",
  voiceCommands: getVoiceCommandsEnabled(),
};

export function AdminSettingsPage() {
  const { user } = useAuth();
  const [settings, setSettings] = useState<AdminSettingsState>(initialSettings);
  const [savedMessage, setSavedMessage] = useState("");
  const isMainAdminUser = useMemo(() => isMainAdmin(user), [user]);

  function updateSetting<K extends keyof AdminSettingsState>(key: K, value: AdminSettingsState[K]) {
    setSettings((current) => ({ ...current, [key]: value }));
    setSavedMessage("");
  }

  function handleSave(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setVoiceCommandsEnabled(settings.voiceCommands);
    setSavedMessage("Admin settings saved successfully.");
  }

  return (
    <section className="rounded-3xl border border-[#d8e4ec] bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-3">
        <ShieldCheck className="h-8 w-8 text-[#1A4F8D]" aria-hidden="true" />
        <div>
          <h2 className="text-2xl font-semibold text-gray-950">Admin settings</h2>
          <p className="mt-1 text-gray-600">Manage access, alerts, and service defaults for the admin workspace.</p>
        </div>
      </div>

      {savedMessage && <div className="mb-5"><FormAlert tone="success">{savedMessage}</FormAlert></div>}

      <form onSubmit={handleSave} className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5 rounded-2xl border border-[#d8e4ec] bg-[#F5F7FA] p-5">
          <label className="flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white px-4 py-3">
            <span>
              <span className="block font-semibold text-gray-900">Require admin approval</span>
              <span className="text-sm text-gray-600">Approval before adding new admin roles</span>
            </span>
            <input
              type="checkbox"
              checked={settings.roleApproval}
              onChange={(event) => updateSetting("roleApproval", event.target.checked)}
              className="h-5 w-5 accent-[#1A4F8D]"
            />
          </label>

          <label className="flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white px-4 py-3">
            <span>
              <span className="block font-semibold text-gray-900">Email alerts</span>
              <span className="text-sm text-gray-600">Notify admins about account and service events</span>
            </span>
            <input
              type="checkbox"
              checked={settings.emailAlerts}
              onChange={(event) => updateSetting("emailAlerts", event.target.checked)}
              className="h-5 w-5 accent-[#1A4F8D]"
            />
          </label>

          <label className="flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white px-4 py-3">
            <span>
              <span className="block font-semibold text-gray-900">Maintenance mode</span>
              <span className="text-sm text-gray-600">Temporarily disable public access to some modules</span>
            </span>
            <input
              type="checkbox"
              checked={settings.maintenanceMode}
              onChange={(event) => updateSetting("maintenanceMode", event.target.checked)}
              className="h-5 w-5 accent-[#1A4F8D]"
            />
          </label>

          <label className="flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white px-4 py-3">
            <span>
              <span className="block font-semibold text-gray-900">Auto-assign services</span>
              <span className="text-sm text-gray-600">Automatically route users to their matching dashboard</span>
            </span>
            <input
              type="checkbox"
              checked={settings.serviceAutoAssign}
              onChange={(event) => updateSetting("serviceAutoAssign", event.target.checked)}
              className="h-5 w-5 accent-[#1A4F8D]"
            />
          </label>

          <label className="flex items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-white px-4 py-3">
            <span>
              <span className="block font-semibold text-gray-900">Enable voice commands</span>
              <span className="text-sm text-gray-600">
                {isMainAdminUser ? "Main admin only" : "Locked to the main admin"}
              </span>
            </span>
            <input
              type="checkbox"
              checked={settings.voiceCommands}
              disabled={!isMainAdminUser}
              onChange={(event) => updateSetting("voiceCommands", event.target.checked)}
              className="h-5 w-5 accent-[#1A4F8D] disabled:cursor-not-allowed disabled:opacity-50"
            />
          </label>
        </div>

        <div className="space-y-5 rounded-2xl border border-[#d8e4ec] bg-[#F5F7FA] p-5">
          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-gray-700">Default language</span>
            <select
              value={settings.defaultLanguage}
              onChange={(event) => updateSetting("defaultLanguage", event.target.value)}
              className="h-11 w-full rounded-xl border border-gray-300 bg-white px-3 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15"
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="sw">Kiswahili</option>
              <option value="rw">Kinyarwanda</option>
            </select>
          </label>

          <label className="block">
            <span className="mb-1 block text-sm font-semibold text-gray-700">Admin contact email</span>
            <input
              type="email"
              value={settings.adminEmail}
              onChange={(event) => updateSetting("adminEmail", event.target.value)}
              className="h-11 w-full rounded-xl border border-gray-300 bg-white px-3 outline-none focus:border-[#1A4F8D] focus:ring-4 focus:ring-[#1A4F8D]/15"
            />
          </label>

          {!isMainAdminUser && (
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
              Voice commands are controlled by the main admin account only.
            </div>
          )}

          <div className="rounded-2xl border border-dashed border-[#bfd5ea] bg-white p-4 text-sm text-gray-600">
            These settings are active in the admin workspace and ready for backend persistence when you connect the config API.
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-[#1A4F8D] px-5 py-3 font-semibold text-white hover:bg-[#1C5B78] focus:outline-none focus:ring-4 focus:ring-[#1A4F8D]/25"
          >
            Save settings
          </button>
        </div>
      </form>
    </section>
  );
}
