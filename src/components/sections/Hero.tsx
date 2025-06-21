
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
  overlay?: boolean;
}

export default function Hero({
  backgroundImageSrc = "/PC-Elements-27.jpg",
  backgroundImageAlt = "People sitting around a campfire on a beach at dusk",
  backgroundImageAiHint = "campfire beach",
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
  overlay = false,
}: HeroProps) {
  return (
    <section
      className={cn(
        'relative bg-background flex flex-col items-center justify-center text-center p-4',
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
      {overlay && <div className="absolute inset-0 z-10 bg-black/40" />}
      <div className="relative z-20 flex flex-col items-center">
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

      {/* Decorative Elements at Bottom */}
      <div className="absolute bottom-0 left-0 w-full z-20 flex flex-col items-center pointer-events-none">
        <Image
          src="/PC-Elements-21.png"
          alt="Decorative element"
          width={1920}
          height={120}
          className="w-full h-auto"
          data-ai-hint="decorative element"
        />
        <Image
          src="/PC-Elements-25.png"
          alt="Decorative element"
          width={1920}
          height={120}
          className="w-full h-auto -mt-16"
          data-ai-hint="decorative element"
        />
      </div>
    </section>
  );
}
