import { Shield, Wind, Gauge, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Čisté prostory a laboratorní boxy',
      description: 'Realizujeme čisté prostory třídy A–D dle EU GMP a ISO 14644. Dodáváme a instalujeme laboratorní boxy, laminární boxy, izolátory pro cytostatika a bariérové systémy. Každý projekt zahrnuje návrh, montáž a kompletní kvalifikaci DQ, IQ, OQ, PQ.',
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
      title: 'Servis a údržba',
      description: 'Pravidelný servis čistých prostorů, výměna HEPA filtrů, údržba laminárních boxů a izolátorů. Vedeme servisní dokumentaci pro audity. Pohotovostní servis po celé ČR.',
      features: ['Výměna HEPA a ULPA filtrů', 'Servis laminárních boxů', 'Servisní dokumentace', 'Pohotovostní servis']
    }
  ];

  return (
    <section id="sluzby" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Služby pro <span className="text-primary">čisté prostory</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kompletní řešení od návrhu a realizace čistých prostorů přes <a href="/mereni-a-validace" className="text-primary hover:underline">validace dle ISO 14644</a> až po <a href="/servis" className="text-primary hover:underline">servis a údržbu</a>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <article 
              key={index} 
              className="group relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300" aria-hidden="true"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl flex items-center justify-center border border-blue-100">
                      <service.icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
                    </div>
                  </div>
                  <span className="text-4xl font-light text-gray-100 group-hover:text-blue-100 transition-colors">{String(index + 1).padStart(2, '0')}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-3 border-t border-gray-100 pt-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold mr-3 flex-shrink-0">✓</span>
                      <span className="group-hover:text-gray-900 transition-colors">{feature}</span>
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
