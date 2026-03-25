import type { Metadata } from "next";
import Link from "next/link";
import { EveryPageMarketPanels } from "@/components/market-style-panels";

export const metadata: Metadata = {
  title: "IT & email services",
  description:
    "Microsoft 365, business email, and IT support for Australian SMBs — aligned with your internet and voice.",
};

export default function ItServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-300">
          Microsoft 365 · IT support
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          IT &amp; email services
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Business-grade email and desktop support without enterprise bloat.
          Aligns with how mid-market providers bundle{" "}
          <strong>connectivity + collaboration</strong> — think business nbn® and
          voice from our{" "}
          <Link href="/internet" className="font-medium text-blue-600 hover:underline dark:text-blue-400">
            internet
          </Link>{" "}
          flows (same philosophy as large Australian telcos&apos; business hubs),
          plus{" "}
          <Link href="/phone" className="font-medium text-violet-700 hover:underline dark:text-violet-400">
            geographic numbers
          </Link>{" "}
          for staff and customers.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2">
        {[
          {
            title: "Microsoft 365 & email",
            body: "Mailboxes, Teams basics, and migration assistance — priced for SMBs.",
          },
          {
            title: "Endpoints & helpdesk",
            body: "Workstations, onboarding, and break/fix so your line speed isn’t wasted on bad Wi‑Fi.",
          },
          {
            title: "Security hygiene",
            body: "MFA, backup posture, and vendor hardening — table stakes for anyone selling voice and data.",
          },
          {
            title: "One partner",
            body: "Same account team for nbn®, VoIP, domains, and cloud — fewer tickets, clearer ownership.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <h2 className="font-semibold text-zinc-950 dark:text-white">
              {card.title}
            </h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {card.body}
            </p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-3xl text-sm text-zinc-600 dark:text-zinc-400">
        <p>
          Product SKUs and orders can live in Supabase; licensing integrations
          call your distributor APIs from trusted server routes only.
        </p>
      </div>

      <EveryPageMarketPanels />
    </div>
  );
}
