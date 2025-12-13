import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Solutions from "@/components/Solutions";
import HowItWorks from "@/components/HowItWorks";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Solutions />
      <HowItWorks />
      <WhyUs />
      <Pricing />
      <ContactForm />
      <CTASection />
      <Footer />
      <ChatBot />
    </main>
  );
};

export default Index;