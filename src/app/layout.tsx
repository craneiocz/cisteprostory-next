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
  openGraph: {
    title: "Čisté prostory a laboratorní boxy – validace, vzduchotechnika | cisteprostory.eu",
    description:
      "Realizace čistých prostorů, laboratorní boxy, validace dle ISO 14644 a EU GMP. HEPA filtry, laminární boxy a servis po celé ČR.",
    type: "website",
    url: "https://cisteprostory.eu",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
