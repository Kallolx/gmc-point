"use client";

import { useRef, useState, useEffect } from "react";
import { motion as m, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ShimmerButton } from "../magicui/shimmer-button";
import Image from "next/image";

const timelineSteps = [
  {
    title: "Discovery & Analysis",
    description: "In-depth analysis of your business needs.",
    image: "/process/discovery.jpg", // Replace with your actual image paths
    details: [
      "Account audit and performance review",
      "Competitor analysis",
      "Growth opportunity identification",
      "Custom strategy development"
    ]
  },
  {
    title: "Technical Setup",
    description: "Optimizing your product feed and configuration.",
    image: "/process/setup.jpg",
    details: [
      "Product feed optimization",
      "Account structure setup",
      "Shopping campaign management",
      "Tracking implementation"
    ]
  },
  {
    title: "Launch & Monitor",
    description: "Launching campaigns with real-time tracking.",
    image: "/process/launch.jpg",
    details: [
      "Campaign activation",
      "Real-time monitoring setup",
      "Performance dashboard creation",
      "Initial optimization"
    ]
  },
  {
    title: "Optimize & Scale",
    description: "Continuous optimization for maximum ROI.",
    image: "/process/scale.jpg",
    details: [
      "Performance analysis",
      "Bid strategy optimization",
      "ROI maximization",
      "Growth scaling"
    ]
  }
];

export const ProcessTimeline = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([0]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isScrolling = useRef(false);

  const scrollToCard = (index: number) => {
    if (!cardRefs.current[index] || isScrolling.current) return;
    
    isScrolling.current = true;
    const card = cardRefs.current[index];
    const isLastCard = index === timelineSteps.length - 1;
    
    // Wait for the card to expand before scrolling
    setTimeout(() => {
      card?.scrollIntoView({
        behavior: 'smooth',
        // Adjust block position for last card
        block: isLastCard ? 'start' : 'center',
      });
      
      // Additional scroll for last card to ensure visibility
      if (isLastCard) {
        setTimeout(() => {
          window.scrollBy({
            top: 100,
            behavior: 'smooth'
          });
        }, 100);
      }
      
      // Reset scrolling flag after animation
      setTimeout(() => {
        isScrolling.current = false;
      }, 800);
    }, 300);
  };

  const handleCardClick = (index: number) => {
    if (expandedCards.includes(index)) {
      setExpandedCards(prev => prev.filter(i => i < index));
    } else if (index === 0 || expandedCards.includes(index - 1)) {
      setExpandedCards(prev => [...prev, index]);
      scrollToCard(index);
    }
  };

  return (
    <section className="relative min-h-screen py-32 pb-16 overflow-hidden bg-[#05070e]">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <m.div
          className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(66,133,244,0.15) 0%, rgba(66,133,244,0.05) 45%, transparent 70%)",
            filter: "blur(60px)",
            mixBlendMode: "screen",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.21, 0.45, 0.27, 0.9] }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-8 tracking-[-0.08em] leading-[1.1]">
            Our Proven{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] to-[#c7c2f9]">
              Process
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Follow our step-by-step journey to transform your business
          </p>
        </m.div>

        {/* Interactive Cards */}
        <div id="timeline-container" className="relative max-w-4xl mx-auto space-y-8 scroll-smooth pb-32">
          {timelineSteps.map((step, index) => {
            const isExpanded = expandedCards.includes(index);
            const canExpand = index === 0 || expandedCards.includes(index - 1);
            const isNext = !isExpanded && canExpand;
            const isLastCard = index === timelineSteps.length - 1;
            const cardId = `card-${index}`;

            return (
              <AnimatePresence key={index} mode="wait">
                {(isExpanded || isNext) && (
                  <m.div
                    id={cardId}
                    ref={(el) => {
                      if (el) cardRefs.current[index] = el;
                    }}
                    initial={{ 
                      opacity: 0,
                      y: 50,
                    }}
                    animate={{ 
                      opacity: isNext ? 0.7 : 1,
                      y: 0,
                      transition: {
                        type: "spring",
                        stiffness: 50,
                        damping: 15,
                        mass: 1
                      }
                    }}
                    exit={{ 
                      opacity: 0,
                      y: -20,
                      transition: { 
                        duration: 0.2,
                        ease: "easeOut"
                      }
                    }}
                    className={cn(
                      "relative will-change-transform scroll-mt-32",
                      isNext && "hover:opacity-90 transition-opacity duration-300"
                    )}
                  >
                    {/* Card */}
                    <m.div
                      className={cn(
                        "backdrop-blur-xl bg-white/[0.02] rounded-3xl border border-white/[0.05]",
                        "transition-all duration-500",
                        "hover:shadow-[0_0_30px_-5px_rgba(66,133,244,0.2)]",
                        canExpand && "cursor-pointer",
                        !canExpand && "opacity-50"
                      )}
                      onClick={() => canExpand && handleCardClick(index)}
                      layout="position"
                      layoutDependency={isExpanded}
                      transition={{
                        layout: {
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1]
                        }
                      }}
                    >
                      <div className="flex flex-col md:flex-row items-stretch">
                        {/* Image Container */}
                        <m.div 
                          className="relative overflow-hidden md:w-1/2 rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
                          animate={{
                            height: isExpanded ? '400px' : '200px'
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <Image
                            src={step.image}
                            alt={step.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-[#4285F4]/20 to-transparent" />
                          
                          {/* Enhanced Step Counter */}
                          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md rounded-full flex items-center text-sm font-medium overflow-hidden">
                            <m.div
                              className={cn(
                                "px-3 py-1",
                                isExpanded ? "bg-[#4285F4] text-white" : "text-gray-400"
                              )}
                              animate={{
                                backgroundColor: isExpanded ? "rgba(66, 133, 244, 1)" : "transparent",
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              {index + 1}
                            </m.div>
                            <div className="px-2 text-gray-400">/</div>
                            <div className="pr-3 text-gray-400">{timelineSteps.length}</div>
                          </div>
                        </m.div>

                        {/* Content */}
                        <div className="p-8 md:w-1/2">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-medium text-white bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] to-[#c7c2f9]">
                              {step.title}
                            </h3>
                            {canExpand && (
                              <m.button
                                initial={false}
                                animate={{ rotate: isExpanded ? 180 : 0 }}
                                className="text-[#4285F4]"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="m6 9 6 6 6-6"/>
                                </svg>
                              </m.button>
                            )}
                          </div>

                          <p className="text-gray-400">
                            {step.description}
                          </p>

                          <AnimatePresence>
                            {isExpanded && (
                              <m.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-6"
                              >
                                <div className="grid grid-cols-1 gap-4">
                                  {step.details.map((detail, i) => (
                                    <m.div
                                      key={i}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: i * 0.1 }}
                                      className="flex items-center gap-3 text-gray-300"
                                    >
                                      <div className="w-1.5 h-1.5 rounded-full bg-[#4285F4]" />
                                      <span>{detail}</span>
                                    </m.div>
                                  ))}
                                </div>

                                {isLastCard && isExpanded ? (
                                  <m.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="mt-8 flex flex-col gap-4"
                                  >
                                    <div className="text-center text-gray-400">
                                      Ready to start your journey?
                                    </div>
                                    <ShimmerButton
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        window.location.href = '/get-started';
                                      }}
                                      className="w-full"
                                    >
                                      Get Started Now
                                    </ShimmerButton>
                                  </m.div>
                                ) : (
                                  index < timelineSteps.length - 1 && 
                                  !expandedCards.includes(index + 1) && (
                                    <m.div 
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      className="mt-6"
                                    >
                                      <ShimmerButton
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleCardClick(index + 1);
                                        }}
                                        className="w-full"
                                      >
                                        Continue to {timelineSteps[index + 1].title}
                                      </ShimmerButton>
                                    </m.div>
                                  )
                                )}
                              </m.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </div>
                    </m.div>
                  </m.div>
                )}
              </AnimatePresence>
            );
          })}
        </div>
      </div>
    </section>
  );
}; 