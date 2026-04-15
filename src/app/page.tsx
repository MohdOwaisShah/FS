import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Areas from '@/components/Areas';
import BookingForm from '@/components/BookingForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 font-sans selection:bg-primary/30 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Areas />
      <BookingForm />
      <Footer />
    </main>
  );
}
