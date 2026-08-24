import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSchema from '@/components/PageSchema';
import ServiceCrossLink from '@/components/ServiceCrossLink';
import ServiceHero from '@/components/ServiceHero';
import { CheckCircle2, Gauge, ListChecks } from 'lucide-react';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({ path: '/pocet-castic-iso-14644', title: 'Měření počtu částic podle ISO 14644-1 | cisteprostory.eu', description: 'Měření koncentrace částic a klasifikace čistoty vzduchu podle ISO 14644-1 pro čisté prostory, laminární boxy a izolátory.' });

const classes = [
  ['ISO 1–3', 'Nejpřísnější prostředí pro vysoce citlivé procesy a specializovanou výrobu. Konkrétní použití určuje procesní zadání.'],
  ['ISO 4–5', 'Kritická pracovní místa, laminární proudění a operace s vysokými nároky na koncentraci částic.'],
  ['ISO 6–7', 'Přípravné a podpůrné zóny, laboratoře a výroba podle citlivosti procesu a režimu provozu.'],
  ['ISO 8–9', 'Přechodové, podpůrné a výrobní prostory s řízenou, ale méně přísnou koncentrací částic.'],
] as const;

const PocetCasticIso14644 = () => (
  <div className="min-h-screen bg-background">
    <PageSchema
      path="/pocet-castic-iso-14644"
      title="Měření počtu částic podle ISO 14644-1"
      description="Měření koncentrace částic a klasifikace čistoty vzduchu podle ISO 14644-1 v čistých prostorech, boxech a izolátorech."
      serviceName="Měření počtu částic"
      serviceDescription="Klasifikace čistoty vzduchu podle měřicího plánu a provozního stavu zařízení."
    />
    <Header />
    <ServiceHero eyebrow="02 / ISO 14644" title="Měření počtu částic podle ISO 14644-1" description="Klasifikace čistoty vzduchu podle koncentrace částic v definovaných bodech a provozních podmínkách." links={[{ href: '/mereni-a-validace', label: 'Kompletní měření a validace' }, { href: '/integrita-hepa-filtru', label: 'Integrita HEPA filtrů' }]} />
    <main>
      <section className="border-b border-border py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">03 / Význam</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Co měření počtu částic ukazuje</h2></div><div className="max-w-3xl text-lg leading-relaxed text-muted-foreground"><p>Měření počtu částic je základní zkouškou pro klasifikaci čistých prostorů podle ČSN EN ISO 14644-1. Kalibrovaným laserovým čítačem se v určených bodech sleduje koncentrace částic vybraných referenčních velikostí, například 0,5 µm a dalších velikostí podle třídy a použité metodiky.</p><p className="mt-6">Naměřené hodnoty se neposuzují izolovaně. Protokol musí uvést prostor, provozní stav, měřicí body, přístroj, podmínky, referenční velikosti, limity a způsob vyhodnocení.</p></div></div></section>
      <section className="bg-accent/20 py-20 lg:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">04 / Klasifikace</p><h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">Třídy čistoty ISO 1 až ISO 9</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">Číslo ISO třídy není univerzální známka kvality celého provozu. Třída se volí podle citlivosti produktu, operace, personálu a provozního stavu.</p></div><div className="grid border-y border-border md:grid-cols-2">{classes.map(([name, use], index) => <article key={name} className="border-b border-border p-7 md:even:border-l lg:p-10"><div className="flex items-start justify-between"><Gauge className="h-8 w-8 text-primary" aria-hidden="true" /><span className="font-mono text-xs text-primary">0{index + 1}</span></div><h3 className="mt-8 text-2xl font-semibold">{name}</h3><p className="mt-4 leading-relaxed text-muted-foreground">{use}</p></article>)}</div></div></section>
      <section className="bg-foreground py-20 text-background lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary-light">05 / Provozní stav</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">At rest a in operation</h2></div><div className="grid gap-8 md:grid-cols-2"><div className="border-t border-background/20 pt-5"><span className="font-mono text-sm text-primary-light">01</span><h3 className="mt-6 text-2xl font-semibold">At rest</h3><p className="mt-4 leading-relaxed text-background/70">Prostor je připraven k měření, ale neprobíhá v něm běžná operace nebo není přítomen obvyklý počet pracovníků.</p></div><div className="border-t border-background/20 pt-5"><span className="font-mono text-sm text-primary-light">02</span><h3 className="mt-6 text-2xl font-semibold">In operation</h3><p className="mt-4 leading-relaxed text-background/70">Zařízení, pracovníci a proces pracují v definovaném provozním režimu. Volba stavu ovlivňuje výsledek i interpretaci.</p></div></div></div></section>
      <section className="py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">06 / Kontrola</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Kdy měření provádět</h2></div><ol className="border-t border-border">{['Při počáteční klasifikaci nového nebo upraveného prostoru.', 'Při periodické kontrole podle interního plánu a rizikovosti provozu.', 'Po výměně filtrů, zásahu do vzduchotechniky nebo změně dispozice.', 'Při hledání příčiny odchylky nebo zhoršení provozních výsledků.'].map((item, index) => <li key={item} className="flex gap-5 border-b border-border py-6"><span className="font-mono text-sm text-primary">0{index + 1}</span><span className="leading-relaxed text-muted-foreground">{item}</span></li>)}</ol></div></section>
      <section className="bg-accent/20 py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">07 / Výstup</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Co obsahuje protokol</h2></div><div><ul className="grid gap-4 sm:grid-cols-2">{['Identifikaci prostoru, zón a provozního stavu.', 'Měřicí body a referenční velikosti částic.', 'Použitý čítač, kalibraci a podmínky měření.', 'Naměřené hodnoty, limity a vyhodnocení.', 'Odchylky a doporučení pro další kontrolu.'].map((item) => <li key={item} className="flex gap-3 border-t border-border pt-4 leading-relaxed text-muted-foreground"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />{item}</li>)}</ul><div className="mt-10 border-l-2 border-primary pl-5 text-base leading-relaxed text-foreground"><ListChecks className="mb-3 h-6 w-6 text-primary" aria-hidden="true" />Měření částic neověřuje automaticky těsnost HEPA filtru ani správné tlakové kaskády. Tyto zkoušky se plánují samostatně nebo jako součást širší validace.</div><p className="mt-8 leading-relaxed text-muted-foreground">Pro širší rozsah pokračujte na <Link href="/mereni-a-validace" className="font-semibold text-primary underline underline-offset-4">měření a validaci čistých prostor</Link>.</p></div></div></section>
      <section className="border-b border-border py-16" aria-labelledby="odborne-castice">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">Navazující informace</p>
          <h2 id="odborne-castice" className="mt-4 text-3xl font-bold tracking-tight text-foreground">Jak číst výsledek měření v souvislostech</h2>
          <p className="mt-5 max-w-3xl leading-relaxed text-muted-foreground">Praktické srovnání měření částic s kontrolou integrity filtru a návazností na servisní rozhodnutí obsahuje <Link href="/ciste-prostory/integrita-hepa-filtru-a-pocet-castic" className="font-semibold text-primary underline underline-offset-4">průvodce kontrolou HEPA filtru a částic</Link>.</p>
        </div>
      </section>
    </main>
    <ServiceCrossLink />
    <Footer />
  </div>
);

export default PocetCasticIso14644;
