import Image from 'next/image';
import Link from 'next/link';
import logoImage from '@/assets/cisteprostory-logo.webp';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Link href="/" className="inline-flex">
                <Image
                  src={logoImage}
                  width={813}
                  height={294}
                  alt="Čisté Prostory - realizace vzduchotechniky a validace čistých prostorů"
                  className="h-12 w-auto brightness-0 invert"
                  loading="lazy"
                />
              </Link>
            </div>
            <p className="mb-4 max-w-md leading-relaxed text-slate-300">
              Specializujeme se na <strong>vzduchotechniku čistých prostorů</strong>, měření, 
              <a href="/mereni-a-validace" className="text-primary-light hover:text-primary"> validaci dle ISO 14644</a> a 
              komplexní servis pro farmaceutický, zdravotnický a technologický průmysl.
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              Dodáváme <a href="/vzduchotechnika" className="text-slate-200 hover:text-primary-light">HEPA filtry H13/H14</a>, 
              <a href="/ciste-prostory" className="text-slate-200 hover:text-primary-light"> laminární boxy</a>, izolátory a kompletní 
              vzduchotechnické systémy v souladu s normami ISO 14644, EU GMP Annex 1 a EN 1822.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-100">Služby</h3>
            <ul className="space-y-2">
              <li>
                <a href="/ciste-prostory" className="text-slate-300 transition-colors duration-200 hover:text-primary">
                  Čisté prostory a realizace
                </a>
              </li>
              <li>
                <a href="/vzduchotechnika" className="text-slate-300 transition-colors duration-200 hover:text-primary">
                  Vzduchotechnika a HEPA filtry
                </a>
              </li>
              <li>
                <a href="/mereni-a-validace" className="text-slate-300 transition-colors duration-200 hover:text-primary">
                  Validace a měření ISO 14644
                </a>
              </li>
              <li>
                <a href="/integrita-hepa-filtru" className="text-slate-300 transition-colors duration-200 hover:text-primary">
                  Test integrity HEPA filtrů
                </a>
              </li>
              <li>
                <a href="/pocet-castic-iso-14644" className="text-slate-300 transition-colors duration-200 hover:text-primary">
                  Měření počtu částic ISO 14644-1
                </a>
              </li>
              <li>
                <a href="/servis" className="text-slate-300 transition-colors duration-200 hover:text-primary">
                  Servis a údržba
                </a>
              </li>
            </ul>
            
            <h3 className="mb-4 mt-6 text-lg font-semibold text-slate-100">Normy</h3>
            <ul className="space-y-2 text-sm">
              <li><span className="text-slate-400">ISO 14644-1 / 14644-2</span></li>
              <li><span className="text-slate-400">EU GMP Annex 1</span></li>
              <li><span className="text-slate-400">EN 1822 / ISO 29463</span></li>
              <li><span className="text-slate-400">ČSN EN 1822</span></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-slate-100">Kontakt</h3>
            <ul className="space-y-2">
              <li className="font-medium text-slate-300">BRNO CREATIVE s.r.o.</li>
              <li className="text-slate-300">Lidická 700/19, 602 00 Brno</li>
              <li className="text-slate-300">IČO: 07367066</li>
              <li className="text-slate-300">DIČ: CZ07367066</li>
              <li>
                <a href="mailto:info@cisteprostory.eu" className="text-primary-light transition-colors duration-200 hover:text-primary">
                  info@cisteprostory.eu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © 2025 Čisté Prostory – vzduchotechnika, validace a servis. Všechna práva vyhrazena.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="/ochrana-udaju" className="text-sm text-slate-500 transition-colors duration-200 hover:text-primary">
              Ochrana osobních údajů
            </a>
            <span className="text-slate-700">|</span>
            <Link href="/#kontakt" className="text-sm text-slate-500 transition-colors duration-200 hover:text-primary">
              Kontaktujte nás
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
