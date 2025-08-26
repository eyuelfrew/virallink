'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Zap, TrendingUp, Users, Award, Target } from 'lucide-react';
import { useRef } from 'react';

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const floatingIcons = [
    { icon: Zap, delay: 0, x: "10%", y: "20%" },
    { icon: TrendingUp, delay: 2, x: "80%", y: "30%" },
    { icon: Users, delay: 4, x: "15%", y: "70%" },
    { icon: Award, delay: 1, x: "85%", y: "80%" },
    { icon: Target, delay: 3, x: "70%", y: "15%" },
    { icon: Sparkles, delay: 5, x: "25%", y: "85%" },
  ];

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"
      >
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full mix-blend-overlay filter blur-xl opacity-70"
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
            className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-purple-200 to-blue-200 rounded-full mix-blend-overlay filter blur-xl opacity-70"
          />
          <motion.div
            animate={{
              rotate: 180,
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-teal-200 to-yellow-200 rounded-full mix-blend-overlay filter blur-xl opacity-60"
          />
        </div>

        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              delay: item.delay,
              repeat: Infinity,
              repeatDelay: 6,
            }}
            className="absolute"
            style={{ left: item.x, top: item.y }}
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-12 h-12 bg-gray-50/20 backdrop-blur-md rounded-xl shadow-lg flex items-center justify-center border border-white/30">
              <item.icon className="w-6 h-6 text-primary-600" />
            </div>
          </motion.div>
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          />
        </div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-medium mb-6 shadow-lg"
            >
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              <span className="gradient-text font-semibold">Digital Excellence Redefined</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
            >
              <span className="block">Transform Your</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Digital Future</span>
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="block text-2xl sm:text-3xl lg:text-4xl mt-2 text-gray-600"
              >
                with Viralink
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
            >
              We combine cutting-edge digital marketing strategies with innovative software solutions 
              to accelerate your business growth. Experience the future of digital excellence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              {/* "Start Your Journey" button with "Watch Demo" styling */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-blue-200 text-blue-700 px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 hover:border-blue-300 backdrop-blur-sm"
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                Start Your Journey
              </motion.button>
              
              {/* "Watch Demo" button removed */}
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap items-center gap-8 text-sm text-gray-500"
            >
              <div className="flex items-center">
                <div className="flex -space-x-2 mr-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 bg-white/50 backdrop-blur-sm rounded-full border-2 border-white"></div>
                  ))}
                </div>
                <span>50+ Happy Clients</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center">
                <Award className="w-4 h-4 mr-2 text-yellow-500" />
                <span>Award Winning</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Interactive Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-lg">
              {/* Main Dashboard Card */}
              <motion.div
                initial={{ opacity: 0, y: 20, rotateY: -15 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative z-10"
              >
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">Growth Analytics</h3>
                      <p className="text-sm text-gray-500">Real-time insights</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">245%</div>
                      <div className="text-xs text-gray-600">Traffic Growth</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-green-600">180%</div>
                      <div className="text-xs text-gray-600">Conversions</div>
                    </div>
                  </div>

                  {/* Progress Bars */}
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Website Traffic</span>
                        <span className="font-semibold text-green-600">+245%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '85%' }}
                          transition={{ duration: 2, delay: 1 }}
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full shadow-lg"
                        ></motion.div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-600">Lead Generation</span>
                        <span className="font-semibold text-green-600">+180%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '75%' }}
                          transition={{ duration: 2, delay: 1.2 }}
                          className="bg-gradient-to-r from-green-500 to-yellow-500 h-3 rounded-full shadow-lg"
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Only the uptime card remains */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-600 to-blue-600 text-white p-4 rounded-2xl shadow-xl float z-20"
                whileHover={{ scale: 1.1, rotate: 0 }}
                whileTap={{ scale: 0.9 }}
              >
                <Award className="w-6 h-6 mb-2" />
                <div className="text-sm font-bold">99.9%</div>
                <div className="text-xs opacity-90">Uptime</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="absolute top-1/2 -right-12 bg-white p-3 rounded-xl shadow-lg border border-gray-100 float z-20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Zap className="w-5 h-5 text-yellow-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center cursor-pointer"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-blue-400 rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;