import type { ReactNode } from "react";

export type FeatureItem = {
  title: string;
  body: string;
  icon: ReactNode;
};

export function FeatureBand({
  headline,
  subheadline,
  features,
}: {
  headline: string;
  subheadline: string;
  features: readonly FeatureItem[];
}) {
  return (
    <section className="mt-12 rounded-2xl border border-zinc-200/80 bg-gradient-to-b from-sky-50/90 to-zinc-50 px-4 py-10 sm:mt-16 sm:rounded-3xl sm:px-8 sm:py-14 md:mt-20 md:px-10 md:py-16 dark:border-zinc-800 dark:from-sky-950/25 dark:to-zinc-950/50">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="text-lg font-bold italic leading-snug text-zinc-900 sm:text-xl md:text-2xl lg:text-[1.65rem] dark:text-white">
          {headline}
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-sm text-zinc-600 sm:mt-4 sm:text-base dark:text-zinc-400">
          {subheadline}
        </p>
      </div>
      <div className="mx-auto mt-8 grid max-w-6xl gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-6">
        {features.map((f) => (
          <article
            key={f.title}
            className="group flex flex-col items-center rounded-2xl border border-zinc-200/60 bg-white/80 p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-zinc-700/60 dark:bg-zinc-900/50"
          >
            <div className="mb-4 flex h-24 w-full items-center justify-center text-blue-700/90 dark:text-blue-400/90">
              {f.icon}
            </div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-blue-600 dark:text-blue-400">
              {f.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {f.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
