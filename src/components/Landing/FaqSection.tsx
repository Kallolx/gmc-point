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
    question: "What are the benefits of dropshipping on Google?",
    answer: "Dropshipping on Google can give a big salesboost. Compared to Meta and TikTok there's less competition, more consistency in sales and a higher profit margin."
  },
  {
    id: 2,
    question: "Do you offer a discount for clients who want multiple Google Merchant centers?",
    answer: "Yes, we offer special package deals for clients looking to manage multiple Google Merchant Centers. Contact our team for custom pricing based on your specific needs."
  },
  {
    id: 3,
    question: "What do I need to start dropshipping on Google?",
    answer: "To start dropshipping on Google, you'll need a Google Merchant Center account, a reliable supplier, product data feed, and a website. Our team can help you set up and optimize all these elements."
  },
  {
    id: 4,
    question: "Can't I just set up a Google Merchant Center by myself?",
    answer: "While it's possible to set up a GMC yourself, professional setup ensures compliance with Google's policies, optimized product feeds, and proper integration with your e-commerce platform for maximum performance."
  }
];

const moreFaqs = [
  {
    id: 5,
    question: "How much does your Google Ads service for ecommerce cost?",
    answer: "Our Google Ads service pricing varies based on your business size and needs. We offer flexible packages starting from basic setup to full-service management. Schedule a call to get a customized quote."
  },
  {
    id: 6,
    question: "How quickly can I expect to see results from Google Ads?",
    answer: "Initial results can be seen within the first few weeks, but optimal performance is typically achieved within 2-3 months as we continuously optimize your campaigns based on data."
  },
  {
    id: 7,
    question: "What types of ecommerce businesses work best with your Google Ads service?",
    answer: "Our service is effective for various ecommerce businesses, particularly those with clear product differentiation, competitive pricing, and good profit margins. We've successfully worked with fashion, electronics, home goods, and specialty product retailers."
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
          
          <div className="p-5 relative z-10">
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
                  <div className="pt-3 text-sm text-gray-300">
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
  const [showMore, setShowMore] = useState(false);
  const [displayedFaqs, setDisplayedFaqs] = useState(initialFaqs);

  const handleShowMore = () => {
    setShowMore(true);
    setDisplayedFaqs([...initialFaqs, ...moreFaqs]);
  };

  return (
    <div className="relative w-full overflow-hidden py-20">
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
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white flex flex-col items-center gap-2">
            <span>Let's Answer Some</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] to-[#1a73e8] mt-1">
              Frequently Asked Questions
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* FAQ Cards Container */}
          <div className="max-w-3xl mx-auto space-y-4 relative">
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

          {/* Shadow Overlay and See More Button */}
          {!showMore && (
            <div className="relative mt-8">
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#05070e] via-[#05070e]/80 to-transparent" />
              <div className="relative z-10 flex justify-center pt-20">
                <ShimmerButton
                  onClick={handleShowMore}
                  className="px-8 py-4 text-base font-medium"
                  background="#4285F4"
                >
                  See More Questions
                </ShimmerButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}; 