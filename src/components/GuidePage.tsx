import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageSchema from '@/components/PageSchema';
import type { Guide } from '@/lib/guides';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';

export default function GuidePage({ guide }: { guide: Guide }) {
  return (
    <div className="min-h-screen bg-background">
      <PageSchema
        path={guide.path}
        title={guide.title}
        description={guide.description}
        breadcrumbs={[
          { name: 'Domů', path: '/' },
          { name: guide.parentLabel, path: guide.parentPath },
          { name: guide.title, path: guide.path },
        ]}
        datePublished="2026-08-28"
        dateModified={guide.lastModified}
      />
      <Header />
      <section className="relative overflow-hidden bg-gradient-hero text-white">
        <div className="absolute -right-24 top-0 h-80 w-80 rounded-full border border-white/10" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <nav className="mb-8 text-sm text-white/65" aria-label="Drobečková navigace">
            <Link href="/" className="hover:text-white">Domů</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <Link href={guide.parentPath} className="hover:text-white">{guide.parentLabel}</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white/85">{guide.eyebrow}</span>
          </nav>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/65">
            {guide.eyebrow}
          </p>
          <h1 className="max-w-5xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">
            {guide.title}
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/85">{guide.intro}</p>
          <p className="mt-8 border-t border-white/20 pt-5 text-sm text-white/65">
            Odborný obsah společnosti BRNO CREATIVE s.r.o. · Aktualizováno{' '}
            <time dateTime={guide.lastModified}>28. 8. 2026</time>
          </p>
        </div>
      </section>

      <main className="mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:px-8 lg:py-24">
        <article className="min-w-0">
          {guide.sections.map((section, index) => (
            <section key={section.id} id={section.id} className="scroll-mt-28 border-b border-border py-12 first:pt-0">
              <p className="font-mono text-xs text-primary">{String(index + 1).padStart(2, '0')}</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">{section.title}</h2>
              <div className="mt-7 max-w-3xl space-y-5 text-lg leading-relaxed text-muted-foreground">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {section.items && (
                <ul className="mt-8 grid gap-4 border-y border-border py-6 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 leading-relaxed text-muted-foreground">
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <section className="mt-14 bg-foreground px-7 py-10 text-background sm:px-10" aria-labelledby="guide-cta">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary-light">Další krok</p>
            <h2 id="guide-cta" className="mt-4 text-3xl font-bold tracking-tight">{guide.ctaLabel}</h2>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-background/75">{guide.ctaText}</p>
            <Link
              href="/#kontakt"
              data-analytics-event="cta_click"
              data-analytics-label={guide.path}
              className="mt-8 inline-flex items-center gap-2 font-semibold text-primary-light underline underline-offset-4 hover:text-white"
            >
              Odeslat technické zadání
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </section>
        </article>

        <aside>
          <div className="space-y-8 lg:sticky lg:top-28">
            <nav className="rounded-xl border border-border bg-accent/20 p-6" aria-label="Obsah stránky">
              <p className="font-semibold text-foreground">Obsah stránky</p>
              <ol className="mt-5 space-y-3 border-l border-border pl-4 text-sm">
                {guide.sections.map((section, index) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`} className="text-muted-foreground hover:text-primary">
                      <span className="mr-2 font-mono text-xs text-primary">{String(index + 1).padStart(2, '0')}</span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <section className="border-t border-border pt-6" aria-labelledby="guide-related">
              <h2 id="guide-related" className="font-semibold text-foreground">Související stránky</h2>
              <div className="mt-4 space-y-3">
                {guide.relatedLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="flex items-start gap-2 text-sm font-medium text-primary hover:underline">
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>

            <section className="border-t border-border pt-6" aria-labelledby="guide-sources">
              <h2 id="guide-sources" className="font-semibold text-foreground">Primární zdroje</h2>
              <div className="mt-4 space-y-3">
                {guide.sources.map((source) => (
                  <a
                    key={source.href}
                    href={source.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary"
                  >
                    <ExternalLink className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    {source.label}
                  </a>
                ))}
              </div>
            </section>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
}
