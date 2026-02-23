import React, { useState, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getPhaseById } from '../../data/phases';
import { getPhaseProgress, saveSpeedLevel } from '../../utils/progressService';
import { getBlockCount, getBlockWords } from '../../utils/blockHelpers';
import BlockSelector from '../../components/phase-selection/BlockSelector';
import SpeedControl from '../../components/phase-selection/SpeedControl';
import type { SpeedLevel } from '../../types';
import { getWordsPerBlock, saveWordsPerBlock, MIN_BLOCK_SIZE, MAX_BLOCK_SIZE } from '../../types';
import { ArrowLeft, BookOpen, Target, Gamepad2, Play, ChevronUp, ChevronDown, PenTool } from 'lucide-react';
import { hasSentences } from '../../data/sentences';

type TabMode = 'review' | 'training' | 'play' | 'completar';

const PhaseSetupPage: React.FC = () => {
  const { phaseId } = useParams<{ phaseId: string }>();
  const navigate = useNavigate();

  const phase = getPhaseById(parseInt(phaseId || '1'));

  // ── Audio: reproduce target + antonym en inglés ──
  const speakWordPair = (target: string, antonym: string) => {
    if (!window.speechSynthesis) return;
    if (window.speechSynthesis.paused) window.speechSynthesis.resume();
    window.speechSynthesis.cancel();
    const voices = window.speechSynthesis.getVoices();
    const eng = voices.find(v => v.lang === 'en-US' || v.lang === 'en-GB' || v.lang.startsWith('en-'));
    const speak = (text: string, onEnd?: () => void) => {
      const utt = new SpeechSynthesisUtterance(text);
      utt.lang = 'en-US'; utt.rate = 0.9;
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
          utt.lang = 'en-US'; utt.rate = 0.9;
          if (eng2) utt.voice = eng2;
          if (onEnd) utt.onend = onEnd;
          window.speechSynthesis.speak(utt);
        };
        speak2(target, () => setTimeout(() => speak2(antonym), 400));
      };
    }
  };

  const totalPairs = phase?.wordPairs.length ?? 0;

  const [activeTab, setActiveTab] = useState<TabMode>('review');
  const [selectedBlock, setSelectedBlock] = useState<number | null>(null);
  const [wpb, setWpb] = useState<number>(getWordsPerBlock());
  const [fillDifficulty, setFillDifficulty] = useState<'easy' | 'hard'>('easy');

  const progress = useMemo(
    () => (phase ? getPhaseProgress(phase.id, totalPairs) : null),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [phase, totalPairs, wpb]
  );
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

  /** Cambia el tamaño de bloque (3-5) y recalcula bloques + progreso */
  const handleChangeWpb = (delta: number) => {
    const next = Math.max(MIN_BLOCK_SIZE, Math.min(MAX_BLOCK_SIZE, wpb + delta));
    if (next === wpb) return;
    saveWordsPerBlock(next);
    setWpb(next);
    setSelectedBlock(null); // los índices cambian, deseleccionar
  };

  // Doble tap en un bloque ya seleccionado → entra directo al juego
  const handleSelectBlock = (index: number) => {
    // Speak the first word pair of the tapped block (audio feedback)
    const bWords = getBlockWords(phase, index);
    if (bWords.length > 0) {
      speakWordPair(bWords[0].target, bWords[0].antonym);
    }
    if (selectedBlock === index) {
      const modeParam = activeTab === 'training' ? 'training' : activeTab === 'completar' ? 'completar' : 'play';
      const diffParam = activeTab === 'completar' ? `&difficulty=${fillDifficulty}` : '';
      navigate(`/play/${phase.id}/block/${index}?speed=${speed}&mode=${modeParam}${diffParam}`);
    } else {
      setSelectedBlock(index);
    }
  };

  const handlePlay = () => {
    if (selectedBlock === null) return;
    const modeParam = activeTab === 'training' ? 'training' : activeTab === 'completar' ? 'completar' : 'play';
    const diffParam = activeTab === 'completar' ? `&difficulty=${fillDifficulty}` : '';
    navigate(`/play/${phase.id}/block/${selectedBlock}?speed=${speed}&mode=${modeParam}${diffParam}`);
  };

  const phaseHasSentences = hasSentences(phase.id);

  const completedCount = progress.blocks.filter((b) => b.completed).length;
  const totalBlocks = getBlockCount(phase);

  const tabs: { key: TabMode; icon: React.ReactNode; label: string; desc: string; disabled?: boolean }[] = [
    { key: 'review', icon: <BookOpen size={20} />, label: 'REPASAR', desc: 'Revisa las palabras' },
    { key: 'training', icon: <Target size={20} />, label: 'ENTRENAMIENTO', desc: 'Con pistas en verde' },
    { key: 'play', icon: <Gamepad2 size={20} />, label: 'JUGAR', desc: 'Sin pistas' },
    { key: 'completar', icon: <PenTool size={20} />, label: 'COMPLETAR', desc: 'Rellena el hueco', disabled: !phaseHasSentences },
  ];

  return (
    <div className="setup-page">
      <style>{setupStyles}</style>

      {/* Top bar */}
      <div className="setup-page__topbar">
        <Link to="/" className="setup-page__back">
          <ArrowLeft size={20} /> Inicio
        </Link>
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

      {/* ======== 3 TABS ======== */}
      <div className="setup-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`setup-tabs__btn ${activeTab === tab.key ? 'setup-tabs__btn--active' : ''} setup-tabs__btn--${tab.key} ${tab.disabled ? 'setup-tabs__btn--disabled' : ''}`}
            onClick={() => {
              if (tab.disabled) return;
              setActiveTab(tab.key);
              setSelectedBlock(null);
            }}
            disabled={tab.disabled}
          >
            <span className="setup-tabs__icon">{tab.icon}</span>
            <span className="setup-tabs__label">{tab.label}</span>
            <span className="setup-tabs__desc">{tab.desc}</span>
          </button>
        ))}
      </div>

      {/* ======== TAB CONTENT ======== */}
      <div className="setup-tab-content">
        {/* --- REPASAR --- */}
        {activeTab === 'review' && (
          <div className="review-grid">
            <p className="review-grid__hint">
              📖 Repasa todas las palabras de esta fase antes de entrenar
            </p>
            <div className="review-grid__cards">
              {phase.wordPairs.map((wp, i) => (
                <div
                  key={i}
                  className="review-card"
                  onClick={() => speakWordPair(wp.target, wp.antonym)}
                  style={{ cursor: 'pointer', userSelect: 'none' }}
                  title="Toca para escuchar"
                >
                  <div style={{ fontSize: '12px', textAlign: 'right', opacity: 0.5 }}>🔊</div>
                  <div className="review-card__target">{wp.target}</div>
                  {wp.targetIpa && (
                    <div className="review-card__ipa">{wp.targetIpa}</div>
                  )}
                  <div className="review-card__divider">↔</div>
                  <div className="review-card__antonym">{wp.antonym}</div>
                  {wp.antonymIpa && (
                    <div className="review-card__ipa">{wp.antonymIpa}</div>
                  )}
                  <div className="review-card__spanish">{wp.spanish}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- COMPLETAR (fill-in-the-blank) --- */}
        {activeTab === 'completar' && (
          <>  
            <p className="setup-mode-hint setup-mode-hint--completar">
              ✏️ Completa la frase con la palabra correcta — usa el teclado
            </p>

            {/* Difficulty toggle */}
            <div className="fill-diff-toggle">
              <button
                className={`fill-diff-toggle__btn ${fillDifficulty === 'easy' ? 'fill-diff-toggle__btn--active' : ''}`}
                onClick={() => setFillDifficulty('easy')}
              >
                🟢 FÁCIL
              </button>
              <button
                className={`fill-diff-toggle__btn ${fillDifficulty === 'hard' ? 'fill-diff-toggle__btn--active fill-diff-toggle__btn--hard' : ''}`}
                onClick={() => setFillDifficulty('hard')}
              >
                🔴 DIFÍCIL
              </button>
            </div>

            {/* Chunk size control */}
            <div className="chunk-ctrl">
              <span className="chunk-ctrl__label">🧠 Palabras por bloque</span>
              <div className="chunk-ctrl__stepper">
                <button
                  className="chunk-ctrl__btn"
                  onClick={() => handleChangeWpb(-1)}
                  disabled={wpb <= MIN_BLOCK_SIZE}
                  aria-label="Reducir palabras"
                >
                  <ChevronDown size={20} />
                </button>
                <span className="chunk-ctrl__value">{wpb}</span>
                <button
                  className="chunk-ctrl__btn"
                  onClick={() => handleChangeWpb(1)}
                  disabled={wpb >= MAX_BLOCK_SIZE}
                  aria-label="Aumentar palabras"
                >
                  <ChevronUp size={20} />
                </button>
              </div>
            </div>

            {/* Block Selector */}
            <BlockSelector
              phase={phase}
              blocks={progress.blocks}
              selectedBlock={selectedBlock}
              onSelectBlock={handleSelectBlock}
            />

            {/* Action button */}
            <div className="setup-page__actions">
              {selectedBlock === null && (
                <p className="setup-page__guide-hint">
                  👆 Selecciona un bloque para completar frases
                </p>
              )}
              {selectedBlock !== null && (
                <p className="setup-page__guide-hint setup-page__guide-hint--selected">
                  💡 Toca el bloque {selectedBlock + 1} otra vez para entrar directo
                </p>
              )}
              <button
                className="setup-page__btn-play setup-page__btn-play--completar"
                disabled={selectedBlock === null}
                onClick={handlePlay}
              >
                <Play size={22} />
                {selectedBlock !== null
                  ? `COMPLETAR BLOQUE ${selectedBlock + 1}`
                  : `SELECCIONA UN BLOQUE`}
              </button>
            </div>
          </>
        )}

        {/* --- ENTRENAMIENTO / JUGAR --- */}
        {(activeTab === 'training' || activeTab === 'play') && (
          <>
            {activeTab === 'training' && (
              <p className="setup-mode-hint setup-mode-hint--training">
                🎯 La respuesta correcta se muestra en <strong>verde</strong> para ayudarte a aprender
              </p>
            )}
            {activeTab === 'play' && (
              <p className="setup-mode-hint setup-mode-hint--play">
                🎮 Pon a prueba tu memoria — sin pistas, sin ayuda
              </p>
            )}

            {/* Chunk size control */}
            <div className="chunk-ctrl">
              <span className="chunk-ctrl__label">🧠 Palabras por bloque</span>
              <div className="chunk-ctrl__stepper">
                <button
                  className="chunk-ctrl__btn"
                  onClick={() => handleChangeWpb(-1)}
                  disabled={wpb <= MIN_BLOCK_SIZE}
                  aria-label="Reducir palabras"
                >
                  <ChevronDown size={20} />
                </button>
                <span className="chunk-ctrl__value">{wpb}</span>
                <button
                  className="chunk-ctrl__btn"
                  onClick={() => handleChangeWpb(1)}
                  disabled={wpb >= MAX_BLOCK_SIZE}
                  aria-label="Aumentar palabras"
                >
                  <ChevronUp size={20} />
                </button>
              </div>
            </div>

            {/* Block Selector */}
            <BlockSelector
              phase={phase}
              blocks={progress.blocks}
              selectedBlock={selectedBlock}
              onSelectBlock={handleSelectBlock}
            />

            {/* Speed Control */}
            <SpeedControl value={speed} onChange={handleSpeedChange} />

            {/* Action button */}
            <div className="setup-page__actions">
              {selectedBlock === null && (
                <p className="setup-page__guide-hint">
                  👆 Selecciona un bloque y luego presiona el botón
                </p>
              )}
              {selectedBlock !== null && (
                <p className="setup-page__guide-hint setup-page__guide-hint--selected">
                  💡 Toca el bloque {selectedBlock + 1} otra vez para entrar directo
                </p>
              )}
              <button
                className={`setup-page__btn-play ${activeTab === 'training' ? 'setup-page__btn-play--training' : 'setup-page__btn-play--play'}`}
                disabled={selectedBlock === null}
                onClick={handlePlay}
              >
                <Play size={22} />
                {selectedBlock !== null
                  ? `${activeTab === 'training' ? 'ENTRENAR' : 'JUGAR'} BLOQUE ${selectedBlock + 1}`
                  : `SELECCIONA UN BLOQUE`}
              </button>
            </div>
          </>
        )}
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
  padding: 30px 20px;
  padding-bottom: max(100px, env(safe-area-inset-bottom, 100px));
  overflow-x: hidden;
  /* overflow-y scroll is handled by the html element */
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
   TABS — 3 mode buttons
   ============================================================ */
.setup-tabs {
  display: flex;
  gap: 12px;
  max-width: 900px;
  margin: 0 auto 28px;
}
.setup-tabs__btn {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  padding: 16px 10px;
  background: rgba(255,255,255,0.04);
  border: 2px solid rgba(255,255,255,0.1);
  border-radius: 16px;
  color: rgba(255,255,255,0.5);
  font-family: 'Space Mono', monospace;
  cursor: pointer;
  transition: all 0.3s;
}
.setup-tabs__btn:hover {
  border-color: rgba(255,255,255,0.25);
  background: rgba(255,255,255,0.06);
  color: rgba(255,255,255,0.8);
}

/* Active states per tab type */
.setup-tabs__btn--active.setup-tabs__btn--review {
  border-color: #00d4ff;
  background: rgba(0,212,255,0.12);
  color: #fff;
  box-shadow: 0 0 20px rgba(0,212,255,0.2);
}
.setup-tabs__btn--active.setup-tabs__btn--training {
  border-color: #00ff87;
  background: rgba(0,255,135,0.12);
  color: #fff;
  box-shadow: 0 0 20px rgba(0,255,135,0.2);
}
.setup-tabs__btn--active.setup-tabs__btn--play {
  border-color: #ff6b35;
  background: rgba(255,107,53,0.12);
  color: #fff;
  box-shadow: 0 0 20px rgba(255,107,53,0.2);
}
.setup-tabs__btn--active.setup-tabs__btn--completar {
  border-color: #bf5af2;
  background: rgba(191,90,242,0.12);
  color: #fff;
  box-shadow: 0 0 20px rgba(191,90,242,0.2);
}
.setup-tabs__btn--disabled {
  opacity: 0.3;
  cursor: not-allowed !important;
  pointer-events: none;
}

.setup-tabs__icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.setup-tabs__label {
  font-family: 'Orbitron', sans-serif;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
}
.setup-tabs__desc {
  font-size: 10px;
  opacity: 0.6;
}

/* ============================================================
   TAB CONTENT
   ============================================================ */
.setup-tab-content {
  max-width: 900px;
  margin: 0 auto;
}

/* Mode hint banner */
.setup-mode-hint {
  text-align: center;
  font-size: 14px;
  padding: 12px 18px;
  border-radius: 12px;
  margin-bottom: 24px;
  line-height: 1.5;
}
.setup-mode-hint--training {
  background: rgba(0,255,135,0.08);
  border: 1px solid rgba(0,255,135,0.2);
  color: rgba(255,255,255,0.8);
}
.setup-mode-hint--training strong {
  color: #00ff87;
}
.setup-mode-hint--play {
  background: rgba(255,107,53,0.08);
  border: 1px solid rgba(255,107,53,0.2);
  color: rgba(255,255,255,0.8);
}
.setup-mode-hint--completar {
  background: rgba(191,90,242,0.08);
  border: 1px solid rgba(191,90,242,0.2);
  color: rgba(255,255,255,0.8);
}

/* Difficulty toggle for COMPLETAR tab */
.fill-diff-toggle {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
}
.fill-diff-toggle__btn {
  flex: 1;
  max-width: 140px;
  padding: 10px 16px;
  border: 2px solid rgba(255,255,255,0.15);
  border-radius: 50px;
  background: rgba(255,255,255,0.05);
  color: rgba(255,255,255,0.5);
  font-family: 'Orbitron', sans-serif;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.2s;
}
.fill-diff-toggle__btn--active {
  background: rgba(0,255,135,0.15);
  border-color: #00ff87;
  color: #00ff87;
}
.fill-diff-toggle__btn--hard {
  background: rgba(255,61,0,0.15);
  border-color: #ff3d00;
  color: #ff3d00;
}

/* ============================================================
   CHUNK SIZE CONTROL  (▲/▼ words per block)
   ============================================================ */
.chunk-ctrl {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-bottom: 22px;
  padding: 10px 16px;
  border-radius: 14px;
  background: rgba(0,255,135,0.06);
  border: 1px solid rgba(0,255,135,0.15);
}
.chunk-ctrl__label {
  font-size: 13px;
  color: rgba(255,255,255,0.75);
  white-space: nowrap;
}
.chunk-ctrl__stepper {
  display: flex;
  align-items: center;
  gap: 6px;
}
.chunk-ctrl__btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  border: 1px solid rgba(0,255,135,0.3);
  background: rgba(0,255,135,0.08);
  color: #00ff87;
  cursor: pointer;
  transition: all 0.15s ease;
}
.chunk-ctrl__btn:active:not(:disabled) {
  transform: scale(0.92);
  background: rgba(0,255,135,0.18);
}
.chunk-ctrl__btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}
.chunk-ctrl__value {
  font-family: 'Orbitron', monospace;
  font-size: 22px;
  font-weight: 700;
  color: #00ff87;
  min-width: 30px;
  text-align: center;
}

/* ============================================================
   REVIEW GRID (Repasar tab)
   ============================================================ */
.review-grid__hint {
  text-align: center;
  font-size: 14px;
  color: rgba(255,255,255,0.6);
  margin-bottom: 20px;
}
.review-grid__cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 12px;
}
.review-card {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 12px;
  padding: 14px 10px;
  text-align: center;
  transition: all 0.3s;
}
.review-card:hover {
  border-color: rgba(0,212,255,0.4);
  background: rgba(0,212,255,0.06);
  transform: translateY(-2px);
}
.review-card__target {
  font-family: 'Orbitron', sans-serif;
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 2px;
}
.review-card__ipa {
  font-size: 11px;
  color: rgba(255,255,255,0.4);
  font-family: monospace;
  margin-bottom: 4px;
}
.review-card__divider {
  font-size: 12px;
  color: rgba(0,255,135,0.5);
  margin: 4px 0;
}
.review-card__antonym {
  font-size: 14px;
  font-weight: 700;
  color: #00ff87;
  margin-bottom: 2px;
}
.review-card__spanish {
  font-size: 11px;
  color: rgba(255,255,255,0.45);
  margin-top: 6px;
  font-style: italic;
}

/* ============================================================
   BLOCK SELECTOR (reused)
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
   SPEED CONTROL (reused)
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
.setup-page__btn-play--training {
  background: linear-gradient(135deg, #00ff87, #00d4ff);
}
.setup-page__btn-play--play {
  background: linear-gradient(135deg, #ff6b35, #ff9a56);
}
.setup-page__btn-play--completar {
  background: linear-gradient(135deg, #bf5af2, #da8fff);
}
.setup-page__btn-play:not(:disabled):hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0,255,135,0.4);
}
.setup-page__btn-play:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  background: rgba(255,255,255,0.2);
  color: rgba(255,255,255,0.4);
}

/* Guide hint text */
.setup-page__guide-hint {
  font-size: 13px;
  color: rgba(255,255,255,0.5);
  text-align: center;
  margin-bottom: 4px;
  letter-spacing: 0.3px;
}
.setup-page__guide-hint--selected {
  color: #00ff87;
  opacity: 0.8;
}

/* ======== RESPONSIVE ======== */
@media (max-width: 600px) {
  .setup-page__title {
    font-size: 24px;
  }
  .setup-tabs {
    gap: 8px;
    flex-wrap: wrap;
  }
  .setup-tabs__btn {
    padding: 12px 6px;
    min-width: calc(50% - 6px);
  }
  .setup-tabs__label {
    font-size: 10px;
  }
  .review-grid__cards {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 8px;
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
