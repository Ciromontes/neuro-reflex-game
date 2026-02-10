import { useState, useEffect, useRef, useCallback } from 'react';
import type { Phase, WordPair, FallingWord, Feedback } from '../types';

export const useGameLogic = (phase: Phase, mode: 'training' | 'easy' | 'medium' | 'hard') => {
  // Estados del juego
  const [gameState, setGameState] = useState<'learning' | 'playing' | 'paused' | 'gameover' | 'victory'>('learning');
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(phase.difficultyLevels[mode].lives);
  const [combo, setCombo] = useState(0);
  const [currentWord, setCurrentWord] = useState<WordPair | null>(null);
  const [fallingWords, setFallingWords] = useState<FallingWord[]>([]);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, vx: number, vy: number}>>([]);
  const [confetti, setConfetti] = useState<Array<{id: number, x: number, y: number, color: string, delay: number}>>([]);
  const [studiedWords, setStudiedWords] = useState<Set<string>>(new Set());
  const [missedWords, setMissedWords] = useState<WordPair[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [shakeScreen, setShakeScreen] = useState(false);

  // Referencias
  const wordIdCounter = useRef(0);
  const fallTimerRef = useRef<NodeJS.Timeout | null>(null);
  const wordQueueRef = useRef<number[]>([]);
  const availableWordsRef = useRef<WordPair[]>([]);
  const currentCycleRef = useRef<WordPair[]>([]);

  // Inicializar ciclo de palabras sin repetición
  const initializeWordCycle = useCallback(() => {
    const shuffled = [...phase.wordPairs].sort(() => Math.random() - 0.5);
    currentCycleRef.current = shuffled;
    availableWordsRef.current = [...shuffled];
  }, [phase.wordPairs]);

  // Generar palabras que caen
  const generateFallingWords = useCallback((targetWord: WordPair): FallingWord[] => {
    const words: FallingWord[] = [];
    const numWords = 4;
    const positions = [20, 40, 60, 80];
    const shuffledPositions = [...positions].sort(() => Math.random() - 0.5);

    // Palabra correcta
    words.push({
      id: wordIdCounter.current++,
      text: targetWord.antonym,
      isCorrect: true,
      left: shuffledPositions[0]
    });

    // Obtener otros antónimos (excluyendo el actual)
    const otherAntonyms = phase.wordPairs
      .filter(w => w.antonym !== targetWord.antonym)
      .map(w => w.antonym);
    
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
  }, [phase.wordPairs, phase.distractorWords]);

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
    const newParticles = [];
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
    const newConfetti = [];
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

  // Manejar click en palabra
  const handleWordClick = useCallback((word: FallingWord, event: React.MouseEvent) => {
    if (gameState !== 'playing' || isPaused || !currentWord) return;

    if (fallTimerRef.current) {
      clearTimeout(fallTimerRef.current);
      fallTimerRef.current = null;
    }

    setFallingWords([]);

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth * 100;
    const y = (rect.top + rect.height / 2) / window.innerHeight * 100;

    if (word.isCorrect) {
      const points = 100 + (combo * 25);
      setScore(s => s + points);
      setCombo(c => c + 1);
      createParticles(x, y);
      
      setStudiedWords(prev => new Set([...prev, currentWord.target]));
      
      const newCorrectCount = correctCount + 1;
      setCorrectCount(newCorrectCount);
      
      if (newCorrectCount % 5 === 0) {
        setLives(l => l + 1);
      }
      
      speakWord(currentWord.target, 1.0);
      setTimeout(() => {
        speakWord(currentWord.antonym, 1.0);
      }, 800);
      
      setFeedback({
        type: 'correct',
        text: currentWord.spanish,
        points: `+${points}`
      });
      
      setTimeout(() => {
        setFeedback(null);
        nextWord();
      }, 2000);
    } else {
      setMissedWords(prev => [...prev, currentWord]);
      setCombo(0);
      
      setLives(l => l - 1);
      
      setShakeScreen(true);
      setTimeout(() => setShakeScreen(false), 500);
      
      speakWord("Wrong", 0.8);
      
      setFeedback({
        type: 'wrong',
        text: `¡NO! La respuesta es: ${currentWord.antonym}`,
        points: '-50'
      });

      setScore(s => Math.max(0, s - 50));
      
      if (lives - 1 <= 0) {
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
          nextWord();
        }, 1500);
      }
    }
  }, [gameState, isPaused, currentWord, combo, correctCount, lives, createParticles, speakWord]);

  // Siguiente palabra
  const nextWord = useCallback(() => {
    let nextWordData: WordPair;
    
    if (mode !== 'training' && missedWords.length > 0 && wordQueueRef.current.length === 0) {
      nextWordData = missedWords[0];
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
    
    setCurrentWord(nextWordData);
    
    setTimeout(() => {
      const words = generateFallingWords(nextWordData);
      setFallingWords(words);

      const fallTime = phase.difficultyLevels[mode].speed;
      
      if (fallTimerRef.current) clearTimeout(fallTimerRef.current);
      fallTimerRef.current = setTimeout(() => {
        handleMissedWord();
      }, fallTime + 800);
    }, 100);
  }, [mode, missedWords, initializeWordCycle, generateFallingWords, phase.difficultyLevels]);

  // Manejar palabra perdida
  const handleMissedWord = useCallback(() => {
    if (gameState !== 'playing' || isPaused || !currentWord) return;

    setFallingWords([]);
    setMissedWords(prev => [...prev, currentWord]);
    setCombo(0);
    
    setLives(l => l - 1);
    
    setShakeScreen(true);
    setTimeout(() => setShakeScreen(false), 500);
    
    setFeedback({
      type: 'missed',
      text: `¡PERDISTE! Era: ${currentWord.antonym}`,
      points: '-75'
    });

    setScore(s => Math.max(0, s - 75));
    
    if (lives - 1 <= 0) {
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
        nextWord();
      }, 1500);
    }
  }, [gameState, isPaused, currentWord, lives, nextWord]);

  // Iniciar juego
  const startGame = useCallback(() => {
    setGameState('playing');
    setScore(0);
    setLives(phase.difficultyLevels[mode].lives);
    setCombo(0);
    setCorrectCount(0);
    setMissedWords([]);
    setStudiedWords(new Set());
    setCurrentWord(null);
    setFallingWords([]);
    setIsPaused(false);
    wordQueueRef.current = [];
    initializeWordCycle();
  }, [mode, phase.difficultyLevels, initializeWordCycle]);

  // Efecto para pre-cargar voces
  useEffect(() => {
    if (window.speechSynthesis) {
      const loadVoices = () => window.speechSynthesis.getVoices();
      loadVoices();
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    }
  }, []);

  // Efecto para iniciar palabras cuando comienza el juego
  useEffect(() => {
    if (gameState === 'playing' && !currentWord) {
      initializeWordCycle();
      const timer = setTimeout(() => {
        const firstWord = availableWordsRef.current[0];
        setCurrentWord(firstWord);
        const words = generateFallingWords(firstWord);
        setFallingWords(words);

        const fallTime = phase.difficultyLevels[mode].speed;
        fallTimerRef.current = setTimeout(() => {
          handleMissedWord();
        }, fallTime + 800);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [gameState, currentWord, initializeWordCycle, generateFallingWords, mode, phase.difficultyLevels, handleMissedWord]);

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
    isPaused,
    setIsPaused,
    shakeScreen,
    handleWordClick,
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
    }
  };
};
