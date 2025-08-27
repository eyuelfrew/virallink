import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digital Marketing Blog | Expert Insights & Tips | Viralink',
  description: 'Stay updated with the latest digital marketing trends, SEO tips, social media strategies, and industry insights from Viralink experts. Read our comprehensive blog posts.',
  keywords: 'digital marketing blog, SEO tips, social media marketing, content marketing, marketing trends, Viralink blog',
  openGraph: {
    title: 'Digital Marketing Blog | Expert Insights & Tips | Viralink',
    description: 'Stay updated with the latest digital marketing trends and expert insights from Viralink.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Blog | Expert Insights & Tips | Viralink',
    description: 'Stay updated with the latest digital marketing trends and expert insights from Viralink.',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}