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
  backgroundImageSrc = "/PC-Elements-16.jpg",
  backgroundImageAlt = "People sitting around a campfire on a beach at dusk",
  backgroundImageAiHint = "campfire beach",
  logoImageSrc = "https://placehold.co/300x300.png",
  logoImageAlt = "Logo placeholder",
  logoImageAiHint = "company logo",
  priorityBackgroundImage = true,
  priorityLogoImage = true,
  logoWidth = 300,
  logoHeight = 300,
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
      
    </section>
  );
}
