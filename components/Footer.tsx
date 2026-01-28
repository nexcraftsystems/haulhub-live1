
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* About Column */}
          <div className="space-y-8">
            <Logo isDark className="h-12" />
            <p className="text-slate-400 text-lg leading-relaxed">
              Haul Hub Sdn Bhd is a newly established logistics and freight solutions company, focused on delivery of reliable, compliant, and cost-effective services.
            </p>
            <div className="flex space-x-5">
              {[Twitter, Facebook, Instagram, Linkedin].map((Icon, i) => (
                <span key={i} className="w-12 h-12 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-2xl text-slate-500 transition-all">
                  <Icon size={22} />
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-blue-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-slate-400 text-lg">
              <li><Link to="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Invest with us</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
              <li><Link to="/industries" className="hover:text-blue-400 transition-colors">Industries</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold text-white relative inline-block">
              Expertise
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-blue-600 rounded-full"></span>
            </h4>
            <ul className="space-y-4 text-slate-400 text-lg">
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Invest with us</Link></li>
              <li><Link to="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-8">
            <h4 className="text-xl font-bold text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-blue-600 rounded-full"></span>
            </h4>
            <div className="space-y-6 text-slate-400 text-lg">
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-blue-500 shrink-0 mt-1" />
                <p>Lot 11B, Jalan Bayu Tinggi, Batu Endure 41200, Klang, Selangor, Malaysia</p>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={24} className="text-blue-500 shrink-0" />
                <p>603 8685 9434</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={24} className="text-blue-500 shrink-0" />
                <p>sales@haulhub.my</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-sm">
          <p>© Copyright Haul Hub Sdn. Bhd (202501048674 / 1650082-A). All Rights Reserved</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p className="font-bold tracking-widest text-slate-600 uppercase">Haul Hub</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
