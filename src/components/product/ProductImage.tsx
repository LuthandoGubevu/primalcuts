
import Image from 'next/image';

export default function ProductImage() {
  return (
    <>
      <svg className="w-0 h-0 absolute">
        <defs>
          <clipPath id="hero-clip" clipPathUnits="objectBoundingBox">
            <path d="M0,0.2 C0.16,0.05, 0.33,0.05, 0.5,0.2 C0.66,0.35, 0.83,0.35, 1,0.2 V1 H0 Z" />
          </clipPath>
        </defs>
      </svg>
      <section 
        className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] w-full"
        style={{ clipPath: 'url(#hero-clip)'}}
      >
        <div className="flex h-full">
          {/* Left Image */}
          <div className="w-1/2 h-full relative">
            <Image
              src="https://placehold.co/800x600.png"
              alt="Woman doing yoga"
              fill
              className="object-cover object-center"
              data-ai-hint="woman yoga"
              priority
            />
          </div>
          {/* Right Image */}
          <div className="w-1/2 h-full relative">
            <Image
              src="https://placehold.co/800x600.png"
              alt="Heron in water"
              fill
              className="object-cover object-center"
              data-ai-hint="heron water"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
