import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { FeatureBand } from "@/components/services/FeatureBand";
import { PricingTrio } from "@/components/services/PricingTrio";
import { DomainsServiceHero } from "@/components/services/ServiceHero";
import {
  DomainHeroVisual,
  TrustStripDefault,
} from "@/components/services/ServiceVisuals";

export const metadata: Metadata = {
  title: "Domains & hosting",
  description:
    ".com.au & global domains, DNS, and hosting — Australian dollars, registrar-grade flows.",
};

const plans = [
  {
    badge: "Domain only",
    headline: ".com.au",
    price: "$19.90",
    priceNote: "/yr",
    topFeatures: [
      { icon: "🔍", text: "Real-time search & cart" },
      { icon: "🌐", text: "DNS templates included" },
      { icon: "🔓", text: "Renewal reminders" },
    ],
    bottomFeatures: [
      "Eligible .com.au policy checks (ABN/ACN where required)",
      "WHOIS privacy where supported",
      "Point to Shopify, WordPress, or custom VPS",
      "Secure checkout and renewal reminders",
    ],
    viewHref: "/domains#plans",
    buyHref: "/domains#search",
  },
  {
    badge: "Most popular",
    popular: true,
    headline: "Site + email",
    price: "$29.90",
    priceNote: "/mth",
    topFeatures: [
      { icon: "📧", text: "5 mailboxes or forwarding rules" },
      { icon: "⚡", text: "SSD hosting — AU region option*" },
      { icon: "🔓", text: "Let’s Encrypt SSL" },
    ],
    bottomFeatures: [
      "One .com.au or .com included first year*",
      "cPanel or headless DNS — your choice",
      "Staging slot for WordPress",
      "Ticket support during business hours",
    ],
    viewHref: "/domains#plans",
    buyHref: "/domains#search",
  },
  {
    badge: "Agency",
    headline: "Multi-site",
    price: "$89.90",
    priceNote: "/mth",
    topFeatures: [
      { icon: "🏢", text: "10 hosted zones & sites" },
      { icon: "📧", text: "50 mailboxes" },
      { icon: "🔓", text: "Priority DNS propagation" },
    ],
    bottomFeatures: [
      "Partner-friendly billing options",
      "API access for bulk updates",
      "Dedicated CSM for Australian partners",
      "Combine with IT & Microsoft 365",
    ],
    viewHref: "/domains#plans",
    buyHref: "/domains#search",
  },
] as const;

function IconSearch() {
  return (
    <svg className="mx-auto h-14 w-14" viewBox="0 0 64 64" fill="none">
      <circle cx="28" cy="28" r="14" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M38 38l14 14"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconShield() {
  return (
    <svg className="mx-auto h-14 w-14" viewBox="0 0 64 64" fill="none">
      <path
        d="M32 8L12 16v16c0 14 20 24 20 24s20-10 20-24V16L32 8z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M26 32l4 4 8-10"
        stroke="#059669"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconStack() {
  return (
    <svg className="mx-auto h-14 w-14" viewBox="0 0 64 64" fill="none">
      <rect
        x="12"
        y="36"
        width="40"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="16"
        y="22"
        width="32"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="20"
        y="8"
        width="24"
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconHand() {
  return (
    <svg className="mx-auto h-14 w-14" viewBox="0 0 64 64" fill="none">
      <path
        d="M20 40V24c0-2 2-4 4-4h2M26 20v-4c0-2 2-4 4-4h2M32 16v-4c0-2 2-4 4-4h2M38 12v28l6 6c2 2 2 6 0 8l-4 4"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function DomainsPage() {
  return (
    <div className="bg-zinc-50 pb-20 dark:bg-zinc-950">
      <DomainsServiceHero
        eyebrow="Own your corner of the web"
        title="Australian domains &"
        titleHighlight="hosting that just works"
        description="Search .com.au and global TLDs, manage DNS, and pair hosting with the same partner that runs your nbn® and voice — everything quoted in AUD."
        primaryCta={{ href: "#search", label: "Search domains" }}
        secondaryCta={{ href: "/it-services", label: "Add Microsoft 365" }}
        visual={<DomainHeroVisual />}
        trustStrip={<TrustStripDefault />}
      />

      <div className="mx-auto max-w-6xl space-y-10 px-4 pt-10">
        <Reveal>
        <section
          id="search"
          className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg dark:border-zinc-700 dark:bg-zinc-900 sm:p-10"
        >
          <h2 className="text-center text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Find your name
          </h2>
          <div className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
            <div className="flex-1 rounded-xl border-2 border-dashed border-emerald-200 bg-emerald-50/40 px-4 py-3 text-sm text-zinc-600 dark:border-emerald-800/50 dark:bg-emerald-950/30 dark:text-zinc-400">
              yourbrand.com.au
            </div>
            <button
              type="button"
              className="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              Search
            </button>
          </div>
        </section>
        </Reveal>

        <div id="plans">
          <PricingTrio
            sectionTitle="Domain & hosting packs in AUD"
            sectionSubtitle="Packaged in AUD (incl. GST where applicable). Mix and match to suit your business."
            plans={plans}
          />
        </div>

        <FeatureBand
          headline="Everything customers expect from a modern registrar"
          subheadline="Clear renewals, DNS that doesn’t mystify, and hosting that pairs with email — because Australian SMBs buy the whole stack."
          features={[
            {
              title: "Search that converts",
              body: "Instant availability with upsell paths for hosting and email.",
              icon: <IconSearch />,
            },
            {
              title: "DNS you can trust",
              body: "Templates for Microsoft 365, Google, and common web stacks.",
              icon: <IconShield />,
            },
            {
              title: "Stack-ready hosting",
              body: "SSD plans sized for brochure sites up to busy WooCommerce stores.",
              icon: <IconStack />,
            },
            {
              title: "Human escalation",
              body: "When something breaks, you talk to Australians who get DNS.",
              icon: <IconHand />,
            },
          ]}
        />

      </div>
    </div>
  );
}
