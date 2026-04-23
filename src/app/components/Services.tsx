import { useEffect } from "react";
import { useLocation } from "react-router";
import { ServiceCard } from "./ServiceCard";
import { TranslatedText } from "./TranslatedText";
import {
  Accessibility,
  Smartphone,
  Users,
  Mic,
  Eye,
  Navigation,
  Code,
  BookOpen,
  Zap,
  SlidersHorizontal,
  MessageCircle,
  Star,
  LineChart,
  UsersRound
} from "lucide-react";

export function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const services = [
    {
      id: "accessibility-consulting",
      icon: <Accessibility className="w-12 h-12" />,
      title: "Accessibility Consulting",
      description: "Expert guidance on making your digital products accessible to everyone.",
      details: "We provide comprehensive accessibility audits, WCAG compliance testing, and strategic recommendations to ensure your products meet international accessibility standards and reach the widest possible audience. Our consulting services include user testing with people with disabilities, detailed reporting, and ongoing support."
    },
    {
      id: "assistive-tech-dev",
      icon: <Smartphone className="w-12 h-12" />,
      title: "Assistive Technology Development",
      description: "Custom-built assistive technologies tailored to individual needs.",
      details: "Our team develops cutting-edge assistive technologies including voice-controlled interfaces, screen readers, and specialized input devices designed to empower users with disabilities. We work closely with users throughout the development process to ensure our solutions truly meet their needs."
    },
    {
      id: "inclusive-design",
      icon: <Users className="w-12 h-12" />,
      title: "Inclusive Design Services",
      description: "Design systems that work for everyone, from the ground up.",
      details: "We create inclusive design frameworks that prioritize accessibility from the start. Our approach ensures that products are usable, beautiful, and functional for people of all abilities, creating truly universal experiences. This includes user research, wireframing, prototyping, and design system development."
    },
    {
      id: "web-development",
      icon: <Code className="w-12 h-12" />,
      title: "Accessible Web Development",
      description: "Build fully accessible websites and web applications.",
      details: "We specialize in developing websites and web applications that meet or exceed WCAG 2.1 Level AA standards. Our development process includes semantic HTML, ARIA landmarks, keyboard navigation, and comprehensive testing with assistive technologies to ensure a seamless experience for all users."
    },
    {
      id: "training",
      icon: <BookOpen className="w-12 h-12" />,
      title: "Training & Workshops",
      description: "Educate your team on accessibility best practices.",
      details: "We offer comprehensive training programs, workshops, and certification courses that equip your team with the knowledge and skills needed to create accessible products. Topics include WCAG guidelines, accessible development, inclusive design, and assistive technology demonstrations."
    },
    {
      id: "rapid-prototyping",
      icon: <Zap className="w-12 h-12" />,
      title: "Rapid Prototyping",
      description: "Fast, iterative development of accessibility features.",
      details: "Our agile prototyping process allows for quick testing and refinement of accessibility features. We work closely with users to ensure solutions meet real-world needs through continuous feedback and iteration. This approach reduces development time and ensures better outcomes."
    }
  ];

  const products = [
    {
      id: "sense-ai",
      icon: <Mic className="w-12 h-12" />,
      title: "Sense AI",
      status: "Coming soon",
      description: "An AI accessibility companion for voice, vision, translation, and hands-free assistance.",
      details: "Sense AI is planned as Baho Tech's intelligent accessibility layer. It will combine voice control, scene understanding, translation, and page guidance so users can move through digital systems with less friction."
    },
    {
      id: "sbs",
      icon: <Navigation className="w-12 h-12" />,
      title: "SBS",
      status: "MVP",
      description: "Smart Blind Stick support for safer navigation and obstacle awareness.",
      details: "SBS is the MVP Smart Blind Stick product. It focuses on practical navigation support, obstacle awareness, and service workflows for blind users while the hardware and software experience continue to mature."
    },
    {
      id: "talka",
      icon: <Eye className="w-12 h-12" />,
      title: "Talka",
      status: "In development",
      description: "A communication and reading assistant built for accessible daily interactions.",
      details: "Talka is in development as a practical assistant for communication, reading support, and multilingual accessibility workflows. It is being shaped around real user needs before a full release."
    }
  ];

  const serviceNodes = [
    {
      color: "#2EC4B6",
      icon: SlidersHorizontal,
      title: "System Configuration",
      body: "We configure assistive workflows, dashboards, and accessibility settings around each user profile."
    },
    {
      color: "#FF8C42",
      icon: MessageCircle,
      title: "Support & Communication",
      body: "We help teams and users communicate clearly through training, support, and inclusive service design."
    },
    {
      color: "#F72585",
      icon: Star,
      title: "Quality & Excellence",
      body: "We test usability, accessibility, and service quality before products reach the people who need them."
    },
    {
      color: "#3A86FF",
      icon: LineChart,
      title: "Data & Growth",
      body: "We use product feedback and accessibility insights to improve impact over time."
    },
    {
      color: "#FFBE0B",
      icon: UsersRound,
      title: "Team & Community",
      body: "We build with users, caregivers, schools, and partners so assistive technology fits real life."
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#1A4F8D] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-1/2 after:bg-[#FEC629] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
              <TranslatedText text="Our Services & Products" />
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              <TranslatedText text="Comprehensive solutions designed to create an inclusive digital world" />
            </p>
          </div>
        </div>

        {/* Curved Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,55 C240,5 420,95 600,55 C780,15 960,95 1200,55 L1200,120 L0,120 Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* Services Section */}
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

          <div className="absolute right-8 top-10 hidden lg:block opacity-40">
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
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: node.color }}></div>
                    <div
                      className="h-[2px] w-14 border-t-2 border-dotted opacity-70 transition-opacity duration-300 group-hover:opacity-100"
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
                    className="hidden md:block h-[2px] w-12 border-t-2 border-dotted opacity-70 transition-opacity duration-300 group-hover:opacity-100"
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

        <div className="relative mt-20">
          <svg className="w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,35 C200,75 420,10 600,35 C780,60 1000,10 1200,35 L1200,120 L0,120 Z" fill="#F5F7FA"></path>
          </svg>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50 relative">
        {/* Dotted Accent */}
        <div className="absolute left-0 top-1/3 opacity-10">
          <div className="grid grid-cols-4 gap-3 p-8">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-[#1A4F8D] rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-1/2 after:bg-[#1A4F8D] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
              <TranslatedText text="Our Products" />
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              <TranslatedText text="Innovative assistive technologies powered by Baho Tech" />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} id={product.id} className="scroll-mt-24">
                <ServiceCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1A4F8D] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-1/2 after:bg-[#FEC629] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
            <TranslatedText text="Ready to Get Started?" />
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            <TranslatedText text="Let's work together to make your digital products accessible to everyone" />
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#1A4F8D] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors text-lg"
          >
            <TranslatedText text="Contact Us Today" />
          </a>
        </div>
      </section>
    </div>
  );
}
