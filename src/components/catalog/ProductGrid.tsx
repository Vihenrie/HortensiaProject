import React, { useState } from 'react';
import { products } from '../../data/catalogData';
import type { Product } from '../../types/catalog';
import { BotanicalDivider } from '../common';
import { ProductCard } from './ProductCard';
import { ProductFilter } from './ProductFilter';
import { PromoCallout } from './PromoCallout';

interface ProductGridProps {
  onViewDetails: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ onViewDetails }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered =
    activeFilter === 'all'
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <section id="catalog" className="py-24 md:py-32 bg-[var(--color-linen)] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 opacity-[0.05] pointer-events-none hidden lg:block" aria-hidden="true">
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
          <path
            d="M220 220 Q180 180 160 140 Q140 100 160 60 Q140 80 130 110 Q120 140 140 180 Q160 200 220 220Z"
            fill="var(--color-sage)"
            stroke="var(--color-sage)"
            strokeWidth="0.5"
          />
          <path
            d="M220 220 Q190 170 200 120 Q185 130 180 160 Q175 190 220 220Z"
            fill="var(--color-sage-pale)"
            stroke="var(--color-sage)"
            strokeWidth="0.5"
          />
          <circle cx="160" cy="62" r="6" fill="var(--color-terracotta-light)" opacity="0.6" />
          <circle cx="148" cy="78" r="5" fill="var(--color-gold)" opacity="0.5" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="text-center mb-14">
          <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.4em] text-[var(--color-gold)] mb-4 font-bold">
            Catálogo Artesanal
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[var(--color-espresso)] mb-6 leading-tight">
            Nossas <span className="italic text-[var(--color-terracotta)]">Criações</span>
          </h2>
          <p className="font-sans text-base sm:text-lg md:text-xl text-[var(--color-charcoal)] max-w-2xl mx-auto leading-relaxed">
            Cada vela é uma composição sensorial única, feita à mão com cera vegetal e aromas finos.
            Escolha a que fala com a sua alma.
          </p>
        </div>

        <ProductFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 items-stretch">
          {filtered.map((product, i) => (
            <div
              key={product.id}
              className="animate-fade-in-up h-full"
              style={{ animationDelay: `${i * 0.09}s` }}
            >
              <ProductCard product={product} onViewDetails={onViewDetails} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p className="font-serif italic text-[var(--color-charcoal-light)] text-2xl">
              Nenhum produto encontrado nessa categoria.
            </p>
          </div>
        )}

        <BotanicalDivider variant="branch" />

        <PromoCallout />
      </div>
    </section>
  );
};

export default ProductGrid;
