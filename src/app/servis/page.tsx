import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSchema from '@/components/PageSchema';
import ServiceCrossLink from '@/components/ServiceCrossLink';
import ServiceHero from '@/components/ServiceHero';
import { ClipboardCheck, Filter, ShieldCheck, Wrench, CheckCircle2 } from 'lucide-react';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({ path: '/servis', title: 'Servis čistých prostor a HEPA filtrů | cisteprostory.eu', description: 'Údržba čistých prostor, vzduchotechniky, HEPA filtrů, laminárních boxů a izolátorů včetně výměn, servisních záznamů a návazných kontrol.' });

const serviceAreas = [
  ['01', Wrench, 'Vzduchotechnika a regulace', 'Kontrola zařízení, průtoků, regulace, tlakových poměrů a provozních stavů podle dokumentace a servisního plánu.'],
  ['02', Filter, 'Výměny HEPA a ULPA filtrů', 'Ověření typu, rozměru, těsnění a uložení filtru, bezpečná výměna a předání údajů pro navazující test integrity.'],
  ['03', ShieldCheck, 'Boxy a izolátory', 'Údržba laminárních boxů, laboratorních boxů, izolátorů a dalších zařízení s řízenou filtrací a prouděním.'],
  ['04', ClipboardCheck, 'Záznamy a doporučení', 'Dokumentace zásahu, identifikace použitých dílů, popis zjištění a doporučení pro další servis nebo měření.'],
] as const;

const serviceSteps = [
  ['01', 'Popis zařízení', 'Identifikace prostoru, boxu, izolátoru, filtračního stupně nebo regulační části.'],
  ['02', 'Posouzení stavu', 'Kontrola dostupné dokumentace, provozních potíží a posledních výsledků měření.'],
  ['03', 'Provedení práce', 'Servis, výměna dílů, nastavení regulace nebo odstranění zjištěné závady.'],
  ['04', 'Kontrola po zásahu', 'Ověření správné funkce a určení, zda je potřeba navazující měření.'],
  ['05', 'Předání záznamu', 'Popis provedených úkonů, použitých dílů, zjištění a doporučení.'],
] as const;

const Servis = () => (
  <div className="min-h-screen bg-background">
    <PageSchema
      path="/servis"
      title="Servis čistých prostor a HEPA filtrů"
      description="Servisní péče o vzduchotechniku, HEPA filtry, boxy a izolátory podle provozního plánu a návazných kontrol."
      serviceName="Servis čistých prostor"
      serviceDescription="Údržba, výměny a kontrola zařízení s návazností na měření a dokumentaci."
    />
    <Header />
    <ServiceHero eyebrow="02 / Servis" title="Servis čistých prostor a HEPA filtrů" description="Údržba podle skutečného provozu, stavu zařízení a požadavků na navazující kontrolu." links={[{ href: '/integrita-hepa-filtru', label: 'Test integrity filtrů' }, { href: '/mereni-a-validace', label: 'Měření po zásahu' }]} />
    <main>
      <section className="border-b border-border py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">03 / Údržba</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Proč servis čistého prostoru nelze oddělit od měření</h2></div><div className="max-w-3xl text-lg leading-relaxed text-muted-foreground"><p>Servisní plán má chránit provoz před nečekanými odchylkami a vytvořit dohledatelnou historii zásahů. U čistých prostorů se proto nesleduje pouze to, zda zařízení běží. Důležité je také, zda filtrace, tlakové rozdíly, proudění, teplota a vlhkost stále odpovídají účelu prostoru.</p><p className="mt-6">Rozsah údržby vychází z typu zařízení, zatížení, přístupu k filtrům, provozních hodin, interního plánu a výsledků předchozích kontrol.</p></div></div></section>
      <section className="bg-accent/20 py-20 lg:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">04 / Rozsah</p><h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">Co může servis zahrnovat</h2></div><div className="grid border-y border-border md:grid-cols-2">{serviceAreas.map(([number, Icon, title, text]) => <article key={number} className="border-b border-border p-7 md:even:border-l lg:p-10"><div className="flex items-start justify-between"><Icon className="h-8 w-8 text-primary" aria-hidden="true" /><span className="font-mono text-xs text-primary">{number}</span></div><h3 className="mt-8 text-2xl font-semibold">{title}</h3><p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{text}</p></article>)}</div></div></section>
      <section className="bg-foreground py-20 text-background lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary-light">05 / Postup</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Od posouzení k dohledatelnému zásahu</h2></div><ol className="border-t border-background/20">{serviceSteps.map(([number, title, text]) => <li key={number} className="grid gap-4 border-b border-background/20 py-6 sm:grid-cols-[4rem_12rem_1fr] sm:items-baseline"><span className="font-mono text-sm text-primary-light">{number}</span><strong className="text-lg">{title}</strong><span className="leading-relaxed text-background/70">{text}</span></li>)}</ol></div></section>
      <section className="py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">06 / Plán</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Plánovaná údržba versus zásah po odchylce</h2></div><div className="max-w-3xl text-lg leading-relaxed text-muted-foreground"><p>Plánovaná údržba se připravuje podle zařízení a očekávaného zatížení. Zahrnuje pravidelné kontroly, čištění, výměny spotřebních prvků a ověření provozních parametrů.</p><p className="mt-6">Zásah po odchylce má jiný cíl: nejprve je potřeba popsat problém, určit pravděpodobnou příčinu a zvolit kontrolu, která ověří účinek opravy.</p></div></div></section>
      <section className="bg-accent/20 py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">07 / Zadání</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Co připravit pro servisní návrh</h2></div><ul className="grid gap-4 sm:grid-cols-2">{['Typ zařízení, filtru nebo boxu a dostupnou technickou dokumentaci.', 'Historii výměn, oprav, měření a známých provozních odchylek.', 'Požadovaný rozsah odstávky a přístup k zařízení.', 'Požadavky na dokumentaci, likvidaci filtrů a návazné měření.', 'Informaci o třídě čistoty, provozním režimu a kritických parametrech.'].map((item) => <li key={item} className="flex gap-3 border-t border-border pt-4 leading-relaxed text-muted-foreground"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />{item}</li>)}</ul></div></section>
      <section className="border-b border-border py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">08 / Dokumentace</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Kontrola po zásahu a servisní záznam</h2></div><div className="max-w-3xl text-lg leading-relaxed text-muted-foreground"><p>Po výměně HEPA filtru se podle zařízení a interního plánu ověřuje těsnost média, rámu a uložení. Po zásahu do vzduchotechniky může být potřeba zkontrolovat také průtoky, tlakové rozdíly, částice, teplotu nebo vlhkost.</p><p className="mt-6">Servisní záznam umožní dohledat, které zařízení bylo kontrolováno, co bylo provedeno, jaké díly byly použity a zda je potřeba další krok. Taková dokumentace podporuje plánování údržby i přípravu na audit.</p></div></div></section>
    </main>
    <ServiceCrossLink />
    <Footer />
  </div>
);

export default Servis;
