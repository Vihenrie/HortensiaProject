import React, { useState } from 'react';
import type { OlfactoryNote } from '../../types/catalog';

interface OlfactoryPyramidProps {
  notes: OlfactoryNote;
}

type Layer = 'top' | 'heart' | 'base';

interface LayerConfig {
  key: Layer;
  step: string;
  label: string;
  subtitle: string;
  duration: string;
  accentColor: string;
  activeBg: string;
  borderColor: string;
  badgeBorder: string;
}

const LAYERS: LayerConfig[] = [
  {
    key: 'top',
    step: '01',
    label: 'Notas de Saída (Cabeça)',
    subtitle: 'Primeiras impressões percebidas logo ao acender.',
    duration: 'Primeiros 15 minutos',
    accentColor: '#3B5E45',
    activeBg: '#F3F7F4',
    borderColor: '#7F9E87',
    badgeBorder: '#B2C7B8',
  },
  {
    key: 'heart',
    step: '02',
    label: 'Notas de Coração (Corpo)',
    subtitle: 'A identidade aromática que perfuma todo o ambiente.',
    duration: '2 a 4 horas de queima',
    accentColor: '#9A6328',
    activeBg: '#FAF5EE',
    borderColor: '#CDB18B',
    badgeBorder: '#DFCEB5',
  },
  {
    key: 'base',
    step: '03',
    label: 'Notas de Fundo (Fixação)',
    subtitle: 'A memória olfativa que permanece e abraça o espaço.',
    duration: 'Fixação duradoura',
    accentColor: '#7A3822',
    activeBg: '#F9F1ED',
    borderColor: '#CC9885',
    badgeBorder: '#E2BCAD',
  },
];

const OlfactoryPyramid: React.FC<OlfactoryPyramidProps> = ({ notes }) => {
  const [activeLayer, setActiveLayer] = useState<Layer | null>(null);

  const getNotes = (key: Layer): string[] => notes[key] ?? [];

  return (
    <div className="space-y-4">
      <div>
        <h4 className="font-sans font-bold text-xl md:text-2xl text-[var(--color-espresso)] mb-1 tracking-tight">
          Pirâmide Olfativa
        </h4>
        <p className="font-sans text-xs sm:text-sm text-[var(--color-charcoal-light)]">
          Como a fragrância se desenvolve e evolui ao longo da queima
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2 pt-1 pb-2">
        {LAYERS.map((layer) => {
          const count = getNotes(layer.key).length;
          if (count === 0) return null;
          const isActive = activeLayer === layer.key;

          return (
            <button
              key={layer.key}
              onClick={() => setActiveLayer(isActive ? null : layer.key)}
              className="text-left group cursor-pointer transition-all"
            >
              <div
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: layer.accentColor,
                  opacity: isActive || activeLayer === null ? 1 : 0.25,
                }}
              />
              <div className="flex items-center justify-between mt-1.5">
                <span className="font-sans text-[11px] font-bold uppercase tracking-wider text-[var(--color-espresso)]">
                  {layer.step}. {layer.key === 'top' ? 'Saída' : layer.key === 'heart' ? 'Corpo' : 'Fundo'}
                </span>
                <span className="font-sans text-[10px] text-[var(--color-charcoal-light)]">
                  {count} {count === 1 ? 'nota' : 'notas'}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="space-y-3">
        {LAYERS.map((layer) => {
          const layerNotes = getNotes(layer.key);
          if (layerNotes.length === 0) return null;
          const isSelected = activeLayer === layer.key;
          const isOpen = activeLayer === null || isSelected;

          return (
            <div
              key={layer.key}
              onClick={() => setActiveLayer(isSelected ? null : layer.key)}
              className="rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden p-4 sm:p-5 shadow-sm"
              style={{
                backgroundColor: isSelected ? layer.activeBg : '#FFFFFF',
                borderColor: isSelected ? layer.accentColor : '#E5DDD4',
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className="font-sans font-extrabold text-xs px-2 py-0.5 rounded-md text-white"
                    style={{ backgroundColor: layer.accentColor }}
                  >
                    {layer.step}
                  </span>
                  <div>
                    <h5 className="font-sans font-bold text-sm sm:text-base text-[var(--color-espresso)]">
                      {layer.label}
                    </h5>
                    <p className="font-sans text-xs text-[var(--color-charcoal-light)]">
                      {layer.duration}
                    </p>
                  </div>
                </div>

                <span
                  className="font-sans text-xs font-semibold px-2 py-1 rounded-full text-[var(--color-charcoal)] transition-transform duration-200"
                  style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
                >
                  ▼
                </span>
              </div>

              {isOpen && (
                <div className="mt-3.5 pt-3.5 border-t border-[var(--color-kraft-dark)]/60">
                  <p className="font-sans text-xs text-[var(--color-charcoal)] mb-2.5">
                    {layer.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {layerNotes.map((note) => (
                      <span
                        key={note}
                        className="font-sans text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full bg-white border text-[var(--color-espresso)] shadow-xs"
                        style={{ borderColor: layer.borderColor }}
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OlfactoryPyramid;
