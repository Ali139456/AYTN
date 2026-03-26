import type { Metadata } from "next";
import { FeatureBand } from "@/components/services/FeatureBand";
import { PricingTrio } from "@/components/services/PricingTrio";
import { ItServiceHero } from "@/components/services/ServiceHero";
import {
  ItHeroVisual,
  TrustStripDefault,
} from "@/components/services/ServiceVisuals";

export const metadata: Metadata = {
  title: "IT & email services",
  description:
    "Microsoft 365, email migration, and IT support for Australian SMBs — priced in AUD.",
};

const plans = [
  {
    badge: "Email essentials",
    headline: "M365",
    price: "$12.90",
    priceNote: "/user/mth",
    topFeatures: [
      { icon: "✉", text: "Exchange Online mailbox" },
      { icon: "🔒", text: "Baseline security defaults" },
      { icon: "🔓", text: "Month-to-month licensing*" },
    ],
    bottomFeatures: [
      "50 GB mailbox (plan dependent)",
      "Web + mobile Outlook",
      "Optional Teams chat add-on",
      "AUD billing per seat",
    ],
    viewHref: "/it-services#plans",
    buyHref: "/it-services#contact",
  },
  {
    badge: "Most popular",
    popular: true,
    headline: "Business",
    price: "$24.90",
    priceNote: "/user/mth",
    topFeatures: [
      { icon: "✉", text: "Exchange + Teams + Office apps" },
      { icon: "📁", text: "1 TB OneDrive backup" },
      { icon: "🔓", text: "Migration assist included*" },
    ],
    bottomFeatures: [
      "Shared mailboxes & aliases",
      "Intune-ready for devices*",
      "Australian migration playbooks",
      "Combine with nbn® & voice",
    ],
    viewHref: "/it-services#plans",
    buyHref: "/it-services#contact",
  },
  {
    badge: "Managed IT",
    headline: "Care",
    price: "$399",
    priceNote: "/mth",
    topFeatures: [
      { icon: "🖥", text: "Up to 25 endpoints" },
      { icon: "🛡", text: "Patching & monitoring" },
      { icon: "📞", text: "Business-hours helpdesk" },
    ],
    bottomFeatures: [
      "Onboarding & documentation",
      "Escalation path to senior engineers",
      "Discounted project rates",
      "Single pane with telco services",
    ],
    viewHref: "/it-services#plans",
    buyHref: "/it-services#contact",
  },
] as const;

function IconMail() {
  return (
    <svg className="mx-auto h-14 w-14" viewBox="0 0 64 64" fill="none">
      <rect
        x="8"
        y="16"
        width="48"
        height="32"
        rx="3"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M8 20l24 16 24-16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCloud() {
  return (
    <svg className="mx-auto h-14 w-14" viewBox="0 0 64 64" fill="none">
      <path
        d="M18 40c-4 0-8-4-8-8 0-5 4-9 9-9h2a13 13 0 0125-3 10 10 0 0110 10c0 6-5 10-11 10H18z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPeople() {
  return (
    <svg className="mx-auto h-14 w-14" viewBox="0 0 64 64" fill="none">
      <circle cx="24" cy="22" r="8" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 46c0-8 8-12 12-12s12 4 12 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="44" cy="24" r="6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function IconOne() {
  return (
    <svg className="mx-auto h-14 w-14" viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="32" r="22" stroke="currentColor" strokeWidth="2.5" />
      <path
        d="M32 18v20M32 42h.01"
        stroke="#2563eb"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ItServicesPage() {
  return (
    <div className="bg-zinc-50 pb-20 dark:bg-zinc-950">
      <ItServiceHero
        eyebrow="Built for Australian SMBs"
        title="Microsoft 365 &"
        titleHighlight="IT that keeps pace"
        description="Email, Teams, and device hygiene without enterprise bloat — priced per user in AUD, with migration help from people who also run your connectivity."
        primaryCta={{ href: "#plans", label: "Compare bundles" }}
        secondaryCta={{ href: "/internet", label: "Add business nbn®" }}
        visual={<ItHeroVisual />}
        trustStrip={<TrustStripDefault />}
      />

      <div className="mx-auto max-w-6xl px-4 pt-10">
        <section
          id="contact"
          className="mt-6 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg dark:border-zinc-700 dark:bg-zinc-900 sm:p-10"
        >
          <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Talk to a local specialist
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-sm text-zinc-600 dark:text-zinc-400">
            Tell us seat counts, existing tenants, and compliance needs — we’ll
            map Microsoft SKUs and project phases.
          </p>
          <p className="mx-auto mt-6 max-w-md text-sm text-zinc-600 dark:text-zinc-400">
            Leave your details and we&apos;ll reply with next steps and timing.
          </p>
        </section>

        <div id="plans">
          <PricingTrio
            sectionTitle="Collaboration packs (indicative AUD)"
            sectionSubtitle="Indicative AUD pricing per user or per month. Final SKUs depend on Microsoft licensing."
            plans={plans}
          />
        </div>

        <FeatureBand
          headline="Turbocharge productivity without losing the personal touch"
          subheadline="We sit next to your nbn®, voice, and domains — so IT, email, and connectivity stay aligned."
          features={[
            {
              title: "Modern workplace",
              body: "Exchange, Teams, SharePoint — deployed with Australian privacy in mind.",
              icon: <IconMail />,
            },
            {
              title: "Cloud-first backup",
              body: "OneDrive and policy-driven retention so ransomware has less room to hurt.",
              icon: <IconCloud />,
            },
            {
              title: "People who answer",
              body: "Helpdesk that understands both M365 and your router.",
              icon: <IconPeople />,
            },
            {
              title: "One partner bill",
              body: "Optional single invoice for telco + cloud + care hours.",
              icon: <IconOne />,
            },
          ]}
        />

      </div>
    </div>
  );
}
