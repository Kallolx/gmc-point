"use client";

import { motion, useAnimationControls } from "framer-motion";
import { CompanyCard } from "../ui/CompanyCard";
import { ShimmerButton } from "../magicui/shimmer-button";
import { RadialBlurCircle } from "../ui/RadialBlurCircle";
import { useMemo } from "react";

const companies = [
  { name: "TechFlow", iconType: 0 },
  { name: "AI Dynamics", iconType: 1 },
  { name: "PowerScale", iconType: 2 },
  { name: "CloudSphere", iconType: 3 },
  { name: "GlobalTech", iconType: 4 },
  { name: "RocketLabs", iconType: 5 },
  { name: "DataForge", iconType: 6 },
  { name: "CodeCraft", iconType: 7 },
  { name: "CircuitLabs", iconType: 8 },
] as const;

export const PartnershipSection = () => {
  // Memoize the duplicated arrays to prevent recreation on each render
  const firstRowCompanies = useMemo(() => [...companies, ...companies], []);
  const secondRowCompanies = useMemo(() => [...companies, ...companies], []);

  return (
    <div className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <RadialBlurCircle
          position="top"
          color="#4285F4"
          className="opacity-40"
        />
        <motion.div
          className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full sm:w-[1000px] h-[500px] sm:h-[1000px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(66,133,244,0.07) 0%, rgba(66,133,244,0.03) 45%, transparent 70%)",
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

      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 sm:gap-8 mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl text-center lg:text-left"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Our extensive{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] to-[#1a73e8]">
                  partnership network
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-400">
                Book a discovery call with one of our account managers to
                discuss your goals and explore how our services can benefit your
                business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full sm:w-auto"
            >
              <ShimmerButton
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium"
                background="#4285F4"
              >
                Discover Partners
              </ShimmerButton>
            </motion.div>
          </div>
        </div>

        {/* Sliding rows container with relative positioning */}
        <div className="relative">
          {/* Edge Shadows - Absolute positioned within the sliding container */}
          <div className="absolute left-0 top-0 bottom-0 w-[50px] sm:w-[150px] bg-gradient-to-r from-[#05070e] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-[50px] sm:w-[150px] bg-gradient-to-l from-[#05070e] to-transparent z-10 pointer-events-none" />

          {/* Sliding rows */}
          <div className="py-6 sm:py-10">
            {/* First row - Slides left */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex whitespace-nowrap mb-8 sm:mb-12"
            >
              {firstRowCompanies.map((company, index) => (
                <CompanyCard
                  key={`${company.name}-1-${index}`}
                  name={company.name}
                  iconType={company.iconType}
                />
              ))}
            </motion.div>

            {/* Second row - Slides right */}
            <motion.div
              initial={{ x: "-50%" }}
              animate={{ x: 0 }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }}
              className="flex whitespace-nowrap"
            >
              {secondRowCompanies.map((company, index) => (
                <CompanyCard
                  key={`${company.name}-2-${index}`}
                  name={company.name}
                  iconType={company.iconType}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
