import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-black">
      <div className="container mx-auto px-4 py-8 flex justify-center items-center">
        <Image
          src="/PC-Elements-02-New-01.png"
          alt="Primal Cuts Banner"
          width={1200}
          height={400}
          className="w-full h-auto object-contain"
          data-ai-hint="decorative banner"
          priority
        />
      </div>
    </section>
  );
}
