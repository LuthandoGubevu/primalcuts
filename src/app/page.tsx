
import Features from '@/components/sections/Features';
import Highlight from '@/components/sections/Highlight';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/sections/Footer';
import FadeInScroll from '@/components/utils/FadeInScroll';
import Hero from '@/components/sections/Hero';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Hero
        backgroundImageSrc="/PC-Elements-16.jpg"
        backgroundImageAlt="Primal Cuts product background"
        backgroundImageAiHint="product background"
        logoImageSrc="https://placehold.co/300x300.png"
        logoImageAlt="Logo placeholder"
        logoImageAiHint="company logo"
        logoWidth={300}
        logoHeight={300}
      />
      
      {/* Features component now handles its own item animations */}
      <Features />

      <Highlight
        imageSrc={"/PC-Elements-11.png"}
        imageAlt={"Artisanal biltong product shot"}
        imageAiHint={"product shot"}
        features={[
          { text: "HIGH PROTEIN CONTENT (16G PROTEIN PER OUNCE)" },
          { text: "NO ARTIFICIAL PRESERVATIVES OR NITRATES" },
          { text: "NUTRIENT-DENSE" },
        ]}
        imagePosition="left"
        displayMode="list"
        variant="bleed"
      />
      
      <Highlight
        imageSrc={"/black-pepper.jpg"}
        imageAlt={"Black pepper corns with premium steak"}
        imageAiHint={"black pepper steak"}
        heading={"GRASS-FED. AIR-DRIED. PREMIUM PROTEIN"}
        features={[
          { text: "Enriched with a select blend of all-natural spices, unveiling a deep, refined umami reminiscent of the finest grilled steak." },
        ]}
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
