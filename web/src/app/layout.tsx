import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AYTN Services — All Your Telecommunication Needs",
    template: "%s | AYTN Services",
  },
  description:
    "NBN and business internet, phone numbers, domains, hosting, and IT services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      {/* suppressHydrationWarning: browser extensions (e.g. cz-shortcut-listen) mutate <body> before hydrate */}
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50"
      >
        <SiteHeader />
        <div className="flex flex-1 flex-col bg-white dark:bg-zinc-950">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
