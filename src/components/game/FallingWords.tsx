import React from 'react';
import type { FallingWord } from '../../types';

interface FallingWordsProps {
  words: FallingWord[];
  onClick: (word: FallingWord, e: React.MouseEvent) => void;
  speed: number;
  isPaused: boolean;
  showCorrect: boolean;
}

export const FallingWords: React.FC<FallingWordsProps> = ({ 
  words, 
  onClick, 
  speed, 
  isPaused,
  showCorrect 
}) => {
  return (
    <>
      {words.map((word) => {
        const wordClass = word.isCorrect 
          ? (showCorrect ? 'correct' : 'correct-hidden')
          : 'distractor';
        
        return (
          <div
            key={word.id}
            className={`falling-word ${wordClass}`}
            style={{
              left: `${word.left}%`,
              animation: `fall ${speed}ms linear forwards`,
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
            onClick={(e) => onClick(word, e)}
          >
            {word.text}
          </div>
        );
      })}
    </>
  );
};
