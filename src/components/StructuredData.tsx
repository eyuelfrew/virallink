import Script from 'next/script';

interface StructuredDataProps {
  type?: 'organization' | 'service' | 'webpage';
  title?: string;
  description?: string;
}

const StructuredData = ({ type = 'organization', title, description }: StructuredDataProps = {}) => {
  const getStructuredData = () => {
    const baseUrl = 'https://virallinkdigital.com';

    if (type === 'service') {
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": title || "Digital Marketing Services",
        "description": description || "Professional digital marketing services including SEO, social media marketing, and web development.",
        "provider": {
          "@type": "Organization",
          "name": "Viralink Digital",
          "url": baseUrl
        },
        "areaServed": {
          "@type": "Country",
          "name": "Ethiopia"
        },
        "serviceType": "Digital Marketing"
      };
    }

    if (type === 'webpage') {
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": title || "Viralink Digital Marketing",
        "description": description || "Professional digital marketing services",
        "isPartOf": {
          "@type": "WebSite",
          "name": "Viralink Digital Marketing",
          "url": baseUrl
        },
        "about": {
          "@type": "Organization",
          "name": "Viralink Digital"
        }
      };
    }

    // Default organization schema
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "name": "Viralink Digital",
          "description": "Leading digital marketing company and software solutions provider helping businesses transform their digital presence and accelerate growth.",
          "url": "https://virallinkdigital.com",
          "logo": "https://virallinkdigital.com/logo.png",
          "foundingDate": "2023",
          "numberOfEmployees": "10-50",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+251963343720",
            "contactType": "Customer Service",
            "availableLanguage": ["English", "Amharic"],
            "areaServed": "Ethiopia"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Taos Tower, 9th Floor, Mexico",
            "addressLocality": "Addis Ababa",
            "addressRegion": "Addis Ababa",
            "addressCountry": "Ethiopia"
          },
          "sameAs": [
            "https://www.facebook.com/viralink",
            "https://www.twitter.com/viralink",
            "https://www.linkedin.com/company/viralink",
            "https://www.instagram.com/viralink"
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
          "image": "https://virallinkdigital.com/logo.png",
          "url": "https://virallinkdigital.com",
          "telephone": "+251963343720",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Taos Tower, 9th Floor, Mexico",
            "addressLocality": "Addis Ababa",
            "addressRegion": "Addis Ababa",
            "addressCountry": "Ethiopia"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 9.031944,
            "longitude": 38.761111
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
            "opens": "08:00",
            "closes": "18:00"
          }
        },
        {
          "@type": "WebSite",
          "name": "Viralink Digital",
          "description": "Digital Marketing & Software Solutions",
          "url": "https://virallinkdigital.com",
          "inLanguage": "en-US",
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://virallinkdigital.com/search?q={search_term_string}"
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
              "item": "https://virallinkdigital.com"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Services",
              "item": "https://virallinkdigital.com/services"
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Products",
              "item": "https://virallinkdigital.com/products"
            },
            {
              "@type": "ListItem",
              "position": 4,
              "name": "About",
              "item": "https://virallinkdigital.com/about"
            },
            {
              "@type": "ListItem",
              "position": 5,
              "name": "Contact",
              "item": "https://virallinkdigital.com/contact"
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
  };

  const structuredData = getStructuredData();

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
