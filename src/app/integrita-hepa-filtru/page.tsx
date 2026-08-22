import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSchema from '@/components/PageSchema';
import ServiceCrossLink from '@/components/ServiceCrossLink';
import ServiceHero from '@/components/ServiceHero';
import { ClipboardCheck, ShieldCheck, Wind } from 'lucide-react';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  path: '/integrita-hepa-filtru',
  title: 'Test integrity HEPA a ULPA filtrů | cisteprostory.eu',
  description: 'Ověření těsnosti HEPA a ULPA filtrace aerosolovým skenováním, včetně média, rámu, těsnění a uložení podle sjednané metodiky.',
});

const testSteps = ['Příprava zařízení, filtru, přístupu a testovacího aerosolu před filtrem.', 'Ověření stabilního provozního stavu a podmínek, za kterých se skenování provádí.', 'Skenování celé plochy filtru, rámu, těsnění a kritických spojů fotometrickou sondou.', 'Záznam maximální penetrace, místa případné netěsnosti a vyhodnocení shody.', 'Protokol s identifikací zařízení, filtru, metodiky, hodnot a doporučeného dalšího kroku.'];

const IntegritaHepaFiltru = () => (
  <div className="min-h-screen bg-background">
    <PageSchema
      path="/integrita-hepa-filtru"
      title="Test integrity HEPA a ULPA filtrů"
      description="Ověření těsnosti filtračního média, rámu, těsnění a uložení filtru aerosolovým skenováním."
      serviceName="Test integrity HEPA filtrů"
      serviceDescription="Kontrola filtrace jako součást validace čistého prostoru, boxu nebo izolátoru."
    />
    <Header />
    <ServiceHero eyebrow="02 / HEPA filtrace" title="Test integrity HEPA a ULPA filtrů" description="Ověření, že filtrace, její těsnění a uložení neumožňují obtok kontaminovaného vzduchu." links={[{ href: '/mereni-a-validace', label: 'Měření a validace' }, { href: '/vzduchotechnika', label: 'Vzduchotechnika' }]} />
    <main>
      <section className="border-b border-border py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">03 / Účel zkoušky</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Co test integrity ověřuje</h2></div><div className="max-w-3xl text-lg leading-relaxed text-muted-foreground"><p>Test integrity HEPA nebo ULPA filtru patří mezi důležité validační zkoušky čistých prostorů, laminárních boxů, izolátorů a bariérových pracovišť. Cílem je ověřit nejen filtrační médium, ale také rám, těsnění a místo uložení.</p><p className="mt-6">Netěsnost může vzniknout v médiu, kolem rámu nebo v místě, kde filtr nedoléhá k těsnicí ploše. Výsledek proto nelze správně interpretovat bez identifikace filtru, jeho umístění, provozního stavu zařízení a použité metodiky.</p></div></div></section>
      <section className="bg-accent/20 py-20 lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">04 / Metodika</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Jak zkouška probíhá</h2><p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">Skenování musí zahrnout médium i všechna místa, kterými by mohl vzduch filtr obejít.</p></div><ol className="border-t border-border">{testSteps.map((step, index) => <li key={step} className="flex gap-5 border-b border-border py-6"><span className="font-mono text-sm text-primary">0{index + 1}</span><span className="leading-relaxed text-muted-foreground">{step}</span></li>)}</ol></div></section>
      <section className="bg-foreground py-20 text-background lg:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary-light">05 / Riziko</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Obtok filtru a jeho příčiny</h2></div><div className="max-w-3xl text-lg leading-relaxed text-background/70"><p>Obtok neboli bypass znamená, že vzduch prochází kolem filtrační vložky místo skrz filtrační médium. Příčinou může být poškozené těsnění, nesprávné uložení, deformovaný rám, nedostatečné dotažení, netěsný spoj nebo zásah do zařízení.</p><p className="mt-6">Skenování proto musí zahrnout také okraje a místa napojení, nikoli pouze střed filtrační plochy.</p></div></div></section>
      <section className="py-20 lg:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-12 max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">06 / Kontrola</p><h2 className="mt-5 text-3xl font-bold tracking-tight md:text-5xl">Kdy test provést</h2></div><div className="grid border-y border-border md:grid-cols-2"><article className="border-b border-border p-8 md:border-r md:pb-10"><ShieldCheck className="h-8 w-8 text-primary" aria-hidden="true" /><h3 className="mt-8 text-2xl font-semibold">Po instalaci nebo výměně</h3><p className="mt-4 leading-relaxed text-muted-foreground">Ověření, že nový filtr a jeho montáž odpovídají požadovanému provoznímu stavu.</p></article><article className="border-b border-border p-8"><ClipboardCheck className="h-8 w-8 text-primary" aria-hidden="true" /><h3 className="mt-8 text-2xl font-semibold">Při periodické kontrole</h3><p className="mt-4 leading-relaxed text-muted-foreground">Kontrola podle interního harmonogramu, rizikovosti zařízení nebo návaznosti na revalidaci.</p></article></div><p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">Test může být vhodný také po opravě vzduchotechniky, změně regulace, zásahu do skříně filtru nebo při podezření na zhoršení čistoty prostoru.</p></div></section>
      <section className="bg-accent/20 py-20 lg:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">07 / Návaznost</p><h2 className="mt-5 max-w-md text-3xl font-bold tracking-tight md:text-5xl">Integrita je jedna část celkové kontroly</h2></div><div className="max-w-3xl text-lg leading-relaxed text-muted-foreground"><p>V závislosti na provozu se test kombinuje s měřením počtu částic, rychlosti proudění, tlakových rozdílů, teploty a vlhkosti. <Link href="/mereni-a-validace" className="font-semibold text-primary underline underline-offset-4">Kompletní měření a validace</Link> pomohou určit rozsah podle zadání.</p><div className="mt-8 border-l-2 border-primary pl-5 text-base text-foreground"><Wind className="mb-3 h-6 w-6 text-primary" aria-hidden="true" />Pro správné vyhodnocení je potřeba znát typ filtru, zařízení, provozní stav, metodiku a požadované limity.</div></div></div></div></section>
    </main>
    <ServiceCrossLink />
    <Footer />
  </div>
);

export default IntegritaHepaFiltru;
