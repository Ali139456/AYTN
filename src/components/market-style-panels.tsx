import Link from "next/link";

export function AussieStyleAddressPanel({
  className = "",
}: {
  className?: string;
}) {
  return (
    <section
      className={`rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 via-white to-cyan-500/5 p-6 sm:p-8 dark:from-blue-500/10 dark:via-zinc-900/80 dark:to-cyan-500/10 ${className}`}
      aria-labelledby="aussie-style-heading"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
        Address first · nbn® &amp; more
      </p>
      <h2
        id="aussie-style-heading"
        className="mt-2 text-xl font-semibold tracking-tight text-zinc-950 dark:text-white"
      >
        Start where the big providers start: your address
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        See what technology reaches your premises, then choose speeds and
        inclusions. Enter your address, pick <strong>home</strong> or{" "}
        <strong>business</strong>, and review plans matched to your line
        (including nbn® where available).
      </p>
      <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
        <li className="flex gap-2">
          <span className="text-emerald-600 dark:text-emerald-400" aria-hidden>
            ✓
          </span>
          Check what&apos;s available before you commit — no guesswork on tech type.
        </li>
        <li className="flex gap-2">
          <span className="text-emerald-600 dark:text-emerald-400" aria-hidden>
            ✓
          </span>
          Add modems, voice, and bundles as you go — one journey, not five tabs.
        </li>
      </ul>
      <div className="mt-6">
        <Link
          href="/internet"
          className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500"
        >
          Check address &amp; plans
        </Link>
      </div>
    </section>
  );
}

export function LocalNumbersByAreaPanel({
  className = "",
}: {
  className?: string;
}) {
  return (
    <section
      className={`rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/5 via-white to-fuchsia-500/5 p-6 sm:p-8 dark:from-violet-500/10 dark:via-zinc-900/80 dark:to-fuchsia-500/10 ${className}`}
      aria-labelledby="local-numbers-heading"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-violet-700 dark:text-violet-300">
        State · local area · your number
      </p>
      <h2
        id="local-numbers-heading"
        className="mt-2 text-xl font-semibold tracking-tight text-zinc-950 dark:text-white"
      >
        Choose a phone number by state and local area
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        Select your <strong>state</strong>, narrow by{" "}
        <strong>local calling area</strong> (exchange / prefix), then reserve a
        number. Fast setup, clear pricing, and provisioning details (including QR
        codes where needed) sent to your email.
      </p>
      <ul className="mt-4 space-y-2 text-sm text-zinc-700 dark:text-zinc-300">
        <li className="flex gap-2">
          <span className="text-violet-600 dark:text-violet-400" aria-hidden>
            ✓
          </span>
          Filter by state: NSW, VIC, QLD, WA, SA, TAS, ACT, NT.
        </li>
        <li className="flex gap-2">
          <span className="text-violet-600 dark:text-violet-400" aria-hidden>
            ✓
          </span>
          Drill into local areas so your number matches your community or brand.
        </li>
        <li className="flex gap-2">
          <span className="text-violet-600 dark:text-violet-400" aria-hidden>
            ✓
          </span>
          Phone-only path — no internet required.
        </li>
      </ul>
      <div className="mt-6">
        <Link
          href="/phone"
          className="inline-flex items-center justify-center rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-500"
        >
          Browse numbers by area
        </Link>
      </div>
    </section>
  );
}

export function HomeMarketHighlightStrip() {
  return (
    <section className="border-y border-zinc-200 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-950/50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-semibold leading-snug tracking-tight text-zinc-950 sm:text-2xl md:text-3xl dark:text-white">
            The flows Australians already understand
          </h2>
          <p className="mt-3 text-sm text-zinc-600 sm:text-base dark:text-zinc-400">
            Check what&apos;s available at your address, then choose a plan. Pick
            phone numbers by <strong>state</strong> and <strong>local area</strong>{" "}
            — clear steps from start to finish.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <AussieStyleAddressPanel />
          <LocalNumbersByAreaPanel />
        </div>
      </div>
    </section>
  );
}
