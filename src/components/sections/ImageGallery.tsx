import Image from 'next/image';

export default function ImageGallery() {
  const images = [
    { id: 1, src: '/Smoke-Package.png', alt: 'Smoke flavor Primal Cuts package', hint: 'product package smoke' },
    { id: 2, src: 'https://placehold.co/300x424.png', alt: 'Gallery image 2', hint: 'action shot' },
    { id: 3, src: 'https://placehold.co/300x424.png', alt: 'Gallery image 3', hint: 'flavor ingredients' },
  ];

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {images.map((image) => (
            <div key={image.id} className="aspect-[300/424] w-full rounded-lg overflow-hidden shadow-lg group transform transition-transform duration-300 hover:scale-105">
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={424}
                className="object-cover w-full h-full"
                data-ai-hint={image.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
