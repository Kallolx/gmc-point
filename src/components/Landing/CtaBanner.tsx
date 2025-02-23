"use client";

import { motion } from "framer-motion";
import { ShimmerButton } from "../magicui/shimmer-button";
import Image from "next/image";

export const CtaBanner = () => {
  return (
    <div className="relative w-full overflow-hidden py-8 sm:py-12 lg:py-16">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 backdrop-blur-xl bg-white/[0.02]"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#4285F4_0%,_#1a73e8_50%,_rgba(26,115,232,0)_100%)] opacity-5" />
          
          {/* Content Grid */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8">
            {/* Left Section - Text Content */}
            <div className="flex flex-col justify-center space-y-3 sm:space-y-4">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-white text-center lg:text-left"
              >
                Ready to Transform Your{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] to-[#1a73e8]">
                  Digital Presence?
                </span>
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm sm:text-base text-gray-300 text-center lg:text-left"
              >
                Join the ranks of successful businesses that have elevated their online presence with our expert Google Merchant Center and SEO strategies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center lg:justify-start"
              >
                <ShimmerButton
                  className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium"
                  background="#4285F4"
                >
                  Schedule Your Free Consultation
                </ShimmerButton>
              </motion.div>
            </div>

            {/* Right Section - Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex items-center justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[300px] sm:max-w-[400px] aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-lg">
                <Image
                  src="/feature.png"
                  alt="Digital Marketing Dashboard"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Image Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent" />
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-24 w-48 h-48 bg-[#4285F4] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
          <div className="absolute top-1/2 -translate-y-1/2 -right-24 w-48 h-48 bg-[#1a73e8] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        </motion.div>
      </div>
    </div>
  );
}; 