import type { Metadata } from "next";
import Link from "next/link";
import { EveryPageMarketPanels } from "@/components/market-style-panels";

export const metadata: Metadata = {
  title: "Network status",
  description:
    "Current outages and planned maintenance — transparent status like leading ISP dashboards.",
};

export default function OutagesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-rose-700 dark:text-rose-300">
          Transparency · incidents · maintenance
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Network status &amp; outages
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Customers expect the same honesty they get from major networks: what&apos;s
          down, where, and when it&apos;s back. Major retail ISPs publish outages
          and tools alongside sales — e.g. help hubs on{" "}
          <a
            href="https://www.aussiebroadband.com.au/"
            className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aussie Broadband
          </a>{" "}
          — we surface your network the same way.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center dark:border-zinc-700 dark:bg-zinc-900/40">
        <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Live outage list loads here
        </p>
        <p className="mt-2 text-sm text-zinc-500">
          Feed from your API, or import Excel from FTP into Supabase on a
          schedule — then render a Buddy Telco–style board with filters and
          regions.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl text-sm text-zinc-600 dark:text-zinc-400">
        <p>
          While you wait on data: check your{" "}
          <Link href="/internet" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
            address
          </Link>{" "}
          for serviceability or browse{" "}
          <Link href="/phone" className="font-medium text-violet-700 hover:underline dark:text-violet-400">
            local numbers by state and area
          </Link>
          .
        </p>
      </div>

      <EveryPageMarketPanels />
    </div>
  );
}
