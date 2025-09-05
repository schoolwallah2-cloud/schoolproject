import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-premium-gradient text-premium-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-premium-gold/5 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight mb-6">
                Transform Your School's 
                <span className="text-premium-gold"> Digital Journey</span>
              </h1>
              <p className="text-xl md:text-2xl text-premium-silver mb-8 leading-relaxed">
                Complete educational support system for ERP, LMS, CBSE compliance, 
                and specialized programs that drive institutional excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="premium-button text-lg inline-flex items-center justify-center group"
                >
                  List Your School
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  to="/contact"
                  className="premium-button-outline text-lg inline-flex items-center justify-center"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern classroom with students and teacher"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-premium-navy opacity-20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="bg-premium-cream py-12 border-b border-premium-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-premium-charcoal mb-8 font-medium">Trusted by Leading Educational Institutions</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            <div className="text-center">
              <div className="premium-card rounded-lg p-6 h-20 flex items-center justify-center">
                <span className="font-bold text-premium-charcoal">Delhi Public School</span>
              </div>
            </div>
            <div className="text-center">
              <div className="premium-card rounded-lg p-6 h-20 flex items-center justify-center">
                <span className="font-bold text-premium-charcoal">Kendriya Vidyalaya</span>
              </div>
            </div>
            <div className="text-center">
              <div className="premium-card rounded-lg p-6 h-20 flex items-center justify-center">
                <span className="font-bold text-premium-charcoal">CBSE Schools</span>
              </div>
            </div>
            <div className="text-center">
              <div className="premium-card rounded-lg p-6 h-20 flex items-center justify-center">
                <span className="font-bold text-premium-charcoal">International Schools</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-premium-navy mb-4">
              Comprehensive School Support Services
            </h2>
            <p className="text-xl text-premium-charcoal max-w-3xl mx-auto">
              From digital transformation to specialized programs, we provide end-to-end solutions for modern educational institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'ERP Systems',
                description: 'Complete school management solutions for administration, finance, and operations.',
                icon: Users,
                image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                title: 'Learning Management',
                description: 'Modern LMS platforms for enhanced teaching and student engagement.',
                icon: Award,
                image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
              {
                title: 'CBSE Compliance',
                description: 'Ensure full compliance with CBSE guidelines and requirements.',
                icon: CheckCircle,
                image: 'https://images.pexels.com/photos/159775/library-books-bookshelf-archive-159775.jpeg?auto=compress&cs=tinysrgb&w=600'
              },
            ].map((service, index) => (
              <div key={index} className="premium-card rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-premium-gold mr-3" />
                    <h3 className="font-serif text-xl font-bold text-premium-navy">{service.title}</h3>
                  </div>
                  <p className="text-premium-charcoal mb-4">{service.description}</p>
                  <Link
                    to="/services"
                    className="text-premium-gold font-semibold hover:text-premium-accent inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="premium-button text-lg inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-premium-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-premium-navy mb-4">
              What School Leaders Say
            </h2>
            <p className="text-xl text-premium-charcoal">
              Trusted by educators and administrators nationwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Dr. Priya Sharma',
                title: 'Principal, Modern High School',
                content: 'EduConsult Pro transformed our administrative processes. Their ERP system streamlined everything from admissions to report cards.',
                rating: 5
              },
              {
                name: 'Rajesh Kumar',
                title: 'Director, International Academy',
                content: 'Outstanding CBSE compliance support. They made our accreditation process seamless and stress-free.',
                rating: 5
              },
              {
                name: 'Mrs. Anita Patel',
                title: 'Administrator, Green Valley School',
                content: 'The vocational program implementation exceeded our expectations. Student engagement has increased significantly.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="premium-card rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-premium-gold fill-current" />
                  ))}
                </div>
                <p className="text-premium-charcoal mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-premium-navy">{testimonial.name}</p>
                  <p className="text-sm text-premium-charcoal">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gold-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-premium-navy mb-4">
            Ready to Transform Your School?
          </h2>
          <p className="text-xl text-premium-navy/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of schools already benefiting from our comprehensive support systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-premium-navy text-premium-cream px-8 py-4 rounded-lg font-semibold text-lg hover:bg-premium-charcoal transition-colors duration-200 inline-flex items-center justify-center shadow-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-premium-navy text-premium-navy hover:bg-premium-navy hover:text-premium-cream px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;