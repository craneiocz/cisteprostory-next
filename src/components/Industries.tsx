import { Pill, HeartPulse, Cpu, FlaskConical, Rocket } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: Pill,
      title: 'Farmacie',
      description: 'Čisté prostory třídy A–D dle EU GMP Annex 1 pro výrobu sterilních léčiv. Validace a kvalifikace DQ–PQ pro schválení SÚKL.',
      alt: 'čisté prostory pro farmacii'
    },
    {
      icon: HeartPulse,
      title: 'Nemocnice a laboratoře',
      description: 'Laboratorní boxy, izolátory pro cytostatika a čisté prostory pro operační sály, lékárny a sterilizace.',
      alt: 'laboratorní boxy pro nemocnice'
    },
    {
      icon: FlaskConical,
      title: 'Výzkumné laboratoře',
      description: 'Laminární boxy a čisté prostory pro analytické, mikrobiologické a výzkumné laboratoře.',
      alt: 'laminární boxy pro laboratoře'
    },
    {
      icon: Cpu,
      title: 'Elektronika a optika',
      description: 'Čisté prostory ISO 3–ISO 6 s HEPA/ULPA filtrací pro výrobu polovodičů a optických prvků.',
      alt: 'čisté prostory pro elektroniku'
    },
    {
      icon: Rocket,
      title: 'Automotive a aerospace',
      description: 'Kontrolované prostory pro montáž citlivých komponent a výrobu kompozitních materiálů dle AS9100.',
      alt: 'čisté prostory pro automotive a aerospace'
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
            Čisté prostory a laboratorní boxy dodáváme zejména pro <strong>farmacie, nemocnice, laboratoře</strong> a technologický průmysl.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <article 
              key={index}
              className="group relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
              
              <div className="relative z-10">
                <div className="relative inline-block mb-5">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" aria-hidden="true"></div>
                  <div className="relative w-14 h-14 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center border border-blue-100">
                    <industry.icon className="h-7 w-7 text-blue-600" aria-hidden="true" />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {industry.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors">
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
