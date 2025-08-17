import React from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const featuredPost = {
    title: 'The Future of Web Development: Trends to Watch in 2025',
    excerpt: 'Explore the latest trends shaping web development, from AI integration to progressive web apps and the evolving landscape of user experience design.',
    author: 'Brandon Thompson',
    date: 'January 15, 2025',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Web Development', 'Trends', 'AI', 'UX Design']
  };

  const blogPosts = [
    {
      title: 'Social Media Marketing Strategies That Actually Work',
      excerpt: 'Discover proven social media marketing tactics that drive engagement, build brand awareness, and convert followers into customers.',
      author: 'Taylor Johnson',
      date: 'January 12, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Social Media', 'Marketing', 'Strategy'],
      category: 'Social Media'
    },
    {
      title: 'Building High-Performance React Applications',
      excerpt: 'Learn advanced techniques for optimizing React applications, including code splitting, lazy loading, and performance monitoring.',
      author: 'Alex Rivera',
      date: 'January 10, 2025',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['React', 'Performance', 'JavaScript'],
      category: 'Development'
    },
    {
      title: 'The Psychology of Color in Digital Design',
      excerpt: 'Understanding how color psychology influences user behavior and how to apply it effectively in web and social media design.',
      author: 'Morgan Davis',
      date: 'January 8, 2025',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Design', 'Psychology', 'Branding'],
      category: 'Design'
    },
    {
      title: 'SEO Best Practices for Modern Websites',
      excerpt: 'A comprehensive guide to search engine optimization techniques that improve visibility and drive organic traffic.',
      author: 'Brandon Thompson',
      date: 'January 5, 2025',
      readTime: '12 min read',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['SEO', 'Marketing', 'Analytics'],
      category: 'Marketing'
    },
    {
      title: 'Creating Engaging Content for Instagram Stories',
      excerpt: 'Tips and tricks for creating Instagram Stories that capture attention, drive engagement, and boost your social media presence.',
      author: 'Morgan Davis',
      date: 'January 3, 2025',
      readTime: '4 min read',
      image: 'https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Instagram', 'Content Creation', 'Social Media'],
      category: 'Social Media'
    },
    {
      title: 'The Importance of Mobile-First Design',
      excerpt: 'Why mobile-first design is crucial for modern websites and how to implement responsive design principles effectively.',
      author: 'Alex Rivera',
      date: 'December 30, 2024',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Mobile Design', 'Responsive', 'UX'],
      category: 'Development'
    }
  ];

  const categories = ['All', 'Development', 'Social Media', 'Design', 'Marketing'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              B&T Innovations Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Stay updated with the latest insights on web development, social media marketing, 
              and digital innovation. Expert tips and strategies to grow your business online.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Article</h2>
            <div className="h-1 w-20 bg-blue-600 rounded"></div>
          </div>

          <div className="bg-white rounded-lg shadow-xl overflow-hidden lg:flex">
            <div className="lg:w-1/2">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-64 lg:h-full object-cover"
              />
            </div>
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="flex flex-wrap gap-2 mb-4">
                {featuredPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                {featuredPost.title}
              </h3>
              <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
              
              <div className="flex items-center text-gray-500 text-sm mb-6">
                <User className="h-4 w-4 mr-2" />
                <span className="mr-4">{featuredPost.author}</span>
                <Calendar className="h-4 w-4 mr-2" />
                <span className="mr-4">{featuredPost.date}</span>
                <span>{featuredPost.readTime}</span>
              </div>
              
              <a
                href="#"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors group"
              >
                Read Full Article
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-200 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <User className="h-4 w-4 mr-1" />
                      <span className="mr-3">{post.author}</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                      <a
                        href="#"
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group"
                      >
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest insights on web development and digital marketing delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-r-lg font-medium hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Helpful Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our additional resources to help grow your business online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tag className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Tools</h3>
              <p className="text-gray-600 mb-4">Access our collection of free tools and resources for website optimization and social media planning.</p>
              <Link to="#" className="text-blue-600 hover:text-blue-700 font-medium">
                View Tools →
              </Link>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Webinars</h3>
              <p className="text-gray-600 mb-4">Join our monthly webinars covering the latest trends in web development and digital marketing.</p>
              <Link to="#" className="text-blue-600 hover:text-blue-700 font-medium">
                Register Now →
              </Link>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600 mb-4">Book a free 30-minute consultation to discuss your specific challenges and goals.</p>
              <Link to="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
                Book a Call →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;