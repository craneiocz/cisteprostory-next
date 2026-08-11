import Image from "next/image";
import Link from "next/link";

const highlights = [
  "Fotografie čistých prostor a laboratorních provozů.",
  "Ukázky prostředí pro výrobu, výzkum a kontrolovanou práci.",
  "Přehled měření a validačních služeb podle ISO 14644.",
];

export default function VisualShowcase() {
  return (
    <section id="vizualni-prostory" className="border-y border-border bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="lg:pt-3">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">
              01 / Prostředí
            </p>
            <h2 className="mt-5 max-w-xl text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Čisté prostory viděné v reálném provozu
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Prohlédněte si prostředí čistých prostor a laboratorních provozů. Získáte tak lepší
              představu o řešeních pro řízenou čistotu, HEPA filtraci a odbornou validaci čistých
              prostor podle ISO 14644.
            </p>

            <ul className="mt-8 border-t border-border pt-5">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-4 border-b border-border py-3 text-sm text-muted-foreground">
                  <span
                    className="font-mono text-xs font-semibold text-primary"
                  >
                    0{highlights.indexOf(item) + 1}
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/mereni-a-validace"
                className="inline-flex items-center justify-center border border-primary bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-dark"
              >
                Validace čistých prostor
              </Link>
              <Link
                href="/ciste-prostory"
                className="inline-flex items-center justify-center border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Čisté prostory
              </Link>
            </div>
          </div>

          <div className="relative grid gap-5 sm:grid-cols-[1.25fr_0.75fr] sm:items-end">
            <figure className="group">
              <div className="relative aspect-[4/5] overflow-hidden border border-foreground/15 bg-muted">
                <Image
                  src="/images/cleanroom-hero.png"
                  alt="Čisté prostory s HEPA filtrací pro validaci čistých prostor"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover grayscale-[15%] transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
                />
              </div>
              <figcaption className="mt-3 flex gap-3 border-t border-border pt-3">
                <span className="font-mono text-xs text-primary">A01</span>
                <span className="text-sm leading-relaxed text-muted-foreground">
                  Čisté prostory s řízeným prouděním vzduchu pro výrobu a výzkum.
                </span>
              </figcaption>
            </figure>

            <div className="space-y-5 sm:pb-14">
              <figure className="group">
                <div className="relative aspect-[16/10] overflow-hidden border border-foreground/15 bg-muted">
                <Image
                  src="/images/laboratory-hero.png"
                  alt="Laboratorní prostor pro validaci a měření čistých prostor"
                  fill
                  sizes="(min-width: 1024px) 28vw, 100vw"
                  className="object-cover grayscale-[15%] transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
                />
                </div>
                <figcaption className="mt-3 flex gap-3 border-t border-border pt-3">
                  <span className="font-mono text-xs text-primary">B02</span>
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    Laboratorní pracoviště pro přesné měření, filtraci a validaci.
                  </span>
                </figcaption>
              </figure>

              <div className="border-l-2 border-primary pl-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                  Kontrolované prostředí
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Od návrhu a filtrace po měření částic, testy HEPA filtrů a validační protokoly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
