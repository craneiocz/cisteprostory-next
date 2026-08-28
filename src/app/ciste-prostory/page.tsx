import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VisualShowcase from '@/components/VisualShowcase';
import PageSchema from '@/components/PageSchema';
import { createPageMetadata } from '@/lib/seo';
import { ArrowRight, CheckCircle2, Filter, Settings, Shield } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  path: '/ciste-prostory',
  title: 'Návrh a realizace čistých prostor | cisteprostory.eu',
  description:
    'Návrh a realizace čistých prostorů, laboratorních a laminárních boxů, izolátorů a HEPA filtrace podle procesu, ISO 14644 a EU GMP Annex 1.',
});

const designAreas = [
  ['01', Shield, 'Dispozice a povrchy', 'Rozvržení zón, dveří, prostupů, stropů, podlah a omyvatelných povrchů podle pohybu osob a materiálu.'],
  ['02', Filter, 'Filtrace a proudění', 'Výběr filtračních stupňů, distribučních prvků, průtoků a servisního přístupu k HEPA nebo ULPA filtrům.'],
  ['03', Settings, 'Regulace a tlakové kaskády', 'Nastavení směru proudění mezi zónami, regulace teploty a vlhkosti a řízení provozních stavů.'],
  ['04', CheckCircle2, 'Uvedení a ověření', 'Koordinace montáže, nastavení systému, měřicí plán, protokol a doporučení pro další provoz a údržbu.'],
] as const;

const solutionTypes = [
  ['A', 'Celý prostor', 'Pro provoz s řízeným vstupem, více pracovními místy a definovaným materiálovým tokem.'],
  ['B', 'Lokální ochrana', 'Laminární nebo laboratorní box pro situace, kdy je kritická pouze konkrétní operace.'],
  ['C', 'Bariérové řešení', 'Izolátor, RABS nebo kombinace zařízení pro oddělení procesu, produktu a obsluhy.'],
] as const;

const expertExtensions = [
  ['01', 'Zadání a rozpočet projektu', 'Které vstupy ovlivňují rozsah dodávky, investici a budoucí provozní náklady.', '/ciste-prostory/navrh-a-rozpocet'],
  ['02', 'Materiály, povrchy a dispozice', 'Jak propojit pohyb osob a materiálu s čistitelností, konstrukcemi a technologickými prostupy.', '/ciste-prostory/materialy-povrchy-a-dispozice'],
  ['03', 'Třída čistoty podle ISO 14644', 'Když se rozhoduje mezi celým prostorem a lokální ochranou, rozhoduje kritická operace, pohyb osob a způsob ověření.', '/ciste-prostory/jak-vybrat-tridu-cistoty-iso-14644'],
  ['04', 'Klidový stav a běžný provoz', 'Výsledek bez pracovníků nemusí popsat podmínky při skutečné práci. Podívejte se, co má být připravené před měřením.', '/ciste-prostory/mereni-v-klidovem-stavu-a-za-provozu'],
  ['05', 'HEPA filtr a počet částic', 'Počet částic v prostoru a těsnost filtru jsou dvě různé kontroly. Jejich správná návaznost určuje další servisní krok.', '/ciste-prostory/integrita-hepa-filtru-a-pocet-castic'],
] as const;

const deliverySteps = [
  ['01', 'Zadání', 'Účel prostoru, proces, kritická místa, požadovaná třída a provozní režim.'],
  ['02', 'Návrh', 'Dispozice, materiálový tok, povrchy, filtrace, tlakové poměry a regulace.'],
  ['03', 'Koordinace', 'Návaznost stavebních, elektro, vzduchotechnických a technologických profesí.'],
  ['04', 'Montáž a nastavení', 'Instalace, zaregulování, uvedení zařízení do provozu a zaškolení obsluhy.'],
  ['05', 'Ověření', 'Měření částic, tlaků, proudění, teploty, vlhkosti a integrity filtrů podle plánu.'],
] as const;

const faq = [
  ['Kolik stojí čistý prostor?', 'Cena závisí na třídě čistoty, ploše, procesu, površích, filtraci, regulaci a rozsahu dokumentace a měření. Smysluplná nabídka proto vychází z technického zadání, ne pouze z počtu metrů čtverečních.'],
  ['Jaké dokumenty bývají součástí dodávky?', 'Podle rozsahu projektu může jít o technický návrh, specifikaci zařízení, dokumentaci skutečného provedení, provozní podklady, záznamy z měření a validační protokol.'],
  ['Kdy je potřeba měření opakovat?', 'Interval se určuje podle třídy, rizikovosti provozu a interního plánu kontrol. Nové měření je vhodné také po zásahu do filtrace, regulace, dispozice nebo vzduchotechniky.'],
  ['Jak vybrat mezi čistým prostorem a boxem?', 'Rozhoduje rozsah kritických operací, počet pracovníků, požadované oddělení procesu a návaznost na okolní provoz. Při jedné chráněné operaci může být vhodné lokální zařízení; při více pracovištích a řízeném toku bývá účelnější celý prostor.'],
  ['Co se stane při změně procesu?', 'Změna zařízení, počtu pracovníků, materiálového toku nebo režimu úklidu může ovlivnit tlakové poměry, proudění i částicovou čistotu. Před změnou je vhodné posoudit dopad na projekt, provozní dokumentaci a rozsah následného měření.'],
] as const;

const CisteProstory = () => (
  <div className="min-h-screen bg-background">
    <PageSchema
      path="/ciste-prostory"
      title="Návrh a realizace čistých prostor"
      description="Návrh a realizace čistých prostorů, laboratorních boxů a HEPA filtrace s validací dle ISO 14644 a EU GMP Annex 1."
      serviceName="Čisté prostory"
      serviceDescription="Návrh, realizace a validace čistých prostorů pro farmacii, laboratoře, nemocnice a průmysl."
    />
    <Header />
    <section className="relative overflow-hidden bg-gradient-hero text-white" aria-label="Úvodní sekce - Čisté prostory">
      <div className="absolute -right-24 top-0 h-80 w-80 rounded-full border border-white/10" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full border border-white/10" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-8 lg:py-28">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/65">01 / Čisté prostory</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">Návrh a realizace čistých prostor podle procesu</h1>
        </div>
        <div className="border-l border-white/25 pl-6 lg:mb-2">
          <p className="text-lg leading-relaxed text-white/85">Navrhujeme řízené prostředí pro farmacii, laboratoře, zdravotnictví a přesnou výrobu. Propojujeme dispozici, povrchy, vzduchotechniku, HEPA nebo ULPA filtraci, uvedení do provozu a následné měření.</p>
          <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold">
            <Link href="/mereni-a-validace" className="inline-flex items-center gap-2 text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">Měření a validace <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
            <Link href="/vzduchotechnika" className="inline-flex items-center gap-2 text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">Vzduchotechnika <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </div>
    </section>

    <main>
      <section className="border-b border-border py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">02 / Kontext</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight text-foreground md:text-5xl">Co čistý prostor skutečně řídí</h2></div>
          <div className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
            <p>Čistý prostor je definované prostředí, ve kterém se podle účelu provozu řídí zejména koncentrace částic ve vzduchu. Součástí návrhu bývá také kontrola teploty, relativní vlhkosti, tlaku, proudění, materiálového toku a režimu vstupu osob.</p>
            <p className="mt-6">Cílem není vytvořit „sterilní místnost“ bez kontextu, ale stabilní podmínky pro konkrétní výrobní, laboratorní nebo zdravotnický proces. Řízené prostory se používají ve farmacii, nemocničních provozech, laboratořích, výrobě zdravotnických prostředků, elektronice i optice.</p>
            <div className="mt-8 border-l-2 border-primary pl-5 text-base text-foreground">Rozsah řešení se odvíjí od toho, zda chráníme produkt, pracovníka, pacienta nebo okolní prostředí.</div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">03 / Použití</p>
            <h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight text-foreground md:text-5xl">Čisté prostory pro konkrétní provoz</h2>
          </div>
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>Čisté prostory se uplatňují v laboratořích, operačních sálech i v dalších provozech, které vyžadují řízenou čistotu vzduchu. Patří sem například laminární boxy, digestoře, sterilizátory, termostaty, inkubátory, lednice, vzduchotechnické systémy, izolátory a další technologická zařízení.</p>
            <p>Čistý prostor je prostředí, ve kterém se řídí koncentrace částic ve vznosu a které je navrženo a provozováno tak, aby se zanášení, tvorba a zadržování částic uvnitř prostoru minimalizovaly. Podle účelu provozu se současně sleduje teplota, relativní vlhkost, tlak a proudění vzduchu. Právě souvislost těchto parametrů rozhoduje o tom, zda bude prostor stabilní při běžné práci, úklidu, změně směny i servisním zásahu.</p>
          </div>
        </div>
      </section>

      <section className="bg-accent/20 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">03 / Návrh</p><h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl">Čtyři části jednoho řešení</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">Dispozice, filtrace, regulace a ověření musí pracovat se stejným zadáním. Proto je posuzujeme jako propojený celek.</p></div>
          <div className="grid border-y border-border md:grid-cols-2">
            {designAreas.map(([number, Icon, title, text]) => <article key={number} className="border-b border-border p-7 last:border-b-0 md:even:border-l lg:p-10"><div className="flex items-start justify-between gap-6"><Icon className="h-8 w-8 text-primary" aria-hidden="true" /><span className="font-mono text-xs text-primary">{number}</span></div><h3 className="mt-8 text-2xl font-semibold text-foreground">{title}</h3><p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="border-b border-border py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">04 / Dodávka</p>
            <h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight text-foreground md:text-5xl">Vzduchotechnika a filtrace jako součást řešení</h2>
          </div>
          <div className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
            <p>Součástí dodávky může být návrh a montáž vzduchotechniky, filtračních stupňů i atypických filtrů připravených podle potřeb konkrétního zařízení. Navazujeme na uvedení systému do provozu, zaregulování a zpracování podkladů pro předání a kolaudaci. U stávajících provozů řešíme také opravy vzduchotechnických rozvodů a potrubí, výměnu filtrů, servis zařízení a konzultace k vzduchotechnice a klimatizaci.</p>
            <p className="mt-6">Rozsah prací se určuje podle technického stavu, požadované třídy čistoty, provozního režimu a návaznosti na měření. Díky tomu lze oddělit skutečně potřebné zásahy od činností, které by pouze zvyšovaly investiční nebo provozní náklady.</p>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-20 text-background lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary-light">05 / Klasifikace</p><h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">Třídy čistoty podle ISO 14644</h2></div>
          <div className="max-w-3xl text-lg leading-relaxed text-background/70"><p>ISO 14644-1 klasifikuje čistotu vzduchu podle koncentrace částic ve stanovených velikostech. Třídy ISO 1 až ISO 9 představují různé úrovně kontroly; vhodná třída se nevolí podle marketingového označení, ale podle citlivosti procesu, produktu a provozního stavu.</p><p className="mt-6">Klasifikace může být posuzována v klidovém stavu i za provozu, pokud to vyžaduje zadání nebo validační plán. Ve farmaceutických provozech se technické požadavky dále propojují s EU GMP Annex 1, který je potřeba převést do konkrétní dispozice, filtrace, provozních postupů, měření a dokumentace.</p><Link href="/pocet-castic-iso-14644" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary-light underline underline-offset-4 hover:text-white">Jak se měří počet částic <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="border-b border-border py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">06 / Volba řešení</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Celý prostor, lokální ochrana nebo kombinace</h2></div><div><div className="grid border-y border-border md:grid-cols-3">{solutionTypes.map(([number, title, text]) => <article key={number} className="border-b border-border p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-8"><span className="font-mono text-sm text-primary">{number}</span><h3 className="mt-8 text-xl font-semibold text-foreground">{title}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{text}</p></article>)}</div><p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">Při volbě řešení se posuzuje také četnost otevřených operací, počet pracovníků, velikost zařízení, způsob čištění a požadavky na předávání materiálu. Součástí návrhu mohou být laboratorní boxy, laminární boxy, izolátory, RABS, pass boxy a další technologická zařízení.</p></div></div></div>
      </section>

      <section className="bg-accent/20 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">07 / Realizace</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Od zadání k ověřenému provozu</h2><p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">Prostor musí fungovat nejen po dokončení montáže, ale také při běžném provozu, údržbě a následných kontrolách.</p></div><ol className="border-t border-border">{deliverySteps.map(([number, title, text]) => <li key={number} className="grid gap-4 border-b border-border py-6 sm:grid-cols-[4rem_12rem_1fr] sm:items-baseline"><span className="font-mono text-sm text-primary">{number}</span><strong className="text-lg text-foreground">{title}</strong><span className="leading-relaxed text-muted-foreground">{text}</span></li>)}</ol></div>
      </section>

      <section className="border-b border-border py-20 lg:py-28" aria-labelledby="odborne-rozsireni-ciste-prostory">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">08 / Navazující informace</p>
              <h2 id="odborne-rozsireni-ciste-prostory" className="mt-5 max-w-md text-3xl font-bold tracking-tight text-foreground md:text-5xl">Rozhodnutí, která ovlivní provoz</h2>
            </div>
            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">Některé otázky se nedají zodpovědět jedním parametrem. V navazujících podsekcích popisujeme konkrétní situace z návrhu, měření a servisu tak, aby bylo zřejmé, co si připravit a jaký bude další krok.</p>
          </div>
          <div className="mt-12 grid border-y border-border md:grid-cols-2 lg:grid-cols-5">
            {expertExtensions.map(([number, title, text, href]) => (
              <Link key={href} href={href} className="group border-b border-border p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-9">
                <div className="flex items-start justify-between gap-4"><span className="font-mono text-xs text-primary">{number}</span><ArrowRight className="h-5 w-5 text-primary transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" /></div>
                <h3 className="mt-10 text-xl font-semibold leading-snug text-foreground group-hover:text-primary">{title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">{text}</p>
                <span className="mt-6 inline-block text-sm font-semibold text-primary underline decoration-primary/40 underline-offset-4">Přejít na podsekci</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <VisualShowcase />

      <section className="border-b border-border py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">08 / Výstupy</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Co má obsahovat dobře připravená dodávka</h2></div><div><ul className="grid gap-4 sm:grid-cols-2">{['Technický návrh dispozice a proudění vzduchu.', 'Specifikace povrchů, dveří, stropů, podlah a prostupů.', 'Návrh filtrace, regulace a tlakových kaskád.', 'Koordinace montáže a uvedení zařízení do provozu.', 'Měřicí plán, záznamy a vyhodnocení limitů.', 'Doporučení pro provoz, údržbu a opakované kontroly.'].map((item) => <li key={item} className="flex gap-3 border-t border-border pt-4 leading-relaxed text-muted-foreground"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" /><span>{item}</span></li>)}</ul><p className="mt-10 max-w-3xl text-lg leading-relaxed text-muted-foreground">Podrobnější rozsah najdete na stránce <Link href="/mereni-a-validace" className="font-semibold text-primary underline underline-offset-4">měření a validace</Link>. Informace o filtraci a tlakových poměrech navazují na stránku <Link href="/vzduchotechnika" className="font-semibold text-primary underline underline-offset-4">vzduchotechniky čistých prostor</Link>.</p></div></div></section>

      <section className="bg-accent/20 py-20 lg:py-28" aria-labelledby="ciste-prostory-faq"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">09 / Otázky</p><h2 id="ciste-prostory-faq" className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">Časté otázky k čistým prostorům</h2><div className="mt-10 border-t border-border">{faq.map(([question, answer]) => <details key={question} className="group border-b border-border"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-semibold text-foreground marker:hidden">{question}<span className="text-2xl font-light text-primary transition-transform group-open:rotate-45" aria-hidden="true">+</span></summary><p className="max-w-3xl pb-6 pr-10 leading-relaxed text-muted-foreground">{answer}</p></details>)}</div></div></section>
    </main>
    <Footer />
  </div>
);

export default CisteProstory;
