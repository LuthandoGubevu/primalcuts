
import { ShieldCheckIcon } from 'lucide-react';

interface FeatureItem {
  name: string;
  icon: React.ElementType;
}

const featuresData: FeatureItem[] = [
  { name: 'Gluten Free', icon: ShieldCheckIcon },
  { name: 'Keto Friendly', icon: ShieldCheckIcon },
  { name: '32G Protein', icon: ShieldCheckIcon },
  { name: 'Zero Sugar', icon: ShieldCheckIcon },
  { name: 'Whole30 Approved', icon: ShieldCheckIcon },
];

export default function ProductFeatures() {
  return (
    <section className="py-12 md:py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 text-center">
          {featuresData.map((feat) => (
            <div key={feat.name} className="flex flex-col items-center space-y-3 p-4 bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="p-3 bg-buttonCta/10 rounded-full">
                <feat.icon className="w-8 h-8 md:w-10 md:h-10 text-buttonCta-text" aria-hidden="true" />
              </div>
              <p className="font-body text-sm md:text-base font-medium text-black">{feat.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
