import Link from "next/link";
import type { Metadata } from "next";
import { HomeMarketHighlightStrip } from "@/components/market-style-panels";

export const metadata: Metadata = {
  description:
    "Check NBN availability, choose plans, get phone numbers, domains, hosting, and business IT — all in one place.",
};

const services = [
  {
    href: "/internet",
    title: "Internet & NBN",
    description:
      "Enter your address and see what’s available — NBN, fibre, and more — with plans matched to your location.",
    icon: SignalIcon,
  },
  {
    href: "/phone",
    title: "Phone numbers",
    description:
      "Pick a local number by state and area. Get QR codes and setup details straight to your inbox.",
    icon: PhoneIcon,
  },
  {
    href: "/domains",
    title: "Domains & hosting",
    description:
      "Search, register, and manage domains with hosting that fits small business and growing teams.",
    icon: GlobeIcon,
  },
  {
    href: "/it-services",
    title: "IT & Microsoft 365",
    description:
      "Business email, Microsoft 365, and hands-on IT help — built for Australian SMBs.",
    icon: CloudIcon,
  },
  {
    href: "/outages",
    title: "Network status",
    description:
      "See current outages and maintenance in one clear view — no guesswork when something’s down.",
    icon: ActivityIcon,
  },
] as const;

const steps = [
  {
    step: "01",
    title: "Check your address",
    body: "We look up what technology and plans are available at your premises — fast and accurate.",
  },
  {
    step: "02",
    title: "Choose plan & options",
    body: "Compare speeds and inclusions, add a modem if you need one, and line up add-ons like VoIP.",
  },
  {
    step: "03",
    title: "Connect & go live",
    body: "Order confirmation, provisioning details, and support so you’re online with confidence.",
  },
] as const;

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <HowItWorksSection />
      <BusinessSection />
      <HomeMarketHighlightStrip />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-zinc-200/80 bg-zinc-50 dark:border-zinc-800/80 dark:bg-zinc-950">
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

      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-14 pt-12 sm:gap-10 sm:pb-20 sm:pt-16 md:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-20">
        <div className="min-w-0">
          <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase leading-tight tracking-wider text-blue-700 sm:px-3 sm:text-xs dark:text-blue-300">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
            <span className="truncate sm:whitespace-normal">AYTN Services Pty Ltd</span>
          </p>
          <h1 className="mt-5 text-[1.65rem] font-semibold leading-[1.15] tracking-tight text-zinc-950 sm:mt-6 sm:text-4xl sm:leading-[1.1] md:text-5xl lg:text-6xl dark:text-white">
            All your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-400">
              telecommunication
            </span>{" "}
            needs, one place.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600 sm:mt-6 sm:text-lg dark:text-zinc-400">
            From NBN availability and plans to phone numbers, domains, hosting,
            and business IT — we help homes and Australian businesses get
            connected without the runaround.
          </p>
          <div className="mt-8 flex max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/internet"
              className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:w-auto sm:px-6"
            >
              Check address &amp; plans
            </Link>
            <Link
              href="/phone"
              className="inline-flex w-full items-center justify-center rounded-xl border border-zinc-300 bg-white/80 px-5 py-3.5 text-sm font-semibold text-zinc-900 backdrop-blur transition-colors duration-200 hover:border-zinc-400 hover:bg-white/80 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-100 dark:hover:border-zinc-500 dark:hover:bg-zinc-900/80 sm:w-auto sm:px-6"
            >
              Browse phone numbers
            </Link>
          </div>
          <ul className="mt-10 flex flex-col gap-2 text-xs text-zinc-500 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3 sm:text-sm dark:text-zinc-500">
            <li className="flex items-center gap-2">
              <CheckMini />
              Location-based plan matching
            </li>
            <li className="flex items-center gap-2">
              <CheckMini />
              VoIP &amp; local numbers
            </li>
            <li className="flex items-center gap-2">
              <CheckMini />
              Domains, hosting &amp; M365
            </li>
          </ul>
        </div>

        <div className="relative mt-2 min-h-[260px] w-full min-w-0 sm:min-h-[300px] lg:mt-0 lg:min-h-[420px]">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-600/10 via-zinc-100/80 to-cyan-500/10 p-px sm:rounded-3xl dark:from-blue-500/10 dark:via-zinc-900/80 dark:to-cyan-500/10">
            <div className="h-full rounded-[20px] bg-white/90 p-5 shadow-2xl shadow-zinc-900/5 backdrop-blur sm:rounded-[23px] sm:p-8 dark:bg-zinc-900/90 dark:shadow-black/40">
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                What you can do here
              </p>
              <ul className="mt-6 space-y-5">
                {[
                  "See what internet types exist at your address",
                  "Compare plans and modem options side by side",
                  "Reserve numbers by state & area — QR & setup emailed to you",
                  "Register domains and pair with hosting",
                  "Track outages on a simple status page",
                ].map((line) => (
                  <li
                    key={line}
                    className="flex gap-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400">
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-zinc-200/80 bg-zinc-50/80 p-4 dark:border-zinc-700/80 dark:bg-zinc-950/50">
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  Prefer everything in one journey? Start with your address —
                  we’ll guide you through internet, optional phone, and add-ons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  const items = [
    "Built for Australian homes & SMBs",
    "Clear availability before you buy",
    "Status & outages in one view",
  ] as const;
  return (
    <section className="border-b border-zinc-200 bg-white py-8 dark:border-zinc-800 dark:bg-zinc-950 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-6 px-4 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-8">
        {items.map((text) => (
          <p
            key={text}
            className="text-center text-sm font-medium text-zinc-600 dark:text-zinc-400"
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="border-b border-zinc-200 bg-zinc-50 py-14 dark:border-zinc-800 dark:bg-zinc-950/50 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl md:text-4xl dark:text-white">
            Everything you need to stay connected
          </h2>
          <p className="mt-3 text-base text-zinc-600 sm:mt-4 sm:text-lg dark:text-zinc-400">
            Pick a service to get started — each area is designed to work on its
            own or as part of a full connectivity stack.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {services.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-blue-500/30 hover:shadow-md hover:shadow-blue-500/5 dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-blue-400/25"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 transition group-hover:bg-blue-500/15 dark:text-blue-400">
                  <item.icon />
                </span>
                <span className="mt-4 text-lg font-semibold text-zinc-950 dark:text-white">
                  {item.title}
                </span>
                <span className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </span>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Learn more
                  <svg
                    className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="border-b border-zinc-200 bg-white py-14 dark:border-zinc-800 dark:bg-zinc-950 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl md:text-4xl dark:text-white">
            From address to online — simplified
          </h2>
          <p className="mt-3 text-base text-zinc-600 sm:mt-4 sm:text-lg dark:text-zinc-400">
            Our core flow mirrors what you’d expect from leading Aussie
            providers: know what’s available, then choose what fits.
          </p>
        </div>
        <ol className="mt-10 grid gap-6 sm:mt-14 sm:gap-8 lg:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.step}
              className="relative rounded-2xl border border-zinc-200 bg-zinc-50/80 p-6 dark:border-zinc-800 dark:bg-zinc-900/40 sm:p-8"
            >
              <span className="text-4xl font-bold tabular-nums text-blue-600/30 dark:text-blue-400/30">
                {s.step}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-zinc-950 dark:text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function BusinessSection() {
  return (
    <section className="border-b border-zinc-200 bg-zinc-50 py-14 dark:border-zinc-800 dark:bg-zinc-950/50 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="min-w-0">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950 sm:text-3xl md:text-4xl dark:text-white">
            Built for businesses that outgrow DIY
          </h2>
          <p className="mt-3 text-base text-zinc-600 sm:mt-4 sm:text-lg dark:text-zinc-400">
            When spreadsheets and ad-hoc providers stop scaling, you need a
            single partner for connectivity, voice, and cloud basics — without
            enterprise complexity or pricing.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Microsoft 365 mailboxes and identity-ready setups",
              "Domains and hosting aligned with your brand",
              "Internet and VoIP from one relationship",
              "Room to add services as you grow",
            ].map((line) => (
              <li
                key={line}
                className="flex gap-3 text-zinc-700 dark:text-zinc-300"
              >
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400">
                  <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                {line}
              </li>
            ))}
          </ul>
          <Link
            href="/it-services"
            className="mt-10 inline-flex items-center font-semibold text-blue-600 hover:text-blue-500 dark:text-blue-400"
          >
            Explore IT &amp; email services
            <svg
              className="ml-1 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 p-8 shadow-2xl shadow-blue-900/20 dark:shadow-black/50">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
              <div>
                <p className="text-sm font-medium text-white/90">
                  Your stack, simplified
                </p>
                <p className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                  One partner for connectivity &amp; cloud foundations.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["NBN & fibre", "VoIP numbers", "Domains", "M365"].map(
                  (label) => (
                    <div
                      key={label}
                      className="rounded-xl bg-white/15 px-3 py-2 text-center text-sm font-medium text-white"
                    >
                      {label}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CheckMini() {
  return (
    <svg
      className="h-4 w-4 shrink-0 text-emerald-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function SignalIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}
