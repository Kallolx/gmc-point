"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Landing/Navbar";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { BsCheckCircleFill, BsInfoCircle } from "react-icons/bs";
import Image from "next/image";

interface PricingPlan {
  name: string;
  price: number;
  features: string[];
  perStore?: number;
  popular?: boolean;
}

type PackageCategory = "kickstarter" | "growth" | "scale" | "heavy";

const allPackages: Record<PackageCategory, PricingPlan[]> = {
  kickstarter: [
    {
      name: "Basic Setup",
      price: 700,
      features: [
        "Google Merchant Center Setup",
        "E-commerce Store Creation",
        "Custom Domain Configuration",
        "Basic SEO Setup",
        "Product Feed Integration",
        "Shopping Campaign Structure",
      ],
    },
    {
      name: "Ad Ready",
      price: 850,
      features: [
        "Everything in Basic Setup",
        "Google Ads Account Setup",
        "Conversion Tracking",
        "Audience Setup",
        "Campaign Templates",
        "Initial Performance Review",
      ],
    },
    {
      name: "Full Launch",
      price: 1000,
      features: [
        "Everything in Ad Ready",
        "Ad Spend Management",
        "Bid Strategy Setup",
        "Performance Monitoring",
        "Monthly Reporting",
        "Optimization Recommendations",
      ],
    },
  ],
  growth: [
    {
      name: "2 Stores Bundle",
      price: 1300,
      perStore: 650,
      features: [
        "2× GMC Setup & Management",
        "2× Store Creation & Setup",
        "2× Custom Domain Setup",
        "Bulk Product Management",
        "Multi-store Dashboard",
        "Consolidated Reporting",
      ],
    },
    {
      name: "5 Stores Bundle",
      price: 3150,
      perStore: 630,
      popular: true,
      features: [
        "5× GMC Setup & Management",
        "5× Store Creation & Setup",
        "5× Custom Domain Setup",
        "Advanced Bulk Management",
        "Priority Support",
        "Performance Analytics",
      ],
    },
    {
      name: "10 Stores Bundle",
      price: 6000,
      perStore: 600,
      features: [
        "10× GMC Setup & Management",
        "10× Store Creation & Setup",
        "10× Custom Domain Setup",
        "Enterprise Management Tools",
        "Dedicated Account Manager",
        "Custom Solutions",
      ],
    },
  ],
  scale: [
    {
      name: "2 Stores Scale",
      price: 1600,
      perStore: 800,
      features: [
        "2× Complete Store Setup",
        "2× Ad Account Management",
        "Campaign Optimization",
        "Performance Tracking",
        "ROI Analysis",
        "Monthly Strategy Calls",
      ],
    },
    {
      name: "5 Stores Scale",
      price: 3850,
      perStore: 770,
      features: [
        "5× Complete Store Setup",
        "5× Ad Account Management",
        "Advanced Campaign Suite",
        "Cross-account Optimization",
        "Weekly Performance Reviews",
        "Dedicated Support Team",
      ],
    },
    {
      name: "10 Stores Scale",
      price: 7500,
      perStore: 750,
      features: [
        "10× Complete Store Setup",
        "10× Ad Account Management",
        "Enterprise Campaign Tools",
        "AI-Powered Optimization",
        "Real-time Monitoring",
        "VIP Support Access",
      ],
    },
  ],
  heavy: [
    {
      name: "2 Stores Premium",
      price: 1800,
      perStore: 900,
      features: [
        "2× Full Service Setup",
        "2× Complete Ad Management",
        "Advanced Optimization Suite",
        "24/7 Priority Support",
        "Custom Strategy Development",
        "Executive Reports",
      ],
    },
    {
      name: "5 Stores Premium",
      price: 4250,
      perStore: 850,
      features: [
        "5× Full Service Setup",
        "5× Complete Ad Management",
        "Enterprise Tools Access",
        "Dedicated Success Team",
        "Weekly Strategy Sessions",
        "Custom Integration Support",
      ],
    },
    {
      name: "10 Stores Premium",
      price: 8000,
      perStore: 800,
      features: [
        "10× Full Service Setup",
        "10× Complete Ad Management",
        "Global Market Support",
        "Enterprise Solutions",
        "Custom Development",
        "Strategic Partnership",
      ],
    },
  ],
};

export default function PricingPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<PackageCategory>("kickstarter");

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="min-h-screen relative">
        <div className="fixed inset-0 -z-10">
          <Image
            src="/bg.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05070e]/80 via-[#05070e]/90 to-[#05070e]" />
        </div>

        <div className="pt-32 pb-16 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-12">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl font-bold text-white mb-6"
              >
                Transparent Pricing for Every Scale
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg text-gray-400 max-w-3xl mx-auto"
              >
                Choose from our comprehensive range of packages designed to meet
                your specific business needs and growth goals.
              </motion.p>
            </div>

            {/* Category Selector */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {Object.keys(allPackages).map((category) => (
                <button
                  key={category}
                  onClick={() =>
                    setSelectedCategory(category as PackageCategory)
                  }
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-[#4285F4] text-white"
                      : "bg-[#4285F4]/5 text-gray-400 hover:bg-[#4285F4]/10 hover:text-white"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </motion.div>

            {/* Package Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {allPackages[selectedCategory].map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`relative p-6 rounded-2xl border backdrop-blur-sm transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#4285F4]/20 ${
                    plan.popular
                      ? "border-[#4285F4] bg-[#4285F4]/5"
                      : "border-[#4285F4]/20"
                  } hover:border-[#4285F4]/40 transition-all duration-200`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#4285F4] text-white">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-4">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-3xl font-bold text-white">
                        ${plan.price}
                      </span>
                      {plan.perStore && (
                        <span className="text-sm text-gray-400">
                          (${plan.perStore}/store)
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-gray-400"
                      >
                        <BsCheckCircleFill className="w-5 h-5 text-[#4285F4] flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <ShimmerButton className="w-full py-2.5 text-sm">
                    Get Started
                  </ShimmerButton>
                </motion.div>
              ))}
            </motion.div>

            {/* Redesigned Footer Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-24 max-w-4xl mx-auto"
            >
              <div className="relative overflow-hidden rounded-2xl border border-[#4285F4]/20 bg-[#4285F4]/5 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-r from-[#4285F4]/10 to-transparent" />
                
                <div className="relative p-8 sm:p-12">
                  <div className="flex flex-col sm:flex-row items-center gap-8">
                    <div className="flex-1 text-center sm:text-left">
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        Not Sure Which Plan to Choose?
                      </h2>
                      <p className="text-gray-400 mb-0 sm:mb-6 max-w-2xl">
                        Book a free consultation with our experts. We'll analyze your business needs 
                        and recommend the perfect solution to maximize your ROI.
                      </p>
                    </div>
                    
                    <div className="flex flex-col gap-4 sm:min-w-[200px]">
                      <ShimmerButton className="px-8 py-3 text-base">
                        Book a Call
                      </ShimmerButton>
                      <button className="text-[#4285F4] hover:text-white text-sm transition-colors">
                        View Success Stories
                      </button>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-[#4285F4]/10">
                    <div className="flex flex-wrap justify-center sm:justify-between gap-8 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <BsCheckCircleFill className="w-5 h-5 text-[#4285F4]" />
                        <span>Free 30-min consultation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BsCheckCircleFill className="w-5 h-5 text-[#4285F4]" />
                        <span>Custom solution design</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BsCheckCircleFill className="w-5 h-5 text-[#4285F4]" />
                        <span>ROI calculation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
