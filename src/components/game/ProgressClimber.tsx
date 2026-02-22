import React from 'react';

interface ProgressClimberProps {
  /** Total floors = total words in the block */
  totalFloors: number;
  /** Floors climbed = correct words in this loop */
  floorsClimbed: number;
  /** Current session loop (1-3) */
  loop: number;
  /** Total loops */
  totalLoops: number;
}

const FLOOR_H = 22;
const FLOOR_W = 36;
const SVG_W = 56;
const HEAD_R = 6;
const MARGIN_LEFT = (SVG_W - FLOOR_W) / 2;

// Loop color palette: each loop → slightly different accent
const LOOP_COLORS = ['#00ff87', '#00d4ff', '#ffd700'];

export const ProgressClimber: React.FC<ProgressClimberProps> = ({
  totalFloors,
  floorsClimbed,
  loop,
  totalLoops,
}) => {
  const n = Math.max(1, totalFloors);
  const climbed = Math.min(floorsClimbed, n);
  const accentColor = LOOP_COLORS[(loop - 1) % LOOP_COLORS.length];

  // SVG height: margin top (20) + floors + margin bottom (24 for label)
  const TOP_MARGIN = 16;
  const BOT_MARGIN = 28;
  const svgH = TOP_MARGIN + n * FLOOR_H + BOT_MARGIN;

  // Floor y: floor 0 = bottom, floor n-1 = top (in SVG coords, top of floor)
  const floorY = (i: number) => TOP_MARGIN + (n - 1 - i) * FLOOR_H;

  // Climber head center y: sits on top of the climbed level
  // If 0 climbed → on the ground (below floor 0)
  // If i climbed → on top of floor i-1
  const climberY = climbed === 0
    ? floorY(0) + FLOOR_H - HEAD_R - 2       // ground level
    : floorY(climbed - 1) - HEAD_R - 2;       // on top of last climbed floor

  const climberX = SVG_W / 2;

  return (
    <div className="progress-climber" title={`Ronda ${loop}/${totalLoops} · ${climbed}/${n} palabras`}>
      <svg
        width={SVG_W}
        height={svgH}
        viewBox={`0 0 ${SVG_W} ${svgH}`}
        aria-label={`Progreso: ${climbed} de ${n} palabras`}
      >
        {/* Floors (bottom to top) */}
        {Array.from({ length: n }, (_, i) => {
          const done = i < climbed;
          const y = floorY(i);
          return (
            <g key={i}>
              {/* Floor rectangle */}
              <rect
                x={MARGIN_LEFT}
                y={y}
                width={FLOOR_W}
                height={FLOOR_H - 2}
                rx={3}
                fill={done ? `${accentColor}22` : 'rgba(20,30,50,0.6)'}
                stroke={done ? accentColor : 'rgba(255,255,255,0.1)'}
                strokeWidth={done ? 1.5 : 1}
              />
              {/* Floor number (bottom = 1) */}
              <text
                x={MARGIN_LEFT + FLOOR_W / 2}
                y={y + FLOOR_H - 2 - 5}
                textAnchor="middle"
                fontSize="9"
                fill={done ? accentColor : 'rgba(255,255,255,0.18)'}
                fontFamily="monospace"
                fontWeight={done ? 'bold' : 'normal'}
              >
                {i + 1}
              </text>
            </g>
          );
        })}

        {/* Stick figure climber — animates via CSS transition on the group */}
        <g
          transform={`translate(${climberX}, ${climberY})`}
          style={{ transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1)' }}
        >
          {/* Head */}
          <circle r={HEAD_R} cy={0} fill="none" stroke={accentColor} strokeWidth={1.8} />
          {/* Body */}
          <line x1={0} y1={HEAD_R} x2={0} y2={HEAD_R + 10} stroke={accentColor} strokeWidth={1.8} strokeLinecap="round" />
          {/* Arms */}
          <line x1={-6} y1={HEAD_R + 4} x2={6} y2={HEAD_R + 4} stroke={accentColor} strokeWidth={1.5} strokeLinecap="round" />
          {/* Legs */}
          <line x1={0} y1={HEAD_R + 10} x2={-5} y2={HEAD_R + 17} stroke={accentColor} strokeWidth={1.5} strokeLinecap="round" />
          <line x1={0} y1={HEAD_R + 10} x2={5} y2={HEAD_R + 17} stroke={accentColor} strokeWidth={1.5} strokeLinecap="round" />
        </g>

        {/* Loop dots at bottom */}
        <g transform={`translate(${SVG_W / 2}, ${TOP_MARGIN + n * FLOOR_H + 14})`}>
          {Array.from({ length: totalLoops }, (_, li) => (
            <circle
              key={li}
              cx={(li - (totalLoops - 1) / 2) * 10}
              cy={0}
              r={3.5}
              fill={li < loop ? LOOP_COLORS[li] : 'rgba(255,255,255,0.12)'}
              stroke={li === loop - 1 ? LOOP_COLORS[li] : 'none'}
              strokeWidth={1.5}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};
