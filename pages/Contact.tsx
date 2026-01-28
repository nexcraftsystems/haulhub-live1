
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, ShieldCheck, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  // Live EmailJS Configuration
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

    /**
     * IMPORTANT: In your EmailJS Dashboard for 'template_omthasy':
     * 1. Set the "To Email" field to: sales@haulhub.my
     * 2. Set the "CC" field to: {{cc_emails}}
     */
    const templateParams = {
      full_name: formData.name,
      email_address: formData.email,
      inquiry_type: formData.type,
      message: formData.message,
      // Properly formatted string for Gmail API (comma separated, no spaces around commas)
      cc_emails: "ann.o@haulhub.my,medona.simon@haulhub.my,nexcraftsystem@gmail.com",
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
        setFormData({ name: '', email: '', type: 'Investment Inquiry', message: '' });
      }
    } catch (err: any) {
      console.error("EmailJS Error:", err);
      // Detailed error reporting to help debug Gmail API issues
      setError(`Delivery failed: ${err.text || "Invalid header or configuration error."}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-slate-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Invest With Us</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">Fill out the form below to connect with our strategic development team regarding investment and partnerships.</p>
        </div>
      </div>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Info Sidebar */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-extrabold text-slate-900">Get In Touch</h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Our leadership team is ready to assist you with business development and strategic logistics partnerships.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 shrink-0 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Address</h4>
                    <p className="text-gray-500 text-sm">Lot 11B, Jalan Bayu Tinggi, Batu Endure 41200, Klang, Selangor, Malaysia</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 shrink-0 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Generic Email</h4>
                    <p className="text-gray-500 text-sm">sales@haulhub.my</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 shrink-0 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Tel</h4>
                    <p className="text-gray-500 text-sm">603 8685 9434</p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                  <h4 className="text-xl font-bold mb-4 relative z-10">Strategic Partners</h4>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed relative z-10">
                    Partnering with Haul Hub means joining a legacy of 30+ years of logistics expertise redefined for the modern age.
                  </p>
                  <div className="w-full h-1 bg-blue-600 rounded-full relative z-10"></div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-2">
              <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-50">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-8 text-center">Inquiry Form</h3>
                
                {sent ? (
                  <div className="text-center py-20 space-y-6 animate-in zoom-in-95 duration-500">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={40} />
                    </div>
                    <h3 className="text-3xl font-extrabold text-slate-900">Thank you for reaching and email sent</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      Your message has been processed. Our strategic development team will review your inquiry and respond to <strong>{formData.email}</strong> shortly.
                    </p>
                    <button 
                      onClick={() => setSent(false)}
                      className="px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl flex items-center gap-3 animate-in slide-in-from-top-2 duration-300">
                        <AlertCircle size={20} className="shrink-0" />
                        <div className="text-sm font-medium">
                          <p>{error}</p>
                          <p className="text-[10px] mt-1 opacity-70">Tip: Check the CC settings in your EmailJS Template dashboard.</p>
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                        <input 
                          required
                          name="name"
                          type="text" 
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all focus:bg-white"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                        <input 
                          required
                          name="email"
                          type="email" 
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Your Email"
                          className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all focus:bg-white"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Inquiry Type</label>
                      <select 
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all cursor-pointer focus:bg-white"
                      >
                        <option>Investment Inquiry</option>
                        <option>Business Partnership</option>
                        <option>Logistics Solution Request</option>
                        <option>Project Cargo Query</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                      <textarea 
                        required
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        placeholder="Please detail your request..."
                        className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none focus:bg-white"
                      ></textarea>
                    </div>

                    <div className="bg-blue-50/80 p-5 rounded-2xl border border-blue-100/50">
                      <div className="flex gap-3 items-center mb-1">
                        <ShieldCheck size={18} className="text-blue-600 shrink-0" />
                        <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">Secure Delivery Verification</span>
                      </div>
                      <p className="text-[11px] text-blue-700 leading-relaxed">
                        Contents go to <strong>sales@haulhub.my</strong> | CC: <strong>nexcraftsystem@gmail.com</strong>, <strong>ann.o@haulhub.my</strong>, <strong>medona.simon@haulhub.my</strong>.
                      </p>
                    </div>

                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-xl transition-all flex items-center justify-center gap-3 disabled:bg-blue-400 disabled:cursor-not-allowed active:scale-[0.98]"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="animate-spin" size={24} /> Sending Inquiry...
                        </>
                      ) : (
                        <>
                          Submit Inquiry <Send size={20} />
                        </>
                      )}
                    </button>
                    
                    <p className="text-[10px] text-center text-gray-400 mt-4 px-8">
                      By submitting this form, you agree for Haul Hub to contact you regarding your inquiry.
                    </p>
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
