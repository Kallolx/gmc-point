"use client";

import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";
import { useRouter } from "next/navigation";

export const Footer = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const footerRef = useRef(null);
  const isFooterInView = useInView(footerRef, { once: false });
  const router = useRouter();
  
  // Enhanced animations with spring physics
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const y = useSpring(
    useTransform(scrollYProgress, [0.7, 1], ["100vh", "0vh"]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0.75, 0.85], [0, 1]),
    springConfig
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>

      <motion.footer 
        ref={footerRef}
        id="footer"
        style={{ y, opacity }}
        className="relative h-[600px] w-full flex flex-col mt-32 sm:mt-0"
      >
        {/* Main Content */}
        <div className="flex-grow w-full max-w-7xl mx-auto mb-32">
          <div className="flex flex-col h-full items-center justify-center text-center space-y-2 sm:space-y-3">
            {/* Hello Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-base sm:text-lg text-[#a9bcff] font-light tracking-widest"
            >
              <span className="text-xl sm:text-2xl">🖐️</span>
              <span className="font-bold tracking-[0.2em]">HELLO!</span>
            </motion.div>

            {/* Main Title */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter leading-tight sm:leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50"
            >
              LET'S TALK
              <br className="block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] via-[#a9bcff] to-[#4285F4] block mt-2 sm:mt-0">
                WITH US
              </span>
            </motion.h2>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-0"
            >
              <Link 
                href="mailto:contact@gmc-point.com"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#a9bcff]/90 hover:text-[#a9bcff] transition-colors relative group font-light tracking-wide"
              >
                contact@gmc-point.com
                <div className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-[#4285F4] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full py-3 sm:py-4 px-4 border-t border-[#4285F4]/30 bg-[#05070e]/10 backdrop-blur-xl"
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-3">
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-[#a9bcff]/70 text-sm font-light tracking-wider order-3 sm:order-1"
            >
              © 2025 GMCPOINT
            </motion.div>

            {/* Navigation */}
            <motion.nav
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-sm uppercase tracking-widest order-1 sm:order-2"
            >
              <Link href="/policies" className="text-[#a9bcff]/70 hover:text-[#a9bcff] transition-colors px-2 py-0.5">POLICIES</Link>
              <Link href="/faqs" className="text-[#a9bcff]/70 hover:text-[#a9bcff] transition-colors px-2 py-0.5">FAQS</Link>
              <button 
                onClick={() => document.getElementById('why-choose')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="text-[#a9bcff]/70 hover:text-[#a9bcff] transition-colors px-2 py-0.5 uppercase"
              >
                ABOUT US
              </button>
              <button 
                onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="text-[#a9bcff]/70 hover:text-[#a9bcff] transition-colors px-2 py-0.5 uppercase"
              >
                CASE STUDIES
              </button>              
            </motion.nav>

            {/* Arrow Up Icon (Replacing Social Links) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex items-center gap-3 order-2 sm:order-3"
            >
              <button
                onClick={scrollToTop}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#4285F4]/10 hover:bg-[#4285F4]/20 text-[#a9bcff]/70 hover:text-[#a9bcff] transition-all duration-300"
                aria-label="Scroll to top"
              >
                <ArrowUpIcon className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.footer>
    </>
  );
};