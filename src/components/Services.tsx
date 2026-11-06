import { ArrowUpRight, Check } from 'lucide-react';
import CleanroomDiagram from './CleanroomDiagram';

const Services = () => {
  const services = [
    {
      title: 'Čisté prostory a laboratorní boxy',
      description: 'Začínáme účelem prostoru, procesem a požadovanou třídou čistoty. Podle zadání navážeme dispozici, povrchy, filtraci, tlakové poměry a dokumentaci skutečného provedení.',
      features: ['Třídy čistoty ISO 5–ISO 8', 'Laboratorní a laminární boxy', 'Izolátory a bariérové systémy', 'Návrh a uvedení do provozu'],
      href: '/ciste-prostory',
      linkLabel: 'Návrh a realizace čistých prostor',
    },
    {
      title: 'Validace a měření čistých prostorů',
      description: 'Měříme parametry důležité pro klasifikaci a provoz: částice, tlakové rozdíly, proudění, teplotu, vlhkost a integritu HEPA filtrů. Výstupem je protokol s limity, hodnotami a odchylkami.',
      features: ['Počet částic', 'Integrita HEPA filtrů', 'IQ, OQ a PQ', 'Měřicí plán a protokol'],
      href: '/mereni-a-validace',
      linkLabel: 'Validace čistých prostor',
    },
    {
      title: 'Vzduchotechnika a HEPA filtrace',
      description: 'Řešíme přívod a odvod vzduchu, regulaci, tlakové kaskády, dostupnost filtrů a návaznost na měření. HEPA a ULPA filtrace se volí podle procesu a požadovaného rizikového profilu.',
      features: ['HEPA H13/H14 a ULPA', 'Tlakové kaskády', 'Regulace teploty a vlhkosti', 'Servisní přístup'],
      href: '/vzduchotechnika',
      linkLabel: 'Vzduchotechnika a HEPA filtrace',
    },
    {
      title: 'Servis HEPA filtrů a vzduchotechniky',
      description: 'Údržba navazuje na skutečný provoz a plán kontrol. Provádíme výměny filtrů, kontrolu zařízení, servis boxů a přípravu podkladů pro další měření nebo audit.',
      features: ['Výměna HEPA a ULPA filtrů', 'Servis boxů a izolátorů', 'Servisní záznamy', 'Návazná kontrolní měření'],
      href: '/servis',
      linkLabel: 'Servis filtrace a vzduchotechniky',
    }
  ];

  return (
    <section id="sluzby" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 grid gap-10 border-b border-border pb-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-medium text-primary-dark">
              Základ návrhu
            </p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Co jsou čisté prostory a jak se určují požadavky
            </h2>
            <CleanroomDiagram />
          </div>
          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Čistý prostor je řízené prostředí, ve kterém se omezuje koncentrace částic ve vzduchu.
              Podle účelu provozu se sledují také tlakové rozdíly, proudění, teplota, vlhkost a další
              podmínky důležité pro produkt, proces nebo obsluhu.
            </p>
            <p>
              Samotná třída čistoty podle ISO 14644 neurčuje celé technické řešení. Návrh musí vycházet
              z konkrétního procesu, pohybu osob a materiálu, provozního stavu a požadavků platných pro
              dané odvětví.
            </p>
            <p>
              Proto společně posuzujeme dispozici, povrchy, filtraci, tlakové vazby i způsob následného
              ověření. Pokračujte na <a href="/ciste-prostory" className="font-medium text-primary-dark underline underline-offset-4">návrh čistých prostor</a>,
              zjistěte <a href="/ciste-prostory/jak-vybrat-tridu-cistoty-iso-14644" className="font-medium text-primary-dark underline underline-offset-4">jak vybrat třídu čistoty</a> nebo
              co zahrnuje <a href="/mereni-a-validace" className="font-medium text-primary-dark underline underline-offset-4">validace čistých prostor</a>.
            </p>
          </div>
        </div>

        <div className="mb-12 max-w-3xl">
          <h2 className="mb-6 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Čisté prostory a technické služby podle provozu
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Jednotlivé části dodávky propojujeme tak, aby návrh, technické zařízení, měření a servis pracovaly se stejným zadáním. Podrobnosti k <a href="/mereni-a-validace" className="text-primary-dark hover:underline">měření a validaci</a> i <a href="/servis" className="text-primary-dark hover:underline">servisu</a> najdete na samostatných stránkách.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <article 
              key={index} 
              className="flex flex-col rounded-xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="flex h-full flex-col">
                <div className="mb-6 flex items-center gap-3 text-primary-dark">
                  <span className="h-px w-8 bg-current" aria-hidden="true" />
                  <span className="font-mono text-xs tabular-nums">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                <h3 className="mb-4 text-xl font-medium text-foreground">
                  {service.title}
                </h3>
                
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                
                <ul className="mb-8 space-y-3 border-t border-border pt-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                      <Check className="mr-3 mt-0.5 h-[18px] w-[18px] shrink-0 text-muted-foreground" strokeWidth={1.5} aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={service.href} className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-primary-dark underline decoration-primary-dark/30 underline-offset-4 transition-colors hover:text-foreground">
                  {service.linkLabel}
                  <ArrowUpRight className="h-[18px] w-[18px] shrink-0" strokeWidth={1.5} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
