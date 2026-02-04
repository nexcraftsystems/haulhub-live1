
import React from 'react';
import { Link } from 'react-router-dom';
import { Network, Fullscreen, Radio, ArrowRight, ChevronDown, ShieldCheck, Globe2, Zap } from 'lucide-react';
import Logo from '../components/Logo';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Full Page Hero Section */}
      <section className="relative h-[95vh] flex items-center justify-center bg-slate-950 text-white -mt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2070&auto=format&fit=crop" 
            alt="Global Logistics Terminal" 
            className="w-full h-full object-cover opacity-60 scale-105 animate-[slow-zoom_20s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/80"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 flex justify-center animate-in fade-in zoom-in duration-1000">
               <Logo className="h-16 md:h-24 drop-shadow-[0_0_30px_rgba(59,130,246,0.2)]" isDark />
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1] tracking-tighter animate-in slide-in-from-bottom-12 duration-1000">
              Your Lightning Fast <br/> 
              <span className="text-blue-500 drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] animate-pulse">Logistics</span> Partner
            </h1>
            <p className="text-lg md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light animate-in slide-in-from-bottom-16 duration-1000 delay-200">
              Haul Hub Sdn Bhd delivers surgical precision in global freight. Trusted, compliant, and built for speed.
            </p>
            <div className="flex flex-wrap justify-center gap-6 animate-in slide-in-from-bottom-20 duration-1000 delay-300">
              <Link to="/services" className="px-12 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black transition-all shadow-2xl shadow-blue-600/40 flex items-center gap-3 group text-lg uppercase tracking-wider">
                Our Solutions <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="px-12 py-5 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-black transition-all border border-white/20 backdrop-blur-xl text-lg uppercase tracking-wider">
                Invest With Us
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-blue-500/80 hidden md:block">
          <ChevronDown size={40} />
        </div>
      </section>

      {/* Featured Badges */}
      <div className="bg-slate-50 py-8 border-b border-slate-100">
        <div className="container mx-auto px-4">
           <div className="flex flex-wrap justify-center gap-8 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              {['GLOBAL NETWORK', 'COMPLIANT FREIGHT', '24/7 TRACKING', 'HAZMAT CERTIFIED'].map(tag => (
                <span key={tag} className="text-[10px] font-black tracking-[0.4em]">{tag}</span>
              ))}
           </div>
        </div>
      </div>

      {/* Strategic Partner Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-[4rem] blur-2xl group-hover:bg-blue-600/20 transition-all duration-700"></div>
              <div className="relative overflow-hidden rounded-[3rem] shadow-2xl shadow-blue-900/20">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?" 
                  alt="Strategic Planning" 
                  className="w-full h-[600px] object-cover transform group-hover:scale-110 transition-transform duration-[6000ms]"
                />
                <div className="absolute inset-0 bg-slate-900/30 mix-blend-multiply"></div>
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <div className="text-center">
                      <Logo className="h-32 drop-shadow-2xl mb-4" isDark />
                      <p className="text-white text-xs font-black tracking-[0.3em] uppercase opacity-80">Established Precision</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                  Market Expertise
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-slate-950 leading-[1.1]">
                  Dominating <span className="text-blue-600">Emerging</span> Markets
                </h2>
              </div>
              
              <div className="text-slate-600 space-y-6 leading-relaxed text-lg font-light">
                <p>
                  At Haul Hub, we don't just move boxes; we move businesses. With leadership carrying over <strong>30 years of field-proven shipping mastery</strong>, we navigate the world's most complex trade routes.
                </p>
                <p>
                  Specializing in conventional cargo, dangerous goods (DG), and time-critical project movements, we ensure your heaviest assets reach their destination without compromise.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 border-t border-slate-100">
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all shadow-lg">
                    <Globe2 size={24} />
                  </div>
                  <div>
                    <h5 className="font-black text-slate-950 uppercase text-xs tracking-wider">Global Reach</h5>
                    <p className="text-slate-500 text-sm">International networks.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-all shadow-lg">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h5 className="font-black text-slate-950 uppercase text-xs tracking-wider">Compliance</h5>
                    <p className="text-slate-500 text-sm">Risk-free logistics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">Core Solutions</h2>
            <p className="text-lg text-slate-500 font-light">Integrated logistics services engineered for scale and speed.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Logistics", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop", desc: "Advanced supply chain architecture." },
              { title: "Cargo", img: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop", desc: "Specialized hazardous & heavy cargo." },
              { title: "Trucking", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2070&auto=format&fit=crop", desc: "Regional precision haulage networks." },
              { title: "Warehousing", img: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop", desc: "High-security strategic storage." },
              { title: "Project Cargo", img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=2070&auto=format&fit=crop", desc: "Custom moves for oversized assets." },
              { title: "Industrial Packing", img: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2070&auto=format&fit=crop", desc: "Reinforced export-grade packaging." },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 border border-slate-100 group">
                <div className="h-72 overflow-hidden relative">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  <div className="absolute top-6 left-6">
                     <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-lg">
                        <Zap size={20} className="text-blue-600" />
                     </div>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-black mb-3 text-slate-950">{service.title}</h3>
                  <p className="text-slate-500 font-light leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor CTA */}
      <section className="py-32 relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-30">
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2959443?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Strategy" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/40 via-transparent to-slate-950"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl space-y-10">
            <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              Build the Future <br/> of <span className="text-blue-500">Logistics</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 font-light max-w-2xl leading-relaxed">
              We are expanding rapidly and seeking strategic partners to accelerate our global footprint. Join a company built on 30 years of integrity.
            </p>
            <div className="flex gap-6">
                <Link to="/contact" className="px-12 py-6 bg-blue-600 text-white font-black rounded-2xl shadow-2xl shadow-blue-600/40 hover:scale-105 active:scale-95 transition-all text-lg uppercase tracking-wider">
                  Investor Access
                </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slow-zoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Home;
