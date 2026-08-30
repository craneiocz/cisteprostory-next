import type { MetadataRoute } from 'next';
import { articles } from '@/lib/articles';
import { guideList } from '@/lib/guides';
import { createCanonicalUrl } from '@/lib/seo';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '/', lastModified: '2026-08-28', priority: 1 },
    { path: '/ciste-prostory', lastModified: '2026-08-28', priority: 0.9 },
    { path: '/vzduchotechnika', lastModified: '2026-08-28', priority: 0.8 },
    { path: '/mereni-a-validace', lastModified: '2026-08-30', priority: 0.8 },
    { path: '/integrita-hepa-filtru', lastModified: '2026-08-22', priority: 0.8 },
    { path: '/pocet-castic-iso-14644', lastModified: '2026-08-22', priority: 0.8 },
    { path: '/servis', lastModified: '2026-08-28', priority: 0.8 },
    { path: '/clanky', lastModified: '2026-08-28', priority: 0.7 },
    { path: '/o-nas', lastModified: '2026-08-28', priority: 0.6 },
    { path: '/ochrana-udaju', lastModified: '2026-08-16', priority: 0.3 },
  ];

  const articleRoutes = articles.map((article) => ({
    path: article.path,
    lastModified: article.updatedAt,
    priority: 0.7,
  }));
  const guideRoutes = guideList.map((guide) => ({
    path: guide.path,
    lastModified: guide.lastModified,
    priority: 0.7,
  }));

  return [...routes, ...articleRoutes, ...guideRoutes].map((route) => ({
    url: createCanonicalUrl(route.path),
    lastModified: route.lastModified,
    changeFrequency: 'monthly' as const,
    priority: route.priority,
  }));
}
