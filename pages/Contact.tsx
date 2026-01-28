
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, ShieldCheck, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const EMAILJS_SERVICE_ID = "service_94l0co6";
  const EMAILJS_TEMPLATE_ID = "template_omthasy"; 
  const EMAILJS_PUBLIC_KEY = "85arbghzwgPvdLDSH";

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    type: 'Investment Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const templateParams = {
      full_name: formData.name,
      email_address: formData.email,
      inquiry_type: formData.type,
      message: formData.message,
      cc_emails: "ann.o@haulhub.my,medona.simon@haulhub.my",
      reply_to: formData.email
    };

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSent(true);
      }
    } catch (err: any) {
      setError(`Delivery failed: ${err.text || "Connection error."}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 py-24 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Invest With Us</h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed opacity-90">
            Connect with our strategic development team regarding investment opportunities and global partnerships.
          </p>
        </div>
      </div>

      {/* Interactive Map Section */}
      <section className="py-12 -mt-12 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-4 rounded-[3.5rem] shadow-2xl shadow-slate-200/50 border border-gray-100 overflow-hidden group">
            <div className="h-[400px] md:h-[500px] w-full rounded-[2.5rem] overflow-hidden relative">
              <iframe 
                title="Haul Hub Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.156166540321!2d101.4334335!3d3.0118544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc5306637e7687%3A0xc682946c82092cc6!2sJalan%20Bayu%20Tinggi%2011b%2C%20Batu%20Unjur%2C%2041200%20Klang%2C%20Selangor!5e0!3m2!1sen!2smy!4v1715420000000!5m2!1sen!2smy"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
              ></iframe>
              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/50 hidden md:block max-w-xs">
                <div className="flex items-center gap-3 text-blue-600 mb-2">
                  <MapPin size={20} />
                  <span className="font-bold uppercase tracking-wider text-xs">Headquarters</span>
                </div>
                <p className="text-slate-900 font-bold text-sm leading-relaxed">
                  Lot 11B, Jalan Bayu Tinggi, Batu Endure 41200, Klang, Selangor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Sidebar info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">Get In Touch</h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Our leadership team is ready to assist you with business development and strategic logistics partnerships across Malaysia.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Address</h4>
                    <p className="text-gray-500 leading-relaxed">Lot 11B, Jalan Bayu Tinggi, Batu Endure 41200, Klang, Selangor, Malaysia</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Email</h4>
                    <p className="text-gray-500 leading-relaxed">sales@haulhub.my</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">Office Tel</h4>
                    <p className="text-gray-500 leading-relaxed">603 8685 9434</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-12 rounded-[3.5rem] shadow-2xl shadow-slate-200/40 border border-gray-50">
                {sent ? (
                  <div className="text-center py-20 space-y-8 animate-in zoom-in-95 duration-500">
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle size={56} />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-4xl font-extrabold text-slate-900">Message Sent</h3>
                      <p className="text-xl text-gray-500">Our team will get back to you at {formData.email} shortly.</p>
                    </div>
                    <button 
                      onClick={() => setSent(false)}
                      className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                        <input required name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Medona Simon" className="w-full px-6 py-5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                        <input required name="email" type="email" value={formData.email} onChange={handleChange} placeholder="example@haulhub.my" className="w-full px-6 py-5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Inquiry Type</label>
                      <select name="type" value={formData.type} onChange={handleChange} className="w-full px-6 py-5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none cursor-pointer">
                        <option>Investment Inquiry</option>
                        <option>Business Partnership</option>
                        <option>Logistics Request</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                      <textarea required name="message" value={formData.message} onChange={handleChange} rows={6} placeholder="How can we help your business grow?" className="w-full px-6 py-5 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none resize-none"></textarea>
                    </div>
                    
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                      <div className="flex items-center gap-3 text-blue-700 mb-1">
                        <ShieldCheck size={20} />
                        <span className="font-bold text-sm uppercase tracking-wider">Secure Communication</span>
                      </div>
                      <p className="text-xs text-blue-600/80">
                        By submitting this form, you agree to our privacy policy and for Haul Hub to reach out regarding your inquiry.
                      </p>
                    </div>

                    <button type="submit" disabled={loading} className="w-full py-6 bg-blue-600 text-white font-extrabold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 hover:-translate-y-1 active:translate-y-0 transition-all flex items-center justify-center gap-3 disabled:bg-blue-400 disabled:cursor-not-allowed text-lg">
                      {loading ? <Loader2 className="animate-spin" size={28} /> : <>Submit Inquiry <Send size={20} /></>}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
