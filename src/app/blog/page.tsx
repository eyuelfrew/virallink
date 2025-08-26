import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, ArrowRight, TrendingUp, Search, Share2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog - Digital Marketing Insights | Viralink',
  description: 'Stay updated with the latest digital marketing trends, tips, and strategies from the Viralink team. Expert insights to grow your business.',
};

export default function BlogPage() {
  const featuredPost = {
    title: 'The Future of Digital Marketing: AI and Automation Trends for 2024',
    excerpt: 'Discover how artificial intelligence and marketing automation are reshaping the digital landscape and what it means for your business strategy.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    category: 'Trends',
    readTime: '8 min read',
    image: '/api/placeholder/800/400'
  };

  const blogPosts = [
    {
      title: 'How to Optimize Your SEO Strategy for Voice Search',
      excerpt: 'Voice search is changing how people find information online. Learn how to adapt your SEO strategy for this growing trend.',
      author: 'Michael Chen',
      date: '2024-01-12',
      category: 'SEO',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Social Media Marketing: Building Authentic Connections',
      excerpt: 'Discover proven strategies to build genuine relationships with your audience and drive meaningful engagement on social platforms.',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      category: 'Social Media',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Content Marketing ROI: Measuring What Matters',
      excerpt: 'Learn how to track and measure the true impact of your content marketing efforts with actionable metrics and KPIs.',
      author: 'David Thompson',
      date: '2024-01-08',
      category: 'Content Marketing',
      readTime: '7 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Email Marketing Automation: Best Practices for 2024',
      excerpt: 'Maximize your email marketing results with advanced automation strategies that nurture leads and drive conversions.',
      author: 'Sarah Johnson',
      date: '2024-01-05',
      category: 'Email Marketing',
      readTime: '6 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'PPC Advertising: Advanced Strategies for Better ROI',
      excerpt: 'Take your pay-per-click campaigns to the next level with advanced targeting, bidding strategies, and optimization techniques.',
      author: 'Michael Chen',
      date: '2024-01-03',
      category: 'PPC',
      readTime: '8 min read',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'The Power of Video Marketing in Digital Strategy',
      excerpt: 'Video content continues to dominate digital marketing. Learn how to create compelling video content that converts.',
      author: 'Emily Rodriguez',
      date: '2024-01-01',
      category: 'Video Marketing',
      readTime: '5 min read',
      image: '/api/placeholder/400/250'
    }
  ];

  const categories = [
    { name: 'All Posts', count: 24, icon: TrendingUp },
    { name: 'SEO', count: 8, icon: Search },
    { name: 'Social Media', count: 6, icon: Share2 },
    { name: 'Content Marketing', count: 5, icon: TrendingUp },
    { name: 'Email Marketing', count: 3, icon: TrendingUp },
    { name: 'PPC', count: 2, icon: TrendingUp }
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 to-accent-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
                Digital Marketing <span className="text-primary-600">Insights</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Stay ahead of the curve with expert insights, industry trends, and actionable 
                strategies to grow your business in the digital age.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-24">
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-primary-50 transition-colors duration-200 text-left"
                    >
                      <div className="flex items-center">
                        <category.icon className="w-4 h-4 text-primary-600 mr-3" />
                        <span className="text-gray-700">{category.name}</span>
                      </div>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Post */}
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12">
                <div className="h-64 bg-gradient-to-r from-primary-400 to-accent-400"></div>
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-medium mr-4">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center mr-4">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center mr-4">
                      <User className="w-4 h-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center">
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <article key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="h-48 bg-gradient-to-r from-primary-300 to-accent-300"></div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full font-medium mr-3 text-xs">
                          {post.category}
                        </span>
                        <div className="flex items-center mr-3">
                          <Calendar className="w-3 h-3 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <button className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center">
                          Read More
                          <ArrowRight className="ml-1 w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}