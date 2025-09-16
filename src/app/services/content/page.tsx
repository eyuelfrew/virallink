'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  PenTool,
  FileText,
  Video,
  Camera,
  Mic,
  BookOpen,
  TrendingUp,
  Target,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Award,
  Clock,
  Eye,
  Heart,
  Share2,
  Lightbulb,
  Palette
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContentMarketingPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const contentTypes = [
    {
      icon: FileText,
      title: 'Blog Content',
      description: 'SEO-optimized blog posts that educate, engage, and convert your audience.',
      features: ['SEO Optimization', 'Industry Expertise', 'Thought Leadership', 'Call-to-Actions'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Video,
      title: 'Video Content',
      description: 'Compelling video content that captures attention and drives engagement.',
      features: ['Explainer Videos', 'Product Demos', 'Customer Stories', 'Social Media Videos'],
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: Camera,
      title: 'Visual Content',
      description: 'Eye-catching graphics and images that tell your brand story.',
      features: ['Infographics', 'Social Graphics', 'Brand Photography', 'Custom Illustrations'],
      color: 'from-purple-500 to-violet-600'
    },
    {
      icon: Mic,
      title: 'Audio Content',
      description: 'Podcasts and audio content that build deeper connections with your audience.',
      features: ['Podcast Production', 'Audio Ads', 'Voice-overs', 'Sound Design'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: BookOpen,
      title: 'Long-form Content',
      description: 'In-depth guides and resources that establish your authority.',
      features: ['Whitepapers', 'E-books', 'Case Studies', 'Industry Reports'],
      color: 'from-orange-500 to-yellow-600'
    },
    {
      icon: PenTool,
      title: 'Copywriting',
      description: 'Persuasive copy that converts visitors into customers.',
      features: ['Website Copy', 'Email Copy', 'Ad Copy', 'Product Descriptions'],
      color: 'from-teal-500 to-cyan-600'
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Traffic',
      description: 'Quality content drives more organic traffic to your website.',
      stat: '+400%'
    },
    {
      icon: Users,
      title: 'Better Engagement',
      description: 'Engaging content keeps visitors on your site longer.',
      stat: '+250%'
    },
    {
      icon: Target,
      title: 'Higher Conversions',
      description: 'Strategic content guides visitors through your sales funnel.',
      stat: '+180%'
    },
    {
      icon: Award,
      title: 'Brand Authority',
      description: 'Establish your brand as a trusted industry leader.',
      stat: '95%'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Content Strategy',
      description: 'Develop a comprehensive content strategy aligned with your business goals.',
      icon: Lightbulb
    },
    {
      step: '02',
      title: 'Content Creation',
      description: 'Create high-quality, engaging content across multiple formats.',
      icon: PenTool
    },
    {
      step: '03',
      title: 'Content Distribution',
      description: 'Distribute content across the right channels to reach your audience.',
      icon: Share2
    },
    {
      step: '04',
      title: 'Performance Analysis',
      description: 'Measure content performance and optimize for better results.',
      icon: TrendingUp
    }
  ];

  const industries = [
    'Technology', 'Healthcare', 'Finance', 'E-commerce', 'Education', 'Real Estate',
    'Manufacturing', 'Professional Services', 'Non-profit', 'Hospitality'
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
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
            className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
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
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 rounded-full text-sm font-medium mb-6"
            >
              <PenTool className="w-4 h-4 mr-2" />
              Content Excellence
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6">
              Tell Your Story with{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Content Marketing
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Create compelling content that educates, engages, and converts your audience. 
              From blog posts to videos, we craft content that drives real business results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ background: `linear-gradient(135deg, #8b5cf6, #3b82f6)` }}
                >
                  Start Creating Content
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
                  className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-purple-600 mb-2">{benefit.stat}</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Every Type of{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Content You Need
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From written content to multimedia experiences, we create content that resonates with your audience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${type.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>

                <div className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
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
              Our Content{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A strategic approach to content creation that delivers measurable results.
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
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10">
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

      {/* Industries Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Industries We{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Serve
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We create industry-specific content that speaks to your audience's unique needs and challenges.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="text-gray-700 font-medium">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
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
              Ready to Tell Your Story?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
              Let's create content that engages your audience and drives business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start Your Content Strategy
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