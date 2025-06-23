import React from 'react';
import Image from 'next/image';

export default function HeroLanding() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Decorative Bottom Shape - z-10 */}
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
