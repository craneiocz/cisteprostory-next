import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSchema from '@/components/PageSchema';
import { articles, articleAuthor } from '@/lib/articles';
import { ArrowUpRight, BookOpen } from 'lucide-react';
import { createPageMetadata } from '@/lib/seo';

const path = '/clanky';

export const metadata: Metadata = createPageMetadata({
  path,
  title: 'Praktické informace k čistým prostorům | Čisté prostory',
  description:
    'Praktické informace k návrhu čistých prostor, měření podle ISO 14644 a kontrole HEPA filtrace.',
});

export default function ArticlesPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Praktické informace k čistým prostorům',
    description: 'Praktické informace k čistým prostorům, měření a filtraci.',
    url: 'https://www.cisteprostory.eu/clanky',
    author: {
      '@type': 'Organization',
      name: articleAuthor,
    },
    hasPart: articles.map((article) => ({
      '@type': 'Article',
      headline: article.title,
      url: `https://www.cisteprostory.eu${article.path}`,
      articleSection: article.topic,
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <PageSchema
        path={path}
        title="Praktické informace k čistým prostorům"
        description="Praktické informace k čistým prostorům, měření a filtraci."
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <Header />
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full border border-white/10" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/65">Praktické informace</p>
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">Praktické informace pro návrh a provoz</h1>
            <p className="mt-8 text-xl leading-relaxed text-white/85">Vysvětlení rozhodnutí, která navazují na návrh čistých prostor, měření a servis filtrace.</p>
          </div>
        </div>
      </section>
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-12 flex items-end justify-between gap-8 border-b border-border pb-8">
          <div>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">Redakce Čisté prostory</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">Témata podle skutečných provozních otázek</h2>
          </div>
          <BookOpen className="hidden h-10 w-10 text-primary md:block" aria-hidden="true" />
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Link key={article.path} href={article.path} className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-200 hover:-translate-y-1 hover:border-primary/50 hover:shadow-card lg:p-9">
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-sm text-primary">{String(index + 1).padStart(2, '0')}</span>
                <ArrowUpRight className="h-5 w-5 text-primary transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
              </div>
              <p className="mt-12 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{article.topic}</p>
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-foreground group-hover:text-primary">{article.title}</h3>
              <p className="mt-5 flex-1 leading-relaxed text-muted-foreground">{article.description}</p>
              <div className="mt-8 border-t border-border pt-5 text-sm text-muted-foreground">{articleAuthor} <span className="mx-2 text-border">·</span> {article.readingTime}</div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
