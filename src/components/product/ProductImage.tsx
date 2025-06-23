
import Image from 'next/image';

export default function ProductImage() {
  return (
    <>
      <section
        className="relative h-[1080px] w-full"
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
