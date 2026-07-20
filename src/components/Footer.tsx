import Image from 'next/image';
import logoImage from '@/assets/cisteprostory-logo.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Company Info */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src={logoImage}
                alt="Čisté Prostory - realizace vzduchotechniky a validace čistých prostorů"
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white/80 mb-4 max-w-md leading-relaxed">
              Specializujeme se na <strong>vzduchotechniku čistých prostorů</strong>, měření, 
              <a href="/mereni-a-validace" className="text-primary hover:text-primary/80"> validaci dle ISO 14644</a> a 
              komplexní servis pro farmaceutický, zdravotnický a technologický průmysl.
            </p>
            <p className="text-white/60 text-sm leading-relaxed">
              Dodáváme <a href="/vzduchotechnika" className="hover:text-primary">HEPA filtry H13/H14</a>, 
              <a href="/ciste-prostory" className="hover:text-primary"> laminární boxy</a>, izolátory a kompletní 
              vzduchotechnické systémy v souladu s normami ISO 14644, EU GMP Annex 1 a EN 1822.
            </p>
          </div>

          {/* Services with internal links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Služby</h3>
            <ul className="space-y-2">
              <li>
                <a href="/ciste-prostory" className="text-white/80 hover:text-primary transition-colors duration-200">
                  Čisté prostory a realizace
                </a>
              </li>
              <li>
                <a href="/vzduchotechnika" className="text-white/80 hover:text-primary transition-colors duration-200">
                  Vzduchotechnika a HEPA filtry
                </a>
              </li>
              <li>
                <a href="/mereni-a-validace" className="text-white/80 hover:text-primary transition-colors duration-200">
                  Validace a měření ISO 14644
                </a>
              </li>
              <li>
                <a href="/integrita-hepa-filtru" className="text-white/80 hover:text-primary transition-colors duration-200">
                  Test integrity HEPA filtrů
                </a>
              </li>
              <li>
                <a href="/pocet-castic-iso-14644" className="text-white/80 hover:text-primary transition-colors duration-200">
                  Měření počtu částic ISO 14644-1
                </a>
              </li>
              <li>
                <a href="/servis" className="text-white/80 hover:text-primary transition-colors duration-200">
                  Servis a údržba
                </a>
              </li>
            </ul>
            
            {/* Standards reference */}
            <h3 className="text-lg font-semibold text-white mb-4 mt-6">Normy</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-white/60">ISO 14644-1 / 14644-2</span></li>
              <li><span className="text-white/60">EU GMP Annex 1</span></li>
              <li><span className="text-white/60">EN 1822 / ISO 29463</span></li>
              <li><span className="text-white/60">ČSN EN 1822</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="text-white/80 font-medium">BRNO CREATIVE s.r.o.</li>
              <li className="text-white/80">Lidická 700/19, 602 00 Brno</li>
              <li className="text-white/80">IČO: 07367066</li>
              <li className="text-white/80">DIČ: CZ07367066</li>
              <li>
                <a href="mailto:info@cisteprostory.eu" className="text-white/80 hover:text-primary transition-colors duration-200">
                  info@cisteprostory.eu
                </a>
              </li>
            </ul>
            

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2025 Čisté Prostory – vzduchotechnika, validace a servis. Všechna práva vyhrazena.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="/ochrana-udaju" className="text-white/60 hover:text-primary text-sm transition-colors duration-200">
              Ochrana osobních údajů
            </a>
            <span className="text-white/40">|</span>
            <a href="/#kontakt" className="text-white/60 hover:text-primary text-sm transition-colors duration-200">
              Kontaktujte nás
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
