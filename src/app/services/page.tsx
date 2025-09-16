'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Search,
  Share2,
  PenTool,
  Target,
  BarChart3,
  Zap,
  Globe,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  ArrowRight,
  Play,
  Sparkles,
  Code,
  Smartphone,
  Mail,
  MessageSquare,
  Eye,
  MousePointer,
  ShoppingCart,
  Megaphone,
  Camera,
  Video,
  Palette,
  Lightbulb,
  Shield,
  Clock,
  Star
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeService, setActiveService] = useState(0);

  const mainServices = [
    {
      icon: Search,
      title: 'SEO Optimization',
      subtitle: 'Dominate Search Results',
      description: 'Boost your visibility and drive organic traffic with our advanced SEO strategies that deliver measurable results.',
      features: ['Keyword Research & Strategy', 'On-Page Optimization', 'Technical SEO Audits', 'Local SEO', 'Content Optimization', 'Link Building'],
      results: '+300% organic traffic increase',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
      delay: 0.1
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      subtitle: 'Build Your Community',
      description: 'Create engaging social media campaigns that build brand awareness and drive meaningful customer engagement.',
      features: ['Content Strategy', 'Community Management', 'Paid Social Advertising', 'Influencer Partnerships', 'Analytics & Reporting', 'Brand Voice Development'],
      results: '+500% engagement growth',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50',
      delay: 0.2
    },
    {
      icon: PenTool,
      title: 'Content Creation',
      subtitle: 'Tell Your Story',
      description: 'Craft compelling content that resonates with your audience and drives action across all digital platforms.',
      features: ['Blog Writing', 'Video Production', 'Graphic Design', 'Copywriting', 'Brand Storytelling', 'Content Calendar'],
      results: '+250% content engagement',
      color: 'from-purple-500 to-violet-600',
      bgColor: 'from-purple-50 to-violet-50',
      delay: 0.3
    },
    {
      icon: Target,
      title: 'Digital Advertising',
      subtitle: 'Precision Targeting',
      description: 'Maximize your ROI with data-driven advertising campaigns across Google, Facebook, and other platforms.',
      features: ['Google Ads Management', 'Facebook & Instagram Ads', 'Display Advertising', 'Retargeting Campaigns', 'A/B Testing', 'Conversion Optimization'],
      results: '+400% ROAS improvement',
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50',
      delay: 0.4
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      subtitle: 'Data-Driven Insights',
      description: 'Make informed decisions with comprehensive analytics and detailed reporting on all your marketing efforts.',
      features: ['Google Analytics Setup', 'Custom Dashboards', 'Performance Tracking', 'ROI Analysis', 'Competitor Analysis', 'Monthly Reports'],
      results: '+200% data accuracy',
      color: 'from-indigo-500 to-blue-600',
      bgColor: 'from-indigo-50 to-blue-50',
      delay: 0.5
    },
    {
      icon: Zap,
      title: 'Marketing Automation',
      subtitle: 'Scale Your Growth',
      description: 'Streamline your marketing processes with intelligent automation that nurtures leads and drives conversions.',
      features: ['Email Marketing Automation', 'Lead Nurturing', 'CRM Integration', 'Workflow Automation', 'Personalization', 'Behavioral Triggers'],
      results: '+350% lead conversion',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-50 to-orange-50',
      delay: 0.6
    }
  ];

  const additionalServices = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom websites that convert visitors into customers',
      features: ['Responsive Design', 'E-commerce Solutions', 'CMS Development']
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      features: ['iOS & Android Apps', 'UI/UX Design', 'App Store Optimization']
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Personalized email campaigns that drive results',
      features: ['Campaign Design', 'List Management', 'Automation Sequences']
    },
    {
      icon: Video,
      title: 'Video Marketing',
      description: 'Engaging video content for all platforms',
      features: ['Video Production', 'Animation', 'Live Streaming']
    },
    {
      icon: Palette,
      title: 'Brand Design',
      description: 'Complete brand identity and visual design',
      features: ['Logo Design', 'Brand Guidelines', 'Marketing Materials']
    },
    {
      icon: Shield,
      title: 'Digital Security',
      description: 'Protect your digital assets and customer data',
      features: ['Security Audits', 'SSL Certificates', 'Data Protection']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your business, competitors, and target audience to create a tailored strategy.',
      icon: Lightbulb,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      title: 'Planning & Design',
      description: 'Develop comprehensive campaigns with creative assets and detailed implementation plans.',
      icon: PenTool,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute campaigns across all channels with precision timing and quality control.',
      icon: Zap,
      color: 'from-orange-500 to-red-500'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuously monitor, analyze, and optimize for maximum performance and ROI.',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '98%', label: 'Client Satisfaction', icon: Star },
    { number: '300%', label: 'Average ROI Increase', icon: TrendingUp },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
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
            className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1.2, 1, 1.2],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
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
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Complete Digital Solutions
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6">
              Elevate Your Business with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Expert Digital Services
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              From SEO and social media to custom development and automation, we provide 
              comprehensive digital marketing solutions that drive real results for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ background: `linear-gradient(135deg, #218bed, #1e7fd4)` }}
                >
                  Get Started Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-200 hover:border-blue-300"
              >
                <Play className="mr-2 w-5 h-5" />
                View Our Work
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  style={{ background: `linear-gradient(135deg, #218bed, #1e7fd4)` }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Our Core{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to accelerate your business growth 
              and maximize your online presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: service.delay }}
                className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 relative overflow-hidden"
                onMouseEnter={() => setActiveService(index)}
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 rounded-full transform translate-x-16 -translate-y-16 transition-opacity duration-300`}></div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className={`font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-4`}>
                    {service.subtitle}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <p className="text-sm text-gray-500 italic">
                        +{service.features.length - 3} more features
                      </p>
                    )}
                  </div>

                  {/* Results Badge */}
                  <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${service.bgColor} rounded-full text-sm font-semibold mb-6`}>
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {service.results}
                  </div>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
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
              Our Proven{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure every project delivers exceptional results 
              and exceeds your expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center relative"
              >
                {/* Step Number */}
                <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg relative z-10`}>
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>

                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform translate-x-8 z-0"></div>
                )}

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-4 border border-gray-100"
                >
                  <step.icon className="w-6 h-6 text-gray-600" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Additional{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Specialized Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expand your digital capabilities with our specialized services designed to complement 
              your core marketing strategy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg" style={{ background: `linear-gradient(135deg, #218bed, #1e7fd4)` }}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 translate-y-20"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Sparkles className="w-24 h-24 text-white opacity-20" />
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
              Let's discuss how our comprehensive digital services can accelerate your business growth 
              and help you achieve your goals.
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
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/about"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                >
                  Learn About Us
                  <Users className="ml-2 w-5 h-5" />
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