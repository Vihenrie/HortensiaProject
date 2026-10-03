import React, { useState } from 'react';
import { Menu, X, Flower } from 'lucide-react';
import { useScroll } from '../../hooks/useScroll';
import { NAV_ITEMS } from '../../constants/navigation';
import { buildDirectWhatsAppLink } from '../../utils/whatsapp';
import type { View } from '../../types/navigation';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const isScrolled = useScroll(50);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (view: View) => {
    onNavigate(view);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--color-linen)]/96 backdrop-blur-md shadow-sm border-b border-[var(--color-kraft-dark)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-18 md:h-22" style={{ height: '4.5rem' }}>
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
            aria-label="Página Inicial"
          >
            <div className="relative flex items-center justify-center w-10 h-10">
              <Flower
                size={32}
                strokeWidth={1.1}
                className="text-[var(--color-gold)] transition-transform duration-300 group-hover:rotate-12"
              />
            </div>
            <div>
              <div className="font-serif text-[var(--color-espresso)] text-xl md:text-2xl leading-tight tracking-wide">
                Ateliê Hortênsia
              </div>
              <div className="font-sans text-[var(--color-charcoal-light)] text-[10px] uppercase tracking-[0.25em] leading-tight font-medium">
                Brasil · Velas Artesanais
              </div>
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`font-sans text-base font-semibold transition-all duration-200 relative pb-1 cursor-pointer ${
                  currentView === item.view
                    ? 'text-[var(--color-espresso)]'
                    : 'text-[var(--color-charcoal)] hover:text-[var(--color-espresso)]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-gold)] transition-transform duration-200 origin-left rounded-full ${
                    currentView === item.view ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href={buildDirectWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-bold px-7 py-3 rounded-full bg-[var(--color-espresso)] text-[var(--color-linen)] hover:bg-[var(--color-charcoal)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md tracking-wide"
            >
              Pedir no WhatsApp
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-[var(--color-espresso)] cursor-pointer"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[var(--color-linen)] border-t border-[var(--color-kraft-dark)] animate-fade-in shadow-xl">
          <div className="px-5 py-6 flex flex-col gap-5">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.view}
                onClick={() => handleNavClick(item.view)}
                className={`text-left font-sans text-xl font-bold py-2 border-b border-[var(--color-kraft-dark)] cursor-pointer ${
                  currentView === item.view
                    ? 'text-[var(--color-espresso)]'
                    : 'text-[var(--color-charcoal)]'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href={buildDirectWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center font-sans text-base font-bold px-6 py-4 rounded-full bg-[var(--color-espresso)] text-[var(--color-linen)] mt-2 tracking-wide"
            >
              Pedir no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
