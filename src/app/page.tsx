import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Industries from '@/components/Industries';
import Standards from '@/components/Standards';
import Faq from '@/components/Faq';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <Industries />
      <Standards />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}
