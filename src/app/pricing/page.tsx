"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Landing/Navbar";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { BsCheckCircleFill, BsInfoCircle } from "react-icons/bs";
import Image from "next/image";

interface Package {
  name: string;
  items: string[];
  price: number;
}

interface PricingPlan {
  name: string;
  description: string;
  startingPrice: number;
  packages: Package[];
  popular?: boolean;
}

type PackageCategory = "kickstarter" | "growth" | "scale" | "heavy";

const allPackages: Record<PackageCategory, PricingPlan> = {
  kickstarter: {
    name: "Kickstarter",
    description: "Perfect for starting small",
    startingPrice: 700,
    packages: [
      {
        name: "K-01 Package",
        items: ["1 X GMC", "1 X Shopify Store", "1 X Domain"],
        price: 700,
      },
      {
        name: "K-02 Package",
        items: ["1 X GMC", "1 X Shopify Store", "1 X Domain", "1 X Ad Account"],
        price: 850,
      },
      {
        name: "K-03 Package",
        items: [
          "1 X Ad spent GMC",
          "1 X Shopify Store",
          "1 X Domain",
          "1 X Ad Account",
        ],
        price: 1000,
      },
    ],
  },
  growth: {
    name: "Growth",
    description: "Perfect if you plan to get growing with your business",
    startingPrice: 1300,
    packages: [
      {
        name: "G-01 Package",
        items: ["2 X GMC", "2 X Shopify Store", "2 X Domain"],
        price: 1300,
      },
      {
        name: "G-02 Package",
        items: ["5 X GMC", "5 X Shopify Store", "5 X Domain"],
        price: 3150,
      },
      {
        name: "G-03 Package",
        items: ["10 X GMC", "10 X Shopify Store", "10 X Domain"],
        price: 6000,
      },
    ],
  },
  scale: {
    name: "Scale",
    description:
      "The right plan for you if you want to scale your business and generate more revenue",
    startingPrice: 1600,
    packages: [
      {
        name: "S-01 Package",
        items: ["2 X GMC", "2 X Shopify Store", "2 X Domain", "2 X Ad Account"],
        price: 1600,
      },
      {
        name: "S-02 Package",
        items: ["5 X GMC", "5 X Shopify Store", "5 X Domain", "5 X Ad Account"],
        price: 3850,
      },
      {
        name: "S-03 Package",
        items: [
          "10 X GMC",
          "10 X Shopify Store",
          "10 X Domain",
          "10 X Ad Account",
        ],
        price: 7500,
      },
    ],
    popular: true,
  },
  heavy: {
    name: "Heavy",
    description:
      "Complete plan for you to get your business up and running away",
    startingPrice: 1800,
    packages: [
      {
        name: "H-01 Package",
        items: [
          "2 X Ad Spent GMC",
          "2 X Shopify Store",
          "2 X Domain",
          "2 X Ad Account",
        ],
        price: 1800,
      },
      {
        name: "H-02 Package",
        items: [
          "5 X Ad Spent GMC",
          "5 X Shopify Store",
          "5 X Domain",
          "5 X Ad Account",
        ],
        price: 4250,
      },
      {
        name: "H-03 Package",
        items: [
          "10 X Ad spent GMC",
          "10 X Shopify Store",
          "10 X Domain",
          "10 X Ad Account",
        ],
        price: 8000,
      },
    ],
  },
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
              {allPackages[selectedCategory].packages.map((pkg, index) => (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className={`relative p-8 rounded-2xl border backdrop-blur-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#4285F4]/20 ${
                    selectedCategory === "scale"
                      ? "border-[#4285F4] bg-[#4285F4]/5"
                      : "border-[#4285F4]/20 hover:border-[#4285F4]/40"
                  }`}
                >
                  {selectedCategory === "scale" && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <div className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-[#4285F4] text-white">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className="flex flex-col items-center">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {pkg.name}
                      </h3>
                      <div className="mt-4 mb-6">
                        <span className="text-4xl font-bold text-[#4285F4]">
                          ${pkg.price}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">
                        {allPackages[selectedCategory].description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-300"
                      >
                        <BsCheckCircleFill className="w-5 h-5 text-[#4285F4] flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <ShimmerButton className="w-full py-3 text-sm font-medium">
                    Get Started with {pkg.name}
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
                        Book a call with us where we will discuss our offerings
                        and your needs. Get the most out of your business
                        throughout our Google Merchant Center accounts.
                      </p>
                    </div>

                    <div className="flex flex-col gap-4 sm:min-w-[200px]">
                      <ShimmerButton className="px-8 py-3 text-base">
                        Book a Call
                      </ShimmerButton>
                      <button className="text-[#4285F4] hover:text-white text-sm transition-colors">
                        <a href="/#case-studies" className="block">View Success Stories</a>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-[#4285F4]/10">
                    <div className="flex flex-wrap justify-center sm:justify-between gap-8 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <BsCheckCircleFill className="w-5 h-5 text-[#4285F4]" />
                        <span>Initial meeting</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BsCheckCircleFill className="w-5 h-5 text-[#4285F4]" />
                        <span>Onboard projects</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BsCheckCircleFill className="w-5 h-5 text-[#4285F4]" />
                        <span>Grow your business</span>
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
