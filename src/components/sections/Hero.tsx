import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HeroProps {
  backgroundImageSrc?: string;
  backgroundImageAlt?: string;
  backgroundImageAiHint?: string;
  logoImageSrc?: string;
  logoImageAlt?: string;
  logoImageAiHint?: string;
  priorityBackgroundImage?: boolean;
  priorityLogoImage?: boolean;
  logoWidth?: number;
  logoHeight?: number;
  children?: React.ReactNode;
  className?: string;
  minHeight?: string;
}

export default function Hero({
  backgroundImageSrc = "/PC-Elements-16.jpg",
  backgroundImageAlt = "Primal Cuts background of textured meat or rustic wood",
  backgroundImageAiHint = "meat texture",
  logoImageSrc = "/Primal-Logo.png",
  logoImageAlt = "Primal Cuts Logo",
  logoImageAiHint = "company logo",
  priorityBackgroundImage = true,
  priorityLogoImage = true,
  logoWidth = 300,
  logoHeight = 150,
  children,
  className,
  minHeight = 'min-h-[60vh] sm:min-h-[75vh] md:min-h-screen', // Responsive minHeight
}: HeroProps) {
  return (
    <section
      className={cn(
        'relative bg-background flex flex-col items-center justify-center text-center p-4 overflow-hidden',
        minHeight,
        className
      )}
    >
      <Image
        src={backgroundImageSrc}
        alt={backgroundImageAlt}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
        priority={priorityBackgroundImage}
        data-ai-hint={backgroundImageAiHint}
      />
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src={logoImageSrc}
          alt={logoImageAlt}
          width={logoWidth}
          height={logoHeight}
          className="mb-8"
          data-ai-hint={logoImageAiHint}
          priority={priorityLogoImage}
        />
        {children}
      </div>

      {/* Golden Curve Element at Bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[15vw] max-h-[200px] z-5 pointer-events-none">
        <Image
          src="/assets/PC-Elements-02.png"
          alt="Golden decorative curve"
          layout="fill"
          objectFit="fill"
          data-ai-hint="decorative curve gold"
        />
      </div>
    </section>
  );
}
