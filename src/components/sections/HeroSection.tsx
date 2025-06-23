import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Placeholder hero image"
        fill
        className="object-cover z-0"
        data-ai-hint="hero background"
        priority
      />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wider drop-shadow-lg">
          Primal Cuts
        </h1>
      </div>
    </section>
  );
}
