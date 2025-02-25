"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { BsCheckCircleFill, BsClockFill, BsHourglassSplit } from "react-icons/bs";
import { Navbar } from "@/components/Landing/Navbar";

// Mock progress data
const progressSteps = [
  {
    title: "Google Merchant Center Setup",
    description: "Initial setup and configuration of your GMC account",
    status: "completed",
    progress: 100,
    details: "Successfully configured GMC account with proper business information and shipping settings",
    completedDate: "March 15, 2024"
  },
  {
    title: "Product Feed Optimization",
    description: "Optimizing your product data for better visibility",
    status: "in-progress",
    progress: 65,
    details: "Currently optimizing product titles and descriptions for better search performance",
    eta: "March 25, 2024"
  },
  {
    title: "Campaign Structure",
    description: "Setting up and organizing your shopping campaigns",
    status: "in-progress",
    progress: 30,
    details: "Creating campaign hierarchy and product groups",
    eta: "April 5, 2024"
  },
  {
    title: "Performance Tracking",
    description: "Implementing tracking and reporting systems",
    status: "pending",
    progress: 0,
    details: "Will set up conversion tracking and performance monitoring",
    eta: "April 15, 2024"
  },
];

const metrics = [
  {
    label: "Products Approved",
    value: "245",
    change: "+12%",
    isPositive: true
  },
  {
    label: "Feed Score",
    value: "8.5",
    change: "+0.5",
    isPositive: true
  },
  {
    label: "Issues",
    value: "3",
    change: "-5",
    isPositive: true
  },
  {
    label: "Optimization Score",
    value: "85%",
    change: "+5%",
    isPositive: true
  }
];

export default function AccountPage() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const email = localStorage.getItem("userEmail");

    if (!isLoggedIn || !email) {
      router.push("/login");
      return;
    }

    setUserEmail(email);
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#05070e]">
        

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative">
          {/* Header Section */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-between"
            >
              <div>
                <div className="inline-flex items-center justify-center px-4 py-1.5 mb-4 border border-[#4285F4]/20 rounded-full backdrop-blur-sm bg-[#4285F4]/5 w-fit">
                  <span className="text-[#4285F4] text-sm font-medium">Account Overview</span>
                </div>
                <h1 className="text-3xl font-bold text-white mb-2">Welcome, {userEmail.split('@')[0]}</h1>
                <p className="text-gray-400">{userEmail}</p>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <button
                  onClick={() => router.push("/onboarding")}
                  className="flex items-center gap-2 px-4 py-2 text-sm text-[#4285F4] hover:text-[#4285F4]/90 transition-colors rounded-full border border-[#4285F4]/20 hover:border-[#4285F4]/40 hover:bg-[#4285F4]/10"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Edit Onboarding Information
                </button>
              </div>
              <button
                onClick={() => {
                  localStorage.removeItem("isLoggedIn");
                  localStorage.removeItem("userEmail");
                  router.push("/");
                }}
                className="px-6 py-2.5 text-sm text-white/90 hover:text-white transition-colors rounded-full border border-red-500/20 hover:border-red-500/40 hover:bg-red-500/10 backdrop-blur-sm"
              >
                Sign Out
              </button>
            </motion.div>
          </div>

          {/* Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="bg-[#4285F4]/5 border border-[#4285F4]/20 rounded-xl p-6 backdrop-blur-sm"
              >
                <p className="text-sm text-gray-400 mb-2">{metric.label}</p>
                <div className="flex items-end justify-between">
                  <h3 className="text-2xl font-bold text-white">{metric.value}</h3>
                  <div className={`flex items-center text-sm ${metric.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    {metric.change}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Progress Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12"
          >
            {/* Overall Progress Card */}
            <div className="lg:col-span-2 bg-[#4285F4]/5 border border-[#4285F4]/20 rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-white mb-6">Project Timeline</h2>
              <div className="space-y-6">
                {progressSteps.map((step, index) => (
                  <div key={step.title} className="relative">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#4285F4]/10 flex items-center justify-center">
                        {step.status === "completed" ? (
                          <BsCheckCircleFill className="w-4 h-4 text-green-400" />
                        ) : step.status === "in-progress" ? (
                          <BsHourglassSplit className="w-4 h-4 text-[#4285F4]" />
                        ) : (
                          <BsClockFill className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-white">{step.title}</h3>
                          <span className="text-sm text-[#4285F4]">
                            {step.status === "completed" ? step.completedDate : step.eta}
                          </span>
                        </div>
                        <p className="text-gray-400 mt-1">{step.description}</p>
                        <p className="text-sm text-gray-500 mt-2">{step.details}</p>
                        <div className="mt-3 relative h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="absolute inset-y-0 left-0 bg-[#4285F4] transition-all duration-1000"
                            style={{ width: `${step.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                    {index < progressSteps.length - 1 && (
                      <div className="absolute left-4 top-8 bottom-0 w-px bg-[#4285F4]/20" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Next Actions Card */}
            <div className="bg-[#4285F4]/5 border border-[#4285F4]/20 rounded-xl p-6 backdrop-blur-sm">
              <h2 className="text-xl font-semibold text-white mb-6">Next Actions</h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#4285F4]/10 rounded-lg border border-[#4285F4]/20">
                  <h3 className="text-white font-medium mb-2">Schedule Review Call</h3>
                  <p className="text-sm text-gray-400 mb-4">Review current progress and discuss next steps</p>
                  <ShimmerButton className="w-full py-2 text-sm">
                    Schedule Call
                  </ShimmerButton>
                </div>
                <div className="p-4 bg-[#4285F4]/10 rounded-lg border border-[#4285F4]/20">
                  <h3 className="text-white font-medium mb-2">View Latest Report</h3>
                  <p className="text-sm text-gray-400 mb-4">Check your campaign performance metrics</p>
                  <button className="w-full py-2 text-sm text-white/90 hover:text-white transition-colors rounded-lg border border-[#4285F4]/20 hover:border-[#4285F4]/40 hover:bg-[#4285F4]/10">
                    View Report
                  </button>
                </div>
                <div className="p-4 bg-[#4285F4]/10 rounded-lg border border-[#4285F4]/20">
                  <h3 className="text-white font-medium mb-2">Product Feed Update</h3>
                  <p className="text-sm text-gray-400 mb-4">Update your product information</p>
                  <button className="w-full py-2 text-sm text-white/90 hover:text-white transition-colors rounded-lg border border-[#4285F4]/20 hover:border-[#4285F4]/40 hover:bg-[#4285F4]/10">
                    Update Feed
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
} 