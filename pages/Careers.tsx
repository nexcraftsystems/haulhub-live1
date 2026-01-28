
import React from 'react';
import { SearchX } from 'lucide-react';

const Careers: React.FC = () => {
  return (
    <div className="bg-white min-h-[60vh] flex items-center justify-center">
      <div className="text-center max-w-md px-4">
        <div className="w-24 h-24 bg-gray-50 text-gray-300 rounded-full flex items-center justify-center mx-auto mb-8">
          <SearchX size={48} />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Careers</h1>
        <p className="text-xl text-gray-500 mb-8">No opening at the moment</p>
        <p className="text-gray-400 text-sm">
          Thank you for your interest in joining Haul Hub. Please check back later or follow our social channels for future updates.
        </p>
      </div>
    </div>
  );
};

export default Careers;
