import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-premium-gradient text-premium-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8 text-premium-gold" />
              <span className="font-serif text-xl font-bold">EduConsult Pro</span>
            </Link>
            <p className="text-premium-silver mb-6 max-w-md">
              Empowering educational institutions with comprehensive support systems, 
              from ERP implementation to CBSE compliance and beyond.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2 text-sm text-premium-silver">
                <Phone className="h-4 w-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-premium-silver">
                <Mail className="h-4 w-4" />
                <span>info@educonsultpro.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-premium-silver">
              <li><Link to="/about" className="hover:text-premium-gold transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-premium-gold transition-colors">Services</Link></li>
              <li><Link to="/blog" className="hover:text-premium-gold transition-colors">Knowledge Hub</Link></li>
              <li><Link to="/contact" className="hover:text-premium-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-premium-silver">
              <li><span className="hover:text-premium-gold transition-colors">ERP Systems</span></li>
              <li><span className="hover:text-premium-gold transition-colors">LMS Solutions</span></li>
              <li><span className="hover:text-premium-gold transition-colors">CBSE Compliance</span></li>
              <li><span className="hover:text-premium-gold transition-colors">School Onboarding</span></li>
              <li><span className="hover:text-premium-gold transition-colors">Vocational Programs</span></li>
              <li><span className="hover:text-premium-gold transition-colors">Language Courses</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-premium-gold/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-premium-silver">
            © 2025 EduConsult Pro. All rights reserved.
          </p>
          <p className="text-sm text-premium-silver mt-2 md:mt-0">
            Transforming Education, One School at a Time
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;