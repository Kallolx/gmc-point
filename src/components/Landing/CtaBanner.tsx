"use client";

import { motion } from "framer-motion";
import { ShimmerButton } from "../magicui/shimmer-button";
import Image from "next/image";

export const CtaBanner = () => {
  return (
    <div className="relative w-full overflow-hidden py-20 sm:py-28 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#4285F4]/10 rounded-full filter blur-[100px] opacity-30" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#1a73e8]/10 rounded-full filter blur-[100px] opacity-30" />
      </div>

      {/* Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 backdrop-blur-xl bg-gradient-to-b from-white/[0.05] to-transparent"
        >
          {/* Background Patterns */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-[0.02]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#4285F4]/5 to-transparent" />
          </div>

          {/* Content Grid */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-0 p-8 sm:p-12 lg:p-16">
            {/* Left Section - Text Content */}
            <div className="flex flex-col justify-center space-y-6 lg:pr-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center mx-auto lg:mx-0 px-4 py-1.5 mb-4 border border-[#4285F4]/20 rounded-full backdrop-blur-sm bg-[#4285F4]/5 w-fit"
              >
                <span className="text-[#4285F4] text-sm font-medium">
                  Ready to Get Started?
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center lg:text-left tracking-tight"
              >
                Transform Your{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] via-[#a9bcff] to-[#4285F4] animate-gradient">
                  Digital Presence
                </span>{" "}
                Today
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-lg text-gray-300 text-center lg:text-left"
              >
                Join hundreds of successful businesses that have elevated their
                online presence with our expert Google Merchant Center accounts.
                Get started with a free consultation today.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4"
              >
                <ShimmerButton
                  className="px-6 py-2.5 text-sm font-medium"
                  background="#4285F4"
                >
                  Schedule Free Consultation
                </ShimmerButton>
                <button 
                  className="px-6 py-2.5 text-sm font-medium text-white/90 hover:text-white transition-colors rounded-full border border-white/10 hover:border-white/20 backdrop-blur-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('case-studies');
                    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                >
                  View Case Studies
                </button>
              </motion.div>
            </div>

            {/* Right Section - Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex items-center justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[600px] aspect-[16/9]">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full"
                  >
                    <source src="/dashboard.mp4" type="video/mp4" />
                  </video>
                  {/* Video Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#05070e]/40 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
