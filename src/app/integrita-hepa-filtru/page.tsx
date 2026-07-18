import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ShieldCheck, CheckCircle, Wind, ClipboardCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Integrita HEPA filtrů – test těsnosti dle EN 1822 | cisteprostory.eu',
  description:
    'Test integrity HEPA a ULPA filtrů (aerosolové skenování dle EN 1822 / ISO 14644-3) pro čisté prostory, laminární boxy a izolátory. Objednejte měření po celé ČR.',
};

export default function IntegritaHepaFiltru() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="bg-gradient-hero text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Test integrity HEPA filtrů</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Aerosolové skenování těsnosti HEPA a ULPA filtrů dle EN 1822 a ISO 14644-3 — ověříme,
            že filtr ani jeho uložení nepropouští kontaminovaný vzduch.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Test integrity (těsnosti) HEPA filtru patří mezi klíčové validační zkoušky čistých
              prostorů, laminárních boxů, izolátorů a bariérových pracovišť. Cílem je prokázat, že
              filtrační médium ani rám a těsnění filtru nepropouští částice — a to i v místě
              spojení filtru s rámem, kde nejčastěji dochází k tzv. obtoku (bypass).
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Jak test probíhá</h2>
            <ul className="space-y-3 text-lg text-muted-foreground mb-12">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>Generování testovacího aerosolu (polydisperzní olejová mlha) před filtrem</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>Skenování celé plochy filtru i těsnění fotometrickou sondou za filtrem</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>Vyhodnocení procentuální penetrace dle limitů normy EN 1822 / ISO 14644-3</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <span>Protokol s naměřenými hodnotami a vyhodnocením shody</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Kdy test provést</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-accent/30 p-6 rounded-lg">
                <ShieldCheck className="h-10 w-10 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Po instalaci nebo výměně filtru</h3>
                <p className="text-muted-foreground">
                  Ověření, že nový filtr a jeho montáž splňují požadovanou třídu čistoty.
                </p>
              </div>
              <div className="bg-accent/30 p-6 rounded-lg">
                <ClipboardCheck className="h-10 w-10 text-primary mb-3" />
                <h3 className="text-lg font-semibold mb-2">Periodická revalidace</h3>
                <p className="text-muted-foreground">
                  Pravidelné ověřování dle interního harmonogramu, GMP Annex 1 nebo ISO 14644-2.
                </p>
              </div>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 mb-8">
              <div className="flex items-start gap-4">
                <Wind className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Součást komplexní validace</h3>
                  <p className="text-muted-foreground">
                    Test integrity HEPA filtrů obvykle kombinujeme s dalšími měřeními — počtem
                    částic, rychlostí proudění vzduchu a tlakovými rozdíly. Podívejte se na{' '}
                    <Link href="/mereni-a-validace" className="text-primary underline">
                      kompletní nabídku validací a měření
                    </Link>{' '}
                    nebo na{' '}
                    <Link href="/vzduchotechnika" className="text-primary underline">
                      dodávku a servis vzduchotechniky a HEPA filtrace
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
