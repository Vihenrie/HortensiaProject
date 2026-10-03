import React, { useState } from 'react';
import type { Product } from '../../types/catalog';
import { formatPrice } from '../../utils/whatsapp';
import { Badge, type BadgeVariant } from '../common';
import { CandleIllustration } from '../common/CandleIllustration';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

const badgeVariantMap: Record<string, BadgeVariant> = {
  aromatic: 'sage',
  massage: 'terracotta',
  custom: 'gold',
};

export const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => {
  const [imgError, setImgError] = useState(false);
  const startPrice = product.prices.find((p) => p.price !== null)?.price ?? null;

  return (
    <article className="h-full group bg-white rounded-3xl overflow-hidden border border-[var(--color-kraft-dark)] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col">
      <div
        className="relative overflow-hidden shrink-0"
        style={{ height: '260px', backgroundColor: `${product.imageFallbackColor}10` }}
      >
        {!imgError ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-4 transition-transform duration-700 group-hover:scale-105"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <CandleIllustration color={product.imageFallbackColor} name={product.name} />
        )}

        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />

        <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
          <Badge variant={badgeVariantMap[product.category]} size="md">
            {product.categoryLabel}
          </Badge>
          {product.badge && (
            <Badge variant="gold" size="md">
              {product.badge}
            </Badge>
          )}
        </div>

        {product.featured && (
          <div className="absolute top-4 right-4">
            <span className="font-sans text-[11px] font-bold uppercase tracking-wider bg-[var(--color-espresso)] text-[var(--color-linen)] px-3 py-1 rounded-full shadow-sm">
              Destaque
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-6 sm:p-7">
        <h3 className="font-sans font-bold text-xl sm:text-2xl text-[var(--color-espresso)] mb-2 tracking-tight leading-snug">
          {product.name}
        </h3>

        {product.olfactoryNotes && product.olfactoryNotes.top.length > 0 && (
          <p className="font-sans text-xs sm:text-sm text-[var(--color-charcoal-light)] mb-3 leading-relaxed">
            <span className="font-bold text-[var(--color-espresso)] uppercase text-[11px] tracking-wider mr-1.5">
              Notas:
            </span>
            {product.olfactoryNotes.top.join(' · ')}
          </p>
        )}

        <p className="font-sans text-sm text-[var(--color-charcoal)] leading-relaxed line-clamp-3 flex-1 mb-5">
          {product.description}
        </p>

        <div className="mb-5 pb-5 border-b border-[var(--color-kraft-dark)]">
          {startPrice !== null ? (
            <div>
              <p className="font-sans text-xs font-semibold text-[var(--color-charcoal-light)] uppercase tracking-wider mb-1">
                A partir de
              </p>
              <p className="font-sans font-extrabold text-2xl sm:text-3xl text-[var(--color-espresso)] tracking-tight">
                {formatPrice(startPrice)}
              </p>
            </div>
          ) : (
            <p className="font-sans font-bold text-2xl text-[var(--color-gold-dark)]">
              Sob Consulta
            </p>
          )}
        </div>

        <button
          onClick={() => onViewDetails(product)}
          className="w-full font-sans text-sm sm:text-base font-bold py-3.5 rounded-full border-2 border-[var(--color-espresso)] text-[var(--color-espresso)] hover:bg-[var(--color-espresso)] hover:text-[var(--color-linen)] transition-all duration-200 tracking-wide cursor-pointer"
        >
          Ver Detalhes / Pirâmide Olfativa
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
