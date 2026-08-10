'use client';

import { useState } from 'react';
import { Mail, MapPin, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await fetch('https://api.cisteprostory.eu/email.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Nepodařilo se odeslat email přes API');

      toast({
        title: "Zpráva odeslána",
        description: "Děkujeme za váš zájem. V brzké době vás budeme kontaktovat.",
      });
      (e.target as HTMLFormElement).reset();
    } catch (error: unknown) {
      console.error('Error sending contact form:', error);
      toast({
        title: "Chyba při odesílání",
        description: "Nepodařilo se odeslat zprávu. Zkuste to prosím znovu.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-20 lg:py-32 bg-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Kontaktujte <span className="text-primary">nás</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Připravíme nabídku na míru – čisté prostory, validace nebo servis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="border-border/70 bg-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <Mail className="h-6 w-6 text-primary mr-3" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-foreground">info@cisteprostory.eu</p>
                <p className="text-muted-foreground">Odpovídáme do 24 hodin</p>
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-foreground">
                  <MapPin className="h-6 w-6 text-primary mr-3" />
                  Adresa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium text-foreground">Česká republika</p>
                <p className="text-muted-foreground">Působíme po celé ČR</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col justify-center">
            <Card className="border-border/70 bg-card shadow-card">
              <CardHeader>
                <h3 className="text-2xl font-bold text-foreground">Kontaktní formulář</h3>
              </CardHeader>
              <CardContent className="p-8">
                <p className="text-sm text-muted-foreground mb-4">* = povinný údaj</p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Jméno a příjmení *</label>
                    <input type="text" id="name" name="name" required disabled={isSubmitting} className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50" placeholder="Jan Novák" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">E-mail *</label>
                    <input type="email" id="email" name="email" required disabled={isSubmitting} className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50" placeholder="jan.novak@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Telefon</label>
                    <input type="tel" id="phone" name="phone" disabled={isSubmitting} className="w-full rounded-md border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50" placeholder="+420 123 456 789" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Zpráva *</label>
                    <textarea id="message" name="message" required disabled={isSubmitting} rows={4} className="w-full resize-none rounded-md border border-input bg-background px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50" placeholder="Napište nám váš dotaz..." />
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Odesláním formuláře beru na vědomí, že společnost BRNO CREATIVE s.r.o. zpracovává mé osobní údaje za účelem vyřízení dotazu/poptávky v souladu s GDPR. Více informací naleznete v{' '}
                    <a href="/ochrana-udaju" className="text-primary underline hover:text-primary/80">Ochrana osobních údajů</a>.
                  </p>
                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-primary text-primary-foreground text-lg py-6 hover:bg-primary-dark">
                    {isSubmitting ? (<><Loader2 className="mr-2 h-5 w-5 animate-spin" />Odesílám...</>) : ('Odeslat')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
