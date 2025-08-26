import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Zap, BarChart3, Users, CheckCircle, ArrowRight, Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Products - Software Solutions | Viralink',
  description: 'Innovative software products including ViraFlow automation, ViraInsights analytics, and ViraCRM. Streamline your marketing with our powerful tools.',
};

export default function ProductsPage() {
  const products = [
    {
      icon: Zap,
      name: 'ViraFlow',
      tagline: 'Marketing Automation Platform',
      description: 'Streamline your marketing workflows with intelligent automation that nurtures leads and drives conversions.',
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
      popular: false
    },
    {
      icon: BarChart3,
      name: 'ViraInsights',
      tagline: 'Analytics & Reporting Dashboard',
      description: 'Get comprehensive insights into your marketing performance with advanced analytics and custom reporting.',
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
      popular: true
    },
    {
      icon: Users,
      name: 'ViraCRM',
      tagline: 'Customer Relationship Management',
      description: 'Manage customer relationships effectively with our comprehensive CRM solution for modern businesses.',
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
      popular: false
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
                Our <span className="text-accent-600">Products</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Powerful software solutions designed to automate, analyze, and optimize 
                your digital marketing campaigns for maximum efficiency.
              </p>
              <button className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200 shadow-lg">
                Start Free Trial
              </button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.name} className={`bg-white rounded-3xl p-8 shadow-xl border relative ${product.popular ? 'border-accent-200 ring-2 ring-accent-500 ring-opacity-20' : 'border-gray-100'}`}>
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-accent-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        POPULAR
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-center w-16 h-16 bg-accent-100 rounded-2xl mb-6">
                    <product.icon className="w-8 h-8 text-accent-600" />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-accent-600 font-medium mb-4">{product.tagline}</p>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Pricing:</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Starter</span>
                        <span className="font-semibold">{product.pricing.starter}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Professional</span>
                        <span className="font-semibold">{product.pricing.pro}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Enterprise</span>
                        <span className="font-semibold">{product.pricing.enterprise}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <button className="w-full bg-accent-600 hover:bg-accent-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-200 flex items-center justify-center">
                      Start Free Trial
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                    <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium transition-colors duration-200">
                      View Demo
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}