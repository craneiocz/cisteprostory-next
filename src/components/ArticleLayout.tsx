import type { ReactNode } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSchema from '@/components/PageSchema';
import { articleAuthor, type ArticleSection, type ArticleSummary } from '@/lib/articles';
import { ArrowRight, BookOpen, CheckCircle2 } from 'lucide-react';

type ArticleLayoutProps = {
  article: ArticleSummary;
  relatedLinks: Array<{ href: string; label: string }>;
  relatedArticles: ArticleSummary[];
  children: ReactNode;
};

export function ArticleCallout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <aside className="not-prose my-10 border-l-4 border-primary bg-accent/45 px-6 py-5 sm:px-8" role="note">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{title}</p>
      <div className="mt-3 leading-relaxed text-foreground">{children}</div>
    </aside>
  );
}

export function ArticleChecklist({ items }: { items: string[] }) {
  return (
    <div className="not-prose my-10 grid gap-3 border-y border-border py-6 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function ArticleContents({ sections }: { sections: ArticleSection[] }) {
  return (
    <nav aria-label="Obsah stránky" className="rounded-xl border border-border bg-accent/20 p-5">
      <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
        <BookOpen className="h-4 w-4 text-primary" aria-hidden="true" />
        Obsah stránky
      </div>
      <ol className="mt-4 space-y-3 border-l border-border pl-4 text-sm">
        {sections.map((section, index) => (
          <li key={section.id}>
            <a href={`#${section.id}`} className="text-muted-foreground transition-colors hover:text-primary">
              <span className="mr-2 font-mono text-xs text-primary">{String(index + 1).padStart(2, '0')}</span>
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function ArticleLayout({
  article,
  relatedLinks,
  relatedArticles,
  children,
}: ArticleLayoutProps) {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    articleSection: article.topic,
    mainEntityOfPage: `https://www.cisteprostory.eu${article.path}`,
    author: {
      '@type': 'Organization',
      name: articleAuthor,
      url: 'https://www.cisteprostory.eu/clanky',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Čisté prostory',
      url: 'https://www.cisteprostory.eu',
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <PageSchema path={article.path} title={article.title} description={article.description} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full border border-white/10" aria-hidden="true" />
        <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full border border-white/10" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <nav className="mb-8 text-sm text-white/65" aria-label="Drobečková navigace">
              <Link href="/" className="hover:text-white">Domů</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <Link href="/clanky" className="hover:text-white">Témata</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span className="text-white/85">{article.topic}</span>
            </nav>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/65">{article.topic}</p>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">{article.title}</h1>
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/85">{article.intro}</p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/20 pt-5 text-sm text-white/70">
              <span>{articleAuthor}</span>
              <span>{article.readingTime}</span>
              <span>Praktický průvodce</span>
            </div>
          </div>
        </div>
      </section>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16 lg:py-20">
          <article className="min-w-0">
            <div className="prose prose-lg max-w-none prose-headings:scroll-mt-28 prose-headings:tracking-tight prose-headings:text-foreground prose-p:leading-relaxed prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
              {children}
            </div>
            <aside className="mt-16 border-t border-border pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">Související služby</p>
              <div className="mt-5 flex flex-wrap gap-x-8 gap-y-4">
                {relatedLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="inline-flex items-center gap-2 font-semibold text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary">
                    {link.label}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </aside>
            <section className="mt-14 border-t border-border pt-8" aria-labelledby="related-articles">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">Pokračujte ve čtení</p>
              <h2 id="related-articles" className="mt-3 text-2xl font-semibold tracking-tight text-foreground">Související témata</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {relatedArticles.map((relatedArticle) => (
                  <Link key={relatedArticle.path} href={relatedArticle.path} className="group rounded-xl border border-border p-5 transition-colors hover:border-primary/50 hover:bg-accent/20">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{relatedArticle.topic}</p>
                    <h3 className="mt-3 font-semibold leading-snug text-foreground group-hover:text-primary">{relatedArticle.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{relatedArticle.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          </article>
          <aside className="order-first lg:order-none">
            <div className="lg:sticky lg:top-28">
              <ArticleContents sections={article.sections} />
              <Link href="/clanky" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
                Všechna témata
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}
