import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureItem {
  text: string;
}

interface HighlightProps {
  imageSrc: string;
  imageAlt: string;
  imageAiHint: string;
  features: FeatureItem[];
  imagePosition?: 'left' | 'right';
  className?: string;
}

export default function Highlight({
  imageSrc,
  imageAlt,
  imageAiHint,
  features,
  imagePosition = 'left', // Default to 'left'
  className,
}: HighlightProps) {
  return (
    <section className={cn("py-16 md:py-24 bg-background", className)}>
      <div className="container mx-auto px-4">
        <div className={cn(
          "flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16",
          imagePosition === 'right' && "md:flex-row-reverse" // Reverses order of image and text divs on md screens
        )}>
          {/* Image Div */}
          <div className="md:w-1/2 w-full aspect-video md:aspect-[5/4] rounded-lg overflow-hidden shadow-xl group">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={500}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              data-ai-hint={imageAiHint}
            />
          </div>
          {/* Text Div */}
          <div className={cn(
            "md:w-1/2 text-center",
            // If image is on the right, the text block is on the left, so its content aligns right on md screens.
            // If image is on the left (default), text block is on the right, so its content aligns left on md screens.
            imagePosition === 'right' ? "md:text-right" : "md:text-left"
          )}>
            <ul className="space-y-4 font-body text-foreground/80 text-lg md:text-xl leading-relaxed">
              {features.map((feature, index) => (
                <li key={index} className={cn(
                  "flex items-start",
                  // If the text block is aligned right (md:text-right), 
                  // then justify the content of the li to the end (right) on md screens.
                  imagePosition === 'right' ? "md:justify-end" : "md:justify-start"
                )}>
                  <CheckCircle 
                    className="w-6 h-6 mr-3 text-primary shrink-0 mt-1" // Icon always to the left of text
                    aria-hidden="true" 
                  />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
