import React from 'react';
import type { Phase, BlockProgress } from '../../types';
import { BLOCK_SIZE } from '../../types';
import { getBlockWords } from '../../utils/blockHelpers';

interface BlockSelectorProps {
  phase: Phase;
  blocks: BlockProgress[];
  selectedBlock: number | null;
  onSelectBlock: (index: number) => void;
}

const BlockSelector: React.FC<BlockSelectorProps> = ({
  phase,
  blocks,
  selectedBlock,
  onSelectBlock,
}) => {
  return (
    <div className="block-selector">
      <h3 className="block-selector__title">SELECCIONA UN BLOQUE</h3>
      <p className="block-selector__subtitle">
        {phase.wordPairs.length} palabras · {blocks.length} bloques de {BLOCK_SIZE}
      </p>

      <div className="block-selector__grid">
        {blocks.map((block, index) => {
          const words = getBlockWords(phase, index);
          const isSelected = selectedBlock === index;

          return (
            <button
              key={index}
              className={[
                'block-card',
                'block-card--unlocked',
                block.completed ? 'block-card--completed' : '',
                isSelected ? 'block-card--selected' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => onSelectBlock(index)}
            >
              {/* Header */}
              <div className="block-card__header">
                <span className="block-card__number">
                  {`B${index + 1}`}
                </span>
                {block.completed && <span className="block-card__check">✅</span>}
              </div>

              {/* Preview de palabras */}
              <div className="block-card__words">
                {words.map((w, i) => (
                  <span key={i} className="block-card__word">
                    {w.target}
                  </span>
                ))}
              </div>

              {/* Score */}
              {block.completed && (
                <div className="block-card__score">
                  ⭐ {block.bestScore}
                </div>
              )}

              {/* Last played */}
              {block.lastPlayed && (
                <div className="block-card__date">
                  {new Date(block.lastPlayed).toLocaleDateString()}
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BlockSelector;
