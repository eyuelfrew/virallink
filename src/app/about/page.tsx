'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Users,
  Target,
  Award,
  Zap,
  Heart,
  Globe,
  TrendingUp,
  Play,
  MapPin,
  Coffee,
  Lightbulb,
  Rocket,
  Shield,
  Sparkles,
  Eye,
  ArrowRight
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const router = useRouter();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeTab, setActiveTab] = useState('mission');

  // Refs for smooth scrolling
  const teamSectionRef = useRef<HTMLElement>(null);
  const journeySectionRef = useRef<HTMLElement>(null);

  // Smooth scroll functions
  const scrollToTeam = () => {
    teamSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const scrollToJourney = () => {
    journeySectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Ethiopian team members with authentic names
  const teamMembers = [
    {
      name: 'Dawit Tekle',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 12+ years in digital marketing. Passionate about transforming businesses through innovative technology.',
      expertise: ['Strategic Leadership', 'Business Development', 'Digital Transformation'],
      achievements: '500+ successful projects',
      location: 'Addis Ababa, Ethiopia',
      color: 'from-blue-500 to-blue-600',
      quote: 'Innovation is not just about technology, it&apos;s about creating meaningful impact.'
    },
    {
      name: 'Hanan Mohammed',
      role: 'Chief Technology Officer',
      bio: 'Tech innovator specializing in AI-powered marketing solutions and scalable software architecture.',
      expertise: ['AI & Machine Learning', 'Software Architecture', 'Product Development'],
      achievements: '50+ software products launched',
      location: 'Addis Ababa, Ethiopia',
      color: 'from-purple-500 to-purple-600',
      quote: 'Technology should empower people, not complicate their lives.'
    },
    {
      name: 'Yohannes Girma',
      role: 'Head of Digital Marketing',
      bio: 'Marketing strategist who has helped 300+ businesses achieve exponential growth through data-driven campaigns.',
      expertise: ['SEO Strategy', 'Content Marketing', 'Performance Analytics'],
      achievements: '300% average client growth',
      location: 'Bahir Dar, Ethiopia',
      color: 'from-green-500 to-green-600',
      quote: 'Great marketing tells a story that resonates with the heart and mind.'
    },
    {
      name: 'Meron Haile',
      role: 'Creative Director',
      bio: 'Award-winning designer creating stunning visual experiences that captivate audiences and drive conversions.',
      expertise: ['UI/UX Design', 'Brand Identity', 'Visual Storytelling'],
      achievements: '15+ design awards won',
      location: 'Mekelle, Ethiopia',
      color: 'from-pink-500 to-pink-600',
      quote: 'Design is not just how it looks, but how it makes people feel.'
    },
    {
      name: 'Bereket Tadesse',
      role: 'Lead Developer',
      bio: 'Full-stack developer passionate about building robust, scalable applications that solve real-world problems.',
      expertise: ['Full-Stack Development', 'Cloud Architecture', 'DevOps'],
      achievements: '100+ applications built',
      location: 'Hawassa, Ethiopia',
      color: 'from-orange-500 to-orange-600',
      quote: 'Code is poetry written in logic, designed to change the world.'
    },
    {
      name: 'Rahel Bekele',
      role: 'Head of Client Success',
      bio: 'Client relationship expert ensuring every partnership delivers exceptional value and lasting success.',
      expertise: ['Client Relations', 'Project Management', 'Business Strategy'],
      achievements: '99.5% client satisfaction',
      location: 'Dire Dawa, Ethiopia',
      color: 'from-teal-500 to-teal-600',
      quote: 'Success is measured not by what we achieve, but by what our clients accomplish.'
    }
  ];
  const companyValues = [
    {
      icon: Heart,
      title: 'Passion-Driven Excellence',
      description: 'We pour our hearts into every project, treating your success as our own mission.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Shield,
      title: 'Integrity & Transparency',
      description: 'Honest communication and ethical practices form the foundation of all our relationships.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Creativity',
      description: 'We constantly push boundaries, exploring new technologies and creative solutions.',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: Users,
      title: 'Collaborative Partnership',
      description: 'Your success is our success. We work as an extension of your team, not just a vendor.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Rocket,
      title: 'Results-Focused Impact',
      description: 'Every strategy, every campaign, every line of code is designed to deliver measurable results.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Globe,
      title: 'Global Vision, Local Heart',
      description: 'We think globally while staying rooted in our Ethiopian heritage and values.',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Founded in Addis Ababa with a vision to revolutionize digital marketing in Africa',
      icon: Rocket,
      color: 'from-blue-500 to-blue-600'
    },
    {
      year: '2021',
      title: 'First 100 Clients',
      description: 'Reached our first major milestone, helping 100+ Ethiopian businesses go digital',
      icon: Users,
      color: 'from-green-500 to-green-600'
    },
    {
      year: '2022',
      title: 'International Expansion',
      description: 'Expanded services globally, serving clients across 25+ countries',
      icon: Globe,
      color: 'from-purple-500 to-purple-600'
    },
    {
      year: '2023',
      title: 'AI Innovation Lab',
      description: 'Launched our AI-powered marketing automation platform, ViraFlow',
      icon: Zap,
      color: 'from-orange-500 to-orange-600'
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Recognized as "Best Digital Marketing Agency" in East Africa',
      icon: Award,
      color: 'from-yellow-500 to-yellow-600'
    }
  ];
  const stats = [
    { number: '500+', label: 'Happy Clients', icon: Users },
    { number: '50+', label: 'Countries Served', icon: Globe },
    { number: '99.9%', label: 'Success Rate', icon: Target },
    { number: '24/7', label: 'Support Available', icon: Heart }
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Animated Background */}
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
              Our Story & Mission
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6">
              Transforming Dreams into{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Reality
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Born in the heart of Ethiopia, we&#39;re a passionate team of innovators, creators, and strategists
              dedicated to empowering businesses worldwide through cutting-edge digital marketing and technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={scrollToJourney}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center cursor-pointer"
                style={{ background: `linear-gradient(135deg, #218bed, #1e7fd4)` }}
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Our Story
              </motion.button>
              <motion.button
                onClick={scrollToTeam}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-200 hover:border-blue-300 cursor-pointer"
              >
                Meet Our Team
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

      {/* Mission, Vision, Values Tabs */}
      <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              What Drives Us{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Forward
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our mission, vision, and values shape everything we do and guide us toward creating
              meaningful impact for our clients and communities.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
              {['mission', 'vision', 'values'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${activeTab === tab
                    ? 'text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  style={activeTab === tab ? { background: `linear-gradient(135deg, #218bed, #1e7fd4)` } : {}}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            {activeTab === 'mission' && (
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: `linear-gradient(135deg, #218bed, #1e7fd4)` }}>
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To empower businesses of all sizes with innovative digital marketing solutions and cutting-edge
                  technology that drive measurable growth, foster meaningful connections, and create lasting impact
                  in the digital landscape. We believe every business deserves access to world-class marketing
                  expertise, regardless of their size or budget.
                </p>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100 text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: `linear-gradient(135deg, #218bed, #1e7fd4)` }}>
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become the global leader in AI-powered digital marketing solutions, bridging the gap between
                  traditional business practices and cutting-edge technology. We envision a world where every
                  entrepreneur, from Addis Ababa to New York, has access to the same powerful tools and strategies
                  that drive exponential business growth.
                </p>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companyValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-4`}>
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>
      {/* Team Section */}
      <section ref={teamSectionRef} className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Meet Our Amazing{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ethiopian Team
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our diverse team of Ethiopian innovators brings together decades of experience,
              boundless creativity, and an unwavering commitment to your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${member.color} opacity-5 rounded-full transform translate-x-16 -translate-y-16 group-hover:opacity-10 transition-opacity duration-300`}></div>

                {/* Profile Image Placeholder */}
                <div className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300" style={{ background: `linear-gradient(135deg, #218bed, #1e7fd4)` }}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className={`font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-3`}>
                    {member.role}
                  </p>
                  <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {member.location}
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
                  {member.bio}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Achievement Badge */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                    <Award className="w-4 h-4 mr-2" />
                    {member.achievements}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-center text-sm text-gray-600 italic border-l-4 border-blue-200 pl-4 bg-blue-50 p-4 rounded-lg">
                  &ldquo;{member.quote}&rdquo;
                </blockquote>

                {/* Social Links Placeholder */}
                <div className="flex justify-center space-x-3 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors duration-200 cursor-pointer">
                    <span className="text-blue-600 text-xs font-bold">in</span>
                  </div>
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
                    <span className="text-gray-600 text-xs font-bold">@</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Timeline Section */}
      <section ref={journeySectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Our Journey of{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From a small startup in Addis Ababa to a global digital marketing powerhouse,
              here&#39;s how we&#39;ve grown and evolved over the years.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full rounded-full" style={{ background: `linear-gradient(to bottom, #218bed, #1e7fd4)` }}></div>

            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className={`inline-flex items-center px-3 py-1 bg-gradient-to-r ${milestone.color} text-white rounded-full text-sm font-bold mb-4`}>
                      <milestone.icon className="w-4 h-4 mr-2" />
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-500 rounded-full shadow-lg z-10">
                  <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                </div>

                {/* Spacer */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Office Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Life at{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Viralink
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe that great work comes from great culture. Here&#39;s what makes
              Viralink an amazing place to work and grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Coffee,
                title: 'Ethiopian Coffee Culture',
                description: 'Daily coffee ceremonies that bring our team together and spark creativity',
                color: 'from-amber-500 to-orange-500'
              },
              {
                icon: Lightbulb,
                title: 'Innovation Fridays',
                description: 'Dedicated time each week for exploring new ideas and experimental projects',
                color: 'from-yellow-500 to-amber-500'
              },
              {
                icon: Heart,
                title: 'Work-Life Balance',
                description: 'Flexible schedules and remote work options that respect personal time',
                color: 'from-pink-500 to-red-500'
              },
              {
                icon: Users,
                title: 'Team Building',
                description: 'Regular team outings, cultural celebrations, and community service projects',
                color: 'from-blue-500 to-indigo-500'
              },
              {
                icon: TrendingUp,
                title: 'Growth Opportunities',
                description: 'Continuous learning programs and career advancement pathways',
                color: 'from-green-500 to-teal-500'
              },
              {
                icon: Globe,
                title: 'Global Perspective',
                description: 'Working with international clients while staying rooted in Ethiopian values',
                color: 'from-purple-500 to-indigo-500'
              }
            ].map((culture, index) => (
              <motion.div
                key={culture.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${culture.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <culture.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{culture.title}</h3>
                <p className="text-gray-600 leading-relaxed">{culture.description}</p>
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
            <Heart className="w-24 h-24 text-white opacity-20" />
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
              Ready to Join Our Journey?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
              Whether you&#39;re looking for a career opportunity or want to partner with us,
              we&#39;d love to hear from you and explore how we can create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                onClick={() => router.push('/careers')}
              >
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
                onClick={() => router.push('/contact')}
              >
                Partner With Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}