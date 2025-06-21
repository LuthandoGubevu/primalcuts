
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import FadeInScroll from '@/components/utils/FadeInScroll';

interface FeatureItem {
  text: string;
}

interface HighlightProps {
  imageSrc: string;
  imageAlt: string;
  imageAiHint: string;
  heading?: string;
  features: FeatureItem[];
  imagePosition?: 'left' | 'right';
  className?: string;
  displayMode?: 'list' | 'paragraph';
  variant?: 'contained' | 'bleed';
}

export default function Highlight({
  imageSrc,
  imageAlt,
  imageAiHint,
  heading,
  features,
  imagePosition = 'left',
  className,
  displayMode = 'list',
  variant = 'contained',
}: HighlightProps) {
  const imageSlideDirection = imagePosition === 'left' ? 'left' : 'right';
  const textSlideDirection = imagePosition === 'left' ? 'right' : 'left';

  const formatFeatureText = (text: string) => {
    return text.replace('(', '<br />(');
  };

  const isBleedVariant = variant === 'bleed';

  return (
    <section className={cn(
      "overflow-hidden",
      !isBleedVariant && "py-16 md:py-24",
      className
    )}>
      <div className={cn(
        "flex flex-col md:flex-row",
        isBleedVariant ? "items-stretch" : "items-center gap-8 md:gap-12 lg:gap-16 container mx-auto px-4",
        imagePosition === 'right' && "md:flex-row-reverse"
      )}>
        {/* --- IMAGE --- */}
        <FadeInScroll slideDirection={imageSlideDirection} className="md:w-1/2 w-full" threshold={0.2}>
          <div className={cn(
            isBleedVariant ? "h-full" : "aspect-video md:aspect-[5/4] overflow-hidden"
          )}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={500}
              className="object-cover w-full h-full"
              data-ai-hint={imageAiHint}
            />
          </div>
        </FadeInScroll>
        
        {/* --- TEXT CONTENT --- */}
        <FadeInScroll 
          slideDirection={textSlideDirection} 
          className="md:w-1/2 w-full flex" 
          threshold={0.2} 
          delay="delay-150"
        >
          <div className={cn(
            "flex flex-col w-full justify-center text-center",
            isBleedVariant ? "p-12 md:p-16 lg:p-24" : "py-8",
            imagePosition === 'right' ? "md:items-end md:text-right" : "md:items-start md:text-left"
          )}>
            {displayMode === 'paragraph' ? (
              <div>
                {heading && (
                  <h3 className={cn(
                    "font-body text-2xl md:text-3xl font-semibold mb-4",
                    "text-accent"
                  )}>
                    {heading}
                  </h3>
                )}
                <p className="font-body text-lg md:text-xl leading-relaxed">
                  {features.map(feature => feature.text).join(' ')}
                </p>
              </div>
            ) : (
              <>
                {heading && (
                  <>
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-buttonCta-text mb-4">
                      {heading}
                    </h2>
                    <div className="w-24 h-px bg-buttonCta-text mb-8"></div>
                  </>
                )}
                <ul className="space-y-4 font-body text-lg md:text-xl leading-relaxed">
                  {features.map((feature, index) => (
                    <li key={index} className={cn(
                      "flex items-start",
                      imagePosition === 'right' && "md:flex-row-reverse"
                    )}>
                      <CheckCircle2
                        className={cn("w-6 h-6 shrink-0 mt-1 text-buttonCta-text", imagePosition === 'right' ? 'ml-3' : 'mr-3')} 
                        aria-hidden="true" 
                      />
                      <span dangerouslySetInnerHTML={{ __html: formatFeatureText(feature.text) }} />
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </FadeInScroll>
      </div>
    </section>
  );
}
