import React from 'react';

export default function HeroProduct() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Placeholder - bottom layer */}
      <div
        className="absolute inset-0 z-0 bg-gray-500"
        data-ai-hint="product page background image placeholder"
        aria-hidden="true"
      ></div>

      {/* Decorative Bottom Shape Placeholder - top layer */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 h-40 w-full bg-gray-700"
        data-ai-hint="product page decorative bottom shape placeholder"
        aria-hidden="true"
      ></div>
    </section>
  );
}
