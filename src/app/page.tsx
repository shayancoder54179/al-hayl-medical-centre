import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { Doctors } from "@/components/Doctors";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Clinic } from "@/components/Clinic";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Services />
        <Doctors />
        <HowItWorks />
        <Testimonials />
        <Clinic />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
