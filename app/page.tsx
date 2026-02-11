import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUs from './components/WhyChooseUs';
import PortfolioSection from './components/PortfolioSection';
import TestimonialSection from './components/TestimonialSection';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <PortfolioSection />
      <TestimonialSection />
      <CTASection />
      <ContactSection />
    </main>
  );
}
