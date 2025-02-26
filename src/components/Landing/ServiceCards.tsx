"use client";

import { useRef } from "react";
import { motion as m } from "framer-motion";
import { ShimmerButton } from "../magicui/shimmer-button";
import { cn } from "@/lib/utils";
import { RadialBlurCircle } from "@/components/ui/RadialBlurCircle";
import Link from "next/link";

const services = [
  {
    title: "Google Merchant Center",
    description:
      "Expert management and optimization of your product listings for maximum visibility.",
    features: [
      "Product feed optimization & setup",
      "Account verification & compliance",
      "Shopping campaign management",
      "Performance monitoring & reporting",
      "Competitor price tracking",
    ],
    gradient: "from-[#4285F4] to-[#34A853]",
    stats: {
      value: "300+",
      label: "Merchant Centers Managed",
    },
    href: "/services/merchant-center"
  },
  {
    title: "Analytics & Tracking",
    description:
      "Data-driven insights to power your business decisions and growth.",
    features: [
      "Custom dashboard implementation",
      "Real-time performance tracking",
      "Conversion rate optimization",
      "Customer behavior analysis",
      "ROI & metrics reporting",
    ],
    gradient: "from-[#EA4335] to-[#FBBC05]",
    stats: {
      value: "$34M+",
      label: "Revenue Generated",
    },
    href: "/services/analytics"
  },
];

const middleCardFeatures = [
  "Free initial consultation",
  "Dedicated account manager",
  "Weekly performance reports",
  "24/7 support access",
];

export const ServiceCards = () => {
  const sectionRef = useRef(null);

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
      filter: "blur(10px)",
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: i * 0.2,
        duration: 0.8,
      },
    }),
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* Content */}
      <div className="relative z-10 py-32">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Section Header */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.21, 0.45, 0.27, 0.9] }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-8 tracking-[-0.08em] leading-[1.1]">
            Essential{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] to-[#c7c2f9]">
              Google Merchant Center
              </span>
              <br />
              Solutions for Your Business Growth
            </h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Our experts handle the entire process, from creating your GMC from scratch to approval and ongoing maintenance, ensuring top-quality service for you.
            </p>
          </m.div>

          {/* Services Container */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
            {/* Service Cards */}
            {services.map((service, index) => (
              <m.div
                key={service.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link href={service.href} className="block">
                  <div className="group relative backdrop-blur-xl bg-white/[0.02] rounded-3xl border border-white/[0.05] p-8 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(66,133,244,0.1)] h-full overflow-hidden">
                    {/* Shimmer effect - only on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500">
                      <div className="absolute inset-0 translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
                    </div>
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <h3 className="text-2xl font-medium text-white group-hover:text-[#4285F4] transition-colors duration-300">
                          {service.title}
                        </h3>
                        <div className="relative text-right">
                          <m.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="relative"
                          >
                            <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#4285F4] group-hover:to-[#34A853] transition-all duration-500">
                              {service.stats.value}
                            </div>
                            <div className="text-sm text-[#a9bcff] group-hover:text-[#6d28d9] transition-colors duration-300">
                              {service.stats.label}
                            </div>
                          </m.div>
                        </div>
                      </div>

                      <p className="text-gray-400 text-base mb-6">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, i) => (
                          <m.li
                            key={i}
                            custom={i}
                            variants={listItemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex items-center space-x-3 text-gray-300 text-sm"
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} group-hover:scale-125 transition-transform duration-300`}
                            />
                            <span className="group-hover:text-gray-200 transition-colors duration-300">
                              {feature}
                            </span>
                          </m.li>
                        ))}
                      </ul>

                      {/* Enhanced CTA Link */}
                      <div className="relative mt-6">
                        <m.button
                          className="relative flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-all duration-300 group/btn ml-auto"
                          whileHover={{ x: 5 }}
                        >
                          <span className="relative">
                            Learn more
                            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white to-transparent scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-500" />
                          </span>
                          <svg
                            className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </m.button>
                      </div>
                    </div>
                  </div>
                </Link>
              </m.div>
            ))}

            {/* Middle Card - Special Design */}
            <m.div
              custom={1}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link href="/get-started" className="block">
                <div className="group relative backdrop-blur-xl bg-white/[0.02] rounded-3xl border border-white/[0.05] p-8 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(66,133,244,0.1)] h-full overflow-hidden">
                    {/* Shimmer effect - only on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500">
                      <div className="absolute inset-0 translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
                    </div>

                    <div className="relative z-10">
                      {/* Top Section */}
                      <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-[#4285F4] to-[#6d28d9] mb-4">
                          <img src="/feature.png" alt="logo" className="relative w-12 h-12" />
                        </div>
                        <h3 className="text-2xl text-white mb-2">
                          Start Growing Today
                        </h3>
                        <p className="text-gray-400 text-sm">
                          Get started with our comprehensive solution
                        </p>
                      </div>

                      {/* Features List */}
                      <div className="space-y-3 mb-8">
                        {middleCardFeatures.map((feature, i) => (
                          <m.div
                            key={i}
                            custom={i}
                            variants={listItemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex items-center space-x-3 text-gray-300 text-sm"
                          >
                            <svg
                              className="w-4 h-4 text-[#4285F4]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span>{feature}</span>
                          </m.div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <ShimmerButton className="w-full py-4 text-sm font-medium">
                        Schedule Free Consultation
                      </ShimmerButton>
                    </div>
                  </div>
              </Link>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
};
