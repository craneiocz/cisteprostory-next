import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSchema from '@/components/PageSchema';
import { createPageMetadata } from '@/lib/seo';
import { ArrowRight, Building2, CheckCircle2, ExternalLink } from 'lucide-react';

const path = '/o-nas';

export const metadata: Metadata = createPageMetadata({
  path,
  title: 'O nás | Návrh a měření čistých prostor',
  description:
    'BRNO CREATIVE s.r.o. zajišťuje návrh, vzduchotechniku, měření a servis čistých prostor podle provozního zadání.',
});

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://www.cisteprostory.eu/o-nas#webpage',
  name: 'O společnosti BRNO CREATIVE s.r.o.',
  url: 'https://www.cisteprostory.eu/o-nas/',
  mainEntity: { '@id': 'https://www.cisteprostory.eu/#organization' },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageSchema
        path={path}
        title="O společnosti BRNO CREATIVE s.r.o."
        description="Návrh, vzduchotechnika, měření a servis čistých prostor podle provozního zadání."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <Header />
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full border border-white/10" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/65">O společnosti</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
            Návrh, měření a servis čistých prostor
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/85">
            Připravujeme řešení od prvního technického zadání přes dispozici a vzduchotechniku
            až po kontrolní měření, dokumentaci a následný servis.
          </p>
        </div>
      </section>

      <main>
        <section className="border-b border-border py-20 lg:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">Provozovatel</p>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl">BRNO CREATIVE s.r.o.</h2>
            </div>
            <div className="max-w-3xl">
              <div className="flex items-start gap-4 border-y border-border py-6">
                <Building2 className="mt-1 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
                <div className="space-y-2 leading-relaxed text-muted-foreground">
                  <p className="font-semibold text-foreground">BRNO CREATIVE s.r.o.</p>
                  <p>Lidická 700/19, 602 00 Brno</p>
                  <p>IČO 07367066 · DIČ CZ07367066</p>
                  <a href="mailto:info@cisteprostory.eu" data-analytics-event="email_click" className="inline-block font-semibold text-primary underline underline-offset-4">
                    info@cisteprostory.eu
                  </a>
                </div>
              </div>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
                Pro přípravu nabídky potřebujeme znát účel prostoru, provozní režim, požadované parametry,
                rozsah dodávky a očekávané výstupy.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-accent/20 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">Rozsah spolupráce</p>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground md:text-5xl">Co řešíme v jednotlivých fázích</h2>
            </div>
            <ul className="mt-12 grid border-y border-border md:grid-cols-2">
              {[
                'Zadání: účel prostoru, provozní stav, pohyb osob a materiálu a požadovaná třída čistoty.',
                'Návrh: dispozice, povrchy, prostupy, vzduchotechnika, filtrace a tlakové vazby.',
                'Ověření: částice, tlakové rozdíly, proudění, teplota, vlhkost a integrita HEPA filtrů.',
                'Předání a servis: protokoly, identifikace zařízení, plán kontrol a návazné servisní zásahy.',
              ].map((item) => (
                <li key={item} className="flex gap-3 border-b border-border p-7 last:border-b-0 md:even:border-l lg:p-9">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="leading-relaxed text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              <a href="https://www.iso.org/ics/13.040.35/x/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
                Přehled ISO 14644 <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="https://health.ec.europa.eu/medicinal-products/eudralex/eudralex-volume-4_en" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
                EudraLex Volume 4 <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">Potřebujete posoudit konkrétní zadání?</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Popište proces, požadované podmínky, dostupnou dokumentaci a očekávaný výstup.
            </p>
            <Link href="/#kontakt" data-analytics-event="cta_click" data-analytics-label="about" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary underline underline-offset-4">
              Přejít na kontaktní formulář <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
