import React, { useMemo, useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { GameEngine } from '../../components/game';
import { getPhaseById } from '../../data/phases';
import { getBlockWords, getBlockCount } from '../../utils/blockHelpers';
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
  const initialSpeedLevel = ([1, 2, 3, 4, 5].includes(speedParam) ? speedParam : 3) as SpeedLevel;
  const [currentSpeedLevel, setCurrentSpeedLevel] = useState<SpeedLevel>(initialSpeedLevel);
  const speedMs = SPEED_LEVELS.find(s => s.level === currentSpeedLevel)?.ms ?? 5000;

  // Modo de juego desde query string: 'training' (con pistas) o 'play' (sin pistas)
  const modeParam = searchParams.get('mode');
  const blockGameMode: 'training' | 'play' = modeParam === 'play' ? 'play' : 'training';

  // Palabras del bloque (o todas si es modo legado)
  const blockWords = useMemo(() => {
    if (!phase) return [];
    if (isBlockMode && blockIndex !== null) {
      return getBlockWords(phase, blockIndex);
    }
    return phase.wordPairs;
  }, [phase, isBlockMode, blockIndex]);

  // Validar que el modo sea válido (modo legado)
  const validMode = (m: string): m is 'training' | 'play' | 'easy' | 'medium' | 'hard' => {
    return ['training', 'play', 'easy', 'medium', 'hard'].includes(m);
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

  const handleHome = () => navigate('/');

  const handleBlockComplete = (score: number) => {
    if (isBlockMode && blockIndex !== null) {
      completeBlock(phase.id, blockIndex, score, phase.wordPairs.length);
    }
  };

  const totalBlocks = getBlockCount(phase);
  const hasNextBlock = isBlockMode && blockIndex !== null && blockIndex < totalBlocks - 1;

  const handleNextBlock = () => {
    if (isBlockMode && blockIndex !== null) {
      navigate(`/play/${phaseId}/block/${blockIndex + 1}?speed=${currentSpeedLevel}&mode=${blockGameMode}`);
    }
  };

  const gameMode = validMode(mode || 'training')
    ? (mode as 'training' | 'play' | 'easy' | 'medium' | 'hard')
    : 'training';

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <GameEngine
        phase={phase}
        mode={isBlockMode ? blockGameMode : gameMode}
        onExit={handleExit}
        onHome={handleHome}
        blockWords={isBlockMode ? blockWords : undefined}
        speedMs={isBlockMode ? speedMs : undefined}
        blockIndex={blockIndex ?? undefined}
        onBlockComplete={isBlockMode ? handleBlockComplete : undefined}
        onNextBlock={hasNextBlock ? handleNextBlock : undefined}
        speedLevel={isBlockMode ? currentSpeedLevel : undefined}
        onSpeedChange={isBlockMode ? setCurrentSpeedLevel : undefined}
      />
    </div>
  );
};

export default GamePage;
