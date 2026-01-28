
import React from 'react';
import { Package, Truck, Database, ShieldCheck, Zap, Ship } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 py-32 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1594913785162-e67850024f24?auto=format&fit=crop&q=80&w=2000" 
            alt="Service BG" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">Our Services</h1>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">Providing smart, connected, and efficient logistics solutions tailored for Malaysia and international markets.</p>
        </div>
      </div>

      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {[
              { 
                title: "Logistics", 
                icon: <Zap size={44} />, 
                desc: "End-to-end logistics management covering planning, coordination, and optimization to ensure faster, smarter, and seamless supply chain operations." 
              },
              { 
                title: "Cargo", 
                icon: <Ship size={44} />, 
                desc: "Reliable cargo handling solutions for domestic and cross-border movements, ensuring safe, timely, and fully traceable transport of goods." 
              },
              { 
                title: "Trucking", 
                icon: <Truck size={44} />, 
                desc: "Modern and well-managed trucking solutions connecting businesses to key routes and hubs, supported by fleet tracking." 
              },
              { 
                title: "Warehousing", 
                icon: <Database size={44} />, 
                desc: "Strategically located warehousing facilities offering scalable solutions, efficient handling, and seamless integration." 
              },
              { 
                title: "Storage", 
                icon: <ShieldCheck size={44} />, 
                desc: "Secure and cost-efficient storage solutions designed to support dynamic inventory needs with total safety." 
              },
              { 
                title: "Packaging", 
                icon: <Package size={44} />, 
                desc: "Professional packaging services designed to safeguard goods during transport, ensuring product integrity." 
              }
            ].map((s, i) => (
              <div key={i} className="bg-slate-50 p-12 rounded-[3.5rem] border border-transparent hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                <div className="w-20 h-20 bg-white shadow-xl shadow-blue-900/5 rounded-3xl flex items-center justify-center text-blue-600 mb-10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                  {s.icon}
                </div>
                <h3 className="text-3xl font-extrabold text-slate-900 mb-6 tracking-tight">{s.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Capability Statement */}
      <section className="py-24 bg-slate-50 border-y border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-8">Integrated Compliance & Excellence</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Every service we offer is underpinned by our commitment to compliance and safety. From time-critical shipments to specialized project cargo, Haul Hub ensures your business moves with the speed of global commerce and the reliability of local expertise.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
