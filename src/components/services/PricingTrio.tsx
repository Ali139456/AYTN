"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { motionEase, staggerContainer, staggerItem } from "@/components/motion/reveal";

export type PricingPlan = {
  badge: string;
  popular?: boolean;
  headline: string;
  price: string;
  priceNote: string;
  topFeatures: readonly { readonly icon: string; readonly text: string }[];
  bottomFeatures: readonly string[];
  viewHref: string;
  buyHref: string;
};

function ChevronLeftIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

function planCardClassName(plan: PricingPlan) {
  return `flex shrink-0 flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-zinc-900 max-lg:snap-center max-lg:w-[min(260px,68vw)] lg:min-w-0 lg:w-auto ${
    plan.popular
      ? "border-blue-500 ring-2 ring-blue-500/25 dark:ring-blue-400/30"
      : "border-slate-200 dark:border-zinc-700"
  }`;
}

function PricingPlanCard({ plan, variants }: { plan: PricingPlan; variants: Variants }) {
  return (
    <motion.article className={planCardClassName(plan)} variants={variants}>
      <div
        className={`py-3 text-center text-sm font-bold uppercase tracking-wide text-white ${
          plan.popular ? "bg-blue-600" : "bg-blue-500"
        }`}
      >
        {plan.badge}
      </div>
      <div className="bg-gradient-to-b from-sky-50/95 to-blue-50/40 px-4 pb-4 pt-5 dark:from-zinc-800/90 dark:to-zinc-800/50 sm:px-5 sm:pb-5 sm:pt-6">
        <p className="text-center text-2xl font-extrabold tracking-tight text-blue-600 sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl dark:text-blue-400">
          {plan.headline}
        </p>
        <p className="mt-2 text-center text-lg font-bold text-zinc-900 sm:text-xl md:text-2xl dark:text-zinc-50">
          {plan.price}
          {plan.priceNote ? (
            <span className="text-sm font-semibold text-zinc-600 sm:text-base dark:text-zinc-400">
              {" "}
              {plan.priceNote}
            </span>
          ) : null}
        </p>
        <ul className="mt-4 space-y-2.5 border-b border-slate-200/80 pb-5 dark:border-zinc-600/80 sm:mt-6 sm:space-y-3 sm:pb-6">
          {plan.topFeatures.map((f) => (
            <li key={f.text} className="flex gap-2.5 text-xs leading-snug text-zinc-700 sm:gap-3 sm:text-sm dark:text-zinc-300">
              <span className="shrink-0 text-base leading-none text-zinc-800 sm:text-lg dark:text-zinc-200">
                {f.icon}
              </span>
              <span>{f.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-1 flex-col px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-4">
        <ul className="flex-1 space-y-2">
          {plan.bottomFeatures.map((line) => (
            <li key={line} className="flex gap-2 text-xs text-zinc-600 sm:gap-2.5 sm:text-sm dark:text-zinc-400">
              <span
                className="mt-1 h-1 w-1 shrink-0 rounded-full bg-zinc-800 sm:mt-1.5 sm:h-1.5 sm:w-1.5 dark:bg-zinc-400"
                aria-hidden
              />
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3">
          <Link
            href={plan.viewHref}
            className="inline-flex flex-1 items-center justify-center rounded-full border-2 border-zinc-800 bg-white py-2.5 text-xs font-semibold text-zinc-900 transition hover:bg-zinc-50 sm:py-3 sm:text-sm dark:border-zinc-500 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700"
          >
            View details
          </Link>
          <Link
            href={plan.buyHref}
            className="inline-flex flex-1 items-center justify-center rounded-full bg-zinc-900 py-2.5 text-xs font-semibold text-white transition hover:bg-zinc-800 sm:py-3 sm:text-sm dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            Get started
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export function PricingTrio({
  sectionTitle,
  sectionSubtitle,
  plans,
}: {
  sectionTitle: string;
  sectionSubtitle?: string;
  plans: readonly PricingPlan[];
}) {
  const reduce = useReducedMotion();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const gridVariants: Variants = reduce ? { hidden: {}, show: {} } : staggerContainer;
  const itemVariants: Variants = reduce ? { hidden: {}, show: {} } : staggerItem;

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, clientWidth, scrollWidth } = el;
    setCanPrev(scrollLeft > 4);
    setCanNext(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateScrollState();
  }, [plans, updateScrollState]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => updateScrollState());
    ro.observe(el);
    return () => ro.disconnect();
  }, [updateScrollState]);

  const scrollByDir = (dir: -1 | 1) => {
    const el = scrollRef.current;
    if (!el || plans.length === 0) return;
    const first = el.children[0] as HTMLElement | undefined;
    const cardW = first?.offsetWidth ?? el.clientWidth * 0.68;
    const gap = 16;
    el.scrollBy({ left: dir * (cardW + gap), behavior: "smooth" });
  };

  return (
    <section className="mt-12 sm:mt-16 md:mt-20">
      <motion.div
        className="text-center"
        initial={reduce ? false : { opacity: 0, y: 22 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: motionEase }}
      >
        <h2 className="px-2 text-xl font-bold leading-snug text-zinc-900 sm:text-2xl md:text-3xl dark:text-zinc-50">
          {sectionTitle}
        </h2>
        {sectionSubtitle ? (
          <p className="mx-auto mt-2 max-w-2xl px-2 text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
            {sectionSubtitle}
          </p>
        ) : null}
        <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
          Prices shown in AUD · incl. GST where applicable
        </p>
      </motion.div>

      <div className="relative mt-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex w-11 items-center justify-start lg:hidden">
          <button
            type="button"
            aria-label="Previous plans"
            disabled={!canPrev}
            onClick={() => scrollByDir(-1)}
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white/95 text-zinc-900 shadow-md backdrop-blur-sm transition hover:bg-white disabled:pointer-events-none disabled:opacity-30 dark:border-zinc-600 dark:bg-zinc-900/95 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            <ChevronLeftIcon />
          </button>
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex w-11 items-center justify-end lg:hidden">
          <button
            type="button"
            aria-label="Next plans"
            disabled={!canNext}
            onClick={() => scrollByDir(1)}
            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-300 bg-white/95 text-zinc-900 shadow-md backdrop-blur-sm transition hover:bg-white disabled:pointer-events-none disabled:opacity-30 dark:border-zinc-600 dark:bg-zinc-900/95 dark:text-zinc-100 dark:hover:bg-zinc-800"
          >
            <ChevronRightIcon />
          </button>
        </div>

        <motion.div
          ref={scrollRef}
          onScroll={updateScrollState}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-11 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-3 lg:gap-6 lg:snap-none lg:overflow-visible lg:px-0 lg:pb-0 [&::-webkit-scrollbar]:hidden"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.08, margin: "0px 0px -8% 0px" }}
        >
          {plans.map((plan) => (
            <PricingPlanCard key={plan.badge} plan={plan} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
