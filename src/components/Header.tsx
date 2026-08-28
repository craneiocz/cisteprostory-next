'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import logoImage from '@/assets/cisteprostory-logo.webp';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Čisté prostory', href: '/ciste-prostory' },
    { name: 'Vzduchotechnika', href: '/vzduchotechnika' },
    { name: 'Měření a validace', href: '/mereni-a-validace' },
    { name: 'Servis', href: '/servis' },
    { name: 'O nás', href: '/o-nas' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={logoImage}
              width={813}
              height={294}
              alt="Čisté Prostory - Vzduchotechnika, HEPA filtry, validace"
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button asChild className="bg-primary text-primary-foreground shadow-elegant hover:bg-primary-dark">
              <Link href="/#kontakt">Kontakt</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              aria-label={isMenuOpen ? 'Zavřít navigaci' : 'Otevřít navigaci'}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-border/70 py-4 bg-background/95">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-2 font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mx-2 mt-4 bg-primary text-primary-foreground shadow-elegant hover:bg-primary-dark">
                <Link href="/#kontakt">Kontakt</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
