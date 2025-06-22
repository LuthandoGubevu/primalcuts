
import Hero from '@/components/sections/Hero';
import ImageGallery from '@/components/sections/ImageGallery';
import Features from '@/components/sections/Features';
import Highlight from '@/components/sections/Highlight';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/sections/Footer';
import FadeInScroll from '@/components/utils/FadeInScroll';

const highlightSectionOne = {
  imageSrc: "/PC-Elements-11.png",
  imageAlt: "Artisanal biltong product shot",
  imageAiHint: "product shot",
  heading: "A TRADITION OF EXCELLENCE",
  features: [
    { text: "HIGH PROTEIN CONTENT (16G PROTEIN PER OUNCE)" },
    { text: "NO ARTIFICIAL PRESERVATIVES OR NITRATES" },
    { text: "NUTRIENT-DENSE" },
  ],
};

const newSectionContent = {
  imageSrc: "/black-pepper.jpg",
  imageAlt: "Black pepper corns with premium steak",
  imageAiHint: "black pepper steak",
  heading: "GRASS-FED. AIR-DRIED. PREMIUM PROTEIN",
  features: [
    { text: "Enriched with a select blend of all-natural spices, unveiling a deep, refined umami reminiscent of the finest grilled steak." },
  ],
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <FadeInScroll threshold={0.01}>
        <Hero />
      </FadeInScroll>

      <FadeInScroll threshold={0.1} delay="md:delay-100">
        <ImageGallery />
      </FadeInScroll>
      
      {/* Features component now handles its own item animations */}
      <Features />

      <Highlight
        imageSrc={highlightSectionOne.imageSrc}
        imageAlt={highlightSectionOne.imageAlt}
        imageAiHint={highlightSectionOne.imageAiHint}
        heading={highlightSectionOne.heading}
        features={highlightSectionOne.features}
        imagePosition="left"
        displayMode="list"
        variant="bleed"
      />
      
      <Highlight
        imageSrc={newSectionContent.imageSrc}
        imageAlt={newSectionContent.imageAlt}
        imageAiHint={newSectionContent.imageAiHint}
        heading={newSectionContent.heading}
        features={newSectionContent.features}
        imagePosition="right" 
        className="bg-[#05080b] text-primary-foreground dark:text-foreground"
        displayMode="paragraph"
        variant="bleed"
      />
      
      <FadeInScroll threshold={0.1} delay="md:delay-100">
        <ContactCTA />
      </FadeInScroll>
      
      {/* Footer is wrapped with FadeInScroll by default, which gives a fade-up effect */}
      <FadeInScroll threshold={0.1}>
        <Footer />
      </FadeInScroll>
    </div>
  );
}
