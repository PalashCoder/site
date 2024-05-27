import { useEffect, useRef, useState } from "react";

export const useScrollSpy = (
  selectors: string[],
  options?: IntersectionObserverInit
) => {
  const [activeId, setActiveId] = useState<string | null>();
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = selectors.map((selector) =>
      document.querySelector(selector)
    );

    observer.current?.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.getAttribute("id"));
        }
      });
    });

    elements.forEach((element) => {
      if (element) {
        observer.current?.observe(element);
      }
    });

    return () => observer.current?.disconnect();
  }, [selectors, options]);

  return activeId;
};
