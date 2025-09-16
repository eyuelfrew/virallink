import Script from 'next/script';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "Viralink Digital",
        "description": "Leading digital marketing company and software solutions provider helping businesses transform their digital presence and accelerate growth.",
        "url": "https://viralinkdigital.com",
        "logo": "https://viralinkdigital.com/logo.png",
        "foundingDate": "2020",
        "numberOfEmployees": "50-100",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-555-123-4567",
          "contactType": "Customer Service",
          "availableLanguage": "English",
          "areaServed": "Worldwide"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Digital Street",
          "addressLocality": "Tech City",
          "addressRegion": "TC",
          "postalCode": "12345",
          "addressCountry": "US"
        },
        "sameAs": [
          "https://www.facebook.com/viralinkdigital",
          "https://www.twitter.com/viralinkdigital",
          "https://www.linkedin.com/company/viralinkdigital",
          "https://www.instagram.com/viralinkdigital"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "500",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "LocalBusiness",
        "name": "Viralink Digital",
        "image": "https://viralinkdigital.com/logo.png",
        "url": "https://viralinkdigital.com",
        "telephone": "+1-555-123-4567",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Digital Street",
          "addressLocality": "Tech City",
          "addressRegion": "TC",
          "postalCode": "12345",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 34.052235,
          "longitude": -118.243683
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday"
          ],
          "opens": "09:00",
          "closes": "17:00"
        }
      },
      {
        "@type": "WebSite",
        "name": "Viralink Digital",
        "description": "Digital Marketing & Software Solutions",
        "url": "https://viralinkdigital.com",
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://viralinkdigital.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://viralinkdigital.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://viralinkdigital.com/services"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Products",
            "item": "https://viralinkdigital.com/products"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "About",
            "item": "https://viralinkdigital.com/about"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Contact",
            "item": "https://viralinkdigital.com/contact"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does Viralink Digital offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Viralink Digital offers comprehensive digital marketing services including SEO, social media marketing, content creation, digital advertising, and analytics. We also provide innovative software solutions like ViraFlow (marketing automation), ViraInsights (analytics), and ViraCRM (customer management)."
            }
          },
          {
            "@type": "Question",
            "name": "How quickly can I see results?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Most clients see initial improvements within 30 days, with significant results typically visible within 3-6 months. The timeline depends on your industry, competition, and chosen services."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer custom software development?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we provide custom software development services tailored to your specific business needs and marketing requirements. Our team can build solutions that integrate seamlessly with your existing systems."
            }
          },
          {
            "@type": "Question",
            "name": "What makes Viralink Digital different from other agencies?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Viralink Digital combines traditional digital marketing expertise with innovative software solutions. We don't just execute campaigns – we provide the tools and technology to automate, analyze, and optimize your marketing efforts for sustained growth."
            }
          }
        ]
      }
    ]
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
};

export default StructuredData;
