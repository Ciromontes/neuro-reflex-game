import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GameEngine } from '../../components/game';
import { getPhaseById } from '../../data/phases';

const GamePage: React.FC = () => {
  const { phaseId, mode } = useParams<{ phaseId: string; mode: string }>();
  const navigate = useNavigate();
  
  const phase = getPhaseById(parseInt(phaseId || '1'));
  
  // Validar que el modo sea válido
  const validMode = (mode: string): mode is 'training' | 'easy' | 'medium' | 'hard' => {
    return ['training', 'easy', 'medium', 'hard'].includes(mode);
  };
  
  if (!phase) {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh',
        color: 'white',
        textAlign: 'center',
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a1d3d 50%, #0f1428 100%)'
      }}>
        <h1 style={{ fontFamily: 'Orbitron, sans-serif', fontSize: '48px', color: '#ff3d00' }}>
          ¡FASE NO ENCONTRADA!
        </h1>
        <button 
          onClick={() => navigate('/')}
          style={{
            marginTop: '30px',
            padding: '15px 30px',
            background: 'linear-gradient(135deg, #00ff87, #00d4ff)',
            border: 'none',
            borderRadius: '50px',
            color: '#0a0e27',
            fontFamily: 'Orbitron, sans-serif',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          VOLVER AL INICIO
        </button>
      </div>
    );
  }

  const handleExit = () => {
    navigate(`/learn/${phaseId}`);
  };

  const gameMode = validMode(mode || 'training') ? (mode as 'training' | 'easy' | 'medium' | 'hard') : 'training';

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <GameEngine 
        phase={phase} 
        mode={gameMode} 
        onExit={handleExit} 
      />
    </div>
  );
};

export default GamePage;
