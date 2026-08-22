import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSchema from '@/components/PageSchema';
import ServiceCrossLink from '@/components/ServiceCrossLink';
import { createPageMetadata } from '@/lib/seo';
import { Wind, Thermometer, Droplets, Shield } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  path: '/vzduchotechnika',
  title: 'Vzduchotechnika čistých prostor a HEPA filtrace | cisteprostory.eu',
  description:
    'Návrh, montáž a servis vzduchotechniky čistých prostor s HEPA a ULPA filtrací, tlakovými kaskádami, regulací teploty, vlhkosti a proudění.',
});

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
    <section className="bg-gradient-hero py-16 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="mb-6 text-4xl font-bold md:text-5xl">Vzduchotechnika čistých prostor a HEPA filtrace</h1>
        <p className="max-w-3xl text-xl leading-relaxed text-white/90">Stabilní proudění, vhodná filtrace a regulace parametrů vzduchu podle konkrétního procesu.</p>
      </div>
    </section>
    <main className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h2>Vzduchotechnika není pouze výměna vzduchu</h2>
          <p>
            V čistém prostoru vzduchotechnika ovlivňuje koncentraci částic, tlak mezi zónami, teplotu,
            relativní vlhkost i podmínky práce. Systém musí současně umožnit údržbu, kontrolu filtrů a stabilní
            provoz v režimech, ve kterých se prostor klasifikuje nebo validuje.
          </p>
          <p>
            Návrh vychází z dispozice, materiálového toku, počtu pracovníků, zdrojů částic, požadované třídy
            čistoty a charakteru procesu. Teprve podle těchto údajů se volí průtoky, distribuční prvky,
            filtrační stupně, výkon regulace a způsob odvádění vzduchu.
          </p>
          <div className="my-12 grid grid-cols-1 gap-8 md:grid-cols-2 not-prose">
            <div className="rounded-lg bg-accent/30 p-8"><Wind className="mb-4 h-12 w-12 text-primary" aria-hidden="true" /><h2 className="mb-3 text-xl font-semibold">Přívod, odvod a filtrace</h2><p className="text-muted-foreground">Návrh proudění a filtračních stupňů od předfiltrace po HEPA nebo ULPA filtraci podle zatížení a požadované čistoty.</p></div>
            <div className="rounded-lg bg-accent/30 p-8"><Thermometer className="mb-4 h-12 w-12 text-primary" aria-hidden="true" /><h2 className="mb-3 text-xl font-semibold">Teplota a stabilita</h2><p className="text-muted-foreground">Regulace teploty s ohledem na proces, zařízení, materiál a podmínky, ve kterých se provádí měření.</p></div>
            <div className="rounded-lg bg-accent/30 p-8"><Droplets className="mb-4 h-12 w-12 text-primary" aria-hidden="true" /><h2 className="mb-3 text-xl font-semibold">Vlhkost</h2><p className="text-muted-foreground">Zvlhčování, odvlhčování a kontrola relativní vlhkosti tam, kde ovlivňuje proces, materiál nebo pracovní podmínky.</p></div>
            <div className="rounded-lg bg-accent/30 p-8"><Shield className="mb-4 h-12 w-12 text-primary" aria-hidden="true" /><h2 className="mb-3 text-xl font-semibold">Tlakové kaskády</h2><p className="text-muted-foreground">Nastavení směru proudění mezi zónami a podklad pro měření tlakových rozdílů v klidovém i provozním režimu.</p></div>
          </div>

          <h2>HEPA a ULPA filtrace</h2>
          <p>
            HEPA a ULPA filtry tvoří jeden článek celého systému, ne samostatné řešení. Jejich účinnost musí
            odpovídat požadavku procesu a jejich uložení musí umožnit kontrolu těsnosti, výměnu a servis.
            U návrhu je proto důležitá také dostupnost filtru, prostor pro manipulaci a návaznost na test integrity.
          </p>
          <p>
            Klasifikace a zkoušení filtrů se vztahují k normám EN 1822 a ISO 29463. Konkrétní typ filtru,
            průtok a výměnný interval je potřeba určit podle zařízení, zátěže, tlakové ztráty a servisního plánu.
            Samotné označení H13 nebo H14 bez těchto souvislostí nepopisuje celé chování systému.
          </p>

          <h2>Návrh, montáž, regulace a servis</h2>
          <ol>
            <li><strong>Návrh:</strong> technické zadání, dispoziční řešení, průtoky, filtrace, regulace a tlakové poměry.</li>
            <li><strong>Montáž:</strong> koordinace rozvodů, filtračních skříní, koncových prvků a návazných profesí.</li>
            <li><strong>Zaregulování:</strong> nastavení průtoků, tlaků, teploty a vlhkosti podle provozního zadání.</li>
            <li><strong>Ověření:</strong> měření částic, proudění, tlaků, parametrů vzduchu a integrity filtrace.</li>
            <li><strong>Servis:</strong> plán údržby, výměny filtrů, kontrola zařízení a záznamy o provedených zásazích.</li>
          </ol>

          <h2>Provozní náklady a servisní přístup</h2>
          <p>
            Provozní náklady neovlivňuje pouze výkon ventilátoru. Roli hraje tlaková ztráta filtrů, počet
            výměn vzduchu, režim provozu, regulace, dostupnost servisních míst a nastavení teploty a vlhkosti.
            Návrh, který ignoruje výměnu filtru nebo měření po zásahu, může být obtížně udržovatelný.
          </p>
          <p>
            Před výměnou HEPA filtru je vhodné ověřit typ, rozměr, těsnění, uložení a požadované parametry.
            Po zásahu může následovat test integrity a kontrolní měření podle toho, co bylo změněno.
            Více o servisních činnostech najdete na stránce <a href="/servis" className="text-primary underline">servis čistých prostor</a>.
          </p>

          <h2>Co má obsahovat technické zadání</h2>
          <ul>
            <li>účel prostoru, proces a zdroje částic;</li>
            <li>požadovanou třídu čistoty a provozní stavy;</li>
            <li>teplotu, vlhkost, tlakové rozdíly a materiálový tok;</li>
            <li>požadovaný typ filtrace, způsob regulace a přístup pro výměnu;</li>
            <li>rozsah měření při uvedení do provozu a při následných kontrolách.</li>
          </ul>
        </div>
        <ServiceCrossLink />
      </div>
    </main>
    <Footer />
  </div>
);

export default Vzduchotechnika;
