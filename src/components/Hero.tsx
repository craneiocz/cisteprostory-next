import { Shield, Wind, Gauge, Settings } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className="relative isolate overflow-hidden border-b border-white/10 bg-gradient-hero py-20 text-white lg:py-28"
      aria-label="Úvodní sekce - Čisté prostory a laboratorní boxy"
    >
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute left-10 top-20 h-32 w-32 rotate-45 border border-white/10" />
        <div className="absolute bottom-20 right-1/4 h-24 w-24 rotate-12 border border-white/10" />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.16),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_28%)]" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-balance tracking-tight">
            Čisté prostory,<br />vzduchotechnika<br />a validace ISO 14644
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-balance font-light text-white/88">
            Realizujeme <span className="text-white font-semibold">čisté prostory třídy A–D</span>, <span className="text-white font-semibold">vzduchotechniku s HEPA filtrací H13/H14</span> a <span className="text-white font-semibold">validaci dle ISO 14644 a EU GMP Annex 1</span>. Servis, měření a údržba po celé ČR.
          </p>

          <nav aria-label="Trust signals" className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white/95 backdrop-blur-sm transition-colors hover:bg-white/15">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" aria-hidden="true"></span>
              <span>Dostupní 24/7</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white/95 backdrop-blur-sm transition-colors hover:bg-white/15">
              <span className="h-2 w-2 rounded-full bg-white" aria-hidden="true"></span>
              <span>Odpovídáme do 24 hodin</span>
            </span>
            <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white/95 backdrop-blur-sm transition-colors hover:bg-white/15">
              <span className="h-2 w-2 rounded-full bg-white" aria-hidden="true"></span>
              <span>Servis po celé ČR</span>
            </span>
          </nav>

          <nav aria-label="Hlavní služby" className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <a href="/mereni-a-validace" className="group" title="Validace a měření čistých prostorů dle ISO 14644">
              <div className="flex flex-col items-center">
                <div className="mb-3 rounded-2xl border border-white/15 bg-white/10 p-4 transition-colors duration-300 group-hover:bg-white/15">
                  <Gauge className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">Validace a měření</span>
              </div>
            </a>
            
            <a href="/ciste-prostory" className="group" title="Čisté prostory a laboratorní boxy">
              <div className="flex flex-col items-center">
                <div className="mb-3 rounded-2xl border border-white/15 bg-white/10 p-4 transition-colors duration-300 group-hover:bg-white/15">
                  <Shield className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">Čisté prostory</span>
              </div>
            </a>
            
            <a href="/vzduchotechnika" className="group" title="Vzduchotechnika a HEPA filtrace">
              <div className="flex flex-col items-center">
                <div className="mb-3 rounded-2xl border border-white/15 bg-white/10 p-4 transition-colors duration-300 group-hover:bg-white/15">
                  <Wind className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">Vzduchotechnika</span>
              </div>
            </a>
            
            <a href="/servis" className="group" title="Servis a údržba HEPA filtrů a vzduchotechniky">
              <div className="flex flex-col items-center">
                <div className="mb-3 rounded-2xl border border-white/15 bg-white/10 p-4 transition-colors duration-300 group-hover:bg-white/15">
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
