import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Filter, Settings, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Čisté prostory a laboratorní boxy – validace ISO 14644 a EU GMP | cisteprostory.eu',
  description:
    'Realizace čistých prostorů tříd A–D dle EU GMP Annex 1, laboratorní boxy, laminární boxy, vzduchotechnika s HEPA H13/H14 filtry, měření, validace a servis po celé ČR.',
  keywords: 'čisté prostory, laboratorní boxy, laminární boxy, ISO 14644, EU GMP Annex 1, HEPA filtry, validace čistých prostorů, vzduchotechnika, měření částic',
  openGraph: {
    title: 'Čisté prostory a laboratorní boxy – validace ISO 14644 a EU GMP',
    description: 'Kompletní dodávky čistých prostorů, laboratorních boxů, HEPA filtrů a validace dle ISO 14644 a EU GMP.',
    type: 'website',
    url: 'https://cisteprostory.eu/ciste-prostory',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Čisté prostory a laboratorní boxy – ISO 14644',
    description: 'Realizace čistých prostorů, laboratorních boxů, HEPA filtrů a validace dle ISO 14644 a EU GMP.',
  },
};

const CisteProstory = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://cisteprostory.eu/ciste-prostory#webpage",
    "name": "Čisté prostory a laboratorní boxy",
    "url": "https://cisteprostory.eu/ciste-prostory",
    "description": "Realizace čistých prostorů tříd A–D dle EU GMP Annex 1, laboratorní boxy, laminární boxy, vzduchotechnika s HEPA H13/H14 filtry, měření, validace a servis.",
    "isPartOf": {
      "@id": "https://cisteprostory.eu#website"
    },
    "breadcrumb": {
      "@id": "https://cisteprostory.eu/ciste-prostory#breadcrumb"
    },
    "mainEntity": {
      "@type": "Service",
      "@id": "https://cisteprostory.eu/ciste-prostory#service",
      "name": "Čisté prostory a laboratorní boxy",
      "description": "Kompletní realizace čistých prostorů, laboratorních boxů, laminárních boxů s HEPA filtrací, validace dle ISO 14644 a EU GMP Annex 1.",
      "provider": {
        "@type": "Organization",
        "name": "Čisté Prostory (BRNO CREATIVE s.r.o.)",
        "url": "https://cisteprostory.eu",
        "areaServed": "CZ"
      },
      "hasOfferingType": "https://schema.org/Service",
      "potentialAction": {
        "@type": "ContactAction",
        "target": "https://cisteprostory.eu/#contact"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://cisteprostory.eu/ciste-prostory#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Domů",
        "item": "https://cisteprostory.eu"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Čisté prostory",
        "item": "https://cisteprostory.eu/ciste-prostory"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white py-16 lg:py-24" aria-label="Úvodní sekce - Čisté prostory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Čisté prostory – kompletní řešení pro farmacie, laboratoře a operační sály</h1>
          <p className="text-xl text-white/90 max-w-3xl text-balance">
            Realizace čistých prostorů tříd A–D dle EU GMP Annex 1 a ISO 14644. Laboratorní boxy, laminární boxy, vzduchotechnika a kompletní validace pro laboratoře, operační sály, farmacie a technologický průmysl.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mt-0 mb-6">Co jsou čisté prostory?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              <strong>Čisté prostory</strong> zahrnují laboratoře, operační sály, mikrobiologické pracovny, ale i sterilní zóny, které vyžadují řízenou čistotu vzduchu. Příkladem mohou být <strong>laminární boxy, laboratorní boxy, digestoře, izolátory pro cytostatika, RABS systémy, sterilizátory, termostaty, inkubátory</strong> a řada dalších zařízení s přesnými požadavky na čistotu.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Čistý prostor je prostor, ve kterém je řízena <strong>koncentrace částic ve vznosu</strong> a který je konstruován a využíván tak, aby se zanesení, generování a zadržování částic minimalizovalo. Jsou v něm řízeny také <strong>teplota, vlhkost, tlak a přesun vzduchu</strong> dle normy <strong>ISO 14644</strong> a <strong>EU GMP Annex 1</strong>. Tyto prostory mají specifické požadavky na <strong>vzduchotechnické zařízení, HEPA a ULPA filtry</strong>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-accent/30 p-8 rounded-lg">
                <Shield className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-4">Kompletní dodávky čistých prostorů</h3>
                <p className="text-muted-foreground">
                  Provádíme kompletní dodávky a montáž vzduchotechniky, vzduchotechnických filtrů, 
                  včetně filtrů atypických dělaných na míru dle potřeb zákazníka.
                </p>
              </div>

              <div className="bg-accent/30 p-8 rounded-lg">
                <Filter className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-4">HEPA a ULPA filtry – vzduchotechnika čistých prostor</h3>
                <p className="text-muted-foreground">
                  Specializujeme se na dodávky a výměny vysokoúčinných <strong>HEPA filtrů H13/H14 a ULPA filtrů H15/H16</strong> 
                  pro nejnáročnější aplikace v čistých prostorech. Certifikace dle EN 1822.
                </p>
              </div>

              <div className="bg-accent/30 p-8 rounded-lg">
                <Settings className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-4">Servis a údržba čistých prostorů</h3>
                <p className="text-muted-foreground">
                  Zajistíme likvidaci starých a použitých filtrů, údržbu laminárních boxů a izolátorů, opravy 
                  vzduchotechnických rozvodů a <strong>pohotovostní servis po celé ČR</strong>.
                </p>
              </div>

              <div className="bg-accent/30 p-8 rounded-lg">
                <CheckCircle className="h-12 w-12 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-4">Validace a kvalifikace – ISO 14644 a EU GMP</h3>
                <p className="text-muted-foreground">
                  Provádíme <strong>DQ (Design Qualification), IQ (Installation Qualification), OQ (Operational Qualification) a PQ (Performance Qualification)</strong> dle <strong>ISO 14644 a EU GMP Annex 1</strong>.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Naše komplexní služby pro čisté prostory zahrnují</h2>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span><strong>Realizace čistých prostorů</strong> tříd A–D dle EU GMP Annex 1 a ISO 14644 s kompletní montáží vzduchotechniky</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span><strong>Laboratorní boxy, laminární boxy a izolátory</strong> pro farmacii, nemocnice a laboratoře</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span><strong>HEPA a ULPA filtry</strong> H13/H14/H15/H16 – dodávky, výměny a likvidace – certifikace dle EN 1822</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span><strong>Měření a validace čistých prostorů</strong> – počet částic, testy integrity, DQ/IQ/OQ/PQ dle ISO 14644-1</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span><strong>Servis a údržba</strong> – výměna filtrů, údržba vzduchotechniky, pohotovostní servis po celé ČR</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span><strong>Projektování a poradenství</strong> – návrh, tlakové kaskády, klimatizace s přesnou regulací teploty a vlhkosti</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CisteProstory;
