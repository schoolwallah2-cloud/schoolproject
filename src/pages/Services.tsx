import React from 'react';
import { Database, BookOpen, CheckCircle, UserPlus, Briefcase, Languages } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Database,
      title: 'ERP Systems',
      description: 'Comprehensive school management solutions that streamline administrative processes, financial management, and operational workflows.',
      features: [
        'Student Information Management',
        'Fee Management & Billing',
        'Staff Administration',
        'Academic Record Keeping',
        'Inventory Management',
        'Parent Communication Portal'
      ],
      image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: BookOpen,
      title: 'Learning Management Systems',
      description: 'Modern LMS platforms that enhance teaching effectiveness and student engagement through digital learning environments.',
      features: [
        'Virtual Classroom Integration',
        'Assignment Management',
        'Grade Book & Analytics',
        'Interactive Content Delivery',
        'Student Progress Tracking',
        'Mobile Learning Support'
      ],
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: CheckCircle,
      title: 'CBSE Compliance',
      description: 'Ensure full compliance with CBSE guidelines and regulations through our comprehensive compliance management services.',
      features: [
        'Curriculum Alignment',
        'Documentation Support',
        'Inspection Preparation',
        'Quality Assurance',
        'Continuous Assessment Setup',
        'Accreditation Assistance'
      ],
      image: 'https://images.pexels.com/photos/159775/library-books-bookshelf-archive-159775.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: UserPlus,
      title: 'School Onboarding',
      description: 'Seamless integration of new schools into digital ecosystems with comprehensive onboarding and training programs.',
      features: [
        'System Setup & Configuration',
        'Data Migration Services',
        'Staff Training Programs',
        'Process Standardization',
        'Change Management',
        'Go-Live Support'
      ],
      image: 'https://images.pexels.com/photos/8471993/pexels-photo-8471993.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Briefcase,
      title: 'Vocational Programs',
      description: 'Development and implementation of industry-aligned vocational courses that prepare students for future careers.',
      features: [
        'Industry Partnership Development',
        'Curriculum Design',
        'Skill Assessment Programs',
        'Career Guidance',
        'Placement Assistance',
        'Certification Management'
      ],
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Languages,
      title: 'Foreign Language Programs',
      description: 'Comprehensive foreign language learning programs with certified instructors and modern teaching methodologies.',
      features: [
        'Multiple Language Options',
        'Certified Native Instructors',
        'Interactive Learning Methods',
        'Cultural Exchange Programs',
        'International Certification Prep',
        'Online Learning Platforms'
      ],
      image: 'https://images.pexels.com/photos/8471804/pexels-photo-8471804.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Comprehensive School Solutions
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            From ERP implementation to specialized programs, we provide complete support 
            for modern educational institutions seeking excellence and growth.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <service.icon className="h-12 w-12 text-blue-900 mr-4" />
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="bg-blue-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors duration-200">
                    Learn More
                  </button>
                </div>
                
                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded-lg shadow-xl w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful implementation and sustainable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Discovery',
                description: 'Comprehensive assessment of your current systems and requirements'
              },
              {
                step: '2',
                title: 'Planning',
                description: 'Strategic roadmap development with clear milestones and timelines'
              },
              {
                step: '3',
                title: 'Implementation',
                description: 'Seamless deployment with minimal disruption to operations'
              },
              {
                step: '4',
                title: 'Support',
                description: 'Ongoing training, maintenance, and optimization support'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-800 to-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your School?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our comprehensive solutions can enhance your educational institution.
          </p>
          <button className="bg-white text-green-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Services;