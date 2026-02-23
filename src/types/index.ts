// ============================================================
// TIPOS PRINCIPALES
// ============================================================

export interface WordPair {
  target: string;
  antonym: string;
  spanish: string;
  category?: string;
  example?: string;
  type?: 'verb' | 'noun' | 'adjective' | 'phrasal-verb' | 'idiom' | 'expression';
  /** Transcripción IPA de la palabra target */
  targetIpa?: string;
  /** Transcripción IPA del antónimo */
  antonymIpa?: string;
}

export type GameMechanic = 'antonym' | 'synonym' | 'association' | 'completion' | 'precision';

export interface Phase {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  mechanic: GameMechanic;
  wordPairs: WordPair[];
  distractorWords?: string[];
  difficultyLevels: {
    training: { speed: number; lives: number };
    easy: { speed: number; lives: number };
    medium: { speed: number; lives: number };
    hard: { speed: number; lives: number };
  };
  difficultyConfig?: {
    easy: { speed: number; name: string; color: string; livesForNext: number };
    medium: { speed: number; name: string; color: string; livesForNext: number };
    hard: { speed: number; name: string; color: string; livesForNext: number };
  };
}

// ============================================================
// SISTEMA DE BLOQUES
// ============================================================

/** Tamaño por defecto de cada bloque de palabras (basado en chunking cognitivo) */
export const DEFAULT_BLOCK_SIZE = 4;
export const MIN_BLOCK_SIZE = 3;
export const MAX_BLOCK_SIZE = 5;

/** @deprecated — usa getWordsPerBlock() */
export const BLOCK_SIZE = DEFAULT_BLOCK_SIZE;

const WPB_KEY = 'neuro-reflex-wordsPerBlock';

/** Lee el tamaño de bloque elegido por el usuario (3-5, default 4) */
export function getWordsPerBlock(): number {
  try {
    const v = parseInt(localStorage.getItem(WPB_KEY) || '');
    if (v >= MIN_BLOCK_SIZE && v <= MAX_BLOCK_SIZE) return v;
  } catch { /* ignored */ }
  return DEFAULT_BLOCK_SIZE;
}

/** Guarda el tamaño de bloque elegido (3-5) */
export function saveWordsPerBlock(size: number): void {
  const clamped = Math.max(MIN_BLOCK_SIZE, Math.min(MAX_BLOCK_SIZE, size));
  localStorage.setItem(WPB_KEY, String(clamped));
}

/** Niveles de velocidad disponibles para el usuario */
export const SPEED_LEVELS = [
  { level: 1, ms: 9000, label: 'Muy lento' },
  { level: 2, ms: 7000, label: 'Lento' },
  { level: 3, ms: 5000, label: 'Normal' },
  { level: 4, ms: 3500, label: 'Rápido' },
  { level: 5, ms: 2000, label: 'Ultra' },
] as const;

export type SpeedLevel = 1 | 2 | 3 | 4 | 5;

/** Estado de progreso de un bloque individual */
export interface BlockProgress {
  /** Índice del bloque (0-based) */
  blockIndex: number;
  /** ¿Se completó el bloque exitosamente? */
  completed: boolean;
  /** Mejor puntuación obtenida en este bloque */
  bestScore: number;
  /** Fecha de última sesión (ISO string) */
  lastPlayed?: string;
}

/** Progreso completo de una fase */
export interface PhaseProgress {
  phaseId: number;
  /** Array con el progreso de cada bloque */
  blocks: BlockProgress[];
  /** Velocidad preferida del usuario (1-5) */
  speedLevel: SpeedLevel;
  /** ¿Se completaron todos los bloques de la fase? */
  phaseCompleted: boolean;
  /** Puntuación total acumulada en la fase */
  totalScore: number;
}

// ============================================================
// ESTADO DEL JUEGO (legado, se irá adaptando en pasos futuros)
// ============================================================

export interface GameState {
  phaseId: number;
  mode: 'training' | 'play' | 'easy' | 'medium' | 'hard';
  score: number;
  lives: number;
  combo: number;
  currentWordIndex: number;
  studiedWords: string[];
  missedWords: WordPair[];
  isPaused: boolean;
  difficulty?: 'easy' | 'medium' | 'hard';
  correctCount?: number;
}

export interface FallingWord {
  id: number;
  text: string;
  isCorrect: boolean;
  left: number;
}

export interface GameConfig {
  showCorrectAnswer: boolean;
  soundEnabled: boolean;
  voiceLanguage: 'en-US' | 'es-ES';
}

export interface Feedback {
  type: 'correct' | 'wrong' | 'missed' | 'levelup';
  text: string;
  points: string;
  /** Optional IPA transcription of the antonym */
  ipa?: string;
  /** Spanish meaning shown in feedback (e.g. "Encender – Apagar") */
  spanish?: string;
  /** Target word shown in correct feedback pair view */
  targetWord?: string;
  /** IPA of the target word */
  targetIpa?: string;
}

export interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  color: string;
  delay: number;
}


