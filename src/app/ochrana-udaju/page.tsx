import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  path: '/ochrana-udaju',
  title: 'Ochrana osobních údajů | cisteprostory.eu',
  description: 'Pracovní informace o zpracování údajů z kontaktního formuláře, cookies a analytiky Google Analytics 4.',
});

const OchranaUdaju = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-8">Ochrana osobních údajů</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Kdo jsme</h2>
              <p>
                Správcem osobních údajů je společnost <strong>BRNO CREATIVE s.r.o.</strong>, 
                se sídlem Lidická 700/19, 602 00 Brno, IČO: 07367066, DIČ: CZ07367066.
              </p>
              <p>
                Kontaktní e-mail: <a href="mailto:info@cisteprostory.eu" className="text-primary hover:underline">info@cisteprostory.eu</a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Jaké údaje sbíráme</h2>
              <p>
                Zpracováváme údaje, které nám sami poskytnete prostřednictvím kontaktního formuláře nebo e-mailu:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Jméno a příjmení</li>
                <li>E-mailová adresa</li>
                <li>Telefonní číslo (pokud ho uvedete)</li>
                <li>Obsah vaší zprávy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Proč údaje sbíráme</h2>
              <p>
                Údaje používáme k vyřízení dotazu nebo poptávky týkající se čistých prostor, laboratorních boxů,
                validací, vzduchotechniky nebo servisu. Slouží k odpovědi, přípravě nabídky a případnému
                navazujícímu smluvnímu jednání.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Předáváme údaje třetím stranám?</h2>
              <p>
                Vaše osobní údaje neprodáváme. Kontaktní formulář odesílá jméno, e-mail, volitelný telefon
                a zprávu na API provozované na adrese <code>api.cisteprostory.eu/email.php</code>.
                Přístup k údajům mohou mít technické služby nutné pro provoz API, e-mailu a hostingu.
                Google Analytics používáme pouze po udělení analytického souhlasu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cookies a měření návštěvnosti</h2>
              <p>
                Web používá nezbytné technologie pro fungování stránky a zapamatování volby cookies.
                Google Analytics 4 se načítá pouze po předchozím souhlasu s kategorií analytiky.
                Bez tohoto souhlasu analytické měření nepoužíváme.
              </p>
              <p>
                Google Analytics může zpracovávat údaje o návštěvě, používaném zařízení, prohlížeči,
                přibližné lokalitě a interakcích s webem. Poskytovatelem služby je Google Ireland Limited;
                údaje mohou být v rámci služby zpracovávány také mimo Evropský hospodářský prostor podle
                aktuálních podmínek a záruk společnosti Google.
              </p>
              <p>
                Volbu analytických cookies můžete odmítnout nebo později změnit pomocí odkazu
                „Nastavení cookies“ v patičce webu. Odmítnutí nemá vliv na používání webu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Doba uchovávání údajů</h2>
              <p>
                Osobní údaje uchováváme po dobu nezbytně nutnou k vyřízení účelu, nejdéle podle aktuálního
                interního retenčního pravidla a zákonných povinností. Konkrétní lhůtu a pravidla mazání je
                potřeba ověřit podle skutečného nastavení API, e-mailu a evidence poptávek.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Vaše práva</h2>
              <p>V souvislosti se zpracováním vašich osobních údajů máte právo:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Na přístup</strong> – zjistit, jaké údaje o vás evidujeme</li>
                <li><strong>Na opravu</strong> – požádat o opravu nepřesných údajů</li>
                <li><strong>Na výmaz</strong> – požádat o smazání vašich údajů</li>
                <li><strong>Na omezení zpracování</strong> – požádat o omezení zpracování</li>
                <li><strong>Odvolat souhlas</strong> – svůj souhlas můžete kdykoliv odvolat</li>
                <li><strong>Podat stížnost</strong> – u Úřadu pro ochranu osobních údajů (ÚOOÚ)</li>
              </ul>
              <p className="mt-4">
                Pro uplatnění jakéhokoliv práva nám stačí napsat na{' '}
                <a href="mailto:info@cisteprostory.eu" className="text-primary hover:underline">info@cisteprostory.eu</a>.
              </p>
            </section>



            <p className="text-sm text-muted-foreground mt-12">
              Tento text je redakčně sladěný s aktuálním chováním webu. Před zveřejněním je potřeba právně ověřit
              právní tituly, zpracovatele, retenční lhůty a případné přenosy údajů mimo EHP.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OchranaUdaju;
