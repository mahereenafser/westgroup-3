import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import ServicesGrid from '@/components/ServicesGrid';
import StatsSection from '@/components/StatsSection';
import ProcessSection from '@/components/ProcessSection';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <TrustBadges />
      <ServicesGrid />
      <StatsSection />
      <ProcessSection />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
}
