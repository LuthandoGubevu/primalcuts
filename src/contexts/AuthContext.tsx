
'use client';

import type { User } from 'firebase/auth';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { auth, googleProvider, signInWithPopup as firebaseSignInWithPopup, firebaseSignOut as firebaseSignOutAuth } from '@/lib/firebase';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      await firebaseSignInWithPopup(auth, googleProvider);
      // Auth state change will update user and setLoading(false) via useEffect
    } catch (error: any) {
      console.error("Error signing in with Google: ", error);
      toast({
        title: "Sign In Failed",
        description: error.message || "Could not sign in with Google. Please try again.",
        variant: "destructive",
      });
      setLoading(false); // Ensure loading is reset on error
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      await firebaseSignOutAuth(auth);
      setUser(null); // Explicitly set user to null
      // Auth state change will also update user and setLoading(false) via useEffect
    } catch (error: any) {
      console.error("Error signing out: ", error);
       toast({
        title: "Sign Out Failed",
        description: error.message || "Could not sign out. Please try again.",
        variant: "destructive",
      });
      setLoading(false); // Ensure loading is reset on error
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
