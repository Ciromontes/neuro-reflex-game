// IMPORTAR Phase desde types CORRECTAMENTE
import type { Phase } from '../types/index';

export const phases: Phase[] = [
  {
    id: 1,
    title: "Verbos Básicos",
    description: "40 verbos comunes y sus antónimos en inglés",
    icon: "⚡",
    color: "#00ff87",
    mechanic: "antonym",
    wordPairs: [
      { target: "ACCEPT", antonym: "REFUSE", spanish: "Aceptar – Rechazar", type: "verb", targetIpa: "/əkˈsɛpt/", antonymIpa: "/rɪˈfjuːz/" },
      { target: "AGREE", antonym: "DISAGREE", spanish: "Estar de acuerdo – No estar de acuerdo", type: "verb", targetIpa: "/əˈɡriː/", antonymIpa: "/ˌdɪsəˈɡriː/" },
      { target: "ARRIVE", antonym: "LEAVE", spanish: "Llegar – Salir", type: "verb", targetIpa: "/əˈraɪv/", antonymIpa: "/liːv/" },
      { target: "ASK", antonym: "ANSWER", spanish: "Preguntar – Responder", type: "verb", targetIpa: "/æsk/", antonymIpa: "/ˈænsər/" },
      { target: "BEGIN", antonym: "END", spanish: "Empezar – Terminar", type: "verb", targetIpa: "/bɪˈɡɪn/", antonymIpa: "/ɛnd/" },
      { target: "BELIEVE", antonym: "DOUBT", spanish: "Creer – Dudar", type: "verb", targetIpa: "/bɪˈliːv/", antonymIpa: "/daʊt/" },
      { target: "BORROW", antonym: "LEND", spanish: "Pedir prestado – Prestar", type: "verb", targetIpa: "/ˈbɒroʊ/", antonymIpa: "/lɛnd/" },
      { target: "BRING", antonym: "TAKE", spanish: "Traer – Llevar", type: "verb", targetIpa: "/brɪŋ/", antonymIpa: "/teɪk/" },
      { target: "BUILD", antonym: "DESTROY", spanish: "Construir – Destruir", type: "verb", targetIpa: "/bɪld/", antonymIpa: "/dɪˈstrɔɪ/" },
      { target: "BUY", antonym: "SELL", spanish: "Comprar – Vender", type: "verb", targetIpa: "/baɪ/", antonymIpa: "/sɛl/" },
      { target: "CATCH", antonym: "THROW", spanish: "Atrapar – Lanzar", type: "verb", targetIpa: "/kætʃ/", antonymIpa: "/θroʊ/" },
      { target: "COME", antonym: "GO", spanish: "Venir – Ir", type: "verb", targetIpa: "/kʌm/", antonymIpa: "/ɡoʊ/" },
      { target: "CONTINUE", antonym: "STOP", spanish: "Continuar – Detener", type: "verb", targetIpa: "/kənˈtɪnjuː/", antonymIpa: "/stɒp/" },
      { target: "CREATE", antonym: "DESTROY", spanish: "Crear – Destruir", type: "verb", targetIpa: "/kriˈeɪt/", antonymIpa: "/dɪˈstrɔɪ/" },
      { target: "ENTER", antonym: "EXIT", spanish: "Entrar – Salir", type: "verb", targetIpa: "/ˈɛntər/", antonymIpa: "/ˈɛɡzɪt/" },
      { target: "FIND", antonym: "LOSE", spanish: "Encontrar – Perder", type: "verb", targetIpa: "/faɪnd/", antonymIpa: "/luːz/" },
      { target: "FIX", antonym: "BREAK", spanish: "Arreglar – Romper", type: "verb", targetIpa: "/fɪks/", antonymIpa: "/breɪk/" },
      { target: "FOLLOW", antonym: "LEAD", spanish: "Seguir – Liderar", type: "verb", targetIpa: "/ˈfɒloʊ/", antonymIpa: "/liːd/" },
      { target: "GIVE", antonym: "TAKE", spanish: "Dar – Tomar", type: "verb", targetIpa: "/ɡɪv/", antonymIpa: "/teɪk/" },
      { target: "GROW", antonym: "SHRINK", spanish: "Crecer – Encoger", type: "verb", targetIpa: "/ɡroʊ/", antonymIpa: "/ʃrɪŋk/" },
      { target: "HELP", antonym: "IGNORE", spanish: "Ayudar – Ignorar", type: "verb", targetIpa: "/hɛlp/", antonymIpa: "/ɪɡˈnɔːr/" },
      { target: "HIDE", antonym: "SHOW", spanish: "Esconder – Mostrar", type: "verb", targetIpa: "/haɪd/", antonymIpa: "/ʃoʊ/" },
      { target: "IMPROVE", antonym: "WORSEN", spanish: "Mejorar – Empeorar", type: "verb", targetIpa: "/ɪmˈpruːv/", antonymIpa: "/ˈwɜːrsən/" },
      { target: "INCREASE", antonym: "DECREASE", spanish: "Aumentar – Disminuir", type: "verb", targetIpa: "/ɪnˈkriːs/", antonymIpa: "/dɪˈkriːs/" },
      { target: "LAUGH", antonym: "CRY", spanish: "Reír – Llorar", type: "verb", targetIpa: "/læf/", antonymIpa: "/kraɪ/" },
      { target: "LIKE", antonym: "DISLIKE", spanish: "Gustar – No gustar", type: "verb", targetIpa: "/laɪk/", antonymIpa: "/dɪsˈlaɪk/" },
      { target: "LOVE", antonym: "HATE", spanish: "Amar – Odiar", type: "verb", targetIpa: "/lʌv/", antonymIpa: "/heɪt/" },
      { target: "MOVE", antonym: "STAY", spanish: "Moverse – Quedarse", type: "verb", targetIpa: "/muːv/", antonymIpa: "/steɪ/" },
      { target: "OPEN", antonym: "CLOSE", spanish: "Abrir – Cerrar", type: "verb", targetIpa: "/ˈoʊpən/", antonymIpa: "/kloʊz/" },
      { target: "PASS", antonym: "FAIL", spanish: "Aprobar – Reprobar", type: "verb", targetIpa: "/pæs/", antonymIpa: "/feɪl/" },
      { target: "PUSH", antonym: "PULL", spanish: "Empujar – Jalar", type: "verb", targetIpa: "/pʊʃ/", antonymIpa: "/pʊl/" },
      { target: "REMEMBER", antonym: "FORGET", spanish: "Recordar – Olvidar", type: "verb", targetIpa: "/rɪˈmɛmbər/", antonymIpa: "/fərˈɡɛt/" },
      { target: "SAVE", antonym: "SPEND", spanish: "Ahorrar – Gastar", type: "verb", targetIpa: "/seɪv/", antonymIpa: "/spɛnd/" },
      { target: "SEND", antonym: "RECEIVE", spanish: "Enviar – Recibir", type: "verb", targetIpa: "/sɛnd/", antonymIpa: "/rɪˈsiːv/" },
      { target: "START", antonym: "FINISH", spanish: "Comenzar – Finalizar", type: "verb", targetIpa: "/stɑːrt/", antonymIpa: "/ˈfɪnɪʃ/" },
      { target: "TEACH", antonym: "LEARN", spanish: "Enseñar – Aprender", type: "verb", targetIpa: "/tiːtʃ/", antonymIpa: "/lɜːrn/" },
      { target: "TRY", antonym: "QUIT", spanish: "Intentar – Rendirse", type: "verb", targetIpa: "/traɪ/", antonymIpa: "/kwɪt/" },
      { target: "WIN", antonym: "LOSE", spanish: "Ganar – Perder", type: "verb", targetIpa: "/wɪn/", antonymIpa: "/luːz/" },
      { target: "WORK", antonym: "REST", spanish: "Trabajar – Descansar", type: "verb", targetIpa: "/wɜːrk/", antonymIpa: "/rɛst/" },
      { target: "WAKE", antonym: "SLEEP", spanish: "Despertar – Dormir", type: "verb", targetIpa: "/weɪk/", antonymIpa: "/sliːp/" }
    ],
    distractorWords: ["WALK", "RUN", "TALK", "SLEEP", "EAT", "DRINK", "WRITE", "READ", "JUMP", "SWIM"],
    difficultyLevels: {
      training: { speed: 8000, lives: 5 },
      easy: { speed: 8000, lives: 5 },
      medium: { speed: 5500, lives: 5 },
      hard: { speed: 3500, lives: 5 }
    },
    difficultyConfig: {
      easy: { speed: 8000, name: "FÁCIL", color: "#00ff87", livesForNext: 10 },
      medium: { speed: 5500, name: "MEDIO", color: "#00d4ff", livesForNext: 15 },
      hard: { speed: 3500, name: "DIFÍCIL", color: "#ff00ff", livesForNext: 20 }
    }
  },
  {
    id: 2,
    title: "Sustantivos y Adjetivos",
    description: "40 adjetivos y sustantivos con sus opuestos",
    icon: "📚",
    color: "#00d4ff",
    mechanic: "antonym",
    wordPairs: [
      { target: "BIG", antonym: "SMALL", spanish: "Grande – Pequeño", type: "adjective", targetIpa: "/bɪɡ/", antonymIpa: "/smɔːl/" },
      { target: "HOT", antonym: "COLD", spanish: "Caliente – Frío", type: "adjective", targetIpa: "/hɒt/", antonymIpa: "/koʊld/" },
      { target: "FAST", antonym: "SLOW", spanish: "Rápido – Lento", type: "adjective", targetIpa: "/fæst/", antonymIpa: "/sloʊ/" },
      { target: "NEW", antonym: "OLD", spanish: "Nuevo – Viejo", type: "adjective", targetIpa: "/njuː/", antonymIpa: "/oʊld/" },
      { target: "RICH", antonym: "POOR", spanish: "Rico – Pobre", type: "adjective", targetIpa: "/rɪtʃ/", antonymIpa: "/pʊr/" },
      { target: "STRONG", antonym: "WEAK", spanish: "Fuerte – Débil", type: "adjective", targetIpa: "/strɒŋ/", antonymIpa: "/wiːk/" },
      { target: "TALL", antonym: "SHORT", spanish: "Alto – Bajo", type: "adjective", targetIpa: "/tɔːl/", antonymIpa: "/ʃɔːrt/" },
      { target: "HAPPY", antonym: "SAD", spanish: "Feliz – Triste", type: "adjective", targetIpa: "/ˈhæpi/", antonymIpa: "/sæd/" },
      { target: "GOOD", antonym: "BAD", spanish: "Bueno – Malo", type: "adjective", targetIpa: "/ɡʊd/", antonymIpa: "/bæd/" },
      { target: "CLEAN", antonym: "DIRTY", spanish: "Limpio – Sucio", type: "adjective", targetIpa: "/kliːn/", antonymIpa: "/ˈdɜːrti/" },
      { target: "DRY", antonym: "WET", spanish: "Seco – Mojado", type: "adjective", targetIpa: "/draɪ/", antonymIpa: "/wɛt/" },
      { target: "FULL", antonym: "EMPTY", spanish: "Lleno – Vacío", type: "adjective", targetIpa: "/fʊl/", antonymIpa: "/ˈɛmpti/" },
      { target: "HARD", antonym: "SOFT", spanish: "Duro – Suave", type: "adjective", targetIpa: "/hɑːrd/", antonymIpa: "/sɒft/" },
      { target: "HEAVY", antonym: "LIGHT", spanish: "Pesado – Ligero", type: "adjective", targetIpa: "/ˈhɛvi/", antonymIpa: "/laɪt/" },
      { target: "HIGH", antonym: "LOW", spanish: "Alto – Bajo", type: "adjective", targetIpa: "/haɪ/", antonymIpa: "/loʊ/" },
      { target: "LONG", antonym: "SHORT", spanish: "Largo – Corto", type: "adjective", targetIpa: "/lɒŋ/", antonymIpa: "/ʃɔːrt/" },
      { target: "LOUD", antonym: "QUIET", spanish: "Fuerte – Silencioso", type: "adjective", targetIpa: "/laʊd/", antonymIpa: "/ˈkwaɪət/" },
      { target: "NEAR", antonym: "FAR", spanish: "Cerca – Lejos", type: "adjective", targetIpa: "/nɪr/", antonymIpa: "/fɑːr/" },
      { target: "PRETTY", antonym: "UGLY", spanish: "Bonito – Feo", type: "adjective", targetIpa: "/ˈprɪti/", antonymIpa: "/ˈʌɡli/" },
      { target: "THICK", antonym: "THIN", spanish: "Grueso – Delgado", type: "adjective", targetIpa: "/θɪk/", antonymIpa: "/θɪn/" },
      { target: "YOUNG", antonym: "OLD", spanish: "Joven – Viejo", type: "adjective", targetIpa: "/jʌŋ/", antonymIpa: "/oʊld/" },
      { target: "DAY", antonym: "NIGHT", spanish: "Día – Noche", type: "noun", targetIpa: "/deɪ/", antonymIpa: "/naɪt/" },
      { target: "SUMMER", antonym: "WINTER", spanish: "Verano – Invierno", type: "noun", targetIpa: "/ˈsʌmər/", antonymIpa: "/ˈwɪntər/" },
      { target: "FRIEND", antonym: "ENEMY", spanish: "Amigo – Enemigo", type: "noun", targetIpa: "/frɛnd/", antonymIpa: "/ˈɛnəmi/" },
      { target: "LOVE", antonym: "HATE", spanish: "Amor – Odio", type: "noun", targetIpa: "/lʌv/", antonymIpa: "/heɪt/" },
      { target: "PEACE", antonym: "WAR", spanish: "Paz – Guerra", type: "noun", targetIpa: "/piːs/", antonymIpa: "/wɔːr/" },
      { target: "SUCCESS", antonym: "FAILURE", spanish: "Éxito – Fracaso", type: "noun", targetIpa: "/səkˈsɛs/", antonymIpa: "/ˈfeɪljər/" },
      { target: "HEALTH", antonym: "SICKNESS", spanish: "Salud – Enfermedad", type: "noun", targetIpa: "/hɛlθ/", antonymIpa: "/ˈsɪknəs/" },
      { target: "LIFE", antonym: "DEATH", spanish: "Vida – Muerte", type: "noun", targetIpa: "/laɪf/", antonymIpa: "/dɛθ/" },
      { target: "BEGINNING", antonym: "END", spanish: "Comienzo – Fin", type: "noun", targetIpa: "/bɪˈɡɪnɪŋ/", antonymIpa: "/ɛnd/" },
      { target: "TRUTH", antonym: "LIE", spanish: "Verdad – Mentira", type: "noun", targetIpa: "/truːθ/", antonymIpa: "/laɪ/" },
      { target: "BEAUTY", antonym: "UGLINESS", spanish: "Belleza – Fealdad", type: "noun", targetIpa: "/ˈbjuːti/", antonymIpa: "/ˈʌɡlinəs/" },
      { target: "COURAGE", antonym: "FEAR", spanish: "Valor – Miedo", type: "noun", targetIpa: "/ˈkɜːrɪdʒ/", antonymIpa: "/fɪr/" },
      { target: "FREEDOM", antonym: "SLAVERY", spanish: "Libertad – Esclavitud", type: "noun", targetIpa: "/ˈfriːdəm/", antonymIpa: "/ˈsleɪvəri/" },
      { target: "HOPE", antonym: "DESPAIR", spanish: "Esperanza – Desesperación", type: "noun", targetIpa: "/hoʊp/", antonymIpa: "/dɪˈspɛr/" },
      { target: "JOY", antonym: "SORROW", spanish: "Alegría – Tristeza", type: "noun", targetIpa: "/dʒɔɪ/", antonymIpa: "/ˈsɒroʊ/" },
      { target: "LIGHT", antonym: "DARKNESS", spanish: "Luz – Oscuridad", type: "noun", targetIpa: "/laɪt/", antonymIpa: "/ˈdɑːrknəs/" },
      { target: "ORDER", antonym: "CHAOS", spanish: "Orden – Caos", type: "noun", targetIpa: "/ˈɔːrdər/", antonymIpa: "/ˈkeɪɒs/" },
      { target: "STRENGTH", antonym: "WEAKNESS", spanish: "Fuerza – Debilidad", type: "noun", targetIpa: "/strɛŋθ/", antonymIpa: "/ˈwiːknəs/" },
      { target: "WISDOM", antonym: "FOOLISHNESS", spanish: "Sabiduría – Necedad", type: "noun", targetIpa: "/ˈwɪzdəm/", antonymIpa: "/ˈfuːlɪʃnəs/" }
    ],
    distractorWords: ["HOUSE", "CAR", "BOOK", "PEN", "TABLE", "CHAIR", "DOG", "CAT", "TREE", "FLOWER"],
    difficultyLevels: {
      training: { speed: 7500, lives: 5 },
      easy: { speed: 7500, lives: 5 },
      medium: { speed: 5000, lives: 5 },
      hard: { speed: 3000, lives: 5 }
    },
    difficultyConfig: {
      easy: { speed: 7500, name: "FÁCIL", color: "#00d4ff", livesForNext: 10 },
      medium: { speed: 5000, name: "MEDIO", color: "#ffd700", livesForNext: 15 },
      hard: { speed: 3000, name: "DIFÍCIL", color: "#ff3d00", livesForNext: 20 }
    }
  },
  {
    id: 3,
    title: "Phrasal Verbs",
    description: "40 phrasal verbs comunes con sus opuestos o complementos",
    icon: "🔗",
    color: "#ff00ff",
    mechanic: "association",
    wordPairs: [
      { target: "GIVE UP", antonym: "CARRY ON", spanish: "Rendirse – Continuar", type: "phrasal-verb", targetIpa: "/ɡɪv ʌp/", antonymIpa: "/ˈkæri ɒn/" },
      { target: "TURN ON", antonym: "TURN OFF", spanish: "Encender – Apagar", type: "phrasal-verb", targetIpa: "/tɜːrn ɒn/", antonymIpa: "/tɜːrn ɒf/" },
      { target: "GET UP", antonym: "SIT DOWN", spanish: "Levantarse – Sentarse", type: "phrasal-verb", targetIpa: "/ɡɛt ʌp/", antonymIpa: "/sɪt daʊn/" },
      { target: "COME IN", antonym: "GO OUT", spanish: "Entrar – Salir", type: "phrasal-verb", targetIpa: "/kʌm ɪn/", antonymIpa: "/ɡoʊ aʊt/" },
      { target: "PUT ON", antonym: "TAKE OFF", spanish: "Ponerse – Quitarse", type: "phrasal-verb", targetIpa: "/pʊt ɒn/", antonymIpa: "/teɪk ɒf/" },
      { target: "LOOK UP", antonym: "LOOK DOWN", spanish: "Mirar hacia arriba – Mirar hacia abajo", type: "phrasal-verb", targetIpa: "/lʊk ʌp/", antonymIpa: "/lʊk daʊn/" },
      { target: "PICK UP", antonym: "PUT DOWN", spanish: "Recoger – Dejar", type: "phrasal-verb", targetIpa: "/pɪk ʌp/", antonymIpa: "/pʊt daʊn/" },
      { target: "SET UP", antonym: "TAKE DOWN", spanish: "Montar – Desmontar", type: "phrasal-verb", targetIpa: "/sɛt ʌp/", antonymIpa: "/teɪk daʊn/" },
      { target: "SPEED UP", antonym: "SLOW DOWN", spanish: "Acelerar – Disminuir velocidad", type: "phrasal-verb", targetIpa: "/spiːd ʌp/", antonymIpa: "/sloʊ daʊn/" },
      { target: "WAKE UP", antonym: "FALL ASLEEP", spanish: "Despertar – Dormirse", type: "phrasal-verb", targetIpa: "/weɪk ʌp/", antonymIpa: "/fɔːl əˈsliːp/" },
      { target: "STAND UP", antonym: "SIT DOWN", spanish: "Ponerse de pie – Sentarse", type: "phrasal-verb", targetIpa: "/stænd ʌp/", antonymIpa: "/sɪt daʊn/" },
      { target: "SHOW UP", antonym: "STAY AWAY", spanish: "Aparecer – No presentarse", type: "phrasal-verb", targetIpa: "/ʃoʊ ʌp/", antonymIpa: "/steɪ əˈweɪ/" },
      { target: "CHEER UP", antonym: "FEEL DOWN", spanish: "Animar – Sentirse deprimido", type: "phrasal-verb", targetIpa: "/tʃɪr ʌp/", antonymIpa: "/fiːl daʊn/" },
      { target: "CALM DOWN", antonym: "GET UPSET", spanish: "Calmarse – Alterarse", type: "phrasal-verb", targetIpa: "/kɑːm daʊn/", antonymIpa: "/ɡɛt ʌpˈsɛt/" },
      { target: "CLEAN UP", antonym: "MESS UP", spanish: "Limpiar – Ensuciar", type: "phrasal-verb", targetIpa: "/kliːn ʌp/", antonymIpa: "/mɛs ʌp/" },
      { target: "DRY UP", antonym: "GET WET", spanish: "Secarse – Mojarse", type: "phrasal-verb", targetIpa: "/draɪ ʌp/", antonymIpa: "/ɡɛt wɛt/" },
      { target: "FILL UP", antonym: "EMPTY OUT", spanish: "Llenar – Vaciar", type: "phrasal-verb", targetIpa: "/fɪl ʌp/", antonymIpa: "/ˈɛmpti aʊt/" },
      { target: "FIX UP", antonym: "BREAK DOWN", spanish: "Arreglar – Averiarse", type: "phrasal-verb", targetIpa: "/fɪks ʌp/", antonymIpa: "/breɪk daʊn/" },
      { target: "HANG UP", antonym: "PICK UP", spanish: "Colgar – Contestar (teléfono)", type: "phrasal-verb", targetIpa: "/hæŋ ʌp/", antonymIpa: "/pɪk ʌp/" },
      { target: "HEAT UP", antonym: "COOL DOWN", spanish: "Calentar – Enfriar", type: "phrasal-verb", targetIpa: "/hiːt ʌp/", antonymIpa: "/kuːl daʊn/" },
      { target: "HURRY UP", antonym: "SLOW DOWN", spanish: "Darse prisa – Ir más lento", type: "phrasal-verb", targetIpa: "/ˈhʌri ʌp/", antonymIpa: "/sloʊ daʊn/" },
      { target: "LIGHT UP", antonym: "TURN OFF", spanish: "Iluminar – Apagar", type: "phrasal-verb", targetIpa: "/laɪt ʌp/", antonymIpa: "/tɜːrn ɒf/" },
      { target: "LOCK UP", antonym: "UNLOCK", spanish: "Cerrar con llave – Abrir", type: "phrasal-verb", targetIpa: "/lɒk ʌp/", antonymIpa: "/ʌnˈlɒk/" },
      { target: "MOVE IN", antonym: "MOVE OUT", spanish: "Mudarse a – Mudarse de", type: "phrasal-verb", targetIpa: "/muːv ɪn/", antonymIpa: "/muːv aʊt/" },
      { target: "OPEN UP", antonym: "CLOSE DOWN", spanish: "Abrir – Cerrar", type: "phrasal-verb", targetIpa: "/ˈoʊpən ʌp/", antonymIpa: "/kloʊz daʊn/" },
      { target: "PACK UP", antonym: "UNPACK", spanish: "Empacar – Desempacar", type: "phrasal-verb", targetIpa: "/pæk ʌp/", antonymIpa: "/ʌnˈpæk/" },
      { target: "PAIR UP", antonym: "SPLIT UP", spanish: "Emparejar – Separar", type: "phrasal-verb", targetIpa: "/pɛr ʌp/", antonymIpa: "/splɪt ʌp/" },
      { target: "RISE UP", antonym: "SETTLE DOWN", spanish: "Levantarse – Establecerse", type: "phrasal-verb", targetIpa: "/raɪz ʌp/", antonymIpa: "/ˈsɛtəl daʊn/" },
      { target: "ROLL UP", antonym: "UNROLL", spanish: "Enrollar – Desenrollar", type: "phrasal-verb", targetIpa: "/roʊl ʌp/", antonymIpa: "/ʌnˈroʊl/" },
      { target: "SEAL UP", antonym: "OPEN UP", spanish: "Sellar – Abrir", type: "phrasal-verb", targetIpa: "/siːl ʌp/", antonymIpa: "/ˈoʊpən ʌp/" },
      { target: "SHUT UP", antonym: "SPEAK UP", spanish: "Callarse – Hablar", type: "phrasal-verb", targetIpa: "/ʃʌt ʌp/", antonymIpa: "/spiːk ʌp/" },
      { target: "SIGN UP", antonym: "OPT OUT", spanish: "Inscribirse – Darse de baja", type: "phrasal-verb", targetIpa: "/saɪn ʌp/", antonymIpa: "/ɒpt aʊt/" },
      { target: "SNAP UP", antonym: "PASS UP", spanish: "Comprar rápidamente – Dejar pasar", type: "phrasal-verb", targetIpa: "/snæp ʌp/", antonymIpa: "/pæs ʌp/" },
      { target: "SOBER UP", antonym: "GET DRUNK", spanish: "Despejarse – Embriagarse", type: "phrasal-verb", targetIpa: "/ˈsoʊbər ʌp/", antonymIpa: "/ɡɛt drʌŋk/" },
      { target: "SPLIT UP", antonym: "GET TOGETHER", spanish: "Separarse – Reunirse", type: "phrasal-verb", targetIpa: "/splɪt ʌp/", antonymIpa: "/ɡɛt təˈɡɛðər/" },
      { target: "STIR UP", antonym: "CALM DOWN", spanish: "Provocar – Calmar", type: "phrasal-verb", targetIpa: "/stɜːr ʌp/", antonymIpa: "/kɑːm daʊn/" },
      { target: "SUM UP", antonym: "EXPAND ON", spanish: "Resumir – Ampliar", type: "phrasal-verb", targetIpa: "/sʌm ʌp/", antonymIpa: "/ɪkˈspænd ɒn/" },
      { target: "SWEAT UP", antonym: "COOL DOWN", spanish: "Sudar – Refrescarse", type: "phrasal-verb", targetIpa: "/swɛt ʌp/", antonymIpa: "/kuːl daʊn/" },
      { target: "TEAM UP", antonym: "WORK ALONE", spanish: "Unirse – Trabajar solo", type: "phrasal-verb", targetIpa: "/tiːm ʌp/", antonymIpa: "/wɜːrk əˈloʊn/" },
      { target: "WARM UP", antonym: "COOL DOWN", spanish: "Calentar – Enfriar", type: "phrasal-verb", targetIpa: "/wɔːrm ʌp/", antonymIpa: "/kuːl daʊn/" }
    ],
    distractorWords: ["LOOK AFTER", "GET ALONG", "BREAK DOWN", "CALL OFF", "DROP BY", "FIGURE OUT", "GET OVER", "HOLD ON", "KEEP ON", "LOOK FOR"],
    difficultyLevels: {
      training: { speed: 8500, lives: 5 },
      easy: { speed: 8500, lives: 5 },
      medium: { speed: 6000, lives: 5 },
      hard: { speed: 4000, lives: 5 }
    },
    difficultyConfig: {
      easy: { speed: 8500, name: "FÁCIL", color: "#ff00ff", livesForNext: 10 },
      medium: { speed: 6000, name: "MEDIO", color: "#ffd700", livesForNext: 15 },
      hard: { speed: 4000, name: "DIFÍCIL", color: "#ff3d00", livesForNext: 20 }
    }
  }
];

export const totalPhases = phases.length;

export const getPhaseById = (id: number) => {
  return phases.find(phase => phase.id === id);
};

export const getTotalWords = () => {
  return phases.reduce((total, phase) => total + phase.wordPairs.length, 0);
};
