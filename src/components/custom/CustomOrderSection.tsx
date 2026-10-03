import React from 'react';
import { BotanicalDivider } from '../common';
import { CustomItemsGrid } from './CustomItemsGrid';
import { CustomOrderForm } from './CustomOrderForm';

export const CustomOrderSection: React.FC = () => {
  return (
    <section className="py-24 bg-[var(--color-kraft)] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <p className="font-sans text-xs uppercase tracking-[0.4em] text-[var(--color-gold)] mb-3 font-bold">
            Linha Sob Medida
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[var(--color-espresso)] mb-5">
            Lembranças <span className="italic text-[var(--color-terracotta)]">Personalizadas</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[var(--color-charcoal)] max-w-2xl mx-auto leading-relaxed">
            Transformamos momentos especiais em velas feitas sob medida. Cada detalhe carrega a essência do seu evento e a assinatura artesanal do Ateliê Hortênsia Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className="rounded-2xl overflow-hidden bg-white border border-[var(--color-kraft-dark)] aspect-square shadow-sm"
                >
                  <img
                    src={`/assets/products/personalizados/img${n}.png`}
                    alt={`Lembrança personalizada ${n}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>

            <CustomItemsGrid />
          </div>

          <div className="lg:col-span-5">
            <CustomOrderForm />
          </div>
        </div>

        <BotanicalDivider variant="branch" />
      </div>
    </section>
  );
};

export default CustomOrderSection;
