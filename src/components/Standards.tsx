import { Award, FileCheck, Shield } from 'lucide-react';

const Standards = () => {
  const standards = [
    {
      icon: FileCheck,
      code: 'ISO 14644-1 / ISO 14644-2',
      title: 'Klasifikace a monitoring čistých prostorů',
      description: 'Třídy čistoty vzduchu ISO 1–ISO 9. Definuje měření počtu částic, intervaly testování a monitoring pro udržení shody.',
    },
    {
      icon: Shield,
      code: 'EU GMP Annex 1',
      title: 'Výroba sterilních léčiv',
      description: 'Požadavky na čisté prostory třídy A–D, limity částic a mikroorganismů, kontaminační kontrolní strategie.',
    },
    {
      icon: Award,
      code: 'EN 1822 / ISO 29463',
      title: 'HEPA a ULPA filtry',
      description: 'Klasifikace filtrů H13 (99,95 %), H14 (99,995 %) a U15 (99,9995 %). Metody testování integrity filtrů.',
    }
  ];

  return (
    <section id="normy" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Normy a <span className="text-primary">standardy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Veškeré realizace čistých prostorů a validace provádíme dle platných mezinárodních norem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {standards.map((standard, index) => (
            <div 
              key={index}
              className="bg-muted/30 rounded-2xl p-8 hover:shadow-card transition-all duration-300 group border border-border/50"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                <standard.icon className="h-7 w-7 text-primary" />
              </div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full mb-3">
                {standard.code}
              </span>
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {standard.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {standard.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Standards;
