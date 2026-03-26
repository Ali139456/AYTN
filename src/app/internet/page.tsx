import type { Metadata } from "next";
import { Reveal } from "@/components/motion/reveal";
import { AddressCheckCard } from "@/components/services/AddressCheckCard";
import { FeatureBand } from "@/components/services/FeatureBand";
import { PricingTrio } from "@/components/services/PricingTrio";
import { InternetServiceHero } from "@/components/services/ServiceHero";
import {
  InternetHeroVisual,
  TrustStripDefault,
} from "@/components/services/ServiceVisuals";

export const metadata: Metadata = {
  title: "Internet & NBN",
  description:
    "nbn® and business internet for Australia — check your address, compare plans in AUD, unlimited data options.",
};

const plans = [
  {
    badge: "Smart choice",
    headline: "25 / 5",
    price: "$74.90",
    priceNote: "/mth",
    topFeatures: [
      { icon: "✈", text: "Typical evening speed suitable for browsing & email" },
      { icon: "◉", text: "Unlimited data on selected plans*" },
      { icon: "🔓", text: "No lock-in contract on eligible offers*" },
    ],
    bottomFeatures: [
      "Unlimited data across Australia (where included)",
      "Modem optional — BYO or rent",
      "Add VoIP & local numbers from our phone hub",
      "Australian support team",
    ],
    viewHref: "/internet#plans",
    buyHref: "/internet#checkout",
  },
  {
    badge: "Most popular",
    popular: true,
    headline: "50 / 20",
    price: "$89.90",
    priceNote: "/mth",
    topFeatures: [
      { icon: "✈", text: "Great for streaming & working from home" },
      { icon: "◉", text: "Unlimited data on selected plans*" },
      { icon: "🔓", text: "No lock-in contract on eligible offers*" },
    ],
    bottomFeatures: [
      "Typical busy period speeds published per plan",
      "Wi‑Fi 6 hardware available",
      "Static IP options for business",
      "nbn® fault escalation support",
    ],
    viewHref: "/internet#plans",
    buyHref: "/internet#checkout",
  },
  {
    badge: "Power user",
    headline: "100 / 20",
    price: "$109.90",
    priceNote: "/mth",
    topFeatures: [
      { icon: "✈", text: "Heavy downloads, 4K, and large households" },
      { icon: "◉", text: "Unlimited data on selected plans*" },
      { icon: "🔓", text: "No lock-in contract on eligible offers*" },
    ],
    bottomFeatures: [
      "Highest tier your address can support",
      "Priority provisioning where available",
      "Bundle with Microsoft 365 via IT services",
      "Same address check as Aussie retail ISPs",
    ],
    viewHref: "/internet#plans",
    buyHref: "/internet#checkout",
  },
] as const;

function IconWifi() {
  return (
    <svg className="mx-auto h-14 w-14" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="44" r="4" fill="currentColor" />
      <path
        d="M12 28c8-8 32-8 40 0M18 34c6-6 22-6 28 0M24 40c4-4 12-4 16 0"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconHome() {
  return (
    <svg className="mx-auto h-14 w-14" viewBox="0 0 64 64" fill="none">
      <path
        d="M12 28L32 12l20 16v28H12V28z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M24 40h16v16H24z" fill="currentColor" opacity=".25" />
    </svg>
  );
}

function IconSpeed() {
  return (
    <svg className="mx-auto h-14 w-14" viewBox="0 0 64 64" fill="none">
      <rect
        x="18"
        y="12"
        width="28"
        height="40"
        rx="4"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M28 22h12M28 30h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M32 38l4 8h-8l4-8z"
        fill="#2563eb"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}

function IconLock() {
  return (
    <svg className="mx-auto h-14 w-14" viewBox="0 0 64 64" fill="none">
      <rect
        x="16"
        y="26"
        width="32"
        height="26"
        rx="3"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M22 26V18a10 10 0 0120 0v8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function InternetPage() {
  return (
    <div className="bg-zinc-50 pb-20 dark:bg-zinc-950">
      <InternetServiceHero
        eyebrow="Connect with confidence"
        title="Australia's address-first"
        titleHighlight="nbn® & business internet"
        description="We check your line before you buy — home or business, in AUD, with plans matched to what's actually available at your premises. The same journey customers expect from leading Aussie ISPs."
        primaryCta={{ href: "#address-check", label: "Check my address" }}
        secondaryCta={{ href: "/phone", label: "Add a phone number" }}
        visual={<InternetHeroVisual />}
        trustStrip={<TrustStripDefault />}
      />

      <div className="mx-auto max-w-6xl space-y-10 px-4 pt-10">
        <Reveal>
          <div id="address-check">
            <AddressCheckCard />
          </div>
        </Reveal>

        <div id="plans">
          <PricingTrio
            sectionTitle="Plans built for Australian homes & offices"
            sectionSubtitle="Illustrative pricing in Australian dollars — final speeds and monthly charges depend on your address and wholesale agreement."
            plans={plans}
          />
        </div>

        <FeatureBand
          headline="Enjoy straightforward nbn® shopping with local support"
          subheadline="Turbocharged where the network allows, wallet-friendly where it matters — AYTN keeps your connectivity aligned with how Australians actually buy internet."
          features={[
            {
              title: "Address truth first",
              body: "No generic catalogue — only plans your line can support.",
              icon: <IconHome />,
            },
            {
              title: "Speed when you need it",
              body: "Scale from essential to high-speed tiers as your household or team grows.",
              icon: <IconSpeed />,
            },
            {
              title: "Unbeatable clarity",
              body: "AUD pricing, typical evening speeds, and inclusions spelled out upfront.",
              icon: <IconWifi />,
            },
            {
              title: "Flexible contracts",
              body: "Choose offers with no lock-in where available — stay because it works.",
              icon: <IconLock />,
            },
          ]}
        />
      </div>
    </div>
  );
}
