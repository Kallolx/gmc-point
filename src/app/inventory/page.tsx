"use client";

import React, { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/Landing/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

// Enhanced sample data with multiple items per country
const inventoryData = [
  // US Items
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
    name: "Electronics Store Product Feed",
    category: "Shopping",
    status: "Active",
    country: "US",
    preview: "https://example.com/preview/us-electronics",
    approvalDate: "2024-05-18",
  },
  {
    id: 3,
    name: "Furniture Catalog",
    category: "Shopping",
    status: "Active",
    country: "US",
    preview: "https://example.com/preview/furniture",
    approvalDate: "2024-05-20",
  },
  {
    id: 4,
    name: "Bookstore Inventory",
    category: "Shopping",
    status: "Active",
    country: "US",
    preview: "https://example.com/preview/bookstore",
    approvalDate: "2024-05-22",
  },
  {
    id: 5,
    name: "Toy Store Catalog",
    category: "Shopping",
    status: "Active",
    country: "US",
    preview: "https://example.com/preview/toystore",
    approvalDate: "2024-05-25",
  },
  
  // UK Items
  {
    id: 6,
    name: "Electronics Marketplace",
    category: "Shopping",
    status: "Active",
    country: "UK",
    preview: "https://example.com/preview/electronics",
    approvalDate: "2024-04-22",
  },
  {
    id: 7,
    name: "UK Fashion Boutique",
    category: "Shopping",
    status: "Active",
    country: "UK",
    preview: "https://example.com/preview/uk-fashion",
    approvalDate: "2024-04-25",
  },
  {
    id: 8,
    name: "Sporting Goods Store",
    category: "Shopping",
    status: "Active",
    country: "UK",
    preview: "https://example.com/preview/uk-sports",
    approvalDate: "2024-04-28",
  },
  {
    id: 9,
    name: "Luxury Goods Catalog",
    category: "Shopping",
    status: "Active",
    country: "UK",
    preview: "https://example.com/preview/uk-luxury",
    approvalDate: "2024-05-01",
  },
  {
    id: 10,
    name: "Garden Supplies Feed",
    category: "Shopping",
    status: "Active",
    country: "UK",
    preview: "https://example.com/preview/uk-garden",
    approvalDate: "2024-05-05",
  },
  
  // CA Items
  {
    id: 11,
    name: "Home Decor Products",
    category: "Shopping",
    status: "Active",
    country: "CA",
    preview: "https://example.com/preview/home-decor",
    approvalDate: "2024-06-01",
  },
  {
    id: 12,
    name: "Canadian Apparel Store",
    category: "Shopping",
    status: "Active",
    country: "CA",
    preview: "https://example.com/preview/ca-apparel",
    approvalDate: "2024-06-05",
  },
  {
    id: 13,
    name: "Outdoor Equipment",
    category: "Shopping",
    status: "Active",
    country: "CA",
    preview: "https://example.com/preview/ca-outdoor",
    approvalDate: "2024-06-08",
  },
  {
    id: 14,
    name: "Electronics Superstore",
    category: "Shopping",
    status: "Active",
    country: "CA",
    preview: "https://example.com/preview/ca-electronics",
    approvalDate: "2024-06-12",
  },
  {
    id: 15,
    name: "Kitchen Supplies",
    category: "Shopping",
    status: "Active",
    country: "CA",
    preview: "https://example.com/preview/ca-kitchen",
    approvalDate: "2024-06-15",
  },
  
  // AU Items
  {
    id: 16,
    name: "Sports Equipment Catalog",
    category: "Shopping",
    status: "Active",
    country: "AU",
    preview: "https://example.com/preview/sports",
    approvalDate: "2024-05-28",
  },
  {
    id: 17,
    name: "Australian Fashion",
    category: "Shopping",
    status: "Active",
    country: "AU",
    preview: "https://example.com/preview/au-fashion",
    approvalDate: "2024-05-30",
  },
  {
    id: 18,
    name: "Home Improvement Store",
    category: "Shopping",
    status: "Active",
    country: "AU",
    preview: "https://example.com/preview/au-home",
    approvalDate: "2024-06-02",
  },
  {
    id: 19,
    name: "Tech Gadgets Store",
    category: "Shopping",
    status: "Active",
    country: "AU",
    preview: "https://example.com/preview/au-tech",
    approvalDate: "2024-06-05",
  },
  {
    id: 20,
    name: "Outdoor Living Catalog",
    category: "Shopping",
    status: "Active",
    country: "AU",
    preview: "https://example.com/preview/au-outdoor",
    approvalDate: "2024-06-08",
  },
  
  // DE Items
  {
    id: 21,
    name: "Beauty Products Feed",
    category: "Shopping",
    status: "Active",
    country: "DE",
    preview: "https://example.com/preview/beauty",
    approvalDate: "2024-05-10",
  },
  {
    id: 22,
    name: "German Automotive Parts",
    category: "Shopping",
    status: "Active",
    country: "DE",
    preview: "https://example.com/preview/de-auto",
    approvalDate: "2024-05-12",
  },
  {
    id: 23,
    name: "Kitchen Appliances",
    category: "Shopping",
    status: "Active",
    country: "DE",
    preview: "https://example.com/preview/de-kitchen",
    approvalDate: "2024-05-15",
  },
  {
    id: 24,
    name: "Office Supplies Store",
    category: "Shopping",
    status: "Active",
    country: "DE",
    preview: "https://example.com/preview/de-office",
    approvalDate: "2024-05-18",
  },
  {
    id: 25,
    name: "Fitness Equipment",
    category: "Shopping",
    status: "Active",
    country: "DE",
    preview: "https://example.com/preview/de-fitness",
    approvalDate: "2024-05-20",
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
  // State for selected items and dropdown open/close
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [activeCountry, setActiveCountry] = useState<string | null>(null);
  const [tableHeight, setTableHeight] = useState(0);
  const tableRef = useRef<HTMLDivElement>(null);

  // Calculate counts per country
  const countryItemCounts: Record<string, number> = inventoryData.reduce((acc, item) => {
    if (!acc[item.country]) {
      acc[item.country] = 0;
    }
    acc[item.country]++;
    return acc;
  }, {} as Record<string, number>);

  // Get table height on component mount and window resize
  useEffect(() => {
    function updateTableHeight() {
      if (tableRef.current) {
        setTableHeight(tableRef.current.clientHeight);
      }
    }
    
    // Initial measurement
    updateTableHeight();
    
    // Update on resize
    window.addEventListener('resize', updateTableHeight);
    return () => window.removeEventListener('resize', updateTableHeight);
  }, []);

  // Group items by country for dropdown
  const itemsByCountry = inventoryData.reduce((acc, item) => {
    if (!acc[item.country]) {
      acc[item.country] = [];
    }
    acc[item.country].push(item);
    return acc;
  }, {} as Record<string, typeof inventoryData>);

  // Get unique countries with their first item (or selected item if present)
  const getUniqueCountryItems = () => {
    const countries = Array.from(new Set(inventoryData.map(item => item.country)));
    return countries.map(country => {
      // If there's a selected item for this country, return that
      const selectedForCountry = selectedItems.length > 0 ? 
        inventoryData.find(item => selectedItems.includes(item.id) && item.country === country) : null;
      
      // Otherwise return the first item for this country
      return selectedForCountry || itemsByCountry[country][0];
    });
  };

  // Toggle dropdown open/close
  const toggleDropdown = (id: number) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  // Determine if dropdown should appear above based on row position
  const shouldPositionAbove = (rowIndex: number, totalRows: number) => {
    return rowIndex > totalRows / 2; // Position above if in bottom half of table
  };

  // Toggle item selection
  const toggleSelection = (id: number) => {
    const selectedItem = inventoryData.find(item => item.id === id);
    if (!selectedItem) return;
    
    // Remove any previously selected items for this country
    const filteredItems = selectedItems.filter(itemId => {
      const item = inventoryData.find(i => i.id === itemId);
      return item?.country !== selectedItem.country;
    });
    
    // Add the new selected item
    setSelectedItems([...filteredItems, id]);
  };

  // Set active country when an item is selected
  useEffect(() => {
    if (selectedItems.length > 0) {
      const selectedItem = inventoryData.find(item => item.id === selectedItems[0]);
      if (selectedItem) {
        setActiveCountry(selectedItem.country);
      }
    } else {
      setActiveCountry(null);
    }
  }, [selectedItems]);

  // Get visible data - one per country or filtered by active country
  const visibleData = activeCountry 
    ? inventoryData.filter(item => item.country === activeCountry)
    : getUniqueCountryItems();

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
            
            {activeCountry && (
              <div className="text-center mb-6">
                <button 
                  onClick={() => {
                    setActiveCountry(null);
                    setSelectedItems([]);
                  }}
                  className="px-4 py-2 text-sm rounded-md bg-[#4285F4]/20 text-white/90 hover:bg-[#4285F4]/30 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-[#4285F4]/20 rounded-2xl overflow-hidden backdrop-blur-lg shadow-[0_0_30px_rgba(66,133,244,0.15)]"
          >
            <div ref={tableRef} className="overflow-x-auto">
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
                  {visibleData.map((item, index) => {
                    const positionAbove = shouldPositionAbove(index, visibleData.length);
                    
                    return (
                      <tr
                        key={item.id}
                        className={`border-b border-[#4285F4]/10 transition-colors duration-300 ${
                          selectedItems.includes(item.id) 
                            ? "bg-[#4285F4]/20" 
                            : "hover:bg-[#4285F4]/10"
                        }`}
                      >
                        <td className="py-6 px-8 text-white/90 text-lg">
                          {index + 1}
                        </td>
                        <td className="py-6 px-8 text-white/90 text-lg font-medium relative">
                          <div 
                            className="flex items-center gap-2 cursor-pointer group"
                            onClick={() => toggleDropdown(item.id)}
                          >
                            {item.name}
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className={`h-5 w-5 text-[#4285F4] transition-transform duration-300 ${openDropdown === item.id ? 'rotate-180' : ''}`} 
                              fill="none" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                          
                          {/* Dropdown Menu with position based on row location */}
                          {openDropdown === item.id && (
                            <div 
                              className={`absolute ${positionAbove ? 'bottom-full mb-2' : 'top-full mt-2'} left-0 w-64 p-1 rounded-md bg-[#05070e]/95 border border-[#4285F4]/20 shadow-[0_0_30px_rgba(66,133,244,0.25)] backdrop-blur-lg z-50`}
                              style={{ maxHeight: '240px', overflowY: 'auto' }}
                            >
                              <div className="py-1 text-sm text-white/80 border-b border-[#4285F4]/20 px-3 mb-1 sticky top-0 bg-[#05070e]/95">
                                Select Item:
                              </div>
                              {itemsByCountry[item.country].map(countryItem => (
                                <div 
                                  key={countryItem.id}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleSelection(countryItem.id);
                                    setOpenDropdown(null);
                                  }}
                                  className={`px-3 py-2 text-sm cursor-pointer rounded ${
                                    selectedItems.includes(countryItem.id) 
                                      ? 'bg-[#4285F4]/30 text-white' 
                                      : 'text-white/80 hover:bg-[#4285F4]/10'
                                  }`}
                                >
                                  {countryItem.name}
                                </div>
                              ))}
                            </div>
                          )}
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
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer transition-transform duration-300 group-hover:scale-110 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                                <Image
                                  src={`/flags/${item.country.toLowerCase()}.svg`}
                                  alt={countryNames[item.country]}
                                  width={32}
                                  height={32}
                                  className="object-cover"
                                />
                              </div>
                              <div className="bg-[#4285F4]/20 text-white/90 text-xs rounded-full h-5 min-w-[20px] flex items-center justify-center px-1.5">
                                {countryItemCounts[item.country]}
                              </div>
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
                    );
                  })}
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
            <Link
              href="/faqs"
              className="text-[#a9bcff]/70 hover:text-[#a9bcff] transition-colors px-2 py-0.5"
            >
              FAQS
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

          {/* Arrow Up Icon (Replacing Social Links) */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="flex items-center gap-3 order-2 sm:order-3"
          >
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[#a9bcff]/70 hover:text-[#a9bcff] transition-colors p-2 hover:bg-white/5 rounded-full"
              aria-label="Scroll to top"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
