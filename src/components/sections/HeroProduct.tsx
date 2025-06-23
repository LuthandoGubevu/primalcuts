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

      {/* Decorative Bottom Shape */}
      <Image
        src="/PC-Elements-26.png"
        alt="Decorative bottom shape for product page"
        width={1080}
        height={400}
        className="absolute bottom-0 left-0 w-full h-auto z-10"
        data-ai-hint="decorative shape product"
      />
    </section>
  );
}
