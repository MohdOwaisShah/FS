'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, ChevronRight, User, Phone, Laptop, MapPin, MessageSquare, Zap, ShieldCheck } from 'lucide-react';

export default function BookingForm() {
  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    laptopModel: '',
    issue: '',
    area: ''
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // WhatsApp Format
    const message = `*Final Solution - Specialized Service Booking*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Model:* ${formData.laptopModel}%0A*Issue:* ${formData.issue}%0A*Location:* ${formData.area}`;
    
    setTimeout(() => {
      setStatus('success');
      window.open(`https://wa.me/919136837381?text=${message}`, '_blank');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <section id="booking" className="py-40 bg-slate-950 font-sans relative">
        <div className="absolute inset-0 bg-primary/5 blur-[130px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-[4rem] p-16 md:p-24 text-center shadow-glow-lg border-primary/20 bg-slate-900/40"
          >
            <div className="w-28 h-28 bg-primary rounded-[2.5rem] flex items-center justify-center mx-auto mb-12 text-white shadow-glow hover:scale-110 transition-transform">
              <CheckCircle2 className="w-14 h-14" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 font-display uppercase tracking-tighter italic leading-none">Status: Deployment!</h2>
            <p className="text-slate-400 font-medium mb-14 text-xl leading-relaxed max-w-lg mx-auto italic border-l-2 border-primary/30 pl-8">Your specialized repair unit is being dispatched. A technician will contact you on <span className="text-primary font-black">WhatsApp/Call within 15 mins.</span></p>
            <button 
              onClick={() => setStatus('idle')}
              className="text-primary font-black uppercase tracking-[0.3em] text-xs hover:text-white transition-colors"
            >
              ← Back to Portal
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-40 bg-slate-950 font-sans relative overflow-hidden">
      {/* Background sapphire glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/10 blur-[130px] rounded-full -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          
          {/* Left: Content */}
          <div className="lg:col-span-5 space-y-12 text-center lg:text-left">
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 text-primary font-black uppercase tracking-[0.4em] text-[10px] bg-primary/10 px-6 py-3 rounded-2xl border border-primary/20"
              >
                Service Portal v1.0
              </motion.div>
              <h2 className="text-6xl md:text-[6.5rem] font-black text-white font-display leading-[0.85] uppercase tracking-tighter italic">
                Book Your <br />
                <span className="text-gradient-brand">Expert Pickup.</span>
              </h2>
              <p className="text-lg md:text-xl text-slate-400 font-medium leading-relaxed italic border-l-2 border-primary/30 pl-8 max-w-sm mx-auto lg:mx-0">
                Securing professional laptop repair has never been this aesthetic. No advance payments ever.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 pt-10">
              {[
                { icon: <Zap className="w-5 h-5" />, title: 'Real-time Dispatch', desc: 'Technician arrives within 4 hours.' },
                { icon: <ShieldCheck className="w-5 h-5" />, title: 'Verified Repair', desc: 'Step-by-step updates on WhatsApp.' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 glass rounded-2xl p-6 border-white/5 group hover:border-primary/20 transition-all">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform bg-primary/5">
                    {item.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="text-[11px] font-black text-white uppercase tracking-widest">{item.title}</h4>
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
             <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass rounded-[3.5rem] p-10 md:p-14 border-white/10 shadow-glow-lg bg-slate-900/50"
             >
                <form onSubmit={handleSubmit} className="space-y-8">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                         <label className="text-[10px] font-black text-primary uppercase tracking-[0.3em] ml-1">Full Identity</label>
                         <div className="relative group/input">
                            <User className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-hover/input:text-primary transition-colors" />
                            <input 
                              required
                              type="text" 
                              placeholder="Name" 
                              className="w-full bg-slate-950/50 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white font-medium focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none" 
                              onChange={(e) => setFormData({...formData, name: e.target.value})}
                            />
                         </div>
                      </div>
                      <div className="space-y-3">
                         <label className="text-[10px] font-black text-primary uppercase tracking-[0.3em] ml-1">Direct Contact</label>
                         <div className="relative group/input">
                            <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-hover/input:text-primary transition-colors" />
                            <input 
                              required
                              type="tel" 
                              placeholder="Phone Number" 
                              className="w-full bg-slate-950/50 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white font-medium focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none" 
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            />
                         </div>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                         <label className="text-[10px] font-black text-primary uppercase tracking-[0.3em] ml-1">Machine Model</label>
                         <div className="relative group/input">
                            <Laptop className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-hover/input:text-primary transition-colors" />
                            <input 
                              required
                              type="text" 
                              placeholder="e.g. MacBook Pro M1" 
                              className="w-full bg-slate-950/50 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white font-medium focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none" 
                              onChange={(e) => setFormData({...formData, laptopModel: e.target.value})}
                            />
                         </div>
                      </div>
                      <div className="space-y-3">
                         <label className="text-[10px] font-black text-primary uppercase tracking-[0.3em] ml-1">Mumbai Suburb</label>
                         <div className="relative group/input">
                            <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-hover/input:text-primary transition-colors" />
                            <input 
                              required
                              type="text" 
                              placeholder="e.g. Thane West" 
                              className="w-full bg-slate-950/50 border border-white/10 rounded-2xl py-5 pl-14 pr-6 text-white font-medium focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none" 
                              onChange={(e) => setFormData({...formData, area: e.target.value})}
                            />
                         </div>
                      </div>
                   </div>

                   <div className="space-y-3">
                      <label className="text-[10px] font-black text-primary uppercase tracking-[0.3em] ml-1">Describe Major Issue</label>
                      <div className="relative group/input">
                         <MessageSquare className="absolute left-6 top-7 w-4 h-4 text-slate-500 group-hover/input:text-primary transition-colors" />
                         <textarea 
                           required
                           rows={4}
                           placeholder="What seems to be the problem?" 
                           className="w-full bg-slate-950/50 border border-white/10 rounded-[2rem] py-6 pl-14 pr-6 text-white font-medium focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all outline-none resize-none" 
                           onChange={(e) => setFormData({...formData, issue: e.target.value})}
                         />
                      </div>
                   </div>

                   <button 
                    disabled={status === 'submitting'}
                    className="w-full bg-primary text-white py-6 rounded-[2rem] font-black uppercase tracking-[0.2em] transform active:scale-95 transition-all shadow-glow hover:shadow-glow-lg flex items-center justify-center gap-4 group/submit"
                   >
                     {status === 'submitting' ? (
                       <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                     ) : (
                       <>
                        Confirm Pick-up
                        <Send className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                       </>
                     )}
                   </button>
                   <p className="text-center text-[10px] font-bold text-slate-600 uppercase tracking-widest leading-none">Free Diagnosis • Guaranteed Results • No Pay Upfront</p>
                </form>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
