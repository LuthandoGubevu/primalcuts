
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

const newIconFeatures = [
  { id: 1, src: '/Image-1.png', alt: 'Product Image 1', hint: 'product detail' },
  { id: 2, src: '/Image-2.png', alt: 'Product Image 2', hint: 'product packaging' },
  { id: 3, src: '/Image-3.png', alt: 'Product Image 3', hint: 'product feature' },
  { id: 4, src: '/Image-4.png', alt: 'Product Image 4', hint: 'product lifestyle' },
  { id: 5, src: '/Image-5.png', alt: 'Product Image 5', hint: 'product ingredients' },
  { id: 6, src: '/Image-6.png', alt: 'Product Image 6', hint: 'product texture' },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Hero
        backgroundImageSrc="/PC Elements-16.jpg"
        backgroundImageAlt="People sitting around a campfire on a beach at dusk"
        backgroundImageAiHint="campfire beach"
        className="justify-end p-0"
      >
        <Image
          src="/PC Elements-02-New-01.png"
          alt="Primal Cuts product packages"
          width={800}
          height={400}
          className="w-full object-contain"
          data-ai-hint="product packages"
        />
      </Hero>

      <ImageGallery />

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
      
      <Features />

      <FadeInScroll threshold={0.1}>
        <section className="py-12 md:py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {newIconFeatures.map((feat) => (
                <div key={feat.id} className="w-[80px] aspect-[300/424]">
                  <Image
                    src={feat.src}
                    alt={feat.alt}
                    width={80}
                    height={113}
                    className="object-contain w-full h-full"
                    data-ai-hint={feat.hint}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInScroll>

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
