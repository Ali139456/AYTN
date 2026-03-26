import type { Metadata } from "next";
import { FeatureBand } from "@/components/services/FeatureBand";
import { PricingTrio } from "@/components/services/PricingTrio";
import { OutagesServiceHero } from "@/components/services/ServiceHero";
import {
  OutageHeroVisual,
  TrustStripDefault,
} from "@/components/services/ServiceVisuals";

export const metadata: Metadata = {
  title: "Network status",
  description:
    "Live network status for Australian customers — outages, maintenance, transparency.",
};

const plans = [
  {
    badge: "Public",
    headline: "Status",
    price: "$0",
    priceNote: "",
    topFeatures: [
      { icon: "📡", text: "Regional incident board" },
      { icon: "🕐", text: "Historical notices" },
      { icon: "🔓", text: "No login required" },
    ],
    bottomFeatures: [
      "RSS and JSON updates",
      "Optional embed for your website",
      "Connect your own data source",
      "Manual updates when you need them",
    ],
    viewHref: "/outages#board",
    buyHref: "/outages#board",
  },
  {
    badge: "Business",
    popular: true,
    headline: "Alerts",
    price: "$49.90",
    priceNote: "/mth",
    topFeatures: [
      { icon: "📲", text: "SMS & email subscribers" },
      { icon: "🏷", text: "Per-service filters" },
      { icon: "🔓", text: "10 included seats" },
    ],
    bottomFeatures: [
      "Webhook to Slack / Teams",
      "Maintenance calendar view",
      "SLA-friendly timestamps (AEST/AEDT)",
      "White-label subdomain option*",
    ],
    viewHref: "/outages#board",
    buyHref: "/outages#subscribe",
  },
  {
    badge: "Carrier",
    headline: "API",
    price: "$299",
    priceNote: "/mth",
    topFeatures: [
      { icon: "⚡", text: "REST + signed webhooks" },
      { icon: "🔐", text: "Per-tenant keys" },
      { icon: "📊", text: "99.9% SLA target*" },
    ],
    bottomFeatures: [
      "Bulk export for operations teams",
      "Dedicated integration support",
      "Enterprise deployment options",
      "Reporting suited to carriers and partners",
    ],
    viewHref: "/outages#board",
    buyHref: "/outages#subscribe",
  },
] as const;

function IconEye() {
  return (
    <svg className="mx-auto h-14 w-14" viewBox="0 0 64 64" fill="none">
      <path
        d="M8 32s10-14 24-14 24 14 24 14-10 14-24 14S8 32 8 32z"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg className="mx-auto h-14 w-14" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M32 20v14l10 6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBell() {
  return (
    <svg className="mx-auto h-14 w-14" viewBox="0 0 64 64" fill="none">
      <path
        d="M20 28a12 12 0 0124 0c0 10 4 12 4 12H16s4-2 4-12z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M28 46a4 4 0 008 0" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function IconPlug() {
  return (
    <svg className="mx-auto h-14 w-14" viewBox="0 0 64 64" fill="none">
      <path
        d="M20 24h8v16H20zM36 24h8v16H36zM16 40h32v8H16z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M32 48v8" stroke="#2563eb" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function OutagesPage() {
  return (
    <div className="bg-zinc-50 pb-20 dark:bg-zinc-950">
      <OutagesServiceHero
        eyebrow="Transparency customers expect"
        title="Australian network"
        titleHighlight="status & incidents"
        description="Publish what’s down, where, and when it clears — by API, spreadsheet import, or manual updates. Clear, Australian-time friendly status your customers can trust."
        primaryCta={{ href: "#board", label: "View live board" }}
        secondaryCta={{ href: "/internet", label: "Check my service" }}
        visual={<OutageHeroVisual />}
        trustStrip={<TrustStripDefault />}
      />

      <div className="mx-auto max-w-6xl px-4 pt-10">
        <section
          id="board"
          className="mt-6 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 p-6 shadow-2xl sm:p-10"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-bold text-white">Live incidents</h2>
              <p className="text-sm text-emerald-200/80">All systems operational</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-xs font-semibold text-emerald-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              Updated in real time
            </span>
          </div>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <p className="text-center text-sm text-slate-400">
              Regions, services, and ETAs appear here once your feed is connected.
            </p>
            <div className="mt-6 space-y-3">
              {["Sydney", "Melbourne", "Brisbane"].map((city) => (
                <div
                  key={city}
                  className="flex items-center justify-between rounded-xl border border-white/5 bg-black/20 px-4 py-3 text-sm"
                >
                  <span className="font-medium text-white">{city} metro</span>
                  <span className="text-emerald-400">Operational</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div id="subscribe">
          <PricingTrio
            sectionTitle="Status experiences for every audience"
            sectionSubtitle="From free public boards to paid alerting — all figures in AUD."
            plans={plans}
          />
        </div>

        <FeatureBand
          headline="Honest comms win trust when the network hiccups"
          subheadline="Give customers plain-language updates in Australian time — before they flood your support queue."
          features={[
            {
              title: "See everything",
              body: "Regional + service filters so customers aren’t left guessing.",
              icon: <IconEye />,
            },
            {
              title: "Time in AEST",
              body: "Maintenance windows shown in Australian time with calendar-friendly exports*.",
              icon: <IconClock />,
            },
            {
              title: "Proactive alerts",
              body: "SMS and Teams notifications for partners and teams.",
              icon: <IconBell />,
            },
            {
              title: "Flexible data",
              body: "File drop, API, or manual updates — use what fits your operations.",
              icon: <IconPlug />,
            },
          ]}
        />

      </div>
    </div>
  );
}
