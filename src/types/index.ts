export interface WordPair {
  target: string;
  antonym: string;
  spanish: string;
  category?: string;
  example?: string;
  type?: 'verb' | 'noun' | 'adjective' | 'phrasal-verb' | 'idiom' | 'expression';
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
}

export interface GameState {
  phaseId: number;
  mode: 'training' | 'easy' | 'medium' | 'hard';
  score: number;
  lives: number;
  combo: number;
  currentWordIndex: number;
  studiedWords: string[];
  missedWords: WordPair[];
  isPaused: boolean;
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
}
