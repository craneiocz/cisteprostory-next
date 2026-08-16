import { createPageSchema } from '@/lib/seo';

type PageSchemaProps = {
  path: string;
  title: string;
  description: string;
  serviceName?: string;
  serviceDescription?: string;
};

export default function PageSchema({
  path,
  title,
  description,
  serviceName,
  serviceDescription,
}: PageSchemaProps) {
  const schema = createPageSchema({
    path,
    title,
    description,
    serviceName,
    serviceDescription,
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
