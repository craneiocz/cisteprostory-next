import { Shield, Wind, Gauge, Settings } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-white/20 rotate-12"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-white/20 rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Čisté prostory, laboratorní boxy a validace vzduchotechniky
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Realizujeme <strong>čisté prostory</strong>, dodáváme <strong>laboratorní boxy</strong> a provádíme <strong>validace dle ISO 14644</strong> a <strong>EU GMP Annex 1</strong>. Servis HEPA filtrů H13/H14 po celé ČR.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white/95 border border-white/20">
              <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse"></span>
              Dostupní online 24/7
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white/95 border border-white/20">
              Odpovídáme do 24 hodin
            </span>
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white/95 border border-white/20">
              Servis po celé ČR
            </span>
          </div>

          {/* Services Icons */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <a href="/mereni-a-validace" className="flex flex-col items-center group">
              <div className="bg-white/10 p-4 rounded-2xl mb-3 group-hover:bg-white/20 transition-colors duration-300">
                <Gauge className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90">Validace a měření</span>
            </a>
            
            <a href="/ciste-prostory" className="flex flex-col items-center group">
              <div className="bg-white/10 p-4 rounded-2xl mb-3 group-hover:bg-white/20 transition-colors duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90">Čisté prostory</span>
            </a>
            
            <a href="/vzduchotechnika" className="flex flex-col items-center group">
              <div className="bg-white/10 p-4 rounded-2xl mb-3 group-hover:bg-white/20 transition-colors duration-300">
                <Wind className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90">Vzduchotechnika</span>
            </a>
            
            <a href="/servis" className="flex flex-col items-center group">
              <div className="bg-white/10 p-4 rounded-2xl mb-3 group-hover:bg-white/20 transition-colors duration-300">
                <Settings className="h-8 w-8 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90">Servis</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
