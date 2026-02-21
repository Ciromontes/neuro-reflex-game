/**
 * blockHelpers.ts
 * Utilidades para dividir una fase en bloques de BLOCK_SIZE palabras
 * y para obtener palabras acumuladas para repaso espaciado.
 */
import type { Phase, WordPair } from '../types';
import { BLOCK_SIZE } from '../types';

/** Devuelve los pares de un bloque específico (0-indexed) */
export function getBlockWords(phase: Phase, blockIndex: number): WordPair[] {
  const start = blockIndex * BLOCK_SIZE;
  return phase.wordPairs.slice(start, start + BLOCK_SIZE);
}

/** Devuelve cuántos bloques tiene la fase */
export function getBlockCount(phase: Phase): number {
  return Math.ceil(phase.wordPairs.length / BLOCK_SIZE);
}

/**
 * Devuelve las palabras acumuladas desde el bloque 0 hasta `upToBlock` (inclusive).
 * Útil para modo repaso: jugar con todas las palabras vistas.
 */
export function getAccumulatedWords(phase: Phase, upToBlock: number): WordPair[] {
  const end = (upToBlock + 1) * BLOCK_SIZE;
  return phase.wordPairs.slice(0, end);
}

/**
 * Divide todos los pares de la fase en bloques de BLOCK_SIZE.
 * El último bloque puede tener menos pares.
 */
export function getBlocks(phase: Phase): WordPair[][] {
  const blocks: WordPair[][] = [];
  for (let i = 0; i < phase.wordPairs.length; i += BLOCK_SIZE) {
    blocks.push(phase.wordPairs.slice(i, i + BLOCK_SIZE));
  }
  return blocks;
}

/**
 * Para repaso espaciado: devuelve un array con BLOCK_SIZE palabras
 * donde priorizamos las del bloque actual pero mezclamos algunas de bloques anteriores.
 * Ratio: ~60 % bloque actual + ~40 % revisión de bloques previos.
 */
export function getSpacedReviewWords(phase: Phase, currentBlock: number): WordPair[] {
  const currentWords = getBlockWords(phase, currentBlock);

  // Si es el primer bloque, no hay previos
  if (currentBlock === 0) return currentWords;

  const previousWords = getAccumulatedWords(phase, currentBlock - 1);

  // Mezclar
  const reviewCount = Math.min(Math.ceil(BLOCK_SIZE * 0.4), previousWords.length);
  const shuffledPrevious = [...previousWords].sort(() => Math.random() - 0.5);
  const reviewWords = shuffledPrevious.slice(0, reviewCount);

  // Tomar del bloque actual las restantes
  const currentCount = BLOCK_SIZE - reviewCount;
  const selectedCurrent = currentWords.slice(0, currentCount);

  // Mezclar todo junto
  return [...selectedCurrent, ...reviewWords].sort(() => Math.random() - 0.5);
}
