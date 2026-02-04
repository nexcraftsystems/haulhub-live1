
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
            
            {/* The "Worlds Picture Round" Container */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
              
              <div className="relative w-full max-w-[500px] aspect-square rounded-full border-[12px] border-white shadow-[0_40px_100px_-30px_rgba(2,6,23,0.3)] overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1585713181935-d5f622cc2415?q=80&w=2070&auto=format&fit=crop" 
                  alt="Global Trade Network Globe" 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[10s] ease-linear"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-transparent to-transparent"></div>
              </div>
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-24">
            <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              Executive Board
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">The Minds Behind Haul Hub</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
              Expertise forged in the field, leading with transparency, integrity, and a global perspective.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-16 lg:gap-24">
            {[
              { 
                name: "Medona Simon", 
                role: "Chief Business Officer", 
                email: "medona.simon@haulhub.my",
                desc: "With 30+ years of forwarding mastery, Medona is a visionary in global supply chain optimization and strategic business development. She has successfully navigated some of the industry's most complex regulatory landscapes.",
                img: "https://drive.google.com/thumbnail?id=1oegU8BucsAi1hn8G-sd1jqBYLzoAPCHR&sz=w1200" 
              },
              { 
                name: "Ommana Ann", 
                role: "Operations Manager", 
                email: "ann.o@haulhub.my",
                desc: "The core of our daily execution. Ann is detail-driven and relentless in ensuring operational safety and on-time performance. Her leadership ensures that Haul Hub maintains its reputation for surgical precision in freight.",
                img: "https://drive.google.com/thumbnail?id=1qBaA7zpHC3rmhxLOtmHBwWkDKjjSRfzm&sz=w1200" 
              },
            ].map((member, i) => (
              <div key={i} className={`flex flex-col lg:flex-row bg-slate-50 rounded-[4rem] overflow-hidden group hover:bg-white hover:shadow-[0_50px_100px_-20px_rgba(2,6,23,0.12)] transition-all duration-700 border border-slate-100 items-stretch min-h-[500px] lg:min-h-[600px] ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Massive Portrait Container - object-top ensures the head isn't cut */}
                <div className="w-full lg:w-1/2 relative bg-slate-200 overflow-hidden flex items-start justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10"></div>
                  <img 
                    src={getEncodedPath(member.img)} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-transform duration-[4s]"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent && !parent.querySelector('.fallback-avatar')) {
                        const fallback = document.createElement('div');
                        fallback.className = 'fallback-avatar w-full h-full flex flex-col items-center justify-center bg-slate-100 text-slate-400';
                        fallback.innerHTML = `
                          <span class="text-8xl font-black mb-2 opacity-20">${getInitials(member.name)}</span>
                          <span class="text-xs font-black uppercase tracking-[0.3em]">Profile Media</span>
                        `;
                        parent.appendChild(fallback);
                      }
                    }}
                  />
                </div>

                {/* Narrative Content */}
                <div className="w-full lg:w-1/2 p-10 md:p-14 lg:p-20 flex flex-col justify-center text-left">
                  <div className="mb-10">
                    <span className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] block mb-4 bg-blue-50 w-fit px-4 py-1.5 rounded-full">
                      {member.role}
                    </span>
                    <h4 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tighter leading-tight mb-2">
                      {member.name}
                    </h4>
                    <div className="h-1.5 w-24 bg-blue-600 rounded-full mt-4"></div>
                  </div>
                  
                  <p className="text-slate-500 leading-relaxed text-xl mb-12 font-light italic border-l-8 border-slate-200 pl-8">
                    "{member.desc}"
                  </p>

                  <div className="mt-auto pt-10 border-t border-slate-200">
                      <a href={`mailto:${member.email}`} className="flex items-center gap-4 text-slate-700 hover:text-blue-600 transition-all group/link font-bold text-lg tracking-tight overflow-hidden">
                        <div className="w-14 h-14 bg-white shadow-md rounded-2xl flex items-center justify-center text-blue-500 group-hover/link:bg-blue-600 group-hover/link:text-white group-hover/link:scale-110 transition-all duration-500 shrink-0">
                          <Mail size={24} />
                        </div>
                        <span className="group-hover/link:translate-x-1 transition-transform duration-500 break-all overflow-hidden text-base md:text-lg">
                          {member.email}
                        </span>
                      </a>
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
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">Ready to move with the best?</h2>
          <a href="#/contact" className="inline-block px-12 py-5 bg-white text-blue-600 font-bold rounded-2xl hover:scale-105 transition-all shadow-xl shadow-blue-900/20 uppercase tracking-widest text-sm">
            Work With Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
