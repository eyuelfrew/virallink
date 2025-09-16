import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Viralink Digital - Digital Marketing & Software Solutions',
    template: '%s | Viralink Digital'
  },
  description: 'Transform your digital presence with Viralink Digital\'s cutting-edge marketing strategies and innovative software solutions. We help businesses scale through data-driven marketing and powerful technology.',
  keywords: 'digital marketing, software solutions, SEO, social media marketing, web development, SaaS, marketing automation, Viralink Digital',
  authors: [{ name: 'Viralink Digital Team' }],
  creator: 'Viralink Digital',
  publisher: 'Viralink Digital',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://viralinkdigital.com',
    siteName: 'Viralink Digital',
    title: 'Viralink Digital - Digital Marketing & Software Solutions',
    description: 'Transform your digital presence with cutting-edge marketing strategies and innovative software solutions.',
    images: [
      {
        url: 'https://viralinkdigital.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Viralink Digital - Digital Marketing & Software Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Viralink Digital - Digital Marketing & Software Solutions',
    description: 'Transform your digital presence with cutting-edge marketing strategies and innovative software solutions.',
    creator: '@viralinkdigital',
    images: ['https://viralinkdigital.com/twitter-image.png'],
  },
  alternates: {
    canonical: 'https://viralinkdigital.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0284c7" />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
