
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const products = [
  {
    name: 'ORIGINAL',
    subtitle: '2OZ SLICED BILTONG',
    imageSrc: '/Original-Package.png',
    imageAlt: 'Original flavor Primal Cuts package',
    imageHint: 'product package original',
    whyBiltong: 'Because we believe that less is more, and the only ingredients we have used in this bag are ingredients that we feed our family and children. So from our family to yours, eat well.',
    signature: '- Zan, Haley, TK and Max',
    ingredients: [
      'Grass-Fed Beef',
      'Red Wine Vinegar',
      'Himalayan Salt',
      'Coriander',
      'Black Pepper',
      'Garlic Powder',
      'Onion Powder',
      'Paprika',
    ],
  },
  {
    name: 'SMOKE',
    subtitle: '2OZ SLICED BILTONG',
    imageSrc: '/Smoke-Package.png',
    imageAlt: 'Smoke flavor Primal Cuts package',
    imageHint: 'product package smoke',
    whyBiltong: 'Experience a subtle, savory smoke flavor that complements the rich taste of our premium, air-dried beef. A classic choice for a reason.',
    signature: '- The Primal Cuts Team',
    ingredients: [
      'Grass-Fed Beef',
      'Red Wine Vinegar',
      'Himalayan Salt',
      'Coriander',
      'Natural Smoke Flavor',
      'Black Pepper',
      'Garlic Powder',
      'Onion Powder',
    ],
  },
  {
    name: 'FIRE',
    subtitle: '2OZ SLICED BILTONG',
    imageSrc: '/Red-Package.png',
    imageAlt: 'Fire flavor Primal Cuts package',
    imageHint: 'product package fire',
    whyBiltong: 'For those who like a little heat. We\'ve added a kick of chili and cayenne to our traditional recipe for a bold, spicy finish that builds with every bite.',
    signature: '- The Primal Cuts Team',
    ingredients: [
      'Grass-Fed Beef',
      'Red Wine Vinegar',
      'Himalayan Salt',
      'Chili Powder',
      'Cayenne Pepper',
      'Coriander',
      'Black Pepper',
      'Garlic Powder',
      'Onion Powder',
    ],
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
           <Button variant="ghost" size="icon" onClick={goToPrevious} className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/50 hover:bg-white/80 shadow-md">
            <ChevronLeft className="h-8 w-8 text-black" />
          </Button>

          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="w-full flex justify-center items-center">
                    <div className="aspect-[300/424] w-full max-w-sm transition-opacity duration-300" key={currentIndex}>
                        <Image
                            src={currentProduct.imageSrc}
                            alt={currentProduct.imageAlt}
                            width={400}
                            height={565}
                            className="object-contain w-full h-full drop-shadow-2xl"
                            data-ai-hint={currentProduct.imageHint}
                        />
                    </div>
                </div>

                <div className="space-y-8 text-black/90 text-left">
                    <div className="border-l-4 border-buttonCta-text pl-4">
                        <h3 className="font-headline text-xl font-bold text-black mb-2 uppercase">Why Our Biltong?</h3>
                        <p className="font-body text-base leading-relaxed">
                            {currentProduct.whyBiltong}
                        </p>
                        <p className="font-body text-base leading-relaxed mt-2 italic">{currentProduct.signature}</p>
                    </div>
                    <div className="border-l-4 border-buttonCta-text pl-4">
                        <h3 className="font-headline text-xl font-bold text-black mb-2 uppercase">Ingredients:</h3>
                        <p className="font-body text-base leading-relaxed">
                            {currentProduct.ingredients.join(', ')}.
                        </p>
                    </div>
                </div>
            </div>
            <Separator className="mt-12 md:mt-16 bg-buttonCta-text/50 h-[1px]" />
          </div>
          
          <Button variant="ghost" size="icon" onClick={goToNext} className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white/50 hover:bg-white/80 shadow-md">
            <ChevronRight className="h-8 w-8 text-black" />
          </Button>
        </div>
      </div>
    </section>
  );
}
