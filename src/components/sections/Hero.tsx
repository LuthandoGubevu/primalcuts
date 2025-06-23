import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/crocodile.jpg"
        alt="Crocodile skin background"
        fill
        className="object-cover z-0"
        data-ai-hint="crocodile skin"
        priority
      />
      
      {/* Foreground Image container */}
      <div className="relative z-10 container mx-auto px-4 py-8 flex justify-center items-center">
        <Image
          src="/PC Elements-02-New-01.png"
          alt="Primal Cuts Banner"
          width={1200}
          height={400}
          className="w-full h-auto max-w-4xl object-contain"
          data-ai-hint="decorative banner"
        />
      </div>
    </section>
  );
}
