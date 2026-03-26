"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 32, restDelta: 0.001 });

  if (reduce) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none fixed left-0 right-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-500 dark:from-blue-500 dark:via-cyan-400 dark:to-violet-400"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
