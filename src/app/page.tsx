
import Hero from '@/components/sections/Hero';
import ImageGallery from '@/components/sections/ImageGallery';
import Features from '@/components/sections/Features';
import Highlight from '@/components/sections/Highlight';
import Showcase from '@/components/sections/Showcase';
import DescriptionSection from '@/components/sections/DescriptionSection';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/sections/Footer';
import FadeInScroll from '@/components/utils/FadeInScroll';

const highlightContent = {
  imageSrc: "/PC-Elements-11.png",
  imageAlt: "Grass-fed premium protein product shot",
  imageAiHint: "product ingredient quality",
  features: [
    { text: "HIGH PROTEIN CONTENT (16G PROTEIN PER OUNCE)" },
    { text: "NO ARTIFICIAL PRESERVATIVES OR NITRATES" },
    { text: "NUTRIENT-DENSE" },
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
      
      <FadeInScroll threshold={0.1} delay="md:delay-100">
        <Features />
      </FadeInScroll>
      
      <FadeInScroll threshold={0.1} delay="md:delay-100">
        <Highlight
          imageSrc={highlightContent.imageSrc}
          imageAlt={highlightContent.imageAlt}
          imageAiHint={highlightContent.imageAiHint}
          features={highlightContent.features}
          imagePosition="left" 
        />
      </FadeInScroll>

      <FadeInScroll threshold={0.1} delay="md:delay-100">
        <Highlight
          imageSrc={highlightContent.imageSrc} 
          imageAlt={highlightContent.imageAlt}
          imageAiHint={highlightContent.imageAiHint}
          features={highlightContent.features}
          imagePosition="right" 
          className="bg-background" 
        />
      </FadeInScroll>
      
      <FadeInScroll threshold={0.1} delay="md:delay-100">
        <Showcase />
      </FadeInScroll>
      
      <FadeInScroll threshold={0.1} delay="md:delay-100">
        <DescriptionSection />
      </FadeInScroll>
      
      <FadeInScroll threshold={0.1} delay="md:delay-100">
        <ContactCTA />
      </FadeInScroll>
      
      <Footer />
    </div>
  );
}
