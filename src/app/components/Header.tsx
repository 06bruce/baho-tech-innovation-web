import { Link } from "react-router";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  House,
  Target,
  Flag,
  Eye,
  Users,
  Briefcase,
  Cpu,
  Palette,
  Mic,
  AudioLines,
  MapPinned,
  Contact,
  LogIn,
  UserPlus,
  LayoutDashboard,
} from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { getDashboardPathForDisability } from "../utils/disability";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";
import { useTranslation } from "react-i18next";
import logoSrc from "/home/zera/Documents/Baho Tech Website Redesign/images/Radiant Sun with Interlocking Arrow Logo.png";

export function Header() {
  const { t } = useTranslation();
  const { user, isAuthenticated } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dashboardPath =
    user?.role === "admin" ? "/admin/dashboard" : getDashboardPathForDisability(user?.disabilityCategory);

  const linkBaseClass =
    "flex items-center gap-2 rounded-full px-4 py-2 text-gray-700 transition-colors hover:text-[#1C5B78]";
  const dropdownPanelClass =
    "absolute top-full left-0 z-20 w-64 rounded-3xl border border-[#d8e4ec] bg-white/95 p-3 shadow-xl backdrop-blur-md";
  const dropdownItemClass =
    "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-gray-700 transition-all hover:bg-[#1C5B78] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C5B78]/30";

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={logoSrc}
              alt="Baho Tech logo"
              className="w-16 h-16 object-contain"
            />
            <span className="text-2xl text-gray-900"></span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={linkBaseClass}>
              <House className="h-4 w-4" />
              {t("nav.home")}
            </Link>

            {/* About Us Dropdown */}
            <div
              className="relative pb-4 -mb-4"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button
                className={`${linkBaseClass} cursor-pointer`}
                onFocus={() => setAboutDropdownOpen(true)}
              >
                <span>{t("nav.about")}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {aboutDropdownOpen && (
                <div className={`${dropdownPanelClass} mt-1`}>
                  <Link
                    to="/about#mission"
                    className={dropdownItemClass}
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    <Target className="h-4 w-4 shrink-0" />
                    Mission
                  </Link>
                  <Link
                    to="/about#goals"
                    className={dropdownItemClass}
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    <Flag className="h-4 w-4 shrink-0" />
                    Goals
                  </Link>
                  <Link
                    to="/about#vision"
                    className={dropdownItemClass}
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    <Eye className="h-4 w-4 shrink-0" />
                    Vision
                  </Link>
                  <Link
                    to="/about#team"
                    className={dropdownItemClass}
                    onClick={() => setAboutDropdownOpen(false)}
                  >
                    <Users className="h-4 w-4 shrink-0" />
                    Team
                  </Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative pb-4 -mb-4"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                className={`${linkBaseClass} cursor-pointer`}
                onFocus={() => setServicesDropdownOpen(true)}
              >
                <span>{t("nav.services")}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {servicesDropdownOpen && (
                <div className={`${dropdownPanelClass} mt-1 w-72 space-y-1`}>
                  <div className="px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Services
                  </div>
                  <Link
                    to="/services#accessibility-consulting"
                    className={dropdownItemClass}
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <Briefcase className="h-4 w-4 shrink-0" />
                    Accessibility Consulting
                  </Link>
                  <Link
                    to="/services#assistive-tech-dev"
                    className={dropdownItemClass}
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <Cpu className="h-4 w-4 shrink-0" />
                    Assistive Tech Development
                  </Link>
                  <Link
                    to="/services#inclusive-design"
                    className={dropdownItemClass}
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <Palette className="h-4 w-4 shrink-0" />
                    Inclusive Design
                  </Link>
                  <div className="my-2 border-t border-[#d8e4ec]"></div>
                  <div className="px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Products
                  </div>
                  <Link
                    to="/services#voice-assistant"
                    className={dropdownItemClass}
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <Mic className="h-4 w-4 shrink-0" />
                    Voice Assistant
                  </Link>
                  <Link
                    to="/services#screen-reader"
                    className={dropdownItemClass}
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <AudioLines className="h-4 w-4 shrink-0" />
                    Screen Reader Plus
                  </Link>
                  <Link
                    to="/services#mobility-app"
                    className={dropdownItemClass}
                    onClick={() => setServicesDropdownOpen(false)}
                  >
                    <MapPinned className="h-4 w-4 shrink-0" />
                    Mobility Navigator
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact" className={linkBaseClass}>
              <Contact className="h-4 w-4" />
              {t("nav.contact")}
            </Link>
            <LanguageSwitcher compact />
            <ThemeToggle />

            {isAuthenticated ? (
              <Link
                to={dashboardPath}
                className="inline-flex items-center gap-2 rounded-full bg-[#1A4F8D] px-6 py-2 text-white transition-colors hover:bg-[#1C5B78]"
              >
                <LayoutDashboard className="h-4 w-4" />
                {t("nav.dashboard")}
              </Link>
            ) : (
              <>
                <Link to="/login" className={linkBaseClass}>
                  <LogIn className="h-4 w-4" />
                  {t("nav.login")}
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1A4F8D] px-6 py-2 text-white transition-colors hover:bg-[#1C5B78]"
                >
                  <UserPlus className="h-4 w-4" />
                  {t("nav.signup")}
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <Link
              to="/"
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-gray-700 transition-colors hover:bg-[#eef5f9] hover:text-[#1C5B78]"
              onClick={() => setMobileMenuOpen(false)}
            >
              <House className="h-4 w-4" />
              {t("nav.home")}
            </Link>
            <div className="py-2">
              <div className="px-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">About Us</div>
              <div className="pl-4 space-y-2 mt-2">
                <Link to="/about#mission" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-gray-600 transition-colors hover:bg-[#eef5f9] hover:text-[#1C5B78]" onClick={() => setMobileMenuOpen(false)}>
                  <Target className="h-4 w-4" />
                  Mission
                </Link>
                <Link to="/about#goals" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-gray-600 transition-colors hover:bg-[#eef5f9] hover:text-[#1C5B78]" onClick={() => setMobileMenuOpen(false)}>
                  <Flag className="h-4 w-4" />
                  Goals
                </Link>
                <Link to="/about#vision" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-gray-600 transition-colors hover:bg-[#eef5f9] hover:text-[#1C5B78]" onClick={() => setMobileMenuOpen(false)}>
                  <Eye className="h-4 w-4" />
                  Vision
                </Link>
                <Link to="/about#team" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-gray-600 transition-colors hover:bg-[#eef5f9] hover:text-[#1C5B78]" onClick={() => setMobileMenuOpen(false)}>
                  <Users className="h-4 w-4" />
                  Team
                </Link>
              </div>
            </div>
            <div className="py-2">
              <div className="px-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">Services</div>
              <div className="pl-4 space-y-2 mt-2">
                <Link to="/services" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-gray-600 transition-colors hover:bg-[#eef5f9] hover:text-[#1C5B78]" onClick={() => setMobileMenuOpen(false)}>
                  <Briefcase className="h-4 w-4" />
                  All Services & Products
                </Link>
              </div>
            </div>
            <Link to="/contact" className="flex items-center gap-3 rounded-2xl px-4 py-3 text-gray-700 transition-colors hover:bg-[#eef5f9] hover:text-[#1C5B78]" onClick={() => setMobileMenuOpen(false)}>
              <Contact className="h-4 w-4" />
              {t("nav.contact")}
            </Link>
            <div className="mt-3 flex flex-wrap gap-3 px-4">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            {isAuthenticated ? (
              <Link
                to={dashboardPath}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#1A4F8D] px-6 py-2 text-white hover:bg-[#1C5B78]"
                onClick={() => setMobileMenuOpen(false)}
              >
                <LayoutDashboard className="h-4 w-4" />
                {t("nav.dashboard")}
              </Link>
            ) : (
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 rounded-full border border-[#1A4F8D] px-6 py-2 text-[#1A4F8D] hover:bg-[#eef5f9]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <LogIn className="h-4 w-4" />
                  {t("nav.login")}
                </Link>
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1A4F8D] px-6 py-2 text-white hover:bg-[#1C5B78]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <UserPlus className="h-4 w-4" />
                  {t("nav.signup")}
                </Link>
              </div>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
