import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  path: '/ochrana-udaju',
  title: 'Ochrana osobních údajů | cisteprostory.eu',
  description: 'Informace o zpracování osobních údajů společností BRNO CREATIVE s.r.o. v souladu s GDPR.',
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
                Zpracováváme pouze údaje, které nám sami poskytnete prostřednictvím kontaktního formuláře nebo e-mailu:
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
                Vaše osobní údaje zpracováváme výhradně za účelem vyřízení vašeho dotazu nebo poptávky 
                týkající se čistých prostor, laboratorních boxů, validací nebo vzduchotechniky. 
                Údaje využíváme k odpovědi na váš dotaz, přípravě cenové nabídky a případnému plnění smlouvy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Předáváme údaje třetím stranám?</h2>
              <p>
                Vaše osobní údaje neprodáváme. Údaje z kontaktního formuláře mohou být zpracovávány
                prostřednictvím technických nástrojů nezbytných pro provoz webu, zejména hostingem a
                e-mailovým serverem. Pokud udělíte souhlas s analytickými cookies, údaje o používání
                webu zpracovává také Google Analytics podle popisu níže.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Cookies a měření návštěvnosti</h2>
              <p>
                Web používá nezbytné technologie potřebné pro jeho fungování a zapamatování volby cookies.
                Analytické cookies Google Analytics 4 používáme pouze na základě vašeho předchozího souhlasu.
                Pomáhají nám vyhodnocovat návštěvnost a používání jednotlivých částí webu.
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
                Osobní údaje uchováváme po dobu nezbytně nutnou k naplnění účelu jejich zpracování, 
                maximálně však po dobu 3 let od posledního kontaktu, pokud zákon nestanoví jinak.
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
              Tyto zásady ochrany osobních údajů jsou platné od 1. 1. 2025.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default OchranaUdaju;
