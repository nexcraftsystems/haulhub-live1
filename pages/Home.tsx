
import React from 'react';
import { Link } from 'react-router-dom';
import { Network, Fullscreen, Radio, ArrowRight, ChevronDown } from 'lucide-react';
import Logo from '../components/Logo';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Full Page Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-slate-900 text-white -mt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop" 
            alt="Global Logistics Terminal" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[1px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900/40"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 flex justify-center animate-in fade-in zoom-in duration-1000">
               <Logo className="h-16 md:h-24" isDark />
            </div>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight animate-in slide-in-from-bottom-8 duration-700">
              Your Lightning Fast <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]">Logistics</span> Partner
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed animate-in slide-in-from-bottom-12 duration-700 delay-100">
              Haul Hub Sdn Bhd is a newly established logistics force delivering reliable, compliant, and cost-effective freight solutions across the globe.
            </p>
            <div className="flex flex-wrap justify-center gap-6 animate-in slide-in-from-bottom-16 duration-700 delay-200">
              <Link to="/services" className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold transition-all shadow-2xl shadow-blue-600/30 flex items-center gap-2 group text-lg">
                Our Services <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold transition-all border border-white/20 backdrop-blur-md text-lg">
                Invest with us
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50 hidden md:block">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Emerging Markets Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Logo Image Side */}
            <div className="relative group overflow-hidden rounded-[2.5rem] shadow-2xl shadow-blue-900/10">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?" 
                alt="Strategic Partnership and Planning" 
                className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-[4000ms]"
              />
              <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <Logo className="h-32 md:h-40 drop-shadow-2xl" isDark />
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest">
                Our Foundation
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Your Strategic Partner in <span className="text-blue-600">Emerging Markets</span>
              </h2>
              <div className="text-gray-600 space-y-5 leading-relaxed text-lg">
                <p>
                  While Haul Hub Sdn Bhd is a dynamic new entity, our leadership brings over three decades of mastery in global shipping, import/export operations, and complex documentation.
                </p>
                <p>
                  We specialize in the high-stakes execution of conventional cargo, dangerous goods, and time-critical project movements, ensuring your heaviest equipment reaches its destination without compromise.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                <div className="flex flex-col gap-3 group">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Network size={24} />
                  </div>
                  <h5 className="font-bold text-slate-900">Global Network</h5>
                </div>
                <div className="flex flex-col gap-3 group">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Fullscreen size={24} />
                  </div>
                  <h5 className="font-bold text-slate-900">Project Cargo</h5>
                </div>
                <div className="flex flex-col gap-3 group">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Radio size={24} />
                  </div>
                  <h5 className="font-bold text-slate-900">Live Tracking</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Our Core Services</h2>
            <p className="text-lg text-gray-500">Premium logistics solutions engineered for reliability and scale.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Logistics", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop", desc: "End-to-end supply chain mastery." },
              { title: "Cargo", img: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop", desc: "Conventional and dangerous goods experts." },
              { title: "Trucking", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop", desc: "Precision haulage across all terrains." },
              { title: "Warehousing", img: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop", desc: "Secure, compliant storage facilities." },
              { title: "Storage", img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2070&auto=format&fit=crop", desc: "Professional, climate-controlled inventory systems." },
              { title: "Packaging", img: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2070&auto=format&fit=crop", desc: "Industrial-grade equipment and specialized packing." },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 group">
                <div className="h-64 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="p-8 text-left">
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Invest Section */}
      <section className="py-24 relative overflow-hidden bg-blue-600">
        <div className="absolute inset-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2959443?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Strategic Partnership Handshake" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">Shape the Future with Us</h2>
            <p className="text-xl text-blue-50 mb-12 leading-relaxed opacity-90">
              Join the region's latest logistics force. We are actively seeking strategic partnerships and investment collaborations to redefine supply chain excellence.
            </p>
            <Link to="/contact" className="inline-block px-12 py-5 bg-white text-blue-600 font-bold rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all text-lg">
              Link to Information Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
