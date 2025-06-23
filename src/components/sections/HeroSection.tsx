import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white">
      {/* Background Image */}
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Placeholder hero image"
        fill
        className="object-cover z-0"
        data-ai-hint="hero background"
        priority
      />
      
      {/* Decorative Bottom Shape Wrapper */}
      <div className="absolute bottom-0 left-0 w-full z-10" style={{ aspectRatio: '1080 / 400' }}>
        <Image
          src="/PC-Elements-02-New-01.png"
          alt="Decorative bottom shape"
          fill
          className="object-contain"
          data-ai-hint="decorative shape"
        />
      </div>

      {/* Centered Text */}
      <div className="relative z-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider drop-shadow-lg">
          Primal Cuts
        </h1>
      </div>
    </section>
  );
}
