import type { Metadata } from "next";
import "./globals.css";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import CookieConsentProvider from "@/components/CookieConsentProvider";
import GoogleAnalyticsPageView from "@/components/GoogleAnalyticsPageView";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cisteprostory.eu"),
  title: "Čisté prostory pro ověřitelný provoz | cisteprostory.eu",
  description:
    "Návrh čistých prostor, vzduchotechniky, filtrace, měření a servis podle účelu provozu a požadované kontroly.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Čisté prostory pro ověřitelný provoz | cisteprostory.eu",
    description:
      "Návrh čistých prostor, vzduchotechniky, filtrace, měření a servis podle účelu provozu a požadované kontroly.",
    type: "website",
    url: "https://www.cisteprostory.eu",
    siteName: "Čisté prostory",
    locale: "cs_CZ",
    images: [
      {
        url: "https://www.cisteprostory.eu/opengraph-image.png",
        alt: "Čisté prostory a validace čistých prostor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Čisté prostory pro ověřitelný provoz",
    description:
      "Návrh čistých prostor, filtrace, měření a servis podle účelu provozu.",
  },
  alternates: {
    canonical: "https://www.cisteprostory.eu",
  },
};

export const dynamic = "error";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.cisteprostory.eu/#organization",
  name: "Čisté Prostory (BRNO CREATIVE s.r.o.)",
  alternateName: "cisteprostory.eu",
  url: "https://www.cisteprostory.eu",
  logo: "https://www.cisteprostory.eu/icon.png",
  image: "https://www.cisteprostory.eu/opengraph-image.png",
  description:
    "Návrh čistých prostorů, laboratorní boxy, měření podle ISO 14644, filtrace, vzduchotechnika a servis podle zadání.",
  email: "info@cisteprostory.eu",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lidická 700/19",
    postalCode: "602 00",
    addressLocality: "Brno",
    addressCountry: "CZ",
  },
  areaServed: "CZ",
  vatID: "CZ07367066",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" data-scroll-behavior="smooth">
      <body>
        <CookieConsentProvider />
        <GoogleAnalyticsPageView />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div id="cookie-consent-root" />
        <a
          href="#main-content"
          className="sr-only fixed left-4 top-4 z-[100] rounded-md bg-primary px-4 py-3 font-semibold text-primary-foreground shadow-lg focus:not-sr-only focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          Přeskočit na hlavní obsah
        </a>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <div id="main-content" tabIndex={-1} className="scroll-mt-20 outline-none">
            {children}
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
