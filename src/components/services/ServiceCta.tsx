import Link from "next/link";

export function ServiceCta({
  title,
  subtitle,
  primary,
  secondary,
}: {
  title: string;
  subtitle: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="w-full bg-black py-20 text-center sm:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">{subtitle}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={primary.href}
            className="inline-flex min-w-[160px] items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100"
          >
            {primary.label}
          </Link>
          {secondary ? (
            <Link
              href={secondary.href}
              className="inline-flex min-w-[160px] items-center justify-center rounded-xl border border-zinc-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-zinc-500 hover:bg-white/5"
            >
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
