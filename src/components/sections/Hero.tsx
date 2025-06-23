
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
  logoClassName?: string;
  children?: ReactNode;
  className?: string;
  minHeight?: string;
  overlay?: boolean;
  icon?: ReactNode;
}

export default function Hero({
  backgroundImageSrc = "/PC Elements-16.jpg",
  backgroundImageAlt = "People sitting around a campfire on a beach at dusk",
  backgroundImageAiHint = "campfire beach",
  logoImageSrc,
  logoImageAlt = "Logo placeholder",
  logoImageAiHint = "company logo",
  priorityBackgroundImage = true,
  priorityLogoImage = true,
  logoWidth = 300,
  logoHeight = 300,
  logoClassName,
  children,
  className,
  minHeight = 'min-h-[60vh] sm:min-h-[75vh] md:min-h-screen', // Responsive minHeight
  overlay = true,
  icon,
}: HeroProps) {
  return (
    <section
      className={cn(
        'relative bg-background flex flex-col items-center justify-center text-center',
        minHeight,
        className
      )}
    >
      <Image
        src={backgroundImageSrc}
        alt={backgroundImageAlt}
        fill
        className="absolute inset-0 z-0 object-cover"
        priority={priorityBackgroundImage}
        data-ai-hint={backgroundImageAiHint}
      />
      {overlay && <div className="absolute inset-0 z-10 bg-black/40" />}
      
      <div className="relative z-20 flex w-full flex-col items-center">
        {logoImageSrc && (
          <div
            className="mb-4 flex items-center justify-center"
          >
            <Image
              src={logoImageSrc}
              alt={logoImageAlt}
              width={logoWidth}
              height={logoHeight}
              priority={priorityLogoImage}
              className={cn("object-contain", logoClassName)}
              data-ai-hint={logoImageAiHint}
            />
          </div>
        )}
        {icon && <div className="mb-4">{icon}</div>}
        {children}
      </div>
    </section>
  );
}
