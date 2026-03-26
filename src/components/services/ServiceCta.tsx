"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import { motionEase } from "@/components/motion/reveal";

export function ServiceCta({
  title,
  subtitle,
  primary,
  secondary,
}: {
  title: string;
  subtitle: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  const reduce = useReducedMotion();

  return (
    <motion.section
      className="w-full bg-black py-14 text-center sm:py-20 md:py-24"
      initial={reduce ? false : { opacity: 0, y: 36 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: motionEase }}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.h2
          className="text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, delay: 0.05, ease: motionEase }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:mt-4 sm:text-base md:text-lg"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, delay: 0.1, ease: motionEase }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: 0.15, ease: motionEase }}
        >
          <Link
            href={primary.href}
            className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100 sm:w-auto sm:min-w-[160px] sm:px-6"
          >
            {primary.label}
          </Link>
          {secondary ? (
            <Link
              href={secondary.href}
              className="inline-flex w-full items-center justify-center rounded-xl border border-zinc-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-zinc-500 hover:bg-white/5 sm:w-auto sm:min-w-[160px] sm:px-6"
            >
              {secondary.label}
            </Link>
          ) : null}
        </motion.div>
      </div>
    </motion.section>
  );
}
