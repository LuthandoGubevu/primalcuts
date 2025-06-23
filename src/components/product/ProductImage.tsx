
import Image from 'next/image';

export default function ProductImage() {
  return (
    <section className="relative h-[400px] md:h-[500px] lg:h-[1080px] w-full">
      {/* Background Image */}
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Woman practicing yoga near a window and a heron standing in water"
        fill
        className="object-cover z-0"
        data-ai-hint="yoga heron"
        priority
      />
      
      {/* Foreground Image container, absolutely positioned at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <Image
          src="/PC-Elements-25.png"
          alt="Primal Cuts Product Packages"
          width={600}
          height={600}
          className="object-contain w-full h-auto"
          data-ai-hint="product packages collage"
        />
      </div>
    </section>
  );
}
