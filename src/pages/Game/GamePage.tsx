import React, { useMemo } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { GameEngine } from '../../components/game';
import { getPhaseById } from '../../data/phases';
import { getBlockWords } from '../../utils/blockHelpers';
import { completeBlock } from '../../utils/progressService';
import { SPEED_LEVELS } from '../../types';
import type { SpeedLevel } from '../../types';

const GamePage: React.FC = () => {
  const { phaseId, mode, blockIndex: blockIndexParam } = useParams<{
    phaseId: string;
    mode?: string;
    blockIndex?: string;
  }>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const phase = getPhaseById(parseInt(phaseId || '1'));

  // Determinar si es modo bloque o modo legado
  const isBlockMode = blockIndexParam !== undefined;
  const blockIndex = isBlockMode ? parseInt(blockIndexParam) : null;

  // Velocidad desde query string (default 3 = Normal)
  const speedParam = parseInt(searchParams.get('speed') || '3') as SpeedLevel;
  const speedLevel = ([1, 2, 3, 4, 5].includes(speedParam) ? speedParam : 3) as SpeedLevel;
  const speedMs = SPEED_LEVELS.find(s => s.level === speedLevel)?.ms ?? 5000;

  // Palabras del bloque (o todas si es modo legado)
  const blockWords = useMemo(() => {
    if (!phase) return [];
    if (isBlockMode && blockIndex !== null) {
      return getBlockWords(phase, blockIndex);
    }
    return phase.wordPairs;
  }, [phase, isBlockMode, blockIndex]);

  // Validar que el modo sea válido (modo legado)
  const validMode = (m: string): m is 'training' | 'easy' | 'medium' | 'hard' => {
    return ['training', 'easy', 'medium', 'hard'].includes(m);
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
    if (isBlockMode) {
      navigate(`/setup/${phaseId}`);
    } else {
      navigate(`/learn/${phaseId}`);
    }
  };

  const handleBlockComplete = (score: number) => {
    if (isBlockMode && blockIndex !== null) {
      completeBlock(phase.id, blockIndex, score, phase.wordPairs.length);
    }
  };

  const gameMode = validMode(mode || 'training')
    ? (mode as 'training' | 'easy' | 'medium' | 'hard')
    : 'training';

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <GameEngine
        phase={phase}
        mode={isBlockMode ? 'training' : gameMode}
        onExit={handleExit}
        blockWords={isBlockMode ? blockWords : undefined}
        speedMs={isBlockMode ? speedMs : undefined}
        blockIndex={blockIndex ?? undefined}
        onBlockComplete={isBlockMode ? handleBlockComplete : undefined}
      />
    </div>
  );
};

export default GamePage;
