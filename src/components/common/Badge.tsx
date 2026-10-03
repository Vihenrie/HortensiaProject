import React from 'react';

export type BadgeVariant = 'gold' | 'sage' | 'terracotta' | 'lavender' | 'kraft';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
}

const variantStyles: Record<BadgeVariant, string> = {
  gold: 'bg-[var(--color-gold)] text-[var(--color-espresso)]',
  sage: 'bg-[var(--color-sage-pale)] text-[var(--color-sage)]',
  terracotta: 'bg-amber-50 text-[var(--color-terracotta)]',
  lavender: 'bg-[var(--color-lavender-pale)] text-[var(--color-lavender)]',
  kraft: 'bg-[var(--color-kraft-dark)] text-[var(--color-charcoal)]',
};

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'gold', size = 'sm' }) => {
  const baseClasses =
    size === 'sm'
      ? 'inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-widest'
      : 'inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest';

  return <span className={`${baseClasses} ${variantStyles[variant]}`}>{children}</span>;
};

export default Badge;
