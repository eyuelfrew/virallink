'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Users, Award, Zap, Target, Globe, CheckCircle, Lightbulb, TrendingDown } from 'lucide-react';

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const stats = [
    {
      icon: Users,
      number: 15,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Businesses transformed',
      color: 'from-[#085095] to-[#0a66c2]',
      delay: 0.1,
      hoverIcon: CheckCircle,
      hoverText: 'Client-Approved'
    },
    {
      icon: TrendingUp,
      number: 245,
      suffix: '%',
      label: 'Average Growth',
      description: 'In first 6 months',
      color: 'from-[#085095] to-[#0a66c2]',
      delay: 0.2,
      hoverIcon: TrendingUp,
      hoverText: 'On the Rise'
    },
    {
      icon: Award,
      number: 99.9,
      suffix: '%',
      label: 'Success Rate',
      description: 'Project completion',
      color: 'from-[#085095] to-[#0a66c2]',
      delay: 0.3,
      hoverIcon: Award,
      hoverText: 'Top-Rated'
    },
    {
      icon: Globe,
      number: 2,
      suffix: '+',
      label: 'Years Serving',
      description: 'Trusted partner',
      color: 'from-[#085095] to-[#0a66c2]',
      delay: 0.4,
      hoverIcon: Globe,
      hoverText: 'Experienced'
    },
    {
      icon: Zap,
      number: 24,
      suffix: '/7',
      label: 'Support Available',
      description: 'Always here for you',
      color: 'from-[#085095] to-[#0a66c2]',
      delay: 0.5,
      hoverIcon: Lightbulb,
      hoverText: 'Quick Help'
    },
    {
      icon: Target,
      number: 95,
      suffix: '%',
      label: 'Client Retention',
      description: 'Long-term partnerships',
      color: 'from-[#085095] to-[#0a66c2]',
      delay: 0.6,
      hoverIcon: TrendingDown,
      hoverText: 'Loyal Clients'
    }
  ];

  const CountUpAnimation = ({ number, suffix, isVisible, delay }: {
    number: number;
    suffix: string;
    isVisible: boolean;
    delay: number;
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const timer = setTimeout(() => {
        const duration = 2000;
        const steps = 60;
        const increment = number / steps;
        let current = 0;

        const counter = setInterval(() => {
          current += increment;
          if (current >= number) {
            setCount(number);
            clearInterval(counter);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);

        return () => clearInterval(counter);
      }, delay * 1000);

      return () => clearTimeout(timer);
    }, [isVisible, number, delay]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[#f0f8ff] to-[#fffaf0] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-purple-200 to-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"
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
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium mb-6"
          >
            <TrendingUp className="w-4 h-4 mr-2" stroke="currentColor" />
            Our Impact in Numbers
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            Connecting Brands To Success
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our track record speaks for itself. Here&#39;s how we&#39;ve helped businesses 
            like yours achieve extraordinary digital growth and success.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: stat.delay,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: stat.delay + 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    className={`inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-r ${stat.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <stat.icon className="w-8 h-8 text-white" stroke="currentColor" />
                  </motion.div>

                  {/* Number */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: stat.delay + 0.4 }}
                    className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2"
                  >
                    <CountUpAnimation
                      number={stat.number}
                      suffix={stat.suffix}
                      isVisible={isInView}
                      delay={stat.delay + 0.6}
                    />
                  </motion.div>

                  {/* Label */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: stat.delay + 0.6 }}
                    className="text-xl font-semibold text-gray-900 mb-2"
                  >
                    {stat.label}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: stat.delay + 0.8 }}
                    className="text-gray-600"
                  >
                    {stat.description}
                  </motion.p>
                </div>

                {/* Small Hover Card with Icon and Text */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-4 right-4 bg-white/30 backdrop-blur-sm rounded-xl p-2 shadow-lg group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="flex items-center">
                    <stat.hoverIcon className="w-4 h-4 text-green-500 mr-1" stroke="currentColor" />
                    <span className="text-sm font-semibold text-gray-700">{stat.hoverText}</span>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-r from-purple-100 to-green-100 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to become our next success story?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="btn-hover bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            aria-label="Begin your growth journey with Viralink digital marketing services"
          >
            Start Your Growth Journey
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;