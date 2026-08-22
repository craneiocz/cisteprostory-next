import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSchema from '@/components/PageSchema';
import ServiceCrossLink from '@/components/ServiceCrossLink';
import { createPageMetadata } from '@/lib/seo';
import { ShieldCheck, CheckCircle, Wind, ClipboardCheck } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  path: '/integrita-hepa-filtru',
  title: 'Test integrity HEPA a ULPA filtrů | cisteprostory.eu',
  description:
    'Ověření těsnosti HEPA a ULPA filtrace aerosolovým skenováním, včetně média, rámu, těsnění a uložení podle sjednané metodiky.',
});

export default function IntegritaHepaFiltru() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchema
        path="/integrita-hepa-filtru"
        title="Test integrity HEPA a ULPA filtrů"
        description="Ověření těsnosti filtračního média, rámu, těsnění a uložení filtru aerosolovým skenováním."
        serviceName="Test integrity HEPA filtrů"
        serviceDescription="Kontrola filtrace jako součást validace čistého prostoru, boxu nebo izolátoru."
      />
      <Header />
      <section className="bg-gradient-hero py-16 text-white lg:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h1 className="mb-6 text-4xl font-bold md:text-5xl">Test integrity HEPA a ULPA filtrů</h1><p className="max-w-3xl text-xl leading-relaxed text-white/90">Ověření, že filtrace, její těsnění a uložení neumožňují obtok kontaminovaného vzduchu.</p></div></section>
      <main className="py-16 lg:py-24"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><div className="prose prose-lg max-w-none">
        <h2>Co test integrity ověřuje</h2>
        <p>
          Test integrity HEPA nebo ULPA filtru patří mezi důležité validační zkoušky čistých prostorů,
          laminárních boxů, izolátorů a bariérových pracovišť. Cílem je ověřit nejen filtrační médium,
          ale také rám, těsnění a místo uložení. Netěsnost může vzniknout v médiu, kolem rámu nebo v místě,
          kde filtr nedoléhá k těsnicí ploše.
        </p>
        <p>
          Výsledek proto nelze správně interpretovat bez identifikace filtru, jeho umístění, provozního stavu
          zařízení a použité metodiky. Test se provádí aerosolovým skenováním a naměřené hodnoty se porovnávají
          s limity sjednanými pro dané zařízení, třídu čistoty a normativní rámec.
        </p>

        <h2>Jak zkouška probíhá</h2>
        <ul>
          <li className="flex items-start gap-3"><CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" />Příprava zařízení, filtru, přístupu a testovacího aerosolu před filtrem.</li>
          <li className="flex items-start gap-3"><CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" />Ověření stabilního provozního stavu a podmínek, za kterých se skenování provádí.</li>
          <li className="flex items-start gap-3"><CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" />Skenování celé plochy filtru, rámu, těsnění a kritických spojů fotometrickou sondou.</li>
          <li className="flex items-start gap-3"><CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" />Záznam maximální penetrace, místa případné netěsnosti a vyhodnocení shody.</li>
          <li className="flex items-start gap-3"><CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-primary" aria-hidden="true" />Protokol s identifikací zařízení, filtru, metodiky, hodnot a doporučeného dalšího kroku.</li>
        </ul>

        <h2>Obtok filtru a jeho nejčastější příčiny</h2>
        <p>
          Obtok neboli bypass znamená, že vzduch prochází kolem filtrační vložky místo skrz filtrační médium.
          Příčinou může být poškozené těsnění, nesprávné uložení, deformovaný rám, nedostatečné dotažení,
          netěsný spoj nebo zásah do zařízení. Skenování proto musí zahrnout také okraje a místa napojení,
          nikoli pouze střed filtrační plochy.
        </p>

        <h2>Kdy test provést</h2>
        <div className="my-10 grid grid-cols-1 gap-6 md:grid-cols-2 not-prose">
          <div className="rounded-lg bg-accent/30 p-6"><ShieldCheck className="mb-3 h-10 w-10 text-primary" aria-hidden="true" /><h3 className="mb-2 text-lg font-semibold">Po instalaci nebo výměně</h3><p className="text-muted-foreground">Ověření, že nový filtr a jeho montáž odpovídají požadovanému provoznímu stavu.</p></div>
          <div className="rounded-lg bg-accent/30 p-6"><ClipboardCheck className="mb-3 h-10 w-10 text-primary" aria-hidden="true" /><h3 className="mb-2 text-lg font-semibold">Při periodické kontrole</h3><p className="text-muted-foreground">Kontrola podle interního harmonogramu, rizikovosti zařízení nebo návaznosti na revalidaci.</p></div>
        </div>
        <p>Test může být vhodný také po opravě vzduchotechniky, změně regulace, zásahu do skříně filtru nebo při podezření na zhoršení čistoty prostoru.</p>

        <h2>Jak navazuje na další měření</h2>
        <p>
          Integrita filtrace je pouze jedna část celkové kontroly. V závislosti na provozu se kombinuje s měřením
          počtu částic, rychlosti proudění, tlakových rozdílů, teploty a vlhkosti. <Link href="/mereni-a-validace" className="text-primary underline">Kompletní měření a validace</Link> pomohou určit rozsah podle zadání.
          Technické souvislosti filtrace, regulace a servisního přístupu popisuje <Link href="/vzduchotechnika" className="text-primary underline">vzduchotechnika čistých prostor</Link>.
        </p>
        <div className="rounded-lg border border-primary/20 bg-primary/5 p-8"><div className="flex items-start gap-4"><Wind className="mt-1 h-8 w-8 flex-shrink-0 text-primary" aria-hidden="true" /><p className="m-0 text-muted-foreground">Pro správné vyhodnocení je potřeba znát typ filtru, zařízení, provozní stav, metodiku a požadované limity. Nabídka se proto připravuje podle konkrétního místa měření.</p></div></div>
      </div><ServiceCrossLink /></div></main>
      <Footer />
    </div>
  );
}
