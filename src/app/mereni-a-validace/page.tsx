import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ValidationVisual from '@/components/ValidationVisual';
import { Gauge, CheckCircle, ClipboardCheck, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Validace čistých prostor ISO 14644 | cisteprostory.eu',
  description:
    'Validace čistých prostor podle ISO 14644-1, ISO 14644-2 a EU GMP Annex 1. Měření částic, test integrity HEPA filtrů a kvalifikace IQ, OQ a PQ.',
  keywords:
    'validace čistých prostor, měření čistých prostor, ISO 14644-1, ISO 14644-2, EU GMP Annex 1, měření částic, test integrity HEPA filtrů, kvalifikace IQ OQ PQ',
};

const MereniValidace = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Validace čistých prostor a měření dle ISO 14644</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Přesné měřicí a validační služby pro čisté prostory, laboratorní boxy a HEPA filtrace
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Jsme odbornou společností s bohatými zkušenostmi s poskytováním přesných měřicích a validačních služeb 
              v oblasti čistých prostorů, laboratorních boxů a zdravotnické techniky. S naším vysoce kvalifikovaným týmem 
              a moderními technologiemi provádíme testy, měření a kontroly, které zajistí shodu s ISO 14644 a EU GMP Annex 1.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="/integrita-hepa-filtru"
                className="inline-flex items-center gap-2 bg-accent/40 hover:bg-accent/60 transition-colors px-5 py-3 rounded-lg font-medium text-foreground"
              >
                → Test integrity HEPA filtrů
              </Link>
              <Link
                href="/pocet-castic-iso-14644"
                className="inline-flex items-center gap-2 bg-accent/40 hover:bg-accent/60 transition-colors px-5 py-3 rounded-lg font-medium text-foreground"
              >
                → Měření počtu částic ISO 14644-1
              </Link>
            </div>

            <ValidationVisual />

            <h2 className="text-3xl font-bold mt-12 mb-8">Typy kvalifikací při validaci čistých prostorů</h2>            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
              <div className="bg-accent/30 p-8 rounded-lg">
                <ClipboardCheck className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">IQ – Installation Qualification</h3>
                <p className="text-muted-foreground">
                  Instalační kvalifikace ověřuje, že zařízení bylo správně nainstalováno 
                  v souladu s technickou specifikací a požadavky výrobce.
                </p>
              </div>

              <div className="bg-accent/30 p-8 rounded-lg">
                <Gauge className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">OQ – Operational Qualification</h3>
                <p className="text-muted-foreground">
                  Operační kvalifikace prokazuje, že zařízení funguje v souladu 
                  se specifikovanými provozními parametry.
                </p>
              </div>

              <div className="bg-accent/30 p-8 rounded-lg">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">PQ – Performance Qualification</h3>
                <p className="text-muted-foreground">
                  Procesní kvalifikace ověřuje, že zařízení konzistentně pracuje 
                  v běžném provozu podle specifikovaných požadavků.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Co validujeme a měříme</h2>
            <ul className="space-y-3 text-lg text-muted-foreground mb-12">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>Čisté prostory všech tříd čistoty</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>Laminární boxy pro sterilní práci</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>Podtlakové a přetlakové izolátory</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>Mikrobiologické boxy</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>Biohazard boxy</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>Bariérová pracoviště pro přípravu cytostatik</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>Automotive pracoviště</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>Farmacie</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Odvětví, se kterými spolupracujeme</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Naše služby jsou přizpůsobeny individuálním potřebám a předpisům každého klienta. 
              S důrazem na profesionální přístup, spolehlivost a preciznost v naší práci se snažíme 
              poskytnout našim klientům přesné informace a výsledky, které pomáhají zajišťovat 
              bezpečnost a kvalitu jejich zařízení.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
              <div className="bg-primary/10 p-4 rounded-lg text-center">
                <p className="font-semibold">Farmacie</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg text-center">
                <p className="font-semibold">Biotechnologie</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg text-center">
                <p className="font-semibold">Zdravotnictví</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg text-center">
                <p className="font-semibold">Výzkum</p>
              </div>
            </div>

            <section className="mt-20 border-t border-border pt-12" aria-labelledby="prubeh-validace">
              <h2 id="prubeh-validace" className="text-3xl font-bold mb-6">
                Jak probíhá validace čistých prostor
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Validace čistých prostor ověřuje, zda prostor a jeho technické zařízení dlouhodobě
                splňují stanovené limity. Rozsah měření se určuje podle projektu, třídy čistoty,
                způsobu použití a požadavků ISO 14644 nebo EU GMP Annex 1.
              </p>

              <ol className="space-y-5 border-l border-border pl-6">
                <li>
                  <h3 className="text-xl font-semibold mb-2">1. Příprava měření</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Projdeme dokumentaci, provozní režim a požadované parametry. Společně stanovíme
                    měřicí plán, místa odběru a podmínky, za kterých bude výsledek platný.
                  </p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold mb-2">2. Měření a funkční testy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Podle rozsahu provádíme měření částic, tlakových rozdílů, teploty, vlhkosti,
                    rychlosti proudění, výměny vzduchu a integrity HEPA filtrů.
                  </p>
                </li>
                <li>
                  <h3 className="text-xl font-semibold mb-2">3. Vyhodnocení a protokol</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Naměřené hodnoty porovnáme s limity a připravíme přehledný validační protokol
                    včetně výsledku, odchylek a doporučení pro další provoz nebo nápravná opatření.
                  </p>
                </li>
              </ol>
            </section>

            <section className="mt-20 border-t border-border pt-12" aria-labelledby="otazky-validace">
              <h2 id="otazky-validace" className="text-3xl font-bold mb-6">
                Časté otázky k validaci čistých prostor
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Co je výsledkem validace?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Výsledkem je dokumentovaný protokol s použitými metodami, naměřenými hodnotami,
                    vyhodnocením limitů a případnými doporučeními. Dokumentace slouží jako podklad
                    pro interní kontrolu, audit i další kvalifikaci zařízení.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Kdy je potřeba měření zopakovat?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Interval se řídí třídou čistoty, rizikovostí provozu, změnami zařízení a
                    interním plánem kontrol. Opakované měření je vhodné také po zásahu do filtrace,
                    vzduchotechniky nebo dispozice prostoru.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MereniValidace;
