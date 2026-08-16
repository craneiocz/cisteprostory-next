import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSchema from '@/components/PageSchema';
import ServiceCrossLink from '@/components/ServiceCrossLink';
import { createPageMetadata } from '@/lib/seo';
import { Gauge, CheckCircle, ListChecks } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  path: '/pocet-castic-iso-14644',
  title: 'Měření počtu částic ISO 14644-1 | cisteprostory.eu',
  description:
    'Měření koncentrace částic a klasifikace čistoty vzduchu ISO 1 až ISO 9 podle ČSN EN ISO 14644-1 pro čisté prostory, laminární boxy a izolátory.',
});

const classes = [
  { name: 'ISO 5', use: 'Kritické operace, plnění sterilních přípravků, laminární boxy třídy A' },
  { name: 'ISO 6–7', use: 'Přípravna sterilních léčiv, čisté prostory tříd B–C dle GMP' },
  { name: 'ISO 8', use: 'Podpůrné a přechodové prostory, čisté prostory třídy D dle GMP' },
];

export default function PocetCasticIso14644() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchema
        path="/pocet-castic-iso-14644"
        title="Měření počtu částic ISO 14644-1"
        description="Klasifikace čistoty vzduchu podle koncentrace částic ve vzduchu pro čisté prostory, laminární boxy a izolátory."
        serviceName="Měření počtu částic"
        serviceDescription="Měření koncentrace částic a klasifikace čistoty vzduchu podle ČSN EN ISO 14644-1."
      />
      <Header />

      <section className="bg-gradient-hero text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Měření počtu částic ISO 14644-1</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Klasifikace čistoty vzduchu podle koncentrace částic ve vzduchu — základní měření pro
            zařazení prostoru do třídy čistoty ISO 1 až ISO 9.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Měření počtu částic je základní zkouškou pro klasifikaci čistých prostorů dle normy
              ČSN EN ISO 14644-1. Kalibrovaným laserovým čítačem částic měříme koncentraci
              částic o velikosti 0,5 µm a dalších referenčních velikostí ve stanovených bodech
              prostoru a porovnáváme naměřené hodnoty s limity příslušné třídy čistoty.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Kdy měření provádíme</h2>
            <ul className="space-y-3 text-lg text-muted-foreground mb-12">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>V klidovém stavu (&quot;at rest&quot;) — prostor bez provozu a personálu</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>Za provozu (&quot;in operation&quot;) — se zapojeným zařízením a přítomným personálem</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>Při počáteční validaci i periodické revalidaci prostoru</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Příklady tříd čistoty</h2>
            <div className="space-y-4 mb-12">
              {classes.map((c) => (
                <div key={c.name} className="flex items-start gap-4 bg-accent/30 p-6 rounded-lg">
                  <Gauge className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold">{c.name}</h3>
                    <p className="text-muted-foreground">{c.use}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-8">
              <div className="flex items-start gap-4">
                <ListChecks className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Součást komplexní validace</h3>
                  <p className="text-muted-foreground">
                    Měření počtu částic obvykle kombinujeme s testem integrity HEPA filtrů,
                    měřením rychlosti proudění vzduchu a tlakových rozdílů. Prohlédněte si{' '}
                    <Link href="/integrita-hepa-filtru" className="text-primary underline">
                      test integrity HEPA filtrů
                    </Link>{' '}
                    nebo{' '}
                    <Link href="/mereni-a-validace" className="text-primary underline">
                      kompletní nabídku validací a měření
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCrossLink />
      <Footer />
    </div>
  );
}
