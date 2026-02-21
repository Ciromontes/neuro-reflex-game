/**
 * progressService.ts
 * Servicio de persistencia en localStorage para progreso de fases y bloques.
 */
import type { PhaseProgress, BlockProgress, SpeedLevel } from '../types';
import { BLOCK_SIZE } from '../types';

const STORAGE_KEY = 'neuro-reflex-progress';

// ============================================================
// LECTURA / ESCRITURA EN LOCALSTORAGE
// ============================================================

/** Obtiene todo el progreso guardado */
export function getAllProgress(): Record<number, PhaseProgress> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

/** Guarda todo el progreso  */
function saveAllProgress(data: Record<number, PhaseProgress>): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

// ============================================================
// INICIALIZACIÓN
// ============================================================

/** Calcula cuántos bloques tiene una fase dado el total de pares */
export function getBlockCount(totalPairs: number): number {
  return Math.ceil(totalPairs / BLOCK_SIZE);
}

/** Crea progreso inicial para una fase si no existe */
export function getPhaseProgress(phaseId: number, totalPairs: number): PhaseProgress {
  const all = getAllProgress();

  if (all[phaseId]) {
    // Si ya existe, asegurarse de que tenga la cantidad correcta de bloques
    const existing = all[phaseId];
    const expectedBlocks = getBlockCount(totalPairs);
    if (existing.blocks.length < expectedBlocks) {
      for (let i = existing.blocks.length; i < expectedBlocks; i++) {
        existing.blocks.push({ blockIndex: i, completed: false, bestScore: 0 });
      }
      all[phaseId] = existing;
      saveAllProgress(all);
    }
    return existing;
  }

  // Crear progreso nuevo
  const blockCount = getBlockCount(totalPairs);
  const blocks: BlockProgress[] = Array.from({ length: blockCount }, (_, i) => ({
    blockIndex: i,
    completed: false,
    bestScore: 0,
  }));

  const progress: PhaseProgress = {
    phaseId,
    blocks,
    speedLevel: 3 as SpeedLevel, // Normal por defecto
    phaseCompleted: false,
    totalScore: 0,
  };

  all[phaseId] = progress;
  saveAllProgress(all);
  return progress;
}

// ============================================================
// ACTUALIZACIÓN
// ============================================================

/** Marca un bloque como completado y actualiza puntuación */
export function completeBlock(
  phaseId: number,
  blockIndex: number,
  score: number,
  totalPairs: number
): PhaseProgress {
  const all = getAllProgress();
  const progress = all[phaseId] ?? getPhaseProgress(phaseId, totalPairs);

  if (blockIndex >= 0 && blockIndex < progress.blocks.length) {
    progress.blocks[blockIndex].completed = true;
    progress.blocks[blockIndex].lastPlayed = new Date().toISOString();
    if (score > progress.blocks[blockIndex].bestScore) {
      progress.blocks[blockIndex].bestScore = score;
    }
  }

  // Recalcular totales
  progress.totalScore = progress.blocks.reduce((sum, b) => sum + b.bestScore, 0);
  progress.phaseCompleted = progress.blocks.every(b => b.completed);

  all[phaseId] = progress;
  saveAllProgress(all);
  return progress;
}

/** Actualiza la velocidad preferida para una fase */
export function saveSpeedLevel(phaseId: number, level: SpeedLevel, totalPairs: number): void {
  const all = getAllProgress();
  const progress = all[phaseId] ?? getPhaseProgress(phaseId, totalPairs);
  progress.speedLevel = level;
  all[phaseId] = progress;
  saveAllProgress(all);
}

/** Obtiene la velocidad guardada o 3 (Normal) por defecto */
export function getSpeedLevel(phaseId: number): SpeedLevel {
  const all = getAllProgress();
  return all[phaseId]?.speedLevel ?? 3;
}

// ============================================================
// CONSULTAS
// ============================================================

/** Devuelve true si un bloque está desbloqueado (el primero siempre, o si el anterior está completado) */
export function isBlockUnlocked(phaseId: number, blockIndex: number, totalPairs: number): boolean {
  if (blockIndex === 0) return true;
  const progress = getPhaseProgress(phaseId, totalPairs);
  return progress.blocks[blockIndex - 1]?.completed ?? false;
}

/** Devuelve los índices de bloques completados */
export function getCompletedBlockIndices(phaseId: number, totalPairs: number): number[] {
  const progress = getPhaseProgress(phaseId, totalPairs);
  return progress.blocks.filter(b => b.completed).map(b => b.blockIndex);
}

/** Resetea todo el progreso (para debug/testing) */
export function resetAllProgress(): void {
  localStorage.removeItem(STORAGE_KEY);
}
