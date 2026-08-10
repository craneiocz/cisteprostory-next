import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cisteprostory.eu"),
  title: "Čisté prostory, vzduchotechnika a validace ISO 14644 | cisteprostory.eu",
  description:
    "Realizace čistých prostorů, vzduchotechniky, HEPA filtrů H13/H14, validace dle ISO 14644 a EU GMP Annex 1. Servis a měření po celé ČR.",
  keywords:
    "čisté prostory, vzduchotechnika, validace ISO 14644, EU GMP Annex 1, HEPA filtry H13 H14, laboratorní boxy, laminární boxy, servis HEPA filtrů, měření částic, izolátory cytostatika",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Čisté prostory, vzduchotechnika a validace ISO 14644 | cisteprostory.eu",
    description:
      "Realizace čistých prostorů, vzduchotechniky, HEPA filtrů H13/H14, validace ISO 14644 a EU GMP Annex 1. Servis a měření po celé ČR.",
    type: "website",
    url: "https://www.cisteprostory.eu",
    siteName: "Čisté prostory",
    locale: "cs_CZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Čisté prostory, vzduchotechnika a validace ISO 14644",
    description:
      "Realizace čistých prostorů, vzduchotechniky, HEPA filtrů H13/H14, validace ISO 14644 a EU GMP Annex 1.",
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
    "Realizace čistých prostorů, laboratorní boxy, validace dle ISO 14644 a EU GMP, HEPA filtry, vzduchotechnika a servis po celé ČR.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
