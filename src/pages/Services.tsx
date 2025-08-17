import React from 'react';
import { Code, Share2, Smartphone, Search, Palette, BarChart3, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const webServices = [
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Tailored websites and web applications built with modern frameworks like React, Vue, and Node.js.'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first designs that provide optimal user experience across all devices and screen sizes.'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Search engine optimization strategies to improve your website\'s visibility and organic traffic.'
    },
    {
      icon: Shield,
      title: 'Security & Performance',
      description: 'Robust security measures and performance optimization to ensure fast, secure websites.'
    }
  ];

  const socialServices = [
    {
      icon: Share2,
      title: 'Social Media Strategy',
      description: 'Comprehensive strategies tailored to your brand and audience across all major platforms.'
    },
    {
      icon: Palette,
      title: 'Content Creation',
      description: 'Engaging visual and written content that resonates with your audience and drives engagement.'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Detailed performance tracking and insights to measure ROI and optimize campaigns.'
    },
    {
      icon: Zap,
      title: 'Campaign Management',
      description: 'End-to-end management of social media campaigns from planning to execution and analysis.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business goals, target audience, and project requirements.'
    },
    {
      step: '02',
      title: 'Strategy & Design',
      description: 'Our team develops a comprehensive strategy and creates designs that align with your vision.'
    },
    {
      step: '03',
      title: 'Development & Creation',
      description: 'We bring your project to life using best practices and cutting-edge technologies.'
    },
    {
      step: '04',
      title: 'Launch & Optimization',
      description: 'After thorough testing, we launch your project and continue optimizing for better results.'
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              From custom web development to strategic social media management, 
              we offer comprehensive digital solutions to help your business thrive online.
            </p>
          </div>
        </div>
      </section>

      {/* Web Development Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Web Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Custom websites and applications that drive business growth and deliver exceptional user experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200 group"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Social Media Management Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Strategic social media solutions that build brand awareness, engage audiences, and drive conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-200 group"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and exceeds client expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We stay current with the latest technologies to deliver cutting-edge solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['React', 'Vue.js', 'Node.js', 'WordPress', 'Shopify', 'Python', 'MongoDB', 'PostgreSQL', 'AWS', 'Google Cloud', 'Facebook Ads', 'Instagram'].map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-all duration-200">
                <span className="text-gray-700 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help transform your digital presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/pricing"
              className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-all duration-200"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;