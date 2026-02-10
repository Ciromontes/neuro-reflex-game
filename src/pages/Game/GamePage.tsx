import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GameEngine } from '../../components/game';
import { getPhaseById } from '../../data/phases';

const GamePage: React.FC = () => {
  const { phaseId, mode } = useParams<{ phaseId: string; mode: 'training' | 'easy' | 'medium' | 'hard' }>();
  const navigate = useNavigate();
  
  const phase = getPhaseById(parseInt(phaseId || '1'));
  
  if (!phase) {
    return (
      <div style={{ color: 'white', textAlign: 'center', padding: '50px' }}>
        Fase no encontrada
      </div>
    );
  }

  const handleExit = () => {
    navigate(`/learn/${phaseId}`);
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <GameEngine 
        phase={phase} 
        mode={mode || 'training'} 
        onExit={handleExit} 
      />
    </div>
  );
};

export default GamePage;
