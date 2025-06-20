import Image from 'next/image';

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
            <p className="mt-4 text-lg md:text-xl text-foreground/80 font-body leading-relaxed">
              Enriched with a select blend of all-natural spices, our Primal Cuts are meticulously air-dried to perfection. This traditional process locks in the rich, savory flavor and tender texture, delivering a high-protein snack that's both satisfying and wholesome. Experience the taste of quality craftsmanship in every bite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
