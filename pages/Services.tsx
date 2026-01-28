
import React from 'react';
import { Package, Truck, Database, ShieldCheck, Zap, Ship } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2070&auto=format&fit=crop" 
            alt="Cargo Vessel at Sea" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Smart, connected, and efficient logistics solutions tailored for Malaysia and international markets.
          </p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { 
                title: "Logistics", 
                icon: <Zap size={36} />, 
                desc: "End-to-end logistics management covering precision planning, real-time coordination, and cost optimization." 
              },
              { 
                title: "Cargo", 
                icon: <Ship size={36} />, 
                desc: "Reliable cargo handling solutions for domestic and complex cross-border movements with full compliance." 
              },
              { 
                title: "Trucking", 
                icon: <Truck size={36} />, 
                desc: "Modern trucking solutions connecting your business to key logistical routes and high-traffic regional hubs." 
              },
              { 
                title: "Warehousing", 
                icon: <Database size={36} />, 
                desc: "Scalable warehousing solutions with tech-integrated handling for rapid retrieval and inventory flow." 
              },
              { 
                title: "Storage", 
                icon: <ShieldCheck size={36} />, 
                desc: "Secure and cost-efficient storage environments designed to support dynamic and seasonal inventory needs." 
              },
              { 
                title: "Packaging", 
                icon: <Package size={36} />, 
                desc: "Professional industrial-grade packaging designed to safeguard high-value goods during demanding transport." 
              }
            ].map((s, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-transparent hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                <div className="w-20 h-20 bg-white shadow-sm rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-5 tracking-tight">{s.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Capability Statement */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
         <div className="absolute inset-0 opacity-10">
            <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Logistics Infrastructure" />
         </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold mb-6">Integrated Compliance & Excellence</h2>
            <p className="text-xl text-blue-100 leading-relaxed opacity-80">
              Every service we offer is underpinned by our commitment to global compliance and safety. From time-critical shipments to specialized heavy-lift project cargo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
