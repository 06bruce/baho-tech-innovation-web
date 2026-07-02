import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import { Target, Eye, Heart, Linkedin, Mail } from "lucide-react";
import { teamMembers } from "../data/team";
import { Link } from "react-router";
import ceoImage from "../../../images/ceo.png";

export function About() {
  const location = useLocation();
  const teamCarouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const ceo = teamMembers.find((member) => member.slug === "nancy-teta-kwizera");

  const scrollTeam = (direction: "prev" | "next") => {
    if (!teamCarouselRef.current) return;
    const scrollAmount = teamCarouselRef.current.clientWidth * 0.8;
    teamCarouselRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = teamCarouselRef.current;
    if (!container) return;

    const handleScroll = () => {
      const firstChild = container.firstElementChild as HTMLElement | null;
      if (!firstChild) return;
      const cardWidth = firstChild.getBoundingClientRect().width + 24;
      const index = Math.round(container.scrollLeft / cardWidth);
      setActiveIndex(index);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const container = teamCarouselRef.current;
    if (!container || isPaused) return;

    const interval = window.setInterval(() => {
      const firstChild = container.firstElementChild as HTMLElement | null;
      if (!firstChild) return;
      const cardWidth = firstChild.getBoundingClientRect().width + 24;
      const nextIndex = (activeIndex + 1) % teamMembers.length;
      container.scrollTo({
        left: nextIndex * cardWidth,
        behavior: "smooth",
      });
      setActiveIndex(nextIndex);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [activeIndex, isPaused]);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-[#1A4F8D] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-1/2 after:bg-[#FEC629] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
              About Baho Tech
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Building a more inclusive digital future, one innovation at a time
            </p>
          </div>
        </div>

        {/* Curved Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,50 C180,10 360,90 600,50 C840,10 1020,90 1200,50 L1200,120 L0,120 Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* Mission Section - Same background as Home Featured Services */}
      <section id="mission" className="py-20 bg-gray-50 relative scroll-mt-20">
        <svg className="pointer-events-none absolute left-8 top-12 hidden md:block" width="220" height="60" viewBox="0 0 220 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 40 C40 10 80 60 120 30 C160 0 190 40 215 15" stroke="#1A4F8D" strokeWidth="3" strokeLinecap="round"/>
        </svg>
        {/* Dotted Accent */}
        <div className="absolute right-0 top-1/4 opacity-10">
          <div className="grid grid-cols-4 gap-3 p-8">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-[#1A4F8D] rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="bg-[#1A4F8D] rounded-full w-40 h-40 flex items-center justify-center mx-auto">
                <Heart className="w-20 h-20 text-white" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-1/2 after:bg-[#1A4F8D] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At Baho Tech, our mission is to break down digital barriers and create technology that works for everyone, regardless of their abilities. We believe that accessibility is not just a feature, but a fundamental right.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through innovative solutions, cutting-edge research, and collaborative partnerships, we're committed to making the digital world more inclusive, one product at a time.
              </p>
            </div>
          </div>
        </div>

        {/* Curved Bottom Border */}
        <div className="relative mt-20">
          <svg className="w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,30 C220,70 420,0 600,30 C780,60 980,10 1200,30 L1200,120 L0,120 Z" fill="#F9FAFB"></path>
          </svg>
        </div>
      </section>

      {/* Goals Section */}
      <section id="goals" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/3">
              <div className="bg-[#1A4F8D] rounded-full w-40 h-40 flex items-center justify-center mx-auto">
                <Target className="w-20 h-20 text-white" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-1/2 after:bg-[#1A4F8D] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
                Our Goals
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#1A4F8D] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">Develop innovative assistive technologies that empower people with disabilities to navigate the digital world with confidence and independence.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#1A4F8D] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">Partner with organizations worldwide to implement accessibility best practices and create inclusive digital experiences.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#1A4F8D] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">Educate and train the next generation of developers and designers in accessibility-first design principles.</p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#1A4F8D] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700">Advocate for stronger accessibility standards and policies at local, national, and international levels.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Curved Bottom Border */}
        <div className="relative mt-20">
          <svg className="w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,65 C200,20 420,110 600,65 C780,20 1000,110 1200,65 L1200,120 L0,120 Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[#1A4F8D]/75"></div>
        <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-[#1A4F8D] border border-white/10"></div>
        <div className="absolute left-10 bottom-10 hidden lg:block">
          <div
            className="h-24 w-40 rounded-2xl"
            style={{
              backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 2px, transparent 2px, transparent 8px)"
            }}
          ></div>
        </div>
        <div className="absolute right-16 top-12 hidden lg:block">
          <div
            className="h-20 w-36 rounded-2xl"
            style={{
              backgroundImage: "repeating-linear-gradient(135deg, rgba(254,198,41,0.45) 0, rgba(254,198,41,0.45) 2px, transparent 2px, transparent 8px)"
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/3">
              <div className="text-[#FEC629] text-4xl md:text-5xl leading-tight" style={{ fontFamily: "\"Segoe Script\", \"Brush Script MT\", cursive" }}>
                Message
              </div>
              <div className="mt-2 text-[#FEC629] font-bold uppercase tracking-[0.2em] text-lg md:text-xl">
                FROM <span className="text-3xl md:text-4xl font-extrabold">CEO</span>
              </div>
            </div>

            <div className="w-full lg:w-1/3 flex justify-center">
              <div className="h-64 w-64 lg:h-72 lg:w-72 rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.45)] border-4 border-white/10 bg-transparent">
                <img
                  src={ceoImage}
                  alt="Nancy Teta Kwizera"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/3">
              <div className="relative bg-[#111827] border-2 border-[#FEC629] rounded-3xl p-6 shadow-[0_18px_40px_rgba(0,0,0,0.4)]">
                <div className="absolute -left-4 top-1/2 -translate-y-1/2 h-0 w-0 border-y-8 border-y-transparent border-r-[16px] border-r-[#FEC629]"></div>
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 h-0 w-0 border-y-7 border-y-transparent border-r-[14px] border-r-[#111827]"></div>
                <div className="text-lg font-semibold tracking-wide text-white mb-3">Message from the CEO</div>
                <p className="text-sm text-white/80 leading-relaxed">
                  At Baho Tech, we believe technology should be accessible to everyone. Our focus is on creating
                  innovative solutions that empower people with disabilities, helping them communicate, learn, and
                  interact with the world more easily.
                </p>
                <p className="mt-4 text-sm text-white/80 leading-relaxed">
                  Through AI and assistive technologies, we are committed to building tools that make life more
                  inclusive and open new opportunities for everyone.
                </p>
              </div>
              <div className="mt-4 text-sm text-white/80">
                <div className="font-semibold tracking-wide">NANCY TETA KWIZERA</div>
                <div>CEO &amp; Founder, Baho Tech</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-white relative scroll-mt-20">
        {/* Dotted Accent */}
        <div className="absolute left-0 top-1/3 opacity-10">
          <div className="grid grid-cols-4 gap-3 p-8">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-[#1A4F8D] rounded-full"></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="bg-[#1A4F8D] rounded-full w-40 h-40 flex items-center justify-center mx-auto">
                <Eye className="w-20 h-20 text-white" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-6 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-1/2 after:bg-[#1A4F8D] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                We envision a world where technology is truly universal—where every digital product, service, and experience is designed with accessibility at its core, not as an afterthought.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A world where people with disabilities have equal access to information, communication, and opportunities. Where assistive technologies seamlessly integrate into everyday life, empowering individuals to achieve their full potential.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through continuous innovation and unwavering commitment to inclusivity, we're working to make this vision a reality.
              </p>
            </div>
          </div>
        </div>

        {/* Curved Bottom Border */}
        <div className="relative mt-20">
          <svg className="w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,25 C160,85 420,0 600,45 C780,90 1040,15 1200,40 L1200,120 L0,120 Z" fill="#F9FAFB"></path>
          </svg>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl md:text-4xl text-gray-900 mb-4 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-1/2 after:bg-[#1A4F8D] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl">
                A diverse group of passionate innovators dedicated to making technology accessible for all
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollTeam("prev")}
                className="px-4 py-2 rounded-full border border-[#1A4F8D]/30 text-[#1A4F8D] hover:border-[#1A4F8D] transition-colors"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={() => scrollTeam("next")}
                className="px-4 py-2 rounded-full bg-[#1A4F8D] text-white hover:bg-[#1C5B78] transition-colors"
              >
                Next
              </button>
            </div>
          </div>

          <div
            ref={teamCarouselRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
          >
            {teamMembers.map((member) => (
              <Link
                key={member.slug}
                to={`/team/${member.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 block min-w-[280px] max-w-[320px] snap-start"
              >
                <div className="h-40 bg-gray-100 flex items-center justify-center border-b border-gray-200">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-gray-900 mb-1 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-1/2 after:bg-[#1A4F8D] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
                    {member.name}
                  </h3>
                  <p className="text-[#1A4F8D] mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <span className="text-gray-400 hover:text-[#1C5B78] transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </span>
                    <span className="text-gray-400 hover:text-[#1C5B78] transition-colors">
                      <Mail className="w-5 h-5" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {teamMembers.map((member, index) => (
              <button
                key={member.slug}
                type="button"
                onClick={() => {
                  const container = teamCarouselRef.current;
                  if (!container) return;
                  const firstChild = container.firstElementChild as HTMLElement | null;
                  if (!firstChild) return;
                  const cardWidth = firstChild.getBoundingClientRect().width + 24;
                  container.scrollTo({
                    left: index * cardWidth,
                    behavior: "smooth",
                  });
                  setActiveIndex(index);
                }}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  activeIndex === index ? "bg-[#1A4F8D]" : "bg-[#1A4F8D]/30"
                }`}
                aria-label={`Go to ${member.name}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
