import type { Metadata } from 'next';

export const SITE_URL = 'https://www.cisteprostory.eu';

type PageMetadataOptions = {
  path: string;
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
};

export function createPageMetadata({
  path,
  title,
  description,
  image = '/opengraph-image.png',
  type = 'website',
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;

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
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${SITE_URL}${image}`],
    },
  };
}

export function createPageSchema({
  path,
  title,
  description,
  serviceName,
  serviceDescription,
}: PageMetadataOptions & {
  serviceName?: string;
  serviceDescription?: string;
}) {
  const url = `${SITE_URL}${path}`;
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      name: title,
      url,
      description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      breadcrumb: { '@id': `${url}#breadcrumb` },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Domů',
          item: `${SITE_URL}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: title,
          item: url,
        },
      ],
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
