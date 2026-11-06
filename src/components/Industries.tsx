import { Pill, HeartPulse, Cpu, FlaskConical, Rocket } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Pill,
      title: 'Farmacie',
      description: 'Řízené prostředí pro procesy, kde je potřeba sledovat částice, tlakové poměry a návaznost na kvalifikaci podle požadavků provozu.',
      alt: 'čisté prostory pro farmacii'
    },
    {
      icon: HeartPulse,
      title: 'Zdravotnictví a laboratoře',
      description: 'Laboratorní a laminární boxy, izolátory a technická podpora pro pracoviště s požadavky na ochranu produktu, pracovníka nebo okolí.',
      alt: 'laboratorní boxy pro zdravotnictví a laboratoře'
    },
    {
      icon: FlaskConical,
      title: 'Výzkumné laboratoře',
      description: 'Návrh filtrace, dispozice a měření pro analytické, mikrobiologické a výzkumné provozy podle konkrétního pracovního postupu.',
      alt: 'laminární boxy pro laboratoře'
    },
    {
      icon: Cpu,
      title: 'Technologie a přesná výroba',
      description: 'Kontrolované prostředí pro citlivou montáž a přesnou výrobu. Třída čistoty, filtrace i režim provozu se určují podle procesu.',
      alt: 'čisté prostory pro technologické provozy'
    },
    {
      icon: Rocket,
      title: 'Montáž a průmyslové provozy',
      description: 'Technické řešení pro montáž citlivých komponent a procesy, kde je nutné řídit čistotu vzduchu, proudění nebo tlak mezi zónami.',
      alt: 'čisté prostory pro montáž a průmyslové provozy'
    }
  ];

  return (
    <section id="odvetvi" className="bg-accent py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <h2 className="mb-6 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Čisté prostory pro farmacii, laboratoře a výrobu
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Rozsah řešení se odvíjí od procesu, kritických míst a způsobu, jakým bude prostor provozován a následně kontrolován.
          </p>
        </div>

        <div className="grid gap-x-12 md:grid-cols-2">
          {industries.map((industry, index) => (
            <article 
              key={index}
              className="flex items-start gap-4 border-t border-primary/25 py-8"
            >
              <industry.icon className="mt-1 h-[18px] w-[18px] shrink-0 text-muted-foreground" strokeWidth={1.5} aria-hidden="true" />
              <div>
                <h3 className="mb-3 text-lg font-medium text-foreground">
                  {industry.title}
                </h3>
                
                <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
                  {industry.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
