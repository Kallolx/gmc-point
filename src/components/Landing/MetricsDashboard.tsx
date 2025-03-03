"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion as m, AnimatePresence } from "framer-motion";

// Business metrics to showcase with simplified design
const businessMetrics = [
  { 
    label: "Approval Rate", 
    value: "75%",
    description: "Successful GMC approvals",
    barValues: [80, 65, 98],
    color: "#4285F4" // Google Blue
  },
  { 
    label: "Average response time", 
    value: "12h",
    description: "Average response time",
    barValues: [70, 85, 60],
    color: "#00B0FF" // Bright blue
  },
  { 
    label: "Clients Served", 
    value: "100+",
    description: "Satisfied businesses",
    barValues: [90, 75, 85],
    color: "#40C4FF" // Light bright blue
  },
  { 
    label: "Growth Rate", 
    value: "40%",
    description: "Year-over-year increase",
    barValues: [35, 50, 65],
    color: "#80D8FF" // Very light bright blue
  }
];

// Predefined positions for dots to avoid hydration errors
const dotPositions = [
  { top: "15%", left: "25%", size: 3 },
  { top: "45%", left: "75%", size: 4 },
  { top: "75%", left: "35%", size: 3 },
  { top: "25%", left: "85%", size: 2 },
  { top: "65%", left: "15%", size: 4 },
  { top: "85%", left: "65%", size: 3 }
];

// Metric Card Component
const MetricCard = ({ 
  metric, 
  index, 
  initialActiveIndex, 
  userInteracted,
  setUserInteracted,
  activeCardIndex,
  setActiveCardIndex
}: { 
  metric: typeof businessMetrics[0], 
  index: number,
  initialActiveIndex: number,
  userInteracted: boolean,
  setUserInteracted: React.Dispatch<React.SetStateAction<boolean>>,
  activeCardIndex: number,
  setActiveCardIndex: React.Dispatch<React.SetStateAction<number>>
}) => {
  // Determine if this card should be in hover state
  // Card is active if:
  // 1. It's the initial random card and user hasn't interacted yet, OR
  // 2. It's the currently active card after user interaction
  const isHovered = (!userInteracted && index === initialActiveIndex) || (userInteracted && index === activeCardIndex);
  
  const handleHoverStart = () => {
    // Mark that user has interacted with cards
    if (!userInteracted) {
      setUserInteracted(true);
    }
    // Set this card as the active card
    setActiveCardIndex(index);
  };
  
  // We don't need handleHoverEnd anymore since we want the card to stay active
  // until another card is hovered
  
  // Create a darker version of the metric color for better blending
  const colorWithoutHash = metric.color.replace('#', '');
  
  // Get decorative icon for right side based on card type
  const getDecorativeIcon = () => {
    switch(index % 4) {
      case 0: // Approval Rate - Checkmark
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 16.2L4.8 12L3.4 13.4L9 19L21 7L19.6 5.6L9 16.2Z" fill={`${metric.color}80`} />
          </svg>
        );
      case 1: // Turnaround Time - Clock
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z" fill={`${metric.color}80`} />
          </svg>
        );
      case 2: // Clients Served - People
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill={`${metric.color}80`} />
          </svg>
        );
      case 3: // Growth Rate - Trending Up
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z" fill={`${metric.color}80`} />
          </svg>
        );
      default:
        return null;
    }
  };
  
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
      className="relative group cursor-pointer"
      onHoverStart={handleHoverStart}
    >
      <div className={`relative bg-[#0f1a30]/60 p-4 rounded-lg border transition-all duration-300 overflow-hidden ${isHovered ? 'border-[#4285F4]/50' : 'border-[#4285F4]/10'}`}>
        {/* Minimalistic accent - only visible when active */}
        <AnimatePresence>
          {isHovered && (
            <m.div 
              className="absolute inset-0 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Bottom accent line */}
              <div 
                className="absolute bottom-0 left-0 h-[2px] opacity-40"
                style={{ 
                  background: `linear-gradient(to right, transparent, ${metric.color}90, transparent)`,
                  width: '100%'
                }}
              />
              
              {/* Right accent line */}
              <div 
                className="absolute top-0 right-0 w-[2px] opacity-40 h-full"
                style={{ 
                  background: `linear-gradient(to bottom, transparent, ${metric.color}90, transparent)`,
                }}
              />
            </m.div>
          )}
        </AnimatePresence>
        
        <div className="relative flex flex-col z-10">
          {/* Decorative right side element */}
          <div className={`absolute right-0 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-0'}`}>
            <m.div
              initial={{ scale: 0.8, x: 10 }}
              animate={{ 
                scale: isHovered ? 1 : 0.8, 
                x: isHovered ? 0 : 10 
              }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="mb-2">{getDecorativeIcon()}</div>
              <div 
                className="h-16 w-[2px] rounded-full"
                style={{ background: `linear-gradient(to bottom, ${metric.color}90, transparent)` }}
              />
            </m.div>
          </div>
          
          <div className="flex justify-between items-center mb-1">
            <span className="text-white text-sm font-medium">{metric.label}</span>
          </div>
          <span className="font-bold mb-1 transition-all duration-300" 
            style={{ 
              color: metric.color, 
              fontSize: "1.5rem",
            }}
          >
            {metric.value}
          </span>
          <span className="text-white text-xs mb-3 opacity-90 group-hover:opacity-100 transition-opacity duration-300">{metric.description}</span>
          
          {/* Bar indicators that animate on card hover */}
          <div className="flex items-end gap-1 h-[20px] pr-6">
            {metric.barValues.map((value, i) => (
              <m.div
                key={i}
                className="w-[18%] rounded-sm relative overflow-hidden"
                style={{ 
                  background: `linear-gradient(to top, ${metric.color}70, ${metric.color})`,
                }}
                animate={{ 
                  height: isHovered 
                    ? `${value * 0.2}px` 
                    : `${value * 0.08}px`
                }}
                transition={{ 
                  duration: isHovered ? 0.4 : 0.3,
                  delay: isHovered ? i * 0.1 : 0,
                  ease: isHovered ? "easeOut" : "easeIn"
                }}
              >
                <AnimatePresence>
                  {isHovered && (
                    <m.div 
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        background: `linear-gradient(to top, ${metric.color}90, ${metric.color})`,
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </m.div>
  );
};

const MetricsDashboard = () => {
  // Generate a random index (0-3) to determine which card will be initially active
  const [initialActiveIndex, setInitialActiveIndex] = useState(-1);
  // Track if user has interacted with any card
  const [userInteracted, setUserInteracted] = useState(false);
  // Track which card is currently active
  const [activeCardIndex, setActiveCardIndex] = useState(-1);
  
  useEffect(() => {
    // Set the random active card on component mount - client side only
    const randomIndex = Math.floor(Math.random() * businessMetrics.length);
    setInitialActiveIndex(randomIndex);
    // Also set it as the active card
    setActiveCardIndex(randomIndex);
  }, []);
  
  return (
    <m.div 
      className="relative w-full aspect-auto sm:aspect-[4/3]"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Main Dashboard */}
      <m.div 
        className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0a1428]/60 backdrop-blur-sm border border-[#4285F4]/20"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Header */}
        <m.div 
          className="absolute top-0 left-0 right-0 h-[50px] sm:h-[60px] bg-gradient-to-r from-[#0a1428]/80 via-[#0f1a30]/80 to-[#0a1428]/80 border-b border-[#4285F4]/20 flex items-center justify-between px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <m.div 
              className="w-6 h-6 sm:w-8 sm:h-8 relative"
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
            >
              <Image
                src="/transparent.png"
                alt="GMC Point Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </m.div>
            <m.span 
              className="text-white text-base sm:text-lg font-medium"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Google Merchant Center
            </m.span>
          </div>
          
          {/* Improved header dots with animations */}
          <m.div 
            className="flex items-center gap-1.5 sm:gap-2"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {[
              { color: "#4285F4" }, // Google Blue
              { color: "#EA4335" }, // Google Red
              { color: "#FBBC05" }  // Google Yellow
            ].map((dot, index) => (
              <m.div
                key={index}
                className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full"
                style={{ backgroundColor: dot.color }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  repeatType: "reverse",
                  delay: index * 0.3,
                  ease: "easeInOut" 
                }}
                whileHover={{ 
                  scale: 1.5,
                  transition: { duration: 0.2 }
                }}
              />
            ))}
          </m.div>
        </m.div>

        {/* Main Content Area - Only Metric Cards */}
        <div className="pt-[60px] sm:pt-[80px] px-4 sm:px-6 lg:px-8 pb-4 sm:pb-8 h-full flex flex-col justify-center bg-gradient-to-b from-transparent to-[#0a1428]/40">
          <div className="grid grid-cols-2 gap-2 xs:gap-3 sm:gap-4 lg:gap-6">
            {businessMetrics.map((metric, index) => (
              <MetricCard 
                key={metric.label} 
                metric={metric} 
                index={index} 
                initialActiveIndex={initialActiveIndex}
                userInteracted={userInteracted}
                setUserInteracted={setUserInteracted}
                activeCardIndex={activeCardIndex}
                setActiveCardIndex={setActiveCardIndex}
              />
            ))}
          </div>
        </div>
      </m.div>
    </m.div>
  );
};

export default MetricsDashboard; 