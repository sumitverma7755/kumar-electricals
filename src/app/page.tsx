import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BrandsMarquee from '@/components/BrandsMarquee';
import AreasWeServe from '@/components/AreasWeServe';
import About from '@/components/About';
import TrustBar from '@/components/TrustBar';
import MeetTheOwner from '@/components/MeetTheOwner';
import Services from '@/components/Services';
import Products from '@/components/Products';
import SafetyQuality from '@/components/SafetyQuality';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQ from '@/components/FAQ';
import GoogleReviewCTA from '@/components/GoogleReviewCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileActionBar from '@/components/MobileActionBar';
import OfflineDetector from '@/components/OfflineDetector';
import dynamic from 'next/dynamic';

// Lazy load heavy components for better performance
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  loading: () => <div className="py-20 text-center">Loading testimonials...</div>
});

const Gallery = dynamic(() => import('@/components/Gallery'), {
  loading: () => <div className="py-20 text-center">Loading gallery...</div>
});

const ServiceBooking = dynamic(() => import('@/components/ServiceBooking'), {
  loading: () => <div className="py-20 text-center">Loading booking form...</div>
});

export default function Home() {
  return (
    <>
      <OfflineDetector />
      <Header />
      <main className="pb-20 md:pb-0">
        <Hero />
        <About />
        <TrustBar />
        <BrandsMarquee />
        <AreasWeServe />
        <MeetTheOwner />
        <Services />
        <Products />
        <SafetyQuality />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <ServiceBooking />
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
