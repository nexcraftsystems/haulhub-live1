
import React from 'react';
import { SearchX, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center -mt-20">
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1454165833767-02a498074d44?q=80&w=2070&auto=format&fit=crop" 
          alt="Professional Office" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-2xl px-4">
        <div className="w-24 h-24 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-xl shadow-blue-100 animate-pulse">
          <SearchX size={48} />
        </div>
        <h1 className="text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Join the Force</h1>
        <p className="text-2xl text-blue-600 mb-8 font-black uppercase tracking-widest">No openings at the moment</p>
        <p className="text-gray-500 text-lg leading-relaxed mb-12">
          Thank you for your interest in joining Haul Hub. We're growing fast, so please check back soon for opportunities in logistics coordination, sales, and operations.
        </p>
        <Link to="/contact" className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-colors group">
          Follow us for updates <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default Careers;
