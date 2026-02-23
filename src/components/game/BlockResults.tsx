import React from 'react';
import { RotateCcw, ArrowRight, X, CheckCircle, XCircle } from 'lucide-react';
import type { WordPair } from '../../types';

interface BlockResultsProps {
  /** Whether the player won or lost */
  victory: boolean;
  /** 0-based block index */
  blockIndex: number;
  /** Words played in this block */
  blockWords: WordPair[];
  /** Set of target words the player answered correctly */
  studiedWords: Set<string>;
  /** Final score */
  score: number;
  /** Total correct answers (may be > blockWords.length due to repeated words) */
  correctCount: number;
  /** Restart the current block */
  onRetry: () => void;
  /** Go to next block (only shown on victory) */
  onNextBlock?: () => void;
  /** Go back to block selection */
  onExit: () => void;
}

// Pronounce target then antonym in English
const speakPair = (target: string, antonym: string) => {
  if (!window.speechSynthesis) return;
  if (window.speechSynthesis.paused) window.speechSynthesis.resume();
  window.speechSynthesis.cancel();
  const voices = window.speechSynthesis.getVoices();
  const eng = voices.find(v => v.lang === 'en-US' || v.lang === 'en-GB' || v.lang.startsWith('en-'));
  const go = (v: SpeechSynthesisVoice | undefined) => {
    const utt1 = new SpeechSynthesisUtterance(target);
    utt1.lang = 'en-US'; utt1.rate = 0.9; if (v) utt1.voice = v;
    utt1.onend = () => setTimeout(() => {
      const utt2 = new SpeechSynthesisUtterance(antonym);
      utt2.lang = 'en-US'; utt2.rate = 0.9; if (v) utt2.voice = v;
      window.speechSynthesis.speak(utt2);
    }, 350);
    window.speechSynthesis.speak(utt1);
  };
  if (voices.length > 0) {
    go(eng);
  } else {
    window.speechSynthesis.onvoiceschanged = () => {
      const v2 = window.speechSynthesis.getVoices();
      go(v2.find(v => v.lang === 'en-US' || v.lang === 'en-GB' || v.lang.startsWith('en-')));
    };
  }
};

export const BlockResults: React.FC<BlockResultsProps> = ({
  victory,
  blockIndex,
  blockWords,
  studiedWords,
  score,
  correctCount,
  onRetry,
  onNextBlock,
  onExit
}) => {
  const correct = blockWords.filter(w => studiedWords.has(w.target));
  const missed = blockWords.filter(w => !studiedWords.has(w.target));
  const accuracy = blockWords.length > 0
    ? Math.round((correct.length / blockWords.length) * 100)
    : 0;

  return (
    <div className="block-results">
      {/* Header */}
      <div className="block-results-header">
        <div className={`block-results-title ${victory ? 'victory' : 'gameover'}`}>
          {victory ? '🎉 ¡BLOQUE COMPLETADO!' : '💀 MISIÓN TERMINADA'}
        </div>
        <div className="block-results-subtitle">
          Bloque {blockIndex + 1}
        </div>
      </div>

      {/* Stats row */}
      <div className="block-results-stats">
        <div className="block-results-stat">
          <div className="block-results-stat-value">{score}</div>
          <div className="block-results-stat-label">Puntos</div>
        </div>
        <div className="block-results-stat">
          <div className="block-results-stat-value">{accuracy}%</div>
          <div className="block-results-stat-label">Precisión</div>
        </div>
        <div className="block-results-stat">
          <div className="block-results-stat-value">{correctCount}</div>
          <div className="block-results-stat-label">Aciertos</div>
        </div>
      </div>

      {/* Word list */}
      <div className="block-results-words">
        {blockWords.map((word, idx) => {
          const isCorrect = studiedWords.has(word.target);
          return (
            <div
              key={idx}
              className={`block-results-word ${isCorrect ? 'correct' : 'missed'}`}
              onClick={() => speakPair(word.target, word.antonym)}
              style={{ cursor: 'pointer' }}
              title="Toca para escuchar"
            >
              <div className="block-results-word-icon">
                {isCorrect
                  ? <CheckCircle size={18} color="#00ff87" />
                  : <XCircle size={18} color="#ff3d00" />}
              </div>
              <div className="block-results-word-pair">
                <span className="block-results-word-target">{word.target}</span>
                <span className="block-results-word-arrow">↔</span>
                <span className="block-results-word-antonym">{word.antonym}</span>
              </div>
              {(word.targetIpa || word.antonymIpa) && (
                <div className="block-results-word-ipa">
                  {word.targetIpa} — {word.antonymIpa}
                </div>
              )}
              {word.spanish && (
                <div className="block-results-word-spanish">
                  🌐 {word.spanish}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Missed words summary */}
      {missed.length > 0 && (
        <div className="block-results-tip">
          💡 Repasa {missed.length === 1 ? 'esta palabra' : `estas ${missed.length} palabras`} antes de reintentar
        </div>
      )}

      {/* Actions */}
      <div className="block-results-actions">
        <button className="btn btn-primary" onClick={onRetry}>
          <RotateCcw size={20} />
          REINTENTAR
        </button>
        {victory && onNextBlock && (
          <button className="btn btn-primary" onClick={onNextBlock}>
            <ArrowRight size={20} />
            SIGUIENTE BLOQUE
          </button>
        )}
        <button className="btn btn-primary" onClick={onExit}>
          <X size={20} />
          BLOQUES
        </button>
      </div>
    </div>
  );
};
