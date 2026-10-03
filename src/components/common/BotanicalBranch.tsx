import React from 'react';

interface BotanicalBranchProps {
  className?: string;
  mirrored?: boolean;
}

export const BotanicalBranch: React.FC<BotanicalBranchProps> = ({
  className = '',
  mirrored = false,
}) => {
  return (
    <svg
      width="420"
      height="580"
      viewBox="0 0 420 580"
      fill="none"
      aria-hidden="true"
      className={className}
      style={mirrored ? { transform: 'scaleX(-1)' } : undefined}
    >
      {/* Main woody stem */}
      <path
        d="M210 580 Q205 520 212 470 Q218 420 208 375 Q198 330 208 285 Q218 240 206 195 Q198 155 208 115 Q215 80 208 45"
        stroke="#47624C"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
      />

      {/* Primary lateral branches */}
      <path
        d="M212 470 Q160 445 125 410 Q98 380 85 345"
        stroke="#47624C"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M208 415 Q260 390 295 355 Q318 328 325 295"
        stroke="#47624C"
        strokeWidth="2.4"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M208 360 Q170 335 145 300 Q130 275 128 245"
        stroke="#47624C"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M208 310 Q245 285 270 252 Q285 230 288 200"
        stroke="#47624C"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M206 250 Q178 225 165 195 Q158 170 162 142"
        stroke="#47624C"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
      />

      {/* Secondary twigs */}
      <path d="M125 410 Q100 388 92 355" stroke="#47624C" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M295 355 Q318 330 320 300" stroke="#47624C" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M145 300 Q125 280 120 252" stroke="#47624C" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M212 470 Q180 475 155 498 Q138 515 132 535" stroke="#47624C" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M212 470 Q242 478 265 500 Q280 518 284 538" stroke="#47624C" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Rich Botanical Leaves — Left */}
      <path d="M212 470 Q165 460 130 428 Q148 424 172 442 Q190 455 212 470Z" fill="#C5D5C6" stroke="#47624C" strokeWidth="1.2" />
      <path d="M208 415 Q175 396 158 368 Q174 370 188 388 Q198 402 208 415Z" fill="#C5D5C6" stroke="#47624C" strokeWidth="1.1" />
      <path d="M208 360 Q176 342 162 316 Q178 320 190 338 Q198 350 208 360Z" fill="#CAD8CB" stroke="#47624C" strokeWidth="1" />
      <path d="M208 310 Q178 292 168 266 Q184 270 194 288 Q200 300 208 310Z" fill="#CAD8CB" stroke="#47624C" strokeWidth="1" />
      <path d="M206 250 Q178 234 170 210 Q184 214 194 230 Q200 240 206 250Z" fill="#D3DFD4" stroke="#47624C" strokeWidth="0.9" />

      {/* Rich Botanical Leaves — Right */}
      <path d="M212 470 Q260 460 292 428 Q274 424 250 442 Q232 455 212 470Z" fill="#C5D5C6" stroke="#47624C" strokeWidth="1.2" />
      <path d="M208 415 Q242 396 258 368 Q242 370 228 388 Q218 402 208 415Z" fill="#C5D5C6" stroke="#47624C" strokeWidth="1.1" />
      <path d="M208 360 Q240 342 254 316 Q238 320 226 338 Q218 350 208 360Z" fill="#CAD8CB" stroke="#47624C" strokeWidth="1" />
      <path d="M208 310 Q238 292 248 266 Q232 270 222 288 Q216 300 208 310Z" fill="#CAD8CB" stroke="#47624C" strokeWidth="1" />

      {/* Leaf Veins */}
      <path d="M165 442 Q180 452 196 462" stroke="#47624C" strokeWidth="0.6" fill="none" opacity="0.7" />
      <path d="M258 442 Q242 452 226 462" stroke="#47624C" strokeWidth="0.6" fill="none" opacity="0.7" />
      <path d="M172 388 Q185 398 198 408" stroke="#47624C" strokeWidth="0.5" fill="none" opacity="0.6" />
      <path d="M244 388 Q230 398 218 408" stroke="#47624C" strokeWidth="0.5" fill="none" opacity="0.6" />

      {/* Top Hydrangea Cluster */}
      {[
        [208, 45], [185, 30], [230, 30], [172, 16], [220, 16], [198, 2], [215, 2],
        [175, 52], [240, 52], [188, 68], [228, 68], [208, 80],
      ].map(([cx, cy], i) => (
        <g key={`top-${i}`}>
          {[0, 90, 180, 270].map((a) => {
            const r = (a * Math.PI) / 180;
            return (
              <ellipse
                key={a}
                cx={cx + Math.cos(r) * 8}
                cy={cy + Math.sin(r) * 8}
                rx="6.5"
                ry="9.5"
                fill="#DDD3E5"
                stroke="#87759A"
                strokeWidth="0.8"
                transform={`rotate(${a} ${cx + Math.cos(r) * 8} ${cy + Math.sin(r) * 8})`}
              />
            );
          })}
          <circle cx={cx} cy={cy} r="3.5" fill="#D4A373" stroke="#B87D3B" strokeWidth="0.5" />
        </g>
      ))}

      {/* Left Branch Flower Cluster */}
      {[
        [85, 345], [68, 328], [102, 328], [75, 312], [95, 312], [85, 300], [62, 340], [106, 340],
      ].map(([cx, cy], i) => (
        <g key={`lft-${i}`}>
          {[0, 90, 180, 270].map((a) => {
            const r = (a * Math.PI) / 180;
            return (
              <ellipse
                key={a}
                cx={cx + Math.cos(r) * 7}
                cy={cy + Math.sin(r) * 7}
                rx="5.5"
                ry="8"
                fill="#DDD3E5"
                stroke="#87759A"
                strokeWidth="0.75"
                transform={`rotate(${a} ${cx + Math.cos(r) * 7} ${cy + Math.sin(r) * 7})`}
              />
            );
          })}
          <circle cx={cx} cy={cy} r="3" fill="#D4A373" stroke="#B87D3B" strokeWidth="0.5" />
        </g>
      ))}

      {/* Right Branch Flower Cluster */}
      {[
        [325, 295], [308, 278], [340, 278], [315, 262], [335, 262], [325, 250], [304, 290], [346, 290],
      ].map(([cx, cy], i) => (
        <g key={`rgt-${i}`}>
          {[0, 90, 180, 270].map((a) => {
            const r = (a * Math.PI) / 180;
            return (
              <ellipse
                key={a}
                cx={cx + Math.cos(r) * 6.5}
                cy={cy + Math.sin(r) * 6.5}
                rx="5"
                ry="7.5"
                fill="#E1D7E8"
                stroke="#87759A"
                strokeWidth="0.7"
                transform={`rotate(${a} ${cx + Math.cos(r) * 6.5} ${cy + Math.sin(r) * 6.5})`}
              />
            );
          })}
          <circle cx={cx} cy={cy} r="2.8" fill="#D4A373" stroke="#B87D3B" strokeWidth="0.5" />
        </g>
      ))}

      {/* Mid Branch Flower Clusters */}
      {[[128, 245], [114, 232], [142, 232], [122, 222], [134, 222]].map(([cx, cy], i) => (
        <g key={`ml-${i}`}>
          {[0, 90, 180, 270].map((a) => {
            const r = (a * Math.PI) / 180;
            return (
              <ellipse
                key={a}
                cx={cx + Math.cos(r) * 5.5}
                cy={cy + Math.sin(r) * 5.5}
                rx="4.5"
                ry="6.5"
                fill="#E5DCED"
                stroke="#87759A"
                strokeWidth="0.65"
                transform={`rotate(${a} ${cx + Math.cos(r) * 5.5} ${cy + Math.sin(r) * 5.5})`}
              />
            );
          })}
          <circle cx={cx} cy={cy} r="2.5" fill="#D4A373" />
        </g>
      ))}

      {[[288, 200], [274, 188], [302, 188], [282, 178], [294, 178]].map(([cx, cy], i) => (
        <g key={`mr-${i}`}>
          {[0, 90, 180, 270].map((a) => {
            const r = (a * Math.PI) / 180;
            return (
              <ellipse
                key={a}
                cx={cx + Math.cos(r) * 5}
                cy={cy + Math.sin(r) * 5}
                rx="4"
                ry="6"
                fill="#E5DCED"
                stroke="#87759A"
                strokeWidth="0.6"
                transform={`rotate(${a} ${cx + Math.cos(r) * 5} ${cy + Math.sin(r) * 5})`}
              />
            );
          })}
          <circle cx={cx} cy={cy} r="2.2" fill="#D4A373" />
        </g>
      ))}

      {/* Terracotta Berries */}
      {[
        [145, 185], [178, 222], [238, 252], [112, 385], [308, 335], [152, 528], [268, 532],
      ].map(([cx, cy], i) => (
        <circle
          key={`berry-${i}`}
          cx={cx}
          cy={cy}
          r={i % 2 === 0 ? 4.5 : 3.5}
          fill="#B86B43"
          stroke="#8C482A"
          strokeWidth="0.8"
        />
      ))}
      {[
        [150, 190], [182, 226], [242, 256], [116, 390],
      ].map(([cx, cy], i) => (
        <circle key={`gold-${i}`} cx={cx} cy={cy} r="2.5" fill="#D4A373" />
      ))}
    </svg>
  );
};
