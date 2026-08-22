import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSchema from '@/components/PageSchema';
import ServiceCrossLink from '@/components/ServiceCrossLink';
import { createPageMetadata } from '@/lib/seo';
import { CheckCircle, Gauge, ListChecks } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  path: '/pocet-castic-iso-14644',
  title: 'Měření počtu částic podle ISO 14644-1 | cisteprostory.eu',
  description:
    'Měření koncentrace částic a klasifikace čistoty vzduchu podle ISO 14644-1 pro čisté prostory, laminární boxy a izolátory.',
});

const classes = [
  ['ISO 1–3', 'Nejpřísnější prostředí pro vysoce citlivé procesy a specializovanou výrobu. Konkrétní použití určuje procesní zadání.'],
  ['ISO 4–5', 'Kritická pracovní místa, laminární proudění a operace s vysokými nároky na koncentraci částic.'],
  ['ISO 6–7', 'Přípravné a podpůrné zóny, laboratoře a výroba podle citlivosti procesu a režimu provozu.'],
  ['ISO 8–9', 'Přechodové, podpůrné a výrobní prostory s řízenou, ale méně přísnou koncentrací částic.'],
];

export default function PocetCasticIso14644() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchema
        path="/pocet-castic-iso-14644"
        title="Měření počtu částic podle ISO 14644-1"
        description="Měření koncentrace částic a klasifikace čistoty vzduchu podle ISO 14644-1 v čistých prostorech, boxech a izolátorech."
        serviceName="Měření počtu částic"
        serviceDescription="Klasifikace čistoty vzduchu podle měřicího plánu a provozního stavu zařízení."
      />
      <Header />
      <section className="bg-gradient-hero py-16 text-white lg:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h1 className="mb-6 text-4xl font-bold md:text-5xl">Měření počtu částic podle ISO 14644-1</h1><p className="max-w-3xl text-xl leading-relaxed text-white/90">Klasifikace čistoty vzduchu podle koncentrace částic v definovaných bodech a provozních podmínkách.</p></div></section>
      <main className="py-16 lg:py-24"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><div className="prose prose-lg max-w-none">
        <h2>Co měření počtu částic ukazuje</h2>
        <p>
          Měření počtu částic je základní zkouškou pro klasifikaci čistých prostorů podle ČSN EN ISO 14644-1.
          Kalibrovaným laserovým čítačem se v určených bodech sleduje koncentrace částic vybraných referenčních
          velikostí, například 0,5 µm a dalších velikostí podle třídy a použité metodiky.
        </p>
        <p>
          Naměřené hodnoty se neposuzují izolovaně. Protokol musí uvést prostor, provozní stav, měřicí body,
          přístroj, podmínky, referenční velikosti, limity a způsob vyhodnocení. Teprve z této kombinace lze
          říct, zda prostor odpovídá požadované klasifikaci.
        </p>

        <h2>Třídy čistoty ISO 1 až ISO 9</h2>
        <div className="my-8 space-y-4 not-prose">{classes.map(([name, use]) => <div key={name} className="flex items-start gap-4 rounded-lg bg-accent/30 p-6"><Gauge className="mt-1 h-8 w-8 flex-shrink-0 text-primary" aria-hidden="true" /><div><h3 className="text-lg font-semibold">{name}</h3><p className="text-muted-foreground">{use}</p></div></div>)}</div>
        <p>Číslo ISO třídy není univerzální známka kvality celého provozu. Třída se volí podle citlivosti produktu, operace, personálu a toho, zda se prostor posuzuje v klidu nebo při běžném provozu.</p>

        <h2>At rest a in operation</h2>
        <ul>
          <li className="flex items-start gap-3"><CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" /><strong>At rest:</strong> prostor je připraven k měření, ale neprobíhá v něm běžná operace nebo není přítomen obvyklý počet pracovníků.</li>
          <li className="flex items-start gap-3"><CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" /><strong>In operation:</strong> zařízení, pracovníci a proces pracují v definovaném provozním režimu.</li>
        </ul>
        <p>Volba stavu ovlivňuje výsledek i interpretaci. Měřicí plán proto musí předem uvést, za jakých podmínek bude klasifikace nebo kontrola provedena.</p>

        <h2>Kdy měření provádět</h2>
        <ol>
          <li>při počáteční klasifikaci nového nebo upraveného prostoru;</li>
          <li>při periodické kontrole podle interního plánu a rizikovosti provozu;</li>
          <li>po výměně filtrů, zásahu do vzduchotechniky nebo změně dispozice;</li>
          <li>při hledání příčiny odchylky nebo zhoršení provozních výsledků.</li>
        </ol>

        <h2>Co obsahuje výstup</h2>
        <ul>
          <li>identifikaci prostoru, zón a provozního stavu;</li>
          <li>měřicí body a referenční velikosti částic;</li>
          <li>použitý čítač, kalibraci a podmínky měření;</li>
          <li>naměřené hodnoty, limity a vyhodnocení;</li>
          <li>odchylky a doporučení pro další kontrolu.</li>
        </ul>
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-8"><div className="flex items-start gap-4"><ListChecks className="mt-1 h-8 w-8 flex-shrink-0 text-primary" aria-hidden="true" /><p className="m-0 text-muted-foreground">Měření částic neověřuje automaticky těsnost HEPA filtru ani správné tlakové kaskády. Tyto zkoušky se plánují samostatně nebo jako součást širší validace.</p></div></div>
        <p>Pro širší rozsah pokračujte na <Link href="/mereni-a-validace" className="text-primary underline">měření a validaci čistých prostor</Link> nebo na <Link href="/integrita-hepa-filtru" className="text-primary underline">test integrity HEPA filtrů</Link>.</p>
      </div><ServiceCrossLink /></div></main>
      <Footer />
    </div>
  );
}
