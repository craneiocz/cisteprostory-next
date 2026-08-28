import type { Metadata } from 'next';
import GuidePage from '@/components/GuidePage';
import { guides } from '@/lib/guides';
import { createPageMetadata } from '@/lib/seo';

const guide = guides.designBudget;

export const metadata: Metadata = createPageMetadata({
  path: guide.path,
  title: `${guide.title} | Čisté prostory`,
  description: guide.description,
  type: 'article',
});

export default function DesignBudgetPage() {
  return <GuidePage guide={guide} />;
}
