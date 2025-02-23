"use client";

import React from "react";
import Image from "next/image";
import { ShimmerButton } from "../magicui/shimmer-button";
import { motion as m } from "framer-motion";
import { InteractiveGridPattern } from "../magicui/interactive-grid-pattern";

const googleColors = ["#4285F4", "#DB4437", "#F4B500", "#0F9D58"];
const googleText = "Google";

const Hero = () => {
  return (
    <div className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background Image with fade in */}
      <m.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image
          src="/bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </m.div>

      {/* Interactive Grid Pattern with delayed fade */}
      <m.div 
        className="absolute inset-0 z-[1]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <InteractiveGridPattern
          width={60}
          height={60}
          squares={[30, 20]}
          className="absolute inset-0 w-full h-full"
          squaresClassName="stroke-white/[0.075] hover:fill-white/25 fill-transparent"
        />
      </m.div>

      {/* Content */}
      <div className="mt-32 relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-24 pb-16 text-center">
        {/* Heading with staggered children */}
        <m.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-normal text-white mb-4 sm:mb-6 tracking-[-0.08em] leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <m.span 
            className="block mb-2 sm:mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Don't Just Advertise - <span className="text-[#a9bcff]">Dominate</span>
          </m.span>
          <m.span 
            className="block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            The{" "}
            <span className="inline-flex">
              {googleText.split("").map((letter, index) => (
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
            <span className="text-white"> Ads</span> Advantage
          </m.span>
        </m.h1>

        {/* Description with fade up */}
        <m.p 
          className="text-base sm:text-lg text-gray-300 mb-8 sm:mb-12 max-w-2xl sm:max-w-3xl mx-auto tracking-[-0.02em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          We boost visibility and drive traffic for e-commerce businesses with
          expert Google Merchant Center setups and cutting-edge SEO strategies.
        </m.p>

        {/* CTA Section */}
        <m.div 
          className="flex items-center justify-center gap-4 flex-col sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <m.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ShimmerButton className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium">
              Book a Call
            </ShimmerButton>
          </m.div>

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
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-white overflow-hidden">
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
        </m.div>

        {/* Dashboard Preview */}
        <m.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex items-center justify-center mt-12 sm:mt-16 mb-12 sm:mb-20 w-full"
        >
          <m.div
            initial={{ borderRadius: "0.75rem" }}
            whileInView={{
              boxShadow: "0 0 50px rgba(0,0,0,0.2)",
            }}
            transition={{ duration: 1, delay: 1.5 }}
            className="relative w-full max-w-[1000px] overflow-hidden rounded-xl bg-[#1B1018]"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
            >
              <source src="/dashboard.mp4" type="video/mp4" />
            </video>
            {/* Loading overlay with gradient */}
            <m.div
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute inset-0 bg-gradient-to-b from-[#1B1018] to-black/80 pointer-events-none"
            />
            {/* Shimmer effect */}
            <m.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.5,
                delay: 1.2,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"
            />
          </m.div>
        </m.div>
      </div>
    </div>
  );
};

export default Hero;
