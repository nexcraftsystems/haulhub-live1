
import React from 'react';
import Logo from '../components/Logo';

const Industries: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-center p-8 -mt-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5 grayscale pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
          alt="Industry Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 space-y-12">
        <div className="animate-pulse flex justify-center">
          <Logo className="h-48 md:h-64 opacity-30" />
        </div>
        
        <div className="max-w-2xl mx-auto space-y-6">
          <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">Specialized <span className="text-blue-600">Industries</span></h1>
          <p className="text-xl text-gray-500 leading-relaxed font-medium">
            We are currently refining our industry-specific solutions for Energy, Tech, and Manufacturing sectors.
          </p>
          <div className="pt-8 flex flex-col items-center gap-4">
            <p className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">Launching Soon</p>
            <div className="h-1.5 w-32 bg-blue-100 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-blue-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
