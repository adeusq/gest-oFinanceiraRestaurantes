import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatYouLearn from "@/components/WhatYouLearn";
import TargetAudience from "@/components/TargetAudience";
import Professors from "@/components/Professors";
import AboutEvent from "@/components/AboutEvent";
import Investment from "@/components/Investment";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import Countdown from "@/components/Countdown";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Countdown />
      <Header />
      <main>
        <Hero />
        <WhatYouLearn />
        <TargetAudience />
        <Professors />
        <AboutEvent />
        <Investment />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
