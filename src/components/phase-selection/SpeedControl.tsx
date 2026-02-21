import React from 'react';
import { SPEED_LEVELS } from '../../types';
import type { SpeedLevel } from '../../types';

interface SpeedControlProps {
  value: SpeedLevel;
  onChange: (level: SpeedLevel) => void;
}

const SpeedControl: React.FC<SpeedControlProps> = ({ value, onChange }) => {
  return (
    <div className="speed-control">
      <h3 className="speed-control__title">VELOCIDAD</h3>

      <div className="speed-control__track">
        {SPEED_LEVELS.map((sl) => {
          const isActive = sl.level === value;
          return (
            <button
              key={sl.level}
              className={`speed-control__btn ${isActive ? 'speed-control__btn--active' : ''}`}
              onClick={() => onChange(sl.level as SpeedLevel)}
              title={`${sl.label} – ${(sl.ms / 1000).toFixed(1)}s por palabra`}
            >
              <span className="speed-control__level">{sl.level}</span>
              <span className="speed-control__label">{sl.label}</span>
            </button>
          );
        })}
      </div>

      <p className="speed-control__hint">
        {SPEED_LEVELS.find((s) => s.level === value)?.ms
          ? `${(SPEED_LEVELS.find((s) => s.level === value)!.ms / 1000).toFixed(1)}s por caída`
          : ''}
      </p>
    </div>
  );
};

export default SpeedControl;
