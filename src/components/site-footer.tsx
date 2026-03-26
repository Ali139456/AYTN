import Link from "next/link";

const services = [
  { href: "/internet", label: "Internet & NBN" },
  { href: "/phone", label: "Phone numbers" },
  { href: "/domains", label: "Domains & hosting" },
  { href: "/it-services", label: "IT & email" },
  { href: "/outages", label: "Network status" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-zinc-950 dark:text-white">
              AYTN Services
            </p>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              All Your Telecommunication Needs — internet, voice, domains, and IT
              for Australian homes and businesses.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Services
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Get started
            </p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>
                <Link
                  href="/internet"
                  className="hover:text-zinc-950 dark:hover:text-white"
                >
                  Check your address (nbn® &amp; more)
                </Link>
              </li>
              <li>
                <Link
                  href="/phone"
                  className="hover:text-zinc-950 dark:hover:text-white"
                >
                  Numbers by state &amp; local area
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-zinc-200 pt-8 text-center text-xs text-zinc-500 dark:border-zinc-800">
          © {new Date().getFullYear()} AYTN Services Pty Ltd
        </p>
      </div>
    </footer>
  );
}
