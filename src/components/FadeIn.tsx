// src/components/FadeIn.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function FadeIn({ children, delay = 0, direction = "up" }: FadeInProps) {
  // Define the starting position based on the direction
  const directionOffset = {
    up: 40,
    down: -40,
    left: 40,
    right: -40,
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: direction === "up" || direction === "down" ? directionOffset[direction] : 0,
        x: direction === "left" || direction === "right" ? directionOffset[direction] : 0,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.7, 
        delay: delay, 
        ease: [0.21, 0.47, 0.32, 0.98] // Custom easing for a premium feel
      }}
    >
      {children}
    </motion.div>
  );
}