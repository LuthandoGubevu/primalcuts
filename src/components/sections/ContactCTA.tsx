
'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function ContactCTA() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/product');
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-buttonCta text-buttonCta-foreground hover:bg-buttonCta/90 font-semibold text-base md:text-lg py-3 px-8 rounded-md transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="View Product Details"
            onClick={handleNavigation}
          >
            EXCLUSIVE ACCESS
          </Button>
        </div>
      </div>
    </section>
  );
}
