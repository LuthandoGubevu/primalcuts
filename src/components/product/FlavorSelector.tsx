'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';

const flavors = [
  { name: 'SMOKE' },
  { name: 'ORIGINAL' },
  { name: 'FIRE' }
];

export default function FlavorSelector() {
  const [selectedFlavor, setSelectedFlavor] = useState('ORIGINAL');

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="relative max-w-xl mx-auto">
          {/* The connecting line */}
          <div className="absolute top-3 left-0 right-0 h-0.5 bg-buttonCta-text" />
          
          <div className="relative flex justify-between items-start">
            {flavors.map((flavor) => (
              <div
                key={flavor.name}
                className="flex flex-col items-center gap-4 cursor-pointer group"
                onClick={() => setSelectedFlavor(flavor.name)}
              >
                <div
                  className={cn(
                    'relative w-6 h-6 rounded-full border-2 bg-background transition-colors duration-200',
                    selectedFlavor === flavor.name
                      ? 'bg-buttonCta-text border-buttonCta-text'
                      : 'border-buttonCta-text'
                  )}
                />
                <span className="font-body font-semibold text-sm uppercase tracking-wider text-black group-hover:text-primary transition-colors">
                  {flavor.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
