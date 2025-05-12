"use client";

import { Metadata } from "next";
import { FaqSection } from "@/components/Landing/FaqSection";
import { Navbar } from "@/components/Landing/Navbar";
import { Footer } from "@/components/Landing/Footer";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function FaqsPage() {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] overflow-hidden">
      <Navbar />      
      <main className="pt-12 sm:pt-16">        
        {/* FAQ Section */}
        <FaqSection />
      </main>      
      <Footer />
    </div>
  );
} 