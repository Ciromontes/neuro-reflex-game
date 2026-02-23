// src/data/sentences/phase2-sentences.ts
import type { WordSentences } from './index';

export const phase2Sentences: WordSentences[] = [

  // ─── ADJECTIVES ───────────────────────────────────────────────

  {
    wordId: "BIG",
    sentences: [
      {
        text: "That is a very _____ house.",
        answer: "big",
        spanishText: "Esa es una casa muy grande.",
        textHard: "The elephant is the _____ animal in the zoo.",
        answerHard: "biggest",
        spanishTextHard: "El elefante es el animal más grande del zoológico.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is that a _____ dog?",
        answer: "big",
        spanishText: "¿Es ese un perro grande?",
        textHard: "Was the concert hall _____ enough for everyone?",
        answerHard: "big",
        spanishTextHard: "¿Era el auditorio lo suficientemente grande para todos?",
        type: "question",
        time: "past"
      },
      {
        text: "This box is not _____ enough.",
        answer: "big",
        spanishText: "Esta caja no es lo suficientemente grande.",
        textHard: "The new apartment was not _____ at all.",
        answerHard: "big",
        spanishTextHard: "El nuevo apartamento no era grande en absoluto.",
        type: "negation",
        time: "past"
      },
      {
        text: "The ant is a _____ insect.",
        answer: "small",
        spanishText: "La hormiga es un insecto pequeño.",
        textHard: "She has the _____ hands I have ever seen.",
        answerHard: "smallest",
        spanishTextHard: "Ella tiene las manos más pequeñas que he visto.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is your room _____?",
        answer: "small",
        spanishText: "¿Es pequeña tu habitación?",
        textHard: "Was the car too _____ for your family?",
        answerHard: "small",
        spanishTextHard: "¿Era el carro demasiado pequeño para tu familia?",
        type: "question",
        time: "past"
      },
      {
        text: "The problem is not _____.",
        answer: "small",
        spanishText: "El problema no es pequeño.",
        textHard: "The differences between them were not _____.",
        answerHard: "small",
        spanishTextHard: "Las diferencias entre ellos no eran pequeñas.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "HOT",
    sentences: [
      {
        text: "The coffee is very _____.",
        answer: "hot",
        spanishText: "El café está muy caliente.",
        textHard: "Today is the _____ day of the year.",
        answerHard: "hottest",
        spanishTextHard: "Hoy es el día más caluroso del año.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the soup _____?",
        answer: "hot",
        spanishText: "¿Está caliente la sopa?",
        textHard: "Was the weather _____ during your trip?",
        answerHard: "hot",
        spanishTextHard: "¿Hacía calor durante tu viaje?",
        type: "question",
        time: "past"
      },
      {
        text: "The water is not _____ yet.",
        answer: "hot",
        spanishText: "El agua todavía no está caliente.",
        textHard: "The oven was not _____ when I checked it.",
        answerHard: "hot",
        spanishTextHard: "El horno no estaba caliente cuando lo revisé.",
        type: "negation",
        time: "past"
      },
      {
        text: "The ice cream is _____ from the freezer.",
        answer: "cold",
        spanishText: "El helado está frío del congelador.",
        textHard: "January is the _____ month in this country.",
        answerHard: "coldest",
        spanishTextHard: "Enero es el mes más frío en este país.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the water too _____?",
        answer: "cold",
        spanishText: "¿Está demasiado fría el agua?",
        textHard: "Was the room _____ when you arrived?",
        answerHard: "cold",
        spanishTextHard: "¿Estaba fría la habitación cuando llegaste?",
        type: "question",
        time: "past"
      },
      {
        text: "The climate here is not _____.",
        answer: "cold",
        spanishText: "El clima aquí no es frío.",
        textHard: "The temperature last night was not _____ at all.",
        answerHard: "cold",
        spanishTextHard: "La temperatura anoche no estaba fría en absoluto.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "FAST",
    sentences: [
      {
        text: "The cheetah is a _____ animal.",
        answer: "fast",
        spanishText: "El guepardo es un animal rápido.",
        textHard: "He is the _____ runner on the team.",
        answerHard: "fastest",
        spanishTextHard: "Él es el corredor más rápido del equipo.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is that car _____?",
        answer: "fast",
        spanishText: "¿Es rápido ese carro?",
        textHard: "Was the internet connection _____ at the hotel?",
        answerHard: "fast",
        spanishTextHard: "¿Era rápida la conexión a internet en el hotel?",
        type: "question",
        time: "past"
      },
      {
        text: "This computer is not _____ enough.",
        answer: "fast",
        spanishText: "Esta computadora no es lo suficientemente rápida.",
        textHard: "The delivery was not _____ this time.",
        answerHard: "fast",
        spanishTextHard: "La entrega no fue rápida esta vez.",
        type: "negation",
        time: "present"
      },
      {
        text: "The turtle is a _____ animal.",
        answer: "slow",
        spanishText: "La tortuga es un animal lento.",
        textHard: "This is the _____ route to the city.",
        answerHard: "slowest",
        spanishTextHard: "Esta es la ruta más lenta hacia la ciudad.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the bus usually _____?",
        answer: "slow",
        spanishText: "¿El autobús suele ser lento?",
        textHard: "Was the service _____ at that restaurant?",
        answerHard: "slow",
        spanishTextHard: "¿Era lento el servicio en ese restaurante?",
        type: "question",
        time: "past"
      },
      {
        text: "The process is not _____.",
        answer: "slow",
        spanishText: "El proceso no es lento.",
        textHard: "His progress was not _____ at all.",
        answerHard: "slow",
        spanishTextHard: "Su progreso no fue lento en absoluto.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "NEW",
    sentences: [
      {
        text: "She has a _____ phone.",
        answer: "new",
        spanishText: "Ella tiene un teléfono nuevo.",
        textHard: "This is the _____ model in the store.",
        answerHard: "newest",
        spanishTextHard: "Este es el modelo más nuevo de la tienda.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is this a _____ car?",
        answer: "new",
        spanishText: "¿Es este un carro nuevo?",
        textHard: "Was that a _____ idea or an old one?",
        answerHard: "new",
        spanishTextHard: "¿Era esa una idea nueva o una antigua?",
        type: "question",
        time: "past"
      },
      {
        text: "This jacket is not _____.",
        answer: "new",
        spanishText: "Esta chaqueta no es nueva.",
        textHard: "The equipment at the gym was not _____.",
        answerHard: "new",
        spanishTextHard: "El equipo del gimnasio no era nuevo.",
        type: "negation",
        time: "past"
      },
      {
        text: "This is an _____ building.",
        answer: "old",
        spanishText: "Este es un edificio viejo.",
        textHard: "He is the _____ person in the office.",
        answerHard: "oldest",
        spanishTextHard: "Él es la persona más mayor de la oficina.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is that an _____ tradition?",
        answer: "old",
        spanishText: "¿Es esa una tradición antigua?",
        textHard: "Was the house very _____ when you bought it?",
        answerHard: "old",
        spanishTextHard: "¿Era la casa muy vieja cuando la compraste?",
        type: "question",
        time: "past"
      },
      {
        text: "This recipe is not _____.",
        answer: "old",
        spanishText: "Esta receta no es vieja.",
        textHard: "The furniture in the room was not very _____.",
        answerHard: "old",
        spanishTextHard: "Los muebles de la habitación no eran muy viejos.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "RICH",
    sentences: [
      {
        text: "He is a _____ businessman.",
        answer: "rich",
        spanishText: "Él es un hombre de negocios rico.",
        textHard: "She is one of the _____ people in the country.",
        answerHard: "richest",
        spanishTextHard: "Ella es una de las personas más ricas del país.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is that family _____?",
        answer: "rich",
        spanishText: "¿Es rica esa familia?",
        textHard: "Was he _____ before he lost his business?",
        answerHard: "rich",
        spanishTextHard: "¿Era rico antes de perder su negocio?",
        type: "question",
        time: "past"
      },
      {
        text: "They are not _____ at all.",
        answer: "rich",
        spanishText: "Ellos no son ricos en absoluto.",
        textHard: "The neighborhood was not _____ back then.",
        answerHard: "rich",
        spanishTextHard: "El vecindario no era rico en aquel entonces.",
        type: "negation",
        time: "past"
      },
      {
        text: "Many people in the world are _____.",
        answer: "poor",
        spanishText: "Muchas personas en el mundo son pobres.",
        textHard: "This is the _____ region in the country.",
        answerHard: "poorest",
        spanishTextHard: "Esta es la región más pobre del país.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the family very _____?",
        answer: "poor",
        spanishText: "¿Es muy pobre la familia?",
        textHard: "Was she _____ when she was young?",
        answerHard: "poor",
        spanishTextHard: "¿Era pobre cuando era joven?",
        type: "question",
        time: "past"
      },
      {
        text: "The community is not _____.",
        answer: "poor",
        spanishText: "La comunidad no es pobre.",
        textHard: "The results of the project were not _____.",
        answerHard: "poor",
        spanishTextHard: "Los resultados del proyecto no fueron pobres.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "STRONG",
    sentences: [
      {
        text: "He is a very _____ man.",
        answer: "strong",
        spanishText: "Él es un hombre muy fuerte.",
        textHard: "She is the _____ athlete on the team.",
        answerHard: "strongest",
        spanishTextHard: "Ella es la atleta más fuerte del equipo.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the bridge _____ enough?",
        answer: "strong",
        spanishText: "¿Es el puente lo suficientemente fuerte?",
        textHard: "Was the wind _____ during the storm?",
        answerHard: "strong",
        spanishTextHard: "¿Era fuerte el viento durante la tormenta?",
        type: "question",
        time: "past"
      },
      {
        text: "The signal is not _____ here.",
        answer: "strong",
        spanishText: "La señal no es fuerte aquí.",
        textHard: "The argument was not _____ enough to convince them.",
        answerHard: "strong",
        spanishTextHard: "El argumento no fue lo suficientemente fuerte para convencerlos.",
        type: "negation",
        time: "past"
      },
      {
        text: "The patient feels _____ after the illness.",
        answer: "weak",
        spanishText: "El paciente se siente débil después de la enfermedad.",
        textHard: "That was the _____ part of his presentation.",
        answerHard: "weakest",
        spanishTextHard: "Esa fue la parte más débil de su presentación.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the structure _____?",
        answer: "weak",
        spanishText: "¿Es débil la estructura?",
        textHard: "Was she _____ after the surgery?",
        answerHard: "weak",
        spanishTextHard: "¿Estaba débil después de la cirugía?",
        type: "question",
        time: "past"
      },
      {
        text: "The team is not _____.",
        answer: "weak",
        spanishText: "El equipo no es débil.",
        textHard: "His performance was not _____ at all.",
        answerHard: "weak",
        spanishTextHard: "Su desempeño no fue débil en absoluto.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "TALL",
    sentences: [
      {
        text: "My brother is very _____.",
        answer: "tall",
        spanishText: "Mi hermano es muy alto.",
        textHard: "She is the _____ student in the class.",
        answerHard: "tallest",
        spanishTextHard: "Ella es la estudiante más alta de la clase.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is that building _____?",
        answer: "tall",
        spanishText: "¿Es alto ese edificio?",
        textHard: "Was he _____ when he was a teenager?",
        answerHard: "tall",
        spanishTextHard: "¿Era alto cuando era adolescente?",
        type: "question",
        time: "past"
      },
      {
        text: "The fence is not _____ enough.",
        answer: "tall",
        spanishText: "La cerca no es lo suficientemente alta.",
        textHard: "The trees in the garden were not very _____.",
        answerHard: "tall",
        spanishTextHard: "Los árboles del jardín no eran muy altos.",
        type: "negation",
        time: "past"
      },
      {
        text: "The child is too _____ to ride.",
        answer: "short",
        spanishText: "El niño es demasiado bajo para subir.",
        textHard: "That was the _____ path through the forest.",
        answerHard: "shortest",
        spanishTextHard: "Ese fue el camino más corto por el bosque.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the ladder _____?",
        answer: "short",
        spanishText: "¿Es corta la escalera?",
        textHard: "Was the speech too _____ for the event?",
        answerHard: "short",
        spanishTextHard: "¿Era el discurso demasiado corto para el evento?",
        type: "question",
        time: "past"
      },
      {
        text: "The meeting was not _____.",
        answer: "short",
        spanishText: "La reunión no fue corta.",
        textHard: "The deadline was not _____ enough to finish.",
        answerHard: "short",
        spanishTextHard: "El plazo no fue lo suficientemente corto para terminar.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "HAPPY",
    sentences: [
      {
        text: "She looks very _____ today.",
        answer: "happy",
        spanishText: "Ella se ve muy feliz hoy.",
        textHard: "He was the _____ person at the party.",
        answerHard: "happiest",
        spanishTextHard: "Él era la persona más feliz de la fiesta.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Are you _____ with the results?",
        answer: "happy",
        spanishText: "¿Estás feliz con los resultados?",
        textHard: "Was she _____ when she heard the news?",
        answerHard: "happy",
        spanishTextHard: "¿Estaba feliz cuando escuchó la noticia?",
        type: "question",
        time: "past"
      },
      {
        text: "He is not _____ with his job.",
        answer: "happy",
        spanishText: "Él no está feliz con su trabajo.",
        textHard: "The children were not _____ about the change.",
        answerHard: "happy",
        spanishTextHard: "Los niños no estaban felices con el cambio.",
        type: "negation",
        time: "past"
      },
      {
        text: "The movie had a _____ ending.",
        answer: "sad",
        spanishText: "La película tuvo un final triste.",
        textHard: "That was the _____ story I have ever heard.",
        answerHard: "saddest",
        spanishTextHard: "Esa fue la historia más triste que he escuchado.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Are you feeling _____ today?",
        answer: "sad",
        spanishText: "¿Te sientes triste hoy?",
        textHard: "Was he _____ after the game?",
        answerHard: "sad",
        spanishTextHard: "¿Estaba triste después del partido?",
        type: "question",
        time: "past"
      },
      {
        text: "She is not _____ about leaving.",
        answer: "sad",
        spanishText: "Ella no está triste por irse.",
        textHard: "The news was not _____ at all.",
        answerHard: "sad",
        spanishTextHard: "La noticia no era triste en absoluto.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "GOOD",
    sentences: [
      {
        text: "She is a _____ teacher.",
        answer: "good",
        spanishText: "Ella es una buena maestra.",
        textHard: "This is the _____ option we have.",
        answerHard: "best",
        spanishTextHard: "Esta es la mejor opción que tenemos.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the food _____?",
        answer: "good",
        spanishText: "¿Está buena la comida?",
        textHard: "Was the movie _____ or disappointing?",
        answerHard: "good",
        spanishTextHard: "¿Fue buena la película o decepcionante?",
        type: "question",
        time: "past"
      },
      {
        text: "The weather is not _____ today.",
        answer: "good",
        spanishText: "El clima no está bueno hoy.",
        textHard: "His performance was not _____ enough.",
        answerHard: "good",
        spanishTextHard: "Su desempeño no fue lo suficientemente bueno.",
        type: "negation",
        time: "past"
      },
      {
        text: "That was a _____ decision.",
        answer: "bad",
        spanishText: "Esa fue una mala decisión.",
        textHard: "This is the _____ score he has ever got.",
        answerHard: "worst",
        spanishTextHard: "Esta es la peor puntuación que ha obtenido.",
        type: "affirmation",
        time: "past"
      },
      {
        text: "Is the situation _____?",
        answer: "bad",
        spanishText: "¿Es mala la situación?",
        textHard: "Was the accident very _____?",
        answerHard: "bad",
        spanishTextHard: "¿Fue muy grave el accidente?",
        type: "question",
        time: "past"
      },
      {
        text: "The news is not _____.",
        answer: "bad",
        spanishText: "La noticia no es mala.",
        textHard: "The results were not as _____ as expected.",
        answerHard: "bad",
        spanishTextHard: "Los resultados no fueron tan malos como se esperaba.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "CLEAN",
    sentences: [
      {
        text: "The kitchen is very _____.",
        answer: "clean",
        spanishText: "La cocina está muy limpia.",
        textHard: "This is the _____ room in the hotel.",
        answerHard: "cleanest",
        spanishTextHard: "Esta es la habitación más limpia del hotel.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is your room _____?",
        answer: "clean",
        spanishText: "¿Está limpia tu habitación?",
        textHard: "Was the beach _____ when you visited?",
        answerHard: "clean",
        spanishTextHard: "¿Estaba limpia la playa cuando la visitaste?",
        type: "question",
        time: "past"
      },
      {
        text: "The windows are not _____ yet.",
        answer: "clean",
        spanishText: "Las ventanas todavía no están limpias.",
        textHard: "The water was not _____ enough to drink.",
        answerHard: "clean",
        spanishTextHard: "El agua no estaba lo suficientemente limpia para beber.",
        type: "negation",
        time: "past"
      },
      {
        text: "The floor looks very _____.",
        answer: "dirty",
        spanishText: "El suelo parece muy sucio.",
        textHard: "That was the _____ car in the parking lot.",
        answerHard: "dirtiest",
        spanishTextHard: "Ese era el carro más sucio del estacionamiento.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Are your hands _____?",
        answer: "dirty",
        spanishText: "¿Tienes las manos sucias?",
        textHard: "Was the campsite _____ after the festival?",
        answerHard: "dirty",
        spanishTextHard: "¿Estaba sucio el campamento después del festival?",
        type: "question",
        time: "past"
      },
      {
        text: "The shirt is not _____.",
        answer: "dirty",
        spanishText: "La camisa no está sucia.",
        textHard: "The dishes were not _____ after washing.",
        answerHard: "dirty",
        spanishTextHard: "Los platos no estaban sucios después de lavarlos.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "DRY",
    sentences: [
      {
        text: "The clothes are finally _____.",
        answer: "dry",
        spanishText: "La ropa está finalmente seca.",
        textHard: "This is the _____ region in the country.",
        answerHard: "driest",
        spanishTextHard: "Esta es la región más seca del país.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the ground _____ today?",
        answer: "dry",
        spanishText: "¿Está seco el suelo hoy?",
        textHard: "Was the weather _____ during the summer?",
        answerHard: "dry",
        spanishTextHard: "¿Estuvo seco el tiempo durante el verano?",
        type: "question",
        time: "past"
      },
      {
        text: "The paint is not _____ yet.",
        answer: "dry",
        spanishText: "La pintura todavía no está seca.",
        textHard: "The grass was not _____ after the rain.",
        answerHard: "dry",
        spanishTextHard: "El césped no estaba seco después de la lluvia.",
        type: "negation",
        time: "past"
      },
      {
        text: "The towel is still _____.",
        answer: "wet",
        spanishText: "La toalla todavía está mojada.",
        textHard: "This is the _____ season of the year.",
        answerHard: "wettest",
        spanishTextHard: "Esta es la temporada más lluviosa del año.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is your hair still _____?",
        answer: "wet",
        spanishText: "¿Todavía tienes el cabello mojado?",
        textHard: "Was the field too _____ to play on?",
        answerHard: "wet",
        spanishTextHard: "¿Estaba el campo demasiado mojado para jugar?",
        type: "question",
        time: "past"
      },
      {
        text: "The floor is not _____ anymore.",
        answer: "wet",
        spanishText: "El suelo ya no está mojado.",
        textHard: "The roads were not _____ after all.",
        answerHard: "wet",
        spanishTextHard: "Las carreteras no estaban mojadas después de todo.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "FULL",
    sentences: [
      {
        text: "The glass is _____ of water.",
        answer: "full",
        spanishText: "El vaso está lleno de agua.",
        textHard: "The stadium was _____ during the final.",
        answerHard: "full",
        spanishTextHard: "El estadio estaba lleno durante la final.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the tank _____?",
        answer: "full",
        spanishText: "¿Está lleno el tanque?",
        textHard: "Was the theater _____ last night?",
        answerHard: "full",
        spanishTextHard: "¿Estaba lleno el teatro anoche?",
        type: "question",
        time: "past"
      },
      {
        text: "The bag is not _____ yet.",
        answer: "full",
        spanishText: "La bolsa todavía no está llena.",
        textHard: "The schedule was not _____ this week.",
        answerHard: "full",
        spanishTextHard: "El horario no estaba lleno esta semana.",
        type: "negation",
        time: "past"
      },
      {
        text: "The bottle is completely _____.",
        answer: "empty",
        spanishText: "La botella está completamente vacía.",
        textHard: "The streets were _____ early in the morning.",
        answerHard: "empty",
        spanishTextHard: "Las calles estaban vacías temprano en la mañana.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the fridge _____?",
        answer: "empty",
        spanishText: "¿Está vacío el refrigerador?",
        textHard: "Was the classroom _____ when you arrived?",
        answerHard: "empty",
        spanishTextHard: "¿Estaba vacía el aula cuando llegaste?",
        type: "question",
        time: "past"
      },
      {
        text: "The room is not _____.",
        answer: "empty",
        spanishText: "La habitación no está vacía.",
        textHard: "The shelves were not _____ at all.",
        answerHard: "empty",
        spanishTextHard: "Los estantes no estaban vacíos en absoluto.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "HARD",
    sentences: [
      {
        text: "The rock is very _____.",
        answer: "hard",
        spanishText: "La roca es muy dura.",
        textHard: "This is the _____ exam I have ever taken.",
        answerHard: "hardest",
        spanishTextHard: "Este es el examen más difícil que he presentado.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the math test _____?",
        answer: "hard",
        spanishText: "¿Es difícil el examen de matemáticas?",
        textHard: "Was the exercise too _____ for beginners?",
        answerHard: "hard",
        spanishTextHard: "¿Era el ejercicio demasiado difícil para principiantes?",
        type: "question",
        time: "past"
      },
      {
        text: "The mattress is not very _____.",
        answer: "hard",
        spanishText: "El colchón no es muy duro.",
        textHard: "The decision was not _____ to make.",
        answerHard: "hard",
        spanishTextHard: "La decisión no fue difícil de tomar.",
        type: "negation",
        time: "past"
      },
      {
        text: "The pillow is very _____.",
        answer: "soft",
        spanishText: "La almohada es muy suave.",
        textHard: "This fabric is the _____ I have ever touched.",
        answerHard: "softest",
        spanishTextHard: "Esta tela es la más suave que he tocado.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the bread still _____?",
        answer: "soft",
        spanishText: "¿Todavía está suave el pan?",
        textHard: "Was her voice _____ during the speech?",
        answerHard: "soft",
        spanishTextHard: "¿Era suave su voz durante el discurso?",
        type: "question",
        time: "past"
      },
      {
        text: "The cheese is not _____ enough.",
        answer: "soft",
        spanishText: "El queso no está lo suficientemente suave.",
        textHard: "The landing was not as _____ as expected.",
        answerHard: "soft",
        spanishTextHard: "El aterrizaje no fue tan suave como se esperaba.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "HEAVY",
    sentences: [
      {
        text: "This box is very _____.",
        answer: "heavy",
        spanishText: "Esta caja es muy pesada.",
        textHard: "That is the _____ bag in the store.",
        answerHard: "heaviest",
        spanishTextHard: "Esa es la bolsa más pesada de la tienda.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is this suitcase _____?",
        answer: "heavy",
        spanishText: "¿Es pesada esta maleta?",
        textHard: "Was the traffic _____ this morning?",
        answerHard: "heavy",
        spanishTextHard: "¿Estaba pesado el tráfico esta mañana?",
        type: "question",
        time: "past"
      },
      {
        text: "The parcel is not _____.",
        answer: "heavy",
        spanishText: "El paquete no es pesado.",
        textHard: "The rain was not _____ yesterday.",
        answerHard: "heavy",
        spanishTextHard: "La lluvia no fue intensa ayer.",
        type: "negation",
        time: "past"
      },
      {
        text: "The feather is very _____.",
        answer: "light",
        spanishText: "La pluma es muy ligera.",
        textHard: "This is the _____ material we could find.",
        answerHard: "lightest",
        spanishTextHard: "Este es el material más ligero que pudimos encontrar.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is your backpack _____?",
        answer: "light",
        spanishText: "¿Es ligera tu mochila?",
        textHard: "Was the meal _____ enough for dinner?",
        answerHard: "light",
        spanishTextHard: "¿Era la comida lo suficientemente ligera para cenar?",
        type: "question",
        time: "past"
      },
      {
        text: "The equipment is not _____.",
        answer: "light",
        spanishText: "El equipo no es ligero.",
        textHard: "The jacket was not _____ for the summer.",
        answerHard: "light",
        spanishTextHard: "La chaqueta no era ligera para el verano.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "HIGH",
    sentences: [
      {
        text: "The mountain is very _____.",
        answer: "high",
        spanishText: "La montaña es muy alta.",
        textHard: "This is the _____ point on the map.",
        answerHard: "highest",
        spanishTextHard: "Este es el punto más alto del mapa.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the price too _____?",
        answer: "high",
        spanishText: "¿Es demasiado alto el precio?",
        textHard: "Were the expectations too _____ from the start?",
        answerHard: "high",
        spanishTextHard: "¿Eran demasiado altas las expectativas desde el principio?",
        type: "question",
        time: "past"
      },
      {
        text: "The ceiling is not very _____.",
        answer: "high",
        spanishText: "El techo no es muy alto.",
        textHard: "The scores were not _____ this semester.",
        answerHard: "high",
        spanishTextHard: "Las calificaciones no fueron altas este semestre.",
        type: "negation",
        time: "past"
      },
      {
        text: "The temperature was very _____ last night.",
        answer: "low",
        spanishText: "La temperatura estuvo muy baja anoche.",
        textHard: "This is the _____ point in the valley.",
        answerHard: "lowest",
        spanishTextHard: "Este es el punto más bajo del valle.",
        type: "affirmation",
        time: "past"
      },
      {
        text: "Is the volume too _____?",
        answer: "low",
        spanishText: "¿Está demasiado bajo el volumen?",
        textHard: "Was the budget too _____ for the project?",
        answerHard: "low",
        spanishTextHard: "¿Era el presupuesto demasiado bajo para el proyecto?",
        type: "question",
        time: "past"
      },
      {
        text: "The quality is not _____.",
        answer: "low",
        spanishText: "La calidad no es baja.",
        textHard: "The risk was not _____ at all.",
        answerHard: "low",
        spanishTextHard: "El riesgo no era bajo en absoluto.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "LONG",
    sentences: [
      {
        text: "She has very _____ hair.",
        answer: "long",
        spanishText: "Ella tiene el cabello muy largo.",
        textHard: "This is the _____ road in the country.",
        answerHard: "longest",
        spanishTextHard: "Esta es la carretera más larga del país.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the movie very _____?",
        answer: "long",
        spanishText: "¿Es muy larga la película?",
        textHard: "Was the wait _____ at the hospital?",
        answerHard: "long",
        spanishTextHard: "¿Fue larga la espera en el hospital?",
        type: "question",
        time: "past"
      },
      {
        text: "The trip is not _____.",
        answer: "long",
        spanishText: "El viaje no es largo.",
        textHard: "The meeting was not _____ this time.",
        answerHard: "long",
        spanishTextHard: "La reunión no fue larga esta vez.",
        type: "negation",
        time: "past"
      },
      {
        text: "The pencil is too _____ to use.",
        answer: "short",
        spanishText: "El lápiz es demasiado corto para usarlo.",
        textHard: "This is the _____ story in the book.",
        answerHard: "shortest",
        spanishTextHard: "Esta es la historia más corta del libro.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is your dress too _____?",
        answer: "short",
        spanishText: "¿Es demasiado corto tu vestido?",
        textHard: "Was the class too _____ for the topic?",
        answerHard: "short",
        spanishTextHard: "¿Era la clase demasiado corta para el tema?",
        type: "question",
        time: "past"
      },
      {
        text: "The explanation is not _____.",
        answer: "short",
        spanishText: "La explicación no es corta.",
        textHard: "The summary was not _____ enough.",
        answerHard: "short",
        spanishTextHard: "El resumen no fue lo suficientemente corto.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "LOUD",
    sentences: [
      {
        text: "The music is too _____.",
        answer: "loud",
        spanishText: "La música está demasiado fuerte.",
        textHard: "That was the _____ concert I have attended.",
        answerHard: "loudest",
        spanishTextHard: "Ese fue el concierto más ruidoso al que he asistido.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the speaker too _____?",
        answer: "loud",
        spanishText: "¿Está demasiado fuerte el altavoz?",
        textHard: "Was the crowd _____ during the match?",
        answerHard: "loud",
        spanishTextHard: "¿Estaba ruidosa la multitud durante el partido?",
        type: "question",
        time: "past"
      },
      {
        text: "The neighbor is not _____ at night.",
        answer: "loud",
        spanishText: "El vecino no es ruidoso por las noches.",
        textHard: "The alarm was not _____ enough to wake him.",
        answerHard: "loud",
        spanishTextHard: "La alarma no fue lo suficientemente fuerte para despertarlo.",
        type: "negation",
        time: "past"
      },
      {
        text: "The library is always very _____.",
        answer: "quiet",
        spanishText: "La biblioteca siempre está muy tranquila.",
        textHard: "This is the _____ street in the city.",
        answerHard: "quietest",
        spanishTextHard: "Esta es la calle más tranquila de la ciudad.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the classroom _____ right now?",
        answer: "quiet",
        spanishText: "¿Está tranquila el aula ahora mismo?",
        textHard: "Was the neighborhood _____ during the holidays?",
        answerHard: "quiet",
        spanishTextHard: "¿Estaba tranquilo el vecindario durante las vacaciones?",
        type: "question",
        time: "past"
      },
      {
        text: "The house is not _____ at night.",
        answer: "quiet",
        spanishText: "La casa no está tranquila por las noches.",
        textHard: "The office was not _____ during the event.",
        answerHard: "quiet",
        spanishTextHard: "La oficina no estaba tranquila durante el evento.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "NEAR",
    sentences: [
      {
        text: "The school is very _____ to my house.",
        answer: "near",
        spanishText: "La escuela está muy cerca de mi casa.",
        textHard: "The hospital is the _____ building to the park.",
        answerHard: "nearest",
        spanishTextHard: "El hospital es el edificio más cercano al parque.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the supermarket _____?",
        answer: "near",
        spanishText: "¿Está cerca el supermercado?",
        textHard: "Was the train station _____ to the hotel?",
        answerHard: "near",
        spanishTextHard: "¿Estaba la estación de tren cerca del hotel?",
        type: "question",
        time: "past"
      },
      {
        text: "The airport is not _____ from here.",
        answer: "near",
        spanishText: "El aeropuerto no está cerca de aquí.",
        textHard: "The bus stop was not _____ enough to walk.",
        answerHard: "near",
        spanishTextHard: "La parada del autobús no estaba lo suficientemente cerca para caminar.",
        type: "negation",
        time: "past"
      },
      {
        text: "The mountains look very _____ today.",
        answer: "far",
        spanishText: "Las montañas parecen muy lejos hoy.",
        textHard: "That is the _____ place I have ever traveled to.",
        answerHard: "farthest",
        spanishTextHard: "Ese es el lugar más lejano al que he viajado.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the office _____ from here?",
        answer: "far",
        spanishText: "¿Está lejos la oficina de aquí?",
        textHard: "Was the destination too _____ to drive?",
        answerHard: "far",
        spanishTextHard: "¿Estaba el destino demasiado lejos para manejar?",
        type: "question",
        time: "past"
      },
      {
        text: "The park is not _____ from the hotel.",
        answer: "far",
        spanishText: "El parque no está lejos del hotel.",
        textHard: "The village was not _____ from the main road.",
        answerHard: "far",
        spanishTextHard: "El pueblo no estaba lejos de la carretera principal.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "PRETTY",
    sentences: [
      {
        text: "That is a _____ flower.",
        answer: "pretty",
        spanishText: "Esa es una flor bonita.",
        textHard: "She is the _____ girl in the class.",
        answerHard: "prettiest",
        spanishTextHard: "Ella es la niña más bonita de la clase.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the painting _____?",
        answer: "pretty",
        spanishText: "¿Es bonita la pintura?",
        textHard: "Was the dress _____ enough for the occasion?",
        answerHard: "pretty",
        spanishTextHard: "¿Era el vestido lo suficientemente bonito para la ocasión?",
        type: "question",
        time: "past"
      },
      {
        text: "The design is not very _____.",
        answer: "pretty",
        spanishText: "El diseño no es muy bonito.",
        textHard: "The decoration was not _____ at all.",
        answerHard: "pretty",
        spanishTextHard: "La decoración no era bonita en absoluto.",
        type: "negation",
        time: "past"
      },
      {
        text: "The old mask is very _____.",
        answer: "ugly",
        spanishText: "La máscara vieja es muy fea.",
        textHard: "That is the _____ building in town.",
        answerHard: "ugliest",
        spanishTextHard: "Ese es el edificio más feo del pueblo.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the costume _____?",
        answer: "ugly",
        spanishText: "¿Es feo el disfraz?",
        textHard: "Was the argument _____ between them?",
        answerHard: "ugly",
        spanishTextHard: "¿Fue fea la discusión entre ellos?",
        type: "question",
        time: "past"
      },
      {
        text: "The weather is not _____ today.",
        answer: "ugly",
        spanishText: "El tiempo no está feo hoy.",
        textHard: "The situation was not _____ as we thought.",
        answerHard: "ugly",
        spanishTextHard: "La situación no fue tan fea como pensábamos.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "THICK",
    sentences: [
      {
        text: "The book has _____ pages.",
        answer: "thick",
        spanishText: "El libro tiene páginas gruesas.",
        textHard: "This is the _____ wall in the building.",
        answerHard: "thickest",
        spanishTextHard: "Esta es la pared más gruesa del edificio.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the blanket very _____?",
        answer: "thick",
        spanishText: "¿Es muy gruesa la manta?",
        textHard: "Was the fog too _____ to see through?",
        answerHard: "thick",
        spanishTextHard: "¿Era la niebla demasiado densa para ver a través?",
        type: "question",
        time: "past"
      },
      {
        text: "The paper is not _____ enough.",
        answer: "thick",
        spanishText: "El papel no es lo suficientemente grueso.",
        textHard: "The ice was not _____ enough to walk on.",
        answerHard: "thick",
        spanishTextHard: "El hielo no era lo suficientemente grueso para caminar.",
        type: "negation",
        time: "past"
      },
      {
        text: "She has very _____ arms.",
        answer: "thin",
        spanishText: "Ella tiene los brazos muy delgados.",
        textHard: "This is the _____ layer of paint on the wall.",
        answerHard: "thinnest",
        spanishTextHard: "Esta es la capa de pintura más delgada de la pared.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the rope too _____?",
        answer: "thin",
        spanishText: "¿Es demasiado delgada la cuerda?",
        textHard: "Was the fabric too _____ for winter?",
        answerHard: "thin",
        spanishTextHard: "¿Era la tela demasiado delgada para el invierno?",
        type: "question",
        time: "past"
      },
      {
        text: "The slice of bread is not _____.",
        answer: "thin",
        spanishText: "La rebanada de pan no es delgada.",
        textHard: "The wall between the rooms was not _____.",
        answerHard: "thin",
        spanishTextHard: "La pared entre las habitaciones no era delgada.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "YOUNG",
    sentences: [
      {
        text: "She is a very _____ doctor.",
        answer: "young",
        spanishText: "Ella es una doctora muy joven.",
        textHard: "He is the _____ person on the team.",
        answerHard: "youngest",
        spanishTextHard: "Él es la persona más joven del equipo.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is he too _____ for the job?",
        answer: "young",
        spanishText: "¿Es demasiado joven para el trabajo?",
        textHard: "Was she _____ when she got married?",
        answerHard: "young",
        spanishTextHard: "¿Era joven cuando se casó?",
        type: "question",
        time: "past"
      },
      {
        text: "The candidate is not _____ enough.",
        answer: "young",
        spanishText: "El candidato no es lo suficientemente joven.",
        textHard: "The trees in the park were not _____ anymore.",
        answerHard: "young",
        spanishTextHard: "Los árboles del parque ya no eran jóvenes.",
        type: "negation",
        time: "past"
      },
      {
        text: "My grandfather is very _____.",
        answer: "old",
        spanishText: "Mi abuelo es muy viejo.",
        textHard: "He is the _____ professor at the university.",
        answerHard: "oldest",
        spanishTextHard: "Él es el profesor más mayor de la universidad.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the church very _____?",
        answer: "old",
        spanishText: "¿Es muy antigua la iglesia?",
        textHard: "Was the tradition very _____ in that culture?",
        answerHard: "old",
        spanishTextHard: "¿Era muy antigua la tradición en esa cultura?",
        type: "question",
        time: "past"
      },
      {
        text: "The building is not very _____.",
        answer: "old",
        spanishText: "El edificio no es muy viejo.",
        textHard: "The customs were not very _____ in that region.",
        answerHard: "old",
        spanishTextHard: "Las costumbres no eran muy antiguas en esa región.",
        type: "negation",
        time: "past"
      }
    ]
  },

  // ─── NOUNS ────────────────────────────────────────────────────

  {
    wordId: "DAY",
    sentences: [
      {
        text: "Today is a beautiful _____.",
        answer: "day",
        spanishText: "Hoy es un día hermoso.",
        textHard: "The _____ was long and tiring.",
        answerHard: "day",
        spanishTextHard: "El día fue largo y agotador.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is this a good _____ to travel?",
        answer: "day",
        spanishText: "¿Es este un buen día para viajar?",
        textHard: "Was it a productive _____ at work?",
        answerHard: "day",
        spanishTextHard: "¿Fue un día productivo en el trabajo?",
        type: "question",
        time: "past"
      },
      {
        text: "This is not a good _____ for a picnic.",
        answer: "day",
        spanishText: "Este no es un buen día para un picnic.",
        textHard: "It was not a typical _____ in the office.",
        answerHard: "day",
        spanishTextHard: "No fue un día típico en la oficina.",
        type: "negation",
        time: "past"
      },
      {
        text: "The stars shine at _____.",
        answer: "night",
        spanishText: "Las estrellas brillan de noche.",
        textHard: "The _____ was calm and full of stars.",
        answerHard: "night",
        spanishTextHard: "La noche estuvo tranquila y llena de estrellas.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is it safe to travel at _____?",
        answer: "night",
        spanishText: "¿Es seguro viajar de noche?",
        textHard: "Was the _____ quiet in your neighborhood?",
        answerHard: "night",
        spanishTextHard: "¿Estuvo tranquila la noche en tu vecindario?",
        type: "question",
        time: "past"
      },
      {
        text: "This is not the best time to go out at _____.",
        answer: "night",
        spanishText: "Este no es el mejor momento para salir de noche.",
        textHard: "It was not a peaceful _____ in the city.",
        answerHard: "night",
        spanishTextHard: "No fue una noche tranquila en la ciudad.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "SUMMER",
    sentences: [
      {
        text: "I love going to the beach in _____.",
        answer: "summer",
        spanishText: "Me encanta ir a la playa en verano.",
        textHard: "The _____ was very hot and humid.",
        answerHard: "summer",
        spanishTextHard: "El verano fue muy caluroso y húmedo.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is _____ your favorite season?",
        answer: "summer",
        spanishText: "¿Es el verano tu estación favorita?",
        textHard: "Was last _____ hotter than usual?",
        answerHard: "summer",
        spanishTextHard: "¿Fue el verano pasado más caluroso de lo normal?",
        type: "question",
        time: "past"
      },
      {
        text: "_____ is not a good time to ski.",
        answer: "summer",
        spanishText: "El verano no es un buen momento para esquiar.",
        textHard: "The _____ vacation was not as fun as expected.",
        answerHard: "summer",
        spanishTextHard: "Las vacaciones de verano no fueron tan divertidas como se esperaba.",
        type: "negation",
        time: "past"
      },
      {
        text: "It snows a lot in _____.",
        answer: "winter",
        spanishText: "En invierno nieva mucho.",
        textHard: "The _____ was the coldest in decades.",
        answerHard: "winter",
        spanishTextHard: "El invierno fue el más frío en décadas.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Do you enjoy _____?",
        answer: "winter",
        spanishText: "¿Disfrutas el invierno?",
        textHard: "Was the _____ too harsh for outdoor activities?",
        answerHard: "winter",
        spanishTextHard: "¿Fue el invierno demasiado duro para actividades al aire libre?",
        type: "question",
        time: "past"
      },
      {
        text: "_____ is not my favorite season.",
        answer: "winter",
        spanishText: "El invierno no es mi estación favorita.",
        textHard: "The _____ weather was not as cold as predicted.",
        answerHard: "winter",
        spanishTextHard: "El tiempo de invierno no fue tan frío como se predijo.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "FRIEND",
    sentences: [
      {
        text: "She is my best _____.",
        answer: "friend",
        spanishText: "Ella es mi mejor amiga.",
        textHard: "He has been a loyal _____ for many years.",
        answerHard: "friend",
        spanishTextHard: "Él ha sido un amigo leal durante muchos años.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is he a good _____ of yours?",
        answer: "friend",
        spanishText: "¿Es él un buen amigo tuyo?",
        textHard: "Was she a _____ before you became colleagues?",
        answerHard: "friend",
        spanishTextHard: "¿Era ella una amiga antes de que se volvieran colegas?",
        type: "question",
        time: "past"
      },
      {
        text: "He is not a true _____ to anyone.",
        answer: "friend",
        spanishText: "Él no es un verdadero amigo para nadie.",
        textHard: "She was not a _____ I could count on.",
        answerHard: "friend",
        spanishTextHard: "Ella no era una amiga con la que pudiera contar.",
        type: "negation",
        time: "past"
      },
      {
        text: "He treats everyone like an _____.",
        answer: "enemy",
        spanishText: "Él trata a todos como un enemigo.",
        textHard: "Her biggest _____ was her own fear.",
        answerHard: "enemy",
        spanishTextHard: "Su mayor enemigo era su propio miedo.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is he your _____?",
        answer: "enemy",
        spanishText: "¿Es él tu enemigo?",
        textHard: "Was that country considered an _____ back then?",
        answerHard: "enemy",
        spanishTextHard: "¿Era ese país considerado un enemigo en aquel entonces?",
        type: "question",
        time: "past"
      },
      {
        text: "She is not your _____.",
        answer: "enemy",
        spanishText: "Ella no es tu enemiga.",
        textHard: "He was not an _____ of the organization.",
        answerHard: "enemy",
        spanishTextHard: "Él no era un enemigo de la organización.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "LOVE",
    sentences: [
      {
        text: "There is a lot of _____ in this family.",
        answer: "love",
        spanishText: "Hay mucho amor en esta familia.",
        textHard: "Their _____ grew stronger over the years.",
        answerHard: "love",
        spanishTextHard: "Su amor se hizo más fuerte con los años.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is there _____ between them?",
        answer: "love",
        spanishText: "¿Hay amor entre ellos?",
        textHard: "Was there _____ in their relationship from the start?",
        answerHard: "love",
        spanishTextHard: "¿Había amor en su relación desde el principio?",
        type: "question",
        time: "past"
      },
      {
        text: "There is no _____ in that relationship.",
        answer: "love",
        spanishText: "No hay amor en esa relación.",
        textHard: "There was no _____ left between them.",
        answerHard: "love",
        spanishTextHard: "Ya no quedaba amor entre ellos.",
        type: "negation",
        time: "past"
      },
      {
        text: "He has a lot of _____ in his heart.",
        answer: "hate",
        spanishText: "Él tiene mucho odio en su corazón.",
        textHard: "The _____ between the two groups was obvious.",
        answerHard: "hate",
        spanishTextHard: "El odio entre los dos grupos era evidente.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is there _____ between the two teams?",
        answer: "hate",
        spanishText: "¿Hay odio entre los dos equipos?",
        textHard: "Was there _____ behind his actions?",
        answerHard: "hate",
        spanishTextHard: "¿Había odio detrás de sus acciones?",
        type: "question",
        time: "past"
      },
      {
        text: "There is no _____ in her words.",
        answer: "hate",
        spanishText: "No hay odio en sus palabras.",
        textHard: "There was no _____ in what she said.",
        answerHard: "hate",
        spanishTextHard: "No había odio en lo que ella dijo.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "PEACE",
    sentences: [
      {
        text: "The country finally found _____.",
        answer: "peace",
        spanishText: "El país finalmente encontró la paz.",
        textHard: "The _____ agreement was signed last year.",
        answerHard: "peace",
        spanishTextHard: "El acuerdo de paz fue firmado el año pasado.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is there _____ in the region?",
        answer: "peace",
        spanishText: "¿Hay paz en la región?",
        textHard: "Was the _____ treaty respected by both sides?",
        answerHard: "peace",
        spanishTextHard: "¿Fue el tratado de paz respetado por ambas partes?",
        type: "question",
        time: "past"
      },
      {
        text: "There is no _____ without justice.",
        answer: "peace",
        spanishText: "No hay paz sin justicia.",
        textHard: "There was no _____ in the streets that night.",
        answerHard: "peace",
        spanishTextHard: "No hubo paz en las calles esa noche.",
        type: "negation",
        time: "past"
      },
      {
        text: "Nobody wants to live in _____.",
        answer: "war",
        spanishText: "Nadie quiere vivir en guerra.",
        textHard: "The _____ lasted for more than a decade.",
        answerHard: "war",
        spanishTextHard: "La guerra duró más de una década.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the country at _____ right now?",
        answer: "war",
        spanishText: "¿Está el país en guerra ahora mismo?",
        textHard: "Was the _____ devastating for the population?",
        answerHard: "war",
        spanishTextHard: "¿Fue la guerra devastadora para la población?",
        type: "question",
        time: "past"
      },
      {
        text: "This is not a _____ anyone wanted.",
        answer: "war",
        spanishText: "Esta no es una guerra que nadie quería.",
        textHard: "The _____ was not a solution to the conflict.",
        answerHard: "war",
        spanishTextHard: "La guerra no fue una solución al conflicto.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "SUCCESS",
    sentences: [
      {
        text: "Hard work leads to _____.",
        answer: "success",
        spanishText: "El trabajo duro lleva al éxito.",
        textHard: "Her _____ was the result of years of effort.",
        answerHard: "success",
        spanishTextHard: "Su éxito fue el resultado de años de esfuerzo.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is the project a _____?",
        answer: "success",
        spanishText: "¿Es el proyecto un éxito?",
        textHard: "Was the campaign a _____ in the end?",
        answerHard: "success",
        spanishTextHard: "¿Fue la campaña un éxito al final?",
        type: "question",
        time: "past"
      },
      {
        text: "There is no _____ without sacrifice.",
        answer: "success",
        spanishText: "No hay éxito sin sacrificio.",
        textHard: "The launch was not a _____ at first.",
        answerHard: "success",
        spanishTextHard: "El lanzamiento no fue un éxito al principio.",
        type: "negation",
        time: "past"
      },
      {
        text: "The experiment was a complete _____.",
        answer: "failure",
        spanishText: "El experimento fue un fracaso completo.",
        textHard: "The _____ of the plan surprised everyone.",
        answerHard: "failure",
        spanishTextHard: "El fracaso del plan sorprendió a todos.",
        type: "affirmation",
        time: "past"
      },
      {
        text: "Is the plan a _____?",
        answer: "failure",
        spanishText: "¿Es el plan un fracaso?",
        textHard: "Was the mission a _____ from the beginning?",
        answerHard: "failure",
        spanishTextHard: "¿Fue la misión un fracaso desde el principio?",
        type: "question",
        time: "past"
      },
      {
        text: "This is not a complete _____.",
        answer: "failure",
        spanishText: "Esto no es un fracaso completo.",
        textHard: "The result was not a total _____ after all.",
        answerHard: "failure",
        spanishTextHard: "El resultado no fue un fracaso total después de todo.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "HEALTH",
    sentences: [
      {
        text: "Good food is important for your _____.",
        answer: "health",
        spanishText: "La buena alimentación es importante para tu salud.",
        textHard: "Her _____ improved significantly after the treatment.",
        answerHard: "health",
        spanishTextHard: "Su salud mejoró significativamente después del tratamiento.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is your _____ getting better?",
        answer: "health",
        spanishText: "¿Está mejorando tu salud?",
        textHard: "Was his _____ a concern before the surgery?",
        answerHard: "health",
        spanishTextHard: "¿Era su salud una preocupación antes de la cirugía?",
        type: "question",
        time: "past"
      },
      {
        text: "Poor diet is not good for your _____.",
        answer: "health",
        spanishText: "Una mala dieta no es buena para tu salud.",
        textHard: "Stress was not helping her _____ at all.",
        answerHard: "health",
        spanishTextHard: "El estrés no estaba ayudando a su salud en absoluto.",
        type: "negation",
        time: "past"
      },
      {
        text: "The doctor diagnosed a serious _____.",
        answer: "sickness",
        spanishText: "El médico diagnosticó una enfermedad grave.",
        textHard: "The _____ spread quickly through the town.",
        answerHard: "sickness",
        spanishTextHard: "La enfermedad se propagó rápidamente por el pueblo.",
        type: "affirmation",
        time: "past"
      },
      {
        text: "Is his _____ contagious?",
        answer: "sickness",
        spanishText: "¿Es contagiosa su enfermedad?",
        textHard: "Was the _____ the reason he missed work?",
        answerHard: "sickness",
        spanishTextHard: "¿Fue la enfermedad la razón por la que faltó al trabajo?",
        type: "question",
        time: "past"
      },
      {
        text: "This is not a serious _____.",
        answer: "sickness",
        spanishText: "Esta no es una enfermedad grave.",
        textHard: "The _____ was not the cause of his absence.",
        answerHard: "sickness",
        spanishTextHard: "La enfermedad no fue la causa de su ausencia.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "LIFE",
    sentences: [
      {
        text: "She has a wonderful _____.",
        answer: "life",
        spanishText: "Ella tiene una vida maravillosa.",
        textHard: "The _____ of a doctor is full of challenges.",
        answerHard: "life",
        spanishTextHard: "La vida de un médico está llena de desafíos.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is _____ difficult in that city?",
        answer: "life",
        spanishText: "¿Es difícil la vida en esa ciudad?",
        textHard: "Was _____ easier before technology?",
        answerHard: "life",
        spanishTextHard: "¿Era la vida más fácil antes de la tecnología?",
        type: "question",
        time: "past"
      },
      {
        text: "This is not the _____ he imagined.",
        answer: "life",
        spanishText: "Esta no es la vida que él imaginaba.",
        textHard: "It was not the _____ she had planned.",
        answerHard: "life",
        spanishTextHard: "No era la vida que ella había planeado.",
        type: "negation",
        time: "past"
      },
      {
        text: "_____ comes to us all one day.",
        answer: "death",
        spanishText: "La muerte llega a todos algún día.",
        textHard: "The _____ of the king shocked the nation.",
        answerHard: "death",
        spanishTextHard: "La muerte del rey conmocionó a la nación.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is _____ something you fear?",
        answer: "death",
        spanishText: "¿Es la muerte algo que temes?",
        textHard: "Was the _____ of the character expected in the story?",
        answerHard: "death",
        spanishTextHard: "¿Era esperada la muerte del personaje en la historia?",
        type: "question",
        time: "past"
      },
      {
        text: "This is not a topic about _____.",
        answer: "death",
        spanishText: "Este no es un tema sobre la muerte.",
        textHard: "The discussion was not about _____ at all.",
        answerHard: "death",
        spanishTextHard: "La discusión no era sobre la muerte en absoluto.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "BEGINNING",
    sentences: [
      {
        text: "Every story has a _____.",
        answer: "beginning",
        spanishText: "Cada historia tiene un comienzo.",
        textHard: "The _____ of the movie was very exciting.",
        answerHard: "beginning",
        spanishTextHard: "El comienzo de la película fue muy emocionante.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is this the _____ of a new chapter?",
        answer: "beginning",
        spanishText: "¿Es este el comienzo de un nuevo capítulo?",
        textHard: "Was the _____ of the project difficult?",
        answerHard: "beginning",
        spanishTextHard: "¿Fue difícil el comienzo del proyecto?",
        type: "question",
        time: "past"
      },
      {
        text: "This is not the _____ of the problem.",
        answer: "beginning",
        spanishText: "Este no es el comienzo del problema.",
        textHard: "It was not the _____ of their friendship.",
        answerHard: "beginning",
        spanishTextHard: "No fue el comienzo de su amistad.",
        type: "negation",
        time: "past"
      },
      {
        text: "Every story also has an _____.",
        answer: "end",
        spanishText: "Cada historia también tiene un fin.",
        textHard: "The _____ of the film left everyone speechless.",
        answerHard: "end",
        spanishTextHard: "El final de la película dejó a todos sin palabras.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is this the _____ of the road?",
        answer: "end",
        spanishText: "¿Es este el fin del camino?",
        textHard: "Was the _____ of the war unexpected?",
        answerHard: "end",
        spanishTextHard: "¿Fue inesperado el fin de la guerra?",
        type: "question",
        time: "past"
      },
      {
        text: "This is not the _____ of everything.",
        answer: "end",
        spanishText: "Este no es el fin de todo.",
        textHard: "It was not the _____ of their relationship.",
        answerHard: "end",
        spanishTextHard: "No fue el fin de su relación.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "TRUTH",
    sentences: [
      {
        text: "She always tells the _____.",
        answer: "truth",
        spanishText: "Ella siempre dice la verdad.",
        textHard: "The _____ behind the story was shocking.",
        answerHard: "truth",
        spanishTextHard: "La verdad detrás de la historia fue impactante.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is this the _____?",
        answer: "truth",
        spanishText: "¿Es esta la verdad?",
        textHard: "Was the _____ revealed at the end?",
        answerHard: "truth",
        spanishTextHard: "¿Se reveló la verdad al final?",
        type: "question",
        time: "past"
      },
      {
        text: "This is not the whole _____.",
        answer: "truth",
        spanishText: "Esta no es la verdad completa.",
        textHard: "The _____ was not what people expected.",
        answerHard: "truth",
        spanishTextHard: "La verdad no era lo que la gente esperaba.",
        type: "negation",
        time: "past"
      },
      {
        text: "He told a _____ to avoid trouble.",
        answer: "lie",
        spanishText: "Él dijo una mentira para evitar problemas.",
        textHard: "The _____ was discovered much later.",
        answerHard: "lie",
        spanishTextHard: "La mentira fue descubierta mucho después.",
        type: "affirmation",
        time: "past"
      },
      {
        text: "Is that a _____?",
        answer: "lie",
        spanishText: "¿Es eso una mentira?",
        textHard: "Was the whole story a _____?",
        answerHard: "lie",
        spanishTextHard: "¿Fue toda la historia una mentira?",
        type: "question",
        time: "past"
      },
      {
        text: "This is not a _____.",
        answer: "lie",
        spanishText: "Esto no es una mentira.",
        textHard: "What he said was not a _____ after all.",
        answerHard: "lie",
        spanishTextHard: "Lo que dijo no era una mentira después de todo.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "BEAUTY",
    sentences: [
      {
        text: "The _____ of the landscape was breathtaking.",
        answer: "beauty",
        spanishText: "La belleza del paisaje era impresionante.",
        textHard: "The _____ of the painting inspired many artists.",
        answerHard: "beauty",
        spanishTextHard: "La belleza del cuadro inspiró a muchos artistas.",
        type: "affirmation",
        time: "past"
      },
      {
        text: "Is natural _____ important to you?",
        answer: "beauty",
        spanishText: "¿Es importante para ti la belleza natural?",
        textHard: "Was the _____ of the city what attracted tourists?",
        answerHard: "beauty",
        spanishTextHard: "¿Fue la belleza de la ciudad lo que atrajo a los turistas?",
        type: "question",
        time: "past"
      },
      {
        text: "There is no _____ in cruelty.",
        answer: "beauty",
        spanishText: "No hay belleza en la crueldad.",
        textHard: "There was no _____ in the way it was done.",
        answerHard: "beauty",
        spanishTextHard: "No había belleza en la forma en que se hizo.",
        type: "negation",
        time: "past"
      },
      {
        text: "The _____ of the situation was hard to ignore.",
        answer: "ugliness",
        spanishText: "La fealdad de la situación era difícil de ignorar.",
        textHard: "The _____ of the conflict shocked the world.",
        answerHard: "ugliness",
        spanishTextHard: "La fealdad del conflicto conmocionó al mundo.",
        type: "affirmation",
        time: "past"
      },
      {
        text: "Is the _____ of the place a concern?",
        answer: "ugliness",
        spanishText: "¿Es la fealdad del lugar un problema?",
        textHard: "Was the _____ of the design intentional?",
        answerHard: "ugliness",
        spanishTextHard: "¿Era intencional la fealdad del diseño?",
        type: "question",
        time: "past"
      },
      {
        text: "There is no _____ in a kind heart.",
        answer: "ugliness",
        spanishText: "No hay fealdad en un corazón bondadoso.",
        textHard: "There was no _____ in her words or actions.",
        answerHard: "ugliness",
        spanishTextHard: "No había fealdad en sus palabras ni en sus actos.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "COURAGE",
    sentences: [
      {
        text: "She showed great _____ in that moment.",
        answer: "courage",
        spanishText: "Ella mostró un gran valor en ese momento.",
        textHard: "His _____ inspired everyone around him.",
        answerHard: "courage",
        spanishTextHard: "Su valor inspiró a todos a su alrededor.",
        type: "affirmation",
        time: "past"
      },
      {
        text: "Is _____ something you have?",
        answer: "courage",
        spanishText: "¿Es el valor algo que tienes?",
        textHard: "Was her _____ recognized by the team?",
        answerHard: "courage",
        spanishTextHard: "¿Fue su valor reconocido por el equipo?",
        type: "question",
        time: "past"
      },
      {
        text: "There is no _____ in hurting others.",
        answer: "courage",
        spanishText: "No hay valor en hacerle daño a otros.",
        textHard: "There was no _____ in running away.",
        answerHard: "courage",
        spanishTextHard: "No había valor en huir.",
        type: "negation",
        time: "past"
      },
      {
        text: "He was paralyzed by _____.",
        answer: "fear",
        spanishText: "Él estaba paralizado por el miedo.",
        textHard: "The _____ of failure stopped him from trying.",
        answerHard: "fear",
        spanishTextHard: "El miedo al fracaso le impedía intentarlo.",
        type: "affirmation",
        time: "past"
      },
      {
        text: "Is _____ holding you back?",
        answer: "fear",
        spanishText: "¿El miedo te está frenando?",
        textHard: "Was _____ the reason she didn't speak?",
        answerHard: "fear",
        spanishTextHard: "¿Fue el miedo la razón por la que no habló?",
        type: "question",
        time: "past"
      },
      {
        text: "There is no _____ in this room.",
        answer: "fear",
        spanishText: "No hay miedo en esta habitación.",
        textHard: "There was no _____ in his voice when he spoke.",
        answerHard: "fear",
        spanishTextHard: "No había miedo en su voz cuando habló.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "FREEDOM",
    sentences: [
      {
        text: "Everyone deserves _____.",
        answer: "freedom",
        spanishText: "Todo el mundo merece libertad.",
        textHard: "The _____ of speech is a fundamental right.",
        answerHard: "freedom",
        spanishTextHard: "La libertad de expresión es un derecho fundamental.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is _____ important in your country?",
        answer: "freedom",
        spanishText: "¿Es importante la libertad en tu país?",
        textHard: "Was the _____ of the press respected?",
        answerHard: "freedom",
        spanishTextHard: "¿Se respetó la libertad de prensa?",
        type: "question",
        time: "past"
      },
      {
        text: "There is no _____ without responsibility.",
        answer: "freedom",
        spanishText: "No hay libertad sin responsabilidad.",
        textHard: "There was no _____ of expression during that time.",
        answerHard: "freedom",
        spanishTextHard: "No hubo libertad de expresión durante ese tiempo.",
        type: "negation",
        time: "past"
      },
      {
        text: "The workers fought against _____.",
        answer: "slavery",
        spanishText: "Los trabajadores lucharon contra la esclavitud.",
        textHard: "The _____ system was abolished in the 19th century.",
        answerHard: "slavery",
        spanishTextHard: "El sistema de esclavitud fue abolido en el siglo XIX.",
        type: "affirmation",
        time: "past"
      },
      {
        text: "Is _____ still a problem in the world?",
        answer: "slavery",
        spanishText: "¿Sigue siendo la esclavitud un problema en el mundo?",
        textHard: "Was _____ the main cause of the civil war?",
        answerHard: "slavery",
        spanishTextHard: "¿Fue la esclavitud la principal causa de la guerra civil?",
        type: "question",
        time: "past"
      },
      {
        text: "This is not a form of _____.",
        answer: "slavery",
        spanishText: "Esto no es una forma de esclavitud.",
        textHard: "The working conditions were not considered _____.",
        answerHard: "slavery",
        spanishTextHard: "Las condiciones de trabajo no eran consideradas esclavitud.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "HOPE",
    sentences: [
      {
        text: "There is always _____ for a better future.",
        answer: "hope",
        spanishText: "Siempre hay esperanza para un futuro mejor.",
        textHard: "Her _____ kept her going during hard times.",
        answerHard: "hope",
        spanishTextHard: "Su esperanza la mantuvo en marcha durante los tiempos difíciles.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is there any _____ left?",
        answer: "hope",
        spanishText: "¿Queda alguna esperanza?",
        textHard: "Was there _____ of recovering the lost files?",
        answerHard: "hope",
        spanishTextHard: "¿Había esperanza de recuperar los archivos perdidos?",
        type: "question",
        time: "past"
      },
      {
        text: "There is no _____ of winning now.",
        answer: "hope",
        spanishText: "No hay esperanza de ganar ahora.",
        textHard: "There was no _____ of finishing on time.",
        answerHard: "hope",
        spanishTextHard: "No había esperanza de terminar a tiempo.",
        type: "negation",
        time: "past"
      },
      {
        text: "He fell into complete _____.",
        answer: "despair",
        spanishText: "Él cayó en una desesperación total.",
        textHard: "The _____ in his eyes was hard to watch.",
        answerHard: "despair",
        spanishTextHard: "La desesperación en sus ojos era difícil de ver.",
        type: "affirmation",
        time: "past"
      },
      {
        text: "Is _____ something you struggle with?",
        answer: "despair",
        spanishText: "¿Es la desesperación algo con lo que luchas?",
        textHard: "Was the _____ caused by the loss of his job?",
        answerHard: "despair",
        spanishTextHard: "¿Fue la desesperación causada por la pérdida de su trabajo?",
        type: "question",
        time: "past"
      },
      {
        text: "There is no _____ in this situation.",
        answer: "despair",
        spanishText: "No hay desesperación en esta situación.",
        textHard: "There was no _____ in her heart despite the loss.",
        answerHard: "despair",
        spanishTextHard: "No había desesperación en su corazón a pesar de la pérdida.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "JOY",
    sentences: [
      {
        text: "The children are full of _____.",
        answer: "joy",
        spanishText: "Los niños están llenos de alegría.",
        textHard: "The _____ on her face was unforgettable.",
        answerHard: "joy",
        spanishTextHard: "La alegría en su rostro era inolvidable.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is there _____ in what you do?",
        answer: "joy",
        spanishText: "¿Hay alegría en lo que haces?",
        textHard: "Was there any _____ in the celebration?",
        answerHard: "joy",
        spanishTextHard: "¿Había alegría en la celebración?",
        type: "question",
        time: "past"
      },
      {
        text: "There is no _____ without gratitude.",
        answer: "joy",
        spanishText: "No hay alegría sin gratitud.",
        textHard: "There was no _____ in the news they received.",
        answerHard: "joy",
        spanishTextHard: "No había alegría en la noticia que recibieron.",
        type: "negation",
        time: "past"
      },
      {
        text: "There was deep _____ in his voice.",
        answer: "sorrow",
        spanishText: "Había una profunda tristeza en su voz.",
        textHard: "The _____ after the loss was overwhelming.",
        answerHard: "sorrow",
        spanishTextHard: "La tristeza tras la pérdida fue abrumadora.",
        type: "affirmation",
        time: "past"
      },
      {
        text: "Is _____ something you carry every day?",
        answer: "sorrow",
        spanishText: "¿Es la tristeza algo que cargas todos los días?",
        textHard: "Was the _____ too much for her to bear?",
        answerHard: "sorrow",
        spanishTextHard: "¿Fue la tristeza demasiado para que ella la soportara?",
        type: "question",
        time: "past"
      },
      {
        text: "There is no _____ in moving forward.",
        answer: "sorrow",
        spanishText: "No hay tristeza en seguir adelante.",
        textHard: "There was no _____ in his decision to leave.",
        answerHard: "sorrow",
        spanishTextHard: "No había tristeza en su decisión de irse.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "LIGHT",
    sentences: [
      {
        text: "The _____ in the room is beautiful.",
        answer: "light",
        spanishText: "La luz en la habitación es hermosa.",
        textHard: "The _____ of the candle filled the room.",
        answerHard: "light",
        spanishTextHard: "La luz de la vela llenó la habitación.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is there enough _____ to read?",
        answer: "light",
        spanishText: "¿Hay suficiente luz para leer?",
        textHard: "Was the _____ bright enough for the photo?",
        answerHard: "light",
        spanishTextHard: "¿Era la luz lo suficientemente brillante para la foto?",
        type: "question",
        time: "past"
      },
      {
        text: "There is not enough _____ in here.",
        answer: "light",
        spanishText: "No hay suficiente luz aquí dentro.",
        textHard: "There was not much _____ at the end of the tunnel.",
        answerHard: "light",
        spanishTextHard: "No había mucha luz al final del túnel.",
        type: "negation",
        time: "past"
      },
      {
        text: "She is afraid of the _____.",
        answer: "darkness",
        spanishText: "Ella le tiene miedo a la oscuridad.",
        textHard: "The _____ of the forest made them nervous.",
        answerHard: "darkness",
        spanishTextHard: "La oscuridad del bosque los puso nerviosos.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is there any light in that _____?",
        answer: "darkness",
        spanishText: "¿Hay algo de luz en esa oscuridad?",
        textHard: "Was the _____ the reason they got lost?",
        answerHard: "darkness",
        spanishTextHard: "¿Fue la oscuridad la razón por la que se perdieron?",
        type: "question",
        time: "past"
      },
      {
        text: "There is no _____ in his heart.",
        answer: "darkness",
        spanishText: "No hay oscuridad en su corazón.",
        textHard: "There was no _____ in the way she saw the world.",
        answerHard: "darkness",
        spanishTextHard: "No había oscuridad en la forma en que ella veía el mundo.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "ORDER",
    sentences: [
      {
        text: "There is perfect _____ in this office.",
        answer: "order",
        spanishText: "Hay un orden perfecto en esta oficina.",
        textHard: "The _____ of the files made the work easier.",
        answerHard: "order",
        spanishTextHard: "El orden de los archivos hizo el trabajo más fácil.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is there any _____ in that room?",
        answer: "order",
        spanishText: "¿Hay algún orden en esa habitación?",
        textHard: "Was the _____ restored after the protest?",
        answerHard: "order",
        spanishTextHard: "¿Se restauró el orden después de la protesta?",
        type: "question",
        time: "past"
      },
      {
        text: "There is no _____ without clear rules.",
        answer: "order",
        spanishText: "No hay orden sin reglas claras.",
        textHard: "There was no _____ in the way they worked.",
        answerHard: "order",
        spanishTextHard: "No había orden en la forma en que trabajaban.",
        type: "negation",
        time: "past"
      },
      {
        text: "The city fell into complete _____.",
        answer: "chaos",
        spanishText: "La ciudad cayó en el caos total.",
        textHard: "The _____ after the storm was difficult to manage.",
        answerHard: "chaos",
        spanishTextHard: "El caos después de la tormenta fue difícil de manejar.",
        type: "affirmation",
        time: "past"
      },
      {
        text: "Is there _____ in the streets?",
        answer: "chaos",
        spanishText: "¿Hay caos en las calles?",
        textHard: "Was the _____ caused by poor planning?",
        answerHard: "chaos",
        spanishTextHard: "¿Fue el caos causado por una mala planificación?",
        type: "question",
        time: "past"
      },
      {
        text: "There is no _____ in this system.",
        answer: "chaos",
        spanishText: "No hay caos en este sistema.",
        textHard: "There was no _____ in the way the event was organized.",
        answerHard: "chaos",
        spanishTextHard: "No había caos en la forma en que el evento fue organizado.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "STRENGTH",
    sentences: [
      {
        text: "She has incredible _____ of character.",
        answer: "strength",
        spanishText: "Ella tiene una fortaleza de carácter increíble.",
        textHard: "The _____ of the team was their unity.",
        answerHard: "strength",
        spanishTextHard: "La fortaleza del equipo era su unidad.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is physical _____ important for this job?",
        answer: "strength",
        spanishText: "¿Es importante la fuerza física para este trabajo?",
        textHard: "Was her _____ enough to carry her through?",
        answerHard: "strength",
        spanishTextHard: "¿Fue su fuerza suficiente para llevarla adelante?",
        type: "question",
        time: "past"
      },
      {
        text: "There is no _____ in giving up.",
        answer: "strength",
        spanishText: "No hay fuerza en rendirse.",
        textHard: "There was no _____ in the structure of the bridge.",
        answerHard: "strength",
        spanishTextHard: "No había fortaleza en la estructura del puente.",
        type: "negation",
        time: "past"
      },
      {
        text: "Fear can be a sign of _____.",
        answer: "weakness",
        spanishText: "El miedo puede ser una señal de debilidad.",
        textHard: "The _____ of the plan became obvious quickly.",
        answerHard: "weakness",
        spanishTextHard: "La debilidad del plan se hizo evidente rápidamente.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is _____ something you are afraid to show?",
        answer: "weakness",
        spanishText: "¿Es la debilidad algo que temes mostrar?",
        textHard: "Was the _____ of the material the main problem?",
        answerHard: "weakness",
        spanishTextHard: "¿Fue la debilidad del material el principal problema?",
        type: "question",
        time: "past"
      },
      {
        text: "There is no _____ in asking for help.",
        answer: "weakness",
        spanishText: "No hay debilidad en pedir ayuda.",
        textHard: "There was no _____ in her argument at all.",
        answerHard: "weakness",
        spanishTextHard: "No había debilidad en su argumento en absoluto.",
        type: "negation",
        time: "past"
      }
    ]
  },

  {
    wordId: "WISDOM",
    sentences: [
      {
        text: "Age brings _____ and experience.",
        answer: "wisdom",
        spanishText: "La edad trae sabiduría y experiencia.",
        textHard: "The _____ of the elder was admired by all.",
        answerHard: "wisdom",
        spanishTextHard: "La sabiduría del anciano era admirada por todos.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Is _____ more important than intelligence?",
        answer: "wisdom",
        spanishText: "¿Es la sabiduría más importante que la inteligencia?",
        textHard: "Was the _____ of her decision recognized later?",
        answerHard: "wisdom",
        spanishTextHard: "¿Fue reconocida la sabiduría de su decisión más tarde?",
        type: "question",
        time: "past"
      },
      {
        text: "There is no _____ in rushing decisions.",
        answer: "wisdom",
        spanishText: "No hay sabiduría en tomar decisiones apresuradas.",
        textHard: "There was no _____ in the way it was handled.",
        answerHard: "wisdom",
        spanishTextHard: "No había sabiduría en la forma en que se manejó.",
        type: "negation",
        time: "past"
      },
      {
        text: "The decision was pure _____.",
        answer: "foolishness",
        spanishText: "La decisión fue pura necedad.",
        textHard: "The _____ of his plan was clear from the start.",
        answerHard: "foolishness",
        spanishTextHard: "La necedad de su plan era evidente desde el principio.",
        type: "affirmation",
        time: "past"
      },
      {
        text: "Is that kind of _____ dangerous?",
        answer: "foolishness",
        spanishText: "¿Es peligrosa ese tipo de necedad?",
        textHard: "Was the _____ of the idea discussed beforehand?",
        answerHard: "foolishness",
        spanishTextHard: "¿Se discutió la necedad de la idea de antemano?",
        type: "question",
        time: "past"
      },
      {
        text: "There is no _____ in asking questions.",
        answer: "foolishness",
        spanishText: "No hay necedad en hacer preguntas.",
        textHard: "There was no _____ in what he decided to do.",
        answerHard: "foolishness",
        spanishTextHard: "No había necedad en lo que él decidió hacer.",
        type: "negation",
        time: "past"
      }
    ]
  }

];