
import Features from '@/components/sections/Features';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/sections/Footer';
import FadeInScroll from '@/components/utils/FadeInScroll';
import Hero from '@/components/sections/Hero';
import Highlight from '@/components/sections/Highlight';
import ImageGallery from '@/components/sections/ImageGallery';

const traditionFeatures = [
  { text: "Since 2012, we've honored the South African tradition of biltong. Our process is simple: We use only the finest cuts of American beef, marinate them in our time-tested blend of spices, and air-dry them to perfection. The result is a snack that's not just delicious but also packed with protein and a a commitment to quality you can trust." }
];

const differenceFeatures = [
  { text: "Made with 100% American Beef" },
  { text: "Marinated for 24 hours" },
  { text: "Air-dried, never cooked (retaining more nutrients)" }
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Hero
        backgroundImageSrc="/PC-Elements-16.jpg"
        backgroundImageAlt="Primal Cuts product background"
        backgroundImageAiHint="product background"
        logoImageSrc="/PC-Elements-14.png"
        logoImageAlt="Primal Cuts tagline logo"
        logoImageAiHint="company tagline"
        logoWidth={300}
        logoHeight={300}
        logoClassName="dark:invert-0 invert"
      />

      <ImageGallery />
      
      {/* Features component now handles its own item animations */}
      <Features />

      <Highlight
        imageSrc="/PC-Elements-11.png"
        imageAlt="Close-up of sliced biltong"
        imageAiHint="dried beef"
        heading="THE PRIMAL CUTS DIFFERENCE"
        features={differenceFeatures}
        imagePosition="right"
        variant="bleed"
        className="bg-background text-foreground"
      />

      <Highlight
        imageSrc="/PC-Elements-12.jpg"
        imageAlt="Man seasoning strips of beef in a commercial kitchen"
        imageAiHint="chef seasoning meat"
        features={traditionFeatures}
        imagePosition="left"
        variant="bleed"
        displayMode="paragraph"
        className="bg-black text-primary-foreground"
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
