import Image from 'next/image';

const measurements = [
  ['01', 'Částice', 'Klasifikace čistoty vzduchu'],
  ['02', 'HEPA filtr', 'Test integrity filtrace'],
  ['03', 'Tlaková kaskáda', 'Směr proudění mezi zónami'],
  ['04', 'Protokol', 'Vyhodnocení podle limitů'],
];

export default function ValidationVisual() {
  return (
    <section className="my-16 border-y border-border py-8 lg:my-20 lg:py-10" aria-labelledby="merici-pristup">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <figure className="group">
          <div className="relative aspect-[16/10] overflow-hidden border border-foreground/15 bg-muted">
            <Image
              src="/images/isolator-lab-service-pro.png"
              alt="Laboratorní prostředí pro měření a validaci čistých prostor"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover grayscale-[15%] transition duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
            />
            <div className="absolute left-4 top-4 border border-white/60 bg-foreground/75 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
              Měření / ISO 14644
            </div>
            <div className="absolute bottom-4 right-4 h-10 w-10 border-b border-r border-white/80" aria-hidden="true" />
          </div>
          <figcaption className="mt-3 flex justify-between gap-4 text-xs text-muted-foreground">
            <span>Laboratorní měření a kontrola prostředí</span>
            <span className="font-mono text-primary">VAL / 02</span>
          </figcaption>
        </figure>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">02 / Přístup</p>
          <h2 id="merici-pristup" className="mt-4 text-3xl font-bold tracking-tight text-foreground">
            Měření, kterému rozumí technik i auditor
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Každé měření zasazujeme do provozního kontextu. Výsledkem není jen seznam hodnot,
            ale srozumitelný podklad pro rozhodnutí, údržbu a další kvalifikaci zařízení.
          </p>

          <dl className="mt-8 grid border-t border-border sm:grid-cols-2">
            {measurements.map(([number, label, description]) => (
              <div key={number} className="border-b border-border py-4 sm:pr-5">
                <dt className="flex items-center gap-3 font-semibold text-foreground">
                  <span className="font-mono text-xs font-normal text-primary">{number}</span>
                  {label}
                </dt>
                <dd className="mt-1 pl-7 text-sm text-muted-foreground">{description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
