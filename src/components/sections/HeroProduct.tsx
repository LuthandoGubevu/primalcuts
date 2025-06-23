import React from 'react';
import Image from 'next/image';

export default function HeroProduct() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/flamingo.jpg"
        alt="Flamingo in a tropical setting"
        fill
        className="object-cover z-0"
        data-ai-hint="flamingo tropical"
        priority
      />

      {/* Decorative Bottom Shape Wrapper */}
      <div className="absolute bottom-0 left-0 w-full z-10" style={{ aspectRatio: '1080 / 400' }}>
        <Image
          src="/PC-Elements-26.png"
          alt="Decorative bottom shape for product page"
          fill
          className="object-contain"
          data-ai-hint="decorative shape product"
        />
      </div>
    </section>
  );
}
