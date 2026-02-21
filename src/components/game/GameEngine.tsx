import React from 'react';
import { Volume2, Play, RotateCcw, Pause, X, Book } from 'lucide-react';
import type { Phase, WordPair } from '../../types';
import { useGameLogic } from '../../hooks/useGameLogic';
import { BlockResults } from './BlockResults';

interface GameEngineProps {
  phase: Phase;
  mode: 'training' | 'easy' | 'medium' | 'hard';
  onExit: () => void;
  /** Subset of words (a single block). Falls back to full phase if omitted */
  blockWords?: WordPair[];
  /** Fixed fall speed in ms (from SpeedControl) */
  speedMs?: number;
  /** Current block index (0-based), for display purposes */
  blockIndex?: number;
  /** Called when the player wins with the final score */
  onBlockComplete?: (score: number) => void;
  /** Navigate to the next block (only provided if a next block exists) */
  onNextBlock?: () => void;
}

export const GameEngine: React.FC<GameEngineProps> = ({
  phase,
  mode,
  onExit,
  blockWords,
  speedMs,
  blockIndex,
  onBlockComplete,
  onNextBlock
}) => {
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
      return (
        <BlockResults
          victory={true}
          blockIndex={blockIndex}
          blockWords={blockWords}
          studiedWords={studiedWords}
          score={score}
          correctCount={correctCount}
          onRetry={resetGame}
          onNextBlock={onNextBlock}
          onExit={onExit}
        />
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

