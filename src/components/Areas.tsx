'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Map as MapIcon, Globe } from 'lucide-react';

export default function Areas() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const regions = [
    { name: 'Thane West', status: 'Technician Hub', density: 'High', areas: ['Ghodbunder', 'Viviana', 'Hiranandani'] },
    { name: 'Mulund', status: 'Active Service', density: 'Medium', areas: ['West', 'East', 'Cypress'] },
    { name: 'Powai', status: 'Elite Support', density: 'High', areas: ['Hiranandani Gardens', 'IIT', 'Chandivali'] },
    { name: 'Kalyan', status: 'Extended Hub', density: 'Medium', areas: ['West', 'Dombivli', 'Khade'] },
    { name: 'Mumbai Suburbs', status: 'Rapid Unit', density: 'High', areas: ['Kurla', 'Ghatkopar', 'Bhandup'] },
    { name: 'Navi Mumbai', status: 'Tech Port', density: 'Premium', areas: ['Airoli', 'Vashi', 'Nerul'] }
  ];

  return (
    <section id="areas" className="py-40 bg-slate-950 font-sans relative overflow-hidden">
      {/* Background Mesh Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-secondary/10 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Left: Info Grid */}
          <div className="lg:col-span-12 mb-10">
            <div className="flex flex-col md:flex-row items-end justify-between gap-12">
               <div className="space-y-6">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-3 text-primary font-black uppercase tracking-[0.4em] text-[10px] bg-primary/10 px-6 py-3 rounded-2xl border border-primary/20 shadow-glow"
                  >
                    Logistics Center
                  </motion.div>
                  <motion.h2 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-[6rem] font-black text-white font-display uppercase tracking-tight italic"
                  >
                    Coverage <span className="text-gradient-brand">Zone.</span>
                  </motion.h2>
               </div>
               <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-slate-400 font-medium max-w-sm text-lg md:text-xl italic border-l-2 border-primary/30 pl-8 leading-relaxed mb-4"
               >
                 Precision-timed pickups across the primary Mumbai infrastructure. Our unit reaches you within <span className="text-primary font-black uppercase">4 hours</span> of confirmation.
               </motion.p>
            </div>
          </div>

          {/* Location Dashboard (Bento Style) */}
          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region, idx) => (
              <motion.div 
                key={region.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bento-card p-10 group overflow-hidden bg-slate-900/40"
              >
                 <div className="flex items-start justify-between mb-10 relative z-10">
                    <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary border-primary/20 group-hover:scale-110 group-hover:shadow-glow transition-all duration-500">
                       <MapPin className="w-6 h-6" />
                    </div>
                    <div className="text-right">
                       <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em] leading-none mb-2">Service Live</p>
                       <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-[9px] font-black text-green-500 uppercase tracking-widest">{region.density} Density</span>
                       </div>
                    </div>
                 </div>

                 <div className="space-y-4 relative z-10">
                    <h3 className="text-2xl font-black text-white font-display uppercase tracking-tight italic group-hover:text-primary transition-colors leading-none">{region.name}</h3>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{region.status}</p>
                    
                    <div className="pt-6 flex flex-wrap gap-2">
                       {region.areas.map(area => (
                         <span key={area} className="text-[10px] font-bold text-slate-400 glass-light px-3 py-1.5 rounded-lg border border-white/5 group-hover:border-primary/20 group-hover:text-white transition-all uppercase tracking-tighter italic">
                           {area}
                         </span>
                       ))}
                    </div>
                 </div>

                 {/* Decorative background element */}
                 <div className="absolute -bottom-6 -right-6 text-7xl font-black text-white/5 italic select-none pointer-events-none transition-transform group-hover:scale-110">
                    {idx + 1}
                 </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Banner */}
          <div className="lg:col-span-12">
             <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               className="p-12 glass rounded-[3rem] border-primary/20 bg-slate-900/50 flex flex-col md:flex-row items-center gap-12 text-center md:text-left justify-between"
             >
                <div className="flex items-center gap-8">
                   <div className="w-20 h-20 glass-light rounded-[2rem] flex items-center justify-center text-primary border-primary/20 animate-pulse-slow">
                      <Navigation className="w-10 h-10" />
                   </div>
                   <div>
                      <h4 className="text-2xl font-black text-white font-display uppercase italic leading-tight">Can&apos;t find your area?</h4>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mt-2">Extended support available for large orders.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <button className="px-12 py-5 bg-primary text-white font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-all shadow-glow">9136837381</button>
                   <div className="hidden lg:flex flex-col justify-center">
                      <p className="text-[10px] font-black text-white uppercase tracking-widest mb-1">Direct Hotline</p>
                      <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">24/7 Response</p>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
