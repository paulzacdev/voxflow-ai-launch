import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Solutions />
      <HowItWorks />
      <WhyUs />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;