import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HomepageGallery from '@/components/HomepageGallery';
import Industries from '@/components/Industries';
import Standards from '@/components/Standards';
import Faq from '@/components/Faq';
import ExpertArticles from '@/components/ExpertArticles';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <HomepageGallery />
      <Industries />
      <Standards />
      <ExpertArticles />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
