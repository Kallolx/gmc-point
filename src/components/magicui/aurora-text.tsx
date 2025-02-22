"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps } from "motion/react";
import React from "react";

interface AuroraTextProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export function AuroraText({
  className,
  children,
  as: Component = "span",
  ...props
}: AuroraTextProps) {
  const MotionComponent = motion.create(Component);

  return (
    <MotionComponent
      className={cn(
        "relative inline-flex bg-clip-text text-transparent",
        className
      )}
      {...props}
      style={{
        backgroundImage:
          "linear-gradient(90deg, hsl(var(--color-1)), hsl(var(--color-2)), hsl(var(--color-3)), hsl(var(--color-4)))",
        backgroundSize: "400% 100%",
        animation: "aurora-text 8s ease-in-out infinite alternate",
      }}
    >
      {children}
    </MotionComponent>
  );
}
