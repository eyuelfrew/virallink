'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Zap,
  BarChart3,
  Users,
  ArrowRight,
  Star,
  CheckCircle,
  Sparkles
} from 'lucide-react';

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const products = [
    {
      icon: Zap,
      name: 'ViraFlow',
      tagline: 'Marketing Automation Platform',
      description: 'Streamline your marketing workflows with our intelligent automation platform that nurtures leads and drives conversions.',
      features: [
        'Drag & Drop Campaign Builder',
        'Advanced Lead Scoring',
        'Multi-Channel Automation',
        'Real-time Analytics',
        'A/B Testing Suite',
        'CRM Integration'
      ],
      pricing: {
        starter: '$49/month',
        pro: '$149/month',
        enterprise: 'Custom'
      },
      color: 'from-primary-500 to-primary-600',
      bgGradient: 'from-primary-50 to-blue-50',
      popular: false,
      delay: 0.1
    },
    {
      icon: BarChart3,
      name: 'ViraInsights',
      tagline: 'Analytics & Reporting Dashboard',
      description: 'Get comprehensive insights into your marketing performance with our advanced analytics platform and custom reporting tools.',
      features: [
        'Real-time Data Visualization',
        'Custom Dashboard Builder',
        'Predictive Analytics',
        'ROI Tracking',
        'Competitor Analysis',
        'White-label Reports'
      ],
      pricing: {
        starter: '$79/month',
        pro: '$199/month',
        enterprise: 'Custom'
      },
      color: 'from-success-500 to-success-600',
      bgGradient: 'from-success-50 to-green-50',
      popular: true,
      delay: 0.2
    },
    {
      icon: Users,
      name: 'ViraCRM',
      tagline: 'Customer Relationship Management',
      description: 'Manage your customer relationships effectively with our comprehensive CRM solution designed for modern businesses.',
      features: [
        'Contact Management',
        'Sales Pipeline Tracking',
        'Email Integration',
        'Task Automation',
        'Mobile App Access',
        'Third-party Integrations'
      ],
      pricing: {
        starter: '$39/month',
        pro: '$99/month',
        enterprise: 'Custom'
      },
      color: 'from-accent-500 to-accent-600',
      bgGradient: 'from-accent-50 to-purple-50',
      popular: false,
      delay: 0.3
    }
  ];

  return (
    <section ref={ref} id="products" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-32 left-32 w-96 h-96 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Software Solutions
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Powerful Software{' '}
            <span className="gradient-text">Products</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Supercharge your marketing efforts with our suite of innovative software products
            designed to automate, analyze, and optimize your digital marketing campaigns.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: product.delay,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="group relative"
            >
              <div className={`card-hover bg-gradient-to-br ${product.bgGradient} rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden h-full ${product.popular ? 'ring-2 ring-primary-500 ring-opacity-50' : ''}`}>
                {/* Popular Badge */}
                {product.popular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -12 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: -12 } : {}}
                    transition={{ duration: 0.6, delay: product.delay + 0.3 }}
                    className="absolute -top-2 -right-2 bg-gradient-to-r from-warning-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                  >
                    <Star className="w-3 h-3 inline mr-1" />
                    POPULAR
                  </motion.div>
                )}

                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon & Header */}
                  <div className="mb-6">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{
                        duration: 0.6,
                        delay: product.delay + 0.2,
                        type: "spring",
                        stiffness: 200
                      }}
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${product.color} mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <product.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm font-medium text-primary-600 mb-4">
                      {product.tagline}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-8 flex-grow">
                    <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <ul className="space-y-3">
                      {product.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: product.delay + 0.4 + featureIndex * 0.1
                          }}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-success-500 mr-3 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Pricing:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Starter</span>
                        <span className="font-semibold text-gray-900">{product.pricing.starter}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Professional</span>
                        <span className="font-semibold text-gray-900">{product.pricing.pro}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Enterprise</span>
                        <span className="font-semibold text-gray-900">{product.pricing.enterprise}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: product.delay + 0.8 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group/btn w-full bg-gradient-to-r ${product.color} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl`}
                    >
                      Start Free Trial
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </motion.button>

                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: product.delay + 1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-white/80 backdrop-blur-sm text-gray-700 px-6 py-3 rounded-xl font-medium transition-all duration-300 border border-gray-200 hover:border-gray-300"
                    >
                      View Demo
                    </motion.button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-primary-200 to-accent-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-accent-200 to-success-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our team can build tailored software solutions that perfectly fit your unique business requirements and marketing goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-hover bg-gradient-to-r from-primary-600 to-accent-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Discuss Custom Development
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;