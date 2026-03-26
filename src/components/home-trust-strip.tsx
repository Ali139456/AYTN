"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

import { staggerContainer, staggerItem } from "@/components/motion/reveal";

const items = [
  "Built for Australian homes & SMBs",
  "Clear availability before you buy",
  "Status & outages in one view",
] as const;

function ChevronLeftIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function HomeTrustStrip() {
  const reduce = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, clientWidth, scrollWidth } = el;
    setCanPrev(scrollLeft > 4);
    setCanNext(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
  }, [updateScrollState]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => updateScrollState());
    ro.observe(el);
    return () => ro.disconnect();
  }, [updateScrollState]);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scrollRef.current;
    if (!el) return;
    const first = el.children[0] as HTMLElement | undefined;
    const w = (first?.offsetWidth ?? el.clientWidth * 0.72) + 12;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  };

  const gridVariants = reduce ? { hidden: {}, show: {} } : staggerContainer;
  const itemVariants = reduce ? { hidden: {}, show: {} } : staggerItem;

  return (
    <section className="border-b border-zinc-200 bg-white py-6 dark:border-zinc-800 dark:bg-zinc-950 sm:py-10">
      {/* Desktop / tablet: staggered row */}
      <motion.div
        className="mx-auto hidden max-w-6xl flex-row flex-wrap items-center justify-between gap-6 px-4 sm:flex sm:gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={gridVariants}
      >
        {items.map((text) => (
          <motion.div key={text} variants={itemVariants} className="min-w-0 flex-1 text-center">
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Mobile: one-line carousel */}
      <div className="relative px-4 sm:hidden">
        <div className="pointer-events-none absolute inset-y-0 left-2 z-10 flex w-9 items-center justify-start">
          <button
            type="button"
            aria-label="Previous"
            disabled={!canPrev}
            onClick={() => scrollByDir(-1)}
            className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white/95 text-zinc-800 shadow-sm backdrop-blur-sm disabled:pointer-events-none disabled:opacity-25 dark:border-zinc-600 dark:bg-zinc-900/95 dark:text-zinc-100"
          >
            <ChevronLeftIcon />
          </button>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-2 z-10 flex w-9 items-center justify-end">
          <button
            type="button"
            aria-label="Next"
            disabled={!canNext}
            onClick={() => scrollByDir(1)}
            className="pointer-events-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 bg-white/95 text-zinc-800 shadow-sm backdrop-blur-sm disabled:pointer-events-none disabled:opacity-25 dark:border-zinc-600 dark:bg-zinc-900/95 dark:text-zinc-100"
          >
            <ChevronRightIcon />
          </button>
        </div>

        <div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth px-10 py-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {items.map((text) => (
            <div
              key={text}
              className="w-[min(240px,72vw)] shrink-0 snap-center rounded-2xl border border-zinc-200/90 bg-zinc-50/90 px-4 py-3 text-center dark:border-zinc-700/90 dark:bg-zinc-900/60"
            >
              <p className="text-xs font-medium leading-snug text-zinc-600 dark:text-zinc-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
