import { Shield, Wind, Gauge, Settings } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-0"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  <h3>{service.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
