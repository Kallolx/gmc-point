"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShimmerButton } from '../magicui/shimmer-button';
import { FeatureDropdown } from '../ui/FeatureDropdown';
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.div 
      className={`w-full flex justify-center fixed top-0 z-50 transition-all duration-300 ${
        isScrolled ? "pt-4" : "pt-8"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <nav 
        className={`flex items-center justify-between p-2 rounded-full w-[90%] max-w-[800px] transition-all duration-300 ${
          isScrolled ? "bg-[]/80 backdrop-blur-lg" : "bg-[#b99af300] backdrop-blur-sm shadow-lg"
        }`}
      >
        <motion.div 
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Luminous"
              width={140}
              height={32}           
              className="h-8 w-auto"
            />
          </Link>
        </motion.div>
        
        <motion.div 
          className="flex-1 flex justify-center items-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <FeatureDropdown>
                <div className="flex items-center space-x-1 cursor-pointer">
                  <span className="text-white hover:text-gray-200 transition-colors">
                    Services
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-white transition-transform duration-200 group-hover:rotate-180">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
              </FeatureDropdown>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/case-studies" className="text-white hover:text-gray-200 transition-colors">
                Case Studies
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Link href="/about" className="text-white hover:text-gray-200 transition-colors">
                About us
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="flex-shrink-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShimmerButton>
            Book a Call
          </ShimmerButton>
        </motion.div>
      </nav>
    </motion.div>
  );
};

export default Navbar; 