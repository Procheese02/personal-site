import { useState } from 'react';

type SkillGroup = {
  label: string;
  values: string[];
};

interface MagneticSkillsProps {
  groups: SkillGroup[];
}

export default function MagneticSkills({ groups }: MagneticSkillsProps) {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {groups.map((group) => (
        <div key={group.label} className="magnetic-skill-card motion-card rounded-[1.5rem] border border-line bg-panel/70 p-6 backdrop-blur">
          <div className="skill-card-sheen" />
          <h3 className="relative z-10 mb-4 text-lg font-semibold text-white">{group.label}</h3>
          <div className="relative z-10 flex flex-wrap gap-2">
            {group.values.map((skill) => (
              <MagneticSkillChip key={skill} skill={skill} activeSkill={activeSkill} setActiveSkill={setActiveSkill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function MagneticSkillChip({ skill, activeSkill, setActiveSkill }: { skill: string; activeSkill: string | null; setActiveSkill: (skill: string | null) => void }) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event: React.PointerEvent<HTMLSpanElement>) => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    setOffset({
      x: (event.clientX - rect.left - rect.width / 2) * 0.25,
      y: (event.clientY - rect.top - rect.height / 2) * 0.35,
    });
  };

  return (
    <span
      onPointerEnter={() => setActiveSkill(skill)}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        setActiveSkill(null);
        setOffset({ x: 0, y: 0 });
      }}
      className={`magnetic-skill-chip rounded-full border border-line bg-white/[0.04] px-3 py-1.5 text-sm text-slate-300 ${activeSkill === skill ? 'magnetic-skill-chip-active' : ''}`}
      style={{ transform: `translate3d(${offset.x}px, ${offset.y}px, 0)` }}
    >
      {skill}
    </span>
  );
}
