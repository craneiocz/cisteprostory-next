const Standards = () => {
  const standards = [
    {
      code: 'ISO 14644-1 / ISO 14644-2',
      title: 'Klasifikace čistých prostor podle ISO 14644',
      description: 'Třídy čistoty vzduchu ISO 1–ISO 9. Definuje měření počtu částic, intervaly testování a monitoring pro udržení shody.',
    },
    {
      code: 'EU GMP Annex 1',
      title: 'EU GMP Annex 1 pro sterilní výrobu',
      description: 'Požadavky na čisté prostory třídy A–D, limity částic a mikroorganismů, kontaminační kontrolní strategie.',
    },
    {
      code: 'EN 1822 / ISO 29463',
      title: 'HEPA a ULPA filtrace podle EN 1822',
      description: 'Klasifikace filtrů H13 (99,95 %), H14 (99,995 %) a U15 (99,9995 %). Metody testování integrity filtrů.',
    }
  ];

  return (
    <section id="normy" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <h2 className="mb-6 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Normy pro čisté prostory a HEPA filtraci
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Normy poskytují technický rámec pro klasifikaci, filtraci a měření. Konkrétní rozsah se vždy odvíjí od procesu a zadání provozu.
          </p>
        </div>

        <div className="border-b border-border">
          {standards.map((standard, index) => (
            <article 
              key={index}
              className="grid gap-4 border-t border-border py-8 md:grid-cols-[1fr_2fr] md:gap-12"
            >
              <span className="flex items-start gap-3 font-mono text-sm text-primary-dark">
                <span className="mt-2 h-px w-6 shrink-0 bg-current" aria-hidden="true" />
                {standard.code}
              </span>
              <div>
                <h3 className="mb-3 text-xl font-medium text-foreground">
                  {standard.title}
                </h3>
                
                <p className="max-w-2xl leading-relaxed text-muted-foreground">
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
