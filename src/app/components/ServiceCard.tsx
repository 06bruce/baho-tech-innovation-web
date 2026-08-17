import { useId, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";

interface ServiceCardProps {
  /** All text arrives already localized from the calling page. */
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
  status?: string;
}

export function ServiceCard({ icon, title, description, details, status }: ServiceCardProps) {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsId = useId();

  return (
    <motion.div
      className="relative h-full rounded-2xl border-2 border-gray-200 bg-white p-6 shadow-md transition-colors duration-300 hover:border-[#1A4F8D] hover:shadow-xl focus-within:border-[#1A4F8D]"
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex h-full flex-col">
        <div className="mb-4 text-[#1A4F8D]" aria-hidden="true">
          {icon}
        </div>

        <h3 className="mb-3 text-xl text-gray-900">{title}</h3>

        {status && (
          <p className="mb-4 inline-flex w-fit rounded-full bg-[#FEC629]/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1A4F8D]">
            <span className="sr-only">{t("services.products.statusLabel")}: </span>
            {status}
          </p>
        )}

        <p className="mb-4 text-gray-600">{description}</p>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              id={detailsId}
              key="details"
              initial={reduceMotion ? false : { opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <p className="mb-4 leading-relaxed text-gray-700">{details}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          type="button"
          onClick={() => setIsExpanded((open) => !open)}
          aria-expanded={isExpanded}
          aria-controls={detailsId}
          className="mt-auto self-start rounded-full bg-gray-100 px-6 py-2 text-gray-700 transition-colors duration-300 hover:bg-[#1A4F8D] hover:text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-[#1A4F8D]/30"
        >
          {isExpanded ? t("services.products.showLess") : t("services.products.readMore")}
          <span className="sr-only"> — {title}</span>
        </button>
      </div>
    </motion.div>
  );
}
