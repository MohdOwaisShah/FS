'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Star, Laptop, CheckCircle, Clock } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use a simplified version for SSR or unmounted state
  if (!mounted) {
    return (
      <section className="min-h-screen pt-32 pb-24 bg-slate-950 flex items-center justify-center">
        <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
      </section>
    );
  }

  return (
    <section className="relative min-h-screen pt-32 sm:pt-40 pb-16 sm:pb-24 overflow-hidden bg-slate-950 font-sans flex items-center bg-gradient-sapphire">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/20 blur-[130px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-secondary/15 blur-[130px] rounded-full translate-x-1/4 translate-y-1/4 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-4 glass-light px-6 py-3 rounded-2xl border border-primary/20 bg-primary/5"
            >
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-black text-white overflow-hidden uppercase">
                    <img src={`https://i.pravatar.cc/100?u=${i+10}`} alt="user" />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(45,212,191,0.5)]" />
                <span className="text-xs font-black text-white uppercase tracking-widest leading-none">520+ Laptops Restored This Month</span>
              </div>
            </motion.div>

            <div className="space-y-8">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="text-4xl sm:text-6xl md:text-[7.5rem] font-black text-white font-display leading-[0.85] uppercase tracking-tighter"
              >
                Laptop Fixed. <br />
                <span className="text-gradient-brand text-glow">At Your Door.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-lg md:text-2xl text-slate-400 max-w-xl font-medium leading-relaxed italic border-l-2 border-primary/30 pl-6 sm:pl-8"
              >
                Mumbai & Thane&apos;s elite doorstep repair service. We pick it up, diagnose it for free, and bring it back — perfected.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-8"
            >
              <a 
                href="#booking" 
                className="w-full sm:w-auto bg-primary text-white px-8 sm:px-12 py-5 sm:py-6 rounded-[1.5rem] sm:rounded-[2rem] text-xs sm:text-sm font-black uppercase tracking-[0.2em] shadow-glow hover:shadow-glow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-4 group/btn"
              >
                Book Free Pickup
                <Zap className="w-4 h-4 fill-white group-hover:animate-bounce" />
              </a>
              <div className="flex items-center gap-8 p-1.5 glass rounded-full pr-10 border-primary/10">
                <a href="tel:+919136837381" className="w-16 h-16 bg-slate-900 border border-primary/20 rounded-full flex items-center justify-center text-white hover:border-primary transition-all shadow-xl group/ic">
                   <Clock className="w-7 h-7 group-hover/ic:text-primary transition-colors" />
                </a>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest leading-none mb-1">Response Time</p>
                  <p className="text-white font-black font-display uppercase tracking-tight italic leading-none text-lg">Under 24 Hours</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 border-t border-slate-900"
            >
              {[
                { icon: <ShieldCheck />, label: 'Genuine Parts', sub: 'with Warranty' },
                { icon: <Star className="fill-primary" />, label: 'Certified Pro', sub: '6+ Years Experience' },
                { icon: <CheckCircle />, label: 'Pay After Wait', sub: '100% Transparency' }
              ].map((pill, i) => (
                <div key={i} className="space-y-4 group/pill">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary group-hover/pill:bg-primary group-hover/pill:text-white group-hover/pill:shadow-glow transition-all duration-500 border border-primary/20">
                    {pill.icon}
                  </div>
                  <div>
                    <h4 className="text-[11px] font-black text-white uppercase tracking-widest mb-1 leading-none">{pill.label}</h4>
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-tighter">{pill.sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Widget: Service Dashboard */}
          <div className="lg:col-span-5 relative perspective-1000">
            <motion.div 
              initial={{ opacity: 0, rotateY: -10, x: 20 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="relative z-10 glass rounded-[2rem] sm:rounded-[3.5rem] p-6 sm:p-12 shadow-glow-lg border-primary/20 bg-slate-900/40"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-primary/10 blur-[60px] rounded-full pointer-events-none" />
              
              <div className="flex items-center justify-between mb-12">
                 <div className="space-y-1">
                   <h3 className="text-3xl font-black text-white uppercase tracking-tighter font-display italic">Workshop Live</h3>
                   <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em] leading-none">Real-time Dashboard • Thane HQ</p>
                 </div>
                 <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center border-primary/30 shadow-glow">
                    <Laptop className="w-7 h-7 text-primary" />
                 </div>
              </div>

              <div className="space-y-8 mb-14">
                {[
                  { name: 'MacBook Pro M1', status: 'Fixing Motherboard', progress: 65, color: '#3b82f6' },
                  { name: 'Dell Inspiron 15', status: 'Cleaning & Servicing', progress: 92, color: '#2dd4bf' },
                  { name: 'HP Pavilion x360', status: 'Panel Replacement', progress: 40, color: '#6366f1' }
                ].map((job, i) => (
                  <div key={i} className="space-y-3 group/job">
                    <div className="flex justify-between items-end">
                      <div className="space-y-1 font-sans">
                        <p className="text-[11px] font-black text-white uppercase tracking-widest">{job.name}</p>
                        <p className="text-[9px] font-bold text-slate-500 uppercase leading-none">{job.status}</p>
                      </div>
                      <span className="text-xs font-black font-display text-primary italic">{job.progress}%</span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-950 rounded-full overflow-hidden border border-white/5 p-0.5">
                       <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${job.progress}%` }}
                        transition={{ delay: 0.6 + (i*0.2), duration: 1.5 }}
                        className="h-full rounded-full shadow-glow"
                        style={{ backgroundColor: job.color }}
                       />
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 sm:p-8 glass-light rounded-2xl sm:rounded-[2rem] border-primary/10 flex flex-col items-center justify-center text-center space-y-2 group/stat hover:border-primary/40 transition-all">
                   <span className="text-2xl sm:text-4xl font-black text-white font-display uppercase tracking-tighter transition-all group-hover/stat:scale-110 group-hover/stat:text-primary">14</span>
                   <span className="text-[8px] sm:text-[9px] font-black text-slate-500 uppercase tracking-widest">Active Units</span>
                </div>
                <div className="p-4 sm:p-8 glass-light rounded-2xl sm:rounded-[2rem] border-primary/10 flex flex-col items-center justify-center text-center space-y-2 group/stat hover:border-primary/40 transition-all">
                   <span className="text-2xl sm:text-4xl font-black text-accent font-display uppercase tracking-tighter transition-all group-hover/stat:scale-110">9.2m</span>
                   <span className="text-[8px] sm:text-[9px] font-black text-slate-500 uppercase tracking-widest">Avg Response</span>
                </div>
              </div>

              <button className="w-full mt-12 py-6 bg-slate-950 border border-slate-800 rounded-2xl text-[10px] font-black text-slate-500 uppercase tracking-[0.4em] hover:text-white hover:border-primary hover:shadow-glow transition-all">
                Enter Tracking ID ↗
              </button>
            </motion.div>

            {/* Floating Element */}
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              className="absolute -top-12 -left-12 z-20 glass p-6 rounded-3xl shadow-glow border-primary/20 hidden xl:block bg-slate-900/60"
            >
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/30">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#3b82f6]" />
                </div>
                <div className="font-sans">
                  <p className="text-[10px] font-black text-white uppercase tracking-widest leading-none mb-1">Live Updates</p>
                  <p className="text-[9px] font-bold text-slate-500 uppercase leading-none">Technician in Mulund</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
