import Link from "next/link";

/**
 * Retail ISP–style messaging (address → availability → plans), similar in spirit
 * to how [Aussie Broadband](https://www.aussiebroadband.com.au/) leads with
 * “check your address” and property context before you buy.
 */
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
        Leading Australian telcos put <strong>availability before the sale</strong>
        — you see what technology reaches your premises, then choose speeds and
        inclusions. At AYTN we follow that same idea: enter your address, pick{" "}
        <strong>home</strong> or <strong>business</strong> when you order, then
        review plans matched to your line (including nbn® where available).
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
      <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-500">
        Retail pattern reference:{" "}
        <a
          href="https://www.aussiebroadband.com.au/"
          className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aussie Broadband
        </a>{" "}
        (address-led plans &amp; property type).
      </p>
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

/**
 * Geographic number selection: state → local area → number. Same UX pattern
 * many Australian VoIP providers use so callers get a truly local presence.
 */
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
        Whether you need VoIP without internet or an extra line for your
        business, pick numbers the way customers expect: select your{" "}
        <strong>state</strong>, narrow by <strong>local calling area</strong>{" "}
        (exchange / prefix), then reserve a number from live inventory. It&apos;s
        the same geographic flow used by specialist local-number services — fast
        setup, clear pricing, and provisioning details (including QR codes where
        needed) sent to your email.
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
      <p className="mt-4 text-xs text-zinc-500 dark:text-zinc-500">
        Example of geographic number UX in market:{" "}
        <a
          href="https://enginnumbers.com.au/"
          className="font-medium text-violet-700 underline-offset-2 hover:underline dark:text-violet-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Engin Numbers
        </a>{" "}
        (local presence &amp; instant issue flows).
      </p>
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

/** Standard pair of blocks for inner pages (below main copy). */
export function EveryPageMarketPanels() {
  return (
    <div className="mt-16 grid gap-8 border-t border-zinc-200 pt-16 dark:border-zinc-800 lg:grid-cols-2">
      <AussieStyleAddressPanel />
      <LocalNumbersByAreaPanel />
    </div>
  );
}

/** Compact row for the home page (above final CTA). */
export function HomeMarketHighlightStrip() {
  return (
    <section className="border-y border-zinc-200 bg-zinc-50 py-16 dark:border-zinc-800 dark:bg-zinc-950/50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
            The flows Australians already understand
          </h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-400">
            Address-led internet like{" "}
            <a
              href="https://www.aussiebroadband.com.au/"
              className="font-medium text-blue-600 underline-offset-2 hover:underline dark:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aussie Broadband
            </a>
            , plus local numbers by{" "}
            <strong>state</strong> and <strong>area</strong> — the same pattern
            used by providers such as{" "}
            <a
              href="https://enginnumbers.com.au/"
              className="font-medium text-violet-700 underline-offset-2 hover:underline dark:text-violet-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Engin Numbers
            </a>
            .
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
