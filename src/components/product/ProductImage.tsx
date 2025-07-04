
import Image from 'next/image';

export default function ProductImage() {
  return (
    <>
      <section
        className="relative w-full"
      >
        {/* Background Image */}
        <Image
          src="/flamingo-new.jpg"
          alt="Flamingo background"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain z-0"
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
