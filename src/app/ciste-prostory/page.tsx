import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Shield, Filter, Settings, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Čisté prostory a laboratorní boxy | cisteprostory.eu',
  description:
    'Kompletní dodávky a montáž vzduchotechniky, HEPA a ULPA filtrů, servis a validace čistých prostorů pro laboratoře, operační sály a další prostory.',
};

const CisteProstory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Čisté prostory</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Komplexní řešení pro laboratoře, operační sály a další prostory vyžadující řízenou čistotu vzduchu
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Jedná se o laboratoře, operační sály, ale také ostatní prostory, které vyžadují řízenou čistotu vzduchu. 
              Příkladem mohou být laminární boxy, digestoře, sterilizátory, termostaty, inkubátory, lednice, 
              vzduchotechnické systémy i izolátory a řada dalších zařízení.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              <strong>Čistý prostor</strong> je prostor, ve kterém je řízena koncentrace částic ve vznosu a který je 
              konstruován a využíván tak, aby se zanesení, generování a zadržování částic uvnitř prostoru minimalizovalo. 
              Je to prostor, v němž jsou řízeny také ostatní sledované parametry jako teplota, vlhkost a tlak. 
              Tento prostor má velice specifické požadavky na vzduchotechnické zařízení.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-accent/30 p-8 rounded-lg">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Kompletní dodávky</h3>
                <p className="text-muted-foreground">
                  Provádíme kompletní dodávky a montáž vzduchotechniky, vzduchotechnických filtrů, 
                  včetně filtrů atypických dělaných na míru dle potřeb zákazníka.
                </p>
              </div>

              <div className="bg-accent/30 p-8 rounded-lg">
                <Filter className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">HEPA a ULPA filtry</h3>
                <p className="text-muted-foreground">
                  Specializujeme se na dodávky a výměny vysokoúčinných HEPA a ULPA filtrů 
                  pro nejnáročnější aplikace v čistých prostorech.
                </p>
              </div>

              <div className="bg-accent/30 p-8 rounded-lg">
                <Settings className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Servis a údržba</h3>
                <p className="text-muted-foreground">
                  Zajistíme likvidaci starých a použitých filtrů, všechny opravy stávajících 
                  vzduchotechnických rozvodů a potrubí.
                </p>
              </div>

              <div className="bg-accent/30 p-8 rounded-lg">
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Validace a kolaudace</h3>
                <p className="text-muted-foreground">
                  Uvedení zařízení do provozu včetně zpracování příslušných dokladů 
                  pro kolaudaci a následnou validaci.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Naše služby zahrnují</h2>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Kompletní dodávky a montáž vzduchotechniky v prostředí čistých prostorů</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Dodávky vzduchotechnických filtrů včetně atypických řešení na míru</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Likvidace starých a použitých filtrů</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Uvedení zařízení do provozu s kompletní dokumentací</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Opravy vzduchotechnických rozvodů a potrubí</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Kompletní poradenská činnost ohledně vzduchotechniky a klimatizace</span>
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
