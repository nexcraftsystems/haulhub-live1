
import React from 'react';
import { Target, Compass, Users, Globe, BarChart3, Clock, CheckCircle2, Mail } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="relative py-32 bg-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=2000" 
            alt="About Header" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-6xl font-extrabold mb-8 tracking-tight">About Us</h1>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            As the regions latest logistics service provider, we are deeply vested in your success in both the region and the larger global market.
          </p>
        </div>
      </div>

      {/* Main Info */}
      <section className="py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">Your Logistics Partner</h2>
              <p className="text-gray-600 text-xl leading-relaxed">
                Haul Hub Sdn Bhd is a newly established logistics and freight solutions company, focused on business development and the delivery of reliable, compliant, and cost-effective logistics services. The company supports conventional cargo, dangerous goods, project cargo, and time-critical shipments for both commercial and humanitarian partners.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Our Expertise", desc: "Comprehensive management of import/export, liner coordination, and end-to-end cargo logistics." },
                  { title: "Humanitarian Reach", desc: "Specialized in emergency response and disaster relief logistics with global coordination." },
                  { title: "Operational Depth", desc: "Leadership rooted in over 30 years of practical field execution and management." },
                ].map((val, i) => (
                  <div key={i} className="flex gap-6 p-6 rounded-[2rem] hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100 group">
                    <div className="shrink-0 w-12 h-12 bg-white shadow-md rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">{val.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/5 rounded-[3rem] -rotate-2"></div>
              <img 
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=1200" 
                alt="Haul Hub Logistics Operations" 
                className="rounded-[3rem] shadow-2xl relative z-10 border-[12px] border-white object-cover aspect-[4/5]"
              />
              <div className="absolute -bottom-12 -right-12 w-80 h-80 bg-blue-400/20 rounded-full z-0 blur-[100px] animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
          {[
            { label: "Active Partners", value: "7", icon: <Users size={32} /> },
            { label: "Shipments monthly", value: "20", icon: <BarChart3 size={32} /> },
            { label: "Ontime Delivery", value: "99%", icon: <Clock size={32} /> },
            { label: "Countries Served", value: "5", icon: <Globe size={32} /> },
          ].map((stat, i) => (
            <div key={i} className="p-10 border border-white/5 bg-white/5 rounded-[2.5rem] backdrop-blur-sm group hover:border-blue-500/50 transition-all">
              <div className="inline-flex p-5 bg-blue-600/10 rounded-2xl text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                {stat.icon}
              </div>
              <h3 className="text-5xl font-black mb-3 tracking-tighter">{stat.value}</h3>
              <p className="text-slate-400 text-lg font-semibold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="bg-white p-16 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500">
            <div className="w-24 h-24 bg-blue-600 text-white rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl shadow-blue-600/30 group-hover:rotate-6 transition-transform">
              <Target size={48} />
            </div>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-8">Vision</h3>
            <p className="text-2xl text-gray-600 leading-relaxed font-medium">
              To be the most trusted and compliant logistics solutions provider in <span className="text-blue-600">Malaysia</span> and beyond.
            </p>
          </div>
          <div className="bg-white p-16 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500">
            <div className="w-24 h-24 bg-blue-600 text-white rounded-[2rem] flex items-center justify-center mb-10 shadow-2xl shadow-blue-600/30 group-hover:-rotate-6 transition-transform">
              <Compass size={48} />
            </div>
            <h3 className="text-4xl font-extrabold text-slate-900 mb-8">Mission</h3>
            <p className="text-2xl text-gray-600 leading-relaxed font-medium">
              Delivering cost-effective, reliable, and compliant logistics services across <span className="text-blue-600">Malaysia</span>, supporting commercial growth and humanitarian relief.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <div className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-bold tracking-widest uppercase mb-4">
              Our Team
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight">Executive Leadership</h2>
            <p className="text-xl text-gray-500">Our senior leaders bring combined decades of field-proven logistics excellence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {[
              { 
                name: "Medona Simon", 
                role: "Chief Business Officer", 
                email: "medona.simon@haulhub.my",
                desc: "With more than 30 years of hands-on forwarding experience in SME, MNC, and humanitarian sectors, they offer trusted expertise and a strong understanding of global logistics.",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
              },
              { 
                name: "Ommana Ann", 
                role: "Operations Manager", 
                email: "ann.o@haulhub.my",
                desc: "An accountant by nature, managing Haul Hub’s day-to-day operations with a detail-driven approach and a commitment to financial and operational excellence.",
                img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800" 
              },
            ].map((member, i) => (
              <div key={i} className="bg-slate-50 p-12 rounded-[3.5rem] group border border-transparent hover:border-blue-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
                <div className="relative mb-10 w-48 h-48 mx-auto">
                  <div className="absolute inset-0 bg-blue-600 rounded-full translate-x-3 translate-y-3 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></div>
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-8 border-white shadow-xl grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="text-center space-y-6">
                  <div>
                    <h4 className="text-3xl font-extrabold text-slate-900 mb-2">{member.name}</h4>
                    <p className="text-blue-600 text-lg font-bold uppercase tracking-wider">{member.role}</p>
                    <div className="flex justify-center gap-4 mt-3">
                       <Mail size={18} className="text-gray-400" />
                       <span className="text-gray-500 font-medium">{member.email}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
