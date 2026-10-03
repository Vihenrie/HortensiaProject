import React from 'react';
import type { UsageSpec } from '../../constants/productUsage';

interface ProductSpecsProps {
  info: UsageSpec;
}

export const ProductSpecs: React.FC<ProductSpecsProps> = ({ info }) => {
  const specs = [
    { label: 'Queima', value: info.burnTime },
    { label: 'Peso', value: info.weight },
    { label: 'Pavio', value: info.wick },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 pt-2">
      {specs.map((spec) => (
        <div
          key={spec.label}
          className="rounded-2xl p-4 text-center bg-white border border-[var(--color-kraft-dark)] shadow-xs"
        >
          <p className="font-sans text-[11px] font-bold uppercase tracking-wider text-[var(--color-charcoal-light)] mb-1">
            {spec.label}
          </p>
          <p className="font-sans text-sm sm:text-base font-extrabold text-[var(--color-espresso)] leading-snug">
            {spec.value}
          </p>
        </div>
      ))}
    </div>
  );
};
