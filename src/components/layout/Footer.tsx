import React from 'react';
import { Flower, ExternalLink, MessageCircle, Leaf } from 'lucide-react';
import { buildDirectWhatsAppLink } from '../../utils/whatsapp';
import {
  NAV_ITEMS,
  WHATSAPP_DISPLAY,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
} from '../../constants/navigation';
import type { View } from '../../types/navigation';

interface FooterProps {
  onNavigate: (view: View) => void;
}

const CARE_TIPS: string[] = [
  'Acenda por pelo menos 2h na 1ª vez',
  'Apare o pavio a 5mm antes de usar',
  'Evite correntes de ar durante o uso',
  'Nunca deixe a vela acesa sem supervisão',
];

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[var(--color-espresso)] text-[var(--color-kraft)] pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="footer-botanical" x="0" y="0" width="140" height="140" patternUnits="userSpaceOnUse">
              {[0, 60, 120, 180, 240, 300].map((a, i) => {
                const r = (a * Math.PI) / 180;
                const cx = 70 + Math.cos(r) * 20;
                const cy = 70 + Math.sin(r) * 20;
                return <circle key={i} cx={cx} cy={cy} r="6" fill="var(--color-kraft)" opacity="0.5" />;
              })}
              <circle cx="70" cy="70" r="4" fill="var(--color-gold)" opacity="0.6" />
              <path d="M0 120 Q35 115 70 120 Q105 125 140 120" stroke="var(--color-kraft)" strokeWidth="0.5" fill="none" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-botanical)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <Flower size={32} strokeWidth={1.1} className="text-[var(--color-gold)]" />
              <div>
                <div className="font-serif text-[var(--color-linen)] text-2xl leading-tight">
                  Ateliê Hortênsia
                </div>
                <div className="font-sans text-[var(--color-charcoal-light)] text-xs tracking-wider font-medium">
                  Brasil · Velas Artesanais
                </div>
              </div>
            </div>
            <p className="font-sans text-sm text-[var(--color-charcoal-light)] leading-relaxed">
              Velas botânicas artesanais feitas com carinho, cera 100% vegetal e fragrâncias que acolhem a casa e transformam memórias.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-[var(--color-gold)] text-xl mb-5">Navegação</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.view}>
                  <button
                    onClick={() => onNavigate(item.view)}
                    className="font-sans text-base text-[var(--color-charcoal-light)] hover:text-[var(--color-linen)] transition-colors duration-200 hover:translate-x-1 inline-block cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-[var(--color-gold)] text-xl mb-5">Atendimento</h4>
            <div className="space-y-4">
              <a
                href={buildDirectWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-sans text-base text-[var(--color-charcoal-light)] hover:text-[var(--color-linen)] transition-colors duration-200"
              >
                <MessageCircle size={18} strokeWidth={1.5} className="text-[var(--color-gold)] shrink-0" />
                <span>{WHATSAPP_DISPLAY}</span>
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-sans text-base text-[var(--color-charcoal-light)] hover:text-[var(--color-linen)] transition-colors duration-200"
              >
                <ExternalLink size={18} strokeWidth={1.5} className="text-[var(--color-gold)] shrink-0" />
                <span>{INSTAGRAM_HANDLE}</span>
              </a>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-5">
              <Leaf size={18} strokeWidth={1.5} className="text-[var(--color-gold)]" />
              <h4 className="font-serif text-[var(--color-gold)] text-xl">Cuidados</h4>
            </div>
            <div className="rounded-2xl bg-[#2f2b28] border border-[#3d3733] p-5 space-y-2.5">
              {CARE_TIPS.map((tip) => (
                <p key={tip} className="font-sans text-xs sm:text-sm text-[var(--color-charcoal-light)] flex items-start gap-2">
                  <span className="text-[var(--color-gold)] mt-0.5 shrink-0">·</span>
                  {tip}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#3d3733] mb-10" />

        <div className="text-center mb-8">
          <p className="font-serif italic text-[var(--color-gold)] text-xl sm:text-2xl md:text-3xl leading-relaxed max-w-2xl mx-auto">
            "Obrigada por apoiar o trabalho artesanal e fazer parte da nossa história."
          </p>
        </div>

        <div className="text-center font-sans text-xs sm:text-sm text-[var(--color-charcoal-light)]">
          <span className="flex items-center justify-center gap-1.5">
            Feito com carinho pelo Ateliê Hortênsia Brasil · {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
