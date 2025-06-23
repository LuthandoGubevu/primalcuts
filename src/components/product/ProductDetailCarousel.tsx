'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const products = [
  {
    name: 'SMOKE',
    imageSrcFront: '/Image-3.png',
    imageAltFront: 'Smoke flavor Primal Cuts package, front view',
    imageHintFront: 'product package smoke front',
    imageSrcBack: '/Image-4.png',
    imageAltBack: 'Smoke flavor Primal Cuts package, back view',
    imageHintBack: 'product package smoke back',
  },
  {
    name: 'ORIGINAL',
    imageSrcFront: '/Image-1.png',
    imageAltFront: 'Original flavor Primal Cuts package, front view',
    imageHintFront: 'product package original front',
    imageSrcBack: '/Image-2.png',
    imageAltBack: 'Original flavor Primal Cuts package, back view',
    imageHintBack: 'product package original back',
  },
  {
    name: 'FIRE',
    imageSrcFront: '/Image-5.png',
    imageAltFront: 'Fire flavor Primal Cuts package, front view',
    imageHintFront: 'product package fire front',
    imageSrcBack: '/Image-6.png',
    imageAltBack: 'Fire flavor Primal Cuts package, back view',
    imageHintBack: 'product package fire back',
  },
];

export default function ProductDetailCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1); // Default to Original

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
        
        {/* Custom Flavor Selector */}
        <div className="relative w-full max-w-xs md:max-w-sm mx-auto mb-10 md:mb-12">
          <div className="absolute top-2.5 left-0 w-full h-[2px] bg-buttonCta-text -translate-y-1/2" />
          <div className="relative flex justify-between items-start">
            {products.map((product, index) => (
              <div key={product.name} className="flex flex-col items-center text-center">
                <button
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-5 h-5 rounded-full border-2 transition-all duration-200",
                    currentIndex === index
                      ? "bg-buttonCta border-buttonCta-text transform scale-110"
                      : "bg-background border-buttonCta-text hover:bg-buttonCta/20"
                  )}
                  aria-label={`Select ${product.name} flavor`}
                />
                <span className="mt-3 text-xs md:text-sm font-bold uppercase tracking-wider text-black">
                  {product.name}
                </span>
              </div>
            ))}
          </div>
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
                            priority={true}
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
                            priority={true}
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
