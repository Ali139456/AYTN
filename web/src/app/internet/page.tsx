import type { Metadata } from "next";
import Link from "next/link";
import { EveryPageMarketPanels } from "@/components/market-style-panels";

export const metadata: Metadata = {
  title: "Internet & NBN",
  description:
    "Check your address for nbn® and other technologies, choose home or business plans, and add modems — like leading Australian providers.",
};

export default function InternetPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
          Internet · nbn® · fibre
        </p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
          Internet &amp; NBN — availability first
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          Just like{" "}
          <a
            href="https://www.aussiebroadband.com.au/"
            className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aussie Broadband
          </a>{" "}
          and other retail ISPs, we start with <strong>your address</strong> and{" "}
          <strong>property type</strong> so you only see plans that can actually
          be delivered — nbn®, fixed wireless, fibre where available, and more.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6 dark:border-zinc-800 dark:bg-zinc-900/40 sm:p-8">
        <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">
          Check what&apos;s available at your place
        </h2>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          Enter your full address, choose <strong>home</strong> or{" "}
          <strong>business</strong> (ABN for business where required), then
          compare download/upload speeds, unlimited data options, and hardware.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-medium text-zinc-500">
              Address
            </label>
            <div className="mt-1 rounded-lg border border-dashed border-zinc-300 bg-white px-3 py-2.5 text-sm text-zinc-400 dark:border-zinc-600 dark:bg-zinc-950">
              Start typing your street address…
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-zinc-500">
              Property type
            </label>
            <div className="mt-1 flex gap-2">
              <span className="inline-flex flex-1 items-center justify-center rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm font-medium dark:border-zinc-600 dark:bg-zinc-950">
                Home
              </span>
              <span className="inline-flex flex-1 items-center justify-center rounded-lg border border-dashed border-zinc-300 px-3 py-2.5 text-sm text-zinc-500 dark:border-zinc-600">
                Business
              </span>
            </div>
          </div>
        </div>
        <p className="mt-4 text-xs text-zinc-500">
          Live lookup connects to your availability API (e.g. Vocus) from the
          server — keys never ship to the browser.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <h2 className="text-xl font-semibold text-zinc-950 dark:text-white">
          Plans, modems, and voice add-ons
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
          <li>
            Plans filtered by what your address can support — no generic
            catalogue that doesn&apos;t apply.
          </li>
          <li>
            Optional nbn®-compatible modem/routers and phone adapters, similar to
            add-on flows on major provider sites.
          </li>
          <li>
            Bundle <Link href="/phone" className="font-medium text-violet-700 underline-offset-2 hover:underline dark:text-violet-400">VoIP or a new local number</Link>{" "}
            by state and area after you&apos;ve locked in internet.
          </li>
        </ul>
        <p className="mt-6 text-sm text-zinc-500">
          API route:{" "}
          <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs dark:bg-zinc-950">
            POST /api/internet/availability
          </code>
        </p>
      </div>

      <EveryPageMarketPanels />
    </div>
  );
}
