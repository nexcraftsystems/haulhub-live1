import React from 'react';
import { Link } from 'react-router-dom';
import { Network, Fullscreen, Radio, ArrowRight } from 'lucide-react';
import Logo from '../components/Logo';

const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-slate-900 text-white py-20">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2000" 
            alt="Logistics Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-900"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-10 animate-in fade-in slide-in-from-top-10 duration-1000">
               <Logo className="h-16 md:h-24" isDark />
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight animate-in slide-in-from-left-8 duration-700">
              Your Lightning Fast Logistic Partner
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl leading-relaxed animate-in slide-in-from-left-12 duration-700 delay-100">
              Haul Hub Sdn Bhd is a newly established logistics and freight solutions company, focused on business development and the delivery of reliable, compliant, and cost-effective logistics services. The company supports conventional cargo, dangerous goods, project cargo, and time-critical shipments for both commercial and humanitarian partners.
            </p>
            <div className="flex flex-wrap gap-6 animate-in slide-in-from-left-16 duration-700 delay-200">
              <Link to="/services" className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-2xl flex items-center gap-2 group text-lg">
                Explore Our Services <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/contact" className="px-10 py-5 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold transition-all border border-white/30 backdrop-blur-md text-lg">
                Invest with us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Emerging Markets Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Logo Image Side with Gradient Fade */}
            <div className="relative group overflow-hidden rounded-[3rem] bg-slate-50 border border-gray-100 p-12 flex items-center justify-center min-h-[500px] shadow-2xl shadow-blue-900/5">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-white z-10 pointer-events-none"></div>
              <div className="relative z-0 transform group-hover:scale-105 transition-transform duration-[3000ms]">
                <Logo className="h-64 md:h-80" />
              </div>
            </div>

            {/* Content Side */}
            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                Your Partner in Emerging Markets
              </h2>
              <div className="text-gray-600 space-y-6 leading-relaxed text-lg text-justify">
                <p>
                  Haul Hub Sdn Bhd is a young entity, its leadership brings over three decades of industry experience, covering import and export operations, liner coordination, shipment documentation, and end-to-end cargo management across Asia, the United Kingdom, and East Malaysia. This experience was gained through long-standing roles in reputable freight forwarding and humanitarian logistics organisations.
                </p>
                <p>
                  The company’s expertise is rooted in the practical execution of conventional cargo, dangerous goods, project cargo, and time-critical movements, including heavy and oversized equipment such as turbines, generators, and industrial machinery, for both local and international markets. Haul Hub’s leadership has also been directly involved in humanitarian and emergency response logistics, supporting disaster relief operations through close coordination with donors, partners, and aviation service providers to ensure the timely delivery of relief items to affected areas. Currently, Haul Hub Sdn Bhd focuses on business development and strategic partnerships, leveraging its leadership’s operational depth to provide reliable, compliant, and cost-effective logistics solutions tailored to client and partner requirements.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10 border-t border-gray-100">
                <div className="flex flex-col gap-4">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                    <Network size={28} />
                  </div>
                  <h5 className="font-bold text-slate-900">Global Network</h5>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                    <Fullscreen size={28} />
                  </div>
                  <h5 className="font-bold text-slate-900">Project Cargo</h5>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/30">
                    <Radio size={28} />
                  </div>
                  <h5 className="font-bold text-slate-900">Live Coordination</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight">Our Core Services</h2>
            <p className="text-xl text-gray-500">Premium logistics solutions engineered for reliability and scale.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Logistics", img: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=800", desc: "End-to-end supply chain mastery." },
              { title: "Cargo", img: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&q=80&w=800", desc: "Conventional and dangerous goods experts." },
              { title: "Trucking", img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800", desc: "Precision haulage across all terrains." },
              { title: "Warehousing", img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800", desc: "Secure, compliant storage facilities." },
              { title: "Storage", img: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=800", desc: "Professional inventory control systems." },
              { title: "Packaging", img: "https://images.unsplash.com/photo-1512418490979-92798ccc13b0?auto=format&fit=crop&q=80&w=800", desc: "Industrial-grade heavy equipment packing." },
            ].map((service, idx) => (
              <div key={idx} className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100 group">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1500ms]" />
                </div>
                <div className="p-10 text-left">
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">{service.title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Invest Section */}
      <section className="py-32 relative overflow-hidden bg-blue-600">
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 L100 0 L100 100 Z" fill="white" />
          </svg>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-5xl md:text-7xl font-extrabold mb-10 tracking-tight">Invest With Us</h2>
            <p className="text-2xl text-blue-50 mb-16 leading-relaxed opacity-90">
              Join the region's latest logistics force as we reshape the future of freight. We are actively seeking strategic partnerships and investment collaborations.
            </p>
            <Link to="/contact" className="inline-block px-14 py-6 bg-white text-blue-600 font-extrabold rounded-full text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
              Link to Information Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;