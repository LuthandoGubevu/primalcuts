
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import NutritionFacts from '@/components/product/NutritionFacts';
import FadeInScroll from '@/components/utils/FadeInScroll';
import Footer from '@/components/sections/Footer';
import ProductImage from '@/components/product/ProductImage';
import ProductDetailCarousel from '@/components/product/ProductDetailCarousel';

export default function ProductPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <FadeInScroll threshold={0.1}>
          <ProductImage />
        </FadeInScroll>

        <FadeInScroll threshold={0.1} delay="md:delay-100">
          <ProductDetailCarousel />
        </FadeInScroll>

        <FadeInScroll threshold={0.1} delay="md:delay-200">
          <NutritionFacts />
        </FadeInScroll>
      </main>

      <FadeInScroll threshold={0.1} delay="md:delay-500">
        <div className="container mx-auto px-4 flex justify-center py-8">
          <Button variant="outline" asChild className="border-gray-400 text-black hover:bg-buttonCta-text hover:text-white hover:border-buttonCta-text">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </FadeInScroll>

      <FadeInScroll threshold={0.1} delay="md:delay-600">
        <Footer />
      </FadeInScroll>
    </div>
  );
}
