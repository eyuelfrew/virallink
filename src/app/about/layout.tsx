import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Viralink | Ethiopian Digital Marketing Experts | Our Story & Team',
  description: 'Meet the passionate Ethiopian team behind Viralink. Learn about our mission, vision, and journey from Addis Ababa startup to global digital marketing leader.',
  keywords: 'about Viralink, Ethiopian digital marketing team, Addis Ababa startup, digital marketing experts, our story, company mission',
  openGraph: {
    title: 'About Viralink | Ethiopian Digital Marketing Experts | Our Story & Team',
    description: 'Meet the passionate Ethiopian team behind Viralink and learn about our journey to digital marketing excellence.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Viralink | Ethiopian Digital Marketing Experts',
    description: 'Meet the passionate Ethiopian team behind Viralink and learn about our journey to digital marketing excellence.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}