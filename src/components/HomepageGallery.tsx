import Image from 'next/image';
import Link from 'next/link';

export default function HomepageGallery() {
  return (
    <section className="border-y border-border bg-muted/20 py-16 lg:py-20" aria-labelledby="homepage-galerie">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">Prostředí v detailu</p>
            <h2 id="homepage-galerie" className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Čistota, kterou je možné ověřit
            </h2>
          </div>
          <Link
            href="/ciste-prostory"
            className="text-sm font-semibold text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:text-primary-dark"
          >
            Prohlédnout řešení čistých prostor
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-[1.35fr_0.65fr] md:items-end">
          <figure className="group">
            <div className="relative h-64 overflow-hidden border border-foreground/15 bg-muted md:h-[360px]">
              <Image
                src="/images/laminar-box-service-pro.png"
                alt="Laminární a bezpečnostní box v čistém provozu"
                fill
                sizes="(min-width: 768px) 65vw, 100vw"
                className="object-cover grayscale-[15%] transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
              />
            </div>
            <figcaption className="mt-3 flex justify-between gap-4 text-xs text-muted-foreground">
              <span>Laminární boxy a čisté provozy</span>
              <span className="font-mono text-primary">A01</span>
            </figcaption>
          </figure>

          <figure className="group">
            <div className="relative h-64 overflow-hidden border border-foreground/15 bg-muted md:h-[360px]">
              <Image
                src="/images/isolator-lab-service-pro.png"
                alt="Pracovník při práci v izolátoru v laboratorním provozu"
                fill
                sizes="(min-width: 768px) 32vw, 100vw"
                className="object-cover grayscale-[15%] transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
              />
            </div>
            <figcaption className="mt-3 flex justify-between gap-4 text-xs text-muted-foreground">
              <span>Izolátory a laboratorní provoz</span>
              <span className="font-mono text-primary">B02</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
