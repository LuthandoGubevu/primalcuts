import Image from 'next/image';
import { WheatOff, Leaf, Beef, VenetianMask, ShieldCheck, type LucideProps } from 'lucide-react'; // Changed CandyOff to VenetianMask (more abstract for 'zero')

interface FeatureItem {
  name: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>> | string; // Allow string for image paths
  description: string;
  isImage?: boolean; // Flag to differentiate
}

const featuresData: FeatureItem[] = [
  { name: 'Gluten Free', icon: '/PC-Elements-06.png', description: 'Product is free from gluten.', isImage: true },
  { name: 'Keto Friendly', icon: Leaf, description: 'Suitable for ketogenic diets.' }, // Leaf as a more general 'natural/diet' icon
  { name: '32G Protein', icon: Beef, description: 'Contains 32 grams of protein per serving.' },
  { name: 'Zero Sugar', icon: VenetianMask, description: 'Contains no added sugar.' }, // VenetianMask as abstract representation of 'Zero' or 'No'
  { name: 'Whole30 Approved', icon: ShieldCheck, description: 'Approved for the Whole30 program.' },
];

export default function Features() {
  return (
    <section className="py-12 md:py-16 bg-black text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 text-center">
          {featuresData.map((feat) => (
            <div key={feat.name} className="flex flex-col items-center space-y-3 group transform transition-transform duration-300 hover:scale-105">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary-foreground/10 border-2 border-primary-foreground/30 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-accent group-hover:border-accent shadow-md group-hover:shadow-lg p-2">
                {feat.isImage && typeof feat.icon === 'string' ? (
                  <Image
                    src={feat.icon}
                    alt={`${feat.name} icon`}
                    width={60} // Adjust size as needed
                    height={60} // Adjust size as needed
                    className="object-contain"
                    data-ai-hint="feature icon"
                  />
                ) : (
                  <feat.icon className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground transition-colors duration-300 group-hover:text-accent-foreground" aria-hidden="true" />
                )}
              </div>
              <span className="text-sm md:text-base font-body font-medium tracking-wide" aria-label={feat.description}>{feat.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
