import React from 'react';
import Image from 'next/image';

export default function HeroLanding() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Decorative Bottom Shape */}
      <Image
        src="/PC-Elements-02-New-01.png"
        alt="Decorative bottom shape"
        width={1080}
        height={400}
        className="absolute bottom-0 left-0 w-full h-auto z-10"
        data-ai-hint="decorative shape"
      />
    </section>
  );
}
