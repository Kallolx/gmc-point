"use client";

import { m, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { RadialBlurCircle } from "../ui/RadialBlurCircle";

const features = [
  {
    id: 1,
    title: "Dedicated account management",
    description: "Our team of experts has extensive experience and in-depth knowledge of Google Merchant Centers and SEO principles, enabling us to integrate advanced SEO strategies into our solutions and generate maximum visibility and traffic"
  },
  {
    id: 2,
    title: "Weekly progress reports",
    description: "Stay informed with detailed weekly reports showcasing your campaign's performance, traffic analytics, and ROI metrics. We believe in complete transparency and data-driven decision making."
  },
  {
    id: 3,
    title: "Unmatched expertise",
    description: "With years of specialized experience in Google Merchant Center optimization and SEO, our team brings unparalleled expertise to help your business succeed in the digital marketplace."
  },
  {
    id: 4,
    title: "Revenue Generator Master",
    description: "Our proven strategies have helped businesses achieve significant revenue growth through optimized product listings and enhanced online visibility."
  },
  {
    id: 5,
    title: "300+ clients served",
    description: "We've successfully partnered with over 300 businesses, helping them achieve their e-commerce goals and establish a strong online presence."
  }
];

export const AboutSection = () => {
  const [expandedId, setExpandedId] = useState<number>(1);

  return (
    <div className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-20">
      {/* Background Blur Balls */}
      <div className="absolute inset-0 z-0">
        {/* Background Effects */}
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
        <m.div
          className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(66,133,244,0.15) 0%, rgba(66,133,244,0.05) 45%, transparent 70%)",
            filter: "blur(60px)",
            mixBlendMode: "screen",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Left Section - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative order-1 lg:order-1 max-w-[400px] sm:max-w-[500px] lg:max-w-none mx-auto w-full"
          >
            <div className="relative aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden rounded-3xl">
              <Image
                src="/nav1.jpg"
                alt="About GMC Point"
                fill
                className="object-cover"
                priority
              />
              {/* Enhanced Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0">
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Stats Content */}
                <div className="relative p-3 sm:p-4 lg:p-8">
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="relative group"
                    >
                      {/* Stat Background */}
                      <div className="absolute inset-0 bg-[#4285F4]/10 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:bg-[#4285F4]/20" />
                      
                      {/* Stat Content */}
                      <div className="relative p-2 sm:p-3 lg:p-4">
                        <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                          $34M
                        </div>
                        <div className="text-[10px] sm:text-xs lg:text-sm text-white/80 font-medium mt-1">
                          Revenue in 2023
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-[#4285F4]/10 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:bg-[#4285F4]/20" />
                      <div className="relative p-2 sm:p-3 lg:p-4">
                        <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                          300+
                        </div>
                        <div className="text-[10px] sm:text-xs lg:text-sm text-white/80 font-medium mt-1">
                          GMCs
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-[#4285F4]/10 rounded-xl backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:bg-[#4285F4]/20" />
                      <div className="relative p-2 sm:p-3 lg:p-4">
                        <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                          120+
                        </div>
                        <div className="text-[10px] sm:text-xs lg:text-sm text-white/80 font-medium mt-1">
                          Clients
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Section - Content */}
          <div className="flex flex-col justify-center space-y-6 sm:space-y-8 order-2 lg:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center lg:text-left"
            >
              Why choose{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] to-[#1a73e8]">
                GMC Point
              </span>
            </motion.h2>

            <div className="space-y-3 sm:space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => setExpandedId(feature.id === expandedId ? 0 : feature.id)}
                    className="w-full text-left"
                  >
                    <div className={`
                      group relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-300
                      ${expandedId === feature.id ? 'bg-white/[0.03] shadow-[0_0_20px_-5px_rgba(66,133,244,0.2)]' : 'bg-white/[0.02] hover:bg-white/[0.04]'}
                    `}>
                      {/* Enhanced Shimmer Effects for expanded card */}
                      {expandedId === feature.id && (
                        <>
                          <div className="absolute inset-0 -z-10">
                            <div className="absolute inset-0 translate-x-[-100%] animate-[shimmer_4s_infinite] bg-gradient-to-r from-transparent via-[#4285F4]/10 to-transparent" />
                          </div>
                          
                          <div className="absolute inset-0 -z-10">
                            <div className="absolute inset-0 translate-x-[-100%] animate-[fastShimmer_2s_infinite] bg-gradient-to-r from-transparent via-[#1a73e8]/15 to-transparent" />
                          </div>
                          
                          <div className="absolute inset-0 -z-10">
                            <div className="absolute inset-0 translate-x-[-100%] animate-[highlightShimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
                          </div>

                          <div className="absolute inset-0 -z-20 bg-[#4285F4]/3 animate-pulse" />
                        </>
                      )}
                      
                      <div className="p-3 sm:p-4 lg:p-6 relative z-10">
                        <div className="flex items-center justify-between">
                          <h3 className={`text-sm sm:text-base lg:text-lg font-semibold text-white transition-all duration-300 ${expandedId === feature.id ? 'text-[#4285F4]/90' : ''}`}>
                            {feature.title}
                          </h3>
                          <ChevronDownIcon 
                            className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 flex-shrink-0
                              ${expandedId === feature.id ? 'text-[#4285F4]/90 rotate-180' : 'text-white/70 rotate-0'}
                            `}
                          />
                        </div>
                        {expandedId === feature.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="mt-3 sm:mt-4 text-xs sm:text-sm lg:text-base text-gray-300 text-left">
                              {feature.description}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 