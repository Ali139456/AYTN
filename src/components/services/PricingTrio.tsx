import Link from "next/link";

export type PricingPlan = {
  badge: string;
  popular?: boolean;
  headline: string;
  price: string;
  priceNote: string;
  topFeatures: readonly { readonly icon: string; readonly text: string }[];
  bottomFeatures: readonly string[];
  viewHref: string;
  buyHref: string;
};

export function PricingTrio({
  sectionTitle,
  sectionSubtitle,
  plans,
}: {
  sectionTitle: string;
  sectionSubtitle?: string;
  plans: readonly PricingPlan[];
}) {
  return (
    <section className="mt-16 sm:mt-20">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl dark:text-zinc-50">
          {sectionTitle}
        </h2>
        {sectionSubtitle ? (
          <p className="mx-auto mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
            {sectionSubtitle}
          </p>
        ) : null}
        <p className="mt-1 text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
          Prices shown in AUD · incl. GST where applicable
        </p>
      </div>
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <article
            key={plan.badge}
            className={`flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-zinc-900 ${
              plan.popular
                ? "border-blue-500 ring-2 ring-blue-500/25 dark:ring-blue-400/30"
                : "border-slate-200 dark:border-zinc-700"
            }`}
          >
            <div
              className={`py-3 text-center text-sm font-bold uppercase tracking-wide text-white ${
                plan.popular ? "bg-blue-600" : "bg-blue-500"
              }`}
            >
              {plan.badge}
            </div>
            <div className="bg-gradient-to-b from-sky-50/95 to-blue-50/40 px-5 pb-5 pt-6 dark:from-zinc-800/90 dark:to-zinc-800/50">
              <p className="text-center text-4xl font-extrabold tracking-tight text-blue-600 sm:text-5xl dark:text-blue-400">
                {plan.headline}
              </p>
              <p className="mt-2 text-center text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                {plan.price}
                {plan.priceNote ? (
                  <span className="text-base font-semibold text-zinc-600 dark:text-zinc-400">
                    {" "}
                    {plan.priceNote}
                  </span>
                ) : null}
              </p>
              <ul className="mt-6 space-y-3 border-b border-slate-200/80 pb-6 dark:border-zinc-600/80">
                {plan.topFeatures.map((f) => (
                  <li
                    key={f.text}
                    className="flex gap-3 text-sm leading-snug text-zinc-700 dark:text-zinc-300"
                  >
                    <span className="shrink-0 text-lg leading-none text-zinc-800 dark:text-zinc-200">
                      {f.icon}
                    </span>
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
              <ul className="flex-1 space-y-2.5">
                {plan.bottomFeatures.map((line) => (
                  <li
                    key={line}
                    className="flex gap-2.5 text-sm text-zinc-600 dark:text-zinc-400"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-800 dark:bg-zinc-400"
                      aria-hidden
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={plan.viewHref}
                  className="inline-flex flex-1 items-center justify-center rounded-full border-2 border-zinc-800 bg-white py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 dark:border-zinc-500 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-700"
                >
                  View details
                </Link>
                <Link
                  href={plan.buyHref}
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-zinc-900 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-blue-600 dark:hover:bg-blue-500"
                >
                  Get started
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
