import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import type { Product, PriceOption } from '../../types/catalog';
import { USAGE_INFO } from '../../constants/productUsage';
import { WHATSAPP_DISPLAY } from '../../constants/navigation';
import { useEscapeKey } from '../../hooks/useEscapeKey';
import { useModalLock } from '../../hooks/useModalLock';
import { buildProductOrderLink, buildDirectWhatsAppLink } from '../../utils/whatsapp';
import { Badge, WhatsAppButton, type BadgeVariant } from '../common';
import { CandleIllustration } from '../common/CandleIllustration';
import OlfactoryPyramid from '../catalog/OlfactoryPyramid';
import QuantityComboSelector from './QuantityComboSelector';
import { ProductSpecs } from './ProductSpecs';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

const badgeVariantMap: Record<string, BadgeVariant> = {
  aromatic: 'sage',
  massage: 'terracotta',
  custom: 'gold',
};

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const [selectedOption, setSelectedOption] = useState<PriceOption | null>(null);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (product) {
      setSelectedOption(product.prices[0]);
      setImgError(false);
    }
  }, [product]);

  useEscapeKey(onClose, Boolean(product));
  useModalLock(Boolean(product));

  if (!product || !selectedOption) return null;

  const info = USAGE_INFO[product.category] ?? USAGE_INFO.aromatic;
  const whatsappLink =
    selectedOption.price !== null
      ? buildProductOrderLink(product.name, selectedOption.qty, selectedOption.label)
      : buildDirectWhatsAppLink();

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in cursor-pointer"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className="relative z-10 w-full max-w-5xl bg-[var(--color-linen)] rounded-t-[2rem] sm:rounded-[2rem] overflow-hidden animate-scale-in shadow-2xl flex flex-col"
        style={{ maxHeight: '94vh' }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/90 border border-[var(--color-kraft-dark)] flex items-center justify-center hover:bg-[var(--color-espresso)] hover:text-white transition-all duration-200 text-[var(--color-espresso)] shadow-sm cursor-pointer"
          aria-label="Fechar janela"
        >
          <X size={20} strokeWidth={2} />
        </button>

        <div className="overflow-y-auto flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div
              className="relative overflow-hidden flex items-center justify-center p-8"
              style={{ minHeight: 380, backgroundColor: `${product.imageFallbackColor}12` }}
            >
              {!imgError ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full max-h-[360px] object-contain drop-shadow-md"
                  onError={() => setImgError(true)}
                />
              ) : (
                <CandleIllustration color={product.imageFallbackColor} name={product.name} size="lg" />
              )}

              {product.category === 'custom' && (
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {[2, 3, 4].map((n) => (
                    <img
                      key={n}
                      src={`/assets/products/personalizados/img${n}.png`}
                      alt={`Personalizado ${n}`}
                      className="w-16 h-16 object-cover rounded-2xl border-2 border-white shadow-md"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-between bg-white/40">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant={badgeVariantMap[product.category]} size="md">
                    {product.categoryLabel}
                  </Badge>
                  {product.badge && (
                    <Badge variant="gold" size="md">
                      {product.badge}
                    </Badge>
                  )}
                </div>

                <h2
                  id="product-modal-title"
                  className="font-sans font-extrabold text-3xl sm:text-4xl text-[var(--color-espresso)] mb-4 tracking-tight leading-tight"
                >
                  {product.name}
                </h2>

                <p className="font-sans text-sm sm:text-base text-[var(--color-charcoal)] leading-relaxed mb-6">
                  {product.description}
                </p>
              </div>

              <ProductSpecs info={info} />
            </div>
          </div>

          <div className="border-t border-[var(--color-kraft-dark)] grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-8 md:p-10 md:border-r border-[var(--color-kraft-dark)] bg-white/30">
              {product.olfactoryNotes ? (
                <OlfactoryPyramid notes={product.olfactoryNotes} />
              ) : (
                <div className="bg-white rounded-2xl p-6 border border-[var(--color-kraft-dark)] shadow-xs">
                  <h4 className="font-sans font-bold text-xl text-[var(--color-espresso)] mb-3">
                    Modo de Uso
                  </h4>
                  <p className="font-sans text-sm sm:text-base text-[var(--color-charcoal)] leading-relaxed">
                    {info.usage}
                  </p>
                </div>
              )}
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-between gap-6 bg-white/60">
              <div className="space-y-6">
                <QuantityComboSelector
                  product={product}
                  selected={selectedOption}
                  onChange={setSelectedOption}
                />

                {product.olfactoryNotes && (
                  <div className="rounded-2xl p-4 bg-[var(--color-kraft)]/60 border border-[var(--color-kraft-dark)]">
                    <p className="font-sans font-bold text-xs uppercase tracking-wider text-[var(--color-espresso)] mb-1">
                      Recomendação de uso
                    </p>
                    <p className="font-sans text-xs sm:text-sm text-[var(--color-charcoal)] leading-relaxed">
                      {info.usage}
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-3 pt-2">
                <WhatsAppButton href={whatsappLink} size="lg" variant="primary" className="w-full text-base py-4 font-bold shadow-md">
                  {selectedOption.price !== null
                    ? `Pedir ${selectedOption.qty > 1 ? selectedOption.label : '1 unidade'} via WhatsApp`
                    : 'Solicitar Orçamento via WhatsApp'}
                </WhatsAppButton>

                <p className="font-sans text-xs text-center text-[var(--color-charcoal-light)]">
                  Ateliê Hortênsia Brasil · WhatsApp {WHATSAPP_DISPLAY}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
