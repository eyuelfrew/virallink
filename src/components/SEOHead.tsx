import Head from 'next/head';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
}

export default function SEOHead({
  title = 'Viralink - Digital Marketing Agency | SEO, Social Media & Web Development',
  description = 'Professional digital marketing agency in Ethiopia. Expert SEO, social media marketing, web development, and content creation services. Grow your business online with Viralink.',
  keywords = ['digital marketing', 'SEO', 'social media marketing', 'web development', 'Ethiopia', 'Addis Ababa'],
  canonicalUrl = 'https://virallinkdigital.com',
  ogImage = '/og-image.jpg',
  noindex = false
}: SEOHeadProps) {
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      
      {/* Robots */}
      <meta name="robots" content={noindex ? 'noindex,nofollow' : 'index,follow'} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Viralink Digital Marketing" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Tags */}
      <meta name="author" content="Viralink Digital Marketing" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="ET" />
      <meta name="geo.placename" content="Addis Ababa" />
      <meta name="geo.position" content="9.031944;38.761111" />
      <meta name="ICBM" content="9.031944, 38.761111" />
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//www.google-analytics.com" />
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
    </Head>
  );
}