import React from 'react';

export const PromoCallout: React.FC = () => {
  return (
    <div className="text-center bg-white/70 rounded-3xl px-8 py-7 border border-[var(--color-kraft-dark)] max-w-2xl mx-auto shadow-sm">
      <p className="font-sans text-xs uppercase tracking-widest text-[var(--color-gold)] font-bold mb-1.5">
        Economia Progressiva
      </p>
      <p className="font-sans text-sm sm:text-base text-[var(--color-charcoal)] leading-relaxed">
        <strong className="text-[var(--color-espresso)]">Combos com desconto:</strong> quanto mais você leva, maior a sua economia. Clique em qualquer vela para consultar os valores de 2 ou 3 unidades.
      </p>
    </div>
  );
};
