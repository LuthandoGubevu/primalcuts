import React from 'react';
import Image from 'next/image';

export default function HeroLanding() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/crocodile.jpg"
        alt="Lush, green jungle background with a crocodile"
        fill
        className="object-cover z-0"
        data-ai-hint="jungle crocodile"
        priority
      />

      {/* Decorative Bottom Shape */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 md:h-64 lg:h-96 z-20"
        aria-hidden="true"
      >
        <Image
          src="/PC-Elements-02-New-01.png"
          alt="Decorative bottom shape"
          fill
          className="object-contain object-bottom"
          data-ai-hint="decorative shape"
        />
      </div>

      {/* Centered Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-bold font-headline text-white">
          PRIMAL CUTS
        </h1>
      </div>
    </section>
  );
}
