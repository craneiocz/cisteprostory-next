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
            Řízené prostředí pro výrobu, výzkum a zdravotnictví
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-balance font-light text-white/88">
            Navrhujeme a ověřujeme čisté prostory, filtrační systémy a měřicí postupy podle účelu provozu. Propojujeme technické řešení s dokumentací, uvedením do provozu a následnou kontrolou.
          </p>

          <p className="mb-12 text-sm uppercase tracking-[0.22em] text-white/70">Návrh · měření · dokumentace · servis</p>

          <nav aria-label="Hlavní služby" className="mx-auto grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
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
