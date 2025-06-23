'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const products = [
  {
    name: 'ORIGINAL',
    subtitle: '2OZ SLICED BILTONG',
    imageSrcFront: '/Image-1.png',
    imageAltFront: 'Original flavor Primal Cuts package, front view',
    imageHintFront: 'product package original front',
    imageSrcBack: '/Image-2.png',
    imageAltBack: 'Original flavor Primal Cuts package, back view',
    imageHintBack: 'product package original back',
  },
  {
    name: 'SMOKE',
    subtitle: '2OZ SLICED BILTONG',
    imageSrcFront: '/Image-3.png',
    imageAltFront: 'Smoke flavor Primal Cuts package, front view',
    imageHintFront: 'product package smoke front',
    imageSrcBack: '/Image-4.png',
    imageAltBack: 'Smoke flavor Primal Cuts package, back view',
    imageHintBack: 'product package smoke back',
  },
  {
    name: 'FIRE',
    subtitle: '2OZ SLICED BILTONG',
    imageSrcFront: '/Image-5.png',
    imageAltFront: 'Fire flavor Primal Cuts package, front view',
    imageHintFront: 'product package fire front',
    imageSrcBack: '/Image-6.png',
    imageAltBack: 'Fire flavor Primal Cuts package, back view',
    imageHintBack: 'product package fire back',
  },
];

export default function ProductDetailCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? products.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === products.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  const currentProduct = products[currentIndex];

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold uppercase tracking-wider text-black">
            {currentProduct.name}
          </h2>
          <p className="font-body text-lg md:text-xl uppercase tracking-wide text-black/80 mt-2">
            {currentProduct.subtitle}
          </p>
        </div>

        <div className="relative flex items-center justify-center">
           <Button variant="ghost" size="icon" onClick={goToPrevious} className="absolute left-0 md:-left-4 lg:-left-16 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/50 hover:bg-white/80 shadow-md">
            <ChevronLeft className="h-8 w-8 text-black" />
          </Button>

          <div className="w-full max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center gap-2" key={currentIndex}>
                {/* Front Image */}
                <div className="w-full md:w-auto flex justify-center items-center transition-opacity duration-300">
                    <div className="aspect-[300/424] w-full max-w-sm">
                        <Image
                            src={currentProduct.imageSrcFront}
                            alt={currentProduct.imageAltFront}
                            width={400}
                            height={565}
                            className="object-contain w-full h-full drop-shadow-2xl"
                            data-ai-hint={currentProduct.imageHintFront}
                            priority={currentIndex === 0}
                        />
                    </div>
                </div>
                 {/* Back Image */}
                <div className="w-full md:w-auto flex justify-center items-center transition-opacity duration-300">
                    <div className="aspect-[300/424] w-full max-w-sm">
                        <Image
                            src={currentProduct.imageSrcBack}
                            alt={currentProduct.imageAltBack}
                            width={400}
                            height={565}
                            className="object-contain w-full h-full drop-shadow-2xl"
                            data-ai-hint={currentProduct.imageHintBack}
                            priority={currentIndex === 0}
                        />
                    </div>
                </div>
            </div>
          </div>
          
          <Button variant="ghost" size="icon" onClick={goToNext} className="absolute right-0 md:-right-4 lg:-right-16 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/50 hover:bg-white/80 shadow-md">
            <ChevronRight className="h-8 w-8 text-black" />
          </Button>
        </div>
      </div>
    </section>
  );
}
