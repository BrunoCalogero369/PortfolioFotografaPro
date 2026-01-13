import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Portfolio } from '@/components/Portfolio';

export default function Home() {
  return (
    <main>
      <Hero/>
      <Portfolio/>
      <Footer/>
      {/* Acá irán las otras secciones después */}
    </main>
  );
}