import { useEffect, useRef, useState } from "react";

export function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // показываем один раз
        }
      },
      {
        threshold: 0.15, // 15% элемента видно
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}