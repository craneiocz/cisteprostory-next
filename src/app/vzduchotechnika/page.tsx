import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Wind, Thermometer, Droplets, Shield } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vzduchotechnika a HEPA filtrace H13/H14 | cisteprostory.eu',
  description:
    'Komplexní systémy vzduchotechniky s HEPA filtrací H13/H14 dle EN 1822 pro čisté prostory, laboratoře a technologické provozy.',
};

const Vzduchotechnika = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Vzduchotechnika a HEPA filtrace</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Komplexní systémy vzduchotechniky pro čisté prostory, laboratoře a technologické provozy
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Vzduchotechnika se využívá všude, kde jsou kladeny nároky na zabezpečení výměny vzduchu a potřeba 
              zvýšit jeho kvalitu v daném prostředí. V čistých prostorech řešíme návrh, montáž a servis systémů 
              s HEPA filtrací H13/H14, tlakové kaskády, regulaci teploty, vlhkosti i proudění vzduchu.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              To je ovšem pouze základ toho, co vzduchotechnika zabezpečuje. Instalací moderních technologií 
              jako je klimatizace, čističek vzduchu, zvlhčovačů či vodní pračky se ze vzduchotechnické jednotky 
              stává kompletní systém. Takto nastavený systém dokáže upravit všechny požadované parametry vzduchu 
              na ideální hodnoty a podpořit provoz čistých prostorů i laboratorních pracovišť.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-accent/30 p-8 rounded-lg">
                <Wind className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Ventilace a filtrace</h3>
                <p className="text-muted-foreground">
                  Zajišťujeme výměnu vzduchu a jeho filtraci pomocí různých typů filtrů - 
                  od běžných prachových filtrů až po vysokoúčinné HEPA a ULPA filtry.
                </p>
              </div>

              <div className="bg-accent/30 p-8 rounded-lg">
                <Thermometer className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Regulace teploty</h3>
                <p className="text-muted-foreground">
                  Ventilací lze zajistit nejen ochlazování, ale také zahřívání vzduchu 
                  na požadované parametry pro optimální pracovní podmínky.
                </p>
              </div>

              <div className="bg-accent/30 p-8 rounded-lg">
                <Droplets className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Úprava vlhkosti</h3>
                <p className="text-muted-foreground">
                  K úpravě vlhkosti vzduchu využíváme různé typy zvlhčovačů 
                  a vodních praček dle specifických požadavků prostředí.
                </p>
              </div>

              <div className="bg-accent/30 p-8 rounded-lg">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-4">Odstranění škodlivin</h3>
                <p className="text-muted-foreground">
                  Moderní systémy dokáží odstranit nežádoucí škodliviny ve vzduchu 
                  a zajistit tak bezpečné pracovní prostředí.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Spolehlivá instalace a servis</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Spolupracujeme výhradně se specialisty, kteří mají s instalací daného typu systému rozsáhlé zkušenosti 
              a jsou pro montáž patřičně proškoleni a vybaveni. Díky tomu můžeme garantovat vysokou kvalitu 
              provedení a dlouhodobou spolehlivost instalovaných systémů.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Typy filtrů</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Nabízíme kompletní škálu vzduchotechnických filtrů o požadované hodnotě účinnosti:
            </p>
            <ul className="space-y-3 text-lg text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Běžné prachové filtry pro standardní aplikace</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Vysokoúčinné HEPA filtry pro čisté prostory</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>ULPA filtry pro nejnáročnější aplikace</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-3">•</span>
                <span>Atypické filtry na míru dle specifických požadavků</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vzduchotechnika;
