"use client";

import { motion, useReducedMotion } from "framer-motion";

import { motionEase } from "@/components/motion/reveal";

export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) {
    return children;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: motionEase }}
    >
      {children}
    </motion.div>
  );
}
