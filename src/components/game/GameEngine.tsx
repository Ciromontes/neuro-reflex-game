import React from 'react';
import { Volume2, Play, RotateCcw, Pause, X } from 'lucide-react';
import type { Phase } from '../../types';
import { useGameLogic } from '../../hooks/useGameLogic';

interface GameEngineProps {
  phase: Phase;
  mode: 'training' | 'easy' | 'medium' | 'hard';
  onExit: () => void;
}

export const GameEngine: React.FC<GameEngineProps> = ({ phase, mode, onExit }) => {
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
    isPaused,
    shakeScreen,
    handleWordClick,
    startGame,
    togglePause,
    quitGame
  } = useGameLogic(phase, mode);

  // Si el estado es 'learning', mostramos la pantalla de aprendizaje
  if (gameState === 'learning') {
    return (
      <div className="learning-screen">
        <div className="learning-title">NEURO-REFLEX</div>
        <div className="learning-subtitle">
          📚 FASE DE APRENDIZAJE • Estudia estas {phase.wordPairs.length} palabras antes de comenzar
        </div>
        <div className="learning-list">
          {phase.wordPairs.map((word, idx) => (
            <div key={idx} className="learning-card">
              <div className="learning-pair">
                <span>{word.target}</span>
                <span style={{color: '#00ff87', fontSize: '12px'}}>↔</span>
                <span style={{color: '#00ff87'}}>{word.antonym}</span>
              </div>
              <div className="learning-spanish">{word.spanish}</div>
            </div>
          ))}
        </div>
        <div style={{display: 'flex', gap: '15px', marginTop: '5px'}}>
          <button className="btn btn-primary" onClick={startGame}>
            <Play size={22} />
            {mode === 'training' ? 'MODO ENTRENAMIENTO' : `COMENZAR NIVEL ${mode.toUpperCase()}`}
          </button>
          <button className="btn btn-primary" onClick={onExit}>
            <X size={22} />
            SALIR
          </button>
        </div>
      </div>
    );
  }

  // Si el estado es 'gameover', mostramos pantalla de fin de juego
  if (gameState === 'gameover') {
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
        <button className="btn btn-primary" onClick={() => { /* restart logic */ }}>
          <RotateCcw size={24} />
          REINTENTAR
        </button>
      </div>
    );
  }

  // Pantalla de juego principal
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
          <button className="control-btn" onClick={quitGame} title="Salir">
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
            <div className="stat-item">
              <div className="stat-label">Nivel</div>
              <div className="stat-value" style={{color: phase.color}}>
                {mode.toUpperCase()}
              </div>
            </div>
          </div>
        </div>

        <div className="game-screen">
          {currentWord && (
            <div className="target-word">
              <div className="target-label">ENCUENTRA EL ANTÓNIMO DE:</div>
              <div className="target-word-text">{currentWord.target}</div>
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
              const fallSpeed = phase.difficultyLevels[mode].speed;
              const wordClass = word.isCorrect 
                ? (mode === 'training' ? 'correct' : 'correct-hidden')
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
              <button className="btn btn-primary" onClick={onExit}>
                <X size={24} />
                SALIR
              </button>
            </div>
          </div>
        )}

        {/* Feedback */}
        {feedback && (
          <div className={`feedback ${feedback.type}`}>
            <div className="feedback-text">{feedback.text}</div>
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
            }}
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
