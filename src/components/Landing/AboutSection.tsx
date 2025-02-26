"use client";

import { m, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { NumberTicker } from "../ui/NumberTicker";

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

const stats = [
  {
    value: 34,
    label: "Revenue Generated",
    prefix: "$",
    suffix: "M+",
  },
  {
    value: 300,
    label: "GMCs Managed",
    prefix: "",
    suffix: "+",
  },
  {
    value: 120,
    label: "Active Clients",
    prefix: "",
    suffix: "+",
  },
  {
    value: 95,
    label: "Client Retention",
    prefix: "",
    suffix: "%",
  }
];

export const AboutSection = () => {
  const [expandedId, setExpandedId] = useState<number>(1);

  return (
    <div id="why-choose" className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Trusted by Leading Businesses
            </h3>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative backdrop-blur-xl bg-white/[0.02] rounded-2xl border border-white/[0.05] p-6 h-full overflow-hidden transition-all duration-500">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500">
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <div className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#4285F4]">
                      <NumberTicker
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                        delay={0.2 + index * 0.1}
                        className="text-3xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#4285F4]"
                      />
                    </div>
                    <div className="mt-2 text-sm text-gray-400">
                      {stat.label}
                    </div>
                  </div>

                  {/* Decorative corner gradient */}
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-[#4285F4]/20 to-transparent rounded-full blur-lg transform group-hover:scale-150 transition-transform duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

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
                src="/about.jpg"
                alt="About GMC Point"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
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