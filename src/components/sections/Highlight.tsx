
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
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
}: HighlightProps) {
  const imageSlideDirection = imagePosition === 'left' ? 'left' : 'right';
  const textSlideDirection = imagePosition === 'left' ? 'right' : 'left';

  return (
    <section className={cn("py-16 md:py-24 overflow-hidden", className)}> {/* Added overflow-hidden for safety with horizontal slides */}
      <div className="container mx-auto px-4">
        <div className={cn(
          "flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16",
          imagePosition === 'right' && "md:flex-row-reverse"
        )}>
          <FadeInScroll slideDirection={imageSlideDirection} className="md:w-1/2 w-full" threshold={0.2}>
            <div className="aspect-video md:aspect-[5/4] rounded-lg overflow-hidden shadow-xl group">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={600}
                height={500}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={imageAiHint}
              />
            </div>
          </FadeInScroll>
          <FadeInScroll slideDirection={textSlideDirection} className="md:w-1/2 text-center" threshold={0.2} delay="delay-150">
            <div className={cn(
              imagePosition === 'right' ? "md:text-right" : "md:text-left"
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
                <ul className="space-y-4 font-body text-lg md:text-xl leading-relaxed">
                  {features.map((feature, index) => (
                    <li key={index} className={cn(
                      "flex items-start",
                      imagePosition === 'right' ? "md:justify-end" : "md:justify-start"
                    )}>
                      <CheckCircle 
                        className="w-6 h-6 mr-3 text-accent shrink-0 mt-1" 
                        aria-hidden="true" 
                      />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </FadeInScroll>
        </div>
      </div>
    </section>
  );
}
