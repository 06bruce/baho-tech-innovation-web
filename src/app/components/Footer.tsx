import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { Linkedin, Instagram, Mail } from "lucide-react";
import logoSrc from "../../../images/Radiant Sun with Interlocking Arrow Logo.png";
import footerBackgroundSrc from "../../../images/footer.png";

const socialLinks = [
  { network: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/baho-tech/" },
  { network: "Instagram", icon: Instagram, url: "https://www.instagram.com/bahoinclusivetech/" },
] as const;

export function Footer() {
  const { t } = useTranslation();

  const headingClass =
    "text-lg mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-1/2 after:bg-[#1A4F8D] after:rounded-full after:transition-all after:duration-500 hover:after:w-full";
  const linkClass =
    "text-gray-400 hover:text-[#1C5B78] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FEC629] rounded";

  return (
    <footer className="relative min-h-[460px] overflow-hidden bg-gray-900 text-white">
      <img
        src={footerBackgroundSrc}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-center"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#08131b]/82" aria-hidden="true" />

      {/* Curved Top Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none" aria-hidden="true">
        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,70 C120,20 240,110 360,50 C480,-10 600,110 720,50 C840,-10 960,110 1080,50 C1140,20 1170,20 1200,35 L1200,120 L0,120 Z" fill="#111827"></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logoSrc} alt="Baho Tech logo" className="w-16 h-16 object-contain" />
              <span className="text-2xl">Baho Tech</span>
            </div>
            <p className="text-gray-400">{t("footer.tagline")}</p>
          </div>

          {/* Quick Links */}
          <nav aria-labelledby="footer-quick-links">
            <h2 id="footer-quick-links" className={headingClass}>
              {t("footer.quickLinks")}
            </h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className={linkClass}>
                  {t("nav.home")}
                </Link>
              </li>
              <li>
                <Link to="/about" className={linkClass}>
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link to="/services" className={linkClass}>
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className={linkClass}>
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h2 className={headingClass}>{t("footer.contactHeading")}</h2>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:bahoinclusivetech@gmail.com" className={linkClass}>
                  bahoinclusivetech@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+250798745247" className={linkClass}>
                  +250 798745247
                </a>
              </li>
              <li>Norrsken House Kigali</li>
              <li>1 KN 78 St, Kigali, Rwanda</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className={headingClass}>{t("footer.newsletter")}</h2>
            <p className="text-gray-400 mb-4">{t("footer.newsletterIntro")}</p>
            <form className="flex flex-col space-y-2">
              <label htmlFor="footer-newsletter-email" className="sr-only">
                {t("footer.emailLabel")}
              </label>
              <input
                id="footer-newsletter-email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder={t("footer.emailPlaceholder")}
                className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-[#1A4F8D] focus-visible:ring-2 focus-visible:ring-[#FEC629]"
              />
              <button
                type="submit"
                className="bg-[#1A4F8D] text-white px-4 py-2 rounded-lg hover:bg-[#1C5B78] transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FEC629]/50"
              >
                {t("footer.subscribe")}
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="py-6 border-t border-gray-800">
          <h2 className="sr-only">{t("footer.socialHeading")}</h2>
          <ul className="flex justify-center space-x-6">
            {socialLinks.map(({ network, icon: Icon, url }) => (
              <li key={network}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                  aria-label={t("footer.followOn", { network })}
                >
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </a>
              </li>
            ))}
            <li>
              <a
                href="mailto:bahoinclusivetech@gmail.com"
                className={linkClass}
                aria-label={t("footer.emailUs")}
              >
                <Mail className="w-6 h-6" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 pt-4 border-t border-gray-800">
          <p>{t("footer.rights", { year: new Date().getFullYear() })}</p>
        </div>
      </div>
    </footer>
  );
}
