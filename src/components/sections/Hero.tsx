import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-background flex flex-col items-center justify-center text-center p-4 overflow-hidden">
      <Image
        src="/PC-Elements-16.jpg"
        alt="Primal Cuts background of textured meat or rustic wood"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
        priority
        data-ai-hint="meat texture"
      />
      {/* <div className="absolute inset-0 bg-gradient-to-b from-primary/50 to-transparent z-0"></div> */}
      {/* <div className="absolute inset-0 bg-black/20 z-0"></div> */}
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/Primal-Logo.png"
          alt="Primal Cuts Logo"
          width={400} // You can adjust this
          height={200} // You can adjust this
          className="mb-8" // Added some margin for spacing
          data-ai-hint="company logo"
          priority
        />
        {/* The logo image placeholder has been removed */}
      </div>
    </section>
  );
}
