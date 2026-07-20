import { Shield, Wind, Gauge, Settings, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-teal-600 to-teal-700 text-white py-24 lg:py-40 overflow-hidden" aria-label="Úvodní sekce - Čisté prostory a laboratorní boxy">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rotate-45"></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 border border-white/10 rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Badge - Profesionalita */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-teal-100 border border-white/30 mb-8">
            <CheckCircle className="h-4 w-4" aria-hidden="true" />
            Certifikované řešení ISO 14644 a EU GMP
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-balance tracking-tight">
            Čisté prostory,<br />laboratorní boxy<br />a validace vzduchotechniky
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-12 text-teal-50 max-w-3xl mx-auto leading-relaxed text-balance font-light">
            Kompletní řešení pro farmacii, nemocnice a laboratoře. Realizujeme <span className="text-white font-semibold">čisté prostory třídy A–D</span> dle EU GMP Annex 1 a ISO 14644, s <span className="text-white font-semibold">HEPA filtrací H13/H14</span>, měřením, validací a <span className="text-white font-semibold">24/7 servisem po ČR</span>.
          </p>

          {/* Trust badges */}
          <nav aria-label="Trust signals" className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-lg text-sm font-medium text-white border border-white/30 hover:bg-white/25 transition-colors">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" aria-hidden="true"></span>
              <span>Dostupní 24/7</span>
            </span>
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-lg text-sm font-medium text-white border border-white/30 hover:bg-white/25 transition-colors">
              <span className="h-2 w-2 rounded-full bg-white" aria-hidden="true"></span>
              <span>Odpovídáme do 24 hodin</span>
            </span>
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-3 rounded-lg text-sm font-medium text-white border border-white/30 hover:bg-white/25 transition-colors">
              <span className="h-2 w-2 rounded-full bg-white" aria-hidden="true"></span>
              <span>Servis po celé ČR</span>
            </span>
          </nav>

          {/* Services Icons */}
          <nav aria-label="Hlavní služby" className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <a href="/mereni-a-validace" className="group" title="Validace a měření čistých prostorů dle ISO 14644">
              <div className="flex flex-col items-center">
                <div className="bg-white/15 p-4 rounded-2xl mb-3 group-hover:bg-white/25 transition-colors duration-300 border border-white/30 group-hover:border-white/50">
                  <Gauge className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">Validace a měření</span>
              </div>
            </a>
            
            <a href="/ciste-prostory" className="group" title="Čisté prostory a laboratorní boxy">
              <div className="flex flex-col items-center">
                <div className="bg-white/15 p-4 rounded-2xl mb-3 group-hover:bg-white/25 transition-colors duration-300 border border-white/30 group-hover:border-white/50">
                  <Shield className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">Čisté prostory</span>
              </div>
            </a>
            
            <a href="/vzduchotechnika" className="group" title="Vzduchotechnika a HEPA filtrace">
              <div className="flex flex-col items-center">
                <div className="bg-white/15 p-4 rounded-2xl mb-3 group-hover:bg-white/25 transition-colors duration-300 border border-white/30 group-hover:border-white/50">
                  <Wind className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">Vzduchotechnika</span>
              </div>
            </a>
            
            <a href="/servis" className="group" title="Servis a údržba HEPA filtrů a vzduchotechniky">
              <div className="flex flex-col items-center">
                <div className="bg-white/15 p-4 rounded-2xl mb-3 group-hover:bg-white/25 transition-colors duration-300 border border-white/30 group-hover:border-white/50">
                  <Settings className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">Servis</span>
              </div>
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Hero;
