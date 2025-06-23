
import Image from 'next/image';

export default function ProductImage() {
  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4 flex justify-center">
        <Image
          src="/PC Elements-26.png"
          alt="Primal Cuts Product Package"
          width={600}
          height={600}
          className="object-contain max-w-sm w-full h-auto"
          data-ai-hint="product package"
          priority
        />
      </div>
    </section>
  );
}
