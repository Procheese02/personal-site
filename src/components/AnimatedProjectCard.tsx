import { useState } from 'react';

interface AnimatedProjectCardProps {
  name: string;
  period: string;
  category: string;
  summary: string;
  highlights: string[];
  tech: string[];
  githubUrl?: string;
  featured?: boolean;
  featuredLabel: string;
  githubLabel: string;
}

export default function AnimatedProjectCard({
  name,
  period,
  category,
  summary,
  highlights,
  tech,
  githubUrl,
  featured = false,
  featuredLabel,
  githubLabel,
}: AnimatedProjectCardProps) {
  const [expanded, setExpanded] = useState(featured);
  const [pointer, setPointer] = useState({ x: 50, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setPointer({ x, y });
    setTilt({ x: (y - 50) * -0.025, y: (x - 50) * 0.03 });
  };

  return (
    <article
      onPointerMove={handlePointerMove}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
      className={`animated-project-card group rounded-[1.75rem] border bg-panel/70 p-6 shadow-xl shadow-black/20 backdrop-blur ${featured ? 'border-cyan/35 lg:col-span-2' : 'border-line'}`}
      style={{
        '--spotlight-x': `${pointer.x}%`,
        '--spotlight-y': `${pointer.y}%`,
        transform: `perspective(1100px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      } as React.CSSProperties}
    >
      <div className="project-card-spotlight" />
      <div className="relative z-10">
        <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
          <div>
            {featured && <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-cyan">{featuredLabel}</p>}
            <h3 className="text-2xl font-semibold text-white">{name}</h3>
            <p className="mt-2 text-sm text-slate-400">{category} · {period}</p>
          </div>
          <button type="button" onClick={() => setExpanded((value) => !value)} className="project-expand-button" aria-expanded={expanded}>
            {expanded ? '−' : '+'}
          </button>
        </div>
        <p className="text-base leading-7 text-slate-300">{summary}</p>
        <div className={`project-details ${expanded ? 'project-details-open' : ''}`}>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {tech.map((item, index) => (
            <span key={item} className="project-tech-chip rounded-full border border-line bg-white/[0.04] px-3 py-1 text-xs text-slate-300" style={{ transitionDelay: `${index * 18}ms` }}>
              {item}
            </span>
          ))}
        </div>
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noreferrer" className="github-action mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan/60 hover:bg-cyan/10 hover:text-white">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.34 9.34 0 0 1 12 6.95c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.14 10.14 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" clipRule="evenodd" />
            </svg>
            <span>{githubLabel}</span>
          </a>
        )}
      </div>
    </article>
  );
}
