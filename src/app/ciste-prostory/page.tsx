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
  title: 'Čisté prostory: návrh, realizace a validace | cisteprostory.eu',
  description:
    'Návrh a realizace čistých prostorů, laboratorních a laminárních boxů, izolátorů a HEPA filtrace podle procesu, ISO 14644 a EU GMP Annex 1.',
});

const CisteProstory = () => (
  <div className="min-h-screen bg-background">
    <PageSchema
      path="/ciste-prostory"
      title="Čisté prostory: návrh, realizace a validace"
      description="Návrh a realizace čistých prostorů, laboratorních boxů a HEPA filtrace s validací dle ISO 14644 a EU GMP Annex 1."
      serviceName="Čisté prostory"
      serviceDescription="Návrh, realizace a validace čistých prostorů pro farmacii, laboratoře, nemocnice a průmysl."
    />
    <Header />
    <section className="bg-gradient-hero py-16 text-white lg:py-24" aria-label="Úvodní sekce - Čisté prostory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-6 max-w-5xl text-4xl font-bold md:text-5xl">
          Čisté prostory podle procesu, ne pouze podle plochy
        </h1>
        <p className="max-w-4xl text-xl leading-relaxed text-white/90">
          Navrhujeme řízené prostředí pro farmacii, laboratoře, zdravotnictví a přesnou výrobu. Propojujeme
          dispozici, povrchy, vzduchotechniku, HEPA nebo ULPA filtraci, uvedení do provozu a následné měření.
        </p>
      </div>
    </section>
    <main className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h2>Co jsou čisté prostory a kde se používají</h2>
          <p>
            Čistý prostor je definované prostředí, ve kterém se podle účelu provozu řídí zejména koncentrace
            částic ve vzduchu. Součástí návrhu bývá také kontrola teploty, relativní vlhkosti, tlaku, proudění,
            materiálového toku a režimu vstupu osob. Cílem není vytvořit „sterilní místnost“ bez kontextu, ale
            stabilní podmínky pro konkrétní výrobní, laboratorní nebo zdravotnický proces.
          </p>
          <p>
            Řízené prostory se používají například ve farmaceutické výrobě, při přípravě léčiv, v nemocničních
            provozech, mikrobiologických a výzkumných laboratořích, při výrobě zdravotnických prostředků,
            v elektronice, optice a při přesné montáži. Rozsah řešení se v každém případě odvíjí od toho,
            zda chráníme produkt, pracovníka, pacienta nebo okolní prostředí.
          </p>

          <h2>Čtyři části návrhu čistého prostoru</h2>
          <div className="my-12 grid grid-cols-1 gap-8 md:grid-cols-2 not-prose">
            <div className="rounded-lg bg-accent/30 p-8">
              <Shield className="mb-4 h-12 w-12 text-primary" aria-hidden="true" />
              <h3 className="mb-3 text-xl font-semibold">Dispozice a povrchy</h3>
              <p className="text-muted-foreground">Rozvržení zón, dveří, prostupů, stropů, podlah a omyvatelných povrchů podle pohybu osob a materiálu.</p>
            </div>
            <div className="rounded-lg bg-accent/30 p-8">
              <Filter className="mb-4 h-12 w-12 text-primary" aria-hidden="true" />
              <h3 className="mb-3 text-xl font-semibold">Filtrace a proudění</h3>
              <p className="text-muted-foreground">Výběr filtračních stupňů, distribučních prvků, průtoků a servisního přístupu k HEPA nebo ULPA filtrům.</p>
            </div>
            <div className="rounded-lg bg-accent/30 p-8">
              <Settings className="mb-4 h-12 w-12 text-primary" aria-hidden="true" />
              <h3 className="mb-3 text-xl font-semibold">Regulace a tlakové kaskády</h3>
              <p className="text-muted-foreground">Nastavení směru proudění mezi zónami, regulace teploty a vlhkosti a přístup k řízení provozních stavů.</p>
            </div>
            <div className="rounded-lg bg-accent/30 p-8">
              <CheckCircle className="mb-4 h-12 w-12 text-primary" aria-hidden="true" />
              <h3 className="mb-3 text-xl font-semibold">Uvedení a ověření</h3>
              <p className="text-muted-foreground">Koordinace montáže, nastavení systému, měřicí plán, protokol a doporučení pro další provoz a údržbu.</p>
            </div>
          </div>

          <h2>Třídy čistoty podle ISO 14644</h2>
          <p>
            ISO 14644-1 klasifikuje čistotu vzduchu podle koncentrace částic ve stanovených velikostech.
            Třídy ISO 1 až ISO 9 představují různé úrovně kontroly; vhodná třída se nevolí podle marketingového
            označení, ale podle citlivosti procesu, produktu a provozního stavu. Klasifikace může být posuzována
            v klidovém stavu i za provozu, pokud to vyžaduje zadání nebo validační plán.
          </p>
          <p>
            Ve farmaceutických provozech se technické požadavky dále propojují s EU GMP Annex 1. Tato norma
            nenahrazuje projektové zadání: určuje rámec, který je potřeba převést do konkrétní dispozice,
            filtrace, provozních postupů, měření a dokumentace.
          </p>

          <h2>Celý prostor, lokální ochrana nebo kombinace</h2>
          <p>
            Celý čistý prostor je vhodný pro provoz s řízeným vstupem, více pracovními místy a definovaným
            materiálovým tokem. Laminární nebo laboratorní box může být efektivnější tam, kde je kritická pouze
            konkrétní operace. Izolátor nebo bariérový systém se volí podle požadavků na oddělení procesu,
            produktu a obsluhy. U složitějších pracovišť se jednotlivé prvky kombinují.
          </p>
          <p>
            Při volbě řešení se posuzuje také četnost otevřených operací, počet pracovníků, velikost zařízení,
            způsob čištění a požadavky na předávání materiálu. Menší lokální zařízení nemusí znamenat jednodušší
            projekt: důležité jsou jeho umístění, odvod vzduchu, přístup pro servis a návaznost na okolní zónu.
          </p>

          <h2>Zařízení pro lokální ochranu a bariérová řešení</h2>
          <p>
            Součástí návrhu mohou být laboratorní boxy, laminární boxy, izolátory, RABS, pass boxy a další
            technologická zařízení. Každé z nich má jiný účel. Laminární proudění chrání vymezenou pracovní zónu,
            izolátor vytváří oddělené prostředí s omezeným zásahem obsluhy a RABS využívá bariéru při zachování
            určité dostupnosti procesu. Výběr proto vychází z rizik operace a způsobu obsluhy, ne pouze z názvu
            zařízení.
          </p>

          <h2>Provozní režim čistého prostoru</h2>
          <p>
            Funkční návrh musí počítat s tím, jak se prostor skutečně používá. Patří sem převlékání, sanitace,
            přísun materiálu, odstraňování odpadu, čištění pracovních ploch a pohyb mezi zónami. Dveře, průchody,
            předávací komory a tlakové rozdíly mají společně podporovat požadovaný směr toku a omezovat přenos
            nečistot. Provozní režim se následně promítá do měřicího plánu a pokynů pro údržbu.
          </p>

          <h2>Jak probíhá návrh a realizace</h2>
          <ol>
            <li><strong>Zadání:</strong> účel prostoru, proces, kritická místa, požadovaná třída a provozní režim.</li>
            <li><strong>Návrh:</strong> dispozice, materiálový tok, povrchy, filtrace, tlakové poměry a regulace.</li>
            <li><strong>Koordinace:</strong> návaznost stavebních, elektro, vzduchotechnických a technologických profesí.</li>
            <li><strong>Montáž a nastavení:</strong> instalace, zaregulování, uvedení zařízení do provozu a zaškolení obsluhy.</li>
            <li><strong>Ověření:</strong> měření částic, tlaků, proudění, teploty, vlhkosti a integrity filtrů podle plánu.</li>
          </ol>

          <h2>Co má obsahovat dobře připravená dodávka</h2>
          <ul>
            <li>technický návrh dispozice a proudění vzduchu;</li>
            <li>specifikace povrchů, dveří, stropů, podlah a prostupů;</li>
            <li>návrh filtrace, regulace a tlakových kaskád;</li>
            <li>koordinace montáže a uvedení zařízení do provozu;</li>
            <li>měřicí plán, záznamy a vyhodnocení limitů;</li>
            <li>doporučení pro provoz, údržbu a opakované kontroly.</li>
          </ul>
          <p>
            Podrobnější rozsah měření najdete na stránce <Link href="/mereni-a-validace" className="text-primary underline">měření a validace</Link>.
            Informace o filtraci a tlakových poměrech navazují na stránku <Link href="/vzduchotechnika" className="text-primary underline">vzduchotechniky čistých prostor</Link>.
          </p>

          <h2>Časté otázky</h2>
          <h3>Kolik stojí čistý prostor?</h3>
          <p>Cena závisí na třídě čistoty, ploše, procesu, površích, filtraci, regulaci a rozsahu dokumentace a měření. Smysluplná nabídka proto vychází z technického zadání, ne pouze z počtu metrů čtverečních.</p>
          <h3>Jaké dokumenty bývají součástí dodávky?</h3>
          <p>Podle rozsahu projektu může jít o technický návrh, specifikaci zařízení, dokumentaci skutečného provedení, provozní podklady, záznamy z měření a validační protokol.</p>
          <h3>Kdy je potřeba měření opakovat?</h3>
          <p>Interval se určuje podle třídy, rizikovosti provozu a interního plánu kontrol. Nové měření je vhodné také po zásahu do filtrace, regulace, dispozice nebo vzduchotechniky.</p>
          <h3>Jak vybrat mezi čistým prostorem a boxem?</h3>
          <p>Rozhoduje rozsah kritických operací, počet pracovníků, požadované oddělení procesu a návaznost na okolní provoz. Pokud je chráněná pouze jedna operace, může být vhodné lokální zařízení; při více pracovních místech a řízeném toku bývá účelnější celý prostor.</p>
          <h3>Co se stane při změně procesu?</h3>
          <p>Změna zařízení, počtu pracovníků, materiálového toku nebo režimu úklidu může ovlivnit tlakové poměry, proudění i částicovou čistotu. Před změnou je vhodné posoudit dopad na projekt, provozní dokumentaci a rozsah následného měření.</p>
        </div>
        <VisualShowcase />
      </div>
    </main>
    <Footer />
  </div>
);

export default CisteProstory;
