import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  metadataBase: new URL("https://cisteprostory.eu"),
  title: "Čisté prostory a laboratorní boxy – validace, vzduchotechnika | cisteprostory.eu",
  description:
    "Realizace čistých prostorů, laboratorní boxy, validace dle ISO 14644 a EU GMP. HEPA filtry H13/H14, laminární boxy, servis vzduchotechniky po celé ČR.",
  keywords:
    "čisté prostory, laboratorní boxy, validace čistých prostorů, ISO 14644, EU GMP, HEPA filtry H13 H14, laminární boxy, vzduchotechnika, servis HEPA filtrů, měření čistoty vzduchu, izolátory cytostatika",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Čisté prostory a laboratorní boxy – validace, vzduchotechnika | cisteprostory.eu",
    description:
      "Realizace čistých prostorů, laboratorní boxy, validace dle ISO 14644 a EU GMP. HEPA filtry, laminární boxy a servis po celé ČR.",
    type: "website",
    url: "https://cisteprostory.eu",
    siteName: "Čisté prostory",
    locale: "cs_CZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "Čisté prostory a laboratorní boxy – validace, vzduchotechnika",
    description:
      "Realizace čistých prostorů, laboratorní boxy, validace dle ISO 14644 a EU GMP. HEPA filtry, laminární boxy a servis po celé ČR.",
  },
  alternates: {
    canonical: "https://cisteprostory.eu",
  },
};

export const dynamic = "error";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://cisteprostory.eu/#organization",
  name: "Čisté Prostory (BRNO CREATIVE s.r.o.)",
  alternateName: "cisteprostory.eu",
  url: "https://cisteprostory.eu",
  logo: "https://cisteprostory.eu/icon.png",
  image: "https://cisteprostory.eu/opengraph-image.png",
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
