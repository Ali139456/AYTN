import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { FeatureBand } from "@/components/services/FeatureBand";
import { PricingTrio } from "@/components/services/PricingTrio";
import { PhoneServiceHero } from "@/components/services/ServiceHero";
import {
  PhoneHeroVisual,
  TrustStripDefault,
} from "@/components/services/ServiceVisuals";

export const metadata: Metadata = {
  title: "Phone numbers",
  description:
    "Australian VoIP & local numbers by state and area — plans in AUD, instant setup details.",
};

const plans = [
  {
    badge: "Starter",
    headline: "1 line",
    price: "$14.90",
    priceNote: "/mth",
    topFeatures: [
      { icon: "📍", text: "Pick state + local calling area" },
      { icon: "📱", text: "QR & email setup pack included" },
      { icon: "🔓", text: "No lock-in on month-to-month*" },
    ],
    bottomFeatures: [
      "Bring your own SIP handset or softphone",
      "Port-in available as a separate flow",
      "Unlimited AU landline & mobile on selected packs*",
      "Powered by Australian numbering rules",
    ],
    viewHref: "/phone#plans",
    buyHref: "/phone#order",
  },
  {
    badge: "Most popular",
    popular: true,
    headline: "5 lines",
    price: "$59.90",
    priceNote: "/mth",
    topFeatures: [
      { icon: "📍", text: "Mix states & areas for your team" },
      { icon: "📱", text: "Centralised provisioning portal" },
      { icon: "🔓", text: "Scale seats up or down" },
    ],
    bottomFeatures: [
      "Hunt groups & basic IVR options",
      "Voicemail to email",
      "Integrate with nbn® voice from our internet hub",
      "Priority email support",
    ],
    viewHref: "/phone#plans",
    buyHref: "/phone#order",
  },
  {
    badge: "Call centre",
    headline: "20 lines",
    price: "$189.90",
    priceNote: "/mth",
    topFeatures: [
      { icon: "📍", text: "Geographic presence nationwide" },
      { icon: "📱", text: "Dedicated onboarding manager" },
      { icon: "🔓", text: "Custom contract & SLA options" },
    ],
    bottomFeatures: [
      "SIP trunking for existing PBX",
      "Compliance-friendly call recording*",
      "CRM integration options for larger teams",
      "Single bill with data & domains",
    ],
    viewHref: "/phone#plans",
    buyHref: "/phone#order",
  },
] as const;

function IconMap() {
  return (
    <svg className="mx-auto h-14 w-14" viewBox="0 0 64 64" fill="none">
      <path
        d="M32 10c-6 0-11 5-11 11 0 8 11 25 11 25s11-17 11-25c0-6-5-11-11-11z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="21" r="3" fill="#7c3aed" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg className="mx-auto h-14 w-14" viewBox="0 0 64 64" fill="none">
      <path
        d="M34 12L18 36h14l-4 16 20-28H36l-2-12z"
        fill="currentColor"
        opacity=".2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconValue() {
  return (
    <svg className="mx-auto h-14 w-14" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M28 22h10c4 0 6 2 6 5 0 3-2 5-6 5H28M28 32h12c4 0 6 2 6 5 0 3-2 5-6 5H28M32 18v28"
        stroke="#7c3aed"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconFreedom() {
  return (
    <svg className="mx-auto h-14 w-14" viewBox="0 0 64 64" fill="none">
      <path
        d="M22 30V20a10 10 0 0110-10 10 10 0 0110 10v10"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <rect
        x="16"
        y="30"
        width="32"
        height="22"
        rx="3"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </svg>
  );
}

export default function PhonePage() {
  return (
    <div className="bg-zinc-50 pb-20 dark:bg-zinc-950">
      <PhoneServiceHero
        eyebrow="Save with clarity"
        title="Australia's local-number"
        titleHighlight="VoIP & geographic DIDs"
        description="Choose your state, drill into local areas, and reserve numbers from live inventory — pricing in AUD, setup packs with QR codes, built for homes and SMBs."
        primaryCta={{ href: "#plans", label: "Browse numbers" }}
        secondaryCta={{ href: "/internet", label: "Bundle with nbn®" }}
        visual={<PhoneHeroVisual />}
        trustStrip={<TrustStripDefault />}
      />

      <div className="mx-auto max-w-6xl space-y-10 px-4 pt-10">
        <Reveal>
        <section
          id="order"
          className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg dark:border-zinc-700 dark:bg-zinc-900 sm:p-10"
        >
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            How ordering works
          </h2>
          <ol className="mx-auto mt-6 max-w-2xl space-y-3 text-left text-sm text-zinc-600 dark:text-zinc-400">
            <li>
              <strong className="text-zinc-900 dark:text-zinc-100">1.</strong>{" "}
              Select state (NSW, VIC, QLD, WA, SA, TAS, ACT, NT).
            </li>
            <li>
              <strong className="text-zinc-900 dark:text-zinc-100">2.</strong>{" "}
              Narrow by local prefix / region so callers see a familiar number.
            </li>
            <li>
              <strong className="text-zinc-900 dark:text-zinc-100">3.</strong>{" "}
              Checkout — receive QR, PDF, and SIP details by email.
            </li>
          </ol>
          <p className="mt-6 text-xs text-zinc-500 dark:text-zinc-500">
            No internet required for voice-only orders. Pair with{" "}
            <Link href="/internet" className="font-medium text-blue-600 underline dark:text-blue-400">
              Internet &amp; NBN
            </Link>{" "}
            when you want one bill.
          </p>
        </section>
        </Reveal>

        <div id="plans">
          <PricingTrio
            sectionTitle="Voice packs priced for Australian businesses"
            sectionSubtitle="Monthly fees in AUD (incl. GST where applicable). Inclusions vary by plan."
            plans={plans}
          />
        </div>

        <FeatureBand
          headline="Keep your brand local while we handle the tech"
          subheadline="Geographic numbers, instant provisioning packs, and support that understands Australian dialling — inspired by how specialist VoIP retailers win trust."
          features={[
            {
              title: "Keep your presence",
              body: "Numbers tied to state & community — not random offshore DIDs.",
              icon: <IconMap />,
            },
            {
              title: "Lightning-fast issue",
              body: "Automated setup assets so handsets register without drama.",
              icon: <IconBolt />,
            },
            {
              title: "Unbeatable bundles",
              body: "Layer voice on nbn®, domains, and Microsoft 365 from one partner.",
              icon: <IconValue />,
            },
            {
              title: "No lock-in options",
              body: "Month-to-month where offered — stay because the service earns it.",
              icon: <IconFreedom />,
            },
          ]}
        />

      </div>
    </div>
  );
}
