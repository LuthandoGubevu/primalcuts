import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <Image
        src="/crocodile-new.jpg"
        alt="Crocodile skin background"
        width={1920}
        height={1080}
        className="w-full h-auto object-contain z-0"
        data-ai-hint="crocodile skin"
        priority
      />
      
      {/* Foreground Image container, absolutely positioned at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <Image
          src="/PC Elements-02-New-01.png"
          alt="Primal Cuts Banner"
          width={1200}
          height={400}
          className="w-full h-auto"
          data-ai-hint="decorative banner"
        />
      </div>
    </section>
  );
}
