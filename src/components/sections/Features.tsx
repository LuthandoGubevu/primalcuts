
import Image from 'next/image';
import type { LucideProps } from 'lucide-react';
import FadeInScroll from '@/components/utils/FadeInScroll';

interface FeatureItem {
  name: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>> | string;
  description: string;
  isImage?: boolean;
}

const featuresData: FeatureItem[] = [
  { name: 'Gluten Free', icon: '/PC Elements-06.png', description: 'Product is free from gluten.', isImage: true },
  { name: 'Keto Friendly', icon: '/PC Elements-07.png', description: 'Suitable for ketogenic diets.', isImage: true },
  { name: '32G Protein', icon: '/PC Elements-08.png', description: 'Contains 32 grams of protein per serving.', isImage: true },
  { name: 'Zero Sugar', icon: '/PC Elements-09.png', description: 'Contains no added sugar.', isImage: true },
  { name: 'Whole30 Approved', icon: '/PC Elements-10.png', description: 'Approved for the Whole30 program.', isImage: true },
];

export default function Features() {
  return (
    <section className="py-12 md:py-16 bg-black text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 text-center">
          {featuresData.map((feat, index) => (
            <FadeInScroll 
              key={feat.name} 
              threshold={0.1} 
              delay={index === 0 ? '' : `delay-${Math.min(index * 100, 500)}`} 
              slideDirection="up"
            >
              <div 
                className="flex flex-col items-center space-y-2 group transform transition-transform duration-300 hover:scale-105" 
                aria-label={feat.description}
              >
                <div className="w-20 h-28 md:w-24 md:h-36 bg-transparent rounded-lg flex items-center justify-center transition-all duration-300 group-hover:bg-transparent shadow-md group-hover:shadow-lg p-2">
                  {feat.isImage && typeof feat.icon === 'string' ? (
                    <Image
                      src={feat.icon}
                      alt={`${feat.name} icon`}
                      width={60}
                      height={90}
                      className="object-contain w-full h-full"
                      data-ai-hint="feature icon"
                    />
                  ) : (
                    // Ensure feat.icon is a component here
                    typeof feat.icon !== 'string' && <feat.icon className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground transition-colors duration-300 group-hover:text-accent-foreground" aria-hidden="true" />
                  )}
                </div>
              </div>
            </FadeInScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
