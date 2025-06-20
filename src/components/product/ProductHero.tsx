
import Image from 'next/image';

export default function ProductHero() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-buttonCta-text">
            ORIGINAL
          </h1>
          <p className="font-body text-xl md:text-2xl text-black/80 mt-2">
            2oz SLICED BILTONG
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
          <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
            <Image
              src="https://placehold.co/400x533.png"
              alt="Original Biltong Front Package"
              width={400}
              height={533}
              className="object-cover w-full h-full"
              data-ai-hint="product package front"
            />
          </div>
          <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
            <Image
              src="https://placehold.co/400x533.png"
              alt="Original Biltong Back Package"
              width={400}
              height={533}
              className="object-cover w-full h-full"
              data-ai-hint="product package back"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
