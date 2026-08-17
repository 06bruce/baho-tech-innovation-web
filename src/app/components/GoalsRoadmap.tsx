import { useRef, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { Lightbulb, Handshake, Landmark, Megaphone } from "lucide-react";

const GOALS = [
  { key: "innovate", icon: Lightbulb, color: "#2EC4B6" },
  { key: "deliver", icon: Handshake, color: "#3A86FF" },
  { key: "establish", icon: Landmark, color: "#FF8C42" },
  { key: "champion", icon: Megaphone, color: "#F72585" },
] as const;

/**
 * A single milestone card that tilts in 3D toward the pointer.
 * Falls back to a flat, static card when the visitor prefers reduced motion.
 */
function TiltCard({ color, children }: { color: string; children: ReactNode }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 220, damping: 18, mass: 0.4 };
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [7, -7]), spring);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-9, 9]), spring);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  }

  function reset() {
    px.set(0);
    py.set(0);
  }

  return (
    <div style={{ perspective: reduceMotion ? undefined : 1100 }}>
      <motion.div
        ref={ref}
        onPointerMove={handlePointerMove}
        onPointerLeave={reset}
        style={
          reduceMotion
            ? undefined
            : { rotateX, rotateY, transformStyle: "preserve-3d" }
        }
        className="relative rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md transition-colors duration-300 hover:border-[#1A4F8D] hover:shadow-xl focus-within:border-[#1A4F8D] md:p-8"
      >
        {/* Soft coloured glow, sits behind the card face */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 hover:opacity-100"
          style={{ background: `radial-gradient(60% 60% at 50% 0%, ${color}14, transparent)` }}
        />
        {children}
      </motion.div>
    </div>
  );
}

export function GoalsRoadmap() {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);

  // The spine fills as the roadmap scrolls through the viewport.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 60%"],
  });
  const spineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <div className="mx-auto max-w-6xl">
      {/* Section header */}
      <div className="mb-16 text-center">
        <motion.p
          className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#1A4F8D]"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45 }}
        >
          {t("about.goals.eyebrow")}
        </motion.p>
        <motion.h2
          className="mb-4 text-3xl text-gray-900 md:text-4xl"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          {t("about.goals.title")}
        </motion.h2>
        <motion.p
          className="mx-auto max-w-2xl text-lg text-gray-600"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.45, delay: 0.16 }}
        >
          {t("about.goals.lead")}
        </motion.p>
      </div>

      {/* Roadmap track */}
      <div ref={trackRef} className="relative">
        {/* 2D spine: unfilled rail + scroll-linked filled overlay */}
        <div
          aria-hidden="true"
          className="absolute left-6 top-0 h-full w-[3px] -translate-x-1/2 rounded-full bg-gray-200 md:left-1/2"
        >
          <motion.div
            className="h-full w-full origin-top rounded-full"
            style={{
              scaleY: reduceMotion ? 1 : spineScale,
              background: "linear-gradient(180deg,#2EC4B6,#3A86FF,#FF8C42,#F72585)",
            }}
          />
        </div>

        <ol className="space-y-10 md:space-y-16" aria-label={t("about.goals.navLabel")}>
          {GOALS.map((goal, index) => {
            const isRight = index % 2 === 1;
            return (
              <li key={goal.key} className="relative pl-16 md:pl-0">
                {/* Milestone node on the spine */}
                <motion.span
                  aria-hidden="true"
                  className="absolute left-6 top-8 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white shadow-md md:left-1/2 md:top-10"
                  style={{ backgroundColor: goal.color }}
                  initial={reduceMotion ? false : { scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.4, delay: 0.1, ease: "backOut" }}
                />

                <div
                  className={`md:flex md:items-center md:gap-10 ${
                    isRight ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Spacer keeps the alternating layout balanced on desktop */}
                  <div className="hidden md:block md:w-1/2" aria-hidden="true" />

                  <motion.div
                    className="md:w-1/2"
                    initial={
                      reduceMotion ? false : { opacity: 0, x: isRight ? 40 : -40, y: 20 }
                    }
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                  >
                    <TiltCard color={goal.color}>
                      <div className="mb-4 flex items-center gap-4" style={{ transform: "translateZ(38px)" }}>
                        <span
                          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-lg"
                          style={{ backgroundColor: goal.color }}
                        >
                          <goal.icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                            {t("about.goals.phaseLabel", {
                              current: index + 1,
                              total: GOALS.length,
                            })}
                          </p>
                          <h3 className="text-xl text-gray-900">
                            {t(`about.goals.${goal.key}.label`)}
                          </h3>
                        </div>
                      </div>

                      <p
                        className="leading-relaxed text-gray-600"
                        style={{ transform: "translateZ(18px)" }}
                      >
                        {t(`about.goals.${goal.key}.body`)}
                      </p>

                      {/* 2D accent: large ghost numeral */}
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-3 right-5 text-6xl font-black leading-none text-gray-900/[0.04]"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </TiltCard>
                  </motion.div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
