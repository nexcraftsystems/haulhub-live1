
import React from 'react';
import { Target, Compass, Users, Globe, BarChart3, Clock, CheckCircle2, Mail, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="relative py-24 bg-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1606185588944-79263401c3d0?q=80&w=2070&auto=format&fit=crop" 
            alt="Logistics Operations Control" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">About Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            As the region's latest logistics service provider, we are deeply vested in your success in both local and global markets.
          </p>
        </div>
      </div>

      {/* Main Info */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest">
                Our Identity
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 leading-tight">Your Dedicated <span className="text-blue-600">Logistics Partner</span></h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Haul Hub Sdn Bhd is a newly established logistics and freight solutions company, focused on business development and the delivery of reliable, compliant, and cost-effective logistics services.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Our Expertise", desc: "Comprehensive management of import/export and cargo logistics." },
                  { title: "Humanitarian Reach", desc: "Specialized in emergency response and disaster relief logistics." },
                  { title: "Operational Depth", desc: "Leadership rooted in over 30 years of practical field execution." },
                ].map((val, i) => (
                  <div key={i} className="flex gap-5 p-5 rounded-3xl hover:bg-blue-50 transition-all border border-transparent hover:border-blue-100 group">
                    <div className="shrink-0 w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
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
              <div className="absolute -inset-4 bg-blue-600/5 rounded-[3rem] -z-10 transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1566633806327-68e152abc39b?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Logistics Coordination" 
                className="rounded-[2.5rem] shadow-2xl border-8 border-white object-cover aspect-[4/3] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center relative z-10">
          {[
            { label: "Active Partners", value: "7", icon: <Users size={28} /> },
            { label: "Monthly Shipments", value: "20+", icon: <BarChart3 size={28} /> },
            { label: "Ontime Delivery", value: "99%", icon: <Clock size={28} /> },
            { label: "Countries Served", value: "5", icon: <Globe size={28} /> },
          ].map((stat, i) => (
            <div key={i} className="p-8 border border-white/5 bg-white/5 rounded-3xl group hover:border-blue-500/30 transition-all">
              <div className="inline-flex p-4 bg-blue-600/10 rounded-2xl text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-black mb-2">{stat.value}</h3>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl transition-all">
            <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-600/20 group-hover:scale-110 transition-transform">
              <Target size={40} />
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-6">Vision</h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              To be the most trusted and compliant logistics solutions provider in <span className="text-blue-600 font-bold">Malaysia</span> and beyond.
            </p>
          </div>
          <div className="bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-xl transition-all">
            <div className="w-20 h-20 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-600/20 group-hover:scale-110 transition-transform">
              <Compass size={40} />
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-6">Mission</h3>
            <p className="text-xl text-gray-600 leading-relaxed">
              Delivering cost-effective, reliable, and compliant logistics services across <span className="text-blue-600 font-bold">Malaysia</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <div className="mb-20">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              Our Leadership
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Executive Leadership</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Our senior leaders bring combined decades of field-proven logistics excellence to every client partnership.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { 
                name: "Medona Simon", 
                role: "Chief Business Officer", 
                email: "medona.simon@haulhub.my",
                desc: "With more than 30 years of hands-on forwarding experience, offering trusted expertise in global logistics and supply chain optimization.",
                img: "/assets/medona-simon.png" 
              },
              { 
                name: "Ommana Ann", 
                role: "Operations Manager", 
                email: "ann.o@haulhub.my",
                desc: "Managing Haul Hub’s day-to-day operations with a detail-driven approach and an unwavering commitment to operational excellence.",
                img: "/assets/ommana-ann.png" 
              },
            ].map((member, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-transparent hover:bg-white hover:shadow-2xl transition-all duration-500 group">
                <div className="relative mb-10 w-56 h-56 mx-auto">
                  <div className="absolute inset-0 bg-blue-600 rounded-[3rem] transform rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-10"></div>
                  <div className="relative w-56 h-56 rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-xl transition-all duration-500 bg-slate-200 flex items-center justify-center">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const iconDiv = document.createElement('div');
                          iconDiv.className = 'w-full h-full flex flex-col items-center justify-center bg-blue-50 text-blue-400';
                          iconDiv.innerHTML = `
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            <span class="mt-4 font-black text-[10px] uppercase tracking-widest opacity-40">Photo Pending</span>
                          `;
                          parent.appendChild(iconDiv);
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="space-y-5">
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{member.name}</h4>
                    <p className="text-blue-600 font-black text-sm uppercase tracking-widest mt-1">{member.role}</p>
                    <div className="flex justify-center items-center gap-2 mt-4 text-sm text-slate-400 font-semibold group-hover:text-slate-600 transition-colors">
                       <Mail size={16} className="text-blue-500" />
                       <span>{member.email}</span>
                    </div>
                  </div>
                  <div className="h-px w-12 bg-blue-200 mx-auto"></div>
                  <p className="text-gray-600 leading-relaxed italic px-4">"{member.desc}"</p>
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
