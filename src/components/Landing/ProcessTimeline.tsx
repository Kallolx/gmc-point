"use client";

import { ChatCircleText, CurrencyDollar, NavigationArrow, Stairs } from "@phosphor-icons/react";
import { motion as m, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Initial Meeting",
    description: "Arrange a meeting to go over your needs and our solutions to offer you the finest service.",
    icon: (  <ChatCircleText className="text-[#4285F4]" size={32}/>  )
  },
  {
    number: "02",
    title: "Onboarding",
    description: "Enlist your project with us using our onboarding form and stay relaxed to begin the journey!",
    icon: (
      <Stairs size={32} className="text-[#4285F4]"/>
    )
  },
  {
    number: "03",
    title: "Implement & Tracking",
    description: "Our experts configure everything to launch your projects. You may track the updates of your projects right on this site.",
    icon: (
      <NavigationArrow size={32} className="text-[#4285F4]"/>
    )
  },
  {
    number: "04",
    title: "Payment & Delivery",
    description: "Once the projects are prepared for delivery, we issue the invoices and hand over the projects once the payment is complete.",
    icon: (
      <CurrencyDollar size={32} className="text-[#4285F4]"/>
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
          Our streamlined process ensures a smooth journey from the <br /> scratch to the project delivery
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