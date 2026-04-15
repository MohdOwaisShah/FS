'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Truck, Wrench, ShieldCheck, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Process() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const steps = [
    {
      id: '01',
      title: 'Quick Call',
      desc: 'Connect with our experts in 30 seconds for a free quote.',
      icon: <PhoneCall className="w-8 h-8" />,
      color: 'primary'
    },
    {
      id: '02',
      title: 'Free Pickup',
      desc: 'Our technician picks up the laptop at your preferred time.',
      icon: <Truck className="w-8 h-8" />,
      color: 'secondary'
    },
    {
      id: '03',
      title: 'Expert Repair',
      desc: 'Diagnosis & repair at our lab using high-grade tools.',
      icon: <Wrench className="w-8 h-8" />,
      color: 'primary'
    },
    {
      id: '04',
      title: 'Home Delivery',
      desc: 'Verified delivery back to you. Pay only after satisfaction.',
      icon: <ShieldCheck className="w-8 h-8" />,
      color: 'accent'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-40 bg-slate-950 font-sans relative">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-primary/10 blur-[130px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-28 space-y-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="px-6 py-2 glass rounded-full text-xs font-black text-primary uppercase tracking-[0.4em] border border-primary/20 bg-primary/5"
          >
            The Flow
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-[5.5rem] font-black text-white font-display uppercase tracking-tight leading-none italic"
          >
            How We <span className="text-gradient-brand">Win.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 font-bold max-w-sm uppercase tracking-widest text-[11px] leading-relaxed"
          >
            Streamlined logistics designed for busy professionals in Mumbai & Thane.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-12 relative">
          {/* Animated path line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          
          {steps.map((step, idx) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative group p-10 glass rounded-[3rem] border-primary/5 hover:border-primary/30 transition-all duration-500 hover:shadow-glow-lg bg-slate-900/30"
            >
              <div className="absolute -top-6 -right-6 text-6xl font-black text-white/5 font-display group-hover:text-primary/10 transition-colors uppercase italic select-none">
                {step.id}
              </div>
              
              <div className="w-20 h-20 glass rounded-3xl flex items-center justify-center mb-8 border-primary/20 shadow-glow group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:scale-110">
                <div className="text-primary group-hover:text-white transition-colors">
                  {step.icon}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-white font-display uppercase tracking-tight italic group-hover:text-primary transition-colors leading-none">{step.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed italic">{step.desc}</p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-6 top-[60px] w-12 h-12 glass rounded-full items-center justify-center text-primary/40 border-primary/10 z-20 group-hover:text-primary group-hover:scale-110 transition-all">
                  <ChevronRight className="w-5 h-5" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 sm:mt-32 p-6 sm:p-10 glass rounded-[2rem] sm:rounded-[3.5rem] border-primary/20 bg-primary/5 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 text-center md:text-left shadow-glow-lg overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="flex items-center gap-8 relative z-10">
            <div className="w-20 h-20 bg-primary rounded-[2rem] flex items-center justify-center text-white shadow-glow">
              <ShieldCheck className="w-10 h-10" />
            </div>
            <div>
              <h4 className="text-3xl font-black text-white font-display uppercase tracking-tighter italic leading-none">Security Shield Active</h4>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">All devices are insured during transit.</p>
            </div>
          </div>
          <Link href="#booking" className="whitespace-nowrap px-8 sm:px-12 py-5 sm:py-6 bg-white text-slate-950 font-black uppercase tracking-widest rounded-xl sm:rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl hover:shadow-white/10 relative z-10 w-full sm:w-auto text-center">
            Get Started Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
