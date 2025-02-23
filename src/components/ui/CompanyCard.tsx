"use client";

import { motion } from "framer-motion";
import { 
  Cube,
  Brain,
  Lightning,
  Cloud,
  Globe,
  Rocket,
  Database,
  Code,
  Package
} from "@phosphor-icons/react";

interface CompanyCardProps {
  name: string;
  iconType: number;
}

const icons = [
  Cube,
  Brain,
  Lightning,
  Cloud,
  Globe,
  Rocket,
  Database,
  Code,
  Package
];

export const CompanyCard = ({ name, iconType }: CompanyCardProps) => {
  const IconComponent = icons[iconType % icons.length];

  return (
    <div className="relative w-[280px] h-[100px] mx-4 group">
      <div className="absolute inset-0 bg-[#4285F4]/[0.03] backdrop-blur-sm border border-[#4285F4]/10 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-[#4285F4]/20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4285F4]/[0.03] to-transparent" />
      </div>
      <div className="relative h-full flex items-center gap-4 px-6">
        {IconComponent && (
          <IconComponent 
            size={32} 
            weight="thin"
            className="text-[#4285F4]/70 transition-all duration-300 group-hover:text-[#4285F4] group-hover:scale-110 flex-shrink-0"
          />
        )}
        <div className="text-white/70 font-medium transition-all duration-300 group-hover:text-white">
          {name}
        </div>
      </div>
    </div>
  );
}; 