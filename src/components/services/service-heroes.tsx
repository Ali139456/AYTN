import Link from "next/link";
import type { ReactNode } from "react";

export type ServiceHeroContent = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  primaryCta: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  visual: ReactNode;
  trustStrip?: ReactNode;
};

const HERO_GRID =
  "mx-auto grid min-h-[480px] w-full max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 sm:min-h-[520px] sm:gap-12 sm:py-20 lg:min-h-[560px] lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:py-24";

const HERO_ACCENT_LINE = {
  internet: "border-blue-600 dark:border-blue-400",
  phone: "border-violet-600 dark:border-violet-400",
  domains: "border-emerald-600 dark:border-emerald-400",
  it: "border-sky-600 dark:border-sky-400",
  outages: "border-cyan-500 dark:border-cyan-400",
} as const;

function heroCopyColumn(theme: keyof typeof HERO_ACCENT_LINE) {
  return `border-l-4 pl-5 text-left sm:pl-7 ${HERO_ACCENT_LINE[theme]}`;
}

const HERO_TITLE =
  "mt-5 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl sm:leading-[1.15] lg:text-[2.75rem] lg:leading-[1.1] dark:text-white";

const HERO_DESCRIPTION =
  "mt-5 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400";

const HERO_ACTIONS = "mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4";

const HERO_TRUST = "mt-10";

const HERO_VISUAL_COL =
  "relative flex min-h-[260px] w-full items-center justify-center lg:min-h-[420px]";

function StandardVisualCard({
  frameClass,
  children,
}: {
  frameClass: string;
  children: ReactNode;
}) {
  return (
    <div className={`absolute inset-0 rounded-3xl p-px ${frameClass}`}>
      <div className="flex h-full min-h-[240px] items-center justify-center rounded-[23px] bg-white/90 p-6 shadow-2xl shadow-zinc-900/5 backdrop-blur dark:bg-zinc-900/90 dark:shadow-black/40 sm:p-8 lg:min-h-[400px]">
        {children}
      </div>
    </div>
  );
}

/** Split hero: blue/cyan brand; text left / visual right. */
export function InternetServiceHero(props: ServiceHeroContent) {
  const { eyebrow, title, titleHighlight, description, primaryCta, secondaryCta, visual, trustStrip } =
    props;
  return (
    <section className="relative isolate w-full overflow-hidden border-b border-zinc-200/80 bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.22),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(59,130,246,0.15),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl dark:bg-blue-500/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-cyan-400/15 blur-3xl dark:bg-cyan-500/10"
      />

      <div className={HERO_GRID}>
        <div className={heroCopyColumn("internet")}>
          <p className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-300">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
            {eyebrow}
          </p>
          <h1 className={HERO_TITLE}>
            {title}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
              {titleHighlight}
            </span>
          </h1>
          <p className={HERO_DESCRIPTION}>{description}</p>
          <div className={HERO_ACTIONS}>
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {primaryCta.label}
            </Link>
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-zinc-900 backdrop-blur transition-colors duration-200 hover:border-zinc-400 hover:bg-white dark:border-zinc-600 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:border-zinc-500 dark:hover:bg-zinc-900/80"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
          {trustStrip ? <div className={HERO_TRUST}>{trustStrip}</div> : null}
        </div>

        <div className={HERO_VISUAL_COL}>
          <StandardVisualCard frameClass="bg-gradient-to-br from-blue-600/10 via-zinc-100/80 to-cyan-500/10 dark:from-blue-500/10 dark:via-zinc-900/80 dark:to-cyan-500/10">
            {visual}
          </StandardVisualCard>
        </div>
      </div>
    </section>
  );
}

/** Violet accents; same grid + metrics as other services (text left, visual right). */
export function PhoneServiceHero(props: ServiceHeroContent) {
  const { eyebrow, title, titleHighlight, description, primaryCta, secondaryCta, visual, trustStrip } =
    props;
  return (
    <section className="relative isolate w-full overflow-hidden border-b border-violet-200/60 bg-gradient-to-b from-violet-50/90 via-white to-fuchsia-50/50 dark:border-violet-900/40 dark:from-violet-950/40 dark:via-zinc-950 dark:to-fuchsia-950/20">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 -z-10 h-[420px] w-[420px] translate-x-1/4 -translate-y-1/4 rounded-full bg-violet-400/20 blur-3xl dark:bg-violet-600/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-72 w-72 -translate-x-1/3 translate-y-1/3 rounded-full bg-fuchsia-400/15 blur-3xl dark:bg-fuchsia-600/10"
      />

      <div className={HERO_GRID}>
        <div className={heroCopyColumn("phone")}>
          <p className="inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-800 dark:text-violet-300">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
            {eyebrow}
          </p>
          <h1 className={HERO_TITLE}>
            <span className="block">{title}</span>
            <span className="mt-1 block bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-fuchsia-400">
              {titleHighlight}
            </span>
          </h1>
          <p className={HERO_DESCRIPTION}>{description}</p>
          <div className={HERO_ACTIONS}>
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition hover:bg-violet-500"
            >
              {primaryCta.label}
            </Link>
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-xl border border-violet-300 bg-white px-6 py-3.5 text-sm font-semibold text-violet-900 transition hover:border-violet-400 dark:border-violet-700 dark:bg-zinc-900/60 dark:text-violet-100 dark:hover:border-violet-500"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
          {trustStrip ? <div className={HERO_TRUST}>{trustStrip}</div> : null}
        </div>

        <div className={HERO_VISUAL_COL}>
          <StandardVisualCard frameClass="bg-gradient-to-br from-violet-500/15 via-zinc-100/80 to-fuchsia-500/15 dark:from-violet-500/15 dark:via-zinc-900/80 dark:to-fuchsia-500/10">
            {visual}
          </StandardVisualCard>
        </div>
      </div>
    </section>
  );
}

/** Emerald accents; same grid + metrics. */
export function DomainsServiceHero(props: ServiceHeroContent) {
  const { eyebrow, title, titleHighlight, description, primaryCta, secondaryCta, visual, trustStrip } =
    props;
  return (
    <section className="relative isolate w-full overflow-hidden border-b border-zinc-200/80 bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_20%_-10%,rgba(16,185,129,0.18),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_20%_-10%,rgba(16,185,129,0.12),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 top-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl dark:bg-emerald-500/10"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-72 w-72 rounded-full bg-teal-400/15 blur-3xl dark:bg-teal-500/10"
      />

      <div className={HERO_GRID}>
        <div className={heroCopyColumn("domains")}>
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            {eyebrow}
          </p>
          <h1 className={HERO_TITLE}>
            {title}{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400">
              {titleHighlight}
            </span>
          </h1>
          <p className={HERO_DESCRIPTION}>{description}</p>
          <div className={HERO_ACTIONS}>
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              {primaryCta.label}
            </Link>
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white/80 px-6 py-3.5 text-sm font-semibold text-zinc-900 backdrop-blur transition-colors duration-200 hover:border-zinc-400 hover:bg-white dark:border-zinc-600 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:border-zinc-500 dark:hover:bg-zinc-900/80"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
          {trustStrip ? <div className={HERO_TRUST}>{trustStrip}</div> : null}
        </div>

        <div className={HERO_VISUAL_COL}>
          <StandardVisualCard frameClass="bg-gradient-to-br from-emerald-600/15 via-zinc-100/80 to-teal-500/15 dark:from-emerald-500/15 dark:via-zinc-900/80 dark:to-teal-500/10">
            {visual}
          </StandardVisualCard>
        </div>
      </div>
    </section>
  );
}

/** Sky / indigo accents; chips + same grid (left accent applies to full copy column). */
export function ItServiceHero(props: ServiceHeroContent) {
  const { eyebrow, title, titleHighlight, description, primaryCta, secondaryCta, visual, trustStrip } =
    props;
  return (
    <section className="relative isolate w-full overflow-hidden border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(125deg,rgba(239,246,255,0.9)_0%,transparent_42%,rgba(224,242,254,0.35)_100%)] dark:bg-[linear-gradient(125deg,rgba(30,58,138,0.15)_0%,transparent_45%,rgba(14,116,144,0.12)_100%)]"
      />
      <div className={HERO_GRID}>
        <div className={heroCopyColumn("it")}>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-800 dark:text-blue-200">
              {eyebrow}
            </span>
            <span className="rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-800 dark:text-sky-200">
              Exchange
            </span>
            <span className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-800 dark:text-indigo-200">
              Teams
            </span>
            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-800 dark:text-cyan-200">
              Backup
            </span>
          </div>
          <h1 className={HERO_TITLE}>
            {title}
            <span className="block bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent dark:from-sky-400 dark:to-indigo-400">
              {titleHighlight}
            </span>
          </h1>
          <p className={HERO_DESCRIPTION}>{description}</p>
          <div className={HERO_ACTIONS}>
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
            >
              {primaryCta.label}
            </Link>
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-xl border-2 border-dashed border-blue-300 bg-white px-6 py-3.5 text-sm font-semibold text-blue-900 transition hover:border-blue-400 dark:border-blue-700 dark:bg-zinc-900/60 dark:text-blue-100"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
          {trustStrip ? <div className={HERO_TRUST}>{trustStrip}</div> : null}
        </div>

        <div className={HERO_VISUAL_COL}>
          <StandardVisualCard frameClass="bg-gradient-to-br from-sky-500/15 via-zinc-100/80 to-indigo-500/15 dark:from-sky-500/15 dark:via-zinc-900/80 dark:to-indigo-500/10">
            {visual}
          </StandardVisualCard>
        </div>
      </div>
    </section>
  );
}

/** Network status: same grid, type scale, and accent line as other services. */
export function OutagesServiceHero(props: ServiceHeroContent) {
  const { eyebrow, title, titleHighlight, description, primaryCta, secondaryCta, visual, trustStrip } =
    props;
  return (
    <section className="relative isolate w-full overflow-hidden border-b border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-950">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-zinc-200/40 via-transparent to-zinc-200/30 dark:from-zinc-800/40 dark:via-transparent dark:to-zinc-800/30"
      />
      <div className={HERO_GRID}>
        <div className={heroCopyColumn("outages")}>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-800 dark:text-blue-200">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
            </span>
            {eyebrow}
          </div>
          <h1 className={HERO_TITLE}>
            {title}{" "}
            <span className="text-blue-600 dark:text-blue-400">{titleHighlight}</span>
          </h1>
          <p className={HERO_DESCRIPTION}>{description}</p>
          <div className={HERO_ACTIONS}>
            <Link
              href={primaryCta.href}
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
            >
              {primaryCta.label}
            </Link>
            {secondaryCta ? (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800"
              >
                {secondaryCta.label}
              </Link>
            ) : null}
          </div>
          {trustStrip ? <div className={HERO_TRUST}>{trustStrip}</div> : null}
        </div>

        <div className={HERO_VISUAL_COL}>
          <div className="absolute inset-0 rounded-3xl border border-zinc-200 bg-zinc-50/80 p-px dark:border-zinc-600 dark:bg-zinc-800/50">
            <div className="flex h-full min-h-[240px] items-center justify-center rounded-[23px] bg-white p-6 shadow-lg dark:bg-zinc-900 sm:p-8 lg:min-h-[400px]">
              {visual}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
