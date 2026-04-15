'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Battery, 
  Keyboard, 
  Cpu, 
  ShieldAlert, 
  Zap, 
  ThermometerSnowflake,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export default function Services() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const services = [
    { 
      title: 'Screen Repair', 
      price: '₹1,500', 
      icon: <Monitor className="w-10 h-10 text-primary" />, 
      desc: 'Cracked or flickering displays fixed with original quality panels.',
      size: 'lg',
      img: '🖥️'
    },
    { 
      title: 'Battery', 
      price: '₹1,200', 
      icon: <Battery className="w-8 h-8 text-primary" />, 
      desc: '6 months warranty on original replacements.',
      size: 'sm'
    },
    { 
      title: 'Keyboard', 
      price: '₹800', 
      icon: <Keyboard className="w-8 h-8 text-primary" />, 
      desc: 'Liquid damage & sticky keys fix.',
      size: 'sm'
    },
    { 
      title: 'Motherboard', 
      price: '₹1,500', 
      icon: <Cpu className="w-10 h-10 text-primary" />, 
      desc: 'Chip-level repair by our senior electronics expert.',
      size: 'md'
    },
    { 
      title: 'SSD Upgrade', 
      price: '₹1,800', 
      icon: <Zap className="w-10 h-10 text-primary" />, 
      desc: 'Boost your laptop speed by 10x with NVMe SSDs.',
      size: 'md'
    },
    { 
      title: 'OS & Virus', 
      price: '₹500', 
      icon: <ShieldAlert className="w-8 h-8 text-primary" />, 
      desc: 'Windows 11 re-install & deep virus cleaning.',
      size: 'sm'
    },
    { 
      title: 'Service', 
      price: '₹400', 
      icon: <ThermometerSnowflake className="w-8 h-8 text-primary" />, 
      desc: 'Thermal paste & deep cleaning.',
      size: 'sm'
    }
  ];

  return (
    <section id="services" className="py-40 bg-slate-950 overflow-hidden font-sans relative">
      {/* Background sapphire glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-12">
          <div className="space-y-6">
             <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 text-primary font-black uppercase tracking-[0.4em] text-[10px] bg-primary/10 px-6 py-3 rounded-2xl border border-primary/20 shadow-glow"
             >
               Full System Mastery
             </motion.div>
             <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-[5rem] font-black text-white font-display uppercase tracking-tight leading-none italic"
             >
               What We <span className="text-gradient-brand">Perfect.</span>
             </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 font-medium max-w-sm text-lg md:text-xl italic border-l-2 border-primary/30 pl-8 leading-relaxed"
          >
            All benchmarks are restored to factory standards. We diagnostic for free, you pay only for results.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-8 h-auto">
           {/* Item 1: Large Feature */}
           <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 md:row-span-2 bento-card p-12 flex flex-col justify-between group bg-slate-900/40"
           >
              <div className="space-y-8 relative z-10">
                 <div className="w-20 h-20 glass rounded-[2rem] flex items-center justify-center border-primary/20 shadow-glow transition-all duration-500 group-hover:scale-110 group-hover:border-primary/40 group-hover:bg-primary/10">
                    {services[0].icon}
                 </div>
                 <h3 className="text-4xl md:text-5xl font-black text-white font-display uppercase tracking-tighter italic group-hover:text-primary transition-colors leading-[0.9]">Digital Panel <br /> Restoration</h3>
                 <p className="text-slate-400 text-lg leading-relaxed font-medium max-w-xs">{services[0].desc}</p>
              </div>
              <div className="flex items-center justify-between mt-12 relative z-10 pt-10 border-t border-white/5">
                 <div className="space-y-1">
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] leading-none mb-1">Starting From</p>
                    <p className="text-3xl font-black text-white font-display uppercase tracking-tighter italic">{services[0].price}</p>
                 </div>
                 <button className="h-16 w-16 glass rounded-full flex items-center justify-center text-primary border-primary/20 group-hover:bg-primary group-hover:text-white group-hover:shadow-glow transition-all">
                    <ChevronRight className="w-6 h-6" />
                 </button>
              </div>
              <div className="absolute bottom-0 right-0 opacity-5 text-[15rem] font-black select-none pointer-events-none translate-x-1/4 translate-y-1/4 group-hover:opacity-10 transition-opacity">
                 {services[0].img}
              </div>
           </motion.div>

           {/* Item 2: Motherboard */}
           <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="md:col-span-2 bento-card p-12 flex items-center gap-12 group bg-slate-900/40"
           >
              <div className="space-y-4 flex-1">
                 <div className="flex items-center gap-3 text-[10px] font-black text-primary uppercase tracking-widest mb-1">
                    <Cpu className="w-4 h-4" />
                    Advanced Electronics
                 </div>
                 <h3 className="text-3xl font-black text-white font-display uppercase tracking-tighter group-hover:text-primary transition-colors italic leading-none">Chip-Level Repair</h3>
                 <p className="text-base text-slate-400 max-w-xs leading-relaxed">{services[3].desc}</p>
                 <span className="inline-block text-white text-2xl font-black font-display uppercase mt-3 tracking-tighter italic">{services[3].price}</span>
              </div>
              <div className="w-28 h-28 glass rounded-[2.5rem] flex items-center justify-center border-primary/20 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-glow shrink-0 bg-primary/5">
                 {services[3].icon}
              </div>
           </motion.div>

           {/* Item 3: SSD */}
           <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="md:col-span-1 bento-card p-10 flex flex-col justify-end group bg-slate-900/60"
           >
              <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center mb-8 text-primary border-primary/20 group-hover:scale-110 group-hover:shadow-glow transition-all">
                 {services[4].icon}
              </div>
              <h3 className="text-2xl font-black text-white font-display uppercase tracking-tighter mb-2 leading-none italic">Velocity <br /> Upgrade</h3>
              <p className="text-xs text-slate-500 mb-6 font-bold uppercase tracking-tight">{services[4].desc}</p>
              <span className="text-xl font-black text-primary font-display uppercase leading-none italic">{services[4].price}</span>
           </motion.div>

           {/* Item 4: Battery */}
           <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="md:col-span-1 bento-card p-10 flex flex-col justify-end group bg-slate-900/60 border-accent/20"
           >
              <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center mb-8 text-accent border-accent/20 group-hover:-rotate-12 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(45,212,191,0.3)] transition-all">
                 <Battery className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-white font-display uppercase tracking-tighter mb-2 leading-none italic">Power <br /> Restore</h3>
              <p className="text-xs text-slate-500 mb-6 font-bold uppercase tracking-tight">{services[1].desc}</p>
              <span className="text-xl font-black text-accent font-display uppercase leading-none italic">{services[1].price}</span>
           </motion.div>

           {/* Mini Stats Grid */}
           {[services[2], services[5], services[6]].map((s, i) => (
             <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.4 + (i*0.1), duration: 0.5 }}
                className="md:col-span-1 bento-card p-8 flex flex-col items-center text-center group justify-center space-y-4 bg-slate-900/30"
             >
                <div className="w-12 h-12 glass-light rounded-2xl flex items-center justify-center text-primary border-primary/20 group-hover:scale-110 group-hover:border-primary/40 transition-all">
                   {s.icon}
                </div>
                <div className="space-y-1">
                   <h3 className="text-[12px] font-black text-white font-display uppercase tracking-[0.2em]">{s.title}</h3>
                   <p className="text-[10px] font-bold text-primary uppercase tracking-tighter">{s.price}</p>
                </div>
             </motion.div>
           ))}

           {/* Direct Access Trust Card */}
           <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1 bento-card p-8 bg-primary/10 flex flex-col items-center justify-center text-center text-white border-primary/30 shadow-glow"
           >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 shadow-glow transition-transform hover:scale-110 cursor-pointer group">
                 <ShieldCheck className="w-8 h-8 text-white fill-white/10 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="text-[13px] font-black uppercase tracking-[0.2em] leading-tight italic">Mumbai Region <br /> Hub Confirmed</h3>
              <p className="text-[9px] font-bold opacity-60 mt-3 uppercase tracking-widest">Doorstep Verified</p>
           </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center space-y-12"
        >
          <p className="text-slate-600 text-[10px] font-black uppercase tracking-[0.5em]">Global Standards • Local Expertise</p>
          <div className="flex flex-wrap justify-center gap-16 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 items-center">
            {['Dell', 'HP', 'Lenovo', 'Apple Premium', 'Asus ROG', 'Acer Predator'].map(brand => (
              <span key={brand} className="text-2xl md:text-3xl font-black text-white font-display italic uppercase tracking-tighter hover:text-primary transition-colors cursor-default">{brand}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
