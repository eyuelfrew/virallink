import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
// import Products from '@/components/Products';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import StructuredData from '@/components/StructuredData';

export default function Home() {
  return (
    <>
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        {/* <Products /> */}
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}