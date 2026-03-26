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
    <section className="w-full bg-black py-14 text-center sm:py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-xl font-semibold leading-snug tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:mt-4 sm:text-base md:text-lg">
          {subtitle}
        </p>
        <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
          <Link
            href={primary.href}
            className="inline-flex w-full items-center justify-center rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-100 sm:w-auto sm:min-w-[160px] sm:px-6"
          >
            {primary.label}
          </Link>
          {secondary ? (
            <Link
              href={secondary.href}
              className="inline-flex w-full items-center justify-center rounded-xl border border-zinc-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:border-zinc-500 hover:bg-white/5 sm:w-auto sm:min-w-[160px] sm:px-6"
            >
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
