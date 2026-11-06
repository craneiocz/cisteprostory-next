import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const services = [
  { label: 'Validace a měření', href: '/mereni-a-validace' },
  { label: 'Návrh a realizace', href: '/ciste-prostory' },
  { label: 'Vzduchotechnika', href: '/vzduchotechnika' },
  { label: 'Servis', href: '/servis' },
];

export default function Hero() {
  return (
    <section className="isolate overflow-hidden bg-accent pb-4 pt-4 lg:pt-6" aria-labelledby="hero-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden rounded-2xl bg-primary-foreground text-white">
          <Image
            src="/images/cleanroom-hero.webp"
            alt="Interiér čistého prostoru se stropními vyústkami, prosklenými příčkami a laboratorním vybavením"
            fill
            priority
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="-z-20 object-cover object-[60%_center] lg:object-center"
          />
          <div className="hero-scene-shade absolute inset-0 -z-10" aria-hidden="true" />

          <div className="flex min-h-[560px] items-center px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <div className="max-w-lg">
              <p className="flex items-center gap-3 text-sm text-white/85">
                <span className="h-px w-8 bg-primary-light" aria-hidden="true" />
                Návrh · realizace · validace
              </p>
              <h1 id="hero-title" className="mt-6 text-[40px] font-medium leading-[1.06] tracking-[-0.03em] sm:text-[56px] lg:text-[64px]">
                <span className="block">Čisté prostory</span>
                <span className="mt-2 block font-normal">od návrhu<br />po validaci</span>
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/85 sm:text-lg">
                Navrhujeme a realizujeme čisté prostory pro laboratoře, zdravotnictví, farmacii a výrobu. Zajistíme měření, dokumentaci i následný servis.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                <Link href="/#kontakt" className="inline-flex min-h-12 items-center justify-center gap-4 rounded-lg bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors duration-150 hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  Probrat váš projekt
                  <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
                </Link>
                <Link href="#sluzby" className="inline-flex min-h-12 items-center gap-2 rounded-lg text-sm font-medium text-white underline decoration-white/40 underline-offset-4 hover:decoration-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  Prohlédnout služby
                  <ArrowDown size={18} strokeWidth={1.5} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 hidden items-center gap-3 text-xs text-white lg:flex" aria-hidden="true">
            <span className="h-px w-8 bg-white/70" />
            <span className="rounded-md bg-primary-foreground px-3 py-2">Řízené prostředí / čisté prostory</span>
          </div>
        </div>

        <nav aria-label="Hlavní služby" className="grid grid-cols-2 pt-4 lg:grid-cols-4">
          {services.map(({ label, href }) => (
            <Link key={href} href={href} className="flex min-h-16 items-center gap-3 border-b border-primary/25 px-3 py-4 text-sm font-medium text-primary-foreground transition-colors duration-150 hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-primary-dark sm:px-4 lg:border-b-0 lg:border-r lg:last:border-r-0">
              <span>{label}</span>
              <ArrowUpRight className="ml-auto h-[18px] w-[18px] shrink-0 text-primary-dark" strokeWidth={1.5} aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
