import type { Metadata } from 'next';

export const SITE_URL = 'https://www.cisteprostory.eu';

export function createCanonicalUrl(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${path.replace(/\/$/, '')}/`;
}

type PageMetadataOptions = {
  path: string;
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
};

export type SchemaBreadcrumb = {
  name: string;
  path: string;
};

export function createPageMetadata({
  path,
  title,
  description,
  image = '/opengraph-image.png',
  type = 'website',
}: PageMetadataOptions): Metadata {
  const url = createCanonicalUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      type,
      url,
      siteName: 'Čisté prostory',
      locale: 'cs_CZ',
      images: [
        {
          url: `${SITE_URL}${image}`,
          alt: title,
          width: 1200,
          height: 630,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [
        {
          url: `${SITE_URL}${image}`,
          alt: title,
        },
      ],
    },
  };
}

export function createPageSchema({
  path,
  title,
  description,
  serviceName,
  serviceDescription,
  breadcrumbs,
  datePublished,
  dateModified,
}: PageMetadataOptions & {
  serviceName?: string;
  serviceDescription?: string;
  breadcrumbs?: SchemaBreadcrumb[];
  datePublished?: string;
  dateModified?: string;
}) {
  const url = createCanonicalUrl(path);
  const breadcrumbItems = breadcrumbs ?? [
    { name: 'Domů', path: '/' },
    { name: title, path },
  ];
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      name: title,
      url,
      description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      breadcrumb: { '@id': `${url}#breadcrumb` },
      ...(datePublished ? { datePublished } : {}),
      ...(dateModified ? { dateModified } : {}),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: breadcrumbItems.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: createCanonicalUrl(item.path),
      })),
    },
  ];

  if (serviceName && serviceDescription) {
    graph.push({
      '@type': 'Service',
      '@id': `${url}#service`,
      name: serviceName,
      description: serviceDescription,
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: 'CZ',
      url,
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
