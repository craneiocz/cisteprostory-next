import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cisteprostory.eu';
  const routes = [
    '',
    '/ciste-prostory',
    '/vzduchotechnika',
    '/mereni-a-validace',
    '/servis',
    '/ochrana-udaju',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
