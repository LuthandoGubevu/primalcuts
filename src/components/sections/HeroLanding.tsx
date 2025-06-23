import React from 'react';

export default function HeroLanding() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Placeholder */}
      <div
        className="absolute inset-0 z-0 bg-gray-400"
        data-ai-hint="background image placeholder 1920x1080"
        aria-hidden="true"
      ></div>

      {/* Decorative Bottom Shape Placeholder */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-10 bg-gray-600"
        data-ai-hint="decorative bottom shape placeholder 1080px wide"
        aria-hidden="true"
      ></div>

      {/* Centered Content */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-bold font-headline text-white">
          PRIMAL CUTS
        </h1>
      </div>
    </section>
  );
}
