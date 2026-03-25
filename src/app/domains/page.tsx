import type { Metadata } from "next";
import Link from "next/link";
import { EveryPageMarketPanels } from "@/components/market-style-panels";

export const metadata: Metadata = {
  title: "Domains & hosting",
  description:
    "Register .com.au and global domains, DNS, and hosting — alongside your internet and voice services.",
};

export default function DomainsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
          Domains · DNS · hosting
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Domains &amp; hosting
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Search and register domains the way you would on retail registrars —
          with your telco stack in one relationship. Pair a{" "}
          <strong>.com.au</strong> or global name with hosting and email, while
          your connectivity and voice stay on{" "}
          <Link href="/internet" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
            internet
          </Link>{" "}
          and{" "}
          <Link href="/phone" className="font-medium text-violet-700 hover:underline dark:text-violet-400">
            local numbers
          </Link>
          .
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-6 text-zinc-700 dark:text-zinc-300">
        <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">
          Why it sits next to nbn® and voice
        </h2>
        <p className="text-sm leading-relaxed">
          Businesses rarely buy “just DNS.” They buy <strong>presence</strong> — a
          domain, reliable email, and a line customers can call. The same
          address-led journey you see on sites like{" "}
          <a
            href="https://www.aussiebroadband.com.au/"
            className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aussie Broadband
          </a>{" "}
          for connectivity, plus geographic numbers (
          <a
            href="https://enginnumbers.com.au/"
            className="font-medium text-violet-700 underline-offset-2 hover:underline dark:text-violet-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Engin-style
          </a>{" "}
          local picks), completes the picture when you layer domains and hosting
          here.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-sm">
          <li>Search availability and cart checkout (WSM API behind server routes).</li>
          <li>DNS templates for common stacks; escalate to IT for complex setups.</li>
          <li>Optional Microsoft 365 from our{" "}
            <Link href="/it-services" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
              IT &amp; email
            </Link>{" "}
            page.
          </li>
        </ul>
        <p className="text-xs text-zinc-500">
          Configure{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 dark:bg-zinc-950">
            WSM_API_BASE_URL
          </code>{" "}
          and implement{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 dark:bg-zinc-950">
            /api/domains/*
          </code>{" "}
          when your WSM contract is ready.
        </p>
      </div>

      <EveryPageMarketPanels />
    </div>
  );
}
