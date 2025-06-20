
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductHero from '@/components/product/ProductHero';
import ProductFeatures from '@/components/product/ProductFeatures';
import NutritionFacts from '@/components/product/NutritionFacts';
import ProductDetails from '@/components/product/ProductDetails';
import FadeInScroll from '@/components/utils/FadeInScroll';

export default function ProductPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        <FadeInScroll threshold={0.01}>
          <div className="mb-8">
            <Button variant="outline" asChild>
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </FadeInScroll>

        <FadeInScroll threshold={0.1} delay="md:delay-100">
          <ProductHero />
        </FadeInScroll>

        <FadeInScroll threshold={0.1} delay="md:delay-200">
          <ProductFeatures />
        </FadeInScroll>

        <FadeInScroll threshold={0.1} delay="md:delay-300">
          <NutritionFacts />
        </FadeInScroll>

        <FadeInScroll threshold={0.1} delay="md:delay-400">
          <ProductDetails />
        </FadeInScroll>
      </main>
    </div>
  );
}
