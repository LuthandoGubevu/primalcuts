import React from 'react';
import Image from 'next/image';

export default function HeroProduct() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Layer 1 (Bottom) */}
      <Image
        src="/flamingo.jpg"
        alt="Flamingo in a tropical setting"
        fill
        className="object-cover"
        data-ai-hint="flamingo tropical"
        priority
      />

      {/* Decorative Bottom Shape - Layer 2 (Top) */}
      <div className="absolute bottom-0 left-0 right-0 z-10 w-full">
        <Image
          src="/PC-Elements-26.png"
          alt="Decorative bottom shape for product page"
          width={1080}
          height={400}
          className="h-auto w-full"
          data-ai-hint="decorative shape product"
        />
      </div>
    </section>
  );
}
