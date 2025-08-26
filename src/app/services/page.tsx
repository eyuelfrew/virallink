import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Search, Share2, PenTool, BarChart3, Target, Smartphone, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services - Digital Marketing Solutions | Viralink',
  description: 'Comprehensive digital marketing services including SEO, social media marketing, content creation, analytics, and more. Transform your business with Viralink.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your search engine rankings and drive organic traffic with our advanced SEO strategies.',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Local SEO'],
      price: 'Starting at $999/month'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build engaged communities and drive conversions across all social media platforms.',
      features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics'],
      price: 'Starting at $799/month'
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'Create compelling content that resonates with your audience and drives action.',
      features: ['Blog Writing', 'Video Production', 'Graphic Design', 'Brand Storytelling'],
      price: 'Starting at $1,299/month'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Make data-driven decisions with comprehensive analytics and insights.',
      features: ['Performance Tracking', 'Custom Dashboards', 'ROI Analysis', 'Monthly Reports'],
      price: 'Starting at $599/month'
    },
    {
      icon: Target,
      title: 'Digital Advertising',
      description: 'Maximize ROI with precision-targeted advertising campaigns.',
      features: ['PPC Management', 'Display Ads', 'Retargeting', 'A/B Testing'],
      price: 'Starting at $1,499/month'
    },
    {
      icon: Smartphone,
      title: 'Mobile Marketing',
      description: 'Reach customers on-the-go with mobile-first marketing strategies.',
      features: ['App Store Optimization', 'Mobile Ads', 'SMS Marketing', 'Push Notifications'],
      price: 'Starting at $899/month'
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
                Our <span className="text-primary-600">Services</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Comprehensive digital marketing solutions designed to accelerate your business growth 
                and maximize your online presence.
              </p>
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200 shadow-lg">
                Get Free Consultation
              </button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={service.title} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
                    <service.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="text-lg font-semibold text-primary-600 mb-4">{service.price}</div>
                  <button className="w-full bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}