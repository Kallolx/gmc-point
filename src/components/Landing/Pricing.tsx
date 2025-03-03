"use client";

import { motion } from "framer-motion";
import { ShimmerButton } from "../magicui/shimmer-button";
import { BsCheckCircleFill, BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/navigation";

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

const pricingPlans: PricingPlan[] = [
  {
    name: "Kickstarter",
    description: "Perfect for starting small",
    startingPrice: 700,
    packages: [
      {
        name: "K-01 Package",
        items: [
          "1 X GMC",
          "1 X Shopify Store",
          "1 X Domain"
        ],
        price: 700
      },
      {
        name: "K-02 Package",
        items: [
          "1 X GMC",
          "1 X Shopify Store",
          "1 X Domain",
          "1 X Ad Account"
        ],
        price: 850
      },
      {
        name: "K-03 Package",
        items: [
          "1 X Ad spent GMC",
          "1 X Shopify Store",
          "1 X Domain",
          "1 X Ad Account"
        ],
        price: 1000
      }
    ]
  },
  {
    name: "Growth",
    description: "Perfect if you plan to get growing with your business",
    startingPrice: 1300,
    packages: [
      {
        name: "G-01 Package",
        items: [
          "2 X GMC",
          "2 X Shopify Store",
          "2 X Domain"
        ],
        price: 1300
      },
      {
        name: "G-02 Package",
        items: [
          "5 X GMC",
          "5 X Shopify Store",
          "5 X Domain"
        ],
        price: 3150
      },
      {
        name: "G-03 Package",
        items: [
          "10 X GMC",
          "10 X Shopify Store",
          "10 X Domain"
        ],
        price: 6000
      }
    ],   
  },
  {
    name: "Scale",
    description: "The right plan for you if you want to scale your business and generate more revenue",
    startingPrice: 1600,
    packages: [
      {
        name: "S-01 Package",
        items: [
          "2 X GMC",
          "2 X Shopify Store",
          "2 X Domain",
          "2 X Ad Account"
        ],
        price: 1600
      },
      {
        name: "S-02 Package",
        items: [
          "5 X GMC",
          "5 X Shopify Store",
          "5 X Domain",
          "5 X Ad Account"
        ],
        price: 3850
      },
      {
        name: "S-03 Package",
        items: [
          "10 X GMC",
          "10 X Shopify Store",
          "10 X Domain",
          "10 X Ad Account"
        ],
        price: 7500
      }
    ],
    popular: true
  },
  {
    name: "Heavy",
    description: "Complete plan for you to get your business up and running away",
    startingPrice: 1800,
    packages: [
      {
        name: "H-01 Package",
        items: [
          "2 X Ad Spent GMC",
          "2 X Shopify Store",
          "2 X Domain",
          "2 X Ad Account"
        ],
        price: 1800
      },
      {
        name: "H-02 Package",
        items: [
          "5 X Ad Spent GMC",
          "5 X Shopify Store",
          "5 X Domain",
          "5 X Ad Account"
        ],
        price: 4250
      },
      {
        name: "H-03 Package",
        items: [
          "10 X Ad spent GMC",
          "10 X Shopify Store",
          "10 X Domain",
          "10 X Ad Account"
        ],
        price: 8000
      }
    ]
  }
];

export const Pricing = () => {
  const router = useRouter();

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
            className="text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Choose the Perfect Plan
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Start with our most popular packages or explore our complete pricing options
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative p-8 rounded-2xl border backdrop-blur-sm transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#4285F4]/20 ${
                plan.popular
                  ? "border-[#4285F4] bg-[#4285F4]/5"
                  : "border-[#4285F4]/20 hover:border-[#4285F4]/40"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-[#4285F4] text-white">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <div className="flex justify-between items-start mb-8">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 max-w-sm">{plan.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex flex-col items-end">
                      <span className="text-sm text-[#4285F4] mb-1">Starts from</span>
                      <span className="text-3xl font-bold text-[#4285F4]">${plan.startingPrice}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                {plan.packages.map((pkg, i) => (
                  <div 
                    key={pkg.name}
                    className="p-4 rounded-xl bg-white/5 border border-[#4285F4]/10 hover:border-[#4285F4]/30 transition-colors"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-white font-medium">{pkg.name}</h4>
                      <span className="text-xl font-bold text-[#4285F4]">${pkg.price}</span>
                    </div>
                    <ul className="space-y-2">
                      {pkg.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-3 text-gray-400">
                          <BsCheckCircleFill className="w-4 h-4 text-[#4285F4] flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <ShimmerButton className="w-full py-3 text-sm font-medium">
                  Get Started with {plan.name}
                </ShimmerButton>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => router.push("/pricing")}
            className="inline-flex items-center gap-2 text-[#4285F4] hover:text-[#4285F4]/90 transition-colors group text-lg"
          >
            <span>Compare All Features</span>
            <BsArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}; 