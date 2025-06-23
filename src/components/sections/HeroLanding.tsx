import React from 'react';
import Image from 'next/image';

export default function HeroLanding() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Placeholder */}
      <div
        className="absolute inset-0 z-0 bg-gray-400"
        data-ai-hint="background image placeholder 1920x1080"
        aria-hidden="true"
      ></div>

      {/* Decorative Bottom Shape */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 md:h-64 lg:h-96 z-10"
        aria-hidden="true"
      >
        <Image
          src="/PC Elements-02-New-01.png"
          alt="Decorative bottom shape"
          fill
          className="object-contain object-bottom"
          data-ai-hint="decorative shape"
        />
      </div>

      {/* Centered Content */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-bold font-headline text-white">
          PRIMAL CUTS
        </h1>
      </div>
    </section>
  );
}
