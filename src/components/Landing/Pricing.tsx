"use client";

import { motion } from "framer-motion";
import { ShimmerButton } from "../magicui/shimmer-button";
import { BsCheckCircleFill, BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/navigation";

interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
  perStore?: number;
  stores?: number;
}

const featuredPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: 700,
    description: "Perfect for businesses just starting their e-commerce journey",
    features: [
      "Google Merchant Center Setup",
      "E-commerce Store Creation",
      "Custom Domain Setup",
      "Basic SEO Optimization"
    ]
  },
  {
    name: "Growth",
    price: 3150,
    description: "Most popular choice for growing businesses",
    features: [
      "5× Google Merchant Center",
      "5× E-commerce Stores",
      "5× Custom Domains",
      "Bulk Management Tools"
    ],
    popular: true,
    perStore: 630,
    stores: 5
  },
  {
    name: "Scale",
    price: 3850,
    description: "Complete solution for scaling businesses",
    features: [
      "5× GMC + Store Setup",
      "Ad Account Management",
      "Performance Analytics",
      "Priority Support"
    ],
    perStore: 770,
    stores: 5
  },
  {
    name: "Enterprise",
    price: 8000,
    description: "Full-service solution for large operations",
    features: [
      "10× Complete Store Setup",
      "Ad Campaign Management",
      "Revenue Optimization",
      "24/7 Dedicated Support"
    ],
    perStore: 800,
    stores: 10
  }
];

export const Pricing = () => {
  const router = useRouter();

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-[#4285F4]/20 rounded-full backdrop-blur-sm bg-[#4285F4]/5"
          >
            <span className="text-[#4285F4] text-sm font-medium">
              Transparent Pricing
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Choose the Perfect Plan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Start with our most popular packages or explore our complete pricing options
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative p-6 rounded-2xl border backdrop-blur-sm transform transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl hover:shadow-[#4285F4]/20 ${
                plan.popular
                  ? "border-[#4285F4] bg-[#4285F4]/5"
                  : "border-[#4285F4]/20 hover:border-[#4285F4]/40"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#4285F4] text-white">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-3xl font-bold text-white">${plan.price}</span>
                  {plan.perStore && (
                    <span className="text-sm text-gray-400">
                      (${plan.perStore}/store × {plan.stores})
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-400">
                    <BsCheckCircleFill className="w-5 h-5 text-[#4285F4] flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <ShimmerButton className="w-full py-2.5 text-sm">
                Get Started
              </ShimmerButton>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <button
            onClick={() => router.push("/pricing")}
            className="inline-flex items-center gap-2 text-[#4285F4] hover:text-[#4285F4]/90 transition-colors group"
          >
            <span>View All Packages</span>
            <BsArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}; 