// ============================================================
// Tipos y helpers para el sistema de frases (fill-in-the-blank)
// ============================================================

export interface Sentence {
  /** Frase easy con _____ */
  text: string;
  /** Respuesta correcta easy (en minúsculas) */
  answer: string;
  /** Traducción al español de la frase easy */
  spanishText: string;
  /** Frase hard con _____ */
  textHard: string;
  /** Respuesta correcta hard (conjugada / forma compleja) */
  answerHard: string;
  /** Traducción al español de la frase hard */
  spanishTextHard: string;
  /** Tipo de frase */
  type: 'affirmation' | 'question' | 'negation';
  /** Tiempo verbal */
  time: 'present' | 'past' | 'future' | 'continuous';
}

export interface WordSentences {
  /** Debe coincidir con wordPair.target de phases.ts (MAYÚSCULAS) */
  wordId: string;
  /** 6 frases: 3 para target + 3 para antonym */
  sentences: Sentence[];
}

// Importar frases de cada fase
import { phase1Sentences } from './phase1-sentences';

/** Mapa: phaseId → WordSentences[] */
const sentencesByPhase: Record<number, WordSentences[]> = {
  1: phase1Sentences,
  // 2: phase2Sentences   ← cuando estén listas
  // 3: phase3Sentences   ← cuando estén listas
};

/**
 * Obtiene las frases de una palabra específica dentro de una fase.
 * @returns Sentence[] o [] si no existe
 */
export function getSentences(phaseId: number, wordId: string): Sentence[] {
  const phaseSentences = sentencesByPhase[phaseId];
  if (!phaseSentences) return [];
  const ws = phaseSentences.find(w => w.wordId === wordId.toUpperCase());
  return ws?.sentences ?? [];
}

/**
 * Comprueba si una fase tiene frases disponibles.
 */
export function hasSentences(phaseId: number): boolean {
  return !!sentencesByPhase[phaseId] && sentencesByPhase[phaseId].length > 0;
}

/**
 * Obtiene todas las WordSentences de una fase.
 */
export function getPhaseSentences(phaseId: number): WordSentences[] {
  return sentencesByPhase[phaseId] ?? [];
}
