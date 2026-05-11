import { useEffect, useRef } from 'react';

interface SplitTextProps {
  text: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  delay?: number;
}

export default function SplitText({ text, as: Component = 'span', className = '', delay = 35 }: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const letters = element.querySelectorAll('[data-split-letter]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        letters.forEach((letter, index) => {
          window.setTimeout(() => letter.classList.add('split-letter-visible'), index * delay);
        });
        observer.disconnect();
      });
    }, { threshold: 0.2 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Component ref={ref as never} className={`inline-block ${className}`}>
      {text.split('').map((letter, index) => (
        <span key={`${letter}-${index}`} data-split-letter className="split-letter inline-block">
          {letter === ' ' ? ' ' : letter}
        </span>
      ))}
    </Component>
  );
}
