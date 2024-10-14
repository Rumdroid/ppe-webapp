import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <FeaturedProducts />
      <Benefits />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}