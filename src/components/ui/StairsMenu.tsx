"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShimmerButton } from "../magicui/shimmer-button";

interface StairsMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const StairsMenu = ({ isOpen, onToggle }: StairsMenuProps) => {
  const menuVariants = {
    closed: {
      y: -20,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      }
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      }
    }
  };

  const menuItemVariants = {
    closed: (i: number) => ({
      y: -10,
      opacity: 0,
      transition: {
        type: "tween",
        duration: 0.2,
        delay: 0.05 * i,
        ease: [0.4, 0, 0.2, 1],
      }
    }),
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.2,
        delay: 0.05 * i,
        ease: [0.4, 0, 0.2, 1],
      }
    })
  };

  const menuLinks = [
    { 
      href: "/services", 
      label: "Services",
      hasDropdown: true 
    },
    { 
      href: "/case-studies", 
      label: "Case Studies",
      hasDropdown: false 
    },
    { 
      href: "/about", 
      label: "About us",
      hasDropdown: false 
    }
  ];

  return (
    <>
      {/* Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden ${!isOpen && 'pointer-events-none'}`}
        onClick={onToggle}
      />

      {/* Stairs Menu Icon */}
      <button
        onClick={onToggle}
        className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-end gap-[3px] group p-1"
      >
        <motion.span
          animate={isOpen ? { width: "100%", y: 7, rotate: 45 } : { width: "50%", y: 0, rotate: 0 }}
          className="h-[2px] bg-white block origin-center transition-transform"
        />
        <motion.span
          animate={isOpen ? { width: "100%", opacity: 0 } : { width: "75%", opacity: 1 }}
          className="h-[2px] bg-white block transition-all"
        />
        <motion.span
          animate={isOpen ? { width: "100%", y: -7, rotate: -45 } : { width: "100%", y: 0, rotate: 0 }}
          className="h-[2px] bg-white block origin-center transition-transform"
        />
      </button>

      {/* Mobile Menu Dropdown */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        className="fixed top-[72px] w-full left-0 right-0 bg-[#05070e] border-b border-white/10 z-40 md:hidden"
      >
        <div className="flex flex-col w-full">
          {/* Menu Links */}
          <div className="flex flex-col">
            {menuLinks.map((link, i) => (
              <motion.div
                key={link.href}
                custom={i}
                variants={menuItemVariants}
                className="w-full border-b border-white/10 last:border-none"
              >
                <Link
                  href={link.href}
                  className="flex items-center justify-between text-lg font-medium text-white py-4 px-6 hover:bg-white/5 transition-colors"
                  onClick={onToggle}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      strokeWidth={2} 
                      stroke="currentColor" 
                      className="w-4 h-4 text-white/70"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            variants={menuItemVariants}
            custom={4}
            className="p-4"
          >
            <ShimmerButton
              className="w-full px-6 py-3 text-base"
              onClick={onToggle}
            >
              Book a Call
            </ShimmerButton>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}; 