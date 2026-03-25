import type { Metadata } from "next";
import Link from "next/link";
import { EveryPageMarketPanels } from "@/components/market-style-panels";

export const metadata: Metadata = {
  title: "Phone numbers",
  description:
    "Choose VoIP and local numbers by Australian state and local area — instant setup details and QR codes by email.",
};

export default function PhonePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-violet-700 dark:text-violet-300">
          VoIP · local presence
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Phone numbers by state &amp; local area
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Pick a number the way specialist geographic services do — choose your{" "}
          <strong>state</strong>, narrow to a <strong>local calling area</strong>
          , then select from live inventory. This mirrors flows you see from
          providers such as{" "}
          <a
            href="https://enginnumbers.com.au/"
            className="font-medium text-violet-700 underline-offset-2 hover:underline dark:text-violet-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Engin Numbers
          </a>{" "}
          (instant issue, local-rate logic, clear weekly-style pricing where
          applicable).
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-8">
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">
            How selection works
          </h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li>
              <strong>State</strong> — NSW, VIC, QLD, WA, SA, TAS, ACT, or NT.
            </li>
            <li>
              <strong>Local area</strong> — prefix / exchange or region list so
              the number matches your city or community.
            </li>
            <li>
              <strong>Number</strong> — pick from available DIDs; port-in can be
              offered as a separate flow.
            </li>
          </ol>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6 dark:border-zinc-800 dark:bg-zinc-900/40 sm:p-8">
          <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">
            After you order
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
            <li>
              <strong>QR codes</strong> and provisioning for supported handsets
              and softphones.
            </li>
            <li>
              <strong>Email pack</strong> with setup PDFs and credentials via
              Resend (or your ESP).
            </li>
            <li>
              Numbers maintained in <strong>Supabase</strong> from bulk file
              imports — always in sync with what you sell.
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-violet-500/20 bg-violet-500/5 p-6 dark:bg-violet-500/10 sm:p-8">
        <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">
          No internet? No problem.
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          This page is for customers who <strong>only</strong> want voice. If
          you&apos;re also ordering nbn®, start with{" "}
          <Link
            href="/internet"
            className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
          >
            Internet &amp; NBN
          </Link>{" "}
          and add a number during checkout — same geographic picker.
        </p>
      </div>

      <EveryPageMarketPanels />
    </div>
  );
}
