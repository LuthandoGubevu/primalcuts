
export default function ProductDetails() {
  return (
    <section className="py-12 md:py-16 bg-secondary/5">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12">
        
        <div className="bg-card p-6 md:p-8 rounded-lg shadow-md">
          <h3 className="font-headline text-2xl md:text-3xl font-semibold text-primary mb-4">
            Why Our Biltong?
          </h3>
          <p className="font-body text-base md:text-lg text-foreground/90 leading-relaxed">
            This is a placeholder for text describing why Primal Cuts biltong is special. 
            Highlight unique selling propositions, quality of ingredients, traditional methods, 
            health benefits, and the delicious taste profile. This text should be engaging and informative.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="bg-card p-6 md:p-8 rounded-lg shadow-md">
          <h3 className="font-headline text-2xl md:text-3xl font-semibold text-primary mb-4">
            Ingredients
          </h3>
          <p className="font-body text-base md:text-lg text-foreground/90 leading-relaxed mb-6">
            Placeholder: Grass-fed beef, red wine vinegar, salt, black pepper, coriander, other natural spices.
            List all ingredients clearly and concisely as they would appear on the packaging.
          </p>
          
          <div className="mt-6 pt-4 border-t border-border">
            <p className="font-body text-sm text-muted-foreground font-semibold">
              Package contains an oxygen absorber. Do not consume.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
