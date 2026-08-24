import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { articles } from '@/lib/articles';

export default function ExpertArticles() {
  return (
    <section className="border-y border-border bg-accent/20 py-20 lg:py-28" aria-labelledby="odborne-rozsireni">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">Navazující informace</p>
            <h2 id="odborne-rozsireni" className="mt-5 max-w-md text-3xl font-bold tracking-tight text-foreground md:text-5xl">Co řešit při návrhu a provozu</h2>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">Krátké vstupy na homepage nahrazujeme praktickými odbornými průchody. Každý navazuje na konkrétní službu a řeší situaci, se kterou se může setkat provoz, technik nebo zadavatel.</p>
        </div>
        <div className="mt-12 grid border-y border-border md:grid-cols-3">
          {articles.map((article, index) => (
            <Link key={article.path} href={article.path} className="group border-b border-border p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:p-9">
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-xs text-primary">{String(index + 1).padStart(2, '0')}</span>
                <ArrowUpRight className="h-5 w-5 text-primary transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
              </div>
              <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{article.topic}</p>
              <h3 className="mt-4 text-xl font-semibold leading-snug text-foreground">{article.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{article.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/clanky" className="inline-flex items-center gap-2 font-semibold text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary">
            Prohlédnout všechna témata
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
