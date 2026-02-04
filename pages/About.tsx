import React from 'react';
import { Target, Compass, Users, Globe, BarChart3, Clock, CheckCircle2, Mail, User, CameraOff } from 'lucide-react';

const About: React.FC = () => {
  // Utility to handle potentially problematic filenames (spaces, special chars)
  const getEncodedPath = (path: string) => encodeURI(path);

  // Fallback Initials
  const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="relative py-32 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop" 
            alt="Logistics Operations Control" 
            className="w-full h-full object-cover opacity-20 scale-110 blur-[2px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="inline-block px-4 py-1.5 bg-blue-600/20 backdrop-blur-md text-blue-400 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-blue-500/20">
            Learn Our Story
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">Our Identity</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            As Malaysia's emerging logistics leader, we bridge the gap between complex global freight and seamless local execution.
          </p>
        </div>
      </div>

      {/* Main Info */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest">
                Trusted Excellence
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">Your Strategic <span className="text-blue-600">Freight Engine</span></h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Haul Hub Sdn Bhd isn't just a logistics company; we are an architecture of movement. Founded on the principle of precision, we simplify the most complex supply chain challenges.
              </p>
              <div className="space-y-4">
                {[
                  { title: "Global Compliance", desc: "Rigorous adherence to international shipping standards and customs." },
                  { title: "Field-Proven Leadership", desc: "Built on 30+ years of active field experience in forwarding." },
                  { title: "Dynamic Scaling", desc: "Ready to handle everything from small parcels to massive project cargo." },
                ].map((val, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-3xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-blue-900/5 transition-all border border-transparent hover:border-blue-100 group">
                    <div className="shrink-0 w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-0.5">{val.title}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1566633806327-68e152abc39b?q=80&w=2070&auto=format&fit=crop" 
                alt="Modern Logistics Coordination" 
                className="rounded-[3rem] shadow-2xl border-[12px] border-white object-cover aspect-[4/3] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center relative z-10">
          {[
            { label: "Active Partners", value: "7+", icon: <Users size={24} /> },
            { label: "Monthly Movements", value: "20+", icon: <BarChart3 size={24} /> },
            { label: "Compliance Rate", value: "100%", icon: <Clock size={24} /> },
            { label: "Key Hubs", value: "5", icon: <Globe size={24} /> },
          ].map((stat, i) => (
            <div key={i} className="group px-4 py-10">
              <div className="inline-flex p-4 bg-white/5 rounded-2xl text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                {stat.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">{stat.value}</h3>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 group hover:shadow-2xl transition-all duration-500">
            <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 transition-all">
              <Target size={32} />
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-500 leading-relaxed">
              To redefine the logistics landscape in Southeast Asia by becoming the benchmark for <span className="text-blue-600 font-bold">compliance-driven excellence</span> and technological reliability.
            </p>
          </div>
          <div className="bg-white p-12 rounded-[3rem] shadow-sm border border-slate-100 group hover:shadow-2xl transition-all duration-500">
            <div className="w-16 h-16 bg-slate-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 transition-all">
              <Compass size={32} />
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-500 leading-relaxed">
              Empowering Malaysian businesses with <span className="text-blue-600 font-bold">seamless freight solutions</span> that minimize costs without compromising on security or speed.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-24">
        <div className="container mx-auto px-4 text-center max-w-6xl">
          <div className="mb-20">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              Executive Board
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">The Minds Behind Haul Hub</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">Expertise forged in the field, leading with transparency and a global perspective.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {[
              { 
                name: "Medona Simon", 
                role: "Chief Business Officer", 
                email: "medona.simon@haulhub.my",
                desc: "30+ years of forwarding mastery. A visionary in global supply chain optimization and strategic business development.",
                img: "assets/medona simon.png" 
              },
              { 
                name: "Ommana Ann", 
                role: "Operations Manager", 
                email: "ann.o@haulhub.my",
                desc: "The core of our daily execution. Detail-driven and relentless in ensuring operational safety and on-time performance.",
                img: "assets/Ommana’s.png" 
              },
            ].map((member, i) => (
              <div key={i} className="group relative bg-white p-2 rounded-[3rem] shadow-xl shadow-slate-200/50 hover:shadow-blue-900/10 transition-all duration-700 overflow-hidden border border-slate-100">
                <div className="relative p-8 md:p-12 space-y-8 bg-white rounded-[2.5rem] z-10 h-full">
                  <div className="relative w-40 h-40 mx-auto group-hover:scale-105 transition-transform duration-700">
                    <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] rotate-6 opacity-5 group-hover:rotate-12 transition-transform"></div>
                    <div className="relative w-40 h-40 rounded-[2.5rem] overflow-hidden border-[6px] border-slate-50 shadow-inner bg-slate-100 flex items-center justify-center">
                      <img 
                        src={getEncodedPath(member.img)} 
                        alt={member.name} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent && !parent.querySelector('.fallback-avatar')) {
                            const fallback = document.createElement('div');
                            fallback.className = 'fallback-avatar w-full h-full flex flex-col items-center justify-center bg-blue-50 text-blue-600';
                            fallback.innerHTML = `
                              <span class="text-4xl font-black mb-1">${getInitials(member.name)}</span>
                              <span class="text-[8px] font-black uppercase tracking-widest opacity-40">Profile</span>
                            `;
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-2xl font-black text-slate-900">{member.name}</h4>
                      <p className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mt-2 bg-blue-50 inline-block px-3 py-1 rounded-full">
                        {member.role}
                      </p>
                    </div>
                    
                    <p className="text-slate-500 leading-relaxed italic text-sm px-4">
                      "{member.desc}"
                    </p>

                    <div className="pt-6 border-t border-slate-50">
                        <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-2 text-sm text-slate-400 hover:text-blue-600 transition-colors group/link">
                          <Mail size={16} className="text-blue-500" />
                          <span className="font-semibold">{member.email}</span>
                        </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1521791136064-7986c2959443?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Partnership" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">Ready to move with the best?</h2>
          <a href="#/contact" className="inline-block px-12 py-5 bg-white text-blue-600 font-bold rounded-2xl hover:scale-105 transition-all shadow-xl shadow-blue-900/20">
            Work With Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;