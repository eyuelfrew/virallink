import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Viralink Digital Marketing Agency',
    short_name: 'Viralink',
    description: 'Professional digital marketing agency in Ethiopia providing SEO, social media marketing, web development, and content creation services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['business', 'marketing', 'productivity'],
    lang: 'en',
    orientation: 'portrait-primary',
  };
}