import React from 'react';
import Image from 'next/image';

export default function HeroLanding() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image - bottom layer */}
      <Image
        src="/crocodile.jpg"
        alt="Lush, green jungle background with a crocodile"
        fill
        className="object-cover z-0"
        data-ai-hint="jungle crocodile"
        priority
      />

      {/* Decorative Bottom Shape - top layer */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-32 w-full md:h-64 lg:h-96">
        <Image
          src="/PC-Elements-02-New-01.png"
          alt="Decorative bottom shape"
          fill
          className="object-contain object-bottom"
          data-ai-hint="decorative shape"
        />
      </div>
    </section>
  );
}
