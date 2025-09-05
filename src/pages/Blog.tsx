import React from 'react';
import { Calendar, Tag, ArrowRight, BookOpen, Users, Briefcase, Cpu } from 'lucide-react';

const Blog = () => {
  const categories = [
    { name: 'All', count: 24, active: true },
    { name: 'CBSE', count: 8, active: false },
    { name: 'School Management', count: 6, active: false },
    { name: 'Vocational', count: 5, active: false },
    { name: 'Technology', count: 5, active: false },
  ];

  const articles = [
    {
      title: 'Complete Guide to CBSE Compliance in 2025',
      excerpt: 'Navigate the latest CBSE guidelines and ensure your school meets all compliance requirements with our comprehensive checklist.',
      category: 'CBSE',
      date: 'January 15, 2025',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/159775/library-books-bookshelf-archive-159775.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: BookOpen
    },
    {
      title: 'Digital Transformation in Indian Schools: A Success Story',
      excerpt: 'Learn how Delhi Public School achieved 40% improvement in administrative efficiency through strategic ERP implementation.',
      category: 'School Management',
      date: 'January 12, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Users
    },
    {
      title: 'Future Skills: Vocational Programs That Matter',
      excerpt: 'Discover the most in-demand vocational courses that are preparing students for tomorrow\'s job market.',
      category: 'Vocational',
      date: 'January 10, 2025',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Briefcase
    },
    {
      title: 'AI in Education: Revolutionizing Learning Management',
      excerpt: 'Explore how artificial intelligence is transforming LMS platforms and creating personalized learning experiences.',
      category: 'Technology',
      date: 'January 8, 2025',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Cpu
    },
    {
      title: 'Implementing NEP 2020: Practical Steps for Schools',
      excerpt: 'A step-by-step guide to aligning your curriculum and teaching methods with the National Education Policy 2020.',
      category: 'CBSE',
      date: 'January 5, 2025',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/8471804/pexels-photo-8471804.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: BookOpen
    },
    {
      title: 'Streamlining School Operations with Smart ERP Solutions',
      excerpt: 'Discover how modern ERP systems can transform your school\'s administrative processes and improve efficiency.',
      category: 'Technology',
      date: 'January 3, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=600',
      icon: Cpu
    }
  ];

  const featuredArticle = articles[0];
  const regularArticles = articles.slice(1);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Knowledge Hub
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Insights, guides, and best practices for modern educational institutions 
            navigating digital transformation and academic excellence.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  category.active
                    ? 'bg-blue-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <Tag className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-blue-600 font-semibold">{featuredArticle.category}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-gray-500 text-sm">Featured Article</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {featuredArticle.title}
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredArticle.date}</span>
                  <span>{featuredArticle.readTime}</span>
                </div>
                <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200 inline-flex items-center w-fit">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              <div>
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover min-h-96"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest trends and insights in educational technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <article key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-blue-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <article.icon className="h-5 w-5 text-blue-900 mr-2" />
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span className="mr-3">{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-serif text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-200">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <button className="text-blue-900 font-semibold hover:text-blue-700 inline-flex items-center transition-colors duration-200">
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gray-100 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors duration-200">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Stay Informed
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest insights delivered to your inbox. No spam, unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button className="bg-green-600 hover:bg-green-500 px-6 py-3 rounded-lg font-semibold transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;