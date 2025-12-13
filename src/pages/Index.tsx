import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import Solutions from "@/components/Solutions";
import UseCases from "@/components/UseCases";
import Comparison from "@/components/Comparison";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProblemSection />
      <Solutions />
      <UseCases />
      <Comparison />
      <HowItWorks />
      <Pricing />
      <CTASection />
      <ContactForm />
      <Footer />
      <ChatBot />
    </main>
  );
};

export default Index;
