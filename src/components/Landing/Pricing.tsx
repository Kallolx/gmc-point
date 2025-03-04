"use client";

import { motion, AnimatePresence } from "framer-motion";
import { BsCheckCircleFill, BsArrowRight, BsChevronDown } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

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
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkScreenSize = () => {
      const isSmall = window.innerWidth < 640;
      setIsSmallScreen(isSmall);
      if (!isSmall) {
        setExpandedPlan(null);
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-4 border border-[#4285F4]/20 rounded-full backdrop-blur-md bg-[#4285F4]/5"
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
            className="text-3xl sm:text-4xl font-bold text-white mb-3"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative p-6 rounded-xl border backdrop-blur-md ${
                plan.popular
                  ? "border-[#4285F4] bg-[#05070e]/80"
                  : "border-[#4285F4]/20 bg-[#05070e]/70"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium bg-[#4285F4] text-white">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div 
                className={isSmallScreen ? "cursor-pointer" : ""}
                onClick={() => isSmallScreen && setExpandedPlan(expandedPlan === plan.name ? null : plan.name)}
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1 max-w-[60%]">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mt-1 leading-relaxed">{plan.description}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-sm text-[#4285F4]">Starts from</span>
                    <div className="text-2xl font-bold text-[#4285F4]">${plan.startingPrice}</div>
                  </div>
                </div>

                {isSmallScreen && (
                  <div className="flex items-center justify-between text-sm text-gray-300 mt-2">
                    <span>Click to {expandedPlan === plan.name ? 'hide' : 'view'} packages</span>
                    <BsChevronDown 
                      className={`transform transition-transform ${
                        expandedPlan === plan.name ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                )}
              </div>

              <AnimatePresence>
                {(!isSmallScreen || expandedPlan === plan.name) && (
                  <motion.div
                    initial={isSmallScreen ? { height: 0, opacity: 0 } : { height: "auto", opacity: 1 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={isSmallScreen ? { height: 0, opacity: 0 } : undefined}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3 mt-4">
                      {plan.packages.map((pkg) => (
                        <div 
                          key={pkg.name}
                          className="flex items-center p-3 rounded-lg border border-[#4285F4]/20 hover:border-[#4285F4]/30 hover:bg-[#05070e]/80 transition-all duration-200 group cursor-pointer backdrop-blur-sm"
                        >
                          <div className="flex-1 min-w-0">
                            <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-x-4">
                              {pkg.items.map((item, j) => (
                                <div 
                                  key={j} 
                                  className="flex items-center gap-1.5 text-gray-300 sm:min-w-[140px] sm:flex-1 group-hover:text-white transition-colors duration-200"
                                >
                                  <BsCheckCircleFill className="w-3 h-3 sm:w-4 sm:h-4 text-[#4285F4] flex-shrink-0 group-hover:text-[#4285F4]/80 transition-colors duration-200" />
                                  <span className="text-xs sm:text-sm whitespace-nowrap">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <span className="text-sm sm:text-base font-bold text-[#4285F4] ml-3 sm:ml-4 whitespace-nowrap group-hover:text-[#4285F4]/80 transition-colors duration-200">${pkg.price}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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