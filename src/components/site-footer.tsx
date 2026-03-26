"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import { motionEase, staggerContainer, staggerItem } from "@/components/motion/reveal";

const services = [
  { href: "/internet", label: "Internet & NBN" },
  { href: "/phone", label: "Phone numbers" },
  { href: "/domains", label: "Domains & hosting" },
  { href: "/it-services", label: "IT & email" },
  { href: "/outages", label: "Network status" },
] as const;

export function SiteFooter() {
  const reduce = useReducedMotion();
  const gridVariants = reduce ? { hidden: {}, show: {} } : staggerContainer;
  const colVariants = reduce ? { hidden: {}, show: {} } : staggerItem;

  return (
    <motion.footer
      className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950"
      initial={reduce ? false : { opacity: 0 }}
      whileInView={reduce ? undefined : { opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: motionEase }}
    >
      <div className="mx-auto max-w-6xl px-4 py-12">
        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={gridVariants}
        >
          <motion.div variants={colVariants}>
            <p className="text-sm font-semibold text-zinc-950 dark:text-white">AYTN Services</p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              All Your Telecommunication Needs — internet, voice, domains, and IT for Australian homes and
              businesses.
            </p>
          </motion.div>
          <motion.div variants={colVariants}>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Services
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div variants={colVariants}>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Get started
            </p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <Link href="/internet" className="transition hover:text-zinc-950 dark:hover:text-white">
                  Check your address (nbn® &amp; more)
                </Link>
              </li>
              <li>
                <Link href="/phone" className="transition hover:text-zinc-950 dark:hover:text-white">
                  Numbers by state &amp; local area
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        <motion.p
          className="mt-10 border-t border-zinc-200 pt-8 text-center text-xs text-zinc-500 dark:border-zinc-800"
          initial={reduce ? false : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.08, ease: motionEase }}
        >
          © {new Date().getFullYear()} AYTN Services Pty Ltd
        </motion.p>
      </div>
    </motion.footer>
  );
}
