import React from 'react';
import type { Product, PriceOption } from '../../types/catalog';
import { formatPrice } from '../../utils/whatsapp';
import { Check } from 'lucide-react';

interface QuantityComboSelectorProps {
  product: Product;
  selected: PriceOption;
  onChange: (option: PriceOption) => void;
}

const QuantityComboSelector: React.FC<QuantityComboSelectorProps> = ({
  product,
  selected,
  onChange,
}) => {
  if (product.prices.length === 1 && product.prices[0].price === null) {
    return (
      <div className="py-4 px-5 rounded-2xl bg-white border border-[var(--color-kraft-dark)] shadow-xs">
        <p className="font-sans font-bold text-[var(--color-espresso)] text-base">Orçamento Personalizado</p>
        <p className="font-sans text-xs sm:text-sm text-[var(--color-charcoal)] mt-1">
          Informe a quantidade e detalhes do evento para receber sua proposta sob medida.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="font-sans text-xs font-bold text-[var(--color-espresso)] uppercase tracking-wider">
          Opções e Combos
        </h4>
        <span className="font-sans text-[11px] text-[var(--color-sage)] font-semibold">
          Desconto progressivo
        </span>
      </div>

      {product.prices.map((option, i) => {
        const isSelected = selected.qty === option.qty;
        const isCombo = option.qty > 1;
        const basePrice = product.prices[0].price;
        const unitSaving =
          isCombo && basePrice !== null && option.price !== null
            ? ((basePrice * option.qty - option.price) / (basePrice * option.qty)) * 100
            : 0;

        return (
          <button
            key={i}
            onClick={() => onChange(option)}
            className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all duration-200 text-left cursor-pointer ${
              isSelected
                ? 'border-[var(--color-espresso)] bg-[var(--color-espresso)] text-[var(--color-linen)] shadow-sm'
                : 'border-[var(--color-kraft-dark)] bg-white hover:border-[var(--color-charcoal)] text-[var(--color-espresso)]'
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                  isSelected
                    ? 'border-[var(--color-gold)] bg-[var(--color-gold)]'
                    : 'border-[var(--color-kraft-dark)] bg-transparent'
                }`}
              >
                {isSelected && <Check size={11} strokeWidth={3} className="text-[var(--color-espresso)]" />}
              </div>
              <div>
                <p className={`font-sans text-sm font-bold ${isSelected ? 'text-[var(--color-linen)]' : 'text-[var(--color-espresso)]'}`}>
                  {option.label}
                </p>
                {isCombo && unitSaving > 0 && (
                  <p className={`font-sans text-xs font-medium mt-0.5 ${isSelected ? 'text-[var(--color-gold)]' : 'text-[var(--color-sage)]'}`}>
                    Economia de {unitSaving.toFixed(0)}%
                  </p>
                )}
              </div>
            </div>
            <div className="text-right">
              {option.price !== null ? (
                <>
                  <p className={`font-sans font-extrabold text-xl leading-tight ${isSelected ? 'text-[var(--color-linen)]' : 'text-[var(--color-espresso)]'}`}>
                    {formatPrice(option.price)}
                  </p>
                  {isCombo && option.price !== null && basePrice !== null && (
                    <p className={`font-sans text-xs line-through opacity-50 ${isSelected ? 'text-[var(--color-linen)]' : 'text-[var(--color-charcoal-light)]'}`}>
                      {formatPrice(basePrice * option.qty)}
                    </p>
                  )}
                </>
              ) : (
                <p className="font-sans font-bold text-base text-[var(--color-gold-dark)]">Sob Consulta</p>
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default QuantityComboSelector;
