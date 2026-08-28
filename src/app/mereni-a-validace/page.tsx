import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ValidationVisual from '@/components/ValidationVisual';
import PageSchema from '@/components/PageSchema';
import ServiceCrossLink from '@/components/ServiceCrossLink';
import ServiceHero from '@/components/ServiceHero';
import GuideLinks from '@/components/GuideLinks';
import { Award, ClipboardCheck, Gauge, CheckCircle2 } from 'lucide-react';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  path: '/mereni-a-validace',
  title: 'Měření a validace čistých prostor | cisteprostory.eu',
  description: 'Měření částic, tlakových rozdílů, proudění, teploty, vlhkosti a integrity HEPA filtrů podle ISO 14644, EU GMP Annex 1 a sjednaného měřicího plánu.',
});

const parameters = [
  ['Částice', 'Klasifikace čistoty ve stanovených bodech a provozních stavech.'],
  ['Tlakové rozdíly', 'Ověření směru proudění mezi zónami a funkce tlakové kaskády.'],
  ['Proudění vzduchu', 'Kontrola rychlosti, směru nebo rovnoměrnosti podle zařízení.'],
  ['Teplota a vlhkost', 'Parametry důležité pro proces, materiál, obsluhu a stabilitu prostředí.'],
  ['Integrita filtrace', 'Ověření HEPA nebo ULPA média, rámu, těsnění a uložení.'],
] as const;

const qualifications = [
  ['IQ', ClipboardCheck, 'Installation Qualification', 'Ověření, že zařízení, komponenty, připojení a dokumentace odpovídají schválenému technickému zadání a požadavkům výrobce.'],
  ['OQ', Gauge, 'Operational Qualification', 'Ověření chování zařízení v definovaných provozních režimech a rozsazích, například při změně regulace nebo zatížení.'],
  ['PQ', Award, 'Performance Qualification', 'Ověření, zda prostor nebo zařízení opakovaně dosahují požadovaných parametrů v běžném provozu.'],
] as const;

const validationSteps = [
  ['01', 'Zadání', 'Účel prostoru, klasifikace, provozní stav a požadované parametry.'],
  ['02', 'Měřicí plán', 'Body, limity, referenční velikosti částic, metodika a podmínky.'],
  ['03', 'Zkoušky', 'Měření částic, tlaků, proudění, parametrů vzduchu a integrity filtrace.'],
  ['04', 'Vyhodnocení', 'Porovnání výsledků s limity a posouzení případných odchylek.'],
  ['05', 'Protokol', 'Závěr, záznamy, doporučení a podklad pro provoz nebo další zásah.'],
] as const;

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
    <ServiceHero eyebrow="02 / Měření a validace" title="Měření a validace čistých prostor" description="Přesné hodnoty mají význam až ve chvíli, kdy je jasné, co znamenají pro provoz, údržbu a audit." links={[{ href: '/pocet-castic-iso-14644', label: 'Počet částic podle ISO 14644' }, { href: '/integrita-hepa-filtru', label: 'Integrita HEPA filtrů' }]} />
    <main>
      <section className="border-b border-border py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">03 / Kontext</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Měření zasazené do provozního kontextu</h2></div><div className="max-w-3xl text-lg leading-relaxed text-muted-foreground"><p>Měření čistých prostorů, laboratorních boxů, izolátorů a filtračních systémů připravujeme podle účelu zařízení a požadované třídy čistoty. Před samotnou zkouškou je potřeba znát provozní stav, měřené zóny, počet bodů, velikosti částic, limity a návaznost na další kvalifikační kroky.</p><p className="mt-6">Podle zadání se posuzují částice, tlakové rozdíly, rychlost a směr proudění, teplota, relativní vlhkost, integrita HEPA filtrů a další parametry. Výsledkem není pouze tabulka čísel, ale protokol, který popisuje podmínky měření, použitou metodiku, naměřené hodnoty, limity a vyhodnocení.</p></div></div></section>

      <section className="bg-accent/20 py-20 lg:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">04 / Parametry</p><h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">Co se při validaci sleduje</h2></div><div className="grid border-y border-border md:grid-cols-2 lg:grid-cols-3">{parameters.map(([title, text], index) => <article key={title} className="border-b border-border p-7 md:even:border-l lg:p-9"><span className="font-mono text-xs text-primary">0{index + 1}</span><h3 className="mt-6 text-xl font-semibold text-foreground">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></article>)}</div></div></section>

      <section className="py-20 lg:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">05 / Kvalifikace</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">IQ, OQ a PQ v praxi</h2></div><div className="grid border-y border-border md:grid-cols-3">{qualifications.map(([short, Icon, title, text]) => <article key={short} className="border-b border-border p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-8"><Icon className="h-8 w-8 text-primary" aria-hidden="true" /><span className="mt-8 block font-mono text-xs text-primary">{short}</span><h3 className="mt-3 text-xl font-semibold text-foreground">{title}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{text}</p></article>)}</div></div></div></section>

      <section className="bg-foreground py-20 text-background lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary-light">06 / Ověření</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Od měřicího plánu k protokolu</h2><p className="mt-6 max-w-md text-lg leading-relaxed text-background/70">Každý výsledek musí být čitelný pro technika, provoz i audit.</p></div><ol className="border-t border-background/20">{validationSteps.map(([number, title, text]) => <li key={number} className="grid gap-4 border-b border-background/20 py-6 sm:grid-cols-[4rem_12rem_1fr] sm:items-baseline"><span className="font-mono text-sm text-primary-light">{number}</span><strong className="text-lg">{title}</strong><span className="leading-relaxed text-background/70">{text}</span></li>)}</ol></div></section>

      <section className="border-b border-border py-20 lg:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><ValidationVisual /><div className="mt-16 grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">07 / Výstup</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Co obsahuje měřicí plán a protokol</h2></div><ul className="grid gap-4 sm:grid-cols-2">{['Identifikace prostoru, zóny, zařízení a provozního stavu.', 'Měřicí body, referenční velikosti částic a požadované limity.', 'Použité přístroje, kalibrace, podmínky a metodika.', 'Naměřené hodnoty, vyhodnocení shody a popis odchylek.', 'Doporučení k nápravě, údržbě nebo opakované kontrole.'].map((item) => <li key={item} className="flex gap-3 border-t border-border pt-4 leading-relaxed text-muted-foreground"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />{item}</li>)}</ul></div></div></section>

      <section className="bg-accent/20 py-20 lg:py-28"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">08 / Otázky</p><h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">Časté otázky k validaci</h2><div className="mt-10 border-t border-border">{[['Je validace totéž co měření počtu částic?', 'Ne. Počet částic je jedna z důležitých zkoušek. Validace může zahrnovat také tlak, proudění, teplotu, vlhkost, integritu filtrů a další parametry podle účelu prostoru.'], ['Jak se určuje počet měřicích bodů?', 'Počet a rozmístění bodů se odvíjí od plochy, členění prostoru, klasifikace a použité metodiky. Konkrétní plán se stanovuje před měřením a zapisuje do protokolu.'], ['Co když výsledek nevyhoví?', 'Odchylku je potřeba zasadit do kontextu: může souviset s filtrem, regulací, provozním stavem, pohybem osob nebo měřicí metodikou. Další postup se navrhne podle příčiny, ne pouze podle jedné hodnoty.']].map(([question, answer]) => <details key={question} className="group border-b border-border"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-semibold marker:hidden">{question}<span className="text-2xl font-light text-primary transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><p className="max-w-3xl pb-6 pr-10 leading-relaxed text-muted-foreground">{answer}</p></details>)}</div><p className="mt-8 leading-relaxed text-muted-foreground">Na test integrity navazuje <Link href="/integrita-hepa-filtru" className="font-semibold text-primary underline underline-offset-4">samostatná stránka o HEPA filtrech</Link>; pro technické řešení systému pokračujte na <Link href="/vzduchotechnika" className="font-semibold text-primary underline underline-offset-4">vzduchotechniku čistých prostor</Link>.</p></div></section>
      <section className="border-b border-border py-16" aria-labelledby="odborne-mereni">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">Navazující informace</p>
          <h2 id="odborne-mereni" className="mt-4 text-3xl font-bold tracking-tight text-foreground">Když se měření liší mezi klidem a provozem</h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">Praktický průchod přípravou měření, volbou provozních podmínek a návazností na protokol najdete v <Link href="/ciste-prostory/mereni-v-klidovem-stavu-a-za-provozu" className="font-semibold text-primary underline underline-offset-4">průvodci měřením v klidovém stavu a za provozu</Link>.</p>
        </div>
      </section>
      <GuideLinks
        title="Kvalifikace a další kontroly v souvislostech"
        description="Samostatné průvodce rozdělují kvalifikační fáze a rozhodování o opakovaných kontrolách podle změn a provozního rizika."
        links={[
          { href: '/mereni-a-validace/iq-oq-pq', title: 'IQ, OQ a PQ', text: 'Rozdíly mezi instalací, provozní funkcí a výkonem při skutečném použití.' },
          { href: '/mereni-a-validace/revalidace-a-intervaly', title: 'Revalidace a intervaly', text: 'Kdy kontrolu zopakovat a jak určit rozsah po změně procesu nebo zařízení.' },
        ]}
      />
    </main>
    <ServiceCrossLink />
    <Footer />
  </div>
);

export default MereniValidace;
