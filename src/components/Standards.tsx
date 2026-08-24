import { Award, FileCheck, Shield } from 'lucide-react';

const Standards = () => {
  const standards = [
    {
      icon: FileCheck,
      code: 'ISO 14644-1 / ISO 14644-2',
      title: 'Klasifikace čistých prostor podle ISO 14644',
      description: 'Třídy čistoty vzduchu ISO 1–ISO 9. Definuje měření počtu částic, intervaly testování a monitoring pro udržení shody.',
    },
    {
      icon: Shield,
      code: 'EU GMP Annex 1',
      title: 'EU GMP Annex 1 pro sterilní výrobu',
      description: 'Požadavky na čisté prostory třídy A–D, limity částic a mikroorganismů, kontaminační kontrolní strategie.',
    },
    {
      icon: Award,
      code: 'EN 1822 / ISO 29463',
      title: 'HEPA a ULPA filtrace podle EN 1822',
      description: 'Klasifikace filtrů H13 (99,95 %), H14 (99,995 %) a U15 (99,9995 %). Metody testování integrity filtrů.',
    }
  ];

  return (
    <section id="normy" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Normy pro čisté prostory a <span className="text-primary">HEPA filtraci</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Normy poskytují technický rámec pro klasifikaci, filtraci a měření. Konkrétní rozsah se vždy odvíjí od procesu a zadání provozu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {standards.map((standard, index) => (
            <article 
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              
              <div className="relative z-10">
                <div className="relative inline-block mb-5">
                  <div className="absolute inset-0 rounded-xl bg-primary/15 blur opacity-25 transition-opacity duration-300 group-hover:opacity-45" aria-hidden="true" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-xl border border-primary/10 bg-primary/5">
                    <standard.icon className="h-7 w-7 text-primary" aria-hidden="true" />
                  </div>
                </div>
                
                <span className="inline-block rounded-full bg-primary/8 px-3 py-1 text-xs font-bold text-primary mb-4">
                  {standard.code}
                </span>
                
                <h3 className="mb-3 text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {standard.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
                  {standard.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Standards;
