"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  useFloating,
  useHover,
  useInteractions,
  FloatingPortal,
  offset,
  flip,
  shift,
  safePolygon,
  size, 
  autoUpdate,
} from "@floating-ui/react";
import { useState } from "react";

const menuItems = [
  {
    title: "SEO Optimization",
    description: "Boost your visibility advanced SEO",
    image: "/nav1.jpg",
    href: "/services/seo",
  },
  {
    title: "PPC Management",
    description: "Maximize ROI with PPC campaigns",
    image: "/nav2.jpg",
    href: "/services/ppc",
  },
  {
    title: "Analytics & Tracking",
    description: "Data-driven insights for better decisions",
    image: "/nav3.jpg",
    href: "/services/analytics",
  },
  {
    title: "Merchant Center",
    description: "Optimize your Google Merchant setup",
    image: "/nav4.jpg",
    href: "/services/merchant",
  },
];

export const FeatureDropdown = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: "bottom",
    middleware: [
      offset(20),
      flip({
        fallbackPlacements: ['top'],
        padding: 20
      }),
      shift({
        padding: 20,
      }),
      size({
        apply({ availableWidth, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            maxWidth: `${availableWidth}px`,
            maxHeight: `${availableHeight}px`,
          });
        },
        padding: 20,
      }),
    ],
    whileElementsMounted: autoUpdate
  });

  const hover = useHover(context, {
    handleClose: safePolygon(),
    delay: { open: 0, close: 150 },
    restMs: 25
  });
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </div>
      <AnimatePresence>
        {isOpen && (
          <FloatingPortal id="floating-portal">
            <motion.div
              initial={{ 
                opacity: 0,
                y: -15,
                scale: 0.97,
                transformOrigin: "top"
              }}
              animate={{ 
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                  mass: 0.5
                }
              }}
              exit={{ 
                opacity: 0,
                y: -8,
                scale: 0.95,
                transition: {
                  duration: 0.2,
                  ease: [0.36, 0, 0.66, -0.56]
                }
              }}
              ref={refs.setFloating}
              style={{
                ...floatingStyles,
                left: '40%',
                top: '15%',
                transform: 'translateX(-50%)',
              }}
              {...getFloatingProps()}
              className="relative backdrop-blur-xl bg-white/[0.02] rounded-3xl border border-white/[0.05] shadow-[0_0_30px_-5px_rgba(66,133,244,0.1)] w-[500px] z-[9999] fixed overflow-hidden"
            >
              {/* Background Effects */}
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-conic from-transparent via-white/[0.03] to-transparent animate-[spin_8s_linear_infinite]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent" />
              </div>

              {/* Grid Layout (2x2) */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative z-10 grid grid-cols-2 gap-2 p-4"
              >
                {menuItems.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 150,
                        damping: 15,
                        mass: 0.5,
                        delay: 0.075 * i
                      }
                    }}
                    exit={{ 
                      opacity: 0,
                      y: 10,
                      transition: {
                        duration: 0.15,
                        delay: 0.025 * i
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      className="group relative backdrop-blur-xl bg-white/[0.02] rounded-2xl border border-white/[0.05] p-3 hover:bg-white/[0.05] transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(66,133,244,0.1)] flex items-center space-x-4"
                    >
                      {/* Hover Effects */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#4285F4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl pointer-events-none" />
                      <div className="absolute -inset-[1px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 pointer-events-none" />

                      {/* Small Image */}
                      <div className="relative h-[100px] w-[100px] overflow-hidden rounded-xl">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </div>

                      {/* Title & Description */}
                      <div className="flex-1 relative z-10">
                        <h3 className="font-medium text-white group-hover:text-[#4285F4] transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-[12px] text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {item.description}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </FloatingPortal>
        )}
      </AnimatePresence>
    </>
  );
};
