'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Award } from 'lucide-react';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechStart Inc.',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Viralink transformed our digital presence completely. Their strategic approach to SEO and content marketing increased our organic traffic by 300% in just 6 months. The team is incredibly knowledgeable and responsive.',
      results: '+300% Traffic Growth',
      color: 'from-primary-500 to-primary-600'
    },
    {
      name: 'Michael Chen',
      position: 'Marketing Director',
      company: 'GrowthCorp',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'The ViraFlow automation platform revolutionized our lead nurturing process. We\'ve seen a 250% increase in qualified leads and our conversion rates have never been higher. Absolutely game-changing!',
      results: '+250% Lead Quality',
      color: 'from-success-500 to-success-600'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Founder',
      company: 'EcoSolutions',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'Working with Viralink has been an incredible journey. Their social media strategies helped us build a community of over 100K engaged followers, and our brand awareness has skyrocketed.',
      results: '+100K Followers',
      color: 'from-accent-500 to-accent-600'
    },
    {
      name: 'David Thompson',
      position: 'VP of Sales',
      company: 'SalesForce Pro',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'ViraCRM streamlined our entire sales process. The integration capabilities and automation features saved us countless hours while improving our customer relationships significantly.',
      results: '+180% Efficiency',
      color: 'from-warning-500 to-warning-600'
    },
    {
      name: 'Lisa Park',
      position: 'CMO',
      company: 'InnovateLab',
      image: '/api/placeholder/80/80',
      rating: 5,
      text: 'The analytics and insights from ViraInsights helped us make data-driven decisions that increased our ROI by 400%. The custom dashboards are incredibly intuitive and powerful.',
      results: '+400% ROI',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            rotate: -360,
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-accent-100 to-success-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
            <Award className="w-4 h-4 mr-2" />
            Client Success Stories
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
            What Our Clients{' '}
            <span className="gradient-text">Say About Us</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what industry leaders and successful 
            businesses have to say about their experience working with Viralink.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 relative overflow-hidden"
                  >
                    {/* Background Gradient */}
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${testimonial.color} opacity-5 rounded-full transform translate-x-16 -translate-y-16`}></div>
                    
                    {/* Quote Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={isInView ? { scale: 1, rotate: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                      className="absolute top-8 right-8"
                    >
                      <Quote className="w-12 h-12 text-primary-200" />
                    </motion.div>

                    <div className="relative z-10">
                      {/* Rating */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex items-center mb-6"
                      >
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                          >
                            <Star className="w-5 h-5 text-warning-400 fill-current" />
                          </motion.div>
                        ))}
                        <span className="ml-2 text-sm text-gray-500 font-medium">5.0</span>
                      </motion.div>

                      {/* Testimonial Text */}
                      <motion.blockquote
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 font-medium"
                      >
                        "{testimonial.text}"
                      </motion.blockquote>

                      {/* Results Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${testimonial.color} text-white rounded-full text-sm font-semibold mb-8 shadow-lg`}
                      >
                        <Award className="w-4 h-4 mr-2" />
                        {testimonial.results}
                      </motion.div>

                      {/* Author Info */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="flex items-center"
                      >
                        <div className="w-16 h-16 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-lg">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                          <p className="text-gray-600">{testimonial.position} at {testimonial.company}</p>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="p-3 bg-white rounded-full shadow-lg border border-gray-200 hover:border-primary-300 transition-colors duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-primary-500 to-accent-500 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="p-3 bg-white rounded-full shadow-lg border border-gray-200 hover:border-primary-300 transition-colors duration-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </motion.button>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-8">Trusted by industry leaders worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['TechStart', 'GrowthCorp', 'EcoSolutions', 'SalesForce Pro', 'InnovateLab'].map((company, index) => (
              <motion.div
                key={company}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="text-xl font-bold text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;