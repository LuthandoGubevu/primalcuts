"use client";

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FadeInScrollProps {
  children: ReactNode;
  className?: string;
  delay?: string; // Tailwind delay class e.g. 'delay-200'
  threshold?: number;
  once?: boolean;
}

const FadeInScroll: React.FC<FadeInScrollProps> = ({ 
  children, 
  className, 
  delay = '', 
  threshold = 0.1,
  once = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && currentRef) { 
              observer.unobserve(currentRef);
            }
          } else {
            if (!once) {
              setIsVisible(false);
            }
          }
        });
      },
      { threshold }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) { 
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  return (
    <div
      ref={domRef}
      className={cn(
        'transition-all duration-700 ease-out',
        delay,
        isVisible ? 'opacity-100 translate-y-0 sm:translate-y-0' : 'opacity-0 translate-y-10 sm:translate-y-12',
        className
      )}
    >
      {children}
    </div>
  );
};

export default FadeInScroll;
