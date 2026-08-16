import Link from 'next/link';

export default function ServiceCrossLink() {
  return (
    <section className="border-t border-border py-16" aria-labelledby="kompletni-reseni-cistych-prostor">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 id="kompletni-reseni-cistych-prostor" className="text-3xl font-bold text-foreground">
          Kompletní řešení čistých prostor
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Propojujeme návrh, realizaci, vzduchotechniku, měření, validaci a servis podle potřeb konkrétního provozu.
        </p>
        <Link
          href="/ciste-prostory"
          className="mt-6 inline-flex font-semibold text-primary underline underline-offset-4 hover:text-primary-dark"
        >
          Prohlédnout realizaci čistých prostor
        </Link>
      </div>
    </section>
  );
}
