
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
        className="relative h-[1080px] w-full"
        style={{ clipPath: 'url(#hero-bottom-clip)' }}
      >
        {/* Background Image */}
        <Image
          src="/flamingo.jpg"
          alt="Flamingo background"
          fill
          className="object-cover object-center z-0"
          data-ai-hint="flamingo nature"
          priority
        />
        
        {/* Foreground Image container */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <Image
            src="/PC Elements-26.png"
            alt="Primal Cuts Product Display"
            width={1200}
            height={400}
            className="w-full h-auto object-contain"
            data-ai-hint="product packages banner"
          />
        </div>
      </section>
    </>
  );
}
