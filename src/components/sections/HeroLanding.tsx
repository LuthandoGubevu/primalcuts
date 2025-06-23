import Image from 'next/image';

export default function HeroLanding() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/crocodile.jpg"
        alt="Lush, green crocodile skin texture"
        fill
        className="absolute inset-0 z-0 object-cover"
        priority
        data-ai-hint="crocodile skin texture"
      />

      {/* Centered Content */}
      <div className="relative z-20 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold font-headline text-primary-foreground">
          Primal Cuts
        </h1>
      </div>

      {/* Decorative Bottom Image */}
      <div className="absolute bottom-0 left-0 w-full z-10">
         <Image
          src="/PC-Elements-02-New-01.png"
          alt="Primal Cuts product packages"
          width={1920}
          height={1080}
          className="w-full h-auto object-contain"
          data-ai-hint="product packages"
        />
      </div>
    </section>
  );
}
