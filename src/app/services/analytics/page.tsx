'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  BarChart3,
  TrendingUp,
  Target,
  Eye,
  MousePointer,
  Users,
  Globe,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Award,
  Zap,
  PieChart,
  LineChart,
  Activity,
  Filter,
  Calendar
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AnalyticsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const analyticsServices = [
    {
      icon: BarChart3,
      title: 'Google Analytics Setup',
      description: 'Complete Google Analytics 4 setup and configuration for accurate data tracking.',
      features: ['GA4 Implementation', 'Goal Configuration', 'E-commerce Tracking', 'Custom Events']
    },
    {
      icon: PieChart,
      title: 'Custom Dashboards',
      description: 'Beautiful, easy-to-understand dashboards that show what matters most.',
      features: ['Real-time Data', 'Custom Metrics', 'Visual Reports', 'Mobile Access']
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Monitor key performance indicators and track progress toward your goals.',
      features: ['KPI Monitoring', 'Conversion Tracking', 'ROI Analysis', 'Trend Analysis']
    },
    {
      icon: Users,
      title: 'Audience Insights',
      description: 'Deep understanding of your audience behavior and preferences.',
      features: ['User Behavior', 'Demographics', 'Interest Analysis', 'Customer Journey']
    },
    {
      icon: Target,
      title: 'Conversion Optimization',
      description: 'Identify opportunities to improve your conversion rates and revenue.',
      features: ['Funnel Analysis', 'A/B Testing', 'Heat Maps', 'User Flow Analysis']
    },
    {
      icon: Globe,
      title: 'Competitor Analysis',
      description: 'Understand your competitive landscape and identify opportunities.',
      features: ['Market Share', 'Traffic Analysis', 'Keyword Gaps', 'Content Gaps']
    }
  ];

  const metrics = [
    {
      icon: Eye,
      title: 'Website Traffic',
      description: 'Track visitors, page views, and traffic sources.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MousePointer,
      title: 'User Engagement',
      description: 'Monitor bounce rate, session duration, and interactions.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Target,
      title: 'Conversion Rates',
      description: 'Measure goal completions and revenue generation.',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: TrendingUp,
      title: 'ROI & Revenue',
      description: 'Track return on investment and revenue attribution.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const benefits = [
    {
      icon: BarChart3,
      title: 'Data-Driven Decisions',
      description: 'Make informed decisions based on real data, not guesswork.',
      stat: '85%'
    },
    {
      icon: TrendingUp,
      title: 'Improved Performance',
      description: 'Optimize campaigns and strategies for better results.',
      stat: '+200%'
    },
    {
      icon: Target,
      title: 'Higher ROI',
      description: 'Maximize return on your marketing investments.',
      stat: '+150%'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Automated reporting saves hours of manual work.',
      stat: '20hrs'
    }
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-indigo-50 via-white to-blue-50 relative overflow-hidden">
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
            className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-indigo-200 to-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
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
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-700 rounded-full text-sm font-medium mb-6"
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics & Insights
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6">
              Make Smarter Decisions with{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Data Analytics
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Transform raw data into actionable insights. Our comprehensive analytics and reporting 
              services help you understand your audience, optimize performance, and drive growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ background: `linear-gradient(135deg, #6366f1, #3b82f6)` }}
                >
                  Get Analytics Setup
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
                  className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-indigo-600 mb-2">{benefit.stat}</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Key Metrics We{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Track & Analyze
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Monitor the metrics that matter most to your business success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <metric.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{metric.title}</h3>
                <p className="text-gray-600 leading-relaxed">{metric.description}</p>
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
              Our Analytics{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive analytics solutions to measure, analyze, and optimize your digital performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 relative overflow-hidden">
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
              Ready to Unlock Your Data?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
              Let's set up comprehensive analytics that give you the insights you need to grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started with Analytics
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