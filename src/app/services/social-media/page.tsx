'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Share2,
  Users,
  Heart,
  TrendingUp,
  Target,
  Camera,
  CheckCircle,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter,
  Send,
  Music
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export default function SocialMediaPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const platforms = [
    {
      icon: Facebook,
      name: 'Facebook',
      description: 'Build communities and drive engagement with targeted Facebook campaigns.',
      color: 'from-blue-600 to-blue-700',
      features: ['Page Management', 'Facebook Ads', 'Community Building', 'Event Promotion']
    },
    {
      icon: Instagram,
      name: 'Instagram',
      description: 'Create stunning visual content that captures attention and drives action.',
      color: 'from-pink-500 to-purple-600',
      features: ['Visual Content', 'Stories & Reels', 'Influencer Partnerships', 'Shopping Integration']
    },
    {
      icon: Music,
      name: 'TikTok',
      description: 'Create viral short-form videos that reach millions of users worldwide.',
      color: 'from-black to-pink-500',
      features: ['Viral Video Content', 'Trend Participation', 'Influencer Collaborations', 'Creative Campaigns']
    },
    {
      icon: Send,
      name: 'Telegram',
      description: 'Build engaged communities and broadcast channels for direct communication.',
      color: 'from-blue-500 to-cyan-400',
      features: ['Channel Management', 'Community Building', 'Broadcast Messages', 'Bot Integration']
    },
    {
      icon: Twitter,
      name: 'Twitter',
      description: 'Engage in real-time conversations and build thought leadership.',
      color: 'from-blue-400 to-blue-500',
      features: ['Real-time Engagement', 'Trend Monitoring', 'Customer Support', 'Brand Voice']
    },
    {
      icon: Share2,
      name: 'LinkedIn',
      description: 'Professional networking and B2B lead generation strategies.',
      color: 'from-blue-700 to-blue-800',
      features: ['Professional Content', 'Lead Generation', 'Company Pages', 'Industry Insights']
    }
  ];

  const services = [
    {
      icon: Camera,
      title: 'Content Creation',
      description: 'High-quality visual and written content that resonates with your audience.',
      features: ['Photography', 'Graphic Design', 'Video Production', 'Copywriting']
    },
    {
      icon: Users,
      title: 'Community Management',
      description: 'Build and nurture engaged communities around your brand.',
      features: ['Daily Engagement', 'Customer Support', 'Community Guidelines', 'User-Generated Content']
    },
    {
      icon: Target,
      title: 'Paid Social Advertising',
      description: 'Targeted advertising campaigns that deliver measurable results.',
      features: ['Campaign Strategy', 'Audience Targeting', 'Ad Creative', 'Performance Optimization']
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Reporting',
      description: 'Comprehensive insights into your social media performance.',
      features: ['Performance Metrics', 'Audience Insights', 'Competitor Analysis', 'ROI Tracking']
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Increased Brand Awareness',
      description: 'Reach millions of potential customers across social platforms.',
      stat: '+500%'
    },
    {
      icon: Heart,
      title: 'Higher Engagement',
      description: 'Build meaningful connections with your audience.',
      stat: '+300%'
    },
    {
      icon: TrendingUp,
      title: 'More Website Traffic',
      description: 'Drive qualified traffic from social media to your website.',
      stat: '+250%'
    },
    {
      icon: Target,
      title: 'Better Lead Generation',
      description: 'Convert social media followers into paying customers.',
      stat: '+180%'
    }
  ];

  return (
    <>
      <Header />
      <StructuredData type="service" title="Social Media Marketing Services" description="Expert social media marketing services across Facebook, Instagram, TikTok, LinkedIn and other platforms" />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
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
            className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
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
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-full text-sm font-medium mb-6"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Social Media Excellence
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6">
              Build Your Community with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Social Media Marketing
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Create engaging social media campaigns that build brand awareness, drive engagement, 
              and convert followers into loyal customers across all major platforms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ background: `linear-gradient(135deg, #3b82f6, #06b6d4)` }}
                >
                  Start Your Campaign
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
                  className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div className="text-2xl font-bold text-blue-600 mb-2">{benefit.stat}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              We Master Every{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Social Platform
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From Facebook to LinkedIn, we create platform-specific strategies that maximize your reach and engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${platform.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <platform.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{platform.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{platform.description}</p>

                <div className="grid grid-cols-2 gap-3">
                  {platform.features.map((feature, featureIndex) => (
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

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Our Social Media{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive social media solutions to grow your brand and engage your audience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="grid grid-cols-2 gap-3">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
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
              Ready to Go Viral?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
              Let&apos;s create social media campaigns that get people talking about your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Social Campaign
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