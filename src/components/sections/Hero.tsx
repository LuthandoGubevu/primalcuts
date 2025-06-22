
import Image from 'next/image';
import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

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
  children?: ReactNode;
  className?: string;
  minHeight?: string;
  overlay?: boolean;
  icon?: ReactNode;
}

export default function Hero({
  backgroundImageSrc = "/PC-Elements-27.jpg",
  backgroundImageAlt = "People sitting around a campfire on a beach at dusk",
  backgroundImageAiHint = "campfire beach",
  logoImageSrc = "/PC-Elements-17.png",
  logoImageAlt = "Primal Cuts Biltong Logo",
  logoImageAiHint = "company logo icon",
  priorityBackgroundImage = true,
  priorityLogoImage = true,
  logoWidth = 150,
  logoHeight = 150,
  children,
  className,
  minHeight = 'min-h-[60vh] sm:min-h-[75vh] md:min-h-screen', // Responsive minHeight
  overlay = true,
  icon,
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
        {icon ? (
          <div className="mb-8">{icon}</div>
        ) : (
          <div className="h-72 w-72 bg-contain bg-no-repeat bg-center mb-8" style={{backgroundImage: "url('/PC-Elements-17.png')"}}></div>
        )}
        {children}
      </div>
    </section>
  );
}
