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
    <header className="sticky top-0 z-50 border-b border-zinc-200/90 bg-white px-4 pt-4 pb-3 shadow-[0_1px_0_rgba(0,0,0,0.04)] dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 items-center gap-x-3 gap-y-3 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:gap-y-0">
        {/* Logo — left */}
        <Link
          href="/"
          className="col-start-1 row-start-1 justify-self-start text-left text-lg font-bold uppercase tracking-[0.12em] text-zinc-950 transition-colors duration-200 hover:text-blue-600 dark:text-white dark:hover:text-cyan-400 sm:pl-1"
        >
          AYTN
        </Link>

        {/* Contact — right; mirrors logo weight on large screens */}
        <Link
          href="/it-services#contact"
          className="col-start-2 row-start-1 justify-self-end rounded-full border border-zinc-800 px-3.5 py-2 text-xs font-semibold text-zinc-900 transition-colors hover:bg-zinc-900 hover:text-white dark:border-white/45 dark:text-white dark:hover:border-white dark:hover:bg-white dark:hover:text-zinc-950 sm:col-start-3 sm:px-4 sm:text-sm"
        >
          Contact us
        </Link>

        {/* Glass pill — centered under logo+CTA on small screens, middle column on sm+ */}
        <nav
          className="col-span-2 row-start-2 justify-self-center sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:justify-self-center rounded-full border border-white/50 bg-white/45 px-3 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-xl backdrop-saturate-150 transition-shadow duration-300 hover:border-white/70 hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:border-white/10 dark:bg-zinc-950/45 dark:shadow-[0_4px_24px_rgba(0,0,0,0.25)] dark:hover:border-white/20 dark:hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)] sm:px-5 sm:py-2.5"
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
      </div>
    </header>
  );
}
