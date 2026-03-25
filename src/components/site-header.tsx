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
    <header className="border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          AYTN Services
        </Link>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-zinc-950 dark:hover:text-zinc-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
