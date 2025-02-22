"use client";

import { useState } from "react";
import { motion as m } from "framer-motion";
import { ResultCard } from "./ResultCard";
import { RadialBlurCircle } from "./RadialBlurCircle";

const results = [
  {
    id: 1,
    beforeDate: "April 2024",
    afterDate: "June 2024",
    metrics: {
      scaledFrom: "0",
      salesPerMonth: "28,260",
      ordersPerMonth: "569",
      avgCR: "1.99",
      totalRevenue: "31,127"
    }
  },
  {
    id: 2,
    beforeDate: "March 2024",
    afterDate: "May 2024",
    metrics: {
      scaledFrom: "0",
      salesPerMonth: "35,450",
      ordersPerMonth: "742",
      avgCR: "2.15",
      totalRevenue: "42,890"
    }
  },
  {
    id: 3,
    beforeDate: "February 2024",
    afterDate: "April 2024",
    metrics: {
      scaledFrom: "0",
      salesPerMonth: "22,780",
      ordersPerMonth: "483",
      avgCR: "1.87",
      totalRevenue: "25,340"
    }
  }
];

export const ResultsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % results.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + results.length) % results.length);
  };

  return (
    <section className="relative py-32 overflow-hidden bg-[#05070e]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Radial Blur Circles */}
        <div className="absolute inset-0">
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

        {/* Animated Center Glow */}
        <m.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(66,133,244,0.15) 0%, rgba(66,133,244,0.05) 45%, transparent 70%)",
            filter: "blur(60px)",
            mixBlendMode: "screen",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Additional Ambient Effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-conic from-transparent via-white/[0.03] to-transparent animate-[spin_8s_linear_infinite]" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.45, 0.27, 0.9] }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal text-white mb-8 tracking-[-0.02em] leading-[1.1]">
            See the{" "}
            <span className="text-[#4285F4]">
              results
            </span>{" "}
            we created for{" "}
            <br />
            <span className="text-[#4285F4]">
              businesses like yours
            </span>
          </h2>
        </m.div>

        {/* Results Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <m.div
              className="flex transition-transform duration-500 ease-out"
              animate={{ x: `${-activeIndex * 100}%` }}
              transition={{ type: "spring", damping: 30, stiffness: 150 }}
            >
              {results.map((result, index) => (
                <div key={result.id} className="min-w-full px-4">
                  <ResultCard {...result} isActive={index === activeIndex} />
                </div>
              ))}
            </m.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-[#4285F4]/20 flex items-center justify-center text-[#4285F4] hover:bg-[#4285F4]/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={activeIndex === 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-[#4285F4]/20 flex items-center justify-center text-[#4285F4] hover:bg-[#4285F4]/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={activeIndex === results.length - 1}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}; 