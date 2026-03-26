"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const nav = [
  { href: "/internet", label: "Internet & NBN" },
  { href: "/phone", label: "Phone numbers" },
  { href: "/domains", label: "Domains & hosting" },
  { href: "/it-services", label: "IT & email" },
  { href: "/outages", label: "Network status" },
] as const;

function MenuIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const mobileOverlay =
    mounted && open ? (
      <div
        id="mobile-primary-nav"
        className="fixed inset-0 z-[100] flex min-h-0 w-full max-w-none flex-col overflow-y-auto bg-zinc-950/98 backdrop-blur-sm lg:hidden"
        aria-hidden={false}
      >
        <div className="flex h-full w-full min-w-0 flex-1 flex-col px-5 pb-10 pt-4">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-sm font-semibold uppercase tracking-wider text-zinc-400">
              Menu
            </span>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-white"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>
          <nav className="mt-6 flex flex-1 flex-col gap-1" aria-label="Primary mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3.5 text-base font-medium text-white transition-colors hover:bg-white/10"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/it-services#contact"
            className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white py-3.5 text-sm font-semibold text-zinc-950"
            onClick={() => setOpen(false)}
          >
            Contact us
          </Link>
        </div>
      </div>
    ) : null;

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-zinc-200/90 bg-white shadow-[0_1px_0_rgba(0,0,0,0.04)] dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-center lg:gap-3 lg:py-4">
          <Link
            href="/"
            className="shrink-0 text-left text-lg font-bold uppercase tracking-[0.12em] text-zinc-950 transition-colors duration-200 hover:text-blue-600 dark:text-white dark:hover:text-cyan-400 lg:justify-self-start lg:pl-1"
          >
            AYTN
          </Link>

          <nav
            className="hidden rounded-full border border-white/50 bg-white/45 px-4 py-2 shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/45 dark:shadow-[0_4px_24px_rgba(0,0,0,0.25)] lg:block lg:justify-self-center lg:px-5 lg:py-2.5"
            aria-label="Primary"
          >
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-0">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-full px-3 py-1.5 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-900/[0.07] hover:text-zinc-950 dark:text-zinc-200 dark:hover:bg-white/[0.08] dark:hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 dark:focus-visible:ring-cyan-400/50"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex shrink-0 items-center gap-2 lg:justify-self-end">
            <Link
              href="/it-services#contact"
              className="inline-flex items-center justify-center rounded-full border border-zinc-800 px-3 py-2 text-xs font-semibold text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white dark:border-white/45 dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-zinc-950 sm:px-4 sm:text-sm"
            >
              Contact us
            </Link>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-300 text-zinc-900 lg:hidden dark:border-zinc-600 dark:text-white"
              aria-expanded={open}
              aria-controls="mobile-primary-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>
      {mobileOverlay ? createPortal(mobileOverlay, document.body) : null}
    </>
  );
}
