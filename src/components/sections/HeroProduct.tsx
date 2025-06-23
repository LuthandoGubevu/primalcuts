import Image from 'next/image';

export default function HeroProduct() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/flamingo.jpg"
        alt="Vibrant pink flamingo feathers"
        fill
        className="absolute inset-0 z-0 object-cover"
        priority
        data-ai-hint="flamingo feathers"
      />

      {/* Decorative Bottom Image */}
      <div className="absolute bottom-0 left-0 w-full z-10">
         <Image
          src="/PC-Elements-26.png"
          alt="Primal Cuts single product package"
          width={100}
          height={100}
          className="w-full h-auto object-contain"
          data-ai-hint="product package"
        />
      </div>
    </section>
  );
}
