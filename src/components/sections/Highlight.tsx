import Image from 'next/image';
import { CheckCircle } from 'lucide-react'; // Using CheckCircle as placeholder

const features = [
  { text: "HIGH PROTEIN CONTENT (16G PROTEIN PER OUNCE)" },
  { text: "NO ARTIFICIAL PRESERVATIVES OR NITRATES" },
  { text: "NUTRIENT-DENSE" },
];

export default function Highlight() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          <div className="md:w-1/2 w-full aspect-video md:aspect-[5/4] rounded-lg overflow-hidden shadow-xl group">
            <Image
              src="/PC-Elements-11.png"
              alt="Grass-fed premium protein product shot"
              width={600}
              height={500}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              data-ai-hint="product ingredient quality"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <ul className="space-y-4 font-body text-foreground/80 text-lg md:text-xl leading-relaxed">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 text-primary shrink-0 mt-1" aria-hidden="true" />
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
