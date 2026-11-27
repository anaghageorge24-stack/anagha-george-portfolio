'use client';

import { useEffect, useState } from 'react';
import Avatar from './Avatar';

const intro = "Hi, I'm Anagha! I'm a recent graduate looking for a job in:";
const roles = ['QC Analyst', 'Laboratory Analyst', 'Quality Assurance'];

export default function HeroIntro() {
  const [typed, setTyped] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setReduced(true);
      setTyped(intro.length);
    }
  }, []);

  useEffect(() => {
    if (typed >= intro.length) return;
    const t = setTimeout(() => setTyped((n) => n + 1), 35);
    return () => clearTimeout(t);
  }, [typed]);

  const done = typed >= intro.length;

  useEffect(() => {
    if (!done || reduced) return;
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2200);
    return () => clearInterval(t);
  }, [done, reduced]);

  return (
    <div className="flex items-start gap-4 sm:gap-6">
      <Avatar talking={!done} />
      <div className="min-w-0 flex-1">
        <p className="font-serif text-xl sm:text-2xl">Anagha Mary Valluvassery George</p>
        <p className="text-sm text-muted">Master of Pharmaceutical Science, University of Tasmania</p>

        <div className="relative mt-4 rounded-2xl border border-line bg-surface p-4 sm:p-5">
          <span className="absolute -left-2 top-6 h-4 w-4 rotate-45 border-b border-l border-line bg-surface" aria-hidden="true" />
          <span className="sr-only">{intro} {roles.join(', ')}.</span>
          <p aria-hidden="true" className="min-h-[3rem] text-base leading-relaxed sm:min-h-0 sm:text-lg">
            {intro.slice(0, typed)}
          </p>
          <p aria-hidden="true" className="mt-2 min-h-[2rem] font-serif text-xl text-accent sm:text-2xl">
            {done && (
              <span key={roleIndex} className="role-swap inline-block">
                {roles[roleIndex]}
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
