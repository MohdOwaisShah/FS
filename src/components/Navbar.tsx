'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#how-it-works' },
    { name: 'Areas', href: '#areas' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between glass rounded-[2rem] px-8 py-3 transition-all duration-500 ${
          isScrolled ? 'shadow-glow border-primary/20 bg-slate-900/80' : 'bg-transparent border-transparent'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 bg-primary rounded-2xl flex items-center justify-center font-black text-white text-xl font-display shadow-glow group-hover:scale-105 transition-all duration-300">
              FS
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-white font-display uppercase leading-none">
                Final<span className="text-primary italic">Solution</span>
              </span>
              <span className="text-[10px] font-bold text-primary/80 uppercase tracking-[0.2em] mt-1">Laptop Repair</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-xs font-bold uppercase tracking-widest text-muted hover:text-white transition-all duration-300 relative group/link"
              >
                {link.name}
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-1 bg-primary rounded-full transition-all duration-300 group-hover/link:w-4" />
              </Link>
            ))}
            
            <div className="w-px h-6 bg-white/10 mx-2" />

            <div className="flex items-center gap-6">
              <a href="tel:+919136837381" className="flex items-center gap-2 group/phone">
                <div className="w-9 h-9 glass-light rounded-xl flex items-center justify-center text-primary group-hover/phone:scale-110 transition-all border border-primary/10 group-hover/phone:border-primary/40">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-primary uppercase tracking-widest leading-none mb-1">Emergency Help</span>
                  <span className="text-sm font-black text-white font-display group-hover/phone:text-primary transition-colors">9136837381</span>
                </div>
              </a>
              <Link 
                href="#booking" 
                className="bg-primary hover:bg-blue-600 text-white px-8 py-3.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-glow hover:shadow-glow-lg active:scale-95"
              >
                Book Pickup
              </Link>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 lg:hidden">
             <div className="hidden sm:flex items-center gap-2 px-4 py-2 glass-light rounded-xl border-primary/20">
               <ShieldCheck className="w-3.5 h-3.5 text-primary" />
               <span className="text-[10px] font-black text-white uppercase tracking-widest">Verified Service</span>
             </div>
             <button 
              className="p-3 glass rounded-xl text-white active:scale-90 transition-all border-white/10"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-primary" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 mt-4 px-6 font-sans"
          >
            <div className="glass rounded-[2.5rem] p-8 space-y-8 shadow-2xl bg-slate-900 border-primary/20">
              <div className="grid grid-cols-1 gap-4">
                {navLinks.map((item) => (
                  <Link 
                    key={item.name} 
                    href={item.href} 
                    className="text-2xl font-black text-muted active:text-white transition-colors uppercase italic font-display flex items-center justify-between group"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-active:border-primary transition-all">
                      <span className="text-xs text-primary">↗</span>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="h-px bg-white/10" />
              
              <div className="flex flex-col gap-6">
                <a href="tel:+919136837381" className="flex items-center gap-4 p-4 glass-light rounded-2xl border-primary/10">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-primary uppercase tracking-widest mb-1">Call Technician</p>
                    <p className="text-xl font-black text-white font-display">9136837381</p>
                  </div>
                </a>
                <Link 
                  href="#booking" 
                  className="bg-primary text-white py-5 rounded-[1.5rem] font-black uppercase tracking-widest text-center shadow-glow shadow-blue-500/30"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Confirm Quick Booking
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
