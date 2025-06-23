import React from 'react';
import Image from 'next/image';

export default function HeroLanding() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Layer 1 (Bottom) */}
      <Image
        src="/crocodile.jpg"
        alt="Lush, green jungle background with a crocodile"
        fill
        className="object-cover"
        data-ai-hint="jungle crocodile"
        priority
      />

      {/* Decorative Bottom Shape - Layer 2 (Top) */}
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full">
        <Image
          src="/PC-Elements-02-New-01.png"
          alt="Decorative bottom shape"
          width={1080}
          height={400}
          className="h-auto w-full"
          data-ai-hint="decorative shape"
        />
      </div>
    </section>
  );
}
