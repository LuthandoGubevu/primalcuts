import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Mail, Phone, User } from 'lucide-react';

export default function ContactCTA() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-card p-8 md:p-12 rounded-xl shadow-2xl border border-border">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="aspect-video md:aspect-square rounded-lg overflow-hidden shadow-lg group">
              <Image
                src="https://placehold.co/600x600.png"
                alt="Contact Primal Cuts - scenic ranch or farm"
                width={600}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                data-ai-hint="ranch landscape farm"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6">Get In Touch</h2>
              <div className="space-y-4 font-body text-foreground/80 text-base md:text-lg">
                <p className="flex items-center justify-center md:justify-start">
                  <User className="w-5 h-5 mr-3 text-primary shrink-0" />
                  <span>John McPrimal</span>
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <Mail className="w-5 h-5 mr-3 text-primary shrink-0" />
                  <a href="mailto:sales@primalcutsusa.com" className="hover:text-primary transition-colors break-all">sales@primalcutsusa.com</a>
                </p>
                <p className="flex items-center justify-center md:justify-start">
                  <Phone className="w-5 h-5 mr-3 text-primary shrink-0" />
                  <a href="tel:+11234567890" className="hover:text-primary transition-colors">123 456 7890</a>
                </p>
              </div>
              <Button 
                size="lg" 
                className="mt-8 w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base md:text-lg py-3 px-8 rounded-md transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-accent-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                aria-label="Sign in for exclusive access to Primal Cuts"
              >
                EXCLUSIVE ACCESS – SIGN IN
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
