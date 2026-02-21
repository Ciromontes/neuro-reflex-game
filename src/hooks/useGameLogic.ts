import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import type { Phase, WordPair, FallingWord, Feedback, Particle, ConfettiPiece } from '../types';

interface UseGameLogicOptions {
  /** Subset of words to play (e.g. a single block). Falls back to phase.wordPairs */
  blockWords?: WordPair[];
  /** Fixed fall speed in ms. When set, overrides difficultyConfig speeds */
  speedMs?: number;
  /** Called when the player wins (victory state) with the final score */
  onBlockComplete?: (score: number) => void;
}

export const useGameLogic = (
  phase: Phase,
  mode: 'training' | 'play' | 'easy' | 'medium' | 'hard',
  options: UseGameLogicOptions = {}
) => {
  const { blockWords, speedMs: fixedSpeedMs, onBlockComplete } = options;

  // The actual word list used for the game
  const activeWords = useMemo(
    () => (blockWords && blockWords.length > 0 ? blockWords : phase.wordPairs),
    [blockWords, phase.wordPairs]
  );
  // Estados del juego
  const [gameState, setGameState] = useState<'learning' | 'training' | 'easy' | 'medium' | 'hard' | 'paused' | 'gameover' | 'victory'>('learning');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(phase.difficultyLevels[mode].lives);
  const [combo, setCombo] = useState(0);
  const [currentWord, setCurrentWord] = useState<WordPair | null>(null);
  const [fallingWords, setFallingWords] = useState<FallingWord[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([]);
  const [studiedWords, setStudiedWords] = useState<Set<string>>(new Set());
  const [missedWords, setMissedWords] = useState<WordPair[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [isPaused, setIsPaused] = useState(false);
  const [shakeScreen, setShakeScreen] = useState(false);

  // Referencias
  const wordIdCounter = useRef(0);
  const fallTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wordQueueRef = useRef<number[]>([]);
  const availableWordsRef = useRef<WordPair[]>([]);
  const currentCycleRef = useRef<WordPair[]>([]);

  // Refs para romper dependencias circulares entre callbacks
  const nextWordRef = useRef<() => void>(() => {});
  const handleMissedWordRef = useRef<() => void>(() => {});
  const onBlockCompleteRef = useRef(onBlockComplete);

  // Keep onBlockComplete ref in sync
  useEffect(() => { onBlockCompleteRef.current = onBlockComplete; }, [onBlockComplete]);

  // Refs para estado actual (evitar stale closures)
  const gameStateRef = useRef(gameState);
  const isPausedRef = useRef(isPaused);
  const currentWordRef = useRef(currentWord);
  const comboRef = useRef(combo);
  const correctCountRef = useRef(correctCount);
  const livesRef = useRef(lives);
  const difficultyRef = useRef(difficulty);
  const missedWordsRef = useRef(missedWords);
  const scoreRef = useRef(score);

  // Mantener refs sincronizadas con el estado
  useEffect(() => { gameStateRef.current = gameState; }, [gameState]);
  useEffect(() => { isPausedRef.current = isPaused; }, [isPaused]);
  useEffect(() => { currentWordRef.current = currentWord; }, [currentWord]);
  useEffect(() => { comboRef.current = combo; }, [combo]);
  useEffect(() => { correctCountRef.current = correctCount; }, [correctCount]);
  useEffect(() => { livesRef.current = lives; }, [lives]);
  useEffect(() => { difficultyRef.current = difficulty; }, [difficulty]);
  useEffect(() => { scoreRef.current = score; }, [score]);
  useEffect(() => { missedWordsRef.current = missedWords; }, [missedWords]);

  // Configuración de dificultad memoizada
  const difficultyConfig = useMemo(() => phase.difficultyConfig || {
    easy: { speed: 8000, name: "FÁCIL", color: "#00ff87", livesForNext: 10 },
    medium: { speed: 5500, name: "MEDIO", color: "#00d4ff", livesForNext: 15 },
    hard: { speed: 3500, name: "DIFÍCIL", color: "#ff00ff", livesForNext: 20 }
  }, [phase.difficultyConfig]);

  // Inicializar ciclo de palabras sin repetición
  const initializeWordCycle = useCallback(() => {
    const shuffled = [...activeWords].sort(() => Math.random() - 0.5);
    currentCycleRef.current = shuffled;
    availableWordsRef.current = [...shuffled];
  }, [activeWords]);

  // Generar palabras que caen (CON DISTRACTORES ESPECÍFICOS DE CADA FASE)
  const generateFallingWords = useCallback((targetWord: WordPair): FallingWord[] => {
    const words: FallingWord[] = [];
    const numWords = 4;
    const positions = [28, 42, 56, 70];
    const shuffledPositions = [...positions].sort(() => Math.random() - 0.5);

    // Palabra correcta
    words.push({
      id: wordIdCounter.current++,
      text: targetWord.antonym,
      isCorrect: true,
      left: shuffledPositions[0]
    });

    // Obtener otros antónimos (excluyendo el actual)
    const otherAntonyms = activeWords
      .filter(w => w.antonym !== targetWord.antonym)
      .map(w => w.antonym);
    
    // Usar distractores específicos de la fase
    const allDistractors = [...otherAntonyms, ...(phase.distractorWords || [])];
    const uniqueDistractors = [...new Set(allDistractors)]
      .filter(word => word !== targetWord.antonym);
    
    const shuffled = uniqueDistractors
      .sort(() => Math.random() - 0.5)
      .slice(0, numWords - 1);

    shuffled.forEach((distractor, index) => {
      words.push({
        id: wordIdCounter.current++,
        text: distractor,
        isCorrect: false,
        left: shuffledPositions[index + 1]
      });
    });

    return words;
  }, [activeWords, phase.distractorWords]);

  // Sintetizar voz
  const speakWord = useCallback((word: string, rate = 1) => {
    if (!soundEnabled || !window.speechSynthesis) return;
    
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = rate;
    
    const setVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      const englishVoice = voices.find(voice => 
        voice.lang === 'en-US' || 
        voice.lang === 'en-GB' || 
        voice.lang.startsWith('en-')
      );
      if (englishVoice) utterance.voice = englishVoice;
      
      setTimeout(() => {
        window.speechSynthesis.speak(utterance);
      }, 10);
    };
    
    if (window.speechSynthesis.getVoices().length > 0) {
      setVoice();
    } else {
      window.speechSynthesis.onvoiceschanged = setVoice;
    }
  }, [soundEnabled]);

  // Crear partículas
  const createParticles = useCallback((x: number, y: number) => {
    const newParticles: Particle[] = [];
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: Math.random(),
        x,
        y,
        vx: (Math.random() - 0.5) * 15,
        vy: (Math.random() - 0.5) * 15
      });
    }
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 1000);
  }, []);

  // Crear confetti
  const createConfetti = useCallback(() => {
    const newConfetti: ConfettiPiece[] = [];
    for (let i = 0; i < 100; i++) {
      newConfetti.push({
        id: Math.random(),
        x: Math.random() * 100,
        y: -10,
        color: ['#00ff87', '#00d4ff', '#ff00ff', '#ffd700', '#ff3d00'][Math.floor(Math.random() * 5)],
        delay: Math.random() * 0.5
      });
    }
    setConfetti(newConfetti);
    setTimeout(() => setConfetti([]), 5000);
  }, []);

  // === SIGUIENTE PALABRA (usa refs para evitar dependencias circulares) ===
  const nextWord = useCallback((): void => {
    const gs = gameStateRef.current;
    const mw = missedWordsRef.current;
    let nextWordData: WordPair;
    
    // Sistema de repetición espaciada
    if (gs !== 'training' && mw.length > 0 && wordQueueRef.current.length === 0) {
      nextWordData = mw[0];
      setMissedWords(prev => prev.slice(1));
      wordQueueRef.current = [1, 2, 3, 4];
    } else {
      if (availableWordsRef.current.length === 0) {
        initializeWordCycle();
      }
      nextWordData = availableWordsRef.current.shift()!;
      if (wordQueueRef.current.length > 0) {
        wordQueueRef.current.shift();
      }
    }
    
    if (!nextWordData) return;
    
    setCurrentWord(nextWordData);
    
    setTimeout(() => {
      const words = generateFallingWords(nextWordData);
      setFallingWords(words);

      const d = difficultyRef.current;
      let fallTime: number;
      if (fixedSpeedMs) {
        fallTime = fixedSpeedMs;
      } else if (gameStateRef.current === 'training') {
        fallTime = difficultyConfig.easy.speed;
      } else {
        fallTime = difficultyConfig[d].speed;
      }
      
      if (fallTimerRef.current) clearTimeout(fallTimerRef.current);
      fallTimerRef.current = setTimeout(() => {
        handleMissedWordRef.current();
      }, fallTime + 800);
    }, 100);
  }, [initializeWordCycle, generateFallingWords, difficultyConfig, fixedSpeedMs]);

  // Mantener ref sincronizada
  useEffect(() => { nextWordRef.current = nextWord; }, [nextWord]);

  // === MANEJAR PALABRA PERDIDA ===
  const handleMissedWord = useCallback((): void => {
    const gs = gameStateRef.current;
    const paused = isPausedRef.current;
    const cw = currentWordRef.current;
    
    if (!['training', 'easy', 'medium', 'hard'].includes(gs) || paused || !cw) return;

    setFallingWords([]);

    setMissedWords(prev => [...prev, cw]);
    setCombo(0);
    
    setLives(prev => {
      const newLives = prev - 1;
      
      setShakeScreen(true);
      setTimeout(() => setShakeScreen(false), 500);
      
      setFeedback({
        type: 'missed',
        text: `\u00a1PERDISTE! Era: ${cw.antonym}`,
        points: '-75',
        ipa: cw.antonymIpa || undefined,
        spanish: cw.spanish
      });

      setScore(s => Math.max(0, s - 75));
      
      if (newLives <= 0) {
        setTimeout(() => {
          setGameState('gameover');
          setFallingWords([]);
          if (fallTimerRef.current) {
            clearTimeout(fallTimerRef.current);
            fallTimerRef.current = null;
          }
        }, 1200);
      } else {
        setTimeout(() => {
          setFeedback(null);
          nextWordRef.current();
        }, 1500);
      }
      
      return newLives;
    });
  }, []);

  // Mantener ref sincronizada
  useEffect(() => { handleMissedWordRef.current = handleMissedWord; }, [handleMissedWord]);

  // === MANEJAR CLICK EN PALABRA ===
  const handleWordClick = useCallback((word: FallingWord, event: React.MouseEvent): void => {
    const gs = gameStateRef.current;
    const paused = isPausedRef.current;
    const cw = currentWordRef.current;
    
    if (!['training', 'easy', 'medium', 'hard'].includes(gs) || paused || !cw) return;

    // Limpiar timer inmediatamente
    if (fallTimerRef.current) {
      clearTimeout(fallTimerRef.current);
      fallTimerRef.current = null;
    }

    // Limpiar palabras cayendo inmediatamente
    setFallingWords([]);

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth * 100;
    const y = (rect.top + rect.height / 2) / window.innerHeight * 100;

    if (word.isCorrect) {
      const currentCombo = comboRef.current;
      const points = 100 + (currentCombo * 25);
      setScore(s => s + points);
      setCombo(c => c + 1);
      createParticles(x, y);
      
      setStudiedWords(prev => new Set([...prev, cw.target]));
      
      const newCorrectCount = correctCountRef.current + 1;
      setCorrectCount(newCorrectCount);
      
      // Sistema de vidas y progresión (SOLO EN MODOS NO-TRAINING)
      if (gs !== 'training') {
        if (newCorrectCount % 5 === 0) {
          setLives(prev => {
            const newLives = prev + 1;
            const d = difficultyRef.current;
            
            if (d === 'easy' && newLives >= difficultyConfig.easy.livesForNext) {
              setTimeout(() => {
                setDifficulty('medium');
                setFeedback({
                  type: 'levelup',
                  text: '🎉 ¡NIVEL MEDIO DESBLOQUEADO! 🎉',
                  points: 'Velocidad aumentada'
                });
                setTimeout(() => {
                  setFeedback(null);
                  nextWordRef.current();
                }, 2500);
              }, 2000);
              return newLives;
            } else if (d === 'medium' && newLives >= difficultyConfig.medium.livesForNext) {
              setTimeout(() => {
                setDifficulty('hard');
                setFeedback({
                  type: 'levelup',
                  text: '🔥 ¡NIVEL DIFÍCIL DESBLOQUEADO! 🔥',
                  points: '¡Velocidad ultra rápida!'
                });
                setTimeout(() => {
                  setFeedback(null);
                  nextWordRef.current();
                }, 2500);
              }, 2000);
              return newLives;
            } else if (d === 'hard' && newLives >= difficultyConfig.hard.livesForNext) {
              setTimeout(() => {
                createConfetti();
                setGameState('victory');
                // Notify parent (e.g. GamePage) that the block is finished
                onBlockCompleteRef.current?.(scoreRef.current);
              }, 2000);
              return newLives;
            }
            
            return newLives;
          });
        }
      }
      
      speakWord(cw.target, 1.0);
      setTimeout(() => {
        speakWord(cw.antonym, 1.0);
      }, 800);
      
      setFeedback({
        type: 'correct',
        text: cw.antonym,
        points: `+${points}`,
        ipa: cw.antonymIpa || undefined,
        spanish: cw.spanish
      });
      
      setTimeout(() => {
        setFeedback(null);
        nextWordRef.current();
      }, 2000);
    } else {
      setMissedWords(prev => [...prev, cw]);
      setCombo(0);
      
      setLives(prev => {
        const newLives = prev - 1;
        
        setShakeScreen(true);
        setTimeout(() => setShakeScreen(false), 500);
        
        speakWord("Wrong", 0.8);
        
        setFeedback({
          type: 'wrong',
          text: `\u00a1NO! Era: ${cw.antonym}`,
          points: '-50',
          ipa: cw.antonymIpa || undefined,
          spanish: cw.spanish
        });

        setScore(s => Math.max(0, s - 50));
        
        if (newLives <= 0) {
          setTimeout(() => {
            setGameState('gameover');
            setFallingWords([]);
            if (fallTimerRef.current) {
              clearTimeout(fallTimerRef.current);
              fallTimerRef.current = null;
            }
          }, 1200);
        } else {
          setTimeout(() => {
            setFeedback(null);
            nextWordRef.current();
          }, 1500);
        }
        
        return newLives;
      });
    }
  }, [createParticles, createConfetti, speakWord, difficultyConfig]);

  // Iniciar juego (para cada modo)
  const startGame = useCallback((gameMode: 'training' | 'play' | 'easy' | 'medium' | 'hard') => {
    setGameState(gameMode);
    setScore(0);
    setLives(phase.difficultyLevels[gameMode].lives);
    setCombo(0);
    setCorrectCount(0);
    setMissedWords([]);
    setStudiedWords(new Set());
    setCurrentWord(null);
    setFallingWords([]);
    setIsPaused(false);
    setDifficulty('easy');
    wordQueueRef.current = [];
    initializeWordCycle();
  }, [phase.difficultyLevels, initializeWordCycle]);

  // Iniciar entrenamiento
  const startTraining = useCallback(() => {
    startGame('training');
  }, [startGame]);

  // Reiniciar juego completo
  const resetGame = useCallback(() => {
    setGameState('learning');
    setScore(0);
    setLives(5);
    setCombo(0);
    setDifficulty('easy');
    setCurrentWord(null);
    setFallingWords([]);
    setCorrectCount(0);
    setMissedWords([]);
    setStudiedWords(new Set());
    wordQueueRef.current = [];
    if (fallTimerRef.current) {
      clearTimeout(fallTimerRef.current);
      fallTimerRef.current = null;
    }
  }, []);

  // Pre-cargar voces para iOS
  useEffect(() => {
    if (window.speechSynthesis) {
      const loadVoices = () => window.speechSynthesis.getVoices();
      loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }
  }, []);

  // Iniciar palabras cuando comienza el juego
  useEffect(() => {
    if (['training', 'easy', 'medium', 'hard'].includes(gameState) && !currentWord) {
      initializeWordCycle();
      
      const timer = setTimeout(() => {
        const firstWord = availableWordsRef.current[0];
        if (!firstWord) return;
        
        setCurrentWord(firstWord);
        
        const words = generateFallingWords(firstWord);
        setFallingWords(words);

        let fallTime: number;
        if (fixedSpeedMs) {
          fallTime = fixedSpeedMs;
        } else if (gameState === 'training') {
          fallTime = difficultyConfig.easy.speed;
        } else {
          fallTime = difficultyConfig[difficulty].speed;
        }
        
        fallTimerRef.current = setTimeout(() => {
          handleMissedWordRef.current();
        }, fallTime + 800);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [gameState, currentWord, initializeWordCycle, generateFallingWords, difficulty, difficultyConfig]);

  // Limpiar timers al desmontar
  useEffect(() => {
    return () => {
      if (fallTimerRef.current) {
        clearTimeout(fallTimerRef.current);
      }
    };
  }, []);

  return {
    gameState,
    setGameState,
    score,
    lives,
    combo,
    currentWord,
    fallingWords,
    soundEnabled,
    setSoundEnabled,
    feedback,
    particles,
    confetti,
    studiedWords,
    missedWords,
    correctCount,
    difficulty,
    isPaused,
    setIsPaused,
    shakeScreen,
    handleWordClick,
    startTraining,
    startGame,
    togglePause: () => setIsPaused(p => !p),
    quitGame: () => {
      if (fallTimerRef.current) {
        clearTimeout(fallTimerRef.current);
        fallTimerRef.current = null;
      }
      setIsPaused(false);
      setGameState('learning');
      setFallingWords([]);
    },
    resetGame,
    difficultyConfig
  };
};
