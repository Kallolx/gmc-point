"use client";

import React from "react";
import Image from "next/image";
import { ShimmerButton } from "../magicui/shimmer-button";
import { motion as m } from "framer-motion";
import MetricsDashboard from "./MetricsDashboard";

const googleColors = ["#4285F4", "#DB4437", "#F4B500", "#0F9D58"];
const animatedText = "Expert";



const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-[#4285F4]/20 rounded-full backdrop-blur-sm bg-[#4285F4]/5"
            >
              <span className="text-[#4285F4] text-sm font-medium">
                Expert GMC Management
              </span>
            </m.div>

            {/* Heading */}
            <m.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-normal text-white mb-4 tracking-[-0.08em] leading-[1.1]"
            >
              <m.span 
                className="block mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Intense <span className="text-[#4285F4]">GMC Support</span> from
              </m.span>
              <m.span 
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                Our{" "}
                <span className="inline-flex">
                  {animatedText.split("").map((letter, index) => (
                    <m.span
                      key={index}
                      style={{
                        color: googleColors[index % googleColors.length]
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        color: [
                          googleColors[index % googleColors.length],
                          googleColors[(index + 1) % googleColors.length],
                          googleColors[(index + 2) % googleColors.length],
                          googleColors[(index + 3) % googleColors.length],
                          googleColors[index % googleColors.length],
                        ]
                      }}
                      transition={{
                        opacity: { duration: 0.8, delay: 0.6 + index * 0.1 },
                        y: { duration: 0.8, delay: 0.6 + index * 0.1 },
                        color: {
                          repeat: Infinity,
                          duration: 4,
                          ease: "linear",
                          times: [0, 0.25, 0.5, 0.75, 1]
                        }
                      }}
                    >
                      {letter}
                    </m.span>
                  ))}
                </span>
                <span className="text-white"> In-house Team</span>
              </m.span>
            </m.h1>

            {/* Description */}
            <m.p 
              className="text-lg text-gray-400 mb-8 max-w-xl tracking-[-0.02em]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Get the best-ever Google Merchant Center service from our expert in-house team. From GMC creation to extensive maintenance after approval, all at one point.
            </m.p>

            {/* CTA Section */}
            <m.div 
              className="flex items-center gap-6 flex-col sm:flex-row lg:justify-start justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <m.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ShimmerButton className="px-8 py-3 text-base font-medium">
                  Book a Call
                </ShimmerButton>
              </m.div>

              <div className="flex items-center gap-3">
                <div className="flex items-center -space-x-4">
                  {[
                    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&auto=format&fit=crop&q=80",
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&auto=format&fit=crop&q=80",
                  ].map((src, i) => (
                    <m.div
                      key={src}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: 0.9 + i * 0.2,
                        ease: "easeOut",
                      }}
                      className="relative"
                    >
                      <div className="h-10 w-10 rounded-full border-2 border-white overflow-hidden">
                        <Image
                          src={src}
                          alt={`User ${i + 1}`}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                    </m.div>
                  ))}
                </div>
                <span className="text-sm text-gray-400">Join our happy clients pool
                </span>
              </div>
            </m.div>
          </div>

          {/* Right Infographic Component - Using the separate MetricsDashboard component */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex-1 relative w-full max-w-xl lg:max-w-none"
          >
            <MetricsDashboard />
          </m.div>
        </div>
      </div>
      
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#4285F4]/5 blur-[120px] -z-10"></div>
    </div>
  );
};

export default Hero;
