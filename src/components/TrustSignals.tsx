import Link from 'next/link';
import { ArrowRight, ClipboardList, DraftingCompass, FileCheck2 } from 'lucide-react';

const signals = [
  {
    icon: ClipboardList,
    title: 'Technické zadání',
    text: 'Upřesníme účel prostoru, provozní režim, pohyb osob a materiálu, požadovanou třídu čistoty a návaznosti technologií.',
  },
  {
    icon: DraftingCompass,
    title: 'Návrh řešení',
    text: 'Navrhneme dispozici, povrchy, vzduchotechniku, filtraci a tlakové vazby tak, aby odpovídaly provozu i údržbě.',
  },
  {
    icon: FileCheck2,
    title: 'Měření a předání',
    text: 'Ověříme dohodnuté parametry a předáme výsledky s identifikací míst, podmínkami měření a závěrem pro další provoz.',
  },
] as const;

export default function TrustSignals() {
  return (
    <section className="border-y border-border bg-background py-20 lg:py-28" aria-labelledby="duveryhodnost">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">O společnosti</p>
            <h2 id="duveryhodnost" className="mt-5 max-w-md text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Od technického zadání po kontrolní měření
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Jednotlivé části dodávky plánujeme společně, aby dispozice, vzduchotechnika, filtrace,
            měření a servis vycházely ze stejného provozního zadání.
          </p>
        </div>
        <div className="mt-12 grid border-y border-border md:grid-cols-3">
          {signals.map(({ icon: Icon, title, text }) => (
            <article key={title} className="border-b border-border p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-9">
              <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
              <h3 className="mt-7 text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
        <Link href="/o-nas" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary">
          Jak postupujeme při zakázce
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
