export interface OlfactoryNote {
  top: string[];
  heart: string[];
  base: string[];
}

export interface PriceOption {
  qty: number;
  label: string;
  price: number | null;
}

export type ProductCategory =
  | 'aromatic'
  | 'massage'
  | 'custom';

export interface Product {
  id: string;
  name: string;
  categoryLabel: string;
  category: ProductCategory;
  badge?: string;
  description: string;
  olfactoryNotes?: OlfactoryNote;
  prices: PriceOption[];
  image: string;
  imageFallbackColor: string;
  featured?: boolean;
}
