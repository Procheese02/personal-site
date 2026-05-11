import { useEffect, useRef, useState } from 'react';

type Stat = {
  value?: number;
  suffix?: string;
  display?: string;
  label: string;
  tone: 'cyan' | 'slate' | 'violet';
};

interface InteractiveHeroStageProps {
  location: string;
  email: string;
  stats: Stat[];
}

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function InteractiveHeroStage({ location, email, stats }: InteractiveHeroStageProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(() => stats.map(() => 0));
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)');

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.35 });

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    if (prefersReducedMotion()) {
      setCounts(stats.map((stat) => stat.value ?? 0));
      return;
    }

    let frameId = 0;
    const start = performance.now();
    const duration = 1100;

    const tick = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(stats.map((stat) => Math.round((stat.value ?? 0) * eased)));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [stats, visible]);

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (prefersReducedMotion()) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(1000px) rotateX(${y * -8}deg) rotateY(${x * 10}deg) translateZ(0)`);
  };

  return (
    <div className="hero-stage relative" onPointerMove={handlePointerMove} onPointerLeave={() => setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)')}>
      <div className="hero-orb hero-orb-cyan" />
      <div className="hero-orb hero-orb-violet" />
      <div ref={cardRef} className="hero-tilt-card rounded-[2rem] border border-line bg-panel/75 p-6 shadow-2xl shadow-black/30 backdrop-blur" style={{ transform }}>
        <div className="mb-6 flex items-center gap-4">
          <div className="hero-avatar flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan to-violet text-2xl font-bold text-slate-950">JQ</div>
          <div>
            <p className="font-semibold text-white">{location}</p>
            <p className="text-sm text-slate-400">{email}</p>
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`hero-stat-card hero-stat-${stat.tone} rounded-2xl border p-4`}>
              <p className="text-2xl font-semibold text-white">{stat.display ?? `${counts[index]}${stat.suffix ?? ''}`}</p>
              <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
