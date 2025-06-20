
'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const placeholderImages = [
  { src: 'https://placehold.co/600x800.png', alt: 'Product Image 1 - Front View', hint: 'product front' },
  { src: 'https://placehold.co/600x800.png', alt: 'Product Image 2 - Back View', hint: 'product back' },
  { src: 'https://placehold.co/600x800.png', alt: 'Product Image 3 - Angled View', hint: 'product angle' },
  { src: 'https://placehold.co/600x800.png', alt: 'Product Image 4 - Lifestyle', hint: 'product lifestyle' },
  { src: 'https://placehold.co/600x800.png', alt: 'Product Image 5 - Close-up', hint: 'product closeup' },
  { src: 'https://placehold.co/600x800.png', alt: 'Product Image 6 - Texture Detail', hint: 'product texture' },
];

export default function ProductHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? placeholderImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === placeholderImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-buttonCta-text">
            ORIGINAL
          </h1>
          <p className="font-body text-xl md:text-2xl text-black/80 mt-2">
            2oz SLICED BILTONG
          </p>
        </div>

        {/* Image Slider */}
        <div className="relative max-w-xl mx-auto"> {/* Adjusted max-width for better visual balance */}
          <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
            {placeholderImages.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={600}
                height={800}
                className={`object-cover w-full h-full transition-opacity duration-500 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0 absolute'}`}
                data-ai-hint={image.hint}
                priority={index === 0} // Prioritize loading the first image
              />
            ))}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-1 sm:left-2 md:-left-10 transform -translate-y-1/2 bg-white/80 hover:bg-white border-gray-300 text-black rounded-full shadow-md"
            onClick={goToPrevious}
            aria-label="Previous Image"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-1 sm:right-2 md:-right-10 transform -translate-y-1/2 bg-white/80 hover:bg-white border-gray-300 text-black rounded-full shadow-md"
            onClick={goToNext}
            aria-label="Next Image"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
