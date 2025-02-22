"use client";

import { motion as m, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ShimmerButton } from "../magicui/shimmer-button";
import { cn } from "@/lib/utils";
import { RadialBlurCircle } from "../ui/RadialBlurCircle";

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Revenue Growth",
    client: "Fashion Retailer",
    industry: "Fashion & Apparel",
    description:
      "Transformed their Google Merchant Center strategy, leading to significant revenue growth.",
    metrics: {
      revenue: "+127%",
      roas: "3.8x",
      conversion: "+85%",
      traffic: "+156%",
    },
    testimonial: {
      text: "The team's expertise in Google Merchant Center completely transformed our e-commerce performance.",
      author: "Sarah Johnson",
      role: "E-commerce Director",
      image: "/testimonials/sarah.jpg",
    },
    beforeAfter: {
      before: "/case-studies/fashion-before.jpg",
      after: "/case-studies/fashion-after.jpg",
    },
    graph: {
      data: [20, 45, 75, 110, 140, 185, 220], // Sample data points
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
  },
  {
    id: 2,
    title: "ROAS Optimization Success",
    client: "Home Decor Brand",
    industry: "Home & Living",
    description:
      "Optimized shopping campaigns to achieve record-breaking ROAS.",
    metrics: {
      revenue: "+94%",
      roas: "4.2x",
      conversion: "+67%",
      traffic: "+112%",
    },
    testimonial: {
      text: "Our return on ad spend has never been better. The results speak for themselves.",
      author: "Michael Chen",
      role: "Marketing Manager",
      image: "/testimonials/michael.jpg",
    },
    beforeAfter: {
      before: "/case-studies/decor-before.jpg",
      after: "/case-studies/decor-after.jpg",
    },
    graph: {
      data: [30, 55, 85, 120, 160, 195, 240], // Sample data points
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
  },
  {
    id: 3,
    title: "Market Expansion Success",
    client: "Tech Accessories",
    industry: "Consumer Electronics",
    description:
      "Helped expand into new markets with localized shopping campaigns.",
    metrics: {
      revenue: "+156%",
      roas: "3.5x",
      conversion: "+92%",
      traffic: "+178%",
    },
    testimonial: {
      text: "Their strategic approach to market expansion exceeded our expectations.",
      author: "Emily Rodriguez",
      role: "Growth Lead",
      image: "/testimonials/emily.jpg",
    },
    beforeAfter: {
      before: "/case-studies/tech-before.jpg",
      after: "/case-studies/tech-after.jpg",
    },
    graph: {
      data: [25, 50, 80, 130, 170, 200, 260], // Sample data points
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
  },
];

export const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [isComparing, setIsComparing] = useState(false);

  const selectedStudy = selectedCase
    ? caseStudies.find((study) => study.id === selectedCase)
    : null;

  return (
    <section className="relative py-32 overflow-hidden bg-[#05070e]">
      {/* Background Glow */}
      <div className="absolute inset-0 z-0">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <RadialBlurCircle
            position="left"
            color="#4285F4"
            className="opacity-40"
          />
          <RadialBlurCircle
            position="right"
            color="#6d28d9"
            className="opacity-40"
          />
        </div>
        <m.div
          className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[1000px] h-[1000px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(66,133,244,0.15) 0%, rgba(66,133,244,0.05) 45%, transparent 70%)",
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
            Real Results for{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4285F4] to-[#d9d7f6]">
              Real Businesses
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Explore how we've helped businesses achieve exceptional growth
            through strategic Google Merchant Center optimization
          </p>
        </m.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <m.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedCase(study.id)}
            >
              <div className="relative backdrop-blur-xl bg-white/[0.02] rounded-3xl border border-white/[0.05] p-6 hover:bg-white/[0.05] transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(66,133,244,0.2)]">
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#4285F4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl pointer-events-none" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-sm text-[#4285F4] mb-4">
                    {study.industry}
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-4">
                    {study.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{study.description}</p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 rounded-2xl bg-white/[0.02]">
                      <div className="text-2xl font-bold text-[#4285F4]">
                        {study.metrics.revenue}
                      </div>
                      <div className="text-sm text-gray-400">Revenue</div>
                    </div>
                    <div className="text-center p-3 rounded-2xl bg-white/[0.02]">
                      <div className="text-2xl font-bold text-[#4285F4]">
                        {study.metrics.roas}
                      </div>
                      <div className="text-sm text-gray-400">ROAS</div>
                    </div>
                  </div>

                  {/* Testimonial Preview */}
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={study.testimonial.image}
                        alt={study.testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-white font-medium">
                        {study.testimonial.author}
                      </div>
                      <div className="text-sm text-gray-400">
                        {study.testimonial.role}
                      </div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <m.div
                    className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ShimmerButton className="px-6 py-2">
                      View Case Study
                    </ShimmerButton>
                  </m.div>
                </div>
              </div>
            </m.div>
          ))}
        </div>

        {/* View All Button */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <ShimmerButton className="px-8 py-4 text-lg">
            View All Case Studies
          </ShimmerButton>
        </m.div>
      </div>
    </section>
  );
};
