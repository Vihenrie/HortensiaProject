import React from 'react';

interface ValuePillar {
  num: string;
  title: string;
  desc: string;
}

const PILLARS: ValuePillar[] = [
  { num: '01', title: 'Cera 100% Vegetal', desc: 'Queima limpa, livre de parafina' },
  { num: '02', title: 'Produção Manual', desc: 'Feita pote a pote com dedicação' },
  { num: '03', title: 'Aromas Finos', desc: 'Fragrâncias que criam memórias' },
];

export const ValuePillars: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-0 mb-14 animate-fade-in-up delay-300 max-w-2xl mx-auto">
      {PILLARS.map((item, i) => (
        <React.Fragment key={item.num}>
          <div className="flex flex-col items-center text-center px-5 sm:px-6 py-4 sm:py-0">
            <span className="font-display text-[var(--color-gold)] text-4xl sm:text-5xl italic leading-none mb-2 font-light">
              {item.num}
            </span>
            <p className="font-sans text-sm sm:text-base font-bold text-[var(--color-espresso)] mb-1">
              {item.title}
            </p>
            <p className="font-sans text-xs sm:text-sm text-[var(--color-charcoal)] leading-snug">
              {item.desc}
            </p>
          </div>
          {i < PILLARS.length - 1 && (
            <div className="sm:self-center opacity-40">
              <svg width="1" height="52" viewBox="0 0 1 52" className="hidden sm:block" aria-hidden="true">
                <line x1="0.5" y1="0" x2="0.5" y2="52" stroke="var(--color-kraft-dark)" strokeWidth="1" />
              </svg>
              <div className="w-12 h-px bg-[var(--color-kraft-dark)] sm:hidden my-1" />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
