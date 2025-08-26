import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Target, Award, Zap, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Digital Marketing Experts | Viralink',
  description: 'Learn about Viralink\'s mission to transform businesses through innovative digital marketing and software solutions. Meet our expert team.',
};

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We are committed to helping businesses achieve their digital marketing goals through innovative strategies and cutting-edge technology.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Our clients\' success is our success. We build long-term partnerships based on trust, transparency, and measurable results.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from strategy development to campaign execution and customer service.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We stay ahead of industry trends and continuously innovate to provide our clients with the most effective solutions.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      bio: 'With over 15 years in digital marketing, Sarah leads Viralink with a vision to transform how businesses approach digital growth.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Michael Chen',
      position: 'CTO',
      bio: 'Michael brings deep technical expertise in software development and marketing automation to drive our product innovation.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Head of Marketing',
      bio: 'Emily specializes in data-driven marketing strategies and has helped hundreds of businesses scale their digital presence.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'David Thompson',
      position: 'Head of Sales',
      bio: 'David focuses on building strong client relationships and ensuring our solutions perfectly align with business objectives.',
      image: '/api/placeholder/300/300'
    }
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
                About <span className="text-primary-600">Viralink</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We're a team of digital marketing experts and software innovators dedicated to 
                helping businesses thrive in the digital landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Founded in 2020, Viralink emerged from a simple observation: businesses needed more than 
                  just marketing services—they needed intelligent tools and strategies that could adapt to 
                  the rapidly evolving digital landscape.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  What started as a small digital marketing agency has grown into a comprehensive platform 
                  that combines expert services with powerful software solutions. Today, we serve over 500 
                  clients worldwide, helping them achieve unprecedented growth through data-driven strategies 
                  and innovative technology.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    500+ successful client partnerships
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    50+ countries served globally
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    99.9% client satisfaction rate
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Award-winning team of experts
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl p-8 text-center">
                <div className="text-6xl font-bold text-primary-600 mb-4">500+</div>
                <div className="text-xl font-semibold text-gray-900 mb-2">Happy Clients</div>
                <div className="text-gray-600">Businesses transformed worldwide</div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These core values guide everything we do and shape how we serve our clients.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-gray-900 mb-6">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in digital marketing, 
                software development, and business strategy.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member) => (
                <div key={member.name} className="bg-white rounded-2xl p-6 shadow-lg text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses that have accelerated their growth with Viralink.
            </p>
            <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg flex items-center mx-auto">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}