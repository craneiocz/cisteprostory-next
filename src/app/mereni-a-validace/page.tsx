import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ValidationVisual from '@/components/ValidationVisual';
import PageSchema from '@/components/PageSchema';
import ServiceCrossLink from '@/components/ServiceCrossLink';
import { createPageMetadata } from '@/lib/seo';
import { ClipboardCheck, Gauge, Award } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  path: '/mereni-a-validace',
  title: 'Měření a validace čistých prostor | cisteprostory.eu',
  description:
    'Měření částic, tlakových rozdílů, proudění, teploty, vlhkosti a integrity HEPA filtrů podle ISO 14644, EU GMP Annex 1 a sjednaného měřicího plánu.',
});

const MereniValidace = () => (
  <div className="min-h-screen bg-background">
    <PageSchema
      path="/mereni-a-validace"
      title="Měření a validace čistých prostor"
      description="Měřicí plán, kvalifikace a protokol pro ověření parametrů čistého prostoru, boxu nebo filtračního systému."
      serviceName="Validace čistých prostor"
      serviceDescription="Měření a kvalifikace podle ISO 14644, EU GMP Annex 1 a konkrétního provozního zadání."
    />
    <Header />
    <section className="bg-gradient-hero py-16 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Měření a validace čistých prostor</h1>
        <p className="max-w-3xl text-xl text-white/90">Přesné hodnoty mají význam až ve chvíli, kdy je jasné, co znamenají pro provoz, údržbu a audit.</p>
      </div>
    </section>
    <main className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h2>Měření zasazené do provozního kontextu</h2>
          <p>
            Měření čistých prostorů, laboratorních boxů, izolátorů a filtračních systémů připravujeme podle
            účelu zařízení a požadované třídy čistoty. Před samotnou zkouškou je potřeba znát provozní stav,
            měřené zóny, počet bodů, velikosti částic, limity a návaznost na další kvalifikační kroky.
          </p>
          <p>
            Podle zadání se posuzují částice, tlakové rozdíly, rychlost a směr proudění, teplota, relativní
            vlhkost, integrita HEPA filtrů a další parametry. Výsledkem není pouze tabulka čísel, ale protokol,
            který popisuje podmínky měření, použitou metodiku, naměřené hodnoty, limity a vyhodnocení.
          </p>
          <h2>Prostory a zařízení, u kterých měření dává smysl</h2>
          <p>
            Měření se může týkat celých čistých prostor, výrobních a laboratorních zón, místností pro přípravu
            materiálu i lokálních zařízení. Patří sem laminární a laboratorní boxy, izolátory, RABS, technologické
            komory a části vzduchotechniky. Rozsah zkoušek se vždy přizpůsobuje tomu, zda je hlavním cílem ochrana
            produktu, pracovníka, pacienta nebo okolního prostředí.
          </p>
          <p>
            U nového zařízení se ověřuje shoda s technickým zadáním. U zavedeného provozu se sleduje trend,
            opakovatelnost a dopad změn. Stejná naměřená hodnota proto může mít jiný význam při uvedení do provozu,
            při periodické kontrole a po servisním zásahu.
          </p>
          <div className="my-10 flex flex-wrap gap-4 not-prose">
            <Link href="/integrita-hepa-filtru" className="rounded-lg bg-accent/40 px-5 py-3 font-medium hover:bg-accent/60">Test integrity HEPA filtrů</Link>
            <Link href="/pocet-castic-iso-14644" className="rounded-lg bg-accent/40 px-5 py-3 font-medium hover:bg-accent/60">Měření počtu částic</Link>
          </div>
          <ValidationVisual />

          <h2>Jaké parametry se při validaci sledují</h2>
          <ul>
            <li><strong>Částice:</strong> klasifikace čistoty ve stanovených bodech a provozních stavech.</li>
            <li><strong>Tlakové rozdíly:</strong> ověření směru proudění mezi zónami a funkce tlakové kaskády.</li>
            <li><strong>Proudění vzduchu:</strong> kontrola rychlosti, směru nebo rovnoměrnosti podle zařízení.</li>
            <li><strong>Teplota a vlhkost:</strong> parametry důležité pro proces, materiál, obsluhu a stabilitu prostředí.</li>
            <li><strong>Integrita filtrace:</strong> ověření HEPA nebo ULPA média, rámu, těsnění a uložení.</li>
          </ul>

          <h2>IQ, OQ a PQ v praxi</h2>
          <div className="my-10 grid grid-cols-1 gap-8 md:grid-cols-3 not-prose">
            <div className="rounded-lg bg-accent/30 p-8"><ClipboardCheck className="mb-4 h-12 w-12 text-primary" aria-hidden="true" /><h3 className="mb-3 text-xl font-semibold">IQ – Installation Qualification</h3><p className="text-muted-foreground">Instalační kvalifikace ověřuje, že zařízení, komponenty, připojení a dokumentace odpovídají schválenému technickému zadání a požadavkům výrobce.</p></div>
            <div className="rounded-lg bg-accent/30 p-8"><Gauge className="mb-4 h-12 w-12 text-primary" aria-hidden="true" /><h3 className="mb-3 text-xl font-semibold">OQ – Operational Qualification</h3><p className="text-muted-foreground">Operační kvalifikace ověřuje chování zařízení v definovaných provozních režimech a rozsazích, například při změně regulace nebo zatížení.</p></div>
            <div className="rounded-lg bg-accent/30 p-8"><Award className="mb-4 h-12 w-12 text-primary" aria-hidden="true" /><h3 className="mb-3 text-xl font-semibold">PQ – Performance Qualification</h3><p className="text-muted-foreground">Procesní kvalifikace sleduje, zda prostor nebo zařízení opakovaně dosahují požadovaných parametrů v běžném provozu.</p></div>
          </div>

          <h2>Počáteční měření, revalidace a kontrola po zásahu</h2>
          <p>
            Počáteční měření slouží k ověření nového nebo upraveného prostoru před předáním do běžného provozu.
            Periodická kontrola vychází z interního plánu, třídy čistoty, rizikovosti procesu a požadavků provozu.
            Po výměně HEPA filtru, zásahu do regulace, změně dispozice nebo opravě vzduchotechniky je vhodné
            znovu posoudit parametry, které mohl zásah ovlivnit.
          </p>
          <h2>Co obsahuje měřicí plán a protokol</h2>
          <ul>
            <li>identifikaci prostoru, zóny, zařízení a provozního stavu;</li>
            <li>měřicí body, referenční velikosti částic a požadované limity;</li>
            <li>použité přístroje, kalibraci, podmínky a metodiku;</li>
            <li>naměřené hodnoty, vyhodnocení shody a popis odchylek;</li>
            <li>doporučení k nápravě, údržbě nebo opakované kontrole.</li>
          </ul>
          <h2>Praktický postup validace</h2>
          <ol>
            <li><strong>Vyjasnění zadání:</strong> účel prostoru, klasifikace, provozní stav a požadované parametry.</li>
            <li><strong>Příprava měření:</strong> kontrola zařízení, přístupů, dokumentace a podmínek pro měření.</li>
            <li><strong>Provedení zkoušek:</strong> měření v určených bodech podle schváleného plánu a metodiky.</li>
            <li><strong>Vyhodnocení:</strong> porovnání výsledků s limity a posouzení případných odchylek.</li>
            <li><strong>Předání:</strong> protokol, záznamy, závěr a doporučení pro provoz nebo další zásah.</li>
          </ol>
          <h2>Časté otázky k validaci</h2>
          <h3>Je validace totéž co měření počtu částic?</h3>
          <p>Ne. Počet částic je jedna z důležitých zkoušek. Validace může zahrnovat také tlak, proudění, teplotu, vlhkost, integritu filtrů a další parametry podle účelu prostoru.</p>
          <h3>Jak se určuje počet měřicích bodů?</h3>
          <p>Počet a rozmístění bodů se odvíjí od plochy, členění prostoru, klasifikace a použité metodiky. Konkrétní plán se stanovuje před měřením a zapisuje do protokolu.</p>
          <h3>Co když výsledek nevyhoví?</h3>
          <p>Odchylku je potřeba zasadit do kontextu: může souviset s filtrem, regulací, provozním stavem, pohybem osob nebo měřicí metodikou. Další postup se navrhne podle příčiny, ne pouze podle jedné hodnoty.</p>
          <p>Na test integrity navazuje <Link href="/integrita-hepa-filtru" className="text-primary underline">samostatná stránka o HEPA filtrech</Link>; pro technické řešení systému pokračujte na <Link href="/vzduchotechnika" className="text-primary underline">vzduchotechniku čistých prostor</Link>.</p>
        </div>
        <ServiceCrossLink />
      </div>
    </main>
    <Footer />
  </div>
);

export default MereniValidace;
