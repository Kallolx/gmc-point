"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ShimmerButton } from "../magicui/shimmer-button";
import { useFloating, offset, flip, shift } from "@floating-ui/react";
import { RadialBlurCircle } from "../ui/RadialBlurCircle";

const initialFaqs = [
  {
    id: 1,
    question: "How does your GMC service help my business?",
    answer: "Our GMC solutions optimize your Google Merchant Center accounts, ensuring approval, better ad performance, and higher conversions—leading to increased revenue."
  },
  {
    id: 2,
    question: "What happens if my GMC account gets suspended?",
    answer: "If your GMC faces misrepresentation issues within 7 days of reinstatement, we fix it for free. After that period, a standard service fee applies for reinstatement."
  },
  {
    id: 3,
    question: "How long does it take to set up a new GMC account?",
    answer: "It typically takes 3-5 business days to create a new GMC account, followed by a 21-day monitoring period for reinstatement if needed."
  },
  {
    id: 4,
    question: "What if my GMC enters a cooldown period?",
    answer: "We will attempt reinstatement after the cooldown. If the delay is too long, we recommend creating a fresh GMC to save time."
  },
  {
    id: 5,
    question: "Do you provide ongoing support after GMC approval?",
    answer: "Yes! We offer guidance on maintaining a compliant and high-performing GMC to ensure long-term success."
  }
];

const FaqCard = ({ faq, isExpanded, onToggle }: { faq: typeof initialFaqs[0], isExpanded: boolean, onToggle: () => void }) => {
  return (
    <motion.div
      initial={false}
      className="w-full"
      layout="position"
      transition={{ 
        layout: { duration: 0.2 }
      }}
    >
      <button
        onClick={onToggle}
        className="w-full text-left"
      >
        <div 
          className={`
            group relative overflow-hidden rounded-2xl border-2 backdrop-blur-sm transition-all duration-300
            ${isExpanded 
              ? 'border-[#4285F4]/30 bg-[#4285F4]/[0.03] shadow-[0_0_30px_-5px_rgba(66,133,244,0.2)]' 
              : 'border-[#4285F4]/10 bg-[#4285F4]/[0.02] hover:bg-[#4285F4]/[0.04] hover:border-[#4285F4]/20'
            }
          `}
        >
          {/* Enhanced Shimmer Effects for expanded card */}
          {isExpanded && (
            <>
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 translate-x-[-100%] animate-[shimmer_4s_infinite] bg-gradient-to-r from-transparent via-[#4285F4]/10 to-transparent" />
              </div>
              <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 translate-x-[-100%] animate-[fastShimmer_2s_infinite] bg-gradient-to-r from-transparent via-[#1a73e8]/15 to-transparent" />
              </div>
              <div className="absolute inset-0 -z-20 bg-[#4285F4]/3 animate-pulse" />
            </>
          )}
          
          <div className="p-4 sm:p-6 relative z-10">
            <div className="flex items-center justify-between gap-4">
              <h3 className={`text-base font-semibold text-white transition-colors duration-200 ${isExpanded ? 'text-[#4285F4]' : ''}`}>
                {faq.question}
              </h3>
              <motion.div
                initial={false}
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                <ChevronDownIcon 
                  className={`w-4 h-4 transition-colors duration-200
                    ${isExpanded ? 'text-[#4285F4]' : 'text-white/70'}
                  `}
                />
              </motion.div>
            </div>
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ 
                    height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
                    opacity: { duration: 0.2 }
                  }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 sm:pt-4 text-sm text-gray-300">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </button>
    </motion.div>
  );
};

export const FaqSection = () => {
  const [expandedId, setExpandedId] = useState<number>(1);
  const [displayedFaqs] = useState(initialFaqs);

  return (
    <div className="relative w-full overflow-hidden py-12 sm:py-16 mb-16">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 z-0">
          <RadialBlurCircle
            position="left"
            color="#4285F4"
            className="opacity-40"
          />
          <RadialBlurCircle
            position="right"
            color="#6d28d9"
            className="opacity-40"
          />
        </div>
        <motion.div
          className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(66,133,244,0.07) 0%, rgba(26,115,232,0.03) 45%, transparent 70%)",
            filter: "blur(60px)",
            mixBlendMode: "screen",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white flex flex-col items-center gap-2">
            <span>Let's Answer Some</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] to-[#1a73e8] mt-1">
              Frequently Asked Questions
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* FAQ Cards Container */}
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 relative">
            <AnimatePresence initial={false}>
              {displayedFaqs.map((faq) => (
                <FaqCard
                  key={faq.id}
                  faq={faq}
                  isExpanded={expandedId === faq.id}
                  onToggle={() => setExpandedId(faq.id === expandedId ? 0 : faq.id)}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}; 