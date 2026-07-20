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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {standards.map((standard, index) => (
            <article 
              key={index}
              className="group relative bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
              
              <div className="relative z-10">
                <div className="relative inline-block mb-5">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" aria-hidden="true"></div>
                  <div className="relative w-14 h-14 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center border border-blue-100">
                    <standard.icon className="h-7 w-7 text-blue-600" aria-hidden="true" />
                  </div>
                </div>
                
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 text-xs font-bold rounded-full mb-4">
                  {standard.code}
                </span>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {standard.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors">
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
