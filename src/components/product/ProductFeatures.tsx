
import Image from 'next/image';

interface FeatureItem {
  name: string;
  src: string;
  hint: string;
}

const featuresData: FeatureItem[] = [
  { name: 'Gluten Free', src: '/PC-Elements-22.png', hint: 'gluten free icon' },
  { name: 'Keto Friendly', src: '/PC-Elements-23.png', hint: 'keto friendly icon' },
  { name: 'High Protein', src: '/PC-Elements-24.png', hint: 'protein icon' },
  { name: 'Zero Sugar', src: '/PC-Elements-25.png', hint: 'sugar free icon' },
];

export default function ProductFeatures() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {featuresData.map((feat) => (
            <div key={feat.name} className="w-[80px] aspect-[300/424]">
              <Image
                src={feat.src}
                alt={`${feat.name} icon`}
                width={80}
                height={113}
                className="object-cover w-full h-full"
                data-ai-hint={feat.hint}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
