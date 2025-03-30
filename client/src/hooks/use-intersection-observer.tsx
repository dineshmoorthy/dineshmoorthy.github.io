import { useEffect, useState, useRef, RefObject } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = '0px',
  freezeOnceVisible = true
}: UseIntersectionObserverProps = {}): [boolean, RefObject<HTMLDivElement>] {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const node = ref?.current;
    
    // Early return if ref is not assigned or already visible
    if (!node || (freezeOnceVisible && isVisible)) return;
    
    const observerParams = { threshold, rootMargin };
    const observer = new IntersectionObserver(([entry]) => {
      // Update state when observer callback fires
      if (entry?.isIntersecting) {
        setIsVisible(true);
        
        // Unobserve once visible if freeze is enabled
        if (freezeOnceVisible) {
          observer.unobserve(entry.target);
        }
      } else {
        // Only update state if freeze is disabled
        if (!freezeOnceVisible) {
          setIsVisible(false);
        }
      }
    }, observerParams);
    
    observer.observe(node);
    
    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [threshold, rootMargin, freezeOnceVisible, isVisible]);
  
  return [isVisible, ref];
}