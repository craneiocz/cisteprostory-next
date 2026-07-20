import { Shield, Wind, Gauge, Settings, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-24 lg:py-40 overflow-hidden" aria-label="Úvodní sekce - Čisté prostory a laboratorní boxy">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-10 left-5 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-blue-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Badge - Profesionalita */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-cyan-200 border border-white/20 mb-8">
            <CheckCircle className="h-4 w-4" aria-hidden="true" />
            Certifikované řešení ISO 14644 a EU GMP
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-balance tracking-tight">
            Čisté prostory,<br />laboratorní boxy<br />a validace vzduchotechniky
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed text-balance font-light">
            Kompletní řešení pro farmacii, nemocnice a laboratoře. Realizujeme <span className="text-white font-semibold">čisté prostory třídy A–D</span> dle EU GMP Annex 1 a ISO 14644, s <span className="text-white font-semibold">HEPA filtrací H13/H14</span>, měřením, validací a <span className="text-white font-semibold">24/7 servisem po ČR</span>.
          </p>

          {/* Trust badges - modernější */}
          <nav aria-label="Trust signals" className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm px-5 py-3 rounded-lg text-sm font-medium text-cyan-100 border border-cyan-400/30 hover:border-cyan-300/50 transition-colors">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" aria-hidden="true"></span>
              <span>Dostupní 24/7</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm px-5 py-3 rounded-lg text-sm font-medium text-emerald-100 border border-emerald-400/30 hover:border-emerald-300/50 transition-colors">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden="true"></span>
              <span>Odpovídáme do 24 hodin</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 backdrop-blur-sm px-5 py-3 rounded-lg text-sm font-medium text-violet-100 border border-violet-400/30 hover:border-violet-300/50 transition-colors">
              <span className="h-2 w-2 rounded-full bg-violet-400" aria-hidden="true"></span>
              <span>Servis po celé ČR</span>
            </div>
          </nav>

          {/* Services Icons - modernější navigace */}
          <nav aria-label="Hlavní služby" className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <a href="/mereni-a-validace" className="group" title="Validace a měření čistých prostorů dle ISO 14644">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 group-hover:border-white/40 group-hover:bg-white/20 transition-all duration-300">
                    <Gauge className="h-8 w-8 text-cyan-200 group-hover:text-white" aria-hidden="true" />
                  </div>
                </div>
                <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">Validace a měření</span>
              </div>
            </a>
            
            <a href="/ciste-prostory" className="group" title="Čisté prostory a laboratorní boxy">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 group-hover:border-white/40 group-hover:bg-white/20 transition-all duration-300">
                    <Shield className="h-8 w-8 text-emerald-200 group-hover:text-white" aria-hidden="true" />
                  </div>
                </div>
                <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">Čisté prostory</span>
              </div>
            </a>
            
            <a href="/vzduchotechnika" className="group" title="Vzduchotechnika a HEPA filtrace">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 group-hover:border-white/40 group-hover:bg-white/20 transition-all duration-300">
                    <Wind className="h-8 w-8 text-violet-200 group-hover:text-white" aria-hidden="true" />
                  </div>
                </div>
                <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">Vzduchotechnika</span>
              </div>
            </a>
            
            <a href="/servis" className="group" title="Servis a údržba HEPA filtrů a vzduchotechniky">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 group-hover:border-white/40 group-hover:bg-white/20 transition-all duration-300">
                    <Settings className="h-8 w-8 text-orange-200 group-hover:text-white" aria-hidden="true" />
                  </div>
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
