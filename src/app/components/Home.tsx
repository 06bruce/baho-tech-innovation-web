import { Link } from "react-router";
import { NewsCarousel } from "./NewsCarousel";
import { TranslatedText } from "./TranslatedText";
import {
  SlidersHorizontal,
  MessageCircle,
  Star,
  LineChart,
  UsersRound,
  Users,
  Award,
  Globe,
  TrendingUp
} from "lucide-react";
import heroBg from "../../../images/1-transparent.png";
import newsBg from "../../../images/4.jpeg";

export function Home() {
  const serviceNodes = [
    {
      color: "#2EC4B6",
      icon: SlidersHorizontal,
      title: "System Configuration",
      body: "We tailor accessibility settings, audits, and compliance plans that meet global standards."
    },
    {
      color: "#FF8C42",
      icon: MessageCircle,
      title: "Support & Communication",
      body: "Clear guidance, user testing, and ongoing support so teams launch inclusive products."
    },
    {
      color: "#F72585",
      icon: Star,
      title: "Quality & Excellence",
      body: "Rigorous QA processes with usability validation to ensure exceptional experiences."
    },
    {
      color: "#3A86FF",
      icon: LineChart,
      title: "Data & Growth",
      body: "Analytics, performance insights, and roadmap planning that drive measurable impact."
    },
    {
      color: "#FFBE0B",
      icon: UsersRound,
      title: "Team & Community",
      body: "Training, workshops, and co-creation to build accessibility-first culture."
    }
  ];

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

      {/* Featured Services Section */}
      <section className="py-20 bg-[#F5F7FA] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-10 top-10 hidden lg:block">
            <svg width="520" height="560" viewBox="0 0 520 560" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M140 80 C260 20 410 50 470 160 C510 240 470 340 380 410 C310 470 200 510 120 520" stroke="#0D1B2A" strokeWidth="2" strokeDasharray="6 10" opacity="0.22" />
              <circle cx="430" cy="140" r="6" fill="#2EC4B6" opacity="0.65" />
              <circle cx="445" cy="210" r="6" fill="#FF8C42" opacity="0.65" />
              <circle cx="445" cy="280" r="6" fill="#F72585" opacity="0.65" />
              <circle cx="430" cy="350" r="6" fill="#3A86FF" opacity="0.65" />
              <circle cx="400" cy="420" r="6" fill="#FFBE0B" opacity="0.65" />
            </svg>
          </div>

          <div className="absolute right-8 top-12 hidden lg:block opacity-40">
            <svg width="220" height="180" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 40 C70 10 140 20 200 70" stroke="#0D1B2A" strokeWidth="2" opacity="0.15" />
              <path d="M20 120 C80 150 140 140 210 110" stroke="#0D1B2A" strokeWidth="2" opacity="0.12" />
            </svg>
          </div>

          <div className="absolute bottom-10 left-1/3 hidden lg:block opacity-40">
            <div className="grid grid-cols-6 gap-3">
              {[...Array(18)].map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#0D1B2A]/20"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-14">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-1/2 after:bg-[#1A4F8D] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
              <TranslatedText text="What We Do & What We Offer" />
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="relative w-full lg:w-[340px] flex items-center justify-center">
              <div className="absolute h-[300px] w-[300px] rounded-full border border-white/30"></div>
              <div className="absolute h-[340px] w-[340px] rounded-full border border-white/20"></div>
              <div className="absolute h-[360px] w-[360px] rounded-full border border-white/10"></div>
              <div className="relative h-[250px] w-[250px] rounded-full bg-[#0D1B2A] text-white shadow-[0_20px_50px_rgba(13,27,42,0.35)] flex items-center justify-center text-center px-6">
                <div>
                  <TranslatedText text="OUR SERVICES" as="div" className="text-2xl font-bold tracking-wide" />
                  <div className="mx-auto my-3 h-[2px] w-20 bg-[#FF8C42]"></div>
                  <TranslatedText text="WHAT WE DO" as="div" className="text-sm tracking-[0.35em] text-white/80" />
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-6">
              {serviceNodes.map((node, index) => (
                <div key={index} className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                  <div className="relative flex items-center gap-4">
                    <div
                      className="h-3 w-3 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.15)]"
                      style={{ backgroundColor: node.color }}
                    ></div>
                    <div
                      className="h-[3px] w-16 border-t-2 border-dotted opacity-100 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ borderColor: node.color }}
                    ></div>
                    <div
                      className="relative h-12 w-12 rounded-full bg-white shadow-sm border flex items-center justify-center transition-transform duration-300 group-hover:scale-105"
                      style={{ borderColor: node.color }}
                    >
                      <span className="absolute h-6 w-6 rounded-full" style={{ backgroundColor: node.color }}></span>
                      <node.icon className="relative w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div
                    className="hidden md:block h-[3px] w-14 border-t-2 border-dotted opacity-100 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ borderColor: node.color }}
                  ></div>

                  <div className="relative flex-1 bg-white rounded-2xl px-6 py-5 shadow-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                    <TranslatedText text={node.title} as="div" className="text-base font-semibold text-gray-900 mb-2" />
                    <TranslatedText text={node.body} as="div" className="text-sm text-gray-500 leading-relaxed" />
                    <div
                      className="absolute right-0 top-0 h-full w-8 rounded-l-full translate-x-1/2"
                      style={{ background: node.color }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Curved Bottom Border */}
        <div className="relative mt-20">
          <svg className="w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,70 C120,30 220,110 340,70 C460,30 560,110 680,70 C800,30 920,110 1040,70 C1120,50 1160,60 1200,70 L1200,120 L0,120 Z" fill="#F5F7FA"></path>
          </svg>
        </div>
      </section>

      {/* Latest News/Projects Section - Same background as Featured Services */}
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
