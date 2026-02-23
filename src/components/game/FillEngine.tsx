// ============================================================
// FillEngine v2 — Motor de "Completa la frase" (fill-in-the-blank)
// ============================================================
// Mejoras v2:
//  1. No revela el par target ↔ antonym
//  2. Guiones bajos = nº exacto de caracteres
//  3. Orden aleatorio real (1 frase por palabra, mezcladas)
//  4. Flujo: 10 frases por ronda (1 por cada target+antonym del bloque)
//  5. Pistas restan puntos (100/75/50/25)
//  6. Traducción al español tras responder
//  7. Feedback mejorado: frase completa + español + audio
// ============================================================
import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { ArrowLeft, Home, Volume2, CheckCircle, XCircle, ArrowRight, Trophy, RotateCcw, Eye } from 'lucide-react';
import type { Phase, WordPair } from '../../types';
import { getSentences } from '../../data/sentences';
import type { Sentence } from '../../data/sentences';

// ── Tipos internos ──────────────────────────────────────────
interface RoundItem {
  sentence: Sentence;
  wordPair: WordPair;
  /** La respuesta que se espera (easy o hard) */
  answer: string;
  /** El texto de la frase (easy o hard) */
  text: string;
  /** Traducción al español */
  spanishText: string;
  /** Frase completa (sin hueco) para mostrar tras feedback */
  completeSentence: string;
}

type FeedbackState = null | 'correct' | 'wrong';

export interface FillEngineProps {
  phase: Phase;
  blockWords: WordPair[];
  blockIndex: number;
  onBlockComplete?: (score: number) => void;
  onNextBlock?: () => void;
  onExit: () => void;
  onHome?: () => void;
  difficulty?: 'easy' | 'hard';
}

// ── Constantes ──────────────────────────────────────────────
const MAX_PTS_PER_ITEM = 100;
const HINT_COSTS = [25, 50, 75]; // puntos que pierdes por pista 1, 2, 3
const AUTO_ADVANCE_MS = 2500;

// ── Utilidades ──────────────────────────────────────────────
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

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

/**
 * Genera los guiones bajos espaciados.
 * Para "pick up" → "_ _ _ _  _ _" (doble espacio entre palabras)
 */
function blanks(answer: string): string {
  return answer.split(' ').map(w =>
    w.split('').map(() => '_').join(' ')
  ).join('   ');
}

/**
 * Reemplaza TODOS los _____ por las palabras de la respuesta.
 * "Don't _____ _____ on your dreams" + "give up" → "Don't give up on your dreams"
 */
function fillBlanks(text: string, answer: string): string {
  const words = answer.split(' ');
  let result = text;
  for (const w of words) {
    result = result.replace('_____', w);
  }
  return result;
}

/**
 * Normaliza el texto para split: une secuencias de _____ en un solo marcador.
 * "Don't _____ _____ on" → ["Don't ", " on"]
 */
function splitSentence(text: string): string[] {
  // Reemplaza una o más ocurrencias de _____ (separadas por espacios) por un marcador único
  const normalized = text.replace(/_____(?:\s_____)*/g, '{{BLANK}}');
  return normalized.split('{{BLANK}}');
}

/** Selecciona 1 frase al azar de un array de Sentence para una "cara" (target o antonym) */
function pickOne(sentences: Sentence[], forAnswer: string, isEasy: boolean): Sentence | null {
  const matching = sentences.filter(s => {
    const ans = isEasy ? s.answer : s.answerHard;
    return ans.toLowerCase() === forAnswer.toLowerCase();
  });
  if (matching.length === 0) return null;
  return matching[Math.floor(Math.random() * matching.length)];
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

  // Paso 3+4: Construir la ronda: 1 frase por target + 1 por antonym de cada wordPair
  const roundItems: RoundItem[] = useMemo(() => {
    const items: RoundItem[] = [];

    for (const wp of blockWords) {
      const allSentences = getSentences(phase.id, wp.target);
      if (allSentences.length === 0) continue;

      // 1 frase para el target
      const tSentence = pickOne(allSentences, wp.target.toLowerCase(), isEasy);
      if (tSentence) {
        const ans = isEasy ? tSentence.answer : tSentence.answerHard;
        const txt = isEasy ? tSentence.text : tSentence.textHard;
        const spa = isEasy ? tSentence.spanishText : tSentence.spanishTextHard;
        items.push({
          sentence: tSentence,
          wordPair: wp,
          answer: ans,
          text: txt,
          spanishText: spa || '',
          completeSentence: fillBlanks(txt, ans),
        });
      }

      // 1 frase para el antonym
      const aSentence = pickOne(allSentences, wp.antonym.toLowerCase(), isEasy);
      if (aSentence) {
        const ans = isEasy ? aSentence.answer : aSentence.answerHard;
        const txt = isEasy ? aSentence.text : aSentence.textHard;
        const spa = isEasy ? aSentence.spanishText : aSentence.spanishTextHard;
        items.push({
          sentence: aSentence,
          wordPair: wp,
          answer: ans,
          text: txt,
          spanishText: spa || '',
          completeSentence: fillBlanks(txt, ans),
        });
      }
    }

    return shuffle(items);
  }, [blockWords, phase.id, isEasy]);

  // ── Cola dinámica (permite reinsertar ítems fallados) ────
  const [queue, setQueue] = useState<RoundItem[]>(roundItems);
  const totalOriginal = roundItems.length; // para % precisión
  const maxScore = totalOriginal * MAX_PTS_PER_ITEM;

  // Sincronizar si roundItems cambia (retry)
  useEffect(() => { setQueue(roundItems); }, [roundItems]);

  // ── Estado ────────────────────────────────────────────────
  const [idx, setIdx] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState<FeedbackState>(null);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [hintLevel, setHintLevel] = useState(0); // 0 = sin pista, 1..3
  const [completed, setCompleted] = useState(false);
  const [showSpanish, setShowSpanish] = useState(false); // toggle español

  const inputRef = useRef<HTMLInputElement>(null);
  const autoAdvanceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const current = queue[idx] ?? null;
  const totalItems = queue.length;

  // Auto-focus
  useEffect(() => {
    if (!completed && !feedback && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [idx, completed, feedback]);

  // Limpiar timer
  useEffect(() => {
    return () => { if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current); };
  }, []);

  // ── Pistas progresivas (muestran carácter desde nivel 1) ──
  const getHintText = useCallback((): string => {
    if (!current) return '';
    const answer = current.answer; // puede ser multi-palabra: "pick up"
    const words = answer.split(' ');
    if (hintLevel === 0) return '';

    // Generar pista por cada palabra del answer
    const hintWords = words.map(w => {
      const len = w.length;
      if (hintLevel === 1) {
        // 1ª letra + puntos
        return w[0].toUpperCase() + '·'.repeat(len - 1);
      }
      if (hintLevel === 2) {
        // 2 primeras letras + puntos
        const show = Math.min(2, len);
        return w.slice(0, show).toUpperCase() + '·'.repeat(Math.max(0, len - show));
      }
      // hintLevel >= 3: 2 primeras + última
      if (len <= 3) return w.toUpperCase();
      return w[0].toUpperCase() + w[1].toLowerCase() + '·'.repeat(len - 3) + w[len - 1].toLowerCase();
    });

    const charCount = answer.replace(/ /g, '').length; // sin contar espacios
    return `${hintWords.join(' ')} (${charCount} letras)`;
  }, [current, hintLevel]);

  const requestHint = useCallback(() => {
    if (hintLevel < 3) setHintLevel(h => h + 1);
  }, [hintLevel]);

  // Puntos para la frase actual
  const pointsForCurrent = useCallback((): number => {
    let pts = MAX_PTS_PER_ITEM;
    for (let i = 0; i < hintLevel; i++) pts -= HINT_COSTS[i];
    return Math.max(0, pts);
  }, [hintLevel]);

  // ── Validar ───────────────────────────────────────────────
  const checkAnswer = useCallback(() => {
    if (!current || feedback) return;
    const trimmed = userInput.trim().toLowerCase();
    const correct = current.answer.toLowerCase();

    if (trimmed === correct) {
      setFeedback('correct');
      setScore(s => s + pointsForCurrent());
      setCorrectCount(c => c + 1);
      speakEn(current.completeSentence);
    } else {
      setFeedback('wrong');
      setWrongCount(w => w + 1);
      speakEn(current.answer);

      // ── Repetición espaciada: reinsertar 2 posiciones adelante ──
      setQueue(prev => {
        const copy = [...prev];
        const insertAt = Math.min(idx + 3, copy.length); // 2 ítems después del siguiente
        copy.splice(insertAt, 0, current);
        return copy;
      });
    }
  }, [current, feedback, userInput, pointsForCurrent, idx]);

  // ── Avanzar ───────────────────────────────────────────────
  const handleNext = useCallback(() => {
    if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current);
    if (idx + 1 >= queue.length) {
      const finalScore = score;
      setCompleted(true);
      onBlockComplete?.(finalScore);
    } else {
      setIdx(i => i + 1);
      setUserInput('');
      setFeedback(null);
      setHintLevel(0);
      setShowSpanish(false);
    }
  }, [idx, queue.length, score, onBlockComplete]);

  // Auto-avanzar SOLO en aciertos; en errores, el usuario decide
  useEffect(() => {
    if (feedback === 'correct') {
      autoAdvanceRef.current = setTimeout(handleNext, AUTO_ADVANCE_MS);
      return () => { if (autoAdvanceRef.current) clearTimeout(autoAdvanceRef.current); };
    }
  }, [feedback, handleNext]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (feedback) handleNext();
      else checkAnswer();
    }
  };

  const handleRetry = () => {
    setQueue(roundItems); // reiniciar cola desde la mezcla original
    setIdx(0);
    setUserInput('');
    setFeedback(null);
    setScore(0);
    setCorrectCount(0);
    setWrongCount(0);
    setHintLevel(0);
    setShowSpanish(false);
    setCompleted(false);
  };

  // ═══════════════════════════════════════════════════════════
  // RENDER: Pantalla de resultados
  // ═══════════════════════════════════════════════════════════
  if (completed) {
    const pct = totalOriginal > 0 ? Math.round((correctCount / totalOriginal) * 100) : 0;
    const stars = pct === 100 ? 3 : pct >= 80 ? 2 : pct >= 60 ? 1 : 0;
    const mastered = pct === 100;
    return (
      <div className="fill-engine">
        <style>{fillStyles}</style>
        <div className="fill-results">
          <div className="fill-results__trophy">
            <Trophy size={64} />
          </div>
          <h2 className="fill-results__title">
            {mastered ? '¡DOMINAS ESTE BLOQUE!' : pct >= 80 ? '¡MUY BIEN!' : pct >= 60 ? '¡BUEN INTENTO!' : '¡SIGUE MEJORANDO!'}
          </h2>
          <div className="fill-results__stars">
            {[1, 2, 3].map(i => (
              <span key={i} className={`fill-results__star ${i <= stars ? 'fill-results__star--lit' : ''}`}>★</span>
            ))}
          </div>
          <div className="fill-results__stats">
            <div className="fill-results__stat">
              <span className="fill-results__stat-val">{score}</span>
              <span className="fill-results__stat-label">Puntos</span>
            </div>
            <div className="fill-results__stat">
              <span className="fill-results__stat-val">{correctCount}/{totalItems}</span>
              <span className="fill-results__stat-label">Correctas</span>
            </div>
            <div className="fill-results__stat">
              <span className="fill-results__stat-val">{pct}%</span>
              <span className="fill-results__stat-label">Precisión</span>
            </div>
          </div>
          <p className="fill-results__max">Máximo posible: {maxScore} pts · {totalOriginal} frases originales</p>
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

  // ═══════════════════════════════════════════════════════════
  // RENDER: Pantalla de juego
  // ═══════════════════════════════════════════════════════════
  if (!current) return null;

  const parts = splitSentence(current.text);
  const progressPct = totalItems > 0 ? (idx / totalItems) * 100 : 0;
  const blankDisplay = blanks(current.answer); // "_ _ _ _   _ _" for multi-word

  return (
    <div className="fill-engine">
      <style>{fillStyles}</style>

      {/* Header — sin revelar el par */}
      <div className="fill-header">
        <button className="fill-header__btn" onClick={onExit} title="Volver">
          <ArrowLeft size={20} />
        </button>
        <div className="fill-header__info">
          <span className="fill-header__phase">{phase.icon} Fase {phase.id}</span>
          <span className="fill-header__block">Bloque {blockIndex + 1}</span>
        </div>
        <div className="fill-header__score-area">
          <span className="fill-header__pts">{score} pts</span>
          <span className="fill-header__tally">
            <CheckCircle size={14} className="fill-header__icon--ok" /> {correctCount}
            <XCircle size={14} className="fill-header__icon--err" /> {wrongCount}
          </span>
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
        <span className="fill-progress__text">{idx + 1} / {totalItems}</span>
      </div>

      {/* Sentence card — Paso 2: guiones = nº caracteres */}
      <div className={`fill-card ${feedback === 'correct' ? 'fill-card--correct' : feedback === 'wrong' ? 'fill-card--wrong' : ''}`}>
        {!feedback && (
          <div className="fill-card__type-badge">
            {current.sentence.type === 'affirmation' ? '✓ Afirmación' :
             current.sentence.type === 'question' ? '? Pregunta' : '✗ Negación'}
            <span className="fill-card__time-badge">{current.sentence.time}</span>
          </div>
        )}

        <p className="fill-card__sentence">
          {feedback ? (
            // Tras responder: frase COMPLETA en inglés
            <>
              {parts[0]}
              <span className={`fill-card__answer ${feedback === 'correct' ? 'fill-card__answer--correct' : 'fill-card__answer--wrong'}`}>
                {current.answer}
              </span>
              {parts[1] || ''}
            </>
          ) : (
            // Sin resolver: guiones exactos por carácter
            <>
              {parts[0]}
              <span className="fill-card__blank">
                {userInput || blankDisplay}
              </span>
              {parts[1] || ''}
            </>
          )}
        </p>

        {/* Feedback — respuesta correcta si falló + botón español + audio */}
        {feedback && (
          <div className="fill-card__feedback-extra">
            {feedback === 'wrong' && (
              <p className="fill-card__correct-answer">
                Respuesta correcta: <strong>{current.answer}</strong>
              </p>
            )}

            {/* Español como toggle — cuesta 5 pts */}
            {showSpanish ? (
              <p className="fill-card__spanish">
                🇪🇸 {current.spanishText}
              </p>
            ) : (
              <button
                className="fill-card__spanish-toggle"
                onClick={() => { setShowSpanish(true); setScore(s => Math.max(0, s - 5)); }}
              >
                🇪🇸 Ver en español (−5 pts)
              </button>
            )}

            <button
              className="fill-card__audio-btn"
              onClick={() => speakEn(current.completeSentence)}
              title="Escuchar"
            >
              <Volume2 size={18} /> Escuchar
            </button>
          </div>
        )}

        {/* Paso 5: pista progresiva */}
        {!feedback && hintLevel > 0 && (
          <p className="fill-card__hint">
            💡 {getHintText()}
            <span className="fill-card__hint-cost">
              (−{HINT_COSTS.slice(0, hintLevel).reduce((a, b) => a + b, 0)} pts)
            </span>
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
              placeholder={`Escribe la palabra (${current.answer.replace(/ /g, '').length} letras)...`}
              autoCapitalize="none"
              autoCorrect="off"
              autoComplete="off"
              spellCheck={false}
            />
            <div className="fill-input-actions">
              <button
                className="fill-btn fill-btn--hint"
                onClick={requestHint}
                disabled={hintLevel >= 3}
              >
                <Eye size={16} /> PISTA {hintLevel > 0 ? `(${hintLevel}/3)` : ''}
              </button>
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
            {idx + 1 >= totalItems ? 'VER RESULTADOS' : 'SIGUIENTE'} <ArrowRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
};

// ============================================================
// ESTILOS v2
// ============================================================
const fillStyles = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap');

.fill-engine {
  width: 100vw;
  min-height: 100vh;
  min-height: 100dvh;
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
.fill-header__btn:hover { background: rgba(255,255,255,0.14); }
.fill-header__info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.fill-header__phase { font-size: 12px; opacity: 0.6; }
.fill-header__block {
  font-family: 'Orbitron', sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #bf5af2;
}
.fill-header__score-area {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 2px;
}
.fill-header__pts {
  font-family: 'Orbitron', sans-serif;
  font-size: 16px;
  font-weight: 900;
  color: #ffd700;
}
.fill-header__tally {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: rgba(255,255,255,0.6);
}
.fill-header__icon--ok { color: #00ff87; }
.fill-header__icon--err { color: #ff3d00; margin-left: 8px; }

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

/* ── Sentence card ── */
.fill-card {
  margin: 20px 20px 12px;
  padding: 28px 20px 24px;
  background: rgba(255,255,255,0.04);
  border: 2px solid rgba(255,255,255,0.08);
  border-radius: 20px;
  transition: all 0.4s;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: fadeIn 0.3s ease;
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
  line-height: 1.7;
  color: rgba(255,255,255,0.9);
  text-align: center;
  word-break: break-word;
}

/* Hueco sin resolver */
.fill-card__blank {
  display: inline-block;
  min-width: 60px;
  padding: 4px 10px;
  margin: 0 4px;
  border-bottom: 3px solid rgba(191,90,242,0.5);
  color: #bf5af2;
  font-weight: 700;
  font-family: 'Orbitron', sans-serif;
  font-size: 18px;
  text-align: center;
  letter-spacing: 3px;
  transition: all 0.3s;
}

/* Respuesta revelada */
.fill-card__answer {
  display: inline-block;
  padding: 4px 12px;
  margin: 0 4px;
  font-weight: 700;
  font-family: 'Orbitron', sans-serif;
  font-size: 20px;
  border-radius: 8px;
  animation: bounceIn 0.4s ease;
}
.fill-card__answer--correct {
  color: #00ff87;
  background: rgba(0,255,135,0.1);
  border-bottom: 3px solid #00ff87;
}
.fill-card__answer--wrong {
  color: #ff3d00;
  background: rgba(255,61,0,0.1);
  border-bottom: 3px solid #ff3d00;
}

/* Feedback extra */
.fill-card__feedback-extra {
  margin-top: 20px;
  text-align: center;
  animation: fadeIn 0.4s ease;
}
.fill-card__correct-answer {
  font-size: 15px;
  color: #ff3d00;
  margin-bottom: 10px;
}
.fill-card__correct-answer strong {
  color: #00ff87;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 1px;
}
.fill-card__spanish {
  font-size: 15px;
  color: rgba(255,255,255,0.6);
  line-height: 1.5;
  margin-bottom: 12px;
  font-style: italic;
}
.fill-card__audio-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(191,90,242,0.15);
  border: 1px solid rgba(191,90,242,0.3);
  border-radius: 20px;
  color: #bf5af2;
  padding: 8px 16px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'Space Mono', monospace;
}
.fill-card__audio-btn:hover { background: rgba(191,90,242,0.25); }

/* Toggle español */
.fill-card__spanish-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(255,215,0,0.10);
  border: 1px solid rgba(255,215,0,0.25);
  border-radius: 20px;
  color: #ffd700;
  padding: 8px 16px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'Space Mono', monospace;
  margin-bottom: 10px;
}
.fill-card__spanish-toggle:hover { background: rgba(255,215,0,0.18); }

/* Pista */
.fill-card__hint {
  margin-top: 16px;
  text-align: center;
  font-size: 15px;
  color: rgba(255,255,255,0.6);
  animation: fadeIn 0.3s ease;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 2px;
}
.fill-card__hint-cost {
  display: block;
  font-size: 11px;
  color: #ff3d00;
  margin-top: 4px;
  letter-spacing: 0;
  font-family: 'Space Mono', monospace;
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
  font-size: 14px;
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
  font-size: 12px;
}
.fill-btn--hint:hover:not(:disabled) { background: rgba(255,255,255,0.12); }
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
  min-height: 100dvh;
  padding: 40px 20px;
  text-align: center;
  gap: 20px;
}
.fill-results__trophy {
  color: #ffd700;
  animation: bounceIn 0.6s ease;
}
.fill-results__title {
  font-family: 'Orbitron', sans-serif;
  font-size: 26px;
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
  gap: 28px;
}
.fill-results__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.fill-results__stat-val {
  font-family: 'Orbitron', sans-serif;
  font-size: 28px;
  font-weight: 900;
  color: #bf5af2;
}
.fill-results__stat-label {
  font-size: 11px;
  color: rgba(255,255,255,0.5);
  text-transform: uppercase;
  letter-spacing: 1px;
}
.fill-results__max {
  font-size: 12px;
  color: rgba(255,255,255,0.3);
}
.fill-results__actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
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
  .fill-card__sentence { font-size: 17px; }
  .fill-card__blank { font-size: 16px; letter-spacing: 2px; }
  .fill-card__answer { font-size: 18px; }
  .fill-results__stat-val { font-size: 22px; }
  .fill-results__title { font-size: 20px; }
  .fill-header__pts { font-size: 14px; }
}
`;

export default FillEngine;
