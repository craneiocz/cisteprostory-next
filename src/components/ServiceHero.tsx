import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type ServiceHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  links?: Array<{ href: string; label: string }>;
};

export default function ServiceHero({ eyebrow, title, description, links = [] }: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      <div className="absolute -right-24 top-0 h-80 w-80 rounded-full border border-white/10" aria-hidden="true" />
      <div className="absolute bottom-0 left-1/3 h-40 w-40 rounded-full border border-white/10" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-8 lg:py-28">
        <div>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-white/65">{eyebrow}</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.08] tracking-tight md:text-6xl">{title}</h1>
        </div>
        <div className="border-l border-white/25 pl-6 lg:mb-2">
          <p className="text-lg leading-relaxed text-white/85">{description}</p>
          {links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold">
              {links.map((link) => (
                <Link key={link.href} href={link.href} className="inline-flex items-center gap-2 text-white underline decoration-white/40 underline-offset-4 hover:decoration-white">
                  {link.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
