import { Link, NavLink, Outlet, useNavigate } from "react-router";
import type { ComponentType } from "react";
import { Eye, Headphones, LayoutDashboard, LogOut, MessageSquareText, Mic, MoveRight, Settings, Users } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";
import {
  disabilityDashboardPaths,
  disabilityLabels,
  getDashboardPathForDisability,
  type DisabilityCategory,
} from "../../utils/disability";
import logoSrc from "../../../../images/Radiant Sun with Interlocking Arrow Logo.png";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { ThemeToggle } from "../ThemeToggle";
import { VoiceCommandPanel } from "../../features/voice/VoiceCommandPanel";
import { AiAssistantPanel } from "../../features/ai/AiAssistantPanel";
import { useTranslation } from "react-i18next";

const userLinks: Array<{ labelKey: string; path: string; category: DisabilityCategory; icon: ComponentType<{ className?: string }> }> = [
  { labelKey: "dashboard.blindService", path: disabilityDashboardPaths.blind, category: "blind", icon: Eye },
  { labelKey: "dashboard.deafService", path: disabilityDashboardPaths.deaf, category: "deaf", icon: Headphones },
  { labelKey: "dashboard.muteService", path: disabilityDashboardPaths.mute, category: "mute", icon: Mic },
  { labelKey: "dashboard.mobility", path: disabilityDashboardPaths.mobility, category: "mobility", icon: MoveRight },
];

function dashboardLinkClass({ isActive }: { isActive: boolean }) {
  return `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
    isActive ? "bg-[#1A4F8D] text-white" : "text-gray-700 hover:bg-[#eef5f9] hover:text-[#1A4F8D]"
  }`;
}

export function DashboardLayout() {
  const { user, logout } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const availableLinks =
    user?.role === "admin" ? userLinks : userLinks.filter((link) => link.category === user?.disabilityCategory);

  async function handleLogout() {
    await logout();
    navigate("/login", { replace: true });
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-gray-950 dark:bg-[#071A2D] dark:text-white">
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r border-[#d8e4ec] bg-white px-5 py-6 dark:border-white/10 dark:bg-[#0B1F33] lg:flex lg:flex-col">
        <Link to="/" className="mb-8 flex items-center gap-3">
          <img src={logoSrc} alt="Baho Tech logo" className="h-14 w-14 object-contain" />
          <span className="text-lg font-semibold text-gray-950">Baho Tech</span>
        </Link>

        <nav className="flex flex-1 flex-col gap-2" aria-label="Dashboard navigation">
          {user?.role === "admin" && (
            <NavLink to="/admin/dashboard" className={dashboardLinkClass}>
              <LayoutDashboard className="h-5 w-5" aria-hidden="true" />
              {t("dashboard.adminDashboard")}
            </NavLink>
          )}
          {availableLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={dashboardLinkClass}>
              <link.icon className="h-5 w-5" aria-hidden="true" />
              {t(link.labelKey)}
            </NavLink>
          ))}
          {user?.role === "admin" && (
            <NavLink to="/admin/users" className={dashboardLinkClass}>
              <Users className="h-5 w-5" aria-hidden="true" />
              {t("dashboard.userManagement")}
            </NavLink>
          )}
          {user?.role === "admin" && (
            <NavLink to="/admin/settings" className={dashboardLinkClass}>
              <Settings className="h-5 w-5" aria-hidden="true" />
              {t("dashboard.settings")}
            </NavLink>
          )}
        </nav>

        <div className="rounded-2xl bg-[#eef5f9] p-4 text-sm text-gray-700 dark:bg-[#102A43] dark:text-gray-200">
          <p className="font-semibold text-gray-950 dark:text-white">{user?.fullName}</p>
          <p>{user?.email}</p>
          {user?.role === "user" && user.disabilityCategory && (
            <p className="mt-2 font-semibold text-[#1A4F8D]">{disabilityLabels[user.disabilityCategory]} profile</p>
          )}
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 border-b border-[#d8e4ec] bg-white/95 backdrop-blur dark:border-white/10 dark:bg-[#0B1F33]/95">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1A4F8D]">
                {user?.role === "admin" ? t("dashboard.administration") : t("dashboard.assistiveWorkspace")}
              </p>
              <h1 className="text-2xl font-semibold text-gray-950 dark:text-white">
                {user?.role === "admin" ? t("dashboard.adminDashboard") : `${t("dashboard.welcome")}, ${user?.fullName}`}
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to={user?.role === "admin" ? "/admin/dashboard" : getDashboardPathForDisability(user?.disabilityCategory)}
                className="inline-flex items-center gap-2 rounded-full border border-[#d8e4ec] bg-white px-4 py-2 text-sm font-semibold text-gray-700 hover:border-[#1A4F8D] hover:text-[#1A4F8D]"
              >
                <MessageSquareText className="h-4 w-4" aria-hidden="true" />
                {t("nav.dashboard")}
              </Link>
              <LanguageSwitcher compact />
              <ThemeToggle />
              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center gap-2 rounded-full bg-[#1A4F8D] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1C5B78] focus:outline-none focus:ring-4 focus:ring-[#1A4F8D]/25"
              >
                <LogOut className="h-4 w-4" aria-hidden="true" />
                {t("nav.logout")}
              </button>
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-6">
            <VoiceCommandPanel />
          </div>
          <div className="mb-6">
            <AiAssistantPanel />
          </div>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
