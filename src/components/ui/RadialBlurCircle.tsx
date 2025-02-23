import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface RadialBlurCircleProps {
  position: "left" | "right" | "top" | "bottom";
  color: string;
  className?: string;
}

export const RadialBlurCircle = ({
  position,
  color,
  className,
}: RadialBlurCircleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn(
        "absolute top-1/2 -translate-y-1/2 w-[700px] h-[700px]",
        position === "left" ? "-left-1/4" : position === "right" ? "-right-1/4" : position === "top" ? "-top-1/4" : "-bottom-1/4",
        className
      )}
      style={{
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        filter: "blur(60px)",
        mixBlendMode: "screen",
      }}
    />
  );
}; 