import Image from 'next/image';
import Link from 'next/link';

export default function HomepageGallery() {
  return (
    <section className="border-y border-border bg-muted/20 py-16 lg:py-20" aria-labelledby="homepage-galerie">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary-dark">Prostředí v detailu</p>
            <h2 id="homepage-galerie" className="mt-3 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Čisté prostory v reálném provozu
            </h2>
          </div>
          <Link
            href="/ciste-prostory"
            className="text-sm font-medium text-primary-dark underline decoration-primary/30 underline-offset-4 transition-colors hover:text-foreground"
          >
            Prohlédnout řešení čistých prostor
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-[1.35fr_0.65fr] md:items-end">
          <figure>
            <div className="relative h-64 overflow-hidden rounded-xl border border-border bg-muted md:h-[360px]">
              <Image
                src="/images/laminar-box-service-pro.webp"
                width={1448}
                height={1086}
                alt="Laminární a bezpečnostní box v čistém provozu"
                loading="lazy"
                sizes="(min-width: 768px) 65vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 flex justify-between gap-4 text-xs text-muted-foreground">
              <span>Laminární boxy a čisté provozy</span>
              <span className="font-mono text-primary-dark">A01</span>
            </figcaption>
          </figure>

          <figure>
            <div className="relative h-64 overflow-hidden rounded-xl border border-border bg-muted md:h-[360px]">
              <Image
                src="/images/isolator-lab-service-pro.webp"
                width={1448}
                height={1086}
                alt="Pracovník při práci v izolátoru v laboratorním provozu"
                loading="lazy"
                sizes="(min-width: 768px) 32vw, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 flex justify-between gap-4 text-xs text-muted-foreground">
              <span>Izolátory a laboratorní provoz</span>
              <span className="font-mono text-primary-dark">B02</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
