import React from 'react';

export default function HeroProduct() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Placeholder */}
      <div
        className="absolute inset-0 z-0 bg-gray-500"
        data-ai-hint="product page background image placeholder"
        aria-hidden="true"
      ></div>

      {/* Decorative Bottom Shape Placeholder */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-10 bg-gray-700"
        data-ai-hint="product page decorative bottom shape placeholder"
        aria-hidden="true"
      ></div>

      {/* Centered Content */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-bold font-headline text-white">
          PRODUCT HERO
        </h1>
      </div>
    </section>
  );
}
