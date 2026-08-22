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
      title: 'Nemocnice a laboratoře',
      description: 'Laboratorní a laminární boxy, izolátory a technická podpora pro pracoviště s požadavky na ochranu produktu, pracovníka nebo okolí.',
      alt: 'laboratorní boxy pro nemocnice'
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
    <section id="odvetvi" className="py-20 lg:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Kde <span className="text-primary">působíme</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Rozsah řešení se odvíjí od procesu, kritických míst a způsobu, jakým bude prostor provozován a následně kontrolován.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <article 
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              
              <div className="relative z-10">
                <div className="relative inline-block mb-5">
                  <div className="absolute inset-0 rounded-xl bg-primary/15 blur opacity-25 transition-opacity duration-300 group-hover:opacity-45" aria-hidden="true" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-primary/10 bg-primary/5">
                    <industry.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                </div>
                
                <h3 className="mb-3 text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {industry.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
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
