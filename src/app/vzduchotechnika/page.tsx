import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSchema from '@/components/PageSchema';
import ServiceCrossLink from '@/components/ServiceCrossLink';
import ServiceHero from '@/components/ServiceHero';
import GuideLinks from '@/components/GuideLinks';
import { Droplets, Shield, Thermometer, Wind, CheckCircle2 } from 'lucide-react';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  path: '/vzduchotechnika',
  title: 'Vzduchotechnika čistých prostor a HEPA filtrace | cisteprostory.eu',
  description: 'Návrh, montáž a servis vzduchotechniky čistých prostor s HEPA a ULPA filtrací, tlakovými kaskádami, regulací teploty, vlhkosti a proudění.',
});

const systemParts = [
  ['01', Wind, 'Přívod, odvod a filtrace', 'Návrh proudění a filtračních stupňů od předfiltrace po HEPA nebo ULPA filtraci podle zatížení a požadované čistoty.'],
  ['02', Thermometer, 'Teplota a stabilita', 'Regulace teploty s ohledem na proces, zařízení, materiál a podmínky, ve kterých se provádí měření.'],
  ['03', Droplets, 'Vlhkost', 'Zvlhčování, odvlhčování a kontrola relativní vlhkosti tam, kde ovlivňuje proces, materiál nebo pracovní podmínky.'],
  ['04', Shield, 'Tlakové kaskády', 'Nastavení směru proudění mezi zónami a podklad pro měření tlakových rozdílů v klidovém i provozním režimu.'],
] as const;

const delivery = [
  ['01', 'Návrh', 'Technické zadání, dispoziční řešení, průtoky, filtrace, regulace a tlakové poměry.'],
  ['02', 'Montáž', 'Koordinace rozvodů, filtračních skříní, koncových prvků a návazných profesí.'],
  ['03', 'Zaregulování', 'Nastavení průtoků, tlaků, teploty a vlhkosti podle provozního zadání.'],
  ['04', 'Ověření', 'Měření částic, proudění, tlaků, parametrů vzduchu a integrity filtrace.'],
  ['05', 'Servis', 'Plán údržby, výměny filtrů, kontrola zařízení a záznamy o provedených zásazích.'],
] as const;

const Vzduchotechnika = () => (
  <div className="min-h-screen bg-background">
    <PageSchema
      path="/vzduchotechnika"
      title="Vzduchotechnika čistých prostor a HEPA filtrace"
      description="Návrh, montáž a servis vzduchotechniky s filtrací, regulací a tlakovými kaskádami podle účelu čistého prostoru."
      serviceName="Vzduchotechnika čistých prostor"
      serviceDescription="Přívod, odvod, filtrace a regulace vzduchu pro kontrolované prostředí a návazné měření."
    />
    <Header />
    <ServiceHero eyebrow="02 / Vzduchotechnika" title="Vzduchotechnika čistých prostor a HEPA filtrace" description="Stabilní proudění, vhodná filtrace a regulace parametrů vzduchu podle konkrétního procesu." links={[{ href: '/integrita-hepa-filtru', label: 'Test integrity HEPA filtrů' }, { href: '/servis', label: 'Servis a údržba' }]} />
    <main>
      <section className="border-b border-border py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">03 / Systém</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Vzduchotechnika není pouze výměna vzduchu</h2></div><div className="max-w-3xl text-lg leading-relaxed text-muted-foreground"><p>V čistém prostoru vzduchotechnika ovlivňuje koncentraci částic, tlak mezi zónami, teplotu, relativní vlhkost i podmínky práce. Systém musí současně umožnit údržbu, kontrolu filtrů a stabilní provoz v režimech, ve kterých se prostor klasifikuje nebo validuje.</p><p className="mt-6">Návrh vychází z dispozice, materiálového toku, počtu pracovníků, zdrojů částic, požadované třídy čistoty a charakteru procesu. Teprve podle těchto údajů se volí průtoky, distribuční prvky, filtrační stupně, výkon regulace a způsob odvádění vzduchu.</p></div></div></section>
      <section className="bg-accent/20 py-20 lg:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">04 / Parametry</p><h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">Čtyři části řízeného vzduchu</h2></div><div className="grid border-y border-border md:grid-cols-2">{systemParts.map(([number, Icon, title, text]) => <article key={number} className="border-b border-border p-7 md:even:border-l lg:p-10"><div className="flex items-start justify-between"><Icon className="h-8 w-8 text-primary" aria-hidden="true" /><span className="font-mono text-xs text-primary">{number}</span></div><h3 className="mt-8 text-2xl font-semibold">{title}</h3><p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{text}</p></article>)}</div></div></section>
      <section className="bg-foreground py-20 text-background lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary-light">05 / Filtrace</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">HEPA a ULPA filtrace v celém systému</h2></div><div className="max-w-3xl text-lg leading-relaxed text-background/70"><p>HEPA a ULPA filtry tvoří jeden článek celého systému, ne samostatné řešení. Jejich účinnost musí odpovídat požadavku procesu a jejich uložení musí umožnit kontrolu těsnosti, výměnu a servis.</p><p className="mt-6">Klasifikace a zkoušení filtrů se vztahují k normám EN 1822 a ISO 29463. Konkrétní typ filtru, průtok a výměnný interval je potřeba určit podle zařízení, zátěže, tlakové ztráty a servisního plánu.</p><Link href="/integrita-hepa-filtru" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary-light underline underline-offset-4 hover:text-white">Jak se ověřuje integrita filtru <span aria-hidden="true">→</span></Link></div></div></section>
      <section className="bg-accent/20 py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">06 / Dodávka</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Návrh, montáž, regulace a servis</h2></div><ol className="border-t border-border">{delivery.map(([number, title, text]) => <li key={number} className="grid gap-4 border-b border-border py-6 sm:grid-cols-[4rem_12rem_1fr] sm:items-baseline"><span className="font-mono text-sm text-primary">{number}</span><strong className="text-lg">{title}</strong><span className="leading-relaxed text-muted-foreground">{text}</span></li>)}</ol></div></section>
      <section className="border-b border-border py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">07 / Provoz</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Provozní náklady a servisní přístup</h2></div><div className="max-w-3xl text-lg leading-relaxed text-muted-foreground"><p>Provozní náklady neovlivňuje pouze výkon ventilátoru. Roli hraje tlaková ztráta filtrů, počet výměn vzduchu, režim provozu, regulace, dostupnost servisních míst a nastavení teploty a vlhkosti.</p><p className="mt-6">Před výměnou HEPA filtru je vhodné ověřit typ, rozměr, těsnění, uložení a požadované parametry. Po zásahu může následovat test integrity a kontrolní měření podle toho, co bylo změněno. Více o servisních činnostech najdete na stránce <Link href="/servis" className="font-semibold text-primary underline underline-offset-4">servis čistých prostor</Link>.</p></div></div></section>
      <section className="py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">08 / Zadání</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Co připravit pro technický návrh</h2></div><ul className="grid gap-4 sm:grid-cols-2">{['Účel prostoru, proces a zdroje částic.', 'Požadovaná třída čistoty a provozní stavy.', 'Teplota, vlhkost, tlakové rozdíly a materiálový tok.', 'Typ filtrace, regulace a přístup pro výměnu.', 'Rozsah měření při uvedení do provozu a při kontrolách.'].map((item) => <li key={item} className="flex gap-3 border-t border-border pt-4 leading-relaxed text-muted-foreground"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />{item}</li>)}</ul></div></section>
      <GuideLinks
        title="Tlakové vazby a proudění jako jeden systém"
        description="Průvodce propojuje bilanci vzduchu, otevírání dveří, tlakové ztráty a ověření reálného provozního stavu."
        links={[
          { href: '/vzduchotechnika/tlakova-kaskada-a-proudeni', title: 'Tlaková kaskáda a proudění', text: 'Návrh směru proudění, regulace, regenerace a reakcí při provozní změně.' },
          { href: '/ciste-prostory/materialy-povrchy-a-dispozice', title: 'Dispozice a prostupy', text: 'Návaznost vzduchotěsné obálky na dveře, povrchy a technologické instalace.' },
        ]}
      />
    </main>
    <ServiceCrossLink />
    <Footer />
  </div>
);

export default Vzduchotechnika;
