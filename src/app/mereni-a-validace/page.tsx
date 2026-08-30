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
  title: 'Validace čistých prostor a měření | cisteprostory.eu',
  description: 'Validace čistých prostor: měření částic, tlaků, proudění a integrity HEPA filtrů, kvalifikace IQ/OQ/PQ a protokol podle ISO 14644.',
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

const preparationItems = [
  'Typ a účel prostoru, boxu, izolátoru nebo filtračního systému.',
  'Požadovaná klasifikace a předpisy platné pro konkrétní provoz.',
  'Provozní stav při měření, počet pracovníků a používané zařízení.',
  'Půdorys, vzduchotechnické schéma a dostupná technická dokumentace.',
  'Předchozí protokoly, servisní zásahy, změny procesu a známé odchylky.',
] as const;

const validationFaq = [
  ['Co je validace čistých prostor?', 'Validace čistých prostor je plánované ověření, zda prostor, jeho technické systémy a provozní podmínky splňují předem stanovené požadavky. Rozsah může spojovat kvalifikační kroky, několik druhů měření a vyhodnocení v jednom dokumentovaném celku.'],
  ['Jaký je rozdíl mezi validací a měřením částic?', 'Měření počtu částic je jedna konkrétní zkouška. Validace může zahrnovat také tlakové rozdíly, proudění, teplotu, vlhkost, integritu filtrů, kontrolu dokumentace a návaznost na IQ, OQ nebo PQ.'],
  ['Kdy se provádí revalidace?', 'Opakované ověření vychází z plánu kontrol a posouzení rizika. Potřebu revalidace může vyvolat také výměna filtru, zásah do vzduchotechniky, změna dispozice, procesu, zařízení nebo provozního režimu.'],
  ['Jaké podklady jsou potřeba před měřením?', 'Připravte účel prostoru, požadovanou klasifikaci, půdorys, provozní stav, seznam zařízení a dostupné předchozí protokoly. Konkrétní rozsah podkladů se potvrdí při přípravě měřicího plánu.'],
  ['Jaké dokumenty jsou součástí výstupu?', 'Výstup odpovídá sjednanému rozsahu. Obsahuje identifikaci měřeného prostoru, podmínky a metody, použitá měřidla, naměřené hodnoty, vyhodnocení, odchylky a závěr.'],
] as const;

const MereniValidace = () => (
  <div className="min-h-screen bg-background">
    <PageSchema
      path="/mereni-a-validace"
      title="Validace čistých prostor a měření podle ISO 14644"
      description="Měřicí plán, kvalifikační zkoušky a protokol pro ověření čistého prostoru podle ISO 14644 a provozního zadání."
      serviceName="Validace čistých prostor a měření"
      serviceDescription="Měření, kvalifikační zkoušky a protokol podle ISO 14644 a konkrétního provozního zadání."
      dateModified="2026-08-30"
    />
    <Header />
    <ServiceHero eyebrow="02 / Validace a měření" title="Validace čistých prostor a měření podle ISO 14644" description="Validace čistých prostor spojuje měřicí plán, kvalifikační zkoušky a protokol. Rozsah stanovujeme podle klasifikace prostoru, provozního stavu a konkrétního procesu." links={[{ href: '/pocet-castic-iso-14644', label: 'Počet částic podle ISO 14644' }, { href: '/integrita-hepa-filtru', label: 'Integrita HEPA filtrů' }]} />
    <main>
      <section className="border-b border-border py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">03 / Rozsah</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Co znamená validace čistých prostor</h2></div><div className="max-w-3xl text-lg leading-relaxed text-muted-foreground"><p>Validace není název jednoho měření. Jde o dokumentovaný postup, který propojuje požadavky, měřicí plán, zkoušky, akceptační kritéria a vyhodnocení výsledků pro konkrétní prostor a proces.</p><p className="mt-6">Jednotlivé měření ověřuje vybraný parametr v daném okamžiku. Validace skládá potřebná měření a kvalifikační kroky do celku, ze kterého je zřejmé, co se ověřovalo, za jakých podmínek a s jakým výsledkem.</p></div></div></section>

      <section className="bg-accent/20 py-20 lg:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">04 / Zkoušky</p><h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">Co může validace čistých prostor zahrnovat</h2></div><div className="grid border-y border-border md:grid-cols-2 lg:grid-cols-3">{parameters.map(([title, text], index) => <article key={title} className="border-b border-border p-7 md:even:border-l lg:p-9"><span className="font-mono text-xs text-primary">0{index + 1}</span><h3 className="mt-6 text-xl font-semibold text-foreground">{title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{text}</p></article>)}</div></div></section>

      <section className="py-20 lg:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">05 / Kvalifikace</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Rozdíl mezi IQ, OQ a PQ</h2></div><div className="grid border-y border-border md:grid-cols-3">{qualifications.map(([short, Icon, title, text]) => <article key={short} className="border-b border-border p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-8"><Icon className="h-8 w-8 text-primary" aria-hidden="true" /><span className="mt-8 block font-mono text-xs text-primary">{short}</span><h3 className="mt-3 text-xl font-semibold text-foreground">{title}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{text}</p></article>)}</div></div><p className="mt-8 max-w-3xl text-muted-foreground">Podrobnou návaznost jednotlivých fází popisuje průvodce <Link href="/mereni-a-validace/iq-oq-pq" className="font-semibold text-primary underline underline-offset-4">kvalifikací IQ, OQ a PQ</Link>.</p></div></section>

      <section className="bg-foreground py-20 text-background lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary-light">06 / Postup</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Od měřicího plánu k validačnímu protokolu</h2><p className="mt-6 max-w-md text-lg leading-relaxed text-background/70">Podmínky, kritéria a odpovědnosti se stanoví před zahájením zkoušek.</p></div><ol className="border-t border-background/20">{validationSteps.map(([number, title, text]) => <li key={number} className="grid gap-4 border-b border-background/20 py-6 sm:grid-cols-[4rem_12rem_1fr] sm:items-baseline"><span className="font-mono text-sm text-primary-light">{number}</span><strong className="text-lg">{title}</strong><span className="leading-relaxed text-background/70">{text}</span></li>)}</ol></div></section>

      <section className="border-b border-border py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">07 / Termín kontroly</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">První validace, revalidace a ověření po změně</h2></div><div className="max-w-3xl text-lg leading-relaxed text-muted-foreground"><p>První validační nebo kvalifikační kroky navazují na instalaci, zaregulování a uvedení systému do provozu. Jejich rozsah vychází ze schváleného zadání a zamýšleného způsobu použití.</p><p className="mt-6">Revalidace se plánuje podle požadavků provozu a rizika. Mimo plánovaný interval se rozsah nového ověření posuzuje po zásahu do filtrace nebo vzduchotechniky, změně dispozice, zařízení, procesu či počtu pracovníků.</p><Link href="/mereni-a-validace/revalidace-a-intervaly" className="mt-7 inline-flex font-semibold text-primary underline underline-offset-4">Jak stanovit rozsah revalidace</Link></div></div></section>

      <section className="bg-accent/20 py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">08 / Příprava</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Co připravit před měřením</h2><p className="mt-6 max-w-md leading-relaxed text-muted-foreground">Podklady umožní určit rozsah zkoušek, provozní stav a návaznost na předchozí výsledky.</p></div><ul className="grid gap-4 sm:grid-cols-2">{preparationItems.map((item) => <li key={item} className="flex gap-3 border-t border-border pt-4 leading-relaxed text-muted-foreground"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" /><span>{item}</span></li>)}</ul></div></section>

      <section className="border-b border-border py-20 lg:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><ValidationVisual /><div className="mt-16 grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">09 / Výstup</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Jaké dokumenty dostanete</h2></div><ul className="grid gap-4 sm:grid-cols-2">{['Identifikace prostoru, zóny, zařízení a provozního stavu.', 'Měřicí body, zkoušky, použité metody a dohodnutá kritéria.', 'Použitá měřidla, jejich identifikace a podmínky měření.', 'Naměřené hodnoty, vyhodnocení shody a popis odchylek.', 'Doporučení k nápravě, údržbě nebo opakované kontrole.'].map((item) => <li key={item} className="flex gap-3 border-t border-border pt-4 leading-relaxed text-muted-foreground"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />{item}</li>)}</ul></div><div className="mt-16 grid gap-12 border-t border-border pt-16 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">10 / Odchylky</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Jak se vyhodnocuje nevyhovující výsledek</h2></div><div className="max-w-3xl text-lg leading-relaxed text-muted-foreground"><p>Odchylka se porovná s podmínkami zkoušky, provozním stavem, historií zařízení a ostatními naměřenými parametry. Příčinou může být filtrace, regulace, proudění, stav dveří, činnost obsluhy nebo nesplněná podmínka měřicího plánu.</p><p className="mt-6">Protokol odděluje naměřenou hodnotu od technického posouzení. Navazující krok může zahrnovat kontrolu zařízení, servis, úpravu regulace nebo opakování vybrané zkoušky po odstranění příčiny.</p></div></div></div></section>

      <section className="bg-accent/20 py-20 lg:py-28" aria-labelledby="validace-faq"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">11 / Otázky</p><h2 id="validace-faq" className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">Časté otázky k validaci čistých prostor</h2><div className="mt-10 border-t border-border">{validationFaq.map(([question, answer]) => <details key={question} className="group border-b border-border"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-semibold marker:hidden">{question}<span className="text-2xl font-light text-primary transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><p className="max-w-3xl pb-6 pr-10 leading-relaxed text-muted-foreground">{answer}</p></details>)}</div><p className="mt-8 leading-relaxed text-muted-foreground">Na test integrity navazuje <Link href="/integrita-hepa-filtru" className="font-semibold text-primary underline underline-offset-4">samostatná stránka o HEPA filtrech</Link>; pro technické řešení systému pokračujte na <Link href="/vzduchotechnika" className="font-semibold text-primary underline underline-offset-4">vzduchotechniku čistých prostor</Link>.</p></div></section>
      <section className="border-b border-border py-16" aria-labelledby="odborne-mereni">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">Navazující informace</p>
          <h2 id="odborne-mereni" className="mt-4 text-3xl font-bold tracking-tight text-foreground">Když se měření liší mezi klidem a provozem</h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">Praktický průchod přípravou měření, volbou provozních podmínek a návazností na protokol najdete v <Link href="/ciste-prostory/mereni-v-klidovem-stavu-a-za-provozu" className="font-semibold text-primary underline underline-offset-4">průvodci měřením v klidovém stavu a za provozu</Link>.</p>
        </div>
      </section>
      <section className="border-b border-border py-16" aria-labelledby="validace-zdroje">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">12 / Zdroje a souvislosti</p>
          <h2 id="validace-zdroje" className="mt-4 text-3xl font-bold tracking-tight text-foreground">Primární podklady pro stanovení rozsahu</h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">Konkrétní požadavky se určují podle použitelného předpisu, provozu a schváleného zadání. Základní rámec poskytuje <a href="https://www.iso.org/standard/53394.html" target="_blank" rel="noreferrer" className="font-semibold text-primary underline underline-offset-4">ISO 14644-1</a> a pro farmaceutickou kvalifikaci také <a href="https://sukl.gov.cz/pokyny-ustavu/pokyny-vyroba-leciv/vyr-32-doplnek-15-verze-1/" target="_blank" rel="noreferrer" className="font-semibold text-primary underline underline-offset-4">SÚKL VYR-32, doplněk 15</a>.</p>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">Pokud se připravuje nový provoz, navazuje validace na <Link href="/ciste-prostory" className="font-semibold text-primary underline underline-offset-4">návrh a realizaci čistých prostor</Link>.</p>
        </div>
      </section>
      <section className="bg-foreground py-20 text-background" aria-labelledby="poptat-validaci">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary-light">13 / Poptávka</p><h2 id="poptat-validaci" className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">Poptat validaci čistých prostor</h2><p className="mt-5 max-w-3xl text-lg leading-relaxed text-background/70">Uveďte typ a účel prostoru, požadovanou klasifikaci, provozní stav, rozsah měření a dostupnou dokumentaci. Podle těchto vstupů připravíme rozsah měřicího plánu a výstupů.</p></div>
          <Link href="/#kontakt" className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-7 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-dark">Poptat validaci čistých prostor</Link>
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
