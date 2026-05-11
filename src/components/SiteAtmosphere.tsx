import { useEffect, useState } from 'react';

export default function SiteAtmosphere() {
  const [pointer, setPointer] = useState({ x: -200, y: -200 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setPointer({ x: event.clientX, y: event.clientY });
    };

    const handleScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max <= 0 ? 0 : window.scrollY / max);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="site-progress" style={{ transform: `scaleX(${progress})` }} />
      <div className="site-cursor-aura" style={{ transform: `translate3d(${pointer.x}px, ${pointer.y}px, 0)` }} />
      <div className="site-scanline" />
    </>
  );
}
