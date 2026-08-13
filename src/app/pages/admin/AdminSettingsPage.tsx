import { ShieldCheck } from "lucide-react";
import { FormAlert } from "../../components/auth/FormAlert";

export function AdminSettingsPage() {
  return (
    <>
      <section className="rounded-3xl border border-[#d8e4ec] bg-white p-6 shadow-sm">
        <ShieldCheck
          className="mb-4 h-8 w-8 text-[#1A4F8D]"
          aria-hidden="true"
        />
        <h2 className="text-2xl font-semibold text-gray-950">Admin settings</h2>
        <p className="mt-2 max-w-3xl text-gray-600">
          This structure is ready for admin preferences, role management,
          notification settings, and service configuration.
        </p>
        <div className="mt-6">
          <FormAlert tone="info">
            Settings are scaffolded for future backend configuration modules.
          </FormAlert>
        </div>
      </section>
    </>
  );
}
