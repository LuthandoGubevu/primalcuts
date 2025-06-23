'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NutritionFacts from '@/components/product/NutritionFacts';
import FadeInScroll from '@/components/utils/FadeInScroll';
import Footer from '@/components/sections/Footer';
import ProductImage from '@/components/product/ProductImage';
import ProductDetailCarousel from '@/components/product/ProductDetailCarousel';
import FlavorSelector from '@/components/product/FlavorSelector';
import { useState } from 'react';

const iconFeatures = [
  { id: 1, src: '/PC-Elements-06.png', alt: 'Gluten Free icon', hint: 'gluten free icon' },
  { id: 2, src: '/PC-Elements-07.png', alt: 'Keto Friendly icon', hint: 'keto friendly icon' },
  { id: 3, src: '/PC-Elements-08.png', alt: '32G Protein icon', hint: 'protein icon' },
  { id: 4, src: '/PC-Elements-09.png', alt: 'Zero Sugar icon', hint: 'sugar free icon' },
  { id: 5, src: '/PC-Elements-10.png', alt: 'Whole30 Approved icon', hint: 'whole30 approved icon' },
];

const products = [
  {
    name: 'SMOKE',
    description: '2OZ SLICED BILTONG',
    imageSrcFront: '/Image-1.png',
    imageAltFront: 'Smoke flavor Primal Cuts package, front view',
    imageHintFront: 'product package smoke front',
    imageSrcBack: '/Image-2.png',
    imageAltBack: 'Smoke flavor Primal Cuts package, back view',
    imageHintBack: 'product package smoke back',
  },
  {
    name: 'FIRE',
    description: '2OZ SLICED BILTONG',
    imageSrcFront: '/Image-3.png',
    imageAltFront: 'Fire flavor Primal Cuts package, front view',
    imageHintFront: 'product package fire front',
    imageSrcBack: '/Image-4.png',
    imageAltBack: 'Fire flavor Primal Cuts package, back view',
    imageHintBack: 'product package fire back',
  },
  {
    name: 'ORIGINAL',
    description: '2OZ SLICED BILTONG',
    imageSrcFront: '/Image-5.png',
    imageAltFront: 'Original flavor Primal Cuts package, front view',
    imageHintFront: 'product package original front',
    imageSrcBack: '/Image-6.png',
    imageAltBack: 'Original flavor Primal Cuts package, back view',
    imageHintBack: 'product package original back',
  },
];


export default function ProductPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentProduct = products[currentIndex];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <ProductImage />

        <FadeInScroll threshold={0.1}>
          <section className="py-8 md:py-12 text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase text-black tracking-wider">
              {currentProduct.name}
            </h2>
            <p className="font-body text-lg md:text-xl uppercase text-black/80 tracking-widest mt-2">
              {currentProduct.description}
            </p>
          </section>
        </FadeInScroll>

        <FadeInScroll threshold={0.1}>
          <ProductDetailCarousel 
            products={products}
            currentIndex={currentIndex} 
            setCurrentIndex={setCurrentIndex} 
          />
        </FadeInScroll>

        <FadeInScroll threshold={0.1} delay="md:delay-100">
          <FlavorSelector currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
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
