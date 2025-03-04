"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Landing/Navbar";
import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const policies = [
  {
    id: 1,
    title: "Charges and Billing",
    content: "GMC Point provides comprehensive solutions, including GMC accounts, Shopify stores, domains, and Google Ads accounts. Clients are advised to consult with GMC Point for current rates. Also the current rates are given in the website as well."
  },
  {
    id: 2,
    title: "Misrepresentation Resolution Policy",
    content: [
      "If a GMC account encounters misrepresentation within seven (7) days of reinstatement, GMC Point will address the issue and attempt reinstatement at no additional cost.",
      "If misrepresentation occurs after seven (7) days of reinstatement, standard service charges will apply per account."
    ]
  },
  {
    id: 3,
    title: "Buffer Period for Automatic Misrepresentation",
    content: [
      "Once an account is submitted for its initial review, there may be delays before an automatic misrepresentation is triggered.",
      "This timeline is determined solely by Google and should be considered a buffer period beyond GMC Point's control."
    ]
  },
  {
    id: 4,
    title: "Cooldown Period",
    content: [
      "If an account enters a cooldown period, GMC Point will attempt reinstatement once the cooldown ends.",
      "If another cooldown occurs, the existing GMC account will be deleted, and a new GMC account will be created. Clients should be aware of the time involved in these processes."
    ]
  },
  {
    id: 5,
    title: "Payment Policy",
    content: [
      "Full payment must be made before the delivery of the account.",
      "Payments are non-refundable once the service is delivered and the account has been handed over."
    ]
  },
  {
    id: 6,
    title: "Communication and Accountability",
    content: [
      "GMC Point expects clear and prompt communication from clients to avoid misunderstandings.",
      "Lack of communication may result in delays or lower work efficiency."
    ]
  },
  {
    id: 7,
    title: "Workflow Deadlines and Performance Policies",
    subsections: [
      {
        title: "Workflow Deadlines",
        content: [
          "A clear timeline will be established for each account, covering onboarding, GMC submission, and reinstatement. The process includes:",
          "• GMC Creation: 1-3 business days",
          "• 21-Day Reinstatement Period: Begins once the GMC is created"
        ]
      },
      {
        title: "Workflow Status Breakdown",
        content: [
          "GMC Point tracks progress using a shared system, ensuring transparency and efficiency. The status categories include:",
          "• Not Started Yet: Work has been onboarded but not started",
          "• Creating New GMC: A new GMC account is being created",
          "• Waiting for Suspension: Waiting for Google to suspend the GMC (as reinstated accounts tend to be stronger)",
          "• Automatic Misrep: The GMC was suspended for the first time",
          "• Initially Approved: The GMC was approved on the first attempt",
          "• In Progress: Work is ongoing to reinstate a suspended GMC",
          "• Waiting for Final Check: The GMC is nearly ready, pending expert review",
          "• Under Review: The GMC has been submitted to Google for review",
          "• Cooldown: The GMC is in a cooldown period before it can be reviewed again",
          "• Review Button Lost: The review button is permanently lost, requiring a fresh GMC creation",
          "• Approved: The GMC is successfully reinstated and ready to use"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Company Responsibilities",
    content: [
      "GMC Point provides the GMC account, Shopify store, domain, and Google Ads account as per the selected service package.",
      "Clients are responsible for any additional costs, including Shopify plan fees and ad spend."
    ]
  },
  {
    id: 9,
    title: "Service Guarantee",
    content: "GMC Point offers a 7-day guarantee on each GMC account. If a GMC account gets suspended within seven (7) days of reinstatement, GMC Point will reinstate it at no additional cost."
  }
];

export default function PoliciesPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [expandedSubsection, setExpandedSubsection] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#05070e] pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 border border-[#4285F4]/20 rounded-full backdrop-blur-sm bg-[#4285F4]/5">
              <span className="text-[#4285F4] text-sm font-medium">Our Policies</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Terms and Conditions
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Please read these policies carefully as they contain important information about your rights and obligations.
            </p>
          </motion.div>

          {/* Policies */}
          <div className="space-y-4">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-300
                  ${expandedId === policy.id ? 'bg-white/[0.03]' : 'bg-white/[0.02] hover:bg-white/[0.03]'}
                `}
              >
                <button
                  onClick={() => setExpandedId(expandedId === policy.id ? null : policy.id)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between group cursor-pointer"
                >
                  <h2 className="text-xl font-semibold text-white">
                    {policy.id}. {policy.title}
                  </h2>
                  <ChevronDownIcon 
                    className={`w-5 h-5 text-[#4285F4] transition-transform duration-300 ${
                      expandedId === policy.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {expandedId === policy.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        {policy.subsections ? (
                          <div className="space-y-4">
                            {policy.subsections.map((subsection, subIndex) => (
                              <div 
                                key={subIndex}
                                className="rounded-lg border border-[#4285F4]/20 overflow-hidden"
                              >
                                <button
                                  onClick={() => setExpandedSubsection(expandedSubsection === subIndex ? null : subIndex)}
                                  className="w-full text-left px-4 py-3 flex items-center justify-between bg-[#4285F4]/5"
                                >
                                  <h3 className="text-lg font-medium text-[#4285F4]">
                                    {subsection.title}
                                  </h3>
                                  <ChevronDownIcon 
                                    className={`w-4 h-4 text-[#4285F4] transition-transform duration-300 ${
                                      expandedSubsection === subIndex ? 'rotate-180' : ''
                                    }`}
                                  />
                                </button>
                                <AnimatePresence>
                                  {expandedSubsection === subIndex && (
                                    <motion.div
                                      initial={{ height: 0, opacity: 0 }}
                                      animate={{ height: "auto", opacity: 1 }}
                                      exit={{ height: 0, opacity: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="px-4 py-3 space-y-2">
                                        {subsection.content.map((text, textIndex) => (
                                          <p key={textIndex} className="text-xs sm:text-sm text-gray-300">{text}</p>
                                        ))}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="space-y-2">
                            {Array.isArray(policy.content) ? (
                              policy.content.map((text, textIndex) => (
                                <p key={textIndex} className="text-xs sm:text-sm text-gray-300">{text}</p>
                              ))
                            ) : (
                              <p className="text-xs sm:text-sm text-gray-300">{policy.content}</p>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 