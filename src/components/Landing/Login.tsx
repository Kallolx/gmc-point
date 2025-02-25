"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BsApple, BsArrowLeft, BsFacebook, BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiUser } from "react-icons/bi";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { ShimmerButton } from "../magicui/shimmer-button";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"signin" | "signup">("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });
  const [isValidEmail, setIsValidEmail] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      router.push("/account");
    }
  }, [router]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "email") {
      setIsValidEmail(validateEmail(value));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (activeTab === "signin") {
      // Mock login validation
      if (formData.email === "test@test.com" && formData.password === "12345678") {
        // Store login state
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", formData.email);
        router.push("/");
      } else {
        setError("Invalid email or password");
      }
    } else {
      // Handle signup logic here
      if (!formData.name) {
        setError("Name is required");
        return;
      }
      if (!isValidEmail) {
        setError("Please enter a valid email");
        return;
      }
      if (formData.password.length < 8) {
        setError("Password must be at least 8 characters");
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }
      // For demo, we'll just redirect to signin
      setActiveTab("signin");
      setFormData({
        email: "",
        password: "",
        name: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div className="min-h-screen w-full flex relative">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-[#05070e]/40" />
      </div>

      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 lg:px-20 py-12 relative">
        {/* Logo */}
        <div className="absolute top-8 left-8 flex items-center space-x-6">
          <Link
            href="/"
            className="flex items-center text-white hover:text-white/80 transition-colors"
          >
            <BsArrowLeft className="w-5 h-5" />
          </Link>
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={150}
              height={40}
              className="w-auto h-8"
            />
          </Link>
        </div>

        <div className="w-full max-w-md space-y-8">
          {/* Welcome Text */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center justify-center px-4 py-1.5 mb-4 border border-[#4285F4]/20 rounded-full backdrop-blur-sm bg-[#4285F4]/5 w-fit mx-auto"
            >
              <span className="text-[#4285F4] text-sm font-medium">
                Welcome to GMC Point
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl font-bold text-white"
            >
              {activeTab === "signin" ? "Welcome Back" : "Create Account"}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-2 text-sm text-gray-400"
            >
              {activeTab === "signin"
                ? "Welcome back! Please enter your details"
                : "Create an account to get started"}
            </motion.p>
          </div>

          {/* Tabs */}
          <div className="bg-[#4285F4]/5 backdrop-blur-sm rounded-full p-1 border border-[#4285F4]/20">
            <div className="grid grid-cols-2 gap-1">
              <button
                onClick={() => setActiveTab("signin")}
                className={`py-2 px-4 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === "signin"
                    ? "bg-[#4285F4] text-white shadow-sm"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setActiveTab("signup")}
                className={`py-2 px-4 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === "signup"
                    ? "bg-[#4285F4] text-white shadow-sm"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Form */}
          <motion.form 
            className="space-y-4" 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-sm rounded-lg p-3">
                {error}
              </div>
            )}

            {/* Name Field - Only for Signup */}
            {activeTab === "signup" && (
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <BiUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full pl-11 pr-4 py-3 bg-[#4285F4]/5 border border-[#4285F4]/20 rounded-full text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#4285F4]/40 focus:ring-1 focus:ring-[#4285F4]/40 transition-all duration-200"
                  placeholder="Full Name"
                />
              </div>
            )}

            {/* Email Field */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <HiOutlineMail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full pl-11 pr-4 py-3 bg-[#4285F4]/5 border border-[#4285F4]/20 rounded-full text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#4285F4]/40 focus:ring-1 focus:ring-[#4285F4]/40 transition-all duration-200"
                placeholder="Email Address"
              />
              {formData.email && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  {isValidEmail ? (
                    <svg
                      className="h-5 w-5 text-[#4285F4]"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg
                      className="h-5 w-5 text-red-400"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
              )}
            </div>

            {/* Password Field */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <RiLockPasswordLine className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full pl-11 pr-12 py-3 bg-[#4285F4]/5 border border-[#4285F4]/20 rounded-full text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#4285F4]/40 focus:ring-1 focus:ring-[#4285F4]/40 transition-all duration-200"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? (
                  <HiEyeOff className="h-5 w-5" />
                ) : (
                  <HiEye className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Confirm Password Field - Only for Signup */}
            {activeTab === "signup" && (
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <RiLockPasswordLine className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="block w-full pl-11 pr-12 py-3 bg-[#4285F4]/5 border border-[#4285F4]/20 rounded-full text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-[#4285F4]/40 focus:ring-1 focus:ring-[#4285F4]/40 transition-all duration-200"
                  placeholder="Confirm Password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  {showConfirmPassword ? (
                    <HiEyeOff className="h-5 w-5" />
                  ) : (
                    <HiEye className="h-5 w-5" />
                  )}
                </button>
              </div>
            )}

            {/* Remember Me & Forgot Password - Only for Signin */}
            {activeTab === "signin" && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center text-gray-400">
                  <input
                    type="checkbox"
                    className="mr-2 rounded border-[#4285F4]/20 bg-[#4285F4]/5"
                  />
                  Remember me
                </label>
                <button className="text-[#4285F4] hover:text-[#4285F4]/80">
                  Forgot password?
                </button>
              </div>
            )}

            <ShimmerButton
              type="submit"
              className="w-full py-3 font-medium"
              background="#4285F4"
              shimmerColor="white"
            >
              {activeTab === "signin" ? "Sign In" : "Create Account"}
            </ShimmerButton>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#4285F4]/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#05070e] text-gray-400">
                  Or Continue With
                </span>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3">
              <button className="flex items-center justify-center py-2.5 bg-[#4285F4]/5 border border-[#4285F4]/20 rounded-full hover:bg-[#4285F4]/10 transition-all duration-200 backdrop-blur-sm">
                <FcGoogle className="w-5 h-5" />
              </button>
              <button className="flex items-center justify-center py-2.5 bg-[#4285F4]/5 border border-[#4285F4]/20 rounded-full hover:bg-[#4285F4]/10 transition-all duration-200 backdrop-blur-sm">
                <BsApple className="w-5 h-5 text-white" />
              </button>
              <button className="flex items-center justify-center py-2.5 bg-[#4285F4]/5 border border-[#4285F4]/20 rounded-full hover:bg-[#4285F4]/10 transition-all duration-200 backdrop-blur-sm">
                <BsFacebook className="w-5 h-5 text-[#4285F4]" />
              </button>
              <button className="flex items-center justify-center py-2.5 bg-[#4285F4]/5 border border-[#4285F4]/20 rounded-full hover:bg-[#4285F4]/10 transition-all duration-200 backdrop-blur-sm">
                <BsGithub className="w-5 h-5 text-white" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="hidden lg:block w-1/2 p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="relative h-full w-full rounded-3xl overflow-hidden bg-[#4285F4]/5 border border-[#4285F4]/20 backdrop-blur-sm"
        >
          <Image
            src="/dashboard.jpg"
            alt="Login Illustration"
            fill
            priority
            className="object-cover object-center"
          />
          
          {/* Feature Points */}
          <div className="absolute bottom-8 left-8 right-8 bg-[#05070e]/80 backdrop-blur-xl rounded-2xl p-6 border border-[#4285F4]/20">
            <h3 className="text-xl font-semibold text-white mb-4">Why Choose Us?</h3>
            <div className="space-y-3">
              {[
                "Expert Google Merchant Center Management",
                "Advanced SEO Optimization",
                "24/7 Support & Monitoring"
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#4285F4]/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#4285F4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
