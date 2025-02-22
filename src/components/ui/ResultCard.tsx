"use client";

import { motion as m } from "framer-motion";

interface ResultCardProps {
  beforeDate: string;
  afterDate: string;
  metrics: {
    scaledFrom: string;
    salesPerMonth: string;
    ordersPerMonth: string;
    avgCR: string;
    totalRevenue: string;
  };
  isActive?: boolean;
}

export const ResultCard = ({ beforeDate, afterDate, metrics, isActive = false }: ResultCardProps) => {
  return (
    <m.div 
      className={`relative w-full backdrop-blur-xl rounded-3xl border border-white/5 bg-transparent overflow-hidden transition-all duration-500 p-6
        ${isActive ? 'opacity-100 scale-100 shadow-[0_0_30px_-5px_rgba(66,133,244,0.1)]' : 'opacity-50 scale-95'}`}
    >
      <div className="relative z-10 flex items-stretch gap-6">
        {/* Before Section */}
        <div className="flex-[0.8] bg-[#090b11] rounded-2xl p-8 border border-red-500/20 relative overflow-hidden">
          {/* Content */}
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-medium text-white mb-1">Before</h3>
                <div className="text-red-500 text-sm">Initial State</div>
              </div>
              <span className="text-gray-400">{beforeDate}</span>
            </div>
            
            <div className="space-y-4">
              <m.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex justify-between items-center bg-white/[0.03] p-3 rounded-lg"
              >
                <span className="text-gray-300">Scaled From</span>
                <div className="flex items-center">
                  <span className="text-red-500 font-medium text-xl">{metrics.scaledFrom}</span>
                  <svg className="w-4 h-4 ml-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </m.div>
              <m.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-between items-center bg-white/[0.03] p-3 rounded-lg"
              >
                <span className="text-gray-300">Sales/Month</span>
                <div className="flex items-center">
                  <span className="text-red-500 font-medium text-xl">$0</span>
                  <svg className="w-4 h-4 ml-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </m.div>
              <m.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex justify-between items-center bg-white/[0.03] p-3 rounded-lg"
              >
                <span className="text-gray-300">Orders/Month</span>
                <div className="flex items-center">
                  <span className="text-red-500 font-medium text-xl">0</span>
                  <svg className="w-4 h-4 ml-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </m.div>
              <m.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex justify-between items-center bg-white/[0.03] p-3 rounded-lg"
              >
                <span className="text-gray-300">Avg. CR</span>
                <div className="flex items-center">
                  <span className="text-red-500 font-medium text-xl">0%</span>
                  <svg className="w-4 h-4 ml-2 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </m.div>
            </div>
          </div>
        </div>

        {/* Arrow Divider */}
        <div className="flex items-center">
          <m.div
            animate={{ 
              x: [0, 5, 0],
              scale: isActive ? [1, 1.2, 1] : 1
            }}
            transition={{ 
              x: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4285F4"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-[0_0_10px_rgba(66,133,244,0.5)]"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </m.div>
        </div>

        {/* After Section */}
        <div className="flex-[1.2] bg-[#090b11] rounded-2xl p-8 border border-[#4285F4]/20 relative overflow-hidden">
          {/* Content */}
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-medium text-white mb-1">After</h3>
                <div className="text-[#4285F4] text-sm">Optimized Performance</div>
              </div>
              <span className="text-gray-400">{afterDate}</span>
            </div>
            
            <div className="space-y-4">
              <m.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex justify-between items-center bg-white/[0.03] p-3 rounded-lg"
              >
                <span className="text-gray-300">Total Revenue</span>
                <div className="flex items-center">
                  <span className="text-[#4285F4] font-medium text-xl">${metrics.totalRevenue}</span>
                  <svg className="w-4 h-4 ml-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
              </m.div>
              <m.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-between items-center bg-white/[0.03] p-3 rounded-lg"
              >
                <span className="text-gray-300">Sales/Month</span>
                <div className="flex items-center">
                  <span className="text-[#4285F4] font-medium text-xl">${metrics.salesPerMonth}</span>
                  <svg className="w-4 h-4 ml-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
              </m.div>
              <m.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex justify-between items-center bg-white/[0.03] p-3 rounded-lg"
              >
                <span className="text-gray-300">Orders/Month</span>
                <div className="flex items-center">
                  <span className="text-[#4285F4] font-medium text-xl">{metrics.ordersPerMonth}</span>
                  <svg className="w-4 h-4 ml-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
              </m.div>
              <m.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex justify-between items-center bg-white/[0.03] p-3 rounded-lg"
              >
                <span className="text-gray-300">Avg. CR</span>
                <div className="flex items-center">
                  <span className="text-[#4285F4] font-medium text-xl">{metrics.avgCR}%</span>
                  <svg className="w-4 h-4 ml-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </div>
              </m.div>
            </div>
          </div>
        </div>
      </div>
    </m.div>
  );
};