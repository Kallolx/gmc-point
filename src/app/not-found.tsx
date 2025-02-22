"use client";

import Link from "next/link";
import Image from "next/image";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { motion as m } from "framer-motion";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#030712] text-white p-6 overflow-hidden">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-600/30 via-transparent to-transparent opacity-50 blur-3xl" />

      {/* Floating Elements */}
      <m.div 
        animate={{ x: [-10, 10, -10] }} 
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-16 h-16 bg-blue-500 rounded-full opacity-20 blur-xl"
      />
      <m.div 
        animate={{ y: [-15, 15, -15] }} 
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-16 right-12 w-12 h-12 bg-pink-500 rounded-full opacity-30 blur-lg"
      />

      {/* Main Content Box */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-white/10 backdrop-blur-md rounded-3xl border border-white/15 p-10 text-center shadow-xl max-w-lg"
      >
        {/* 404 Image */}
        <m.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-64 h-64 mx-auto mb-2"
        >
          <Image
            src="/404.jpg"
            alt="404 Not Found"
            fill
            className="object-contain rounded-2xl"
          />
        </m.div>

        {/* Text */}
        <h1 className="text-5xl font-extrabold text-white tracking-wide mb-3">
          404
        </h1>
        <p className="text-gray-300 text-lg max-w-xs mx-auto">
          Looks like you’re lost in cyberspace. Let’s navigate back home.
        </p>

        {/* Button */}
        <Link href="/" className="inline-block mt-6">
          <m.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
            <ShimmerButton className="px-8 py-3 text-lg">
              Take Me Home
            </ShimmerButton>
          </m.div>
        </Link>
      </m.div>
    </div>
  );
}
