import { useState } from 'react';

interface MagneticButtonProps {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary';
}

export default function MagneticButton({ href, label, variant = 'primary' }: MagneticButtonProps) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setOffset({
      x: (event.clientX - rect.left - rect.width / 2) * 0.18,
      y: (event.clientY - rect.top - rect.height / 2) * 0.28,
    });
  };

  return (
    <a
      href={href}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setOffset({ x: 0, y: 0 })}
      className={`magnetic-button ${variant === 'primary' ? 'magnetic-button-primary' : 'magnetic-button-secondary'}`}
      style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
    >
      <span>{label}</span>
    </a>
  );
}
