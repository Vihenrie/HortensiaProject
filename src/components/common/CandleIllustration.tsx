import React from 'react';

interface CandleIllustrationProps {
  color: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const CandleIllustration: React.FC<CandleIllustrationProps> = ({
  color,
  name,
  size = 'md',
}) => {
  const scale = size === 'sm' ? 0.75 : size === 'lg' ? 1.2 : 1;

  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-3 p-6 select-none"
      style={{ backgroundColor: `${color}12` }}
    >
      <svg
        width={120 * scale}
        height={160 * scale}
        viewBox="0 0 140 180"
        fill="none"
        aria-hidden="true"
      >
        <ellipse cx="70" cy="24" rx="11" ry="18" fill={color} opacity="0.55" />
        <ellipse cx="70" cy="30" rx="6" ry="11" fill="#FAF7F2" opacity="0.5" />
        <line x1="70" y1="42" x2="70" y2="58" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <rect x="40" y="58" width="60" height="98" rx="9" fill={color} opacity="0.18" />
        <rect x="40" y="58" width="60" height="98" rx="9" stroke={color} strokeWidth="1.8" fill="none" />
        <path d="M40 104 Q20 96 14 74 Q25 83 33 95 Q37 101 40 108Z" fill={color} opacity="0.15" stroke={color} strokeWidth="0.5" />
        <path d="M100 104 Q120 96 126 74 Q115 83 107 95 Q103 101 100 108Z" fill={color} opacity="0.15" stroke={color} strokeWidth="0.5" />
        <circle cx="16" cy="76" r="5" fill={color} opacity="0.28" />
        <circle cx="124" cy="76" r="5" fill={color} opacity="0.28" />
      </svg>
      {name && (
        <p className="font-sans font-bold text-sm text-center leading-tight" style={{ color }}>
          {name}
        </p>
      )}
    </div>
  );
};
