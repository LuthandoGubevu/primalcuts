
import { Button } from '@/components/ui/button';

export default function ContactCTA() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-xl shadow-2xl border border-border">
          <div className="flex justify-center items-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base md:text-lg py-3 px-8 rounded-md transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-accent-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Sign in for exclusive access to Primal Cuts"
            >
              EXCLUSIVE ACCESS – SIGN IN
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
