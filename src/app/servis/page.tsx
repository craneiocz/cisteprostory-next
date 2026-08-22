import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSchema from '@/components/PageSchema';
import ServiceCrossLink from '@/components/ServiceCrossLink';
import { createPageMetadata } from '@/lib/seo';
import { Wrench, ShieldCheck, ClipboardCheck, Filter } from 'lucide-react';

export const metadata: Metadata = createPageMetadata({
  path: '/servis',
  title: 'Servis čistých prostor a HEPA filtrů | cisteprostory.eu',
  description:
    'Údržba čistých prostor, vzduchotechniky, HEPA filtrů, laminárních boxů a izolátorů včetně výměn, servisních záznamů a návazných kontrol.',
});

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
    <section className="bg-gradient-hero py-16 text-white lg:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h1 className="mb-6 text-4xl font-bold md:text-5xl">Servis čistých prostor a HEPA filtrů</h1><p className="max-w-3xl text-xl leading-relaxed text-white/90">Údržba podle skutečného provozu, stavu zařízení a požadavků na navazující kontrolu.</p></div></section>
    <main className="py-16 lg:py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="prose prose-lg max-w-none">
      <h2>Proč servis čistého prostoru nelze oddělit od měření</h2>
      <p>
        Servisní plán má chránit provoz před nečekanými odchylkami a vytvořit dohledatelnou historii zásahů.
        U čistých prostorů se proto nesleduje pouze to, zda zařízení běží. Důležité je také, zda filtrace,
        tlakové rozdíly, proudění, teplota a vlhkost stále odpovídají účelu prostoru.
      </p>
      <p>
        Rozsah údržby vychází z typu zařízení, zatížení, přístupu k filtrům, provozních hodin, interního plánu
        a výsledků předchozích kontrol. Po zásahu může následovat měření nebo test integrity, pokud mohl zásah
        ovlivnit čistotu, filtraci nebo tlakové poměry.
      </p>

      <h2>Co může servis zahrnovat</h2>
      <div className="my-10 grid grid-cols-1 gap-8 md:grid-cols-2 not-prose">
        <div className="rounded-lg bg-accent/30 p-8"><Wrench className="mb-4 h-12 w-12 text-primary" aria-hidden="true" /><h3 className="mb-3 text-xl font-semibold">Vzduchotechnika a regulace</h3><p className="text-muted-foreground">Kontrola zařízení, průtoků, regulace, tlakových poměrů a provozních stavů podle dokumentace a servisního plánu.</p></div>
        <div className="rounded-lg bg-accent/30 p-8"><Filter className="mb-4 h-12 w-12 text-primary" aria-hidden="true" /><h3 className="mb-3 text-xl font-semibold">Výměny HEPA a ULPA filtrů</h3><p className="text-muted-foreground">Ověření typu, rozměru, těsnění a uložení filtru, bezpečná výměna a předání údajů pro navazující test integrity.</p></div>
        <div className="rounded-lg bg-accent/30 p-8"><ShieldCheck className="mb-4 h-12 w-12 text-primary" aria-hidden="true" /><h3 className="mb-3 text-xl font-semibold">Boxy a izolátory</h3><p className="text-muted-foreground">Údržba laminárních boxů, laboratorních boxů, izolátorů a dalších zařízení s řízenou filtrací a prouděním.</p></div>
        <div className="rounded-lg bg-accent/30 p-8"><ClipboardCheck className="mb-4 h-12 w-12 text-primary" aria-hidden="true" /><h3 className="mb-3 text-xl font-semibold">Záznamy a doporučení</h3><p className="text-muted-foreground">Dokumentace zásahu, identifikace použitých dílů, popis zjištění a doporučení pro další servis nebo měření.</p></div>
      </div>

      <h2>Plánovaná údržba versus zásah po odchylce</h2>
      <p>
        Plánovaná údržba se připravuje podle zařízení a očekávaného zatížení. Zahrnuje pravidelné kontroly,
        čištění, výměny spotřebních prvků a ověření provozních parametrů. Zásah po odchylce má jiný cíl:
        nejprve je potřeba popsat problém, určit pravděpodobnou příčinu a zvolit kontrolu, která ověří účinek opravy.
      </p>
      <h2>Co připravit pro servisní návrh</h2>
      <ul>
        <li>typ zařízení, filtru nebo boxu a dostupnou technickou dokumentaci;</li>
        <li>historii výměn, oprav, měření a známých provozních odchylek;</li>
        <li>požadovaný rozsah odstávky a přístup k zařízení;</li>
        <li>požadavky na dokumentaci, likvidaci filtrů a návazné měření;</li>
        <li>informaci o třídě čistoty, provozním režimu a kritických parametrech.</li>
      </ul>
      <h2>Kontrola po výměně filtru nebo opravě</h2>
      <p>
        Po výměně HEPA filtru se podle zařízení a interního plánu ověřuje těsnost média, rámu a uložení.
        Po zásahu do vzduchotechniky může být potřeba zkontrolovat také průtoky, tlakové rozdíly, částice,
        teplotu nebo vlhkost. <a href="/mereni-a-validace" className="text-primary underline">Měření a validace</a> pomohou zvolit rozsah podle toho, co bylo změněno.
      </p>
      <h2>Dokumentace servisního zásahu</h2>
      <p>
        Servisní záznam by měl umožnit dohledat, které zařízení bylo kontrolováno, co bylo provedeno, jaké díly
        byly použity a zda je potřeba další krok. Taková dokumentace podporuje plánování údržby i přípravu na audit;
        sama o sobě ale nenahrazuje validační protokol nebo měření, pokud je vyžaduje provozní zadání.
      </p>
      <h2>Jak servisní zásah probíhá</h2>
      <ol>
        <li><strong>Popis zařízení:</strong> identifikace prostoru, boxu, izolátoru, filtračního stupně nebo regulační části.</li>
        <li><strong>Posouzení stavu:</strong> kontrola dostupné dokumentace, provozních potíží a posledních výsledků měření.</li>
        <li><strong>Provedení práce:</strong> servis, výměna dílů, nastavení regulace nebo odstranění zjištěné závady.</li>
        <li><strong>Kontrola po zásahu:</strong> ověření správné funkce a určení, zda je potřeba navazující měření.</li>
        <li><strong>Předání záznamu:</strong> popis provedených úkonů, použitých dílů, zjištění a doporučení.</li>
      </ol>
      <h2>Servisní dokumentace pro provoz a audit</h2>
      <p>
        Servisní záznam má být dohledatelný podle zařízení a data zásahu. Praktický záznam obsahuje identifikaci
        komponent, popis práce, stav před a po zásahu, použité náhradní díly a informaci o doporučené kontrole.
        Pokud zásah ovlivňuje filtrační systém, proudění nebo tlakové poměry, dokumentace by měla navazovat na
        měřicí protokol a interní systém řízení změn.
      </p>
    </div><ServiceCrossLink /></div></main>
    <Footer />
  </div>
);

export default Servis;
