import { Link } from "react-router";
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";
import logoSrc from "../../../images/Radiant Sun with Interlocking Arrow Logo.png";
import footerBackgroundSrc from "../../../images/footer.png";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gray-900 text-white">
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${footerBackgroundSrc})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[#08131b]/82"
        aria-hidden="true"
      />

      {/* Curved Top Border */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,70 C120,20 240,110 360,50 C480,-10 600,110 720,50 C840,-10 960,110 1080,50 C1140,20 1170,20 1200,35 L1200,120 L0,120 Z" fill="#111827"></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={logoSrc}
                alt="Baho Tech logo"
                className="w-16 h-16 object-contain"
              />
              <span className="text-2xl">Baho Tech</span>
            </div>
            <p className="text-gray-400">
              Creating innovative solutions for people with disabilities. Technology that empowers everyone.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-1/2 after:bg-[#1A4F8D] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#1C5B78] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#1C5B78] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#1C5B78] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#1C5B78] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-1/2 after:bg-[#1A4F8D] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
              Contact
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: Coming Soon</li>
              <li>+250 798745247</li>
              <li>123 Innovation Street</li>
              <li>kigali, Rwanda</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-1/2 after:bg-[#1A4F8D] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
              Newsletter
            </h3>
            <p className="text-gray-400 mb-4">Subscribe to our newsletter for updates</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#1A4F8D]"
              />
              <button
                type="submit"
                className="bg-[#1A4F8D] text-white px-4 py-2 rounded-lg hover:bg-[#1C5B78] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 py-6 border-t border-gray-800">
          <a href="#" className="text-gray-400 hover:text-[#1C5B78] transition-colors">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#1C5B78] transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#1C5B78] transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#1C5B78] transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-[#1C5B78] transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 pt-4 border-t border-gray-800">
          <p>&copy; 2026 Baho Tech. All rights reserved. Empowering lives through technology.</p>
        </div>
      </div>
    </footer>
  );
}
