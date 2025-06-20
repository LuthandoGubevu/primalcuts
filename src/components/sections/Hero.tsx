import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/80 via-primary/60 to-background flex flex-col items-center justify-center text-center p-4 overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Primal Cuts background of textured meat or rustic wood"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-25"
        priority
        data-ai-hint="meat texture"
      />
      <div className="absolute inset-0 bg-black/30 z-0"></div> {/* Darkening overlay for text readability */}
      <div className="relative z-10 flex flex-col items-center">
        <div 
          className="w-32 h-32 md:w-40 md:h-40 bg-background/10 border-2 border-primary-foreground/50 rounded-full mb-6 flex items-center justify-center shadow-xl backdrop-blur-sm"
          aria-label="Primal Cuts Logo Placeholder"
        >
          {/* Placeholder for a more elaborate logo, maybe a stylized steer head or initials "PC" */}
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground opacity-80">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <path d="M12.48 12.87c.24-.49.76-.87 1.32-.95.7-.09 1.38.21 1.84.76.04.04.08.09.11.14l.19.25c.2.27.45.49.73.63s.59.22.89.16l.47-.09a.92.92 0 0 1 .84.42l.29.48c.19.32.25.71.15 1.08s-.38.69-.73.86l-.41.19c-.29.13-.52.34-.68.6s-.22.56-.15.86l.12.51a.91.91 0 0 1-.52.97l-.48.18a1.9 1.9 0 0 1-1.22-.1c-.31-.11-.59-.3-.82-.55l-.26-.28c-.22-.24-.5-.43-.81-.54s-.65-.14-.95.03l-.5.28a.96.96 0 0 1-.95-.13 1.01 1.01 0 0 1-.4-1.06l.13-.51c.09-.3.08-.61-.02-.9s-.29-.54-.53-.73l-.38-.3c-.25-.2-.44-.47-.54-.77s-.12-.62.01-.91l.21-.48a.91.91 0 0 1 .8-.53l.5-.08c.3-.05.59-.18.83-.37s.43-.44.55-.72l.08-.19C12.37 13.02 12.42 12.95 12.48 12.87z"></path>
          </svg>
        </div>
        <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-primary-foreground" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>PRIMAL CUTS</h1>
        <p className="mt-3 text-lg sm:text-xl md:text-2xl text-primary-foreground/90 font-body tracking-wider" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
          AMERICAN MADE AIR DRIED STEAK
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-sm sm:max-w-3xl w-full">
          {[
            { hint: "spicy jerky"}, 
            { hint: "original jerky"}, 
            { hint: "smoked jerky"}
          ].map((item, i) => (
            <div key={i} className="aspect-[4/3] bg-background/10 backdrop-blur-sm border border-primary-foreground/30 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
              <Image 
                src={`https://placehold.co/400x300.png`} 
                alt={`Product Snapshot ${i + 1}`} 
                width={400} 
                height={300} 
                className="object-cover w-full h-full"
                data-ai-hint={item.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
