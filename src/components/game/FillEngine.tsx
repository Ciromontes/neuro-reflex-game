// ============================================================
// FillEngine — Motor de "Completa la frase" (fill-in-the-blank)
// ============================================================
import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { ArrowLeft, Home, Volume2, CheckCircle, XCircle, ArrowRight, Trophy, RotateCcw } from 'lucide-react';
import type { Phase, WordPair } from '../../types';
import { getSentences } from '../../data/sentences';
import type { Sentence } from '../../data/sentences';

// ── Tipos internos ──────────────────────────────────────────
interface SentenceItem {
  sentence: Sentence;
  wordPair: WordPair;
  /** true → usar text/answer; false → usar textHard/answerHard */
  isEasy: boolean;
}

type FeedbackState = null | 'correct' | 'wrong';

export interface FillEngineProps {
  phase: Phase;
  /** Palabras del bloque seleccionado */
  blockWords: WordPair[];
  /** Índice del bloque (0-based) */
  blockIndex: number;
  /** Callback al completar todas las frases */
  onBlockComplete?: (score: number) => void;
  /** Ir al siguiente bloque */
  onNextBlock?: () => void;
  /** Salir de vuelta al setup */
  onExit: () => void;
  /** Ir al inicio */
  onHome?: () => void;
  /** Dificultad: 'easy' (default, usa text/answer) o 'hard' (usa textHard/answerHard) */
  difficulty?: 'easy' | 'hard';
}

// ── Utilidades ──────────────────────────────────────────────
/** Baraja un array (Fisher-Yates) */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Habla una palabra en inglés */
function speakEn(text: string) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  utt.lang = 'en-US';
  utt.rate = 0.85;
  const voices = window.speechSynthesis.getVoices();
  const eng = voices.find(v => v.lang === 'en-US' || v.lang === 'en-GB' || v.lang.startsWith('en-'));
  if (eng) utt.voice = eng;
  window.speechSynthesis.speak(utt);
}

// ── Componente principal ────────────────────────────────────
const FillEngine: React.FC<FillEngineProps> = ({
  phase,
  blockWords,
  blockIndex,
  onBlockComplete,
  onNextBlock,
  onExit,
  onHome,
  difficulty = 'easy',
}) => {
  const isEasy = difficulty === 'easy';

  // Construir las frases del bloque
  const sentenceItems: SentenceItem[] = useMemo(() => {
    const items: SentenceItem[] = [];
    for (const wp of blockWords) {
      const sentences = getSentences(phase.id, wp.target);
      for (const s of sentences) {
        items.push({ sentence: s, wordPair: wp, isEasy });
      }
    }
    return shuffle(items);
  }, [blockWords, phase.id, isEasy]);

  const totalSentences = sentenceItems.length;

  // Estado del juego
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState<FeedbackState>(null);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  // Frase actual
  const current = sentenceItems[currentIndex] ?? null;
  const currentText = current
    ? (current.isEasy ? current.sentence.text : current.sentence.textHard)
    : '';
  const correctAnswer = current
    ? (current.isEasy ? current.sentence.answer : current.sentence.answerHard)
    : '';

  // Auto-focus en el input
  useEffect(() => {
    if (!completed && inputRef.current) {
      // pequeño delay para que el teclado iOS se abra bien
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [currentIndex, completed, feedback]);

  // Validar respuesta
  const checkAnswer = useCallback(() => {
    if (!current || feedback) return;
    const trimmed = userInput.trim().toLowerCase();
    const correct = correctAnswer.toLowerCase();

    if (trimmed === correct) {
      setFeedback('correct');
      setScore(s => s + 1);
      speakEn(correctAnswer);
    } else {
      setFeedback('wrong');
      setMistakes(m => m + 1);
    }
  }, [current, feedback, userInput, correctAnswer]);

  // Avanzar a la siguiente frase
  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= totalSentences) {
      // Terminó el bloque
      setCompleted(true);
      onBlockComplete?.(score);
    } else {
      setCurrentIndex(i => i + 1);
      setUserInput('');
      setFeedback(null);
      setShowHint(false);
    }
  }, [currentIndex, totalSentences, score, onBlockComplete]);

  // Manejar Enter
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (feedback) {
        handleNext();
      } else {
        checkAnswer();
      }
    }
  };

  // Reiniciar el bloque
  const handleRetry = () => {
    setCurrentIndex(0);
    setUserInput('');
    setFeedback(null);
    setScore(0);
    setMistakes(0);
    setCompleted(false);
    setShowHint(false);
  };

  // ── Render: pantalla de resultados ──
  if (completed) {
    const pct = totalSentences > 0 ? Math.round((score / totalSentences) * 100) : 0;
    const stars = pct >= 90 ? 3 : pct >= 70 ? 2 : pct >= 50 ? 1 : 0;
    return (
      <div className="fill-engine">
        <style>{fillStyles}</style>
        <div className="fill-results">
          <div className="fill-results__trophy">
            <Trophy size={64} />
          </div>
          <h2 className="fill-results__title">
            {pct >= 90 ? '¡EXCELENTE!' : pct >= 70 ? '¡MUY BIEN!' : pct >= 50 ? '¡BUEN INTENTO!' : '¡SIGUE PRACTICANDO!'}
          </h2>
          <div className="fill-results__stars">
            {[1, 2, 3].map(i => (
              <span key={i} className={`fill-results__star ${i <= stars ? 'fill-results__star--lit' : ''}`}>★</span>
            ))}
          </div>
          <div className="fill-results__stats">
            <div className="fill-results__stat">
              <span className="fill-results__stat-val">{score}</span>
              <span className="fill-results__stat-label">Correctas</span>
            </div>
            <div className="fill-results__stat">
              <span className="fill-results__stat-val">{mistakes}</span>
              <span className="fill-results__stat-label">Errores</span>
            </div>
            <div className="fill-results__stat">
              <span className="fill-results__stat-val">{pct}%</span>
              <span className="fill-results__stat-label">Precisión</span>
            </div>
          </div>
          <div className="fill-results__actions">
            <button className="fill-results__btn fill-results__btn--retry" onClick={handleRetry}>
              <RotateCcw size={18} /> REINTENTAR
            </button>
            {onNextBlock && (
              <button className="fill-results__btn fill-results__btn--next" onClick={onNextBlock}>
                <ArrowRight size={18} /> SIGUIENTE BLOQUE
              </button>
            )}
            <button className="fill-results__btn fill-results__btn--exit" onClick={onExit}>
              <ArrowLeft size={18} /> VOLVER
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Render: pantalla de juego ──
  if (!current) return null;

  // Dividir la frase en partes por _____
  const parts = currentText.split('_____');
  const progressPct = totalSentences > 0 ? ((currentIndex) / totalSentences) * 100 : 0;

  return (
    <div className="fill-engine">
      <style>{fillStyles}</style>

      {/* Header */}
      <div className="fill-header">
        <button className="fill-header__btn" onClick={onExit} title="Volver">
          <ArrowLeft size={20} />
        </button>
        <div className="fill-header__info">
          <span className="fill-header__phase">{phase.icon} Fase {phase.id}</span>
          <span className="fill-header__block">Bloque {blockIndex + 1}</span>
        </div>
        <div className="fill-header__score">
          <CheckCircle size={16} /> {score}
          <XCircle size={16} style={{ marginLeft: 12 }} /> {mistakes}
        </div>
        {onHome && (
          <button className="fill-header__btn" onClick={onHome} title="Inicio">
            <Home size={20} />
          </button>
        )}
      </div>

      {/* Progress bar */}
      <div className="fill-progress">
        <div className="fill-progress__bar" style={{ width: `${progressPct}%` }} />
        <span className="fill-progress__text">{currentIndex + 1} / {totalSentences}</span>
      </div>

      {/* Word context */}
      <div className="fill-context">
        <span className="fill-context__pair">
          {current.wordPair.target} ↔ {current.wordPair.antonym}
        </span>
        <span className="fill-context__spanish">{current.wordPair.spanish}</span>
        <button
          className="fill-context__audio"
          onClick={() => speakEn(current.wordPair.target + ' ... ' + current.wordPair.antonym)}
          title="Escuchar"
        >
          <Volume2 size={18} />
        </button>
      </div>

      {/* Sentence card */}
      <div className={`fill-card ${feedback === 'correct' ? 'fill-card--correct' : feedback === 'wrong' ? 'fill-card--wrong' : ''}`}>
        <div className="fill-card__type-badge">
          {current.sentence.type === 'affirmation' ? '✓ Afirmación' :
           current.sentence.type === 'question' ? '? Pregunta' : '✗ Negación'}
          <span className="fill-card__time-badge">{current.sentence.time}</span>
        </div>

        <p className="fill-card__sentence">
          {parts[0]}
          <span className={`fill-card__blank ${feedback === 'correct' ? 'fill-card__blank--correct' : feedback === 'wrong' ? 'fill-card__blank--wrong' : ''}`}>
            {feedback ? correctAnswer : userInput || '_____'}
          </span>
          {parts[1] || ''}
        </p>

        {/* Show hint: first letter + length */}
        {showHint && !feedback && (
          <p className="fill-card__hint">
            💡 {correctAnswer[0].toUpperCase()}{'_'.repeat(correctAnswer.length - 1)} ({correctAnswer.length} letras)
          </p>
        )}

        {/* Wrong feedback: show correct answer */}
        {feedback === 'wrong' && (
          <p className="fill-card__correct-answer">
            ✅ Respuesta correcta: <strong>{correctAnswer}</strong>
          </p>
        )}
      </div>

      {/* Input area */}
      <div className="fill-input-area">
        {!feedback ? (
          <>
            <input
              ref={inputRef}
              className="fill-input"
              type="text"
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Escribe la palabra..."
              autoCapitalize="none"
              autoCorrect="off"
              autoComplete="off"
              spellCheck={false}
            />
            <div className="fill-input-actions">
              {!showHint && (
                <button className="fill-btn fill-btn--hint" onClick={() => setShowHint(true)}>
                  💡 PISTA
                </button>
              )}
              <button
                className="fill-btn fill-btn--check"
                onClick={checkAnswer}
                disabled={userInput.trim().length === 0}
              >
                COMPROBAR
              </button>
            </div>
          </>
        ) : (
          <button className="fill-btn fill-btn--next" onClick={handleNext}>
            {currentIndex + 1 >= totalSentences ? 'VER RESULTADOS' : 'SIGUIENTE'} <ArrowRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

// ============================================================
// ESTILOS
// ============================================================
const fillStyles = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap');

.fill-engine {
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0e27 0%, #1a1d3d 50%, #0f1428 100%);
  font-family: 'Space Mono', monospace;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow-x: hidden;
}

/* ── Header ── */
.fill-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: rgba(0,0,0,0.3);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.fill-header__btn {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 10px;
  color: #fff;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}
.fill-header__btn:hover {
  background: rgba(255,255,255,0.14);
}
.fill-header__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.fill-header__phase {
  font-size: 12px;
  opacity: 0.6;
}
.fill-header__block {
  font-family: 'Orbitron', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #bf5af2;
}
.fill-header__score {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Orbitron', sans-serif;
  font-size: 14px;
  color: rgba(255,255,255,0.8);
}

/* ── Progress ── */
.fill-progress {
  position: relative;
  height: 6px;
  background: rgba(255,255,255,0.08);
}
.fill-progress__bar {
  height: 100%;
  background: linear-gradient(90deg, #bf5af2, #da8fff);
  transition: width 0.4s ease;
  border-radius: 0 3px 3px 0;
}
.fill-progress__text {
  position: absolute;
  right: 16px;
  top: 12px;
  font-size: 12px;
  color: rgba(255,255,255,0.4);
}

/* ── Context: target ↔ antonym ── */
.fill-context {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px 20px 10px;
  flex-wrap: wrap;
}
.fill-context__pair {
  font-family: 'Orbitron', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #bf5af2;
  letter-spacing: 1px;
}
.fill-context__spanish {
  font-size: 13px;
  color: rgba(255,255,255,0.45);
}
.fill-context__audio {
  background: rgba(191,90,242,0.15);
  border: 1px solid rgba(191,90,242,0.3);
  border-radius: 50%;
  color: #bf5af2;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}
.fill-context__audio:hover {
  background: rgba(191,90,242,0.25);
}

/* ── Sentence card ── */
.fill-card {
  margin: 12px 20px;
  padding: 24px 20px;
  background: rgba(255,255,255,0.04);
  border: 2px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  transition: all 0.4s;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 320px;
}
.fill-card--correct {
  border-color: #00ff87;
  background: rgba(0,255,135,0.06);
  box-shadow: 0 0 30px rgba(0,255,135,0.1);
}
.fill-card--wrong {
  border-color: #ff3d00;
  background: rgba(255,61,0,0.06);
  box-shadow: 0 0 30px rgba(255,61,0,0.1);
}

.fill-card__type-badge {
  display: flex;
  gap: 10px;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(255,255,255,0.4);
  margin-bottom: 16px;
}
.fill-card__time-badge {
  background: rgba(191,90,242,0.15);
  color: #bf5af2;
  padding: 2px 8px;
  border-radius: 6px;
  font-size: 10px;
}

.fill-card__sentence {
  font-size: 20px;
  line-height: 1.6;
  color: rgba(255,255,255,0.9);
  text-align: center;
  word-break: break-word;
}

.fill-card__blank {
  display: inline-block;
  min-width: 100px;
  padding: 4px 12px;
  margin: 0 4px;
  border-bottom: 3px solid rgba(191,90,242,0.5);
  color: #bf5af2;
  font-weight: 700;
  font-family: 'Orbitron', sans-serif;
  text-align: center;
  transition: all 0.3s;
}
.fill-card__blank--correct {
  border-color: #00ff87;
  color: #00ff87;
}
.fill-card__blank--wrong {
  border-color: #ff3d00;
  color: #ff3d00;
  text-decoration: line-through;
}

.fill-card__hint {
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
  color: rgba(255,255,255,0.5);
  animation: fadeIn 0.3s ease;
}

.fill-card__correct-answer {
  margin-top: 16px;
  text-align: center;
  font-size: 15px;
  color: #00ff87;
  animation: fadeIn 0.3s ease;
}
.fill-card__correct-answer strong {
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 1px;
}

/* ── Input area ── */
.fill-input-area {
  padding: 16px 20px;
  padding-bottom: max(24px, env(safe-area-inset-bottom, 24px));
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.fill-input {
  width: 100%;
  padding: 16px 20px;
  font-size: 18px;
  font-family: 'Space Mono', monospace;
  background: rgba(255,255,255,0.06);
  border: 2px solid rgba(191,90,242,0.3);
  border-radius: 14px;
  color: #fff;
  outline: none;
  text-align: center;
  transition: border-color 0.3s;
  box-sizing: border-box;
}
.fill-input:focus {
  border-color: #bf5af2;
  box-shadow: 0 0 20px rgba(191,90,242,0.2);
}
.fill-input::placeholder {
  color: rgba(255,255,255,0.25);
}

.fill-input-actions {
  display: flex;
  gap: 12px;
}

.fill-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 20px;
  border: none;
  border-radius: 14px;
  font-family: 'Orbitron', sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 1px;
  transition: all 0.25s;
}
.fill-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
.fill-btn--hint {
  background: rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.7);
  border: 1px solid rgba(255,255,255,0.15);
  flex: 0;
  white-space: nowrap;
}
.fill-btn--hint:hover {
  background: rgba(255,255,255,0.12);
}
.fill-btn--check {
  background: linear-gradient(135deg, #bf5af2, #da8fff);
  color: #fff;
}
.fill-btn--check:not(:disabled):hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(191,90,242,0.4);
}
.fill-btn--next {
  background: linear-gradient(135deg, #00ff87, #00d4ff);
  color: #0a0e27;
  font-size: 16px;
}
.fill-btn--next:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0,255,135,0.4);
}

/* ── Results ── */
.fill-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 40px 20px;
  text-align: center;
  gap: 24px;
}
.fill-results__trophy {
  color: #ffd700;
  animation: bounceIn 0.6s ease;
}
.fill-results__title {
  font-family: 'Orbitron', sans-serif;
  font-size: 28px;
  font-weight: 900;
  background: linear-gradient(135deg, #bf5af2, #da8fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.fill-results__stars {
  display: flex;
  gap: 8px;
  font-size: 40px;
}
.fill-results__star {
  color: rgba(255,255,255,0.15);
  transition: all 0.3s;
}
.fill-results__star--lit {
  color: #ffd700;
  text-shadow: 0 0 20px rgba(255,215,0,0.5);
}
.fill-results__stats {
  display: flex;
  gap: 32px;
}
.fill-results__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.fill-results__stat-val {
  font-family: 'Orbitron', sans-serif;
  font-size: 32px;
  font-weight: 900;
  color: #bf5af2;
}
.fill-results__stat-label {
  font-size: 12px;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
}
.fill-results__actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
  width: 100%;
  max-width: 320px;
}
.fill-results__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 24px;
  border: none;
  border-radius: 50px;
  font-family: 'Orbitron', sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  letter-spacing: 1px;
}
.fill-results__btn--retry {
  background: linear-gradient(135deg, #bf5af2, #da8fff);
  color: #fff;
}
.fill-results__btn--next {
  background: linear-gradient(135deg, #00ff87, #00d4ff);
  color: #0a0e27;
}
.fill-results__btn--exit {
  background: rgba(255,255,255,0.08);
  color: rgba(255,255,255,0.7);
  border: 1px solid rgba(255,255,255,0.15);
}
.fill-results__btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(191,90,242,0.3);
}

/* ── Animations ── */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes bounceIn {
  0% { transform: scale(0.3); opacity: 0; }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
}

/* ── Responsive ── */
@media (max-width: 600px) {
  .fill-card__sentence {
    font-size: 17px;
  }
  .fill-context__pair {
    font-size: 14px;
  }
  .fill-results__stat-val {
    font-size: 24px;
  }
  .fill-results__title {
    font-size: 22px;
  }
}
`;

export default FillEngine;
