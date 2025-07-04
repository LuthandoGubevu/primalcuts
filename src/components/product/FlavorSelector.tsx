'use client';

import { cn } from '@/lib/utils';

const products = [
  { name: 'SMOKE' },
  { name: 'FIRE' },
  { name: 'ORIGINAL' },
];

interface FlavorSelectorProps {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
}

export default function FlavorSelector({ currentIndex, setCurrentIndex }: FlavorSelectorProps) {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="relative">
        {/* Full-width line */}
        <div className="absolute top-2.5 left-0 w-full h-[2px] bg-buttonCta-text -translate-y-1/2" />
        
        {/* Centered content that sits on top of the line */}
        <div className="relative container mx-auto px-4">
          <div className="w-full max-w-xs md:max-w-sm mx-auto">
            <div className="flex justify-between items-start">
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
        </div>
      </div>
    </section>
  );
}
