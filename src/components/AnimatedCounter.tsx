// src/components/AnimatedCounter.tsx
"use client";

import { animate, useInView, useMotionValue, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export default function AnimatedCounter({
  from = 0,
  to,
  duration = 2,
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) {
  // Ref to detect when the element is visible on the screen
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Motion value holds the raw decimal number
  const count = useMotionValue(from);
  
  // Transform rounds the decimal to a whole number for display
  const roundedCount = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      // Trigger the animation from the current value to the target 'to' value
      const animation = animate(count, to, {
        duration: duration,
        ease: "easeOut",
      });

      // Cleanup function to stop animation if component unmounts
      return animation.stop;
    }
  }, [count, isInView, to, duration]);

  return (
    <span ref={ref} className="inline-flex">
      {prefix}
      <motion.span>{roundedCount}</motion.span>
      {suffix}
    </span>
  );
}