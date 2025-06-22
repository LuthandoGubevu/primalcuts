
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Hero from '@/components/sections/Hero'; 
import ProductHero from '@/components/product/ProductHero';
import NutritionFacts from '@/components/product/NutritionFacts';
import FadeInScroll from '@/components/utils/FadeInScroll';
import Footer from '@/components/sections/Footer';
import ProductFeatures from '@/components/product/ProductFeatures';

export default function ProductPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <FadeInScroll threshold={0.01}>
        <Hero
          backgroundImageSrc="/PC Elements-27.jpg"
          backgroundImageAlt="Primal Cuts product page hero background"
          backgroundImageAiHint="product lifestyle background"
          priorityBackgroundImage={true}
          overlay={true}
          className="justify-end p-0"
          minHeight="min-h-[50vh] sm:min-h-[65vh]"
        >
          <Image
            src="/PC Elements-26.png"
            alt="Tagline: 100% American Beef, 32g Protein, 0g Sugar"
            width={800}
            height={130}
            className="w-full object-contain"
            data-ai-hint="product benefits tagline"
          />
        </Hero>
      </FadeInScroll>

      <main className="flex-grow">
        <FadeInScroll threshold={0.1} delay="md:delay-100">
          <ProductHero />
        </FadeInScroll>

        <FadeInScroll threshold={0.1} delay="md:delay-200">
          <NutritionFacts />
        </FadeInScroll>
        
        <FadeInScroll threshold={0.1} delay="md:delay-300">
          <ProductFeatures />
        </FadeInScroll>

      </main>

      <FadeInScroll threshold={0.1} delay="md:delay-400">
        <div className="container mx-auto px-4 flex justify-center py-8">
          <Button variant="outline" asChild className="border-gray-400 text-black hover:bg-buttonCta-text hover:text-white hover:border-buttonCta-text">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </FadeInScroll>

      <FadeInScroll threshold={0.1} delay="md:delay-500">
        <Footer />
      </FadeInScroll>
    </div>
  );
}
