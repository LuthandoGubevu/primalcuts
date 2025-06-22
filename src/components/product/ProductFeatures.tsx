
import Image from 'next/image';

interface FeatureItem {
  name: string;
  icon: string; 
}

const featuresData: FeatureItem[] = [
  { name: 'Gluten Free', icon: '/PC-Elements-06.png' },
  { name: 'Keto Friendly', icon: '/PC-Elements-07.png' },
  { name: '32G Protein', icon: '/PC-Elements-08.png' },
  { name: 'Zero Sugar', icon: '/PC-Elements-09.png' },
  { name: 'Whole30 Approved', icon: '/PC-Elements-10.png' },
];

export default function ProductFeatures() {
  return (
    <section className="py-12 md:py-16 bg-black text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 text-center">
          {featuresData.map((feat) => (
            <div key={feat.name} className="flex flex-col items-center space-y-2">
              <div className="w-16 h-24 md:w-20 md:h-30 flex items-center justify-center">
                <Image
                  src={feat.icon}
                  alt={`${feat.name} icon`}
                  width={60}
                  height={90}
                  className="object-contain max-w-full max-h-full"
                  data-ai-hint="feature icon product"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
