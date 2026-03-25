import Link from "next/link";

const nav = [
  { href: "/internet", label: "Internet & NBN" },
  { href: "/phone", label: "Phone numbers" },
  { href: "/domains", label: "Domains & hosting" },
  { href: "/it-services", label: "IT & email" },
  { href: "/outages", label: "Network status" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 pb-3">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-stretch gap-4 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-3">
        {/* Logo — outside the glass pill, left-aligned */}
        <Link
          href="/"
          className="shrink-0 justify-self-start text-left text-lg font-bold uppercase tracking-[0.12em] text-zinc-950 transition-colors duration-200 hover:text-blue-600 dark:text-white dark:hover:text-cyan-400 sm:pl-1"
        >
          AYTN
        </Link>

        {/* Glass pill — centered in the header (middle column) */}
        <nav
          className="justify-self-center rounded-full border border-white/50 bg-white/45 px-3 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-xl backdrop-saturate-150 transition-shadow duration-300 hover:border-white/70 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:border-white/10 dark:bg-zinc-950/45 dark:shadow-[0_4px_24px_rgba(0,0,0,0.25)] dark:hover:border-white/20 dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)] sm:px-5 sm:py-2.5"
          aria-label="Primary"
        >
          <ul className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 sm:gap-x-5 sm:gap-y-0">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-full px-2.5 py-1 text-center text-xs font-medium text-zinc-800 transition-all duration-200 ease-out hover:scale-[1.03] hover:bg-zinc-900/[0.07] hover:text-zinc-950 active:scale-[0.98] sm:px-3 sm:py-1.5 sm:text-sm dark:text-zinc-200 dark:hover:bg-white/[0.08] dark:hover:text-white dark:active:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent dark:focus-visible:ring-cyan-400/50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Balance column so the pill stays visually centered */}
        <div className="hidden sm:block" aria-hidden="true" />
      </div>
    </header>
  );
}
