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

      {/* Centered Content (Optional) - now on a lower layer */}
      <div className="relative z-10 text-center p-4">
        {/* You can add text or a CTA button here */}
      </div>

      {/* Decorative Bottom Image - now on the top layer */}
      <div className="absolute bottom-0 left-0 w-full z-20">
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
