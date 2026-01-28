
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Loader2, ShieldCheck, CheckCircle } from 'lucide-react';
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
      if (result.status === 200) setSent(true);
    } catch (err: any) {
      setError(`Delivery failed: ${err.text || "Connection error."}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">Invest With Us</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Connect with our team regarding investment opportunities and global partnerships.
          </p>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-12 -mt-8 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-3 rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="h-[350px] w-full rounded-2xl overflow-hidden">
              <iframe 
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.156166540321!2d101.4334335!3d3.0118544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc5306637e7687%3A0xc682946c82092cc6!2sJalan%20Bayu%20Tinggi%2011b%2C%20Batu%20Unjur%2C%2041200%20Klang%2C%20Selangor!5e0!3m2!1sen!2smy!4v1715420000000!5m2!1sen!2smy"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" className="grayscale opacity-80 hover:grayscale-0 transition-all"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Address</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">Klang, Selangor, Malaysia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Email</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">sales@haulhub.my</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Phone</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">603 8685 9434</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                {sent ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">Message Sent</h3>
                    <button onClick={() => setSent(false)} className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold">Send Another</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">Name</label>
                        <input required name="name" type="text" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700">Email</label>
                        <input required name="email" type="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border rounded-xl outline-none focus:ring-2 focus:ring-blue-500" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Inquiry</label>
                      <select name="type" value={formData.type} onChange={handleChange} className="w-full px-4 py-3 bg-gray-50 border rounded-xl outline-none">
                        <option>Investment Inquiry</option>
                        <option>Business Partnership</option>
                        <option>General Inquiry</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700">Message</label>
                      <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 bg-gray-50 border rounded-xl outline-none resize-none focus:ring-2 focus:ring-blue-500"></textarea>
                    </div>
                    <button type="submit" disabled={loading} className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                      {loading ? <Loader2 className="animate-spin" size={20} /> : <>Submit Inquiry <Send size={16} /></>}
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
