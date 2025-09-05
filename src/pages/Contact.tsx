import React, { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    school: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">
            Let's Transform Your School Together
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Ready to take the next step? Get in touch with our education consultants 
            for a personalized discussion about your school's needs.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="mb-8">
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                  Get Started Today
                </h2>
                <p className="text-lg text-gray-600">
                  Fill out the form below and we'll get back to you within 24 hours to discuss your requirements.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="school" className="block text-sm font-semibold text-gray-700 mb-2">
                    School Name *
                  </label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your school name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Tell us about your specific needs and requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white px-6 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors duration-200 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Quick Contact Options */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                  Quick Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-500 transition-colors duration-200 flex items-center w-full"
                  >
                    <MessageSquare className="mr-3 h-5 w-5" />
                    WhatsApp: +91 9876543210
                  </a>
                  <a
                    href="mailto:info@educonsultpro.com"
                    className="bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-500 transition-colors duration-200 flex items-center w-full"
                  >
                    <Mail className="mr-3 h-5 w-5" />
                    Email: info@educonsultpro.com
                  </a>
                </div>
              </div>

              {/* Contact Details */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-blue-900 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <p className="text-gray-600">+91 9876543210</p>
                      <p className="text-gray-600">+91 9876543211</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-blue-900 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">info@educonsultpro.com</p>
                      <p className="text-gray-600">support@educonsultpro.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-blue-900 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Office</p>
                      <p className="text-gray-600">
                        123 Education Hub<br />
                        New Delhi, India 110001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-blue-900 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Business Hours</p>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-green-600 to-green-500 text-white rounded-2xl p-8">
                <h3 className="font-serif text-2xl font-bold mb-4">
                  Quick Response Guaranteed
                </h3>
                <p className="text-green-100 mb-4">
                  We understand that educational decisions are time-sensitive. 
                  Our team is committed to responding to all inquiries promptly.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="font-bold text-2xl">24 hrs</p>
                    <p className="text-green-100 text-sm">Email Response</p>
                  </div>
                  <div>
                    <p className="font-bold text-2xl">2 hrs</p>
                    <p className="text-green-100 text-sm">WhatsApp Response</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Common questions from school administrators and educators
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: 'How long does it take to implement an ERP system?',
                answer: 'Implementation typically takes 2-4 months depending on school size and complexity. We provide a detailed timeline during our initial consultation.'
              },
              {
                question: 'Do you provide training for our staff?',
                answer: 'Yes, comprehensive training is included in all our packages. We offer both on-site and online training sessions to ensure your team is fully equipped.'
              },
              {
                question: 'What ongoing support do you provide?',
                answer: 'We provide 24/7 technical support, regular system updates, and dedicated account management to ensure continuous smooth operations.'
              },
              {
                question: 'Can you help with CBSE inspection preparation?',
                answer: 'Absolutely. Our CBSE compliance services include complete inspection preparation, documentation review, and mock inspections to ensure readiness.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-serif text-lg font-bold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;