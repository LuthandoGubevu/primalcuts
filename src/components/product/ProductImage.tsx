
import Image from 'next/image';

export default function ProductImage() {
  return (
    <section className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
      {/* Background Image */}
      <Image
        src="/flamingo.jpg"
        alt="Flamingo background"
        fill
        className="object-cover z-0"
        data-ai-hint="flamingo background"
        priority
      />
      
      {/* Foreground Image container, absolutely positioned at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <Image
          src="/PC Elements-26.png"
          alt="Primal Cuts Product Package"
          width={600}
          height={600}
          className="object-contain w-full h-auto"
          data-ai-hint="product package"
        />
      </div>
    </section>
  );
}
