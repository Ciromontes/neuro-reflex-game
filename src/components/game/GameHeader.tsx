import React from 'react';

interface GameHeaderProps {
  score: number;
  lives: number;
  combo: number;
  mode: string;
  color: string;
}

export const GameHeader: React.FC<GameHeaderProps> = ({ score, lives, combo, mode, color }) => {
  return (
    <div className="header">
      <div className="logo">NEURO-REFLEX</div>
      <div className="stats">
        <div className="stat-item">
          <div className="stat-label">Puntos</div>
          <div className="stat-value score">{score}</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Combo</div>
          <div className="stat-value combo">×{combo}</div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Vidas</div>
          <div className="lives">
            {[...Array(Math.min(lives, 20))].map((_, i) => (
              <div key={i} className="life" />
            ))}
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-label">Nivel</div>
          <div className="stat-value" style={{color}}>
            {mode.toUpperCase()}
          </div>
        </div>
      </div>
    </div>
  );
};
