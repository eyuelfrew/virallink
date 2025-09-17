'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Search,
  Share2,
  PenTool,
  BarChart3,
  Target,
  Smartphone,
  Globe,
  ArrowRight,
  Zap
} from 'lucide-react';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization',
      description: 'Dominate search results with our advanced SEO strategies that drive organic traffic and boost your online visibility.',
      features: ['Keyword Research & Strategy', 'On-Page Optimization', 'Technical SEO Audits', 'Local SEO Mastery'],
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100',
      delay: 0.1
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build engaged communities and drive conversions with strategic social media campaigns across all platforms.',
      features: ['Content Strategy & Creation', 'Community Management', 'Paid Social Advertising', 'Influencer Partnerships'],
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100',
      delay: 0.2
    },
    {
      icon: PenTool,
      title: 'Content Creation',
      description: 'Tell your brand story with compelling content that resonates with your audience and drives action.',
      features: ['Blog Writing & Strategy', 'Video Production', 'Graphic Design', 'Brand Storytelling'],
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100',
      delay: 0.3
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Make data-driven decisions with comprehensive analytics and actionable insights that fuel growth.',
      features: ['Performance Tracking', 'Custom Dashboards', 'ROI Analysis', 'Conversion Optimization'],
      color: 'from-orange-500 to-orange-600',
      bgColor: 'from-orange-50 to-orange-100',
      delay: 0.4
    },
    {
      icon: Target,
      title: 'Digital Advertising',
      description: 'Maximize your ROI with precision-targeted advertising campaigns that convert prospects into customers.',
      features: ['PPC Campaign Management', 'Display Advertising', 'Retargeting Strategies', 'A/B Testing & Optimization'],
      color: 'from-red-500 to-red-600',
      bgColor: 'from-red-50 to-red-100',
      delay: 0.5
    },
    {
      icon: Smartphone,
      title: 'Mobile Marketing',
      description: 'Reach customers on-the-go with mobile-first strategies that drive engagement and conversions.',
      features: ['App Store Optimization', 'Mobile Ad Campaigns', 'SMS Marketing', 'Push Notifications'],
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'from-indigo-50 to-indigo-100',
      delay: 0.6
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  return (
    <section ref={ref} id="services" className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-accent-100 to-success-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
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
            <Globe className="w-4 h-4 mr-2" />
            Our Expertise
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Comprehensive Digital{' '}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Marketing Services</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From strategy to execution, we provide end-to-end digital marketing solutions
            that drive measurable results and accelerate your business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="card-hover bg-white rounded-3xl p-8 shadow-lg border border-gray-100 relative overflow-hidden h-full">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: service.delay + 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: service.delay + 0.4 + featureIndex * 0.1
                        }}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : {}}
                          transition={{
                            duration: 0.3,
                            delay: service.delay + 0.5 + featureIndex * 0.1
                          }}
                          className="w-2 h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mr-3 flex-shrink-0"
                        ></motion.div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: service.delay + 0.8 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group/btn w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-primary-500 hover:to-accent-500 text-gray-700 hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-accent-100 to-success-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 translate-y-20"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Zap className="w-24 h-24 text-white opacity-20" />
              </div>
            </div>

            <div className="relative z-10">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-2xl lg:text-4xl font-heading font-bold mb-4"
              >
                Ready to Accelerate Your{' '}
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">Growth?</span>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
                className="text-lg opacity-90 mb-8 max-w-2xl mx-auto"
              >
                Let&#39;s discuss how our comprehensive digital marketing services can transform
                your business and drive unprecedented growth.
              </motion.p>
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-hover bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Project Today
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;