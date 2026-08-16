import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VisualShowcase from '@/components/VisualShowcase';
import PageSchema from '@/components/PageSchema';
import { createPageMetadata } from '@/lib/seo';
import { Shield, Filter, Settings, CheckCircle } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  path: '/ciste-prostory',
  title: 'Čisté prostory na klíč – ISO 14644 a EU GMP | cisteprostory.eu',
  description:
    'Návrh a realizace čistých prostorů na klíč pro farmacii, laboratoře, nemocnice a průmysl. ISO 14644, EU GMP Annex 1, HEPA filtrace a validace po celé ČR.',
});

const CisteProstory = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageSchema
        path="/ciste-prostory"
        title="Čisté prostory na klíč – ISO 14644 a EU GMP"
        description="Návrh a realizace čistých prostorů, laboratorních boxů a HEPA filtrace s validací dle ISO 14644 a EU GMP Annex 1."
        serviceName="Čisté prostory na klíč"
        serviceDescription="Návrh, realizace a validace čistých prostorů pro farmacii, laboratoře, nemocnice a průmysl."
      />
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white py-16 lg:py-24" aria-label="Úvodní sekce - Čisté prostory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Čisté prostory – kompletní řešení pro farmacie, laboratoře a operační sály</h1>
          <p className="text-xl text-white/90 max-w-3xl text-balance">
            Realizace čistých prostorů tříd A–D dle EU GMP Annex 1 a ISO 14644. Laboratorní boxy, laminární boxy, vzduchotechnika s HEPA H13/H14 filtry a kompletní validace pro laboratoře, operační sály, farmacie a technologický průmysl.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mt-0 mb-6">Co jsou čisté prostory a kde se používají?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              <strong>Čisté prostory</strong> zahrnují laboratoře, operační sály, mikrobiologické pracovny i sterilní zóny, které vyžadují řízenou čistotu vzduchu. Příkladem mohou být <strong>laminární boxy, laboratorní boxy, digestoře, izolátory pro cytostatika, RABS systémy, sterilizátory, termostaty, inkubátory</strong> a další zařízení s přesnými požadavky na čistotu.
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

            <section className="mt-20 border-t border-border pt-12" aria-labelledby="tridy-cistoty">
              <h2 id="tridy-cistoty" className="text-3xl font-bold mb-6">
                Jak se navrhují čisté prostory
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Návrh čistého prostoru začíná určením procesu, požadované třídy čistoty a kritických
                míst. Teprve podle těchto parametrů se volí dispozice, tlakové kaskády, materiály
                povrchů, filtrace a způsob řízení vzduchu. Správné řešení musí být provozně
                udržitelné a současně připravené na měření a validaci čistých prostor.
              </p>

              <div className="grid gap-8 md:grid-cols-3">
                <div className="border-t-2 border-primary pt-4">
                  <h3 className="text-xl font-semibold mb-3">Třídy čistoty ISO 14644</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Klasifikace ISO 1 až ISO 9 stanovuje limity koncentrace částic ve vzduchu.
                    V praxi se vybírá třída podle citlivosti výroby, výzkumu nebo zdravotnického
                    provozu.
                  </p>
                </div>
                <div className="border-t-2 border-primary pt-4">
                  <h3 className="text-xl font-semibold mb-3">Vzduchotechnika a filtrace</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Stabilní prostředí vyžaduje vhodný přívod a odvod vzduchu, regulaci tlaků a
                    účinnou HEPA nebo ULPA filtraci. Součástí návrhu je také přístup k filtrům
                    a servisním místům.
                  </p>
                </div>
                <div className="border-t-2 border-primary pt-4">
                  <h3 className="text-xl font-semibold mb-3">Provoz a kontrola</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Čistota prostoru závisí také na režimu vstupu, úklidu, oděvu pracovníků a
                    pravidelném měření. Provozní pravidla proto navrhujeme společně s technickým
                    řešením.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-20 border-t border-border pt-12" aria-labelledby="vyuziti-cistych-prostor">
              <h2 id="vyuziti-cistych-prostor" className="text-3xl font-bold mb-6">
                Kde se čisté prostory používají
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Řízené prostředí se uplatňuje všude tam, kde částice, mikroorganismy nebo kolísání
                podmínek mohou ovlivnit bezpečnost a kvalitu. Dodáváme řešení pro farmaceutickou
                výrobu, nemocnice, laboratorní a mikrobiologická pracoviště, výrobu zdravotnických
                prostředků i přesnou průmyslovou výrobu. Rozsah dodávky může zahrnovat samotný
                prostor, laboratorní box, vzduchotechniku, HEPA filtry, měření i následný servis.
              </p>
            </section>

            <section className="mt-20 border-t border-border pt-12" aria-labelledby="jak-vybrat-reseni">
              <h2 id="jak-vybrat-reseni" className="text-3xl font-bold mb-6">
                Jak vybrat řešení pro čistý prostor
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Stejná plocha může vyžadovat úplně jiné technické řešení podle toho, zda chráníte
                výrobek, pracovníka, pacienta nebo okolní prostředí. Před návrhem proto společně
                upřesníme proces, materiálový tok, počet pracovníků, požadovanou třídu čistoty,
                teplotu, vlhkost a tlakové poměry.
              </p>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="border-t-2 border-primary pt-4">
                  <h3 className="text-xl font-semibold mb-3">Celý prostor</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Vhodné pro provozy s řízeným vstupem, definovaným materiálovým tokem a více
                    pracovními místy. Řešíme dispozici, povrchy, tlakové kaskády i vzduchotechniku.
                  </p>
                </div>
                <div className="border-t-2 border-primary pt-4">
                  <h3 className="text-xl font-semibold mb-3">Lokální ochrana</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Laminární nebo laboratorní box může být efektivní tam, kde je kritická pouze
                    konkrétní operace. Rozsah se volí podle pracovního postupu a požadavků na ochranu.
                  </p>
                </div>
                <div className="border-t-2 border-primary pt-4">
                  <h3 className="text-xl font-semibold mb-3">Kombinované řešení</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    U náročnějších procesů propojujeme čistý prostor, box, izolátor, filtrace a
                    měření tak, aby výsledkem nebyly izolované technologie bez návaznosti na provoz.
                  </p>
                </div>
              </div>
            </section>

            <section className="mt-20 border-t border-border pt-12" aria-labelledby="co-dostanete">
              <h2 id="co-dostanete" className="text-3xl font-bold mb-6">
                Co má být součástí dobře připravené dodávky
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Nabídku nestavíme pouze na ploše místnosti. Důležité je, aby technické řešení,
                uvedení do provozu a následná kontrola tvořily jeden čitelný celek. Podle zadání
                proto připravíme rozsah dodávky, rozhraní mezi profesemi a seznam výstupní dokumentace.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <ul className="space-y-3 text-muted-foreground">
                  <li>• technický návrh dispozice a proudění vzduchu</li>
                  <li>• specifikace povrchů, dveří, stropů a prostupů</li>
                  <li>• návrh filtrace, regulace a tlakových kaskád</li>
                  <li>• koordinace montáže a uvedení zařízení do provozu</li>
                </ul>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• měřicí plán podle účelu a třídy čistoty</li>
                  <li>• záznamy o měření a vyhodnocení limitů</li>
                  <li>• doporučení pro provoz, údržbu a opakované kontroly</li>
                  <li>• návaznost na <Link href="/mereni-a-validace" className="font-semibold text-primary underline underline-offset-4">validaci čistých prostor</Link> a servis</li>
                </ul>
              </div>
            </section>

            <section className="mt-20 border-t border-border pt-12" aria-labelledby="otazky-ciste-prostory">
              <h2 id="otazky-ciste-prostory" className="text-3xl font-bold mb-6">
                Časté otázky o čistých prostorech
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Kolik stojí čistý prostor?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Cena závisí na požadované třídě čistoty, ploše, technologii, tlakových kaskádách,
                    filtraci a rozsahu kvalifikace. Nabídku připravujeme podle procesu, dispozice a
                    požadovaných validačních výstupů.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Jaké dokumenty jsou součástí dodávky?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Podle rozsahu projektu dodávka zahrnuje technický návrh, dokumentaci skutečného
                    provedení, provozní podklady, záznamy o měření a validační protokol. Konkrétní
                    seznam dokumentů stanovíme před zahájením realizace.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Jak často se validace opakuje?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Interval se řídí třídou čistoty, rizikovostí provozu a interním plánem kontrol.
                    Opakované měření je vhodné také po zásahu do filtrace, vzduchotechniky nebo
                    dispozice čistého prostoru.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <VisualShowcase />

      <Footer />
    </div>
  );
};

export default CisteProstory;
