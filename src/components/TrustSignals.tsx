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
    <section className="bg-primary-dark py-16 text-white lg:py-24" aria-labelledby="duveryhodnost">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="flex items-center gap-3 text-sm font-medium text-white/80"><span className="h-px w-8 bg-primary-light" aria-hidden="true" />O společnosti</p>
            <h2 id="duveryhodnost" className="mt-4 max-w-md text-3xl font-medium tracking-tight text-white md:text-4xl">
              Od technického zadání po kontrolní měření
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-white/80">
            Jednotlivé části dodávky plánujeme společně, aby dispozice, vzduchotechnika, filtrace,
            měření a servis vycházely ze stejného provozního zadání.
          </p>
        </div>
        <div className="mt-12 grid border-y border-white/20 md:grid-cols-3">
          {signals.map(({ icon: Icon, title, text }) => (
            <article key={title} className="border-b border-white/20 p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-8">
              <Icon strokeWidth={1.5} className="h-[18px] w-[18px] text-primary-light" aria-hidden="true" />
              <h3 className="mt-6 text-xl font-medium text-white">{title}</h3>
              <p className="mt-4 leading-relaxed text-white/80">{text}</p>
            </article>
          ))}
        </div>
        <Link href="/o-nas" className="mt-8 inline-flex items-center gap-2 font-medium text-white underline decoration-white/40 underline-offset-4 hover:decoration-white focus-visible:outline-white">
          Jak postupujeme při zakázce
          <ArrowRight className="h-[18px] w-[18px]" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
