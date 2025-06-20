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
          imagePosition === 'right' && "md:flex-row-reverse"
        )}>
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
          <div className={cn(
            "md:w-1/2 text-center",
            imagePosition === 'right' ? "md:text-right" : "md:text-left"
          )}>
            <ul className="space-y-4 font-body text-lg md:text-xl leading-relaxed">
              {features.map((feature, index) => (
                <li key={index} className={cn(
                  "flex items-start",
                  imagePosition === 'right' ? "md:justify-end" : "md:justify-start"
                )}>
                  <CheckCircle 
                    className="w-6 h-6 mr-3 text-primary shrink-0 mt-1"
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
