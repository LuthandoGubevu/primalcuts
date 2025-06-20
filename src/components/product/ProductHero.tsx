
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
  const [currentIndex, setCurrentIndex] = useState(0); // Index of the first image in the pair

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      // If prevIndex is 0, wrap to the start of the last possible pair (length - 2).
      // Otherwise, decrement by 1.
      prevIndex === 0 ? Math.max(0, placeholderImages.length - 2) : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      // If prevIndex is at or beyond the start of the last pair (length - 2), wrap to 0.
      // Otherwise, increment by 1.
      prevIndex >= Math.max(0, placeholderImages.length - 2) ? 0 : prevIndex + 1
    );
  };

  // Ensure we have at least one image to display
  if (placeholderImages.length === 0) {
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
          <div className="text-center text-black/50">No images to display.</div>
        </div>
      </section>
    );
  }


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
        <div className="relative max-w-3xl mx-auto"> {/* Increased max-width */}
          <div className="flex gap-4 justify-center"> {/* Flex container for two images */}
            {/* Left Image */}
            <div className="w-1/2 aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <Image
                key={placeholderImages[currentIndex].src + '-1'}
                src={placeholderImages[currentIndex].src}
                alt={placeholderImages[currentIndex].alt}
                width={600} // Original dimensions for quality hint
                height={800}
                className="object-cover w-full h-full"
                data-ai-hint={placeholderImages[currentIndex].hint}
                priority={currentIndex === 0} // Prioritize loading the first image of the initial pair
              />
            </div>

            {/* Right Image - render if available */}
            {placeholderImages.length > 1 && placeholderImages[currentIndex + 1] && (
              <div className="w-1/2 aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <Image
                  key={placeholderImages[currentIndex + 1].src + '-2'}
                  src={placeholderImages[currentIndex + 1].src}
                  alt={placeholderImages[currentIndex + 1].alt}
                  width={600}
                  height={800}
                  className="object-cover w-full h-full"
                  data-ai-hint={placeholderImages[currentIndex + 1].hint}
                  priority={currentIndex === 0} // Prioritize loading the second image of the initial pair
                />
              </div>
            )}
             {/* Fallback for single image or last image if odd number */}
            {placeholderImages.length === 1 || (placeholderImages.length % 2 !== 0 && currentIndex === placeholderImages.length -1) && placeholderImages.length > 1 && !placeholderImages[currentIndex+1] && (
                 <div className="w-1/2 aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-lg flex items-center justify-center text-gray-400">
                    {/* Optional: Placeholder for the second slot if only one image is left and total is odd */}
                 </div>
            )}
          </div>

          {/* Navigation Buttons (only if more than one pair can be shown) */}
          {placeholderImages.length > 2 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 left-[-20px] sm:left-[-30px] md:-left-14 transform -translate-y-1/2 bg-white/80 hover:bg-white border-gray-300 text-black rounded-full shadow-md"
                onClick={goToPrevious}
                aria-label="Previous Images"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute top-1/2 right-[-20px] sm:right-[-30px] md:-right-14 transform -translate-y-1/2 bg-white/80 hover:bg-white border-gray-300 text-black rounded-full shadow-md"
                onClick={goToNext}
                aria-label="Next Images"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
