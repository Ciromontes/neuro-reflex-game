import React from 'react';
import { Link } from 'react-router-dom';
import { phases } from '../../data/phases';
import { Play } from 'lucide-react';
import { CoffeeCard } from '../../components/common/CoffeeCard';

const HomePage: React.FC = () => {
  return (
    <div className="home-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap');

        .home-container {
          width: 100vw;
          min-height: 100vh;
          background: linear-gradient(135deg, #0a0e27 0%, #1a1d3d 50%, #0f1428 100%);
          position: relative;
          overflow-x: hidden;
          font-family: 'Space Mono', monospace;
          padding: 40px 20px;
          padding-bottom: max(100px, env(safe-area-inset-bottom, 100px));
        }

        .home-container::before {
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

        .home-header {
          text-align: center;
          margin-bottom: 60px;
          position: relative;
          z-index: 2;
        }

        .home-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 64px;
          font-weight: 900;
          color: #00ff87;
          text-shadow: 0 0 40px rgba(0, 255, 135, 0.6);
          margin-bottom: 10px;
        }

        .home-subtitle {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .phases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .phase-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 30px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: all 0.4s;
          cursor: pointer;
          text-decoration: none;
          color: inherit;
        }

        .phase-card:hover {
          border-color: rgba(0, 255, 135, 0.5);
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 255, 135, 0.2);
          background: linear-gradient(135deg, rgba(0, 255, 135, 0.1) 0%, rgba(0, 212, 255, 0.05) 100%);
        }

        .phase-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .phase-icon {
          font-size: 48px;
          margin-right: 15px;
        }

        .phase-number {
          font-family: 'Orbitron', sans-serif;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          background: rgba(255, 255, 255, 0.1);
          border-radius: 20px;
          padding: 5px 15px;
          letter-spacing: 2px;
        }

        .phase-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
        }

        .phase-description {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          flex-grow: 1;
        }

        .phase-stats {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .phase-words {
          font-family: 'Orbitron', sans-serif;
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .phase-button {
          display: flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #00ff87, #00d4ff);
          color: #0a0e27;
          font-family: 'Orbitron', sans-serif;
          font-size: 14px;
          font-weight: 700;
          padding: 12px 24px;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s;
          letter-spacing: 1px;
        }

        .phase-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 255, 135, 0.4);
        }

        .home-footer {
          text-align: center;
          margin-top: 60px;
          position: relative;
          z-index: 2;
          color: rgba(255, 255, 255, 0.5);
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .home-title {
            font-size: 48px;
          }

          .phases-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
          }

          .phase-card {
            padding: 20px;
          }
        }
      `}</style>

      <div className="home-header">
        <h1 className="home-title">NEURO-REFLEX</h1>
        <p className="home-subtitle">
          Domina 120 palabras en inglés a través de 3 fases de entrenamiento cerebral. 
          Mejora tu vocabulario y reflejos lingüísticos.
        </p>
      </div>

      <div className="phases-grid">
        {phases.map((phase) => (
          <Link to={`/setup/${phase.id}`} key={phase.id} className="phase-card">
            <div className="phase-card-header">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="phase-icon">{phase.icon}</div>
                <div>
                  <div className="phase-number">FASE {phase.id}</div>
                  <h2 className="phase-title">{phase.title}</h2>
                </div>
              </div>
            </div>
            <p className="phase-description">{phase.description}</p>
            <div className="phase-stats">
              <div className="phase-words">
                <span>{phase.wordPairs.length} palabras</span>
              </div>
              <div className="phase-button">
                <Play size={18} />
                COMENZAR
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="home-footer">
        <p>Total: {phases.length} fases • {phases.reduce((total, phase) => total + phase.wordPairs.length, 0)} palabras</p>
      </div>

      {/* ☕ Donation card */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 48, position: 'relative', zIndex: 2 }}>
        <CoffeeCard />
      </div>

      <div style={{ height: 40 }} />
    </div>
  );
};

export default HomePage;
