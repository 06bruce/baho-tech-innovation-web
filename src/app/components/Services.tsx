import { useEffect, type ReactNode } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "motion/react";
import { ServiceCard } from "./ServiceCard";
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
  UsersRound,
  Ear,
  Footprints,
  GraduationCap,
  Sparkles,
  Search,
  PencilRuler,
  Boxes,
  ClipboardCheck,
  RefreshCw,
  Rocket,
} from "lucide-react";

/**
 * Scroll-triggered entrance used across the page. Honours prefers-reduced-motion
 * by rendering the content in its final state with no transform.
 */
function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export function Services() {
  const location = useLocation();
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  // Page-level SEO. Restores the site defaults when navigating away.
  useEffect(() => {
    const previousTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute("content") ?? "";

    document.title = t("services.meta.title");
    metaDescription?.setAttribute("content", t("services.meta.description"));

    return () => {
      document.title = previousTitle;
      metaDescription?.setAttribute("content", previousDescription);
    };
  }, [t]);

  useEffect(() => {
    if (!location.hash) return;
    const element = document.querySelector(location.hash);
    if (!element) return;
    element.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  }, [location]);

  const processSteps = [
    { key: "understand", icon: Search, color: "#2EC4B6" },
    { key: "design", icon: PencilRuler, color: "#3A86FF" },
    { key: "prototype", icon: Boxes, color: "#FF8C42" },
    { key: "test", icon: ClipboardCheck, color: "#F72585" },
    { key: "improve", icon: RefreshCw, color: "#FFBE0B" },
    { key: "deploy", icon: Rocket, color: "#1A4F8D" },
  ] as const;

  const solutionAreas = [
    { key: "seeing", icon: Eye, color: "#2EC4B6" },
    { key: "moving", icon: Footprints, color: "#FF8C42" },
    { key: "communicating", icon: Ear, color: "#3A86FF" },
    { key: "learning", icon: GraduationCap, color: "#F72585" },
    { key: "everyday", icon: Sparkles, color: "#FFBE0B" },
  ] as const;

  const offerings = [
    { key: "consulting", id: "accessibility-consulting", icon: Accessibility },
    { key: "assistiveDev", id: "assistive-tech-dev-service", icon: Smartphone },
    { key: "inclusiveDesign", id: "inclusive-design", icon: Users },
    { key: "webDev", id: "web-development", icon: Code },
    { key: "training", id: "training", icon: BookOpen },
    { key: "prototyping", id: "rapid-prototyping", icon: Zap },
  ] as const;

  const serviceNodes = [
    { key: "configuration", color: "#2EC4B6", icon: SlidersHorizontal },
    { key: "support", color: "#FF8C42", icon: MessageCircle },
    { key: "quality", color: "#F72585", icon: Star },
    { key: "data", color: "#3A86FF", icon: LineChart },
    { key: "community", color: "#FFBE0B", icon: UsersRound },
  ] as const;

  const products = [
    { key: "sbs", id: "sbs", icon: <Navigation className="h-12 w-12" /> },
    { key: "senseAi", id: "sense-ai", icon: <Mic className="h-12 w-12" /> },
    { key: "talka", id: "talka", icon: <Eye className="h-12 w-12" /> },
  ] as const;

  const headingUnderline =
    "relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-1/2 after:rounded-full after:transition-all after:duration-500 hover:after:w-full";

  return (
    <div className="overflow-hidden">
      {/* ---------- Hero ---------- */}
      <section className="relative bg-[#1A4F8D] py-20 text-white" aria-labelledby="services-hero-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <motion.p
              className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#FEC629]"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t("services.hero.eyebrow")}
            </motion.p>

            <motion.h1
              id="services-hero-title"
              className={`mb-6 text-4xl md:text-5xl ${headingUnderline} after:bg-[#FEC629]`}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t("services.hero.title")}
            </motion.h1>

            <motion.p
              className="mx-auto max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t("services.hero.lead")}
            </motion.p>

            <motion.div
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="#assistive-tech-dev"
                className="inline-block rounded-full bg-[#FEC629] px-8 py-4 text-lg font-semibold text-[#0D1B2A] transition-colors hover:bg-[#ffd75c] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
              >
                {t("services.hero.ctaPrimary")}
              </a>
              <Link
                to="/contact"
                className="inline-block rounded-full border-2 border-white/70 px-8 py-4 text-lg text-white transition-colors hover:bg-white hover:text-[#1A4F8D] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
              >
                {t("services.hero.ctaSecondary")}
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Curved bottom border */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none" aria-hidden="true">
          <svg className="relative block h-16 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,55 C240,5 420,95 600,55 C780,15 960,95 1200,55 L1200,120 L0,120 Z" fill="white"></path>
          </svg>
        </div>
      </section>

      {/* ---------- The human challenge ---------- */}
      <section id="everyday-barriers" className="scroll-mt-24 bg-white py-20" aria-labelledby="problem-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#1A4F8D]">
                {t("services.problem.eyebrow")}
              </p>
              <h2 id="problem-title" className={`mb-8 text-3xl text-gray-900 md:text-4xl ${headingUnderline} after:bg-[#1A4F8D]`}>
                {t("services.problem.title")}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">{t("services.problem.p1")}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mb-6 border-l-4 border-[#FEC629] pl-6 text-lg leading-relaxed text-gray-900">
                {t("services.problem.p2")}
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg leading-relaxed text-gray-600">{t("services.problem.p3")}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Baho's approach + process (anchor target) ---------- */}
      <section
        id="assistive-tech-dev"
        className="scroll-mt-24 bg-[#F5F7FA] py-20"
        aria-labelledby="approach-title"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl">
            <Reveal>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#1A4F8D]">
                {t("services.approach.eyebrow")}
              </p>
              <h2 id="approach-title" className={`mb-8 text-3xl text-gray-900 md:text-4xl ${headingUnderline} after:bg-[#1A4F8D]`}>
                {t("services.approach.title")}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">{t("services.approach.p1")}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg leading-relaxed text-gray-600">{t("services.approach.p2")}</p>
            </Reveal>
          </div>

          {/* Process */}
          <div className="mx-auto max-w-6xl">
            <Reveal className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#1A4F8D]">
                {t("services.process.eyebrow")}
              </p>
              <h3 className="mb-4 text-2xl text-gray-900 md:text-3xl">{t("services.process.title")}</h3>
              <p className="mx-auto max-w-2xl text-gray-600">{t("services.process.lead")}</p>
            </Reveal>

            <ol className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-label={t("services.process.navLabel")}>
              {processSteps.map((step, index) => (
                <motion.li
                  key={step.key}
                  className="relative flex h-full flex-col rounded-2xl bg-white p-6 shadow-md"
                  initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.09, ease: "easeOut" }}
                >
                  <div className="mb-4 flex items-center gap-4">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white"
                      style={{ backgroundColor: step.color }}
                    >
                      <step.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                      {t("services.process.stepPosition", { current: index + 1, total: processSteps.length })}
                    </span>
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    {t(`services.process.${step.key}.title`)}
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {t(`services.process.${step.key}.body`)}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ---------- Solution areas ---------- */}
      <section id="solution-areas" className="scroll-mt-24 bg-white py-20" aria-labelledby="areas-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#1A4F8D]">
              {t("services.areas.eyebrow")}
            </p>
            <h2 id="areas-title" className={`mb-4 text-3xl text-gray-900 md:text-4xl ${headingUnderline} after:bg-[#1A4F8D]`}>
              {t("services.areas.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">{t("services.areas.lead")}</p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {solutionAreas.map((area, index) => (
              <motion.article
                key={area.key}
                className="group h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md transition-colors duration-300 hover:border-[#1A4F8D] hover:shadow-xl"
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.08, ease: "easeOut" }}
                whileHover={reduceMotion ? undefined : { y: -5 }}
              >
                <span
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-white transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: area.color }}
                >
                  <area.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mb-3 text-xl text-gray-900">{t(`services.areas.${area.key}.title`)}</h3>
                <p className="leading-relaxed text-gray-600">{t(`services.areas.${area.key}.body`)}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Products ---------- */}
      <section id="products" className="relative scroll-mt-24 bg-gray-50 py-20" aria-labelledby="products-title">
        <div className="absolute left-0 top-1/3 opacity-10" aria-hidden="true">
          <div className="grid grid-cols-4 gap-3 p-8">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="h-2 w-2 rounded-full bg-[#1A4F8D]"></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#1A4F8D]">
              {t("services.products.eyebrow")}
            </p>
            <h2 id="products-title" className={`mb-4 text-3xl text-gray-900 md:text-4xl ${headingUnderline} after:bg-[#1A4F8D]`}>
              {t("services.products.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">{t("services.products.lead")}</p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <motion.div
                key={product.key}
                id={product.id}
                className="scroll-mt-24"
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.1, ease: "easeOut" }}
              >
                <ServiceCard
                  icon={product.icon}
                  title={t(`services.products.${product.key}.title`)}
                  status={t(`services.products.${product.key}.status`)}
                  description={t(`services.products.${product.key}.description`)}
                  details={t(`services.products.${product.key}.details`)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Services we offer ---------- */}
      <section id="offerings" className="scroll-mt-24 bg-white py-20" aria-labelledby="offerings-title">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#1A4F8D]">
              {t("services.offerings.eyebrow")}
            </p>
            <h2 id="offerings-title" className={`mb-4 text-3xl text-gray-900 md:text-4xl ${headingUnderline} after:bg-[#1A4F8D]`}>
              {t("services.offerings.title")}
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">{t("services.offerings.lead")}</p>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.key}
                id={offering.id}
                className="scroll-mt-24"
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: reduceMotion ? 0 : (index % 3) * 0.08, ease: "easeOut" }}
              >
                <ServiceCard
                  icon={<offering.icon className="h-12 w-12" />}
                  title={t(`services.offerings.${offering.key}.title`)}
                  description={t(`services.offerings.${offering.key}.description`)}
                  details={t(`services.offerings.${offering.key}.details`)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- How we deliver (existing radial layout, preserved) ---------- */}
      <section className="relative overflow-hidden bg-[#F5F7FA] py-20" aria-labelledby="nodes-title">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
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

          <div className="absolute right-8 top-10 hidden opacity-40 lg:block">
            <svg width="220" height="180" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 40 C70 10 140 20 200 70" stroke="#0D1B2A" strokeWidth="2" opacity="0.15" />
              <path d="M20 120 C80 150 140 140 210 110" stroke="#0D1B2A" strokeWidth="2" opacity="0.12" />
            </svg>
          </div>

          <div className="absolute bottom-10 left-1/3 hidden opacity-40 lg:block">
            <div className="grid grid-cols-6 gap-3">
              {[...Array(18)].map((_, i) => (
                <div key={i} className="h-1.5 w-1.5 rounded-full bg-[#0D1B2A]/20"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start gap-12 lg:flex-row">
            <div className="relative flex w-full items-center justify-center lg:w-[340px]">
              <div className="absolute h-[300px] w-[300px] rounded-full border border-white/30" aria-hidden="true"></div>
              <div className="absolute h-[340px] w-[340px] rounded-full border border-white/20" aria-hidden="true"></div>
              <div className="absolute h-[360px] w-[360px] rounded-full border border-white/10" aria-hidden="true"></div>
              <div className="relative flex h-[250px] w-[250px] items-center justify-center rounded-full bg-[#0D1B2A] px-6 text-center text-white shadow-[0_20px_50px_rgba(13,27,42,0.35)]">
                <div>
                  <h2 id="nodes-title" className="text-2xl font-bold tracking-wide">
                    {t("services.nodes.heading")}
                  </h2>
                  <div className="mx-auto my-3 h-[2px] w-20 bg-[#FF8C42]" aria-hidden="true"></div>
                  <p className="text-sm tracking-[0.35em] text-white/80">{t("services.nodes.subheading")}</p>
                </div>
              </div>
            </div>

            <ul className="flex-1 space-y-6">
              {serviceNodes.map((node, index) => (
                <motion.li
                  key={node.key}
                  className="group flex flex-col gap-4 md:flex-row md:items-center md:gap-6"
                  initial={reduceMotion ? false : { opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.08, ease: "easeOut" }}
                >
                  <div className="relative flex items-center gap-4" aria-hidden="true">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: node.color }}></div>
                    <div
                      className="h-[2px] w-14 border-t-2 border-dotted opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ borderColor: node.color }}
                    ></div>
                    <div
                      className="relative flex h-12 w-12 items-center justify-center rounded-full border bg-white shadow-sm transition-transform duration-300 group-hover:scale-105"
                      style={{ borderColor: node.color }}
                    >
                      <span className="absolute h-6 w-6 rounded-full" style={{ backgroundColor: node.color }}></span>
                      <node.icon className="relative h-5 w-5 text-white" />
                    </div>
                  </div>

                  <div
                    className="hidden h-[2px] w-12 border-t-2 border-dotted opacity-70 transition-opacity duration-300 group-hover:opacity-100 md:block"
                    style={{ borderColor: node.color }}
                    aria-hidden="true"
                  ></div>

                  <div className="relative flex-1 rounded-2xl bg-white px-6 py-5 shadow-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                    <h3 className="mb-2 text-base font-semibold text-gray-900">
                      {t(`services.nodes.${node.key}.title`)}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500">
                      {t(`services.nodes.${node.key}.body`)}
                    </p>
                    <div
                      className="absolute right-0 top-0 h-full w-8 translate-x-1/2 rounded-l-full"
                      style={{ background: node.color }}
                      aria-hidden="true"
                    ></div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="relative bg-[#1A4F8D] py-20 text-white" aria-labelledby="services-cta-title">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal>
            <h2 id="services-cta-title" className={`mb-6 text-3xl md:text-4xl ${headingUnderline} after:bg-[#FEC629]`}>
              {t("services.cta.title")}
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl">
              {t("services.cta.lead")}
            </p>
            <Link
              to="/contact"
              className="inline-block rounded-full bg-white px-8 py-4 text-lg text-[#1A4F8D] transition-colors hover:bg-gray-100 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60"
            >
              {t("services.cta.button")}
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
