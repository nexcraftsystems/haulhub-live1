
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Invest with us', path: '/contact' },
  ];

  const servicesSubLinks = [
    { name: 'Our Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <Logo className="h-14" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold tracking-wide uppercase transition-all hover:text-blue-600 relative py-2 group ${
                  isActive(link.path) ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                  isActive(link.path) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 text-sm font-bold tracking-wide uppercase transition-colors hover:text-blue-600 text-slate-600`}
              >
                Products <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute right-0 mt-4 w-56 bg-white border border-gray-100 shadow-2xl rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-2">
                  {servicesSubLinks.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="block px-6 py-4 text-sm font-bold text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3.5 rounded-full text-sm font-black uppercase tracking-widest hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20 transition-all active:scale-95"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 h-screen animate-in fade-in slide-in-from-top-4 duration-500 overflow-y-auto">
          <div className="px-6 py-8 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block px-4 py-4 rounded-2xl text-xl font-bold ${
                  isActive(link.path) ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 pb-2 px-4 text-sm font-black text-slate-400 uppercase tracking-widest border-t border-gray-100">Products</div>
            {servicesSubLinks.map((sub) => (
              <Link
                key={sub.name}
                to={sub.path}
                className="block px-4 py-4 text-xl font-bold text-slate-700 hover:bg-gray-50 rounded-2xl"
                onClick={() => setIsOpen(false)}
              >
                {sub.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block w-full text-center mt-8 bg-blue-600 text-white py-5 rounded-3xl text-xl font-black uppercase tracking-widest shadow-xl shadow-blue-600/20"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
