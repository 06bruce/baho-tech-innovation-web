import { Link } from "react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import logoSrc from "../../../images/Radiant Sun with Interlocking Arrow Logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

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
            <Link to="/" className="text-gray-700 hover:text-[#1C5B78] transition-colors">
              Home
            </Link>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutDropdownOpen(true)}
              onMouseLeave={() => setAboutDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#1C5B78] transition-colors">
                <span>About Us</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {aboutDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl rounded-xl py-2 overflow-hidden">
                  <Link to="/about#mission" className="block px-4 py-2 text-gray-700 hover:bg-[#1C5B78] hover:text-white transition-colors">
                    Mission
                  </Link>
                  <Link to="/about#goals" className="block px-4 py-2 text-gray-700 hover:bg-[#1C5B78] hover:text-white transition-colors">
                    Goals
                  </Link>
                  <Link to="/about#vision" className="block px-4 py-2 text-gray-700 hover:bg-[#1C5B78] hover:text-white transition-colors">
                    Vision
                  </Link>
                  <Link to="/about#team" className="block px-4 py-2 text-gray-700 hover:bg-[#1C5B78] hover:text-white transition-colors">
                    Team
                  </Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#1C5B78] transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-60 bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl rounded-xl py-2 overflow-hidden">
                  <div className="px-4 py-2 text-xs text-gray-500 uppercase">Services</div>
                  <Link to="/services#accessibility-consulting" className="block px-4 py-2 text-gray-700 hover:bg-[#1C5B78] hover:text-white transition-colors">
                    Accessibility Consulting
                  </Link>
                  <Link to="/services#assistive-tech-dev" className="block px-4 py-2 text-gray-700 hover:bg-[#1C5B78] hover:text-white transition-colors">
                    Assistive Tech Development
                  </Link>
                  <Link to="/services#inclusive-design" className="block px-4 py-2 text-gray-700 hover:bg-[#1C5B78] hover:text-white transition-colors">
                    Inclusive Design
                  </Link>
                  <div className="border-t border-gray-200 my-2"></div>
                  <div className="px-4 py-2 text-xs text-gray-500 uppercase">Products</div>
                  <Link to="/services#voice-assistant" className="block px-4 py-2 text-gray-700 hover:bg-[#1C5B78] hover:text-white transition-colors">
                    Voice Assistant
                  </Link>
                  <Link to="/services#screen-reader" className="block px-4 py-2 text-gray-700 hover:bg-[#1C5B78] hover:text-white transition-colors">
                    Screen Reader Plus
                  </Link>
                  <Link to="/services#mobility-app" className="block px-4 py-2 text-gray-700 hover:bg-[#1C5B78] hover:text-white transition-colors">
                    Mobility Navigator
                  </Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-700 hover:text-[#1C5B78] transition-colors">
              Contact
            </Link>

            <Link
              to="/contact"
              className="bg-[#1A4F8D] text-white px-6 py-2 rounded-full hover:bg-[#1C5B78] transition-colors"
            >
              Support Us
            </Link>
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
            <Link to="/" className="block py-2 text-gray-700 hover:text-[#1C5B78]" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <div className="py-2">
              <div className="text-gray-900">About Us</div>
              <div className="pl-4 space-y-2 mt-2">
                <Link to="/about#mission" className="block text-gray-600 hover:text-[#1C5B78]" onClick={() => setMobileMenuOpen(false)}>
                  Mission
                </Link>
                <Link to="/about#goals" className="block text-gray-600 hover:text-[#1C5B78]" onClick={() => setMobileMenuOpen(false)}>
                  Goals
                </Link>
                <Link to="/about#vision" className="block text-gray-600 hover:text-[#1C5B78]" onClick={() => setMobileMenuOpen(false)}>
                  Vision
                </Link>
                <Link to="/about#team" className="block text-gray-600 hover:text-[#1C5B78]" onClick={() => setMobileMenuOpen(false)}>
                  Team
                </Link>
              </div>
            </div>
            <div className="py-2">
              <div className="text-gray-900">Services</div>
              <div className="pl-4 space-y-2 mt-2">
                <Link to="/services" className="block text-gray-600 hover:text-[#1C5B78]" onClick={() => setMobileMenuOpen(false)}>
                  All Services & Products
                </Link>
              </div>
            </div>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-[#1C5B78]" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link
              to="/contact"
              className="inline-block mt-4 bg-[#1A4F8D] text-white px-6 py-2 rounded-full hover:bg-[#1C5B78]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Support Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
