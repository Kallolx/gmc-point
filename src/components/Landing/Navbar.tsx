"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShimmerButton } from '../magicui/shimmer-button';
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { StairsMenu } from '../ui/StairsMenu';
import { useFloating, useHover, useInteractions, offset, flip, shift, size, FloatingPortal, arrow, safePolygon } from "@floating-ui/react";
import { AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export const Navbar = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const { refs: accountRefs, floatingStyles: accountFloatingStyles, context: accountContext } = useFloating({
    open: isAccountDropdownOpen,
    onOpenChange: setIsAccountDropdownOpen,
    placement: "bottom-end",
    middleware: [
      offset({ mainAxis: 15, crossAxis: 0 }),
      flip({ padding: 20 }),
      shift({ padding: 20 }),
    ],
  });

  const accountHover = useHover(accountContext, {
    delay: { open: 0, close: 150 },
    restMs: 40,
    handleClose: safePolygon(),
  });

  const { getReferenceProps: getAccountReferenceProps, getFloatingProps: getAccountFloatingProps } = useInteractions([accountHover]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  useEffect(() => {
    // Check login status
    const checkLoginStatus = () => {
      const loginStatus = localStorage.getItem("isLoggedIn") === "true";
      const email = localStorage.getItem("userEmail") || "";
      setIsLoggedIn(loginStatus);
      setUserEmail(email);
    };

    checkLoginStatus();
    window.addEventListener("storage", checkLoginStatus);
    return () => window.removeEventListener("storage", checkLoginStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setUserEmail("");
    window.location.href = "/";
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for navbar height
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div 
      className={`w-full fixed top-0 z-[999] transition-all duration-300 ${
        isScrolled 
          ? "bg-[#05070e]/80 border-b border-[#4285F4]/10" 
          : "bg-gradient-to-b from-[#05070e]/80 to-transparent border-b border-transparent"
      }`}
      style={{
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {/* Add a background overlay for better text contrast */}
      <div className={`absolute inset-0 transition-opacity duration-300 ${
        isScrolled ? "opacity-100" : "opacity-0"
      }`}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#4285F4]/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <nav 
          className={`flex items-center justify-between w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300`}
        >
          {/* Logo */}
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
                width={160}
                height={40}           
                className="h-8 sm:h-10 w-auto"
              />
            </Link>
          </motion.div>
          
          {/* Desktop Menu */}
          <motion.div 
            className="hidden md:flex flex-1 justify-center items-center space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative group"
            >
              <button 
                onClick={() => scrollToSection('case-studies')}
                className="text-white transition-all duration-300 cursor-pointer relative"
              >
                <span className="relative inline-block">
                  Case Studies
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4285F4] to-transparent opacity-0 group-hover:opacity-100 transform group-hover:translate-y-1 transition-all duration-300"></span>
                </span>
                <span className="absolute -inset-x-2 -inset-y-1 bg-gradient-to-r from-[#4285F4]/0 via-[#4285F4]/10 to-[#4285F4]/0 opacity-0 group-hover:opacity-100 rounded-full blur-sm transition-opacity duration-300"></span>
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative group"
            >
              <button
                onClick={() => scrollToSection('why-choose')}
                className="text-white transition-all duration-300 cursor-pointer relative"
              >
                <span className="relative inline-block">
                  About Us
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4285F4] to-transparent opacity-0 group-hover:opacity-100 transform group-hover:translate-y-1 transition-all duration-300"></span>
                </span>
                <span className="absolute -inset-x-2 -inset-y-1 bg-gradient-to-r from-[#4285F4]/0 via-[#4285F4]/10 to-[#4285F4]/0 opacity-0 group-hover:opacity-100 rounded-full blur-sm transition-opacity duration-300"></span>
              </button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative group"
            >
              <button 
                onClick={() => isLoggedIn ? window.location.href = "/account" : window.location.href = "/login"}
                className="text-white transition-all duration-300 cursor-pointer relative"
              >
                <span className="relative inline-block">
                  Track Your Project
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#4285F4] to-transparent opacity-0 group-hover:opacity-100 transform group-hover:translate-y-1 transition-all duration-300"></span>
                </span>
                <span className="absolute -inset-x-2 -inset-y-1 bg-gradient-to-r from-[#4285F4]/0 via-[#4285F4]/10 to-[#4285F4]/0 opacity-0 group-hover:opacity-100 rounded-full blur-sm transition-opacity duration-300"></span>
              </button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu */}
          <StairsMenu 
            isOpen={isMobileMenuOpen}
            onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />

          {/* CTA Buttons */}
          <motion.div
            className="hidden md:flex items-center space-x-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {isLoggedIn ? (
              <div className="relative">
                <button
                  ref={accountRefs.setReference}
                  {...getAccountReferenceProps()}
                  className="flex items-center space-x-2 px-3 py-2 rounded-full border border-[#4285F4]/20 hover:border-[#4285F4]/40 hover:bg-[#4285F4]/10 transition-all duration-200"
                >
                  <div className="w-8 h-8 rounded-full bg-[#4285F4]/20 flex items-center justify-center">
                    <span className="text-white text-sm">{userEmail[0].toUpperCase()}</span>
                  </div>
                  <ChevronDownIcon className="w-4 h-4 text-white/70" />
                </button>

                <AnimatePresence>
                  {isAccountDropdownOpen && (
                    <motion.div
                      ref={accountRefs.setFloating}
                      style={accountFloatingStyles}
                      {...getAccountFloatingProps()}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="z-50 min-w-[200px] backdrop-blur-xl bg-[#05070e] border border-[#4285F4]/20 rounded-xl shadow-lg overflow-hidden"
                    >
                      <div className="p-3 border-b border-[#4285F4]/10">
                        <p className="text-sm text-white/70">Signed in as</p>
                        <p className="text-sm font-medium text-white truncate">{userEmail}</p>
                      </div>
                      <div className="p-1">
                        <Link
                          href="/account"
                          className="flex items-center space-x-2 px-3 py-2 text-sm text-white hover:bg-[#4285F4]/10 rounded-lg transition-colors"
                        >
                          <span>My Account</span>
                        </Link>
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center space-x-2 px-3 py-2 text-sm text-white hover:bg-[#4285F4]/10 rounded-lg transition-colors"
                        >
                          <span>Sign Out</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <Link 
                  href="/login" 
                  className="px-6 py-2.5 text-sm text-white/90 hover:text-white transition-colors rounded-full border border-white/10 hover:border-[#4285F4]/20 hover:bg-[#4285F4]/10 backdrop-blur-sm"
                >
                  Login
                </Link>
                <ShimmerButton className="px-6 py-2.5 text-sm">
                  Book a Call
                </ShimmerButton>
              </>
            )}
          </motion.div>
        </nav>
      </div>
    </motion.div>
  );
}; 