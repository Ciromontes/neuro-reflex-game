import React, { useState } from 'react';
import { Volume2, Play, RotateCcw, Pause, X, Book, ArrowRight } from 'lucide-react';
import type { Phase, WordPair, SpeedLevel } from '../../types';
import { SPEED_LEVELS } from '../../types';
import { useGameLogic } from '../../hooks/useGameLogic';
import { BlockResults } from './BlockResults';
import { getPhaseProgress } from '../../utils/progressService';

const TOTAL_LOOPS = 3;

interface GameEngineProps {
  phase: Phase;
  mode: 'training' | 'play' | 'easy' | 'medium' | 'hard';
  onExit: () => void;
  blockWords?: WordPair[];
  speedMs?: number;
  blockIndex?: number;
  onBlockComplete?: (score: number) => void;
  onNextBlock?: () => void;
  /** Current speed level (1-5) for in-game display/control */
  speedLevel?: SpeedLevel;
  /** Callback to change speed during gameplay */
  onSpeedChange?: (level: SpeedLevel) => void;
}

export const GameEngine: React.FC<GameEngineProps> = ({
  phase,
  mode,
  onExit,
  blockWords,
  speedMs,
  blockIndex,
  onBlockComplete,
  onNextBlock,
  speedLevel,
  onSpeedChange
}) => {
  // Session loop state (3 rounds per block)
  const [sessionLoop, setSessionLoop] = useState(1);
  const [sessionScores, setSessionScores] = useState<number[]>([]);
  const [sessionMissedWords, setSessionMissedWords] = useState<WordPair[]>([]);
  const [sessionAccuracies, setSessionAccuracies] = useState<number[]>([]);

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
    difficultyConfig
  } = useGameLogic(phase, mode, { blockWords, speedMs, onBlockComplete });

  // Words to display on the learning screen
  const displayWords = blockWords && blockWords.length > 0 ? blockWords : phase.wordPairs;
  const blockLabel = blockIndex != null ? ` • Bloque ${blockIndex + 1}` : '';

  const isBlockMode = blockIndex != null && blockWords && blockWords.length > 0;

  // Actual gameState mode used when starting a round
  const actualGameMode: 'training' | 'easy' | 'medium' | 'hard' =
    mode === 'play' ? 'easy' : mode === 'training' ? 'training' : (mode as 'easy' | 'medium' | 'hard');

  // Advance to next loop within the session
  const handleNextLoop = () => {
    // Save current round stats
    setSessionScores(prev => [...prev, score]);
    const loopAccuracy = blockWords && blockWords.length > 0
      ? Math.round((blockWords.filter(w => studiedWords.has(w.target)).length / blockWords.length) * 100)
      : 0;
    setSessionAccuracies(prev => [...prev, loopAccuracy]);

    // Accumulate unique missed words across sessions
    const allMissedMap = new Map<string, WordPair>();
    for (const w of sessionMissedWords) allMissedMap.set(w.target, w);
    for (const w of missedWords) allMissedMap.set(w.target, w);
    const allMissed = Array.from(allMissedMap.values());
    setSessionMissedWords(allMissed);

    setSessionLoop(prev => prev + 1);

    // Seed next loop with accumulated missed words for spaced repetition
    startGame(actualGameMode, allMissed);
  };

  // Full retry — reset all loops
  const handleFullRetry = () => {
    setSessionLoop(1);
    setSessionScores([]);
    setSessionAccuracies([]);
    setSessionMissedWords([]);
    resetGame();
  };

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
                <span style={{color: '#00ff87', fontSize: '12px'}}>↔</span>
                <span style={{color: '#00ff87'}}>{word.antonym}</span>
              </div>
              {(word.targetIpa || word.antonymIpa) && (
                <div style={{
                  fontSize: '11px',
                  color: 'rgba(255, 255, 255, 0.45)',
                  textAlign: 'center',
                  fontFamily: 'monospace',
                  marginTop: '2px'
                }}>
                  {word.targetIpa && <span>{word.targetIpa}</span>}
                  {word.targetIpa && word.antonymIpa && <span> — </span>}
                  {word.antonymIpa && <span>{word.antonymIpa}</span>}
                </div>
              )}
              <div className="learning-spanish">{word.spanish}</div>
              {word.type && (
                <div style={{
                  fontSize: '10px',
                  color: 'rgba(255, 255, 255, 0.5)',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginTop: '5px'
                }}>
                  {word.type}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div style={{display: 'flex', gap: '15px', marginTop: '5px'}}>
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
        <div style={{display: 'flex', gap: '15px'}}>
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
      // Mid-session: loop not yet complete
      if (sessionLoop < TOTAL_LOOPS) {
        // Deduplicate missed words from this round
        const roundMissedMap = new Map<string, WordPair>();
        for (const w of missedWords) roundMissedMap.set(w.target, w);
        const roundMissed = Array.from(roundMissedMap.values());

        return (
          <div className="loop-complete-screen">
            <div className="loop-complete-icon">✅</div>
            <div className="loop-complete-title">
              RONDA {sessionLoop}/{TOTAL_LOOPS} COMPLETADA
            </div>
            <div className="loop-complete-stats">
              <div className="loop-complete-stat">
                <span className="loop-complete-stat-value">{score}</span>
                <span className="loop-complete-stat-label">Puntos</span>
              </div>
              <div className="loop-complete-stat">
                <span className="loop-complete-stat-value">
                  {blockWords
                    ? Math.round((blockWords.filter(w => studiedWords.has(w.target)).length / blockWords.length) * 100)
                    : 0}%
                </span>
                <span className="loop-complete-stat-label">Precisión</span>
              </div>
            </div>

            {roundMissed.length > 0 ? (
              <div className="loop-missed-review">
                <div className="loop-missed-title">📝 Palabras a repasar:</div>
                {roundMissed.map((w, i) => (
                  <div key={i} className="loop-missed-word">
                    <span className="loop-missed-target">{w.target}</span>
                    <span className="loop-missed-arrow">↔</span>
                    <span className="loop-missed-antonym">{w.antonym}</span>
                    {w.spanish && <span className="loop-missed-spanish">({w.spanish})</span>}
                  </div>
                ))}
                <div className="loop-missed-note">
                  Estas palabras aparecerán con más frecuencia en la próxima ronda.
                </div>
              </div>
            ) : (
              <div className="loop-perfect">🌟 ¡Ronda perfecta! Sin errores.</div>
            )}

            <p className="loop-complete-hint">
              {sessionLoop === 1
                ? '¡Buen comienzo! Repite para afianzar las palabras.'
                : '¡Casi ahí! Una ronda más para dominar el bloque.'}
            </p>
            <button className="btn btn-primary" onClick={handleNextLoop}>
              <ArrowRight size={22} />
              SIGUIENTE RONDA
            </button>
          </div>
        );
      }

      // Final loop — mastery!
      const allScores = [...sessionScores, score];
      const totalScore = allScores.reduce((a, b) => a + b, 0);

      // Final loop accuracy
      const finalAccuracy = blockWords.length > 0
        ? Math.round((blockWords.filter(w => studiedWords.has(w.target)).length / blockWords.length) * 100)
        : 0;
      const allAccuracies = [...sessionAccuracies, finalAccuracy];

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
        <div className="block-results mastery-results">
          {/* Mastery level badge */}
          <div className="mastery-level" style={{ borderColor: masteryColor }}>
            <span className="mastery-level-icon">{masteryIcon}</span>
            <span className="mastery-level-title" style={{ color: masteryColor }}>{masteryTitle}</span>
          </div>

          <div className="block-results-header">
            <div className="block-results-title victory">
              ¡BLOQUE {blockIndex + 1} DOMINADO!
            </div>
            <div className="block-results-subtitle">
              {TOTAL_LOOPS} rondas completadas • Precisión final: {finalAccuracy}%
            </div>
          </div>

          {/* Per-loop summary */}
          <div className="mastery-loop-summary">
            {allScores.map((s, i) => (
              <div key={i} className="mastery-loop-row">
                <span className="mastery-loop-label">Ronda {i + 1}</span>
                <span className="mastery-loop-score">{s} pts</span>
                <span className="mastery-loop-accuracy">{allAccuracies[i]}%</span>
              </div>
            ))}
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
              <div className="block-results-stat-value">{TOTAL_LOOPS}/{TOTAL_LOOPS}</div>
              <div className="block-results-stat-label">Rondas</div>
            </div>
          </div>

          {/* Word list from final loop */}
          <div className="block-results-words">
            {blockWords.map((word, idx) => {
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
              ? `¡Dominio demostrado de estas ${blockWords.length} palabras!`
              : `Sigue practicando para dominar estas ${blockWords.length} palabras.`}
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
            {onNextBlock && (
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
    }
    return (
      <div className="gameover-screen">
        <div className="gameover-title" style={{color: '#ffd700'}}>
          🎉 ¡VICTORIA! 🎉
        </div>
        <div style={{
          fontSize: '32px',
          color: '#00ff87',
          fontFamily: 'Orbitron, sans-serif',
          fontWeight: 700,
          marginBottom: '30px',
          textAlign: 'center'
        }}>
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
        <div style={{display: 'flex', gap: '15px'}}>
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
                <div className="stat-value" style={{color: '#00ff87'}}>
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
                <div className="stat-value" style={{color: '#ffd700', fontSize: '20px'}}>
                  {sessionLoop}/{TOTAL_LOOPS}
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

          <div className="game-area">
            {fallingWords.length === 0 && currentWord && (
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'rgba(255,255,255,0.5)',
                fontSize: '18px',
                textAlign: 'center'
              }}>
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
                  onClick={(e) => handleWordClick(word, e)}
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
            <div style={{display: 'flex', gap: '20px'}}>
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

