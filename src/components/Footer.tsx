'use client';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Globe, MessageSquare, ShieldCheck, ArrowUp } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 pt-20 sm:pt-32 pb-12 font-sans relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-20 mb-12 sm:mb-24">
          
          {/* Brand Column */}
          <div className="space-y-10">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center font-black text-white text-2xl font-display shadow-glow group-hover:scale-110 transition-all duration-300">
                FS
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white font-display uppercase italic leading-none">
                  Final<span className="text-primary italic">Solution</span>
                </span>
                <span className="text-[10px] font-black text-primary/80 uppercase tracking-widest mt-2 px-1">Precision Lab 1.0</span>
              </div>
            </Link>
            <p className="text-slate-400 font-medium leading-relaxed italic max-w-xs">
              Mumbai&apos;s leading doorstep laptop repair service. We bring the workshop to your living room.
            </p>
            <div className="flex gap-4">
              {[Globe, MessageSquare].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary/40 transition-all border border-white/5">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-10">
            <h4 className="text-xs font-black text-white uppercase tracking-[0.4em] italic mb-8">Navigation</h4>
            <div className="grid grid-cols-1 gap-6">
              {[
                { name: 'Services', href: '#services' },
                { name: 'Process', href: '#how-it-works' },
                { name: 'Areas', href: '#areas' },
                { name: 'Book Pickup', href: '#booking' }
              ].map(link => (
                <Link key={link.name} href={link.href} className="text-sm font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-widest italic">{link.name}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-10">
            <h4 className="text-xs font-black text-white uppercase tracking-[0.4em] italic mb-8">Expert Support</h4>
            <div className="space-y-8">
              <a href="tel:+919136837381" className="flex items-center gap-6 group">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary border-primary/20 group-hover:bg-primary group-hover:text-white transition-all shadow-glow">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Direct Call</p>
                   <p className="text-lg font-black text-white font-display group-hover:text-primary transition-colors leading-none italic">9136837381</p>
                </div>
              </a>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-primary border-primary/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Region</p>
                   <p className="text-lg font-black text-white font-display leading-none italic">Thane & Mumbai</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter / CTA */}
          <div className="space-y-10">
            <h4 className="text-xs font-black text-white uppercase tracking-[0.4em] italic mb-8">Service Status</h4>
            <div className="p-6 sm:p-8 glass rounded-[2rem] sm:rounded-[2.5rem] border-primary/20 bg-primary/5 space-y-6">
               <div className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                  <span className="text-[10px] font-black text-white uppercase tracking-widest">Units Available Now</span>
               </div>
               <p className="text-xs text-slate-500 font-bold uppercase italic leading-relaxed">Technicians are active in your area for immediate dispatch.</p>
               <button className="w-full py-4 bg-primary text-white rounded-xl text-[10px] font-black uppercase tracking-widest shadow-glow hover:scale-105 transition-all">Check Live Status</button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em]">
            © {currentYear} Final Solution • Aesthetic Precision Service
          </p>
          
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span className="text-[9px] font-black text-white uppercase tracking-widest">ISO 9001 Certified Repair</span>
            </div>
            <button 
              onClick={scrollToTop}
              className="w-12 h-12 glass rounded-full flex items-center justify-center text-slate-500 hover:text-white hover:border-primary/40 transition-all border border-white/5 active:scale-90"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
