
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/sections/Footer';
import FadeInScroll from '@/components/utils/FadeInScroll';
import Highlight from '@/components/sections/Highlight';
import Image from 'next/image';
import ImageGallery from '@/components/sections/ImageGallery';

const traditionFeatures = [
  { text: "Enriched with a select blend of all-natural spices, unveiling a deep, refined umami reminiscent of the finest grilled steak." }
];

const healthFeatures = [
  { text: "HIGH PROTEIN CONTENT (16G PROTEIN PER OUNCE)" },
  { text: "NO ARTIFICIAL PRESERVATIVES OR NITRATES" },
  { text: "NUTRIENT-DENSE" },
];

const iconFeatures = [
  { id: 1, src: '/PC-Elements-06.png', alt: 'Gluten Free icon', hint: 'gluten free icon' },
  { id: 2, src: '/PC-Elements-07.png', alt: 'Keto Friendly icon', hint: 'keto friendly icon' },
  { id: 3, src: '/PC-Elements-08.png', alt: '32G Protein icon', hint: 'protein icon' },
  { id: 4, src: '/PC-Elements-09.png', alt: 'Zero Sugar icon', hint: 'sugar free icon' },
  { id: 5, src: '/PC-Elements-10.png', alt: 'Whole30 Approved icon', hint: 'whole30 approved icon' },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      
      <FadeInScroll threshold={0.1}>
        <section className="py-12 md:py-16 bg-black">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {iconFeatures.map((feat) => (
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

      <Highlight
        imageSrc="/PC-Elements-11.png"
        imageAlt="Three packages of Primal Cuts biltong"
        imageAiHint="product packages lifestyle"
        features={healthFeatures}
        imagePosition="left"
        variant="bleed"
        className="bg-[#f0f0f0]"
      />

      <Highlight
        imageSrc="/black-pepper.jpg"
        imageAlt="Man seasoning strips of beef in a commercial kitchen"
        imageAiHint="chef seasoning meat"
        heading="GRASS-FED. AIR-DRIED. PREMIUM PROTEIN"
        features={traditionFeatures}
        imagePosition="right"
        variant="bleed"
        displayMode="paragraph"
        className="bg-[#07080c] text-primary-foreground"
      />
      
      <FadeInScroll threshold={0.1}>
        <ImageGallery />
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
