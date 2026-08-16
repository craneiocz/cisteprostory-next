import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cisteprostory.eu"),
  title: "Čisté prostory a validace čistých prostor | cisteprostory.eu",
  description:
    "Realizace čistých prostorů, validace čistých prostor, vzduchotechniky, HEPA filtrů H13/H14 a měření dle ISO 14644 a EU GMP Annex 1.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "Čisté prostory a validace čistých prostor | cisteprostory.eu",
    description:
      "Realizace čistých prostorů, validace čistých prostor, vzduchotechniky, HEPA filtrů H13/H14 a měření dle ISO 14644 a EU GMP Annex 1.",
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
    title: "Čisté prostory a validace čistých prostor",
    description:
      "Realizace čistých prostorů, validace čistých prostor, vzduchotechniky a HEPA filtrů H13/H14.",
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
    "Realizace čistých prostorů, laboratorní boxy, validace čistých prostor dle ISO 14644 a EU GMP, HEPA filtry, vzduchotechnika a servis po celé ČR.",
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
