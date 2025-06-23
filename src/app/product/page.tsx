
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NutritionFacts from '@/components/product/NutritionFacts';
import FadeInScroll from '@/components/utils/FadeInScroll';
import Footer from '@/components/sections/Footer';
import ProductImage from '@/components/product/ProductImage';
import ProductDetailCarousel from '@/components/product/ProductDetailCarousel';

const iconFeatures = [
  { id: 1, src: '/PC-Elements-06.png', alt: 'Gluten Free icon', hint: 'gluten free icon' },
  { id: 2, src: '/PC-Elements-07.png', alt: 'Keto Friendly icon', hint: 'keto friendly icon' },
  { id: 3, src: '/PC-Elements-08.png', alt: '32G Protein icon', hint: 'protein icon' },
  { id: 4, src: '/PC-Elements-09.png', alt: 'Zero Sugar icon', hint: 'sugar free icon' },
  { id: 5, src: '/PC-Elements-10.png', alt: 'Whole30 Approved icon', hint: 'whole30 approved icon' },
];

export default function ProductPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <ProductImage />

        <FadeInScroll threshold={0.1} delay="md:delay-100">
          <ProductDetailCarousel />
        </FadeInScroll>

        <FadeInScroll threshold={0.1} delay="md:delay-200">
          <NutritionFacts />
        </FadeInScroll>

        <FadeInScroll threshold={0.1} delay="md:delay-300">
          <section className="py-12 md:py-16 bg-background">
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
      </main>

      <FadeInScroll threshold={0.1} delay="md:delay-500">
        <div className="container mx-auto px-4 flex justify-center py-8">
          <Button variant="outline" asChild className="border-gray-400 text-black hover:bg-buttonCta-text hover:text-white hover:border-buttonCta-text">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </FadeInScroll>

      <FadeInScroll threshold={0.1} delay="md:delay-600">
        <Footer />
      </FadeInScroll>
    </div>
  );
}
