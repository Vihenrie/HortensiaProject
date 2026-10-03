import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  href: string;
  children?: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const variantClasses = {
  primary:
    'bg-[var(--color-espresso)] text-[var(--color-linen)] hover:bg-[var(--color-charcoal)] hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-[var(--color-kraft-dark)] text-[var(--color-espresso)] hover:bg-[var(--color-gold)] hover:shadow-md hover:-translate-y-0.5',
  ghost:
    'border-2 border-[var(--color-espresso)] text-[var(--color-espresso)] hover:bg-[var(--color-espresso)] hover:text-[var(--color-linen)]',
};

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  href,
  children = 'Pedir no WhatsApp',
  className = '',
  variant = 'primary',
  size = 'md',
}) => {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-bold transition-all duration-200 rounded-full cursor-pointer tracking-wide';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <MessageCircle size={size === 'lg' ? 20 : 16} strokeWidth={2} />
      {children}
    </a>
  );
};

export default WhatsAppButton;
