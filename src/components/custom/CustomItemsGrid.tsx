import React from 'react';
import { CUSTOM_ITEMS } from '../../constants/customOrder';

export const CustomItemsGrid: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[var(--color-kraft-dark)] shadow-sm">
      <div className="border-b border-[var(--color-kraft-dark)] pb-5 mb-6">
        <p className="font-sans text-[11px] font-bold uppercase tracking-widest text-[var(--color-gold)] mb-1">
          Ateliê Sob Medida
        </p>
        <h3 className="font-sans font-extrabold text-2xl text-[var(--color-espresso)] tracking-tight">
          O que Personalizamos
        </h3>
        <p className="font-sans text-xs sm:text-sm text-[var(--color-charcoal-light)] mt-1">
          Flexibilidade completa para criar uma peça exclusiva para o seu evento
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
        {CUSTOM_ITEMS.map((item) => (
          <div key={item.num} className="flex items-start gap-3">
            <span className="font-sans font-bold text-xs px-2 py-0.5 rounded-md bg-[var(--color-kraft)] text-[var(--color-espresso)] shrink-0 mt-0.5">
              {item.num}
            </span>
            <div>
              <h4 className="font-sans font-bold text-sm text-[var(--color-espresso)] leading-snug">
                {item.title}
              </h4>
              <p className="font-sans text-xs text-[var(--color-charcoal)] leading-relaxed mt-0.5">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-[var(--color-kraft-dark)] bg-[var(--color-linen)]/60 -mx-7 -mb-7 sm:-mx-9 sm:-mb-9 p-5 sm:p-6 rounded-b-3xl">
        <p className="font-sans text-xs sm:text-sm text-[var(--color-charcoal)] leading-relaxed">
          <strong className="text-[var(--color-espresso)]">Ocasiões atendidas:</strong> Casamentos, chás de bebê, batizados, aniversários, datas comemorativas e brindes corporativos de alto padrão.
        </p>
      </div>
    </div>
  );
};
