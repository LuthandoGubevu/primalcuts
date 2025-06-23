
import Image from 'next/image';

export default function ProductImage() {
  return (
    <section className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/flamingo.jpg"
        alt="Flamingo background"
        fill
        className="object-cover z-0"
        data-ai-hint="flamingo background"
        priority
      />
      
      {/* Foreground Image container */}
      <div className="relative z-10 w-full flex justify-center items-center">
        <Image
          src="/PC Elements-26.png"
          alt="Primal Cuts Product Package"
          width={600}
          height={600}
          className="object-contain max-w-sm w-full h-auto"
          data-ai-hint="product package"
        />
      </div>
    </section>
  );
}
