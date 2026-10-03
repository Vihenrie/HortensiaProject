import React from 'react';
import { Filter } from 'lucide-react';

export interface FilterOption {
  key: string;
  label: string;
}

export const CATALOG_FILTERS: FilterOption[] = [
  { key: 'all', label: 'Todas as Velas' },
  { key: 'aromatic', label: 'Velas Aromáticas' },
  { key: 'massage', label: 'Massagem' },
  { key: 'custom', label: 'Sob Medida' },
];

interface ProductFilterProps {
  activeFilter: string;
  onFilterChange: (key: string) => void;
}

export const ProductFilter: React.FC<ProductFilterProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
      <Filter size={16} className="text-[var(--color-charcoal-light)] mr-1 shrink-0" />
      {CATALOG_FILTERS.map((f) => (
        <button
          key={f.key}
          onClick={() => onFilterChange(f.key)}
          className={`font-sans text-sm font-bold px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer ${
            activeFilter === f.key
              ? 'bg-[var(--color-espresso)] text-[var(--color-linen)] shadow-md'
              : 'bg-[var(--color-kraft-dark)] text-[var(--color-charcoal)] hover:bg-[var(--color-espresso)] hover:text-[var(--color-linen)]'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
};
