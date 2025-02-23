"use client";

import { useMotionValue, motion, useMotionTemplate, AnimatePresence } from "framer-motion";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";
import { cn } from "@/lib/utils";

interface CardSpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  radius?: number;
  color?: string;
  children: React.ReactNode;
  canvasColors?: number[][];
}

export const CardSpotlight = ({
  children,
  radius = 400,
  color = "rgba(66, 133, 244, 0.075)",
  className,
  canvasColors = [[66, 133, 244]],
  ...props
}: CardSpotlightProps) => {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Main spotlight gradient
  const spotlightGradient = useMotionTemplate`radial-gradient(
    ${radius}px circle at ${mouseX}px ${mouseY}px,
    ${color},
    transparent 100%
  )`;

  // Soft glow effect
  const glowGradient = useMotionTemplate`radial-gradient(
    800px circle at ${mouseX}px ${mouseY}px,
    rgba(66, 133, 244, 0.08),
    transparent 40%
  )`;

  // Shimmer effect
  const shimmerGradient = useMotionTemplate`linear-gradient(
    to right,
    transparent,
    rgba(66, 133, 244, 0.05) 25%,
    rgba(66, 133, 244, 0.1) 50%,
    rgba(66, 133, 244, 0.05) 75%,
    transparent
  )`;
  
  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-[#090b11] transition-all duration-500",
        "border border-white/[0.05] backdrop-blur-sm",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      {...props}
    >
      <AnimatePresence>
        {isHovering && (
          <>
            {/* Base spotlight */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="pointer-events-none absolute -inset-px z-0"
              style={{
                background: spotlightGradient,
                mixBlendMode: "soft-light",
              }}
            />
            
            {/* Glow effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="absolute inset-0 pointer-events-none z-10"
              style={{
                background: glowGradient,
                mixBlendMode: "screen",
              }}
            />

            {/* Moving shimmer */}
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: "100%" }}
              exit={{ opacity: 0 }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "linear",
              }}
              className="absolute inset-0 pointer-events-none z-20"
              style={{
                background: shimmerGradient,
                mixBlendMode: "overlay",
              }}
            />

            {/* Border glow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 pointer-events-none z-30"
              style={{
                borderRadius: "1rem",
                border: "1px solid rgba(66, 133, 244, 0.1)",
                boxShadow: "inset 0 0 20px rgba(66, 133, 244, 0.05)",
              }}
            />
          </>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-40">
        {children}
      </div>

      {/* Permanent subtle gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20 transition-opacity duration-500 group-hover:opacity-40"
        style={{
          background: "linear-gradient(180deg, rgba(66, 133, 244, 0.05) 0%, transparent 100%)",
        }}
      />
    </div>
  );
};
