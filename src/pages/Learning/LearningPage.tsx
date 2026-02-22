import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Play, ChevronLeft } from 'lucide-react';
import { getPhaseById } from '../../data/phases';

const LearningPage: React.FC = () => {
  const { phaseId } = useParams<{ phaseId: string }>();
  const navigate = useNavigate();
  
  const phase = getPhaseById(parseInt(phaseId || '1'));

  // Reproduce target y antonym en inglés al tocar la tarjeta
  const speakWordPair = (target: string, antonym: string) => {
    if (!window.speechSynthesis) return;
    if (window.speechSynthesis.paused) window.speechSynthesis.resume();
    window.speechSynthesis.cancel();

    const voices = window.speechSynthesis.getVoices();
    const eng = voices.find(v => v.lang === 'en-US' || v.lang === 'en-GB' || v.lang.startsWith('en-'));

    const speak = (text: string, onEnd?: () => void) => {
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = 'en-US';
      utt.rate = 0.9;
      if (eng) utt.voice = eng;
      if (onEnd) utt.onend = onEnd;
      window.speechSynthesis.speak(utt);
    };

    if (voices.length > 0) {
      speak(target, () => setTimeout(() => speak(antonym), 400));
    } else {
      window.speechSynthesis.onvoiceschanged = () => {
        const v2 = window.speechSynthesis.getVoices();
        const eng2 = v2.find(v => v.lang === 'en-US' || v.lang === 'en-GB' || v.lang.startsWith('en-'));
        const speak2 = (text: string, onEnd?: () => void) => {
          const utt = new SpeechSynthesisUtterance(text);
          utt.lang = 'en-US';
          utt.rate = 0.9;
          if (eng2) utt.voice = eng2;
          if (onEnd) utt.onend = onEnd;
          window.speechSynthesis.speak(utt);
        };
        speak2(target, () => setTimeout(() => speak2(antonym), 400));
      };
    }
  };
  
  if (!phase) {
    return (
      <div style={{ color: 'white', textAlign: 'center', padding: '50px' }}>
        Fase no encontrada
      </div>
    );
  }

  const handleStartGame = (mode: 'training' | 'easy' | 'medium' | 'hard') => {
    navigate(`/play/${phaseId}/${mode}`);
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div className="learning-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap');

        .learning-container {
          width: 100vw;
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0e27 0%, #1a1d3d 50%, #0f1428 100%);
          position: relative;
          overflow-x: hidden;
          font-family: 'Space Mono', monospace;
          padding: 40px 20px;
          padding-bottom: max(100px, env(safe-area-inset-bottom, 100px));
        }

        .learning-container::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            linear-gradient(rgba(0, 255, 135, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 135, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
          pointer-events: none;
          z-index: 1;
        }

        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }

        .learning-header {
          display: flex;
          align-items: center;
          margin-bottom: 40px;
          position: relative;
          z-index: 2;
        }

        .back-button {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 10px 20px;
          color: white;
          font-family: 'Orbitron', sans-serif;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s;
          margin-right: 30px;
          text-decoration: none;
        }

        .back-button:hover {
          background: rgba(0, 255, 135, 0.2);
          border-color: #00ff87;
        }

        .phase-info {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .phase-icon {
          font-size: 48px;
        }

        .phase-text h1 {
          font-family: 'Orbitron', sans-serif;
          font-size: 36px;
          color: #fff;
          margin-bottom: 5px;
        }

        .phase-text p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 16px;
        }

        .learning-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 40px;
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .words-list {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 30px;
          max-height: 65vh;
          overflow-y: auto;
          scrollbar-width: thin;
          scrollbar-color: #00ff87 rgba(255, 255, 255, 0.1);
        }

        .words-list::-webkit-scrollbar {
          width: 8px;
        }

        .words-list::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }

        .words-list::-webkit-scrollbar-thumb {
          background: #00ff87;
          border-radius: 4px;
        }

        .words-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 15px;
        }

        .word-card {
          background: linear-gradient(135deg, rgba(0, 255, 135, 0.1) 0%, rgba(0, 212, 255, 0.05) 100%);
          border: 2px solid rgba(0, 255, 135, 0.4);
          border-radius: 10px;
          padding: 15px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          transition: all 0.3s;
        }

        .word-card:hover {
          background: linear-gradient(135deg, rgba(0, 255, 135, 0.15) 0%, rgba(0, 212, 255, 0.1) 100%);
          border-color: #00ff87;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 255, 135, 0.3);
        }

        .word-pair {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-family: 'Orbitron', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #fff;
        }

        .word-pair span:first-child {
          color: #fff;
        }

        .word-pair span:last-child {
          color: #00ff87;
        }

        .word-spanish {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
        }

        .mode-selection {
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .mode-selection h2 {
          font-family: 'Orbitron', sans-serif;
          font-size: 24px;
          color: #fff;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .mode-buttons {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .mode-button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          padding: 20px;
          color: white;
          font-family: 'Orbitron', sans-serif;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s;
          text-decoration: none;
        }

        .mode-button:hover {
          background: rgba(0, 255, 135, 0.2);
          border-color: #00ff87;
          transform: translateY(-3px);
        }

        .mode-button.training {
          border-color: rgba(0, 255, 135, 0.5);
          background: rgba(0, 255, 135, 0.1);
        }

        .mode-button.easy {
          border-color: rgba(0, 255, 135, 0.5);
        }

        .mode-button.medium {
          border-color: rgba(0, 212, 255, 0.5);
        }

        .mode-button.hard {
          border-color: rgba(255, 0, 255, 0.5);
        }

        .mode-info {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .mode-details {
          text-align: right;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
        }

        .mode-details div:first-child {
          font-family: 'Orbitron', sans-serif;
          font-size: 14px;
          margin-bottom: 5px;
        }

        @media (max-width: 1024px) {
          .learning-content {
            grid-template-columns: 1fr;
          }

          .words-list {
            max-height: 50vh;
          }
        }

        @media (max-width: 768px) {
          .learning-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }

          .phase-info {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .words-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="learning-header">
        <button className="back-button" onClick={goBack}>
          <ChevronLeft size={20} />
          VOLVER
        </button>
        
        <div className="phase-info">
          <div className="phase-icon" style={{ color: phase.color }}>{phase.icon}</div>
          <div className="phase-text">
            <h1 style={{ color: phase.color }}>{phase.title}</h1>
            <p>{phase.description}</p>
          </div>
        </div>
      </div>

      <div className="learning-content">
        <div className="words-list">
          <div className="words-grid">
            {phase.wordPairs.map((word, idx) => (
              <div
                key={idx}
                className="word-card"
                onClick={() => speakWordPair(word.target, word.antonym)}
                style={{ cursor: 'pointer', userSelect: 'none' }}
                title="Toca para escuchar"
              >
                <div style={{ fontSize: '14px', marginBottom: '4px', opacity: 0.6, textAlign: 'right' }}>🔊</div>
                <div className="word-pair">
                  <span>{word.target}</span>
                  <span>↔</span>
                  <span>{word.antonym}</span>
                </div>
                <div className="word-spanish">{word.spanish}</div>
                {word.type && (
                  <div style={{
                    fontSize: '10px',
                    color: 'rgba(255, 255, 255, 0.5)',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {word.type}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mode-selection">
          <h2><Play size={24} /> SELECCIONA MODO</h2>
          
          <div className="mode-buttons">
            <button 
              className="mode-button training"
              onClick={() => handleStartGame('training')}
            >
              <div className="mode-info">
                <Play size={20} />
                <span>ENTRENAMIENTO</span>
              </div>
              <div className="mode-details">
                <div>PRÁCTICA</div>
                <div>Sin presión de tiempo</div>
              </div>
            </button>

            <button 
              className="mode-button easy"
              onClick={() => handleStartGame('easy')}
            >
              <div className="mode-info">
                <Play size={20} />
                <span>FÁCIL</span>
              </div>
              <div className="mode-details">
                <div>{phase.difficultyLevels.easy.speed}ms</div>
                <div>{phase.difficultyLevels.easy.lives} vidas</div>
              </div>
            </button>

            <button 
              className="mode-button medium"
              onClick={() => handleStartGame('medium')}
            >
              <div className="mode-info">
                <Play size={20} />
                <span>MEDIO</span>
              </div>
              <div className="mode-details">
                <div>{phase.difficultyLevels.medium.speed}ms</div>
                <div>{phase.difficultyLevels.medium.lives} vidas</div>
              </div>
            </button>

            <button 
              className="mode-button hard"
              onClick={() => handleStartGame('hard')}
            >
              <div className="mode-info">
                <Play size={20} />
                <span>DIFÍCIL</span>
              </div>
              <div className="mode-details">
                <div>{phase.difficultyLevels.hard.speed}ms</div>
                <div>{phase.difficultyLevels.hard.lives} vidas</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPage;
