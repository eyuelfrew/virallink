'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Search, 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Tag,
  TrendingUp,
  Eye,
  MessageCircle,
  Share2,
  BookOpen,
  Filter,
  ChevronDown,
  Star
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
// SEO will be handled in layout.tsx or we can create a separate metadata file

export default function BlogPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedPosts, setExpandedPosts] = useState<number[]>([]);

  // Sample blog data - replace with your backend data
  const blogPosts = [
    {
      id: 1,
      title: 'The Ultimate Guide to SEO in 2024: Strategies That Actually Work',
      excerpt: 'Discover the latest SEO strategies and techniques that are driving real results in 2024. From AI-powered optimization to voice search...',
      fullContent: 'Discover the latest SEO strategies and techniques that are driving real results in 2024. From AI-powered optimization to voice search optimization, learn how to stay ahead of the competition. This comprehensive guide covers everything from technical SEO to content optimization, helping you build a robust SEO strategy that delivers measurable results. We\'ll explore the latest Google algorithm updates, mobile-first indexing, and how to leverage structured data for better search visibility.',
      author: 'Sarah Johnson',
      authorRole: 'SEO Specialist',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'SEO',
      tags: ['SEO', 'Google', 'Algorithm', 'Optimization'],
      image: '/api/placeholder/600/400',
      comments: 23,
      featured: true,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'Social Media Marketing Trends: What\'s Working in 2024',
      excerpt: 'Explore the hottest social media marketing trends that are generating real engagement and conversions this year...',
      fullContent: 'Explore the hottest social media marketing trends that are generating real engagement and conversions this year. From short-form video content to AI-powered personalization, discover what\'s driving success on platforms like TikTok, Instagram, LinkedIn, and emerging social networks. Learn how to create authentic content that resonates with your audience and builds lasting brand loyalty. We\'ll cover influencer marketing strategies, community building techniques, and the latest social commerce trends.',
      author: 'Michael Chen',
      authorRole: 'Social Media Strategist',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Social Media',
      tags: ['Social Media', 'Trends', 'Engagement', 'Content'],
      image: '/api/placeholder/600/400',
      comments: 18,
      featured: false,
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 3,
      title: 'Content Marketing ROI: How to Measure What Matters',
      excerpt: 'Learn how to track and measure the true ROI of your content marketing efforts with actionable metrics and KPIs...',
      fullContent: 'Learn how to track and measure the true ROI of your content marketing efforts with actionable metrics and KPIs that matter. This guide breaks down the essential analytics tools, attribution models, and reporting frameworks you need to prove content marketing value. Discover how to set up proper tracking, calculate customer lifetime value, and create compelling reports that demonstrate clear business impact. We\'ll also explore advanced measurement techniques and how to optimize your content strategy based on data insights.',
      author: 'Emily Rodriguez',
      authorRole: 'Content Marketing Manager',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Content Marketing',
      tags: ['Content Marketing', 'ROI', 'Analytics', 'Metrics'],
      image: '/api/placeholder/600/400',
      comments: 15,
      featured: false,
      color: 'from-green-500 to-green-600'
    },
    {
      id: 4,
      title: 'Marketing Automation: Complete Guide for Beginners',
      excerpt: 'Master marketing automation with our comprehensive beginner\'s guide. Learn tools, strategies, and best practices...',
      fullContent: 'Master marketing automation with our comprehensive beginner\'s guide. Learn tools, strategies, and best practices for automating your marketing workflows effectively. From email sequences to lead nurturing campaigns, discover how to save time while improving customer experience. This guide covers popular automation platforms, workflow design principles, and advanced segmentation strategies. We\'ll also share real-world examples and case studies showing how businesses have achieved significant growth through smart automation.',
      author: 'David Thompson',
      authorRole: 'Marketing Automation Expert',
      date: '2024-01-08',
      readTime: '12 min read',
      category: 'Marketing Automation',
      tags: ['Automation', 'Email Marketing', 'Lead Nurturing', 'Workflows'],
      image: '/api/placeholder/600/400',
      comments: 31,
      featured: true,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 5,
      title: 'PPC Advertising: Advanced Strategies for Maximum ROI',
      excerpt: 'Unlock the secrets of high-performing PPC campaigns with advanced bidding strategies, audience targeting, and optimization techniques...',
      fullContent: 'Unlock the secrets of high-performing PPC campaigns with advanced bidding strategies, audience targeting, and optimization techniques that drive maximum ROI. Learn how to leverage Google Ads, Facebook Ads, and other platforms effectively. This comprehensive guide covers keyword research, ad copy optimization, landing page best practices, and advanced campaign structures. Discover how to use automation and machine learning to improve performance while reducing manual work.',
      author: 'Lisa Park',
      authorRole: 'PPC Specialist',
      date: '2024-01-05',
      readTime: '9 min read',
      category: 'PPC',
      tags: ['PPC', 'Google Ads', 'ROI', 'Optimization'],
      image: '/api/placeholder/600/400',
      comments: 22,
      featured: false,
      color: 'from-red-500 to-red-600'
    },
    {
      id: 6,
      title: 'Email Marketing Best Practices: Boost Open Rates by 300%',
      excerpt: 'Discover proven email marketing strategies that have helped our clients achieve 300% higher open rates and significantly better engagement...',
      fullContent: 'Discover proven email marketing strategies that have helped our clients achieve 300% higher open rates and significantly better engagement rates. Learn about subject line optimization, personalization techniques, segmentation strategies, and automation workflows that convert. This guide includes real case studies, A/B testing methodologies, and advanced email design principles. We\'ll also cover deliverability best practices and how to avoid spam filters while maximizing inbox placement.',
      author: 'Alex Johnson',
      authorRole: 'Email Marketing Specialist',
      date: '2024-01-03',
      readTime: '7 min read',
      category: 'Email Marketing',
      tags: ['Email Marketing', 'Open Rates', 'Engagement', 'Automation'],
      image: '/api/placeholder/600/400',
      comments: 28,
      featured: false,
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const categories = ['All', 'SEO', 'Social Media', 'Content Marketing', 'Marketing Automation', 'PPC', 'Email Marketing'];

  const toggleReadMore = (postId: number) => {
    setExpandedPosts(prev => 
      prev.includes(postId) 
        ? prev.filter(id => id !== postId)
        : [...prev, postId]
    );
  };

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const recentPosts = blogPosts.slice(0, 5);

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
        {/* Clean Background - No dark elements */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1.1, 1, 1.1],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
              <BookOpen className="w-4 h-4 mr-2" />
              Expert Insights & Industry Trends
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight mb-6">
              Digital Marketing{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Blog & Insights
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Stay ahead of the curve with expert insights, proven strategies, and the latest trends 
              in digital marketing, SEO, and business growth.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center mb-8"
            >
              <Star className="w-6 h-6 text-yellow-500 mr-2" />
              <h2 className="text-2xl font-heading font-bold text-gray-900">Featured Articles</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-gray-400" />
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 bg-gradient-to-r ${post.color} text-white text-xs font-semibold rounded-full`}>
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {expandedPosts.includes(post.id) ? post.fullContent : post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors duration-200"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">{post.author}</p>
                          <p className="text-gray-500 text-xs">{post.authorRole}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => toggleReadMore(post.id)}
                        className="flex items-center text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200"
                      >
                        {expandedPosts.includes(post.id) ? 'Read Less' : 'Read More'}
                        <ArrowRight className="ml-1 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Blog Section */}
      <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Category Filter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex items-center mb-8"
              >
                <Filter className="w-5 h-5 text-gray-500 mr-3" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                        <BookOpen className="w-12 h-12 text-gray-400" />
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className={`px-2 py-1 bg-gradient-to-r ${post.color} text-white text-xs font-semibold rounded-full`}>
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center text-xs text-gray-500 mb-3">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span className="mr-3">{new Date(post.date).toLocaleDateString()}</span>
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{post.readTime}</span>
                      </div>

                      <h3 className="text-lg font-heading font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {expandedPosts.includes(post.id) ? post.fullContent : post.excerpt}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs mr-2">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 text-xs">{post.author}</p>
                            <p className="text-gray-500 text-xs">{post.authorRole}</p>
                          </div>
                        </div>

                        <button
                          onClick={() => toggleReadMore(post.id)}
                          className="flex items-center text-blue-600 hover:text-blue-700 font-semibold text-xs transition-colors duration-200"
                        >
                          {expandedPosts.includes(post.id) ? 'Less' : 'More'}
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12"
                >
                  <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                  <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Recent Posts */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {recentPosts.map((post) => (
                      <div key={post.id} className="group cursor-pointer">
                        <h4 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 mb-1">
                          {post.title}
                        </h4>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Categories */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                >
                  <h3 className="text-lg font-heading font-bold text-gray-900 mb-4 flex items-center">
                    <Tag className="w-5 h-5 mr-2 text-blue-600" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.filter(cat => cat !== 'All').map((category) => {
                      const count = blogPosts.filter(post => post.category === category).length;
                      return (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full flex items-center justify-between p-2 rounded-lg text-sm transition-colors duration-200 ${
                            selectedCategory === category
                              ? 'bg-blue-50 text-blue-600'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          <span>{category}</span>
                          <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>

                
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}