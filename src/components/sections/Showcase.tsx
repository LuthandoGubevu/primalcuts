import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const products = [
  { name: 'Smoke', imageHint: 'smoked meat package' },
  { name: 'Original', imageHint: 'classic jerky package' },
  { name: 'Fire', imageHint: 'spicy jerky package' }
];

export default function Showcase() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-12 md:mb-16">
          American Made Flavors
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {products.map((product) => (
            <Card key={product.name} className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-card transform hover:-translate-y-2 hover:scale-105 rounded-lg border-border hover:border-primary">
              <CardHeader className="p-0">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={`https://placehold.co/400x300.png`}
                    alt={`${product.name} flavor Primal Cuts`}
                    width={400}
                    height={300}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={product.imageHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="font-headline text-2xl md:text-3xl text-primary text-center">{product.name}</CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
