import React from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const packages = [
    {
      name: 'Basic Package',
      description: 'Perfect for small businesses and startups looking to establish their online presence.',
      price: '$2,500',
      duration: 'one-time',
      popular: false,
      features: [
        'Custom 5-page website',
        'Mobile-responsive design',
        'Basic SEO optimization',
        'Social media setup (2 platforms)',
        'Content creation (10 posts/month)',
        'Monthly performance report',
        '3 months support',
        'Basic analytics setup'
      ],
      targetCustomer: 'Small businesses, startups, freelancers',
      keyBenefits: [
        'Professional online presence',
        'Mobile-friendly design',
        'Social media foundation'
      ]
    },
    {
      name: 'Corporate Package',
      description: 'Comprehensive solution for established companies ready to scale their digital presence.',
      price: '$5,500',
      duration: 'one-time',
      popular: true,
      features: [
        'Custom 10-page website',
        'Advanced responsive design',
        'Complete SEO optimization',
        'E-commerce integration',
        'Social media management (4 platforms)',
        'Content creation (25 posts/month)',
        'Bi-weekly strategy calls',
        'Advanced analytics & reporting',
        '6 months priority support',
        'Performance optimization'
      ],
      targetCustomer: 'Medium businesses, established companies',
      keyBenefits: [
        'Comprehensive digital strategy',
        'E-commerce capabilities',
        'Multi-platform presence',
        'Priority support'
      ]
    },
    {
      name: 'Advanced Package',
      description: 'Enterprise-level solution with custom features and dedicated account management.',
      price: '$10,000+',
      duration: 'custom',
      popular: false,
      features: [
        'Custom web application',
        'Advanced functionality & integrations',
        'Complete digital marketing strategy',
        'Social media management (all platforms)',
        'Content creation (50+ posts/month)',
        'Weekly strategy sessions',
        'Dedicated account manager',
        'Custom analytics dashboard',
        '12 months premium support',
        'Performance guarantees',
        'Brand development',
        'Conversion optimization'
      ],
      targetCustomer: 'Large enterprises, high-growth companies',
      keyBenefits: [
        'Enterprise-level features',
        'Dedicated account management',
        'Custom integrations',
        'Performance guarantees'
      ]
    }
  ];

  const addOns = [
    { name: 'Additional Website Pages', price: '$300/page' },
    { name: 'E-commerce Setup', price: '$800' },
    { name: 'Advanced SEO Audit', price: '$500' },
    { name: 'Social Media Advertising Management', price: '$800/month' },
    { name: 'Content Writing (Blog Posts)', price: '$150/post' },
    { name: 'Logo & Brand Design', price: '$1,200' }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Choose the package that best fits your business needs. All packages include our commitment 
              to quality and ongoing support to ensure your digital success.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-lg shadow-lg border-2 hover:shadow-xl transition-all duration-200 ${
                  pkg.popular 
                    ? 'border-blue-500 transform scale-105' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                    {pkg.duration !== 'custom' && (
                      <span className="text-gray-500 ml-2">/{pkg.duration}</span>
                    )}
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-2">Target Customer:</h4>
                    <p className="text-gray-600 text-sm">{pkg.targetCustomer}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {pkg.keyBenefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-600">
                          <Check className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm text-gray-600">
                          <Check className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                      pkg.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enhance your package with these additional services tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-gray-900">{addon.name}</h3>
                  <span className="text-blue-600 font-bold">{addon.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, bank transfers, and PayPal. Payment plans are available for larger projects.'
              },
              {
                question: 'How long does a typical project take?',
                answer: 'Basic packages typically take 3-4 weeks, Corporate packages 6-8 weeks, and Advanced packages 10-12 weeks depending on complexity.'
              },
              {
                question: 'Do you offer ongoing maintenance?',
                answer: 'Yes! All packages include initial support, and we offer ongoing maintenance plans starting at $200/month.'
              },
              {
                question: 'Can I upgrade my package later?',
                answer: 'Absolutely! You can upgrade your package at any time, and we\'ll credit your previous investment toward the new package.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Choose Your Package?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Have questions about which package is right for you? Let's schedule a free consultation 
            to discuss your specific needs and goals.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center"
          >
            Schedule Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;