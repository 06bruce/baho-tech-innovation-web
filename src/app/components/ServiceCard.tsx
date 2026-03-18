import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ServiceCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string;
}

export function ServiceCard({ icon, title, description, details }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className={`relative h-full bg-white border-2 border-gray-200 rounded-2xl p-6 transition-all duration-300 ${
          isHovered ? 'border-[#1A4F8D] shadow-xl' : 'shadow-md'
        }`}
        whileHover={{ y: -5 }}
      >
        <AnimatePresence mode="wait">
          {!isExpanded ? (
            <motion.div
              key="front"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col h-full"
            >
              <div
                className={`mb-4 text-[#1A4F8D] transition-colors duration-300 ${
                  isHovered ? 'text-[#1A4F8D]' : ''
                }`}
              >
                {icon}
              </div>
              <h3 className="text-xl text-gray-900 mb-3 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-1/2 after:bg-[#1A4F8D] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
                {title}
              </h3>
              <p className="text-gray-600 mb-6 flex-1">{description}</p>
              <button
                onClick={() => setIsExpanded(true)}
                className={`self-start px-6 py-2 rounded-full transition-all duration-300 ${
                  isHovered
                    ? 'bg-[#1A4F8D] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Read More
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="back"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col h-full"
            >
              <h3 className="text-xl text-gray-900 mb-3 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-1/2 after:bg-[#1A4F8D] after:rounded-full after:transition-all after:duration-500 hover:after:w-full">
                {title}
              </h3>
              <p className="text-gray-700 mb-6 flex-1 leading-relaxed">{details}</p>
              <button
                onClick={() => setIsExpanded(false)}
                className="self-start px-6 py-2 bg-[#1A4F8D] text-white rounded-full hover:bg-[#1C5B78] transition-colors"
              >
                Show Less
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
