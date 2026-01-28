import React from 'react';

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12", isDark = false }) => {
  if (isDark) {
    // Wordstype only for dark backgrounds as requested
    return (
      <div className={`flex items-center font-black text-white select-none ${className}`}>
        <span className="text-3xl md:text-5xl tracking-tighter lowercase">
          haulhub<span className="text-blue-500">.my</span>
        </span>
      </div>
    );
  }

  // Logo only (no background) for white/light backgrounds
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="https://api.typedream.com/v0/document/public/54238e55-6323-41e9-9be8-6447c94514be_Logo_1_png.png" 
        alt="Haul Hub Logo" 
        className="h-full w-auto object-contain"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const parent = target.parentElement;
          if (parent) {
            const span = document.createElement('span');
            span.className = 'text-2xl font-black text-slate-800 tracking-tighter lowercase';
            span.innerHTML = 'haulhub<span class="text-blue-500">.my</span>';
            parent.appendChild(span);
          }
        }}
      />
    </div>
  );
};

export default Logo;