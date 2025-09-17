'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Zap, Star, CheckCircle, Sparkles } from 'lucide-react';

const CTA = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const benefits = [
        'Free consultation & strategy session',
        '30-day money-back guarantee',
        'Dedicated account manager',
        '24/7 priority support'
    ];

    return (
        <section ref={ref} className="py-20 relative overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600">
                {/* Animated Shapes */}
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
                    className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
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
                    className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"
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
                    className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl"
                />

                {/* Floating Icons */}
                {[Zap, Star, Sparkles].map((Icon, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? {
                            opacity: [0, 1, 1, 0],
                            scale: [0, 1, 1, 0],
                            y: [0, -30, 0],
                        } : {}}
                        transition={{
                            duration: 4,
                            delay: index * 1.5,
                            repeat: Infinity,
                            repeatDelay: 3,
                        }}
                        className="absolute"
                        style={{
                            left: `${20 + index * 25}%`,
                            top: `${30 + index * 15}%`,
                        }}
                    >
                        <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <Icon className="w-4 h-4 text-white" />
                        </div>
                    </motion.div>
                ))}

                {/* Grid Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="w-full h-full"
                        style={{
                            backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
                            backgroundSize: '60px 60px'
                        }}
                    />
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8 border border-white/30"
                    >
                        <Sparkles className="w-4 h-4 mr-2" />
                        Limited Time Offer
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-3xl sm:text-4xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6"
                    >
                        Ready to Transform Your{' '}
                        <span className="block">Digital Success?</span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto"
                    >
                        Join hundreds of successful businesses that have accelerated their growth with Viralink.
                        Get started today and see results in as little as 30 days.
                    </motion.p>

                    {/* Benefits List */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto"
                    >
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit}
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                                className="flex items-center text-white/90 text-left"
                            >
                                <CheckCircle className="w-5 h-5 text-success-400 mr-3 flex-shrink-0" />
                                <span className="text-sm sm:text-base">{benefit}</span>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group btn-hover bg-white text-black px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center"
                        >
                            Get Started Now
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="group glass border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:border-white/50 hover:bg-white/10"
                        >
                            Schedule Consultation
                        </motion.button>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="flex flex-wrap justify-center items-center gap-6 text-white/70 text-sm"
                    >
                        <div className="flex items-center">
                            <div className="flex -space-x-1 mr-2">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="w-6 h-6 bg-white/20 rounded-full border border-white/30"></div>
                                ))}
                            </div>
                            <span>15+ Happy Clients</span>
                        </div>
                        <div className="flex items-center">
                            <Star className="w-4 h-4 text-warning-400 mr-1" />
                            <span>4.9/5 Average Rating</span>
                        </div>
                        <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-success-400 mr-1" />
                            <span>99.9% Success Rate</span>
                        </div>
                    </motion.div>

                    {/* Urgency Message */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 1.4 }}
                        className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 max-w-md mx-auto"
                    >
                        <p className="text-white/90 text-sm">
                            <span className="font-semibold text-warning-300">Limited Time:</span> Get 50% off your first month when you sign up this week!
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-white">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default CTA;