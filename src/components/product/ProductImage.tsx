
import Image from 'next/image';

export default function ProductImage() {
  return (
    <>
      <svg className="w-0 h-0 absolute">
        <defs>
          <clipPath id="hero-bottom-clip" clipPathUnits="objectBoundingBox">
            <path d="M0,0.8 C0.16,0.95 0.33,0.95 0.5,0.8 C0.66,0.65 0.83,0.65 1,0.8 V0 H0 Z" />
          </clipPath>
        </defs>
      </svg>
      <section
        className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] w-full"
        style={{ clipPath: 'url(#hero-bottom-clip)' }}
      >
        <div className="h-full w-full relative">
          <Image
            src="/black-pepper.jpg"
            alt="Chef preparing seasoned meat"
            fill
            className="object-cover object-center"
            data-ai-hint="chef seasoning meat"
            priority
          />
        </div>
      </section>
    </>
  );
}
