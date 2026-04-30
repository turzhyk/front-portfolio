import { useEffect, useRef, useState } from "react";

type UseInViewOptions = IntersectionObserverInit & {
  triggerOnce?: boolean;
};

export function useInView<T extends HTMLElement = HTMLElement>(
  options: UseInViewOptions = {}
) {
  const { triggerOnce = true, ...observerOptions } = options;

  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let observer: IntersectionObserver | null = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          if (triggerOnce && observer) {
            observer.disconnect();
            observer = null;
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      observerOptions
    );

    observer.observe(element);

    return () => {
      observer?.disconnect();
    };
  }, [observerOptions.root, observerOptions.rootMargin, observerOptions.threshold, triggerOnce]);

  return { ref, isVisible };
}