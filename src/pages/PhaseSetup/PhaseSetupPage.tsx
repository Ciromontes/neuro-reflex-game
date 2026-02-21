import React, { useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getPhaseById } from '../../data/phases';
import { getPhaseProgress, saveSpeedLevel } from '../../utils/progressService';
import { getBlockCount } from '../../utils/blockHelpers';
import BlockSelector from '../../components/phase-selection/BlockSelector';
import SpeedControl from '../../components/phase-selection/SpeedControl';
import type { SpeedLevel } from '../../types';
import { ArrowLeft, Play, BookOpen } from 'lucide-react';

const PhaseSetupPage: React.FC = () => {
  const { phaseId } = useParams<{ phaseId: string }>();
  const navigate = useNavigate();

  const phase = getPhaseById(parseInt(phaseId || '1'));

  const totalPairs = phase?.wordPairs.length ?? 0;
  const progress = useMemo(
    () => (phase ? getPhaseProgress(phase.id, totalPairs) : null),
    [phase, totalPairs]
  );

  const [selectedBlock, setSelectedBlock] = useState<number | null>(null);
  const [speed, setSpeed] = useState<SpeedLevel>(progress?.speedLevel ?? 3);

  if (!phase || !progress) {
    return (
      <div className="setup-page setup-page--error">
        <h1>FASE NO ENCONTRADA</h1>
        <button onClick={() => navigate('/')} className="setup-page__btn-home">
          VOLVER AL INICIO
        </button>
      </div>
    );
  }

  const handleSpeedChange = (level: SpeedLevel) => {
    setSpeed(level);
    saveSpeedLevel(phase.id, level, totalPairs);
  };

  const handlePlay = () => {
    if (selectedBlock === null) return;
    // Navigate to the game with block index and speed encoded in query/route
    navigate(`/play/${phase.id}/block/${selectedBlock}?speed=${speed}`);
  };

  const completedCount = progress.blocks.filter((b) => b.completed).length;
  const totalBlocks = getBlockCount(phase);

  return (
    <div className="setup-page">
      <style>{setupStyles}</style>

      {/* Top bar */}
      <div className="setup-page__topbar">
        <Link to={`/learn/${phase.id}`} className="setup-page__back">
          <ArrowLeft size={20} /> Volver
        </Link>
        <Link to="/" className="setup-page__home">INICIO</Link>
      </div>

      {/* Header */}
      <div className="setup-page__header">
        <span className="setup-page__icon">{phase.icon}</span>
        <div>
          <div className="setup-page__phase-label">FASE {phase.id}</div>
          <h1 className="setup-page__title">{phase.title}</h1>
        </div>
      </div>

      {/* Progress bar */}
      <div className="setup-page__progress">
        <div className="setup-page__progress-bar">
          <div
            className="setup-page__progress-fill"
            style={{ width: `${(completedCount / totalBlocks) * 100}%` }}
          />
        </div>
        <span className="setup-page__progress-text">
          {completedCount}/{totalBlocks} bloques completados
        </span>
      </div>

      {/* Block Selector */}
      <BlockSelector
        phase={phase}
        blocks={progress.blocks}
        selectedBlock={selectedBlock}
        onSelectBlock={setSelectedBlock}
      />

      {/* Speed Control */}
      <SpeedControl value={speed} onChange={handleSpeedChange} />

      {/* Action buttons */}
      <div className="setup-page__actions">
        <button
          className="setup-page__btn-play"
          disabled={selectedBlock === null}
          onClick={handlePlay}
        >
          <Play size={22} />
          {selectedBlock !== null
            ? `JUGAR BLOQUE ${selectedBlock + 1}`
            : 'SELECCIONA UN BLOQUE'}
        </button>

        <Link to={`/learn/${phase.id}`} className="setup-page__btn-learn">
          <BookOpen size={18} />
          ESTUDIAR VOCABULARIO
        </Link>
      </div>
    </div>
  );
};

// ============================================================
// ESTILOS (inline template)
// ============================================================
const setupStyles = `
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap');

/* ======== PAGE ======== */
.setup-page {
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0e27 0%, #1a1d3d 50%, #0f1428 100%);
  font-family: 'Space Mono', monospace;
  color: #fff;
  padding: 30px 20px 60px;
  overflow-y: auto;
}
.setup-page--error {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;
}
.setup-page__btn-home {
  padding: 14px 28px;
  background: linear-gradient(135deg, #00ff87, #00d4ff);
  border: none;
  border-radius: 50px;
  color: #0a0e27;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  cursor: pointer;
  font-size: 14px;
}

/* ======== TOP BAR ======== */
.setup-page__topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: 0 auto 30px;
}
.setup-page__back,
.setup-page__home {
  font-family: 'Space Mono', monospace;
  font-size: 14px;
  color: rgba(255,255,255,0.6);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s;
}
.setup-page__back:hover,
.setup-page__home:hover {
  color: #00ff87;
}

/* ======== HEADER ======== */
.setup-page__header {
  display: flex;
  align-items: center;
  gap: 18px;
  max-width: 900px;
  margin: 0 auto 24px;
}
.setup-page__icon {
  font-size: 52px;
}
.setup-page__phase-label {
  font-family: 'Orbitron', sans-serif;
  font-size: 12px;
  letter-spacing: 3px;
  color: rgba(255,255,255,0.4);
}
.setup-page__title {
  font-family: 'Orbitron', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #00ff87;
  text-shadow: 0 0 30px rgba(0,255,135,0.4);
  margin: 4px 0 0;
}

/* ======== PROGRESS BAR ======== */
.setup-page__progress {
  max-width: 900px;
  margin: 0 auto 32px;
}
.setup-page__progress-bar {
  width: 100%;
  height: 8px;
  background: rgba(255,255,255,0.1);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 8px;
}
.setup-page__progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #00ff87, #00d4ff);
  border-radius: 4px;
  transition: width 0.5s ease;
}
.setup-page__progress-text {
  font-size: 13px;
  color: rgba(255,255,255,0.5);
}

/* ============================================================
   BLOCK SELECTOR
   ============================================================ */
.block-selector {
  max-width: 900px;
  margin: 0 auto 36px;
}
.block-selector__title {
  font-family: 'Orbitron', sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  color: rgba(255,255,255,0.7);
  margin-bottom: 6px;
}
.block-selector__subtitle {
  font-size: 13px;
  color: rgba(255,255,255,0.4);
  margin-bottom: 18px;
}

.block-selector__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 14px;
}

/* ---- Block Card ---- */
.block-card {
  background: rgba(255,255,255,0.04);
  border: 2px solid rgba(255,255,255,0.1);
  border-radius: 14px;
  padding: 14px;
  cursor: pointer;
  transition: all 0.3s;
  text-align: left;
  color: #fff;
  font-family: 'Space Mono', monospace;
}
.block-card--unlocked:hover {
  border-color: rgba(0,255,135,0.5);
  background: rgba(0,255,135,0.06);
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,255,135,0.15);
}
.block-card--locked {
  opacity: 0.35;
  cursor: not-allowed;
}
.block-card--completed {
  border-color: rgba(0,212,255,0.4);
  background: rgba(0,212,255,0.06);
}
.block-card--selected {
  border-color: #00ff87 !important;
  background: rgba(0,255,135,0.12) !important;
  box-shadow: 0 0 20px rgba(0,255,135,0.25);
  transform: translateY(-4px);
}

.block-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.block-card__number {
  font-family: 'Orbitron', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #00ff87;
}
.block-card--locked .block-card__number {
  color: rgba(255,255,255,0.3);
}
.block-card__check {
  font-size: 16px;
}

.block-card__words {
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-bottom: 8px;
}
.block-card__word {
  font-size: 11px;
  color: rgba(255,255,255,0.55);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.block-card--selected .block-card__word {
  color: rgba(255,255,255,0.8);
}

.block-card__score {
  font-size: 12px;
  color: #ffd700;
  font-weight: 700;
}
.block-card__date {
  font-size: 10px;
  color: rgba(255,255,255,0.3);
  margin-top: 4px;
}

/* ============================================================
   SPEED CONTROL
   ============================================================ */
.speed-control {
  max-width: 900px;
  margin: 0 auto 36px;
}
.speed-control__title {
  font-family: 'Orbitron', sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  color: rgba(255,255,255,0.7);
  margin-bottom: 14px;
}

.speed-control__track {
  display: flex;
  gap: 10px;
}

.speed-control__btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 14px 8px;
  background: rgba(255,255,255,0.04);
  border: 2px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  color: rgba(255,255,255,0.5);
  font-family: 'Space Mono', monospace;
  cursor: pointer;
  transition: all 0.25s;
}
.speed-control__btn:hover {
  border-color: rgba(0,212,255,0.4);
  color: #fff;
  background: rgba(0,212,255,0.06);
}
.speed-control__btn--active {
  border-color: #00d4ff;
  background: rgba(0,212,255,0.15);
  color: #fff;
  box-shadow: 0 0 16px rgba(0,212,255,0.25);
}

.speed-control__level {
  font-family: 'Orbitron', sans-serif;
  font-size: 22px;
  font-weight: 700;
}
.speed-control__btn--active .speed-control__level {
  color: #00d4ff;
}
.speed-control__label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.speed-control__hint {
  margin-top: 10px;
  font-size: 13px;
  color: rgba(255,255,255,0.4);
}

/* ============================================================
   ACTIONS
   ============================================================ */
.setup-page__actions {
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.setup-page__btn-play {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 40px;
  background: linear-gradient(135deg, #00ff87, #00d4ff);
  border: none;
  border-radius: 50px;
  color: #0a0e27;
  font-family: 'Orbitron', sans-serif;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s;
  letter-spacing: 1px;
}
.setup-page__btn-play:not(:disabled):hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0,255,135,0.4);
}
.setup-page__btn-play:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.setup-page__btn-learn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: transparent;
  border: 2px solid rgba(255,255,255,0.2);
  border-radius: 50px;
  color: rgba(255,255,255,0.6);
  font-family: 'Orbitron', sans-serif;
  font-size: 13px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s;
  letter-spacing: 1px;
}
.setup-page__btn-learn:hover {
  border-color: rgba(0,255,135,0.4);
  color: #00ff87;
}

/* ======== RESPONSIVE ======== */
@media (max-width: 600px) {
  .setup-page__title {
    font-size: 24px;
  }
  .block-selector__grid {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 10px;
  }
  .speed-control__track {
    gap: 6px;
  }
  .speed-control__btn {
    padding: 10px 4px;
  }
  .speed-control__level {
    font-size: 18px;
  }
}
`;

export default PhaseSetupPage;
