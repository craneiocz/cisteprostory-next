import { Shield, Wind, Gauge, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Čisté prostory a laboratorní boxy',
      description: 'Realizujeme čisté prostory třídy A–D dle EU GMP Annex 1 a ISO 14644. Dodáváme a instalujeme laboratorní boxy, laminární boxy, izolátory pro cytostatika a bariérové systémy. Každý projekt zahrnuje návrh, montáž a kompletní kvalifikaci DQ, IQ, OQ, PQ.',
      features: ['Čisté prostory ISO 5–ISO 8', 'Laboratorní a laminární boxy', 'Izolátory a RABS systémy', 'Kompletní kvalifikace DQ–PQ']
    },
    {
      icon: Gauge,
      title: 'Validace a měření čistých prostorů',
      description: 'Provádíme validace čistých prostorů dle ISO 14644-1, ISO 14644-2 a EU GMP Annex 1. Měříme počet částic, integritu HEPA filtrů, tlakové rozdíly, teplotu a vlhkost. Výstupem je kompletní validační protokol pro kontrolní orgány.',
      features: ['Měření počtu částic', 'Testy integrity HEPA filtrů', 'Kvalifikace IQ, OQ, PQ', 'Validační protokoly']
    },
    {
      icon: Wind,
      title: 'Vzduchotechnika a HEPA filtrace',
      description: 'Projektujeme a montujeme vzduchotechniku čistých prostorů s HEPA filtrací H13/H14 dle EN 1822. Zajišťujeme správné tlakové kaskády, výměnu vzduchu a distribuci pro dosažení požadované třídy čistoty.',
      features: ['HEPA filtry H13/H14', 'Tlakové kaskády', 'Klimatizace s přesnou regulací', 'Projektová dokumentace']
    },
    {
      icon: Settings,
      title: 'Servis HEPA filtrů a vzduchotechniky',
      description: 'Pravidelný servis čistých prostorů, výměna HEPA filtrů, údržba laminárních boxů a izolátorů. Vedeme servisní dokumentaci pro audity. Pohotovostní servis po celé ČR.',
      features: ['Výměna HEPA a ULPA filtrů', 'Servis laminárních boxů', 'Servisní dokumentace', 'Pohotovostní servis']
    }
  ];

  return (
    <section id="sluzby" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Služby pro <span className="text-primary">čisté prostory, vzduchotechniku a validaci ISO 14644</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kompletní řešení od návrhu a realizace čistých prostorů přes <a href="/mereni-a-validace" className="text-primary hover:underline">validace ISO 14644 a EU GMP Annex 1</a> až po <a href="/servis" className="text-primary hover:underline">servis HEPA filtrů a vzduchotechniky</a>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <article 
              key={index} 
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card p-8 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" aria-hidden="true" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-2xl bg-primary/15 blur opacity-20 transition-opacity duration-300 group-hover:opacity-35" aria-hidden="true" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/10 bg-primary/5">
                      <service.icon className="h-8 w-8 text-primary" aria-hidden="true" />
                    </div>
                  </div>
                  <span className="text-4xl font-light text-muted-foreground/20 transition-colors group-hover:text-primary/15">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                
                <h3 className="mb-4 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                  {service.title}
                </h3>
                
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                
                <ul className="space-y-3 border-t border-border/60 pt-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                      <span className="mr-3 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                        ✓
                      </span>
                      <span className="transition-colors group-hover:text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
