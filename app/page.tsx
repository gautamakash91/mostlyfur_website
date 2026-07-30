import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Grooming } from "@/components/Grooming";
import { WhySalon } from "@/components/WhySalon";
import { Boarding } from "@/components/Boarding";
import { Boutique } from "@/components/Boutique";
import { WhyUs } from "@/components/WhyUs";
import { Gallery } from "@/components/Gallery";
import { Team } from "@/components/Team";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { faqs as faqData } from "@/lib/faq-data";
import { Visit } from "@/components/Visit";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/ui/RevealObserver";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.a,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <RevealObserver />
      <Header />
      <Hero />
      <Services />
      <Grooming />
      <WhySalon />
      <Boarding />
      <Boutique />
      <WhyUs />
      <Gallery />
      <Team />
      <Reviews />
      <FAQ />
      <Visit />
      <FinalCTA />
      <Footer />
    </>
  );
}
