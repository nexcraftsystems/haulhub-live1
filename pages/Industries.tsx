
import React from 'react';
import Logo from '../components/Logo';

const Industries: React.FC = () => {
  return (
    <div className="bg-white min-h-[70vh] flex flex-col items-center justify-center text-center p-8">
      <div className="animate-pulse">
        <Logo className="h-64 opacity-20" />
      </div>
      <h1 className="text-4xl font-extrabold text-slate-900 mt-12 mb-4 tracking-tight">Industries</h1>
      <p className="text-xl text-gray-400 max-w-lg mx-auto leading-relaxed">
        We are currently refining our industry-specific solutions. This page will be updated soon with detailed insights into our specialized sector logistics.
      </p>
      <div className="mt-12 h-1 w-24 bg-blue-100 rounded-full"></div>
    </div>
  );
};

export default Industries;
