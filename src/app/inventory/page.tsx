"use client";

import React from "react";
import { Navbar } from "@/components/Landing/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Sample data for the table
const inventoryData = [
  {
    id: 1,
    name: "Fashion Store Product Feed",
    category: "Shopping",
    status: "Active",
    country: "US",
    preview: "https://example.com/preview/fashion-store",
    approvalDate: "2024-05-15",
  },
  {
    id: 2,
    name: "Electronics Marketplace",
    category: "Shopping",
    status: "Active",
    country: "UK",
    preview: "https://example.com/preview/electronics",
    approvalDate: "2024-04-22",
  },
  {
    id: 3,
    name: "Home Decor Products",
    category: "Shopping",
    status: "Active",
    country: "CA",
    preview: "https://example.com/preview/home-decor",
    approvalDate: "2024-06-01",
  },
  {
    id: 4,
    name: "Sports Equipment Catalog",
    category: "Shopping",
    status: "Active",
    country: "AU",
    preview: "https://example.com/preview/sports",
    approvalDate: "2024-05-28",
  },
  {
    id: 5,
    name: "Beauty Products Feed",
    category: "Shopping",
    status: "Active",
    country: "DE",
    preview: "https://example.com/preview/beauty",
    approvalDate: "2024-05-10",
  },
];

// Country code to full name mapping
const countryNames: Record<string, string> = {
  US: "United States",
  UK: "United Kingdom",
  CA: "Canada",
  AU: "Australia",
  DE: "Germany",
};

export default function InventoryPage() {
  return (
    <main className="relative min-h-screen ">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/bg.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-6 text-center">
              Pre-made GMC Inventory
            </h1>
            <div className="mt-6 w-20 h-1 bg-gradient-to-r from-[#4285F4]/30 via-[#4285F4] to-[#4285F4]/30 mx-auto mb-8"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className=" border border-[#4285F4]/20 rounded-2xl overflow-hidden backdrop-blur-lg shadow-[0_0_30px_rgba(66,133,244,0.15)]"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#4285F4]/20">
                    <th className="py-6 px-8 text-left text-base font-medium text-white/80">
                      SL.
                    </th>
                    <th className="py-6 px-8 text-left text-base font-medium text-white/80">
                      Name
                    </th>
                    <th className="py-6 px-8 text-left text-base font-medium text-white/80">
                      Category
                    </th>
                    <th className="py-6 px-8 text-left text-base font-medium text-white/80">
                      Status
                    </th>
                    <th className="py-6 px-8 text-left text-base font-medium text-white/80">
                      Country
                    </th>
                    <th className="py-6 px-8 text-left text-base font-medium text-white/80">
                      Preview
                    </th>
                    <th className="py-6 px-8 text-left text-base font-medium text-white/80">
                      Approval Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {inventoryData.map((item, index) => (
                    <tr
                      key={item.id}
                      className="border-b border-[#4285F4]/10 hover:bg-[#4285F4]/10 transition-colors duration-300"
                    >
                      <td className="py-6 px-8 text-white/90 text-lg">
                        {index + 1}
                      </td>
                      <td className="py-6 px-8 text-white/90 text-lg font-medium">
                        {item.name}
                      </td>
                      <td className="py-6 px-8 text-white/90 text-lg">
                        {item.category}
                      </td>
                      <td className="py-6 px-8">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-green-500/90 text-white shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                          {item.status}
                        </span>
                      </td>
                      <td className="py-6 px-8">
                        <div className="relative group">
                          <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer transition-transform duration-300 group-hover:scale-110 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                            <Image
                              src={`/flags/${item.country.toLowerCase()}.svg`}
                              alt={countryNames[item.country]}
                              width={32}
                              height={32}
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute bottom-full left-1/4 transform -translate-x-1/2 mb-3 px-3 py-2 bg-[#05070e]/95 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap border border-[#4285F4]/20 shadow-[0_0_20px_rgba(66,133,244,0.3)] backdrop-blur-md z-10">
                            {countryNames[item.country]}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-[#05070e]/95 border-r border-b border-[#4285F4]/20"></div>
                          </div>
                        </div>
                      </td>
                      <td className="py-6 px-8">
                        <a
                          href={item.preview}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#4285F4] hover:text-[#4285F4] hover:brightness-125 transition-all duration-300 text-lg flex items-center"
                        >
                          <span className="border-b border-[#4285F4]/30 hover:border-[#4285F4] transition-colors duration-300">
                            View Preview
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1 transition-transform duration-300 transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </td>
                      <td className="py-6 px-8 text-white/90 text-lg">
                        {new Date(item.approvalDate).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          }
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="w-full py-3 sm:py-4 px-4 border-t border-[#4285F4]/30 bg-[#05070e]/10 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-3">
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-[#a9bcff]/70 text-sm font-light tracking-wider order-3 sm:order-1"
          >
            © 2025 GMCPOINT
          </motion.div>

          {/* Navigation */}
          <motion.nav
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-3 sm:gap-6 text-sm uppercase tracking-widest order-1 sm:order-2"
          >
            <Link
              href="/policies"
              className="text-[#a9bcff]/70 hover:text-[#a9bcff] transition-colors px-2 py-0.5"
            >
              POLICIES
            </Link>
            <button
              onClick={() =>
                document
                  .getElementById("why-choose")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="text-[#a9bcff]/70 hover:text-[#a9bcff] transition-colors px-2 py-0.5 uppercase"
            >
              ABOUT US
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("case-studies")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="text-[#a9bcff]/70 hover:text-[#a9bcff] transition-colors px-2 py-0.5 uppercase"
            >
              CASE STUDIES
            </button>
          </motion.nav>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex items-center gap-3 order-2 sm:order-3"
          >
            {[
              {
                href: "https://facebook.com",
                icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                label: "Facebook",
              },
              {
                href: "https://twitter.com",
                icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
                label: "Twitter",
              },
              {
                href: "https://youtube.com",
                icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
                label: "YouTube",
              },
              {
                href: "https://linkedin.com",
                icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
                label: "LinkedIn",
              },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a9bcff]/70 hover:text-[#a9bcff] transition-colors p-2 hover:bg-white/5 rounded-full"
                aria-label={social.label}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={social.icon} />
                </svg>
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
