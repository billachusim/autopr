import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
// import ChatFAB from "@/components/ChatFAB";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
      {/* <ChatFAB /> */}
    </main>
  );
};

export default Index;
