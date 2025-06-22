
import Image from 'next/image';

interface FeatureItem {
  name: string;
  hint: string;
}

const featuresData: FeatureItem[] = [
  { name: 'Gluten Free', hint: 'gluten free icon' },
  { name: 'Keto Friendly', hint: 'keto friendly icon' },
  { name: 'High Protein', hint: 'protein icon' },
  { name: 'Zero Sugar', hint: 'sugar free icon' },
  { name: 'Whole30 Approved', hint: 'healthy food icon' },
];

export default function ProductFeatures() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 text-center">
          {featuresData.map((feat) => (
            <div key={feat.name} className="flex flex-col items-center">
              <div className="w-full aspect-[300/424]">
                <Image
                  src={`https://placehold.co/300x424.png`}
                  alt={`${feat.name} placeholder icon`}
                  width={300}
                  height={424}
                  className="object-cover w-full h-full"
                  data-ai-hint={feat.hint}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
