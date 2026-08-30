import { Shield, Wind, Gauge, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shield,
      title: 'Čisté prostory a laboratorní boxy',
      description: 'Začínáme účelem prostoru, procesem a požadovanou třídou čistoty. Podle zadání navážeme dispozici, povrchy, filtraci, tlakové poměry a dokumentaci skutečného provedení.',
      features: ['Třídy čistoty ISO 5–ISO 8', 'Laboratorní a laminární boxy', 'Izolátory a bariérové systémy', 'Návrh a uvedení do provozu'],
      href: '/ciste-prostory',
      linkLabel: 'Návrh a realizace čistých prostor',
    },
    {
      icon: Gauge,
      title: 'Validace a měření čistých prostorů',
      description: 'Měříme parametry důležité pro klasifikaci a provoz: částice, tlakové rozdíly, proudění, teplotu, vlhkost a integritu HEPA filtrů. Výstupem je protokol s limity, hodnotami a odchylkami.',
      features: ['Počet částic', 'Integrita HEPA filtrů', 'IQ, OQ a PQ', 'Měřicí plán a protokol'],
      href: '/mereni-a-validace',
      linkLabel: 'Validace čistých prostor',
    },
    {
      icon: Wind,
      title: 'Vzduchotechnika a HEPA filtrace',
      description: 'Řešíme přívod a odvod vzduchu, regulaci, tlakové kaskády, dostupnost filtrů a návaznost na měření. HEPA a ULPA filtrace se volí podle procesu a požadovaného rizikového profilu.',
      features: ['HEPA H13/H14 a ULPA', 'Tlakové kaskády', 'Regulace teploty a vlhkosti', 'Servisní přístup'],
      href: '/vzduchotechnika',
      linkLabel: 'Vzduchotechnika a HEPA filtrace',
    },
    {
      icon: Settings,
      title: 'Servis HEPA filtrů a vzduchotechniky',
      description: 'Údržba navazuje na skutečný provoz a plán kontrol. Provádíme výměny filtrů, kontrolu zařízení, servis boxů a přípravu podkladů pro další měření nebo audit.',
      features: ['Výměna HEPA a ULPA filtrů', 'Servis boxů a izolátorů', 'Servisní záznamy', 'Návazná kontrolní měření'],
      href: '/servis',
      linkLabel: 'Servis filtrace a vzduchotechniky',
    }
  ];

  return (
    <section id="sluzby" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Čisté prostory a technické služby podle provozu
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Jednotlivé části dodávky propojujeme tak, aby návrh, technické zařízení, měření a servis pracovaly se stejným zadáním. Podrobnosti k <a href="/mereni-a-validace" className="text-primary hover:underline">měření a validaci</a> i <a href="/servis" className="text-primary hover:underline">servisu</a> najdete na samostatných stránkách.
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
                <a href={service.href} className="mt-6 inline-flex font-semibold text-primary underline underline-offset-4 hover:text-primary-dark">
                  {service.linkLabel}
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
