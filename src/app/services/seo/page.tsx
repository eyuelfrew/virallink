'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Search,
  TrendingUp,
  Target,
  BarChart3,
  Globe,
  Zap,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Award,
  Clock,
  Eye,
  MousePointer,
  FileText,
  Link as LinkIcon,
  MapPin
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SEOPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const seoServices = [
    {
      icon: Search,
      title: 'Keyword Research & Strategy',
      description: 'Comprehensive keyword analysis to identify high-value opportunities for your business.',
      features: ['Competitor Analysis', 'Search Volume Research', 'Long-tail Keywords', 'Intent Mapping']
    },
    {
      icon: FileText,
      title: 'On-Page Optimization',
      description: 'Optimize every element of your website for maximum search engine visibility.',
      features: ['Title Tag Optimization', 'Meta Descriptions', 'Header Structure', 'Content Optimization']
    },
    {
      icon: Zap,
      title: 'Technical SEO',
      description: 'Fix technical issues that prevent search engines from properly crawling your site.',
      features: ['Site Speed Optimization', 'Mobile Responsiveness', 'Schema Markup', 'XML Sitemaps']
    },
    {
      icon: LinkIcon,
      title: 'Link Building',
      description: 'Build high-quality backlinks to increase your domain authority and rankings.',
      features: ['Guest Posting', 'Resource Link Building', 'Broken Link Building', 'Digital PR']
    },
    {
      icon: MapPin,
      title: 'Local SEO',
      description: 'Dominate local search results and attract customers in your area.',
      features: ['Google My Business', 'Local Citations', 'Review Management', 'Local Content']
    },
    {
      icon: BarChart3,
      title: 'SEO Analytics & Reporting',
      description: 'Track your SEO performance with detailed analytics and monthly reports.',
      features: ['Ranking Tracking', 'Traffic Analysis', 'Conversion Tracking', 'ROI Reporting']
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Organic Traffic',
      description: 'Drive more qualified visitors to your website through improved search rankings.',
      stat: '+300%'
    },
    {
      icon: Target,
      title: 'Higher Conversion Rates',
      description: 'Attract visitors who are actively searching for your products or services.',
      stat: '+150%'
    },
    {
      icon: Award,
      title: 'Better Brand Credibility',
      description: 'Build trust and authority in your industry through top search rankings.',
      stat: '85%'
    },
    {
      icon: Globe,
      title: 'Long-term Results',
      description: 'Sustainable growth that continues to deliver value over time.',
      stat: '24/7'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'SEO Audit',
      description: 'Comprehensive analysis of your current SEO performance and opportunities.',
      icon: Search
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a customized SEO strategy based on your business goals and market.',
      icon: Target
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute on-page, technical, and off-page optimizations systematically.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Monitor & Optimize',
      description: 'Continuously track performance and refine strategies for better results.',
      icon: BarChart3
    }
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-green-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-green-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 rounded-full text-sm font-medium mb-6"
            >
              <Search className="w-4 h-4 mr-2" />
              SEO Excellence
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6">
              Dominate Search Results with{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Expert SEO
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Increase your organic visibility, drive qualified traffic, and grow your business 
              with our proven SEO strategies that deliver lasting results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ background: `linear-gradient(135deg, #10b981, #059669)` }}
                >
                  Get SEO Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-green-600 mb-2">{benefit.stat}</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Services Section */}
      <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Comprehensive{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                SEO Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every aspect of SEO covered to ensure your website ranks higher and attracts more customers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Our SEO{' '}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A systematic approach to SEO that delivers consistent, measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>

                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform translate-x-8 z-0"></div>
                )}

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4 border border-gray-100"
                >
                  <step.icon className="w-6 h-6 text-gray-600" />
                </motion.div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 translate-y-20"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Ready to Rank Higher?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
              Get a free SEO audit and discover how we can improve your search rankings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Free SEO Audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}