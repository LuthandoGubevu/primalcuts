import React from 'react';
import Image from 'next/image';

export default function HeroLanding() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Decorative Bottom Shape Wrapper */}
      <div className="absolute bottom-0 left-0 w-full z-10" style={{ aspectRatio: '1080 / 400' }}>
        <Image
          src="/PC-Elements-02-New-01.png"
          alt="Decorative bottom shape"
          fill
          className="object-contain"
          data-ai-hint="decorative shape"
        />
      </div>
    </section>
  );
}
