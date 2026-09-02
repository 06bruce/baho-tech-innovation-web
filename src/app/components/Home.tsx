import { Link } from "react-router";
import { NewsCarousel } from "./NewsCarousel";
import { TranslatedText } from "./TranslatedText";
<<<<<<< HEAD
import { Users, Award, Globe, TrendingUp } from "lucide-react";
=======
import {
  UsersRound,
  Users,
  Award,
  Globe,
  TrendingUp
} from "lucide-react";
>>>>>>> 53616617 (Removed the Section hat was not needed and removed 2 incative members)
import heroBg from "../../../images/1-transparent.png?url";
import newsBg from "../../../images/4.jpeg?url";

export function Home() {
  const impactStats = [
    {
      icon: Users,
      value: "50+",
      label: "Users Empowered",
    },
    {
      icon: Award,
      value: "2+",
      label: "Awards Won",
    },
    {
      icon: Globe,
      value: "3+",
      label: "Countries Reached",
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Client Satisfaction",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative text-white py-20 md:py-32"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#1A4F8D]/55 z-0"></div>
        {/* Dotted Accent */}
        <div className="absolute right-0 top-1/4 opacity-20 z-10">
          <div className="grid grid-cols-6 gap-3 p-8">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-white rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
          <div className="text-center max-w-3xl mx-auto bg-[#1A4F8D]/70 rounded-3xl px-6 py-8 backdrop-blur-sm">
            <h1 className="text-4xl md:text-6xl mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-1/2 after:bg-[#FEC629] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
              <TranslatedText text="Empowering Lives Through Technology" />
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              <TranslatedText text="Baho Tech creates innovative solutions that break down barriers and make technology accessible to everyone." />
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/services"
                className="bg-white text-[#1A4F8D] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg"
              >
                <TranslatedText text="Explore Our Solutions" />
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-lg"
              >
                <TranslatedText text="Support Us" />
              </Link>
            </div>
          </div>
        </div>

        {/* Curved Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,40 C150,80 350,0 600,40 C850,80 1050,20 1200,50 L1200,120 L0,120 Z" fill="white"></path>
          </svg>
        </div>
      </section>

<<<<<<< HEAD
      {/* Latest News/Projects Section */}
=======
      {/* Latest News/Projects Section - Same background as Featured Services */}
>>>>>>> 53616617 (Removed the Section hat was not needed and removed 2 incative members)
      <section
        className="py-20 bg-gray-50 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), url(${newsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <svg className="pointer-events-none absolute left-8 top-10 hidden md:block" width="260" height="80" viewBox="0 0 260 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 60 C60 10 120 90 180 40 C210 20 235 45 255 25" stroke="#1A4F8D" strokeWidth="3" strokeLinecap="round"/>
        </svg>
        <svg className="pointer-events-none absolute right-10 bottom-10 hidden lg:block" width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="140" height="140" rx="28" stroke="#1A4F8D" strokeWidth="2" strokeDasharray="8 10" />
        </svg>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-1/2 after:bg-[#1A4F8D] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
              <TranslatedText text="Latest News & Projects" />
            </h2>
            <div className="flex justify-center mb-3">
              <span className="px-3 py-1 rounded-full bg-green-200/40 text-green-900 text-xs uppercase tracking-wide">
                <TranslatedText text="Upcoming Projects & Updates" />
              </span>
            </div>
            <TranslatedText text="Stay updated with our recent developments and initiatives" as="p" className="text-xl text-gray-600" />
          </div>

          <NewsCarousel />
        </div>

        {/* Curved Bottom Border */}
        <div className="relative mt-20">
          <svg className="w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,20 C180,80 420,0 600,40 C780,80 1020,20 1200,40 L1200,120 L0,120 Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[#1A4F8D]/10"></div>
          <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-[#FEC629]/10"></div>
          <div className="absolute left-10 bottom-10 hidden lg:block opacity-40">
            <div className="grid grid-cols-6 gap-3">
              {[...Array(18)].map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#1A4F8D]/30"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-5/12">
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-5 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-1/2 after:bg-[#1A4F8D] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
                <TranslatedText text="Our Impact" />
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                <TranslatedText text="We measure success by the real-world outcomes we help create. From community training to enterprise accessibility programs, our work is designed to scale and leave a lasting, positive footprint." />
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {impactStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-[#1A4F8D]/15 bg-white px-4 py-3 shadow-sm">
                    <div className="text-2xl font-semibold text-[#1A4F8D]">{stat.value}</div>
                    <TranslatedText text={stat.label} as="div" className="text-sm text-gray-600" />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-7/12">
              <div className="relative">
                <svg
                  className="absolute inset-0 hidden lg:block"
                  viewBox="0 0 600 360"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M300 180 L90 70" stroke="#1A4F8D" strokeWidth="2" strokeDasharray="6 10" opacity="0.35" />
                  <path d="M300 180 L510 70" stroke="#1A4F8D" strokeWidth="2" strokeDasharray="6 10" opacity="0.35" />
                  <path d="M300 180 L90 290" stroke="#1A4F8D" strokeWidth="2" strokeDasharray="6 10" opacity="0.35" />
                  <path d="M300 180 L510 290" stroke="#1A4F8D" strokeWidth="2" strokeDasharray="6 10" opacity="0.35" />
                </svg>

                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {impactStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div
                        key={stat.label}
                        className="relative rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-md transition-transform duration-300 hover:-translate-y-1"
                      >
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-full bg-[#1A4F8D]/10 flex items-center justify-center text-[#1A4F8D]">
                            <Icon className="h-6 w-6" />
                          </div>
                          <div>
                            <div className="text-2xl font-semibold text-gray-900">{stat.value}</div>
                            <TranslatedText text={stat.label} as="div" className="text-sm text-gray-600" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="pointer-events-none absolute inset-0 hidden lg:flex items-center justify-center">
                  <div className="h-32 w-32 rounded-full bg-[#1A4F8D] text-white flex flex-col items-center justify-center shadow-lg">
                    <TranslatedText text="Impact" as="div" className="text-sm uppercase tracking-[0.3em] text-white/70" />
                    <TranslatedText text="Core" as="div" className="text-2xl font-semibold" />
                  </div>
                  <div className="absolute h-40 w-40 rounded-full border border-[#1A4F8D]/30"></div>
                  <div className="absolute h-52 w-52 rounded-full border border-[#1A4F8D]/20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
