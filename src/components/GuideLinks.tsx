import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function GuideLinks({
  eyebrow = 'Navazující informace',
  title,
  description,
  links,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  links: Array<{ href: string; title: string; text: string }>;
}) {
  return (
    <section className="border-y border-border bg-accent/20 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-primary">{eyebrow}</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">{title}</h2>
          </div>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">{description}</p>
        </div>
        <div className={`mt-10 grid border-y border-border ${links.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="group border-b border-border p-7 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary">{link.title}</h3>
                <ArrowRight className="h-5 w-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">{link.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
