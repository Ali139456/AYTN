"use client";

import { usePathname } from "next/navigation";
import { ServiceCta } from "@/components/services/ServiceCta";

type CtaConfig = {
  title: string;
  subtitle: string;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
};

const homeCta: CtaConfig = {
  title: "Ready to see what’s available at your place?",
  subtitle:
    "Start with an address check — then layer phone, domains, and IT as you need them. No obligation to explore what’s on offer.",
  primary: { href: "/internet", label: "Check availability" },
  secondary: { href: "/domains", label: "Search domains" },
};

const internetCta: CtaConfig = {
  title: "Ready to see your line?",
  subtitle:
    "Run an address check, compare tiers, then layer voice, domains, or Microsoft 365 from one Australian partner.",
  primary: { href: "/internet#address-check", label: "Start address check" },
  secondary: { href: "/domains", label: "Add a domain" },
};

const phoneCta: CtaConfig = {
  title: "Need numbers only?",
  subtitle:
    "Start with a pack below or talk to us about porting an existing Australian number.",
  primary: { href: "/phone#plans", label: "Compare voice packs" },
  secondary: { href: "/it-services", label: "Add Microsoft 365" },
};

const domainsCta: CtaConfig = {
  title: "Launch the full stack",
  subtitle:
    "Domain today, nbn® tomorrow, Teams next week — one relationship, one invoice option.",
  primary: { href: "/domains#search", label: "Search a domain" },
  secondary: { href: "/internet", label: "Check nbn® address" },
};

const itCta: CtaConfig = {
  title: "Ready to migrate?",
  subtitle:
    "We’ll audit mailboxes, plan cutover windows, and train your team — without surprise USD invoices.",
  primary: { href: "/it-services#contact", label: "Book a consult" },
  secondary: { href: "/domains", label: "Secure your domain" },
};

const outagesCta: CtaConfig = {
  title: "Need help while we’re green?",
  subtitle:
    "Check nbn® availability or grab a local voice pack — we’ll route you to the right team.",
  primary: { href: "/internet", label: "Internet & NBN" },
  secondary: { href: "/phone", label: "Phone numbers" },
};

function configForPath(pathname: string | null): CtaConfig {
  if (!pathname || pathname === "/") {
    return homeCta;
  }
  if (pathname.startsWith("/internet")) {
    return internetCta;
  }
  if (pathname.startsWith("/phone")) {
    return phoneCta;
  }
  if (pathname.startsWith("/domains")) {
    return domainsCta;
  }
  if (pathname.startsWith("/it-services")) {
    return itCta;
  }
  if (pathname.startsWith("/outages")) {
    return outagesCta;
  }
  return homeCta;
}

/** Renders the dark CTA band immediately above the site footer, with copy keyed to the current route. */
export function PreFooterCta() {
  const pathname = usePathname();
  const cfg = configForPath(pathname);
  return <ServiceCta {...cfg} />;
}
