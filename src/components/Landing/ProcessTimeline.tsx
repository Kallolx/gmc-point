"use client";

import { motion as m, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "Schedule a free consultation to discuss your business goals and requirements.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "We create a tailored strategy based on your business needs and market analysis.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Implementation",
    description: "Our team sets up and optimizes your Google Merchant Center and campaigns.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Monitor & Optimize",
    description: "Continuous monitoring and optimization to ensure maximum performance.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  }
];

const NumberAnimation = ({ number, inView }: { number: string, inView: boolean }) => {
  return (
    <div className="relative">
      {/* Large blurred number in background */}
      <m.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 0.1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute -top-8 -left-4 text-8xl font-bold text-[#4285F4] blur-[2px]"
      >
        {number}
      </m.div>
      
      {/* Main number */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="relative text-4xl font-bold text-[#4285F4]"
      >
        {number}
      </m.div>
    </div>
  );
};

export const ProcessTimeline = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden py-20 sm:py-28">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 border border-[#4285F4]/20 rounded-full backdrop-blur-sm bg-[#4285F4]/5">
            <span className="text-[#4285F4] text-sm font-medium">
              Our Process
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Simple{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] to-[#1a73e8]">
              4-Step
            </span>{" "}
            Process
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our streamlined process ensures a smooth journey from consultation to optimization
          </p>
        </m.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <m.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative backdrop-blur-xl bg-white/[0.02] rounded-2xl border border-white/[0.05] p-8 h-full overflow-hidden transition-all duration-500 transform group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_-5px_rgba(66,133,244,0.1)]">
                {/* Shimmer effect - only on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500">
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <NumberAnimation number={step.number} inView={isInView} />
                  
                  {/* Icon with circle background */}
                  <div className="mt-6 mb-4 relative">
                    <div className="absolute inset-0 bg-[#4285F4]/10 blur-xl rounded-full transform group-hover:scale-150 transition-transform duration-500" />
                    <div className="relative w-12 h-12 rounded-xl bg-[#4285F4]/10 flex items-center justify-center text-[#4285F4] transition-colors duration-300 group-hover:text-[#4285F4]">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="text-xl text-white mb-3 group-hover:text-[#4285F4] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Decorative corner gradient */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br from-[#4285F4]/20 to-transparent rounded-full blur-lg transform group-hover:scale-150 transition-transform duration-500" />
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 