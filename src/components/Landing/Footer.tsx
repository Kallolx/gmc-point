"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export const Footer = () => {
  const { scrollYProgress, scrollY } = useScroll();
  
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
    <motion.footer 
      style={{ y, opacity }}
      className="relative min-h-screen flex flex-col items-center justify-center"
    >

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center space-y-12">
          {/* Hello Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xl text-[#a9bcff] font-light tracking-widest"
          >
            <span className="text-2xl">👋</span>
            <span className="font-bold tracking-[0.2em]">HELLO!</span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/50"
          >
            LET'S TALK
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] via-[#a9bcff] to-[#4285F4]">
              WITH US
            </span>
          </motion.h2>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link 
              href="mailto:hello@example.com"
              className="text-2xl sm:text-3xl text-[#a9bcff]/90 hover:text-[#a9bcff] transition-colors relative group font-light tracking-wide"
            >
              gmcpoint@gmail.com
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
        className="absolute bottom-0 left-0 right-0 py-8 px-4 border-t border-[#4285F4]/10 bg-[#05070e]/80 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-[#a9bcff]/70 text-sm font-light tracking-wider"
          >
            © 2025 GMCPOINT
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center gap-8 text-sm uppercase tracking-widest"
          >
            <Link href="#" className="text-[#a9bcff]/70 hover:text-[#a9bcff] transition-colors">Agency</Link>
            <Link href="#" className="text-[#a9bcff]/70 hover:text-[#a9bcff] transition-colors">Career</Link>
            <Link href="#" className="text-[#a9bcff]/70 hover:text-[#a9bcff] transition-colors">Privacy</Link>
            <Link href="#" className="text-[#a9bcff]/70 hover:text-[#a9bcff] transition-colors">Terms & Condition</Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex items-center gap-6"
          >
            {[
              {
                href: "https://facebook.com",
                icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
              },
              {
                href: "https://twitter.com",
                icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
              },
              {
                href: "https://youtube.com",
                icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
              },
              {
                href: "https://linkedin.com",
                icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              }
            ].map((social, index) => (
              <Link 
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a9bcff]/70 hover:text-[#a9bcff] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#4285F4]/10 border border-[#4285F4]/20 backdrop-blur-sm flex items-center justify-center text-[#a9bcff] hover:text-white hover:bg-[#4285F4]/20 transition-all duration-300 group"
      >
        <ArrowUpIcon className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300" />
      </motion.button>

    </motion.footer>
  );
};