"use client";

import {
  type CSSProperties,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
} & Omit<HTMLAttributes<HTMLElement>, "children" | "className">;

export function Reveal<T extends ElementType = "div">({
  as,
  children,
  className = "",
  delay = 0,
  threshold = 0.16,
  rootMargin = "0px 0px -8% 0px",
  once = true,
  ...rest
}: RevealProps<T>) {
  const Component = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;

        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.disconnect();
          return;
        }

        if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, rootMargin, threshold]);

  const mergedClassName = `bt-reveal ${isInView ? "is-in" : ""} ${className}`.trim();
  const style = {
    ...(rest.style ?? {}),
    "--bt-reveal-delay": `${delay}ms`,
  } as CSSProperties;

  return (
    <Component ref={ref} className={mergedClassName} style={style} {...rest}>
      {children}
    </Component>
  );
}
