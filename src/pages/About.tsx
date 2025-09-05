import React from 'react';
import { Users, Target, Eye, Award, BookOpen, Globe } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
              Empowering Educational Excellence
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              We are dedicated to transforming educational institutions through comprehensive 
              support systems and innovative solutions that drive student success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/8471804/pexels-photo-8471804.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Teachers collaborating in modern educational setting"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
            <div>
              <div className="mb-12">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-900 mr-3" />
                  <h2 className="font-serif text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower educational institutions with comprehensive support systems that 
                  enhance operational efficiency, ensure regulatory compliance, and create 
                  exceptional learning environments for students and educators alike.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-green-700 mr-3" />
                  <h2 className="font-serif text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be the leading consultancy that transforms schools into centers of 
                  excellence through innovative technology solutions, strategic guidance, 
                  and unwavering commitment to educational advancement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Schools Trust Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven track record and comprehensive approach make us the preferred 
              partner for educational transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Expert Team',
                description: 'Education specialists with decades of combined experience in school administration and technology implementation.'
              },
              {
                icon: Award,
                title: 'Proven Results',
                description: 'Over 500+ schools successfully transformed with improved efficiency and compliance ratings.'
              },
              {
                icon: BookOpen,
                title: 'Comprehensive Support',
                description: 'End-to-end solutions covering every aspect of school operations from ERP to specialized programs.'
              },
              {
                icon: Globe,
                title: 'National Reach',
                description: 'Serving educational institutions across India with localized support and understanding.'
              },
              {
                icon: Target,
                title: 'Tailored Solutions',
                description: 'Customized approaches that fit your school\'s unique needs, culture, and objectives.'
              },
              {
                icon: Eye,
                title: 'Future-Ready',
                description: 'Solutions designed to evolve with changing educational landscapes and technological advances.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <item.icon className="h-10 w-10 text-blue-900 mr-4" />
                  <h3 className="font-serif text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic methodology that ensures successful implementation and lasting results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                {[
                  {
                    step: '01',
                    title: 'Assessment & Analysis',
                    description: 'Comprehensive evaluation of your current systems, processes, and requirements.'
                  },
                  {
                    step: '02',
                    title: 'Strategic Planning',
                    description: 'Development of customized roadmap aligned with your institutional goals.'
                  },
                  {
                    step: '03',
                    title: 'Implementation',
                    description: 'Seamless deployment with minimal disruption to daily operations.'
                  },
                  {
                    step: '04',
                    title: 'Training & Support',
                    description: 'Comprehensive training programs and ongoing support for sustained success.'
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-white rounded-lg flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Educational planning and consultation"
                className="rounded-lg shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Schools Transformed' },
              { number: '50,000+', label: 'Students Impacted' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '15+', label: 'Years Experience' }
            ].map((stat, index) => (
              <div key={index}>
                <p className="font-serif text-3xl md:text-4xl font-bold text-green-400 mb-2">{stat.number}</p>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;