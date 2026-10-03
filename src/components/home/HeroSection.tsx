import React from 'react';
import { ChevronDown } from 'lucide-react';
import { BotanicalBranch } from '../common/BotanicalBranch';
import { BotanicalDivider } from '../common';
import { ValuePillars } from './ValuePillars';
import type { View } from '../../types/navigation';

interface HeroSectionProps {
  onNavigate: (view: View) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--color-linen)]">
      <div
        className="absolute -top-32 -right-32 w-[650px] h-[650px] rounded-full opacity-[0.14] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 60% 40%, #D4A373 0%, transparent 65%)' }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-[750px] h-[750px] rounded-full opacity-[0.1] pointer-events-none"
        style={{ background: 'radial-gradient(circle at 40% 60%, #B86B43 0%, transparent 65%)' }}
      />

      <div
        className="absolute top-1/2 -translate-y-1/2 right-0 pr-2 xl:pr-12 pointer-events-none hidden lg:block transition-opacity duration-700"
        style={{ opacity: 0.85 }}
      >
        <BotanicalBranch />
      </div>

      <div
        className="absolute top-1/2 -translate-y-1/2 left-0 pl-2 xl:pl-12 pointer-events-none hidden lg:block transition-opacity duration-700"
        style={{ opacity: 0.75, transform: 'translateY(-50%) scaleX(-1)' }}
      >
        <BotanicalBranch />
      </div>

      <div
        className="absolute top-10 right-0 pointer-events-none lg:hidden"
        style={{ opacity: 0.25, transform: 'scale(0.55)', transformOrigin: 'top right' }}
      >
        <BotanicalBranch />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-10 text-center pt-28 pb-20">
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in">
          <div className="h-px w-10 bg-[var(--color-gold)]" />
          <span className="font-sans text-xs uppercase tracking-[0.42em] text-[var(--color-gold)] font-bold">
            Artesanal · Vegetal · Afetivo
          </span>
          <div className="h-px w-10 bg-[var(--color-gold)]" />
        </div>

        <h1 className="leading-none mb-8 animate-fade-in-up delay-100">
          <span className="font-serif block text-[4.5rem] sm:text-[6rem] md:text-[7.5rem] lg:text-[8.5rem] text-[var(--color-espresso)] leading-[0.9]">
            Ateliê
          </span>
          <span
            className="font-serif block italic text-[5.5rem] sm:text-[7.5rem] md:text-[9.5rem] lg:text-[11rem] leading-[0.88]"
            style={{ color: 'var(--color-terracotta)' }}
          >
            Hortênsia
          </span>
          <span className="font-serif block text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] text-[var(--color-espresso)] font-normal tracking-[0.08em] mt-2">
            Brasil
          </span>
        </h1>

        <BotanicalDivider variant="simple" className="max-w-xs sm:max-w-sm mx-auto my-8" />

        <p className="font-display italic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[var(--color-charcoal)] mb-12 animate-fade-in-up delay-200 max-w-2xl mx-auto leading-snug">
          Velas que acolhem a casa e transformam momentos em memórias
        </p>

        <ValuePillars />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
          <button
            onClick={() => onNavigate('catalog')}
            className="w-full sm:w-auto font-sans text-base font-bold px-10 py-4 rounded-full bg-[var(--color-espresso)] text-[var(--color-linen)] hover:bg-[var(--color-charcoal)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl tracking-wide cursor-pointer"
          >
            Ver Catálogo de Velas
          </button>
          <button
            onClick={() => onNavigate('custom')}
            className="w-full sm:w-auto font-sans text-base font-bold px-10 py-4 rounded-full border-2 border-[var(--color-espresso)] text-[var(--color-espresso)] hover:bg-[var(--color-kraft-dark)] transition-all duration-200 hover:-translate-y-0.5 tracking-wide cursor-pointer"
          >
            Lembranças Personalizadas
          </button>
        </div>

        <div className="mt-16 flex justify-center">
          <button
            onClick={() => onNavigate('catalog')}
            className="flex flex-col items-center gap-2 text-[var(--color-charcoal-light)] hover:text-[var(--color-gold)] transition-colors group cursor-pointer"
            aria-label="Explorar catálogo"
          >
            <span className="font-sans text-xs uppercase tracking-[0.3em] font-medium">Explorar</span>
            <ChevronDown size={20} className="animate-bounce text-[var(--color-gold)]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
