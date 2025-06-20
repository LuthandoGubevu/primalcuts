
'use client';

import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';

export default function ContactCTA() {
  const { user, loading, signInWithGoogle, signOut } = useAuth();

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      signInWithGoogle();
    }
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-buttonCta text-buttonCta-foreground hover:bg-buttonCta/90 font-semibold text-base md:text-lg py-3 px-8 rounded-md transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label={user ? "Sign out" : "Sign in for exclusive access to Primal Cuts"}
            onClick={handleAuthAction}
            disabled={loading}
          >
            {loading ? 'Loading...' : (user ? 'SIGN OUT' : 'EXCLUSIVE ACCESS – SIGN IN')}
          </Button>
        </div>
      </div>
    </section>
  );
}
