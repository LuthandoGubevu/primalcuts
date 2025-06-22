import Image from 'next/image';

export default function ImageGallery() {
  const images = [
    { id: 1, name: 'SMOKE', src: '/Smoke-Package.png', alt: 'Smoke flavor Primal Cuts package', hint: 'product package smoke' },
    { id: 2, name: 'ORIGINAL', src: '/Original-Package.png', alt: 'Original flavor Primal Cuts package', hint: 'product package original' },
    { id: 3, name: 'FIRE', src: '/Red-Package.png', alt: 'Fire flavor Primal Cuts package', hint: 'product package fire' },
  ];

  return (
    <section className="py-12 md:py-16 bg-[linear-gradient(to_bottom,hsl(var(--button-cta-background))_50%,hsl(var(--background))_50%)]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white">
            American Made
          </h2>
          <p className="font-body text-sm sm:text-base uppercase tracking-wider mt-1 sm:mt-2 text-black">
            Air Dried Steak
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-10 md:gap-y-12">
          {images.map((image) => (
            <div 
              key={image.id} 
              className="flex flex-col items-center group transform transition-transform duration-300 hover:scale-105"
            >
              <div className="aspect-[300/424] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={424}
                  className="object-cover w-full h-full"
                  data-ai-hint={image.hint}
                />
              </div>
              <p className="mt-4 font-body font-bold text-xl uppercase text-foreground text-center">
                {image.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
