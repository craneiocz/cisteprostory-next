import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { articles } from '@/lib/articles';

export default function ExpertArticles() {
  return (
    <section className="border-y border-border bg-muted/30 py-16 lg:py-24" aria-labelledby="odborne-rozsireni">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-sm font-medium text-primary-dark">Navazující informace</p>
            <h2 id="odborne-rozsireni" className="mt-4 max-w-md text-3xl font-medium tracking-tight text-foreground md:text-4xl">Co řešit při návrhu a provozu</h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">Jak vybrat třídu čistoty, připravit měření nebo ověřit HEPA filtr. Praktická témata pro zadavatele, techniky a provozovatele čistých prostor.</p>
        </div>
        <div className="mt-12 grid border-y border-border md:grid-cols-3">
          {articles.map((article, index) => (
            <Link key={article.path} href={article.path} className="group transition-colors duration-150 hover:bg-muted border-b border-border p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs tabular-nums text-muted-foreground">{String(index + 1).padStart(2, '0')}</span>
                <ArrowUpRight strokeWidth={1.5} className="h-[18px] w-[18px] text-muted-foreground" aria-hidden="true" />
              </div>
              <p className="mt-8 text-sm text-muted-foreground">{article.topic}</p>
              <h3 className="mt-4 text-xl font-medium leading-snug text-foreground">{article.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{article.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/clanky" className="inline-flex items-center gap-2 font-medium text-primary-dark underline decoration-primary/40 underline-offset-4 hover:decoration-primary">
            Prohlédnout všechna témata
            <ArrowUpRight strokeWidth={1.5} className="h-[18px] w-[18px]" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
