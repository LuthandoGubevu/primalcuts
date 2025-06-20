
"use client";

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FadeInScrollProps {
  children: ReactNode;
  className?: string;
  delay?: string; // Tailwind delay class e.g. 'delay-200'
  threshold?: number;
  once?: boolean;
  slideDirection?: 'up' | 'down' | 'left' | 'right';
}

const FadeInScroll: React.FC<FadeInScrollProps> = ({ 
  children, 
  className, 
  delay = '', 
  threshold = 0.1,
  once = true,
  slideDirection = 'up',
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

  const getInitialTransform = () => {
    switch (slideDirection) {
      case 'up':
        return 'opacity-0 translate-y-8';
      case 'down':
        return 'opacity-0 -translate-y-8';
      case 'left':
        return 'opacity-0 -translate-x-8';
      case 'right':
        return 'opacity-0 translate-x-8';
      default:
        return 'opacity-0 translate-y-8';
    }
  };

  const getVisibleTransform = () => {
    switch (slideDirection) {
      case 'up':
      case 'down':
        return 'opacity-100 translate-y-0';
      case 'left':
      case 'right':
        return 'opacity-100 translate-x-0';
      default:
        return 'opacity-100 translate-y-0';
    }
  };

  return (
    <div
      ref={domRef}
      className={cn(
        'transition-all duration-700 ease-out',
        delay,
        isVisible ? getVisibleTransform() : getInitialTransform(),
        className
      )}
    >
      {children}
    </div>
  );
};

export default FadeInScroll;
