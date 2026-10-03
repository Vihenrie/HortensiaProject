import React from 'react';

interface BotanicalDividerProps {
  className?: string;
  variant?: 'branch' | 'simple' | 'floral' | 'grand';
}

const BotanicalDivider: React.FC<BotanicalDividerProps> = ({
  className = '',
  variant = 'branch',
}) => {

  /* ── simple ─────────────────────────────────────────────── */
  if (variant === 'simple') {
    return (
      <div className={`flex items-center gap-5 my-10 ${className}`}>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--color-kraft-dark)] to-[var(--color-kraft-dark)]" />
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          {[0,60,120,180,240,300].map(a => {
            const r = a * Math.PI / 180;
            return <ellipse key={a} cx={11 + Math.cos(r)*5} cy={11 + Math.sin(r)*5}
              rx="2.8" ry="4.5"
              fill="var(--color-gold)" opacity="0.55"
              transform={`rotate(${a} ${11 + Math.cos(r)*5} ${11 + Math.sin(r)*5})`} />;
          })}
          <circle cx="11" cy="11" r="2.2" fill="var(--color-gold)" />
        </svg>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-[var(--color-kraft-dark)] to-[var(--color-kraft-dark)]" />
      </div>
    );
  }

  /* ── floral ──────────────────────────────────────────────── */
  if (variant === 'floral') {
    return (
      <div className={`flex items-center justify-center gap-4 my-14 ${className}`}>
        <svg width="120" height="28" viewBox="0 0 120 28" fill="none">
          <path d="M0 14 Q40 14 80 12 Q95 11 110 13" stroke="var(--color-kraft-dark)" strokeWidth="1" fill="none"/>
          <path d="M30 13 Q33 5 40 3"  stroke="var(--color-kraft-dark)" strokeWidth="0.7" fill="none"/>
          <path d="M60 12 Q63 4 70 2"  stroke="var(--color-kraft-dark)" strokeWidth="0.7" fill="none"/>
          <path d="M80 12 Q83 6 88 5"  stroke="var(--color-kraft-dark)" strokeWidth="0.7" fill="none"/>
          <ellipse cx="41" cy="2.5" rx="5" ry="3" fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.6" transform="rotate(-35 41 2.5)"/>
          <ellipse cx="71" cy="1.5" rx="4.5" ry="2.5" fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.6" transform="rotate(-45 71 1.5)"/>
          <ellipse cx="89" cy="4.5" rx="4" ry="2" fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.6" transform="rotate(-20 89 4.5)"/>
          <circle cx="25" cy="16" r="1.8" fill="var(--color-terracotta-light)" opacity="0.5"/>
          <circle cx="50" cy="14" r="1.5" fill="var(--color-terracotta-light)" opacity="0.4"/>
        </svg>

        <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
          {[0,60,120,180,240,300].map(a => {
            const r = a * Math.PI / 180;
            return <ellipse key={a} cx={22+Math.cos(r)*9} cy={22+Math.sin(r)*9}
              rx="5" ry="8"
              fill="var(--color-lavender-pale)" stroke="var(--color-lavender)" strokeWidth="0.6"
              opacity="0.8"
              transform={`rotate(${a} ${22+Math.cos(r)*9} ${22+Math.sin(r)*9})`} />;
          })}
          <circle cx="22" cy="22" r="4" fill="var(--color-gold)" opacity="0.85"/>
          <circle cx="22" cy="22" r="7" fill="none" stroke="var(--color-gold)" strokeWidth="0.5" opacity="0.4"/>
        </svg>

        <svg width="120" height="28" viewBox="0 0 120 28" fill="none" style={{transform:'scaleX(-1)'}}>
          <path d="M0 14 Q40 14 80 12 Q95 11 110 13" stroke="var(--color-kraft-dark)" strokeWidth="1" fill="none"/>
          <path d="M30 13 Q33 5 40 3"  stroke="var(--color-kraft-dark)" strokeWidth="0.7" fill="none"/>
          <path d="M60 12 Q63 4 70 2"  stroke="var(--color-kraft-dark)" strokeWidth="0.7" fill="none"/>
          <path d="M80 12 Q83 6 88 5"  stroke="var(--color-kraft-dark)" strokeWidth="0.7" fill="none"/>
          <ellipse cx="41" cy="2.5" rx="5" ry="3" fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.6" transform="rotate(-35 41 2.5)"/>
          <ellipse cx="71" cy="1.5" rx="4.5" ry="2.5" fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.6" transform="rotate(-45 71 1.5)"/>
          <ellipse cx="89" cy="4.5" rx="4" ry="2" fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.6" transform="rotate(-20 89 4.5)"/>
          <circle cx="25" cy="16" r="1.8" fill="var(--color-terracotta-light)" opacity="0.5"/>
          <circle cx="50" cy="14" r="1.5" fill="var(--color-terracotta-light)" opacity="0.4"/>
        </svg>
      </div>
    );
  }

  /* ── grand (hero / page divider) ─────────────────────────── */
  if (variant === 'grand') {
    return (
      <div className={`relative flex items-center justify-center my-16 overflow-visible ${className}`}>
        <svg width="100%" height="60" viewBox="0 0 700 60" preserveAspectRatio="xMidYMid meet" fill="none">
          {/* ── Main horizontal lines ── */}
          <line x1="0" y1="30" x2="270" y2="30" stroke="var(--color-kraft-dark)" strokeWidth="0.8"/>
          <line x1="430" y1="30" x2="700" y2="30" stroke="var(--color-kraft-dark)" strokeWidth="0.8"/>

          {/* ── Left branch system ── */}
          {/* main branch curving up */}
          <path d="M50 30 Q90 30 120 22 Q150 14 180 18 Q210 22 240 28" stroke="var(--color-kraft-dark)" strokeWidth="1" fill="none"/>
          {/* sub-branches */}
          <path d="M90 28 Q95 18 105 12"   stroke="var(--color-kraft-dark)" strokeWidth="0.7" fill="none"/>
          <path d="M130 22 Q135 12 144 8"  stroke="var(--color-kraft-dark)" strokeWidth="0.7" fill="none"/>
          <path d="M160 18 Q164 8 172 5"   stroke="var(--color-kraft-dark)" strokeWidth="0.7" fill="none"/>
          <path d="M200 20 Q204 12 210 10" stroke="var(--color-kraft-dark)" strokeWidth="0.6" fill="none"/>
          {/* lower sub-branch */}
          <path d="M110 25 Q115 36 122 40" stroke="var(--color-kraft-dark)" strokeWidth="0.6" fill="none"/>
          <path d="M150 20 Q155 32 160 38" stroke="var(--color-kraft-dark)" strokeWidth="0.6" fill="none"/>

          {/* Leaves — upper */}
          <ellipse cx="106" cy="11" rx="7" ry="3.5" fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.6" transform="rotate(-50 106 11)"/>
          <ellipse cx="145" cy="7"  rx="7" ry="3"   fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.6" transform="rotate(-55 145 7)"/>
          <ellipse cx="173" cy="4"  rx="6" ry="2.8" fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.6" transform="rotate(-40 173 4)"/>
          <ellipse cx="211" cy="9"  rx="5.5" ry="2.5" fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.5" transform="rotate(-30 211 9)"/>
          {/* Leaves — lower */}
          <ellipse cx="123" cy="41" rx="6" ry="3" fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.5" transform="rotate(40 123 41)"/>
          <ellipse cx="161" cy="39" rx="5.5" ry="2.5" fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.5" transform="rotate(35 161 39)"/>

          {/* Berries left */}
          <circle cx="75"  cy="31" r="2.5" fill="var(--color-terracotta-light)" opacity="0.55"/>
          <circle cx="220" cy="25" r="2"   fill="var(--color-terracotta-light)" opacity="0.45"/>
          <circle cx="185" cy="20" r="1.8" fill="var(--color-gold)" opacity="0.5"/>

          {/* ── Center ornament — full hydrangea cluster ── */}
          {/* Outer ring of tiny flowers */}
          {[0,45,90,135,180,225,270,315].map((a,i) => {
            const rad = a * Math.PI / 180;
            const cx = 350 + Math.cos(rad)*20;
            const cy = 30  + Math.sin(rad)*16;
            return (
              <g key={i}>
                {[0,90,180,270].map(pa => {
                  const pr = pa * Math.PI / 180;
                  return <ellipse key={pa}
                    cx={cx + Math.cos(pr)*4} cy={cy + Math.sin(pr)*4}
                    rx="3" ry="4.5"
                    fill="var(--color-lavender-pale)" stroke="var(--color-lavender)" strokeWidth="0.4"
                    opacity="0.75"
                    transform={`rotate(${pa} ${cx+Math.cos(pr)*4} ${cy+Math.sin(pr)*4})`}/>;
                })}
                <circle cx={cx} cy={cy} r="2" fill="var(--color-gold)" opacity="0.6"/>
              </g>
            );
          })}
          {/* Inner ring */}
          {[0,60,120,180,240,300].map((a,i) => {
            const rad = a * Math.PI / 180;
            const cx = 350 + Math.cos(rad)*9;
            const cy = 30  + Math.sin(rad)*7;
            return (
              <g key={`inner-${i}`}>
                {[0,90,180,270].map(pa => {
                  const pr = pa * Math.PI / 180;
                  return <ellipse key={pa}
                    cx={cx + Math.cos(pr)*3} cy={cy + Math.sin(pr)*3}
                    rx="2.2" ry="3.5"
                    fill="var(--color-lavender-pale)" stroke="var(--color-lavender)" strokeWidth="0.35"
                    opacity="0.7"
                    transform={`rotate(${pa} ${cx+Math.cos(pr)*3} ${cy+Math.sin(pr)*3})`}/>;
                })}
                <circle cx={cx} cy={cy} r="1.5" fill="var(--color-gold)" opacity="0.7"/>
              </g>
            );
          })}
          {/* Center */}
          <circle cx="350" cy="30" r="4" fill="var(--color-gold)" opacity="0.9"/>
          <circle cx="350" cy="30" r="8" fill="none" stroke="var(--color-gold)" strokeWidth="0.5" opacity="0.35"/>
          <circle cx="350" cy="30" r="24" fill="none" stroke="var(--color-kraft-dark)" strokeWidth="0.4" opacity="0.3" strokeDasharray="2 4"/>

          {/* ── Right branch (mirror) ── */}
          <path d="M650 30 Q610 30 580 22 Q550 14 520 18 Q490 22 460 28" stroke="var(--color-kraft-dark)" strokeWidth="1" fill="none"/>
          <path d="M610 28 Q605 18 595 12"  stroke="var(--color-kraft-dark)" strokeWidth="0.7" fill="none"/>
          <path d="M570 22 Q565 12 556 8"   stroke="var(--color-kraft-dark)" strokeWidth="0.7" fill="none"/>
          <path d="M540 18 Q536 8 528 5"    stroke="var(--color-kraft-dark)" strokeWidth="0.7" fill="none"/>
          <path d="M500 20 Q496 12 490 10"  stroke="var(--color-kraft-dark)" strokeWidth="0.6" fill="none"/>
          <path d="M590 25 Q585 36 578 40"  stroke="var(--color-kraft-dark)" strokeWidth="0.6" fill="none"/>
          <path d="M550 20 Q545 32 540 38"  stroke="var(--color-kraft-dark)" strokeWidth="0.6" fill="none"/>

          <ellipse cx="594" cy="11" rx="7" ry="3.5" fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.6" transform="rotate(50 594 11)"/>
          <ellipse cx="555" cy="7"  rx="7" ry="3"   fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.6" transform="rotate(55 555 7)"/>
          <ellipse cx="527" cy="4"  rx="6" ry="2.8" fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.6" transform="rotate(40 527 4)"/>
          <ellipse cx="489" cy="9"  rx="5.5" ry="2.5" fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.5" transform="rotate(30 489 9)"/>
          <ellipse cx="577" cy="41" rx="6" ry="3"   fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.5" transform="rotate(-40 577 41)"/>
          <ellipse cx="539" cy="39" rx="5.5" ry="2.5" fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.5" transform="rotate(-35 539 39)"/>

          <circle cx="625" cy="31" r="2.5" fill="var(--color-terracotta-light)" opacity="0.55"/>
          <circle cx="480" cy="25" r="2"   fill="var(--color-terracotta-light)" opacity="0.45"/>
          <circle cx="515" cy="20" r="1.8" fill="var(--color-gold)" opacity="0.5"/>
        </svg>
      </div>
    );
  }

  /* ── branch (default) ────────────────────────────────────── */
  return (
    <div className={`flex items-center justify-center my-12 overflow-visible ${className}`}>
      <svg width="100%" height="44" viewBox="0 0 500 44" preserveAspectRatio="xMidYMid meet" fill="none">
        {/* horizontal lines */}
        <line x1="0"   y1="22" x2="190" y2="22" stroke="var(--color-kraft-dark)" strokeWidth="0.8"/>
        <line x1="310" y1="22" x2="500" y2="22" stroke="var(--color-kraft-dark)" strokeWidth="0.8"/>

        {/* Left decorative branch */}
        <path d="M20 22 Q60 22 90 16 Q115 11 150 15 Q170 17 185 20" stroke="var(--color-kraft-dark)" strokeWidth="0.9" fill="none"/>
        <path d="M55 21 Q58 13 66 9"   stroke="var(--color-kraft-dark)" strokeWidth="0.65" fill="none"/>
        <path d="M95 16 Q99 8 107 5"   stroke="var(--color-kraft-dark)" strokeWidth="0.65" fill="none"/>
        <path d="M130 14 Q134 6 141 4" stroke="var(--color-kraft-dark)" strokeWidth="0.6"  fill="none"/>
        <path d="M75  19 Q79 28 85 32" stroke="var(--color-kraft-dark)" strokeWidth="0.55" fill="none"/>

        {/* Leaves left */}
        <ellipse cx="67" cy="8"   rx="6.5" ry="3"   fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.6" transform="rotate(-48 67 8)"/>
        <ellipse cx="108" cy="4"  rx="6"   ry="2.8" fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.6" transform="rotate(-52 108 4)"/>
        <ellipse cx="142" cy="3"  rx="5.5" ry="2.5" fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.55" transform="rotate(-38 142 3)"/>
        <ellipse cx="86"  cy="33" rx="5.5" ry="2.5" fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.5" transform="rotate(42 86 33)"/>

        {/* Berries left */}
        <circle cx="42"  cy="22" r="2.2" fill="var(--color-terracotta-light)" opacity="0.5"/>
        <circle cx="160" cy="17" r="1.8" fill="var(--color-gold)" opacity="0.55"/>

        {/* Center hydrangea */}
        {[0,60,120,180,240,300].map((a,i) => {
          const rad = a * Math.PI / 180;
          const cx = 250 + Math.cos(rad)*12;
          const cy = 22  + Math.sin(rad)*9;
          return (
            <g key={i}>
              {[0,90,180,270].map(pa => {
                const pr = pa * Math.PI / 180;
                return <ellipse key={pa}
                  cx={cx+Math.cos(pr)*3.5} cy={cy+Math.sin(pr)*3.5}
                  rx="2.5" ry="4"
                  fill="var(--color-lavender-pale)" stroke="var(--color-lavender)" strokeWidth="0.4"
                  opacity="0.8"
                  transform={`rotate(${pa} ${cx+Math.cos(pr)*3.5} ${cy+Math.sin(pr)*3.5})`}/>;
              })}
              <circle cx={cx} cy={cy} r="1.8" fill="var(--color-gold)" opacity="0.7"/>
            </g>
          );
        })}
        <circle cx="250" cy="22" r="3" fill="var(--color-gold)" opacity="0.9"/>
        <circle cx="250" cy="22" r="18" fill="none" stroke="var(--color-kraft-dark)" strokeWidth="0.4" opacity="0.3" strokeDasharray="2 3"/>

        {/* Right branch (mirror) */}
        <path d="M480 22 Q440 22 410 16 Q385 11 350 15 Q330 17 315 20" stroke="var(--color-kraft-dark)" strokeWidth="0.9" fill="none"/>
        <path d="M445 21 Q442 13 434 9"   stroke="var(--color-kraft-dark)" strokeWidth="0.65" fill="none"/>
        <path d="M405 16 Q401 8 393 5"    stroke="var(--color-kraft-dark)" strokeWidth="0.65" fill="none"/>
        <path d="M370 14 Q366 6 359 4"    stroke="var(--color-kraft-dark)" strokeWidth="0.6"  fill="none"/>
        <path d="M425 19 Q421 28 415 32"  stroke="var(--color-kraft-dark)" strokeWidth="0.55" fill="none"/>

        <ellipse cx="433" cy="8"   rx="6.5" ry="3"   fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.6" transform="rotate(48 433 8)"/>
        <ellipse cx="392" cy="4"   rx="6"   ry="2.8" fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.6" transform="rotate(52 392 4)"/>
        <ellipse cx="358" cy="3"   rx="5.5" ry="2.5" fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.55" transform="rotate(38 358 3)"/>
        <ellipse cx="414" cy="33"  rx="5.5" ry="2.5" fill="var(--color-sage-pale)" stroke="var(--color-sage)" strokeWidth="0.5" transform="rotate(-42 414 33)"/>

        <circle cx="458" cy="22" r="2.2" fill="var(--color-terracotta-light)" opacity="0.5"/>
        <circle cx="340" cy="17" r="1.8" fill="var(--color-gold)" opacity="0.55"/>
      </svg>
    </div>
  );
};

export default BotanicalDivider;
