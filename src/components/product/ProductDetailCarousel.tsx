
'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Product {
  name: string;
  description: string;
  imageSrcFront: string;
  imageAltFront: string;
  imageHintFront: string;
  imageSrcBack: string;
  imageAltBack: string;
  imageHintBack: string;
}

interface ProductDetailCarouselProps {
  products: Product[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export default function ProductDetailCarousel({ products, currentIndex, setCurrentIndex }: ProductDetailCarouselProps) {
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
    <section className="pb-12 md:pb-20 bg-background">
      <div className="container mx-auto px-4">
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
