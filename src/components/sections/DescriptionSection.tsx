import Image from 'next/image';

export default function DescriptionSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gray-800 text-primary-foreground">
      <Image
        src="https://placehold.co/1920x600.png"
        alt="Artisan meat preparation showing rich textures and colors"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 opacity-20"
        data-ai-hint="dark food background spices"
      />
      <div className="absolute inset-0 bg-primary/70 z-0"></div> {/* Themed overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          The Primal Difference
        </h2>
        <p className="font-body text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-primary-foreground/90">
          At Primal Cuts, we believe in tradition, quality, and flavor. Our air-dried steak is crafted from premium, grass-fed American beef, seasoned with natural spices, and prepared with a passion for excellence. It's more than just a snack; it's an experience rooted in wholesome goodness and authentic taste.
        </p>
      </div>
    </section>
  );
}
