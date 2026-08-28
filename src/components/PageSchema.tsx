import { createPageSchema, type SchemaBreadcrumb } from '@/lib/seo';

type PageSchemaProps = {
  path: string;
  title: string;
  description: string;
  serviceName?: string;
  serviceDescription?: string;
  breadcrumbs?: SchemaBreadcrumb[];
  datePublished?: string;
  dateModified?: string;
};

export default function PageSchema({
  path,
  title,
  description,
  serviceName,
  serviceDescription,
  breadcrumbs,
  datePublished,
  dateModified,
}: PageSchemaProps) {
  const schema = createPageSchema({
    path,
    title,
    description,
    serviceName,
    serviceDescription,
    breadcrumbs,
    datePublished,
    dateModified,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
