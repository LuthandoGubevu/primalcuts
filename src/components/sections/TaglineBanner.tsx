
import { cn } from '@/lib/utils';

interface TaglineBannerProps {
  className?: string;
}

export default function TaglineBanner({ className }: TaglineBannerProps) {
  return (
    <section 
      className={cn(
        "bg-buttonCta text-primary-foreground flex flex-col items-center justify-center text-center",
        "py-6 sm:py-8 min-h-[120px] max-h-[150px]", // Height constraints and padding
        className
      )}
    >
      <div>
        <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight">
          American Made
        </h2>
        <p className="font-body text-sm sm:text-base md:text-lg uppercase tracking-wider text-primary-foreground/80 mt-1 sm:mt-2">
          Air Dried Steak
        </p>
      </div>
    </section>
  );
}
