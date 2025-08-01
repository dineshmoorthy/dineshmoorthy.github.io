import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

type AnimationType = 'up' | 'right' | 'left' | 'scale' | 'glitch' | 'none';

interface ScrollRevealProps {
  children: ReactNode;
  type?: AnimationType;
  delay?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  as?: React.ElementType;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  type = 'up',
  delay,
  threshold = 0.1,
  rootMargin = '0px',
  className = '',
  as: Component = 'div',
}) => {
  const [isVisible, ref] = useIntersectionObserver({
    threshold,
    rootMargin,
    freezeOnceVisible: true,
  });

  // Only apply animation if type is not 'none'
  const animationClass = type !== 'none' ? `reveal-${type}` : '';
  const delayClass = delay ? `reveal-delay-${delay}` : '';
  
  return (
    <Component
      ref={ref}
      className={`${animationClass} ${isVisible ? 'is-visible' : ''} ${delayClass} ${className}`}
    >
      {children}
    </Component>
  );
};

export default ScrollReveal;