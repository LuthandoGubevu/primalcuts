
import Features from '@/components/sections/Features';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/sections/Footer';
import FadeInScroll from '@/components/utils/FadeInScroll';
import Hero from '@/components/sections/Hero';
import Highlight from '@/components/sections/Highlight';
import ImageGallery from '@/components/sections/ImageGallery';
import Image from 'next/image';

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
        backgroundImageSrc="/PC Elements-16.jpg"
        backgroundImageAlt="People sitting around a campfire on a beach at dusk"
        backgroundImageAiHint="campfire beach"
        className="justify-end pb-8"
      >
        <div className="px-4">
          <Image
            src="/PC Elements-26.png"
            alt="Tagline: 100% American Beef, 32g Protein, 0g Sugar"
            width={800}
            height={130}
            className="w-full object-contain mb-4"
            data-ai-hint="product benefits tagline"
          />
          <Image
            src="/PC Elements-02-New-01.png"
            alt="Primal Cuts product packages"
            width={800}
            height={400}
            className="w-full object-contain"
            data-ai-hint="product packages"
          />
        </div>
      </Hero>

      <ImageGallery />

      <Features />

      <Highlight
        imageSrc="/black-pepper.jpg"
        imageAlt="Man seasoning strips of beef in a commercial kitchen"
        imageAiHint="chef seasoning meat"
        features={traditionFeatures}
        imagePosition="left"
        variant="bleed"
        displayMode="paragraph"
        className="bg-black text-primary-foreground"
      />

      <Highlight
        imageSrc="/PC Elements-11.png"
        imageAlt="Three packages of Primal Cuts biltong"
        imageAiHint="product packages lifestyle"
        heading="The Primal Cuts Difference"
        features={differenceFeatures}
        imagePosition="right"
        variant="bleed"
        displayMode="list"
        className="bg-secondary/20"
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
