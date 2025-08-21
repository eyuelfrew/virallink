import Script from 'next/script';

const StructuredData = () => {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Viralink",
    "description": "Leading digital marketing company and software solutions provider helping businesses transform their digital presence and accelerate growth.",
    "url": "https://viralink.com",
    "logo": "https://viralink.com/logo.png",
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
  };

  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing & Software Solutions",
    "description": "Comprehensive digital marketing services and innovative software products including SEO, social media marketing, content creation, marketing automation, analytics, and CRM solutions.",
    "provider": {
      "@type": "Organization",
      "name": "Viralink"
    },
    "serviceType": "Digital Marketing",
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Marketing & Software Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Search Engine Optimization (SEO)",
            "description": "Advanced SEO strategies to boost organic traffic and search rankings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Marketing",
            "description": "Strategic social media campaigns across all platforms"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content Creation",
            "description": "High-quality content that resonates with your audience"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digital Advertising",
            "description": "Precision-targeted advertising campaigns for maximum ROI"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "ViraFlow - Marketing Automation Platform",
            "description": "Intelligent marketing automation platform for lead nurturing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "ViraInsights - Analytics Dashboard",
            "description": "Advanced analytics platform with custom reporting tools"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "SoftwareApplication",
            "name": "ViraCRM - Customer Relationship Management",
            "description": "Comprehensive CRM solution for modern businesses"
          }
        }
      ]
    }
  };

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Viralink",
    "description": "Digital Marketing & Software Solutions",
    "url": "https://viralink.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://viralink.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://viralink.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://viralink.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Products",
        "item": "https://viralink.com/products"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "About",
        "item": "https://viralink.com/about"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact",
        "item": "https://viralink.com/contact"
      }
    ]
  };

  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Viralink offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Viralink offers comprehensive digital marketing services including SEO, social media marketing, content creation, digital advertising, and analytics. We also provide innovative software solutions like ViraFlow (marketing automation), ViraInsights (analytics), and ViraCRM (customer management)."
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
        "name": "What makes Viralink different from other agencies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Viralink combines traditional digital marketing expertise with innovative software solutions. We don't just execute campaigns – we provide the tools and technology to automate, analyze, and optimize your marketing efforts for sustained growth."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="organization-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <Script
        id="service-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceData),
        }}
      />
      <Script
        id="website-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
      <Script
        id="breadcrumb-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqData),
        }}
      />
    </>
  );
};

export default StructuredData;