import type { MetadataRoute } from 'next';
import { articles } from '@/lib/articles';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cisteprostory.eu';
  const contentLastModified = '2026-08-22';
  const routes = [
    '',
    '/ciste-prostory',
    '/vzduchotechnika',
    '/mereni-a-validace',
    '/integrita-hepa-filtru',
    '/pocet-castic-iso-14644',
    '/servis',
    '/ochrana-udaju',
  ];

  return [...routes, '/clanky', ...articles.map((article) => article.path)].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: contentLastModified,
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
