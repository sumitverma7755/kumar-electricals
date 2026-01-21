import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BrandsMarquee from '@/components/BrandsMarquee';
import AreasWeServe from '@/components/AreasWeServe';
import MeetTheOwner from '@/components/MeetTheOwner';
import Services from '@/components/Services';
import Products from '@/components/Products';
import SafetyQuality from '@/components/SafetyQuality';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import GoogleReviewCTA from '@/components/GoogleReviewCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileActionBar from '@/components/MobileActionBar';

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <BrandsMarquee />
        <AreasWeServe />
        <MeetTheOwner />
        <Services />
        <Products />
        <SafetyQuality />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <GoogleReviewCTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileActionBar />
    </>
  );
}
