import React from 'react';
import { BotanicalDivider } from '../common';
import { StoryCards } from './StoryCards';

export const BrandStory: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[var(--color-kraft)] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.032] pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="story-bg" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              {[0, 60, 120, 180, 240, 300].map((a, i) => {
                const r = (a * Math.PI) / 180;
                const cx = 100 + Math.cos(r) * 22;
                const cy = 100 + Math.sin(r) * 22;
                return (
                  <g key={i}>
                    {[0, 90, 180, 270].map((pa) => {
                      const pr = (pa * Math.PI) / 180;
                      return (
                        <ellipse
                          key={pa}
                          cx={cx + Math.cos(pr) * 8}
                          cy={cy + Math.sin(pr) * 8}
                          rx="6"
                          ry="9"
                          fill="var(--color-espresso)"
                          opacity="0.6"
                          transform={`rotate(${pa} ${cx + Math.cos(pr) * 8} ${cy + Math.sin(pr) * 8})`}
                        />
                      );
                    })}
                    <circle cx={cx} cy={cy} r="3.5" fill="var(--color-espresso)" opacity="0.7" />
                  </g>
                );
              })}
              <circle cx="100" cy="100" r="5.5" fill="var(--color-espresso)" opacity="0.85" />
              <path d="M0 180 Q50 175 100 180 Q150 185 200 180" stroke="var(--color-espresso)" strokeWidth="0.6" fill="none" opacity="0.4" />
              <path d="M30 180 Q34 165 42 158" stroke="var(--color-espresso)" strokeWidth="0.4" fill="none" opacity="0.35" />
              <path d="M90 180 Q94 166 102 160" stroke="var(--color-espresso)" strokeWidth="0.4" fill="none" opacity="0.35" />
              <ellipse cx="43" cy="157" rx="6" ry="3" fill="var(--color-espresso)" opacity="0.3" transform="rotate(-40 43 157)" />
              <ellipse cx="103" cy="159" rx="6" ry="3" fill="var(--color-espresso)" opacity="0.3" transform="rotate(-42 103 159)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#story-bg)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-18" style={{ marginBottom: '4.5rem' }}>
          <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.4em] text-[var(--color-gold)] mb-4 font-bold">
            Nossa História
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--color-espresso)] mb-6 leading-tight">
            O que faz uma vela ser{' '}
            <span className="italic text-[var(--color-terracotta)]">especial</span>
          </h2>
          <p className="font-sans text-base sm:text-lg md:text-xl text-[var(--color-charcoal)] max-w-2xl mx-auto leading-relaxed">
            Cada vela do Ateliê Hortênsia Brasil nasce de um cuidado que vai além da produção.
            É uma experiência sensorial pensada para acolher a sua casa e tocar a alma.
          </p>
        </div>

        <StoryCards />

        <BotanicalDivider variant="grand" />

        <div className="text-center pt-4">
          <div className="font-serif text-6xl text-[var(--color-gold)] opacity-25 leading-none select-none mb-4" aria-hidden="true">
            "
          </div>
          <blockquote className="font-display italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--color-charcoal)] leading-snug max-w-3xl mx-auto">
            Uma vela acesa não é apenas luz — é presença, é acolhimento, é um abraço perfumado no ambiente.
          </blockquote>
          <div
            className="font-serif text-6xl text-[var(--color-gold)] opacity-25 leading-none select-none mt-2 inline-block"
            style={{ transform: 'rotate(180deg)' }}
            aria-hidden="true"
          >
            "
          </div>
          <cite className="font-sans text-xs sm:text-sm uppercase tracking-[0.3em] text-[var(--color-charcoal-light)] mt-6 block not-italic font-bold">
            — Ateliê Hortênsia Brasil
          </cite>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
