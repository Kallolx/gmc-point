"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Landing/Navbar";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { BsShop, BsGlobe, BsBox, BsBarChart, BsChevronDown } from "react-icons/bs";
import Image from "next/image";

interface Field {
  name: string;
  label: string;
  type: 'text' | 'url' | 'select' | 'radio' | 'multiselect';
  required: boolean;
  options?: string[];
}

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  fields: Field[];
}

interface FormData {
  [key: string]: string;
}

interface CustomSelectProps {
  field: Field;
  value: string;
  onChange: (name: string, value: string) => void;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Business Information",
    description: "Tell us about your business",
    icon: BsShop,
    fields: [
      { name: "businessName", label: "Business Name", type: "text", required: true },
      { name: "website", label: "Website URL", type: "url", required: true },
      { name: "industry", label: "Industry", type: "select", required: true, options: [
        "Retail", "Electronics", "Fashion", "Home & Garden", "Health & Beauty", "Other"
      ]},
      { name: "monthlyRevenue", label: "Monthly Revenue", type: "select", required: true, options: [
        "0-10,000", "10,000-50,000", "50,000-100,000", "100,000+"
      ]},
    ]
  },
  {
    id: 2,
    title: "Google Merchant Center",
    description: "Set up your GMC account",
    icon: BsGlobe,
    fields: [
      { name: "gmcAccount", label: "Do you have a Google Merchant Center account?", type: "radio", required: true, options: ["Yes", "No"] },
      { name: "gmcId", label: "GMC Account ID (if you have one)", type: "text", required: false },
      { name: "productCount", label: "Number of Products", type: "select", required: true, options: [
        "1-100", "101-500", "501-1000", "1000+"
      ]},
    ]
  },
  {
    id: 3,
    title: "Product Information",
    description: "Tell us about your products",
    icon: BsBox,
    fields: [
      { name: "feedFormat", label: "Product Feed Format", type: "select", required: true, options: [
        "Google Shopping Feed", "CSV", "XML", "API Integration", "Other"
      ]},
      { name: "updateFrequency", label: "Feed Update Frequency", type: "select", required: true, options: [
        "Daily", "Weekly", "Monthly", "Real-time"
      ]},
      { name: "categories", label: "Main Product Categories", type: "multiselect", required: true, options: [
        "Electronics", "Fashion", "Home", "Beauty", "Sports", "Other"
      ]},
    ]
  },
  {
    id: 4,
    title: "Goals & Objectives",
    description: "Set your performance targets",
    icon: BsBarChart,
    fields: [
      { name: "primaryGoal", label: "Primary Goal", type: "select", required: true, options: [
        "Increase Sales", "Improve ROAS", "Expand Market Reach", "Brand Awareness"
      ]},
      { name: "targetROAS", label: "Target ROAS", type: "select", required: true, options: [
        "2x", "3x", "4x", "5x", "6x+"
      ]},
      { name: "monthlyBudget", label: "Monthly Ad Budget", type: "select", required: true, options: [
        "$1,000-$5,000", "$5,000-$10,000", "$10,000-$50,000", "$50,000+"
      ]},
    ]
  }
];

// Add this custom select component
const CustomSelect: React.FC<CustomSelectProps> = ({ field, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-[#4285F4]/5 border border-[#4285F4]/20 rounded-lg text-sm text-white flex items-center justify-between focus:outline-none focus:border-[#4285F4]/40 focus:ring-1 focus:ring-[#4285F4]/40 transition-all duration-200"
      >
        <span className="block truncate">
          {value || "Select an option"}
        </span>
        <BsChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-[#0a0d14] border border-[#4285F4]/20 rounded-lg shadow-lg max-h-60 overflow-auto scrollbar-thin scrollbar-thumb-[#4285F4]/20 scrollbar-track-transparent">
          <div className="py-1">
            {field.options?.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(field.name, option);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-[#4285F4]/10 transition-colors duration-150
                  ${value === option ? 'text-[#4285F4] bg-[#4285F4]/5' : 'text-white'}`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
  const [isLoading, setIsLoading] = useState(true);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      router.push("/login");
      return;
    }

    // Load existing onboarding data if available
    const savedData = localStorage.getItem("onboardingData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
      setIsEditMode(true);
    }
    
    setIsLoading(false);
  }, [router]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    // Validate current step fields
    const currentFields = steps[currentStep - 1].fields;
    const requiredFields = currentFields.filter(field => field.required);
    const missingFields = requiredFields.filter(field => !formData[field.name]);
    
    if (missingFields.length > 0) {
      alert("Please fill in all required fields before proceeding.");
      return;
    }

    if (currentStep < steps.length) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Save onboarding data and completion status
      localStorage.setItem("onboardingData", JSON.stringify(formData));
      localStorage.setItem("onboardingCompleted", "true");
      router.push("/account");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleReset = () => {
    if (window.confirm("Are you sure you want to start over? This will reset all your answers.")) {
      setFormData({});
      setCurrentStep(1);
      localStorage.removeItem("onboardingData");
      localStorage.setItem("onboardingCompleted", "false");
    }
  };

  if (isLoading) return null;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#05070e] relative">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/bg.jpg"
            alt="Background"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#05070e]/80" />
        </div>

        {/* Gradient Overlays */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-[#4285F4]/5 rounded-full filter blur-[120px] opacity-20 transform -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-[#1a73e8]/5 rounded-full filter blur-[100px] opacity-20 transform translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 relative">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="relative flex justify-between">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center relative z-10"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center border-2 backdrop-blur-sm transition-all duration-300 ${
                      step.id === currentStep
                        ? "border-[#4285F4] bg-[#4285F4]/10 scale-110"
                        : step.id < currentStep
                        ? "border-[#4285F4] bg-[#4285F4]/10"
                        : "border-[#4285F4]/20 bg-[#4285F4]/5"
                    }`}
                  >
                    <step.icon className={`w-6 h-6 ${
                      step.id <= currentStep ? "text-[#4285F4]" : "text-[#4285F4]/40"
                    }`} />
                  </div>
                  <div className="mt-4 text-center">
                    <span className={`text-sm font-medium transition-colors duration-300 ${
                      step.id === currentStep ? "text-[#4285F4]" : "text-gray-400"
                    }`}>
                      Step {step.id}
                    </span>
                  </div>
                </div>
              ))}
              
              {/* Progress Line */}
              <div className="absolute top-7 left-0 right-0 h-0.5 bg-[#4285F4]/10">
                <div
                  className="absolute left-0 h-full bg-[#4285F4] transition-all duration-300"
                  style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Current Step Content */}
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#4285F4]/5 border border-[#4285F4]/20 rounded-xl p-8 backdrop-blur-sm"
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                {steps[currentStep - 1].title}
              </h2>
              <p className="text-gray-400">
                {steps[currentStep - 1].description}
              </p>
            </div>

            <div className="space-y-6">
              {steps[currentStep - 1].fields.map((field) => (
                <div key={field.name} className="space-y-2">
                  <label className="block text-sm font-medium text-white">
                    {field.label}
                    {field.required && <span className="text-red-400 ml-1">*</span>}
                  </label>
                  {field.type === "select" ? (
                    <CustomSelect
                      field={field}
                      value={formData[field.name] || ''}
                      onChange={handleInputChange}
                    />
                  ) : field.type === "radio" ? (
                    <div className="space-y-2">
                      {field.options?.map((option) => (
                        <label key={option} className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name={field.name}
                            value={option}
                            checked={formData[field.name] === option}
                            onChange={(e) => handleInputChange(field.name, e.target.value)}
                            className="text-[#4285F4] focus:ring-[#4285F4] bg-[#4285F4]/5 border-[#4285F4]/20"
                          />
                          <span className="text-white">{option}</span>
                        </label>
                      ))}
                    </div>
                  ) : (
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleInputChange(field.name, e.target.value)}
                      className="w-full px-4 py-3 bg-[#4285F4]/5 border border-[#4285F4]/20 rounded-lg text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#4285F4]/40 focus:ring-1 focus:ring-[#4285F4]/40"
                      placeholder={`Enter your ${field.label.toLowerCase()}`}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={handleBack}
                className={`px-6 py-2.5 text-sm text-white/90 hover:text-white transition-colors rounded-full border border-[#4285F4]/20 hover:border-[#4285F4]/40 hover:bg-[#4285F4]/10 ${
                  currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={currentStep === 1}
              >
                Back
              </button>
              <ShimmerButton
                onClick={handleNext}
                className="px-6 py-2.5 text-sm"
              >
                {currentStep === steps.length ? "Complete" : "Next"}
              </ShimmerButton>
            </div>
          </motion.div>

          {/* Footer with Edit/Reset Options */}
          {isEditMode && (
            <div className="mt-8 pt-6 border-t border-[#4285F4]/20">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-[#4285F4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    You can edit your responses or start over
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => router.push("/account")}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    Back to Account
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 text-sm text-red-400 hover:text-red-300 transition-colors rounded-full border border-red-400/20 hover:border-red-400/40 hover:bg-red-400/10"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
} 