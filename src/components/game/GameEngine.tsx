import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Play, RotateCcw, Pause, X, Book, ArrowRight, Home } from 'lucide-react';
import type { Phase, WordPair, SpeedLevel } from '../../types';
import { SPEED_LEVELS } from '../../types';
import { useGameLogic } from '../../hooks/useGameLogic';
import { BlockResults } from './BlockResults';
import { ProgressClimber } from './ProgressClimber';
import { getPhaseProgress } from '../../utils/progressService';
import { getAccumulatedWords } from '../../utils/blockHelpers';

const TOTAL_LOOPS = 4;

interface GameEngineProps {
  phase: Phase;
  mode: 'training' | 'play' | 'easy' | 'medium' | 'hard';
  onExit: () => void;
  onHome?: () => void;
  blockWords?: WordPair[];
  speedMs?: number;
  blockIndex?: number;
  onBlockComplete?: (score: number) => void;
  onNextBlock?: () => void;
  speedLevel?: SpeedLevel;
  onSpeedChange?: (level: SpeedLevel) => void;
}

export const GameEngine: React.FC<GameEngineProps> = ({
  phase,
  mode,
  onExit,
  onHome,
  blockWords,
  speedMs,
  blockIndex,
  onBlockComplete,
  onNextBlock,
  speedLevel,
  onSpeedChange
}) => {
  // Session loop state (4 rounds per block)
  const [sessionLoop, setSessionLoop] = useState(1);
  const [sessionScores, setSessionScores] = useState<number[]>([]);
  const [sessionMissedWords, setSessionMissedWords] = useState<WordPair[]>([]);
  const [sessionAccuracies, setSessionAccuracies] = useState<number[]>([]);

  // Consolidation state (play mode only — after 4 block rounds)
  const [isConsolidation, setIsConsolidation] = useState(false);
  const [consolidationWords, setConsolidationWords] = useState<WordPair[]>([]);
  const [pendingConsolidationStart, setPendingConsolidationStart] = useState(false);

  const {
    gameState,
    score,
    lives,
    combo,
    currentWord,
    fallingWords,
    soundEnabled,
    setSoundEnabled,
    feedback,
    particles,
    confetti,
    studiedWords,
    missedWords,
    correctCount,
    isPaused,
    shakeScreen,
    difficulty,
    handleWordClick,
    startTraining,
    startGame,
    togglePause,
    quitGame,
    resetGame,
    difficultyConfig,
    setWordsOverride
  } = useGameLogic(phase, mode, { blockWords, speedMs, onBlockComplete });

  // Words to display on the learning screen
  const displayWords = blockWords && blockWords.length > 0 ? blockWords : phase.wordPairs;
  const blockLabel = blockIndex != null ? ` • Bloque ${blockIndex + 1}` : '';

  const isBlockMode = blockIndex != null && blockWords && blockWords.length > 0;
  const isPlayMode = mode === 'play';

  // Actual gameState mode used when starting a round
  const actualGameMode: 'training' | 'easy' | 'medium' | 'hard' =
    mode === 'play' ? 'easy' : mode === 'training' ? 'training' : (mode as 'easy' | 'medium' | 'hard');

  // Ref for stable handler access in useEffect (avoids stale closures)
  const handlersRef = useRef({
    nextLoop: () => {},
    startConsolidation: () => {},
  });

  // Update handler refs every render
  handlersRef.current.nextLoop = () => {
    setSessionScores(prev => [...prev, score]);
    const bw = blockWords || [];
    const loopAccuracy = bw.length > 0
      ? Math.round((bw.filter(w => studiedWords.has(w.target)).length / bw.length) * 100)
      : 0;
    setSessionAccuracies(prev => [...prev, loopAccuracy]);

    const allMissedMap = new Map<string, WordPair>();
    for (const w of sessionMissedWords) allMissedMap.set(w.target, w);
    for (const w of missedWords) allMissedMap.set(w.target, w);
    const allMissed = Array.from(allMissedMap.values());
    setSessionMissedWords(allMissed);

    setSessionLoop(prev => prev + 1);
    startGame(actualGameMode, allMissed);
  };

  handlersRef.current.startConsolidation = () => {
    // Save round 4 stats
    setSessionScores(prev => [...prev, score]);
    const bw = blockWords || [];
    const loopAccuracy = bw.length > 0
      ? Math.round((bw.filter(w => studiedWords.has(w.target)).length / bw.length) * 100)
      : 0;
    setSessionAccuracies(prev => [...prev, loopAccuracy]);

    const allMissedMap = new Map<string, WordPair>();
    for (const w of sessionMissedWords) allMissedMap.set(w.target, w);
    for (const w of missedWords) allMissedMap.set(w.target, w);
    setSessionMissedWords(Array.from(allMissedMap.values()));

    // Load accumulated words for consolidation
    const accumulated = blockIndex != null ? getAccumulatedWords(phase, blockIndex) : [];
    setConsolidationWords(accumulated);
    setWordsOverride(accumulated);
    setIsConsolidation(true);
    setSessionLoop(prev => prev + 1);
    setPendingConsolidationStart(true);
  };

  // Full retry — reset all loops + consolidation
  const handleFullRetry = () => {
    setSessionLoop(1);
    setSessionScores([]);
    setSessionAccuracies([]);
    setSessionMissedWords([]);
    setIsConsolidation(false);
    setConsolidationWords([]);
    setWordsOverride(null);
    setPendingConsolidationStart(false);
    resetGame();
  };

  // Auto-advance between rounds (3s pause then continue)
  useEffect(() => {
    if (gameState !== 'victory' || !isBlockMode) return;

    const isConsolidationDone = isConsolidation;
    const isFinalTraining = !isPlayMode && sessionLoop >= TOTAL_LOOPS;
    const isFinal = isConsolidationDone || isFinalTraining;

    if (isFinal) return; // Final mastery screen — no auto-advance

    const timer = setTimeout(() => {
      if (sessionLoop >= TOTAL_LOOPS && isPlayMode) {
        handlersRef.current.startConsolidation();
      } else {
        handlersRef.current.nextLoop();
      }
    }, 3000);

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState, sessionLoop, isPlayMode, isConsolidation, isBlockMode]);

  // Start consolidation game after wordsOverride propagates
  useEffect(() => {
    if (pendingConsolidationStart) {
      setPendingConsolidationStart(false);
      startGame(actualGameMode);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pendingConsolidationStart]);

  // Si el estado es 'learning', mostramos la pantalla de aprendizaje
  if (gameState === 'learning') {
    return (
      <div className="learning-screen">
        <div className="learning-title">NEURO-REFLEX</div>
        <div className="learning-subtitle">
          {phase.icon} FASE {phase.id}: {phase.title}{blockLabel} • Estudia estas {displayWords.length} palabras antes de comenzar
        </div>
        
        <div className="learning-list">
          {displayWords.map((word, idx) => (
            <div key={idx} className="learning-card">
              <div className="learning-pair">
                <span>{word.target}</span>
                <span className="learning-pair-arrow">↔</span>
                <span className="learning-pair-antonym">{word.antonym}</span>
              </div>
              {(word.targetIpa || word.antonymIpa) && (
                <div className="learning-ipa">
                  {word.targetIpa && <span>{word.targetIpa}</span>}
                  {word.targetIpa && word.antonymIpa && <span> — </span>}
                  {word.antonymIpa && <span>{word.antonymIpa}</span>}
                </div>
              )}
              <div className="learning-spanish">{word.spanish}</div>
              {word.type && (
                <div className="learning-type">{word.type}</div>
              )}
            </div>
          ))}
        </div>
        
        <div className="learning-actions">
          {isBlockMode ? (
            /* Block mode: single clear start button */
            <>
              <button className="btn btn-primary" onClick={() => startGame(mode === 'play' ? 'easy' : 'training')}>
                <Play size={22} />
                {mode === 'play' ? '¡JUGAR!' : '¡ENTRENAR!'}
              </button>
              <button className="btn btn-primary" onClick={onExit}>
                <X size={22} />
                VOLVER
              </button>
            </>
          ) : (
            /* Legacy mode: full button set */
            <>
              <button className="btn btn-primary" onClick={() => startTraining()}>
                <Play size={22} />
                MODO ENTRENAMIENTO
              </button>
              
              {mode === 'training' ? (
                <button className="btn btn-primary" onClick={() => startGame('easy')}>
                  <Play size={22} />
                  EMPEZAR JUEGO (FÁCIL)
                </button>
              ) : (
                <button className="btn btn-primary" onClick={() => startGame(mode)}>
                  <Play size={22} />
                  {mode === 'easy' ? 'FÁCIL' : mode === 'medium' ? 'MEDIO' : 'DIFÍCIL'}
                </button>
              )}
              
              <button className="btn btn-primary" onClick={onExit}>
                <X size={22} />
                VOLVER
              </button>
            </>
          )}
        </div>
      </div>
    );
  }

  // Si el estado es 'gameover', mostramos pantalla de fin de juego
  if (gameState === 'gameover') {
    if (isBlockMode) {
      return (
        <BlockResults
          victory={false}
          blockIndex={blockIndex}
          blockWords={blockWords}
          studiedWords={studiedWords}
          score={score}
          correctCount={correctCount}
          onRetry={resetGame}
          onExit={onExit}
        />
      );
    }
    return (
      <div className="gameover-screen">
        <div className="gameover-title">MISIÓN TERMINADA</div>
        <div className="gameover-stats">
          <div className="gameover-stat">
            <div className="gameover-stat-label">Puntuación Final</div>
            <div className="gameover-stat-value">{score}</div>
          </div>
          <div className="gameover-stat">
            <div className="gameover-stat-label">Mejor Combo</div>
            <div className="gameover-stat-value">{combo}</div>
          </div>
        </div>
        <div className="gameover-actions">
          <button className="btn btn-primary" onClick={resetGame}>
            <RotateCcw size={24} />
            REINTENTAR
          </button>
          <button className="btn btn-primary" onClick={onExit}>
            <X size={24} />
            VOLVER
          </button>
        </div>
      </div>
    );
  }

  // Si el estado es 'victory', mostramos pantalla de victoria
  if (gameState === 'victory') {
    if (isBlockMode) {
      // Determine if this is the final mastery screen
      const isFinalScreen = isConsolidation || (!isPlayMode && sessionLoop >= TOTAL_LOOPS);

      if (!isFinalScreen) {
        // Brief auto-advancing transition (3s timer running via useEffect)
        const currentAccuracy = blockWords
          ? Math.round((blockWords.filter(w => studiedWords.has(w.target)).length / blockWords.length) * 100)
          : 0;
        const isLastBeforeConsolidation = sessionLoop >= TOTAL_LOOPS && isPlayMode;

        return (
          <div className="round-transition-screen">
            <div className="round-transition-icon">✅</div>
            <div className="round-transition-title">
              RONDA {sessionLoop}/{TOTAL_LOOPS} COMPLETADA
            </div>
            <div className="round-transition-stats">
              <span>{score} pts</span>
              <span>{currentAccuracy}% precisión</span>
            </div>
            <div className="round-transition-next">
              {isLastBeforeConsolidation
                ? '⚡ Preparando consolidación...'
                : `Ronda ${sessionLoop + 1} en 3s...`}
            </div>
            <div className="round-transition-bar">
              <div className="round-transition-bar-fill" />
            </div>
          </div>
        );
      }

      // Final mastery screen
      const finalWords = isConsolidation ? consolidationWords : (blockWords || []);
      const allScores = [...sessionScores, score];
      const totalScore = allScores.reduce((a, b) => a + b, 0);

      // Final accuracy based on the relevant word set
      const finalAccuracy = finalWords.length > 0
        ? Math.round((finalWords.filter(w => studiedWords.has(w.target)).length / finalWords.length) * 100)
        : 0;
      const allAccuracies = [...sessionAccuracies, finalAccuracy];

      // Total rounds label
      const totalRoundsPlayed = allScores.length;

      // Mastery level based on final accuracy
      let masteryIcon: string, masteryTitle: string, masteryColor: string;
      if (finalAccuracy >= 100) {
        masteryIcon = '🏆'; masteryTitle = 'MAESTRO'; masteryColor = '#ffd700';
      } else if (finalAccuracy >= 80) {
        masteryIcon = '⭐'; masteryTitle = 'EXPERTO'; masteryColor = '#00ff87';
      } else if (finalAccuracy >= 60) {
        masteryIcon = '👍'; masteryTitle = 'AVANZADO'; masteryColor = '#00d4ff';
      } else {
        masteryIcon = '📖'; masteryTitle = 'EN PROGRESO'; masteryColor = '#ff9500';
      }

      // Check if all blocks in the phase are complete
      const phaseProgress = getPhaseProgress(phase.id, phase.wordPairs.length);
      const isPhaseComplete = phaseProgress.phaseCompleted;

      return (
        <div className="block-results mastery-results mastery-scrollable">
          {/* Mastery level badge */}
          <div className="mastery-level" style={{ borderColor: masteryColor }}>
            <span className="mastery-level-icon">{masteryIcon}</span>
            <span className="mastery-level-title" style={{ color: masteryColor }}>{masteryTitle}</span>
          </div>

          <div className="block-results-header">
            <div className="block-results-title victory">
              {isConsolidation
                ? `¡DOMINAS BLOQUES 1-${(blockIndex ?? 0) + 1}!`
                : `¡BLOQUE ${(blockIndex ?? 0) + 1} DOMINADO!`}
            </div>
            <div className="block-results-subtitle">
              {totalRoundsPlayed} rondas completadas
              {isConsolidation ? ' + consolidación' : ''}
              {' '}• Precisión final: {finalAccuracy}%
            </div>
          </div>

          {/* Per-loop summary */}
          <div className="mastery-loop-summary">
            {allScores.map((s, i) => {
              const isConsolidationRow = isConsolidation && i === allScores.length - 1;
              return (
                <div key={i} className={`mastery-loop-row ${isConsolidationRow ? 'consolidation-row' : ''}`}>
                  <span className="mastery-loop-label">
                    {isConsolidationRow ? '⚡ Consolidación' : `Ronda ${i + 1}`}
                  </span>
                  <span className="mastery-loop-score">{s} pts</span>
                  <span className="mastery-loop-accuracy">{allAccuracies[i]}%</span>
                </div>
              );
            })}
          </div>

          <div className="block-results-stats">
            <div className="block-results-stat">
              <div className="block-results-stat-value">{totalScore}</div>
              <div className="block-results-stat-label">Puntos totales</div>
            </div>
            <div className="block-results-stat">
              <div className="block-results-stat-value">{finalAccuracy}%</div>
              <div className="block-results-stat-label">Precisión</div>
            </div>
            <div className="block-results-stat">
              <div className="block-results-stat-value">{finalWords.length}</div>
              <div className="block-results-stat-label">Palabras</div>
            </div>
          </div>

          {/* Consolidation banner */}
          {isConsolidation && (
            <div className="consolidation-banner">
              ⚡ Consolidación: {finalWords.length} palabras de bloques 1-{(blockIndex ?? 0) + 1}
            </div>
          )}

          {/* Word list — scrollable */}
          <div className="block-results-words">
            {finalWords.map((word, idx) => {
              const isCorrectWord = studiedWords.has(word.target);
              return (
                <div key={idx} className={`block-results-word ${isCorrectWord ? 'correct' : 'missed'}`}>
                  <div className="block-results-word-icon">
                    {isCorrectWord ? '✅' : '❌'}
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
                </div>
              );
            })}
          </div>

          <div className="mastery-message">
            {masteryIcon} {finalAccuracy >= 80
              ? `¡Dominio demostrado de estas ${finalWords.length} palabras!`
              : `Sigue practicando para dominar estas ${finalWords.length} palabras.`}
          </div>

          {/* Phase completion banner */}
          {isPhaseComplete && (
            <div className="phase-complete-banner">
              <div className="phase-complete-icon">🎓</div>
              <div className="phase-complete-text">
                ¡FASE {phase.id} COMPLETADA!
              </div>
              <div className="phase-complete-subtitle">
                Has dominado todas las palabras de &ldquo;{phase.title}&rdquo;
              </div>
            </div>
          )}

          <div className="block-results-actions">
            <button className="btn btn-primary" onClick={handleFullRetry}>
              <RotateCcw size={20} />
              REPETIR
            </button>
            {onNextBlock && !isConsolidation && (
              <button className="btn btn-primary" onClick={onNextBlock}>
                <ArrowRight size={20} />
                SIGUIENTE BLOQUE
              </button>
            )}
            <button className="btn btn-primary" onClick={onExit}>
              <X size={20} />
              BLOQUES
            </button>
            {onHome && (
              <button className="btn btn-home" onClick={onHome}>
                <Home size={20} />
                MENÚ PRINCIPAL
              </button>
            )}
          </div>
        </div>
      );
    }
    return (
      <div className="gameover-screen">
        <div className="gameover-title victory-title">
          🎉 ¡VICTORIA! 🎉
        </div>
        <div className="victory-subtitle">
          ¡YA DOMINAS {studiedWords.size} PALABRAS DE ESTA FASE!
        </div>
        <div className="gameover-stats">
          <div className="gameover-stat">
            <div className="gameover-stat-label">Puntuación Final</div>
            <div className="gameover-stat-value">{score}</div>
          </div>
          <div className="gameover-stat">
            <div className="gameover-stat-label">Palabras Dominadas</div>
            <div className="gameover-stat-value">{studiedWords.size}</div>
          </div>
        </div>
        <div className="gameover-actions">
          <button className="btn btn-primary" onClick={resetGame}>
            <RotateCcw size={24} />
            VOLVER A EMPEZAR
          </button>
          <button className="btn btn-primary" onClick={onExit}>
            <Book size={24} />
            OTRAS FASES
          </button>
        </div>
      </div>
    );
  }

  // Pantalla de juego principal (training, easy, medium, hard)
  return (
    <div className="game-container">
      <div className={`${shakeScreen ? 'screen-shake' : ''}`}>
        {/* Sound Toggle */}
        <button 
          className={`sound-toggle ${soundEnabled ? 'active' : ''}`}
          onClick={() => setSoundEnabled(!soundEnabled)}
        >
          <Volume2 size={24} color={soundEnabled ? '#00ff87' : '#fff'} />
        </button>

        {/* Game Controls */}
        <div className="game-controls">
          <button className="control-btn" onClick={togglePause} title="Pausar">
            <Pause size={20} />
          </button>
          <button className="control-btn" onClick={() => {
            quitGame();
            onExit();
          }} title="Salir">
            <X size={20} />
          </button>
        </div>

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
            
            {/* Mostrar nivel según el modo */}
            {gameState === 'training' ? (
              <div className="stat-item">
                <div className="stat-label">Modo</div>
                <div className="stat-value stat-value--training">
                  PRÁCTICA
                </div>
              </div>
            ) : (
              <div className="stat-item">
                <div className="stat-label">Nivel</div>
                <div className="stat-value" style={{color: difficultyConfig[difficulty].color}}>
                  {difficultyConfig[difficulty].name}
                </div>
              </div>
            )}

            {/* Session loop indicator (block mode) */}
            {isBlockMode && (
              <div className="stat-item">
                <div className="stat-label">Ronda</div>
                <div className="stat-value stat-value--round">
                  {isConsolidation ? '⚡' : `${sessionLoop}/${TOTAL_LOOPS}`}
                </div>
              </div>
            )}

            {/* Mini speed control (block mode) */}
            {isBlockMode && speedLevel && onSpeedChange && (
              <div className="stat-item">
                <div className="stat-label">Velocidad</div>
                <div className="mini-speed">
                  {SPEED_LEVELS.map(sl => (
                    <button
                      key={sl.level}
                      className={`mini-speed__btn ${sl.level === speedLevel ? 'mini-speed__btn--active' : ''}`}
                      onClick={() => onSpeedChange(sl.level as SpeedLevel)}
                      title={sl.label}
                    >
                      {sl.level}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="game-screen">
          {currentWord && (
            <div className="target-word">
              <div className="target-label">ENCUENTRA EL ANTÓNIMO DE:</div>
              <div className="target-word-text">{currentWord.target}</div>
              {currentWord.targetIpa && (
                <div className="target-ipa">{currentWord.targetIpa}</div>
              )}
            </div>
          )}

          {/* Progress climber — block mode only (hide during consolidation) */}
          {isBlockMode && blockWords && !isConsolidation && (
            <ProgressClimber
              totalFloors={blockWords.length}
              floorsClimbed={Math.min(correctCount, blockWords.length)}
              loop={sessionLoop}
              totalLoops={TOTAL_LOOPS}
            />
          )}

          <div className="game-area">
            {fallingWords.length === 0 && currentWord && (
              <div className="game-area-loading">
                Cargando palabras...
              </div>
            )}
            
            {fallingWords.map((word) => {
              // Determinar velocidad según modo y dificultad
              let fallSpeed;
              if (speedMs) {
                fallSpeed = speedMs;
              } else if (gameState === 'training') {
                fallSpeed = difficultyConfig.easy.speed;
              } else {
                fallSpeed = difficultyConfig[difficulty].speed;
              }
              
              // En modo training la respuesta correcta se ve verde
              // En otros modos todas se ven iguales (blanco)
              const wordClass = word.isCorrect 
                ? (gameState === 'training' ? 'correct' : 'correct-hidden')
                : 'distractor';
              
              return (
                <div
                  key={word.id}
                  className={`falling-word ${wordClass}`}
                  style={{
                    left: `${word.left}%`,
                    animation: `fall ${fallSpeed}ms linear forwards`,
                    animationPlayState: isPaused ? 'paused' : 'running'
                  }}
                  onPointerDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleWordClick(word, e);
                  }}
                >
                  {word.text}
                </div>
              );
            })}
          </div>
        </div>

        {/* Pause Overlay */}
        {isPaused && (
          <div className="pause-overlay">
            <div className="pause-title">⏸️ PAUSA</div>
            <div className="pause-actions">
              <button className="btn btn-primary" onClick={togglePause}>
                <Play size={24} />
                CONTINUAR
              </button>
              <button className="btn btn-primary" onClick={() => {
                quitGame();
                onExit();
              }}>
                <X size={24} />
                VOLVER
              </button>
            </div>
          </div>
        )}

        {/* Feedback */}
        {feedback && (
          <div className={`feedback ${feedback.type}`}>
            <div className="feedback-text">{feedback.text}</div>
            {feedback.ipa && (
              <div className="feedback-ipa">{feedback.ipa}</div>
            )}
            {feedback.spanish && (
              <div className="feedback-spanish">{feedback.spanish}</div>
            )}
            <div className="feedback-points">{feedback.points}</div>
          </div>
        )}

        {/* Particles */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              '--vx': `${particle.vx}px`,
              '--vy': `${particle.vy}px`
            } as React.CSSProperties}
          />
        ))}

        {/* Confetti */}
        {confetti.map(piece => (
          <div
            key={piece.id}
            className="confetti-piece"
            style={{
              left: `${piece.x}%`,
              top: `${piece.y}%`,
              backgroundColor: piece.color,
              animationDelay: `${piece.delay}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

