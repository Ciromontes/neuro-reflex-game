// src/data/sentences/phase1-sentences.ts
import type { WordSentences } from './index';

export const phase1Sentences: WordSentences[] = [
  {
    wordId: "ACCEPT",
    sentences: [
      {
        text: "She will _____ the invitation to the party.",
        answer: "accept",
        spanishText: "Ella aceptará la invitación a la fiesta.",
        textHard: "She _____ every invitation she gets.",
        answerHard: "accepts",
        spanishTextHard: "Ella acepta cada invitación que recibe.",
        type: "affirmation",
        time: "future"
      },
      {
        text: "Did you _____ the job offer?",
        answer: "accept",
        spanishText: "¿Aceptaste la oferta de trabajo?",
        textHard: "He _____ the terms without reading them.",
        answerHard: "accepted",
        spanishTextHard: "Él aceptó los términos sin leerlos.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ to go with us.",
        answer: "accept",
        spanishText: "Él no acepta ir con nosotros.",
        textHard: "They never _____ to participate in meetings.",
        answerHard: "accept",
        spanishTextHard: "Ellos nunca aceptan participar en las reuniones.",
        type: "negation",
        time: "present"
      },
      {
        text: "They _____ to help us with the project.",
        answer: "refuse",
        spanishText: "Ellos se niegan a ayudarnos con el proyecto.",
        textHard: "She always _____ to cooperate.",
        answerHard: "refuses",
        spanishTextHard: "Ella siempre se niega a cooperar.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why did you _____ my offer?",
        answer: "refuse",
        spanishText: "¿Por qué rechazaste mi oferta?",
        textHard: "He _____ to sign the contract last week.",
        answerHard: "refused",
        spanishTextHard: "Él se negó a firmar el contrato la semana pasada.",
        type: "question",
        time: "past"
      },
      {
        text: "She never _____ to listen to advice.",
        answer: "refuse",
        spanishText: "Ella nunca se niega a escuchar consejos.",
        textHard: "They _____ to acknowledge the problem.",
        answerHard: "refuse",
        spanishTextHard: "Ellos se niegan a reconocer el problema.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "AGREE",
    sentences: [
      {
        text: "We _____ on the main points of the project.",
        answer: "agree",
        spanishText: "Estamos de acuerdo en los puntos principales del proyecto.",
        textHard: "They _____ with the new policy changes.",
        answerHard: "agree",
        spanishTextHard: "Ellos están de acuerdo con los nuevos cambios de política.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Do you _____ with the new policy?",
        answer: "agree",
        spanishText: "¿Estás de acuerdo con la nueva política?",
        textHard: "She _____ with the team's decision yesterday.",
        answerHard: "agreed",
        spanishTextHard: "Ella estuvo de acuerdo con la decisión del equipo ayer.",
        type: "question",
        time: "past"
      },
      {
        text: "They don't _____ with the decision.",
        answer: "agree",
        spanishText: "Ellos no están de acuerdo con la decisión.",
        textHard: "He never _____ with the proposed changes.",
        answerHard: "agrees",
        spanishTextHard: "Él nunca está de acuerdo con los cambios propuestos.",
        type: "negation",
        time: "present"
      },
      {
        text: "I _____ with your opinion on this matter.",
        answer: "disagree",
        spanishText: "No estoy de acuerdo con tu opinión sobre este asunto.",
        textHard: "She _____ with the conclusions of the report.",
        answerHard: "disagreed",
        spanishTextHard: "Ella no estuvo de acuerdo con las conclusiones del informe.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why do you _____ with the plan?",
        answer: "disagree",
        spanishText: "¿Por qué no estás de acuerdo con el plan?",
        textHard: "They _____ with the new regulations last month.",
        answerHard: "disagreed",
        spanishTextHard: "Ellos no estuvieron de acuerdo con las nuevas regulaciones el mes pasado.",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ with the team's approach.",
        answer: "disagree",
        spanishText: "Ella no está en desacuerdo con el enfoque del equipo.",
        textHard: "He _____ with the way the project is managed.",
        answerHard: "disagrees",
        spanishTextHard: "Él no está de acuerdo con la forma en que se gestiona el proyecto.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "ARRIVE",
    sentences: [
      {
        text: "The train will _____ at 5 PM.",
        answer: "arrive",
        spanishText: "El tren llegará a las 5 PM.",
        textHard: "She _____ home late last night.",
        answerHard: "arrived",
        spanishTextHard: "Ella llegó a casa tarde anoche.",
        type: "affirmation",
        time: "future"
      },
      {
        text: "Did you _____ on time?",
        answer: "arrive",
        spanishText: "¿Llegaste a tiempo?",
        textHard: "He _____ at the office before the meeting.",
        answerHard: "arrived",
        spanishTextHard: "Él llegó a la oficina antes de la reunión.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ until 6 PM.",
        answer: "arrive",
        spanishText: "Él no llega hasta las 6 PM.",
        textHard: "They never _____ before the deadline.",
        answerHard: "arrive",
        spanishTextHard: "Ellos nunca llegan antes de la fecha límite.",
        type: "negation",
        time: "present"
      },
      {
        text: "They _____ the party early.",
        answer: "leave",
        spanishText: "Ellos se van de la fiesta temprano.",
        textHard: "She always _____ before the end.",
        answerHard: "leaves",
        spanishTextHard: "Ella siempre se va antes de que termine.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why did you _____ so soon?",
        answer: "leave",
        spanishText: "¿Por qué te fuiste tan pronto?",
        textHard: "He _____ the room without saying goodbye.",
        answerHard: "left",
        spanishTextHard: "Él salió de la habitación sin decir adiós.",
        type: "question",
        time: "past"
      },
      {
        text: "She never _____ without notice.",
        answer: "leave",
        spanishText: "Ella nunca se va sin avisar.",
        textHard: "They never _____ the building without permission.",
        answerHard: "leave",
        spanishTextHard: "Ellos nunca abandonan el edificio sin permiso.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "ASK",
    sentences: [
      {
        text: "Can I _____ you a question?",
        answer: "ask",
        spanishText: "¿Puedo hacerte una pregunta?",
        textHard: "She _____ for directions every time.",
        answerHard: "asks",
        spanishTextHard: "Ella pide indicaciones cada vez.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ about the meeting?",
        answer: "ask",
        spanishText: "¿Preguntaste sobre la reunión?",
        textHard: "He _____ the teacher for help.",
        answerHard: "asked",
        spanishTextHard: "Él le pidió ayuda al profesor.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ many questions.",
        answer: "ask",
        spanishText: "Él no hace muchas preguntas.",
        textHard: "They never _____ for permission.",
        answerHard: "ask",
        spanishTextHard: "Ellos nunca piden permiso.",
        type: "negation",
        time: "present"
      },
      {
        text: "She will _____ your question soon.",
        answer: "answer",
        spanishText: "Ella responderá tu pregunta pronto.",
        textHard: "He always _____ quickly.",
        answerHard: "answers",
        spanishTextHard: "Él siempre responde rápidamente.",
        type: "affirmation",
        time: "future"
      },
      {
        text: "Did you _____ the phone?",
        answer: "answer",
        spanishText: "¿Contestaste el teléfono?",
        textHard: "She _____ all the emails yesterday.",
        answerHard: "answered",
        spanishTextHard: "Ella respondió todos los correos ayer.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ my calls.",
        answer: "answer",
        spanishText: "Él no contesta mis llamadas.",
        textHard: "They never _____ the difficult questions.",
        answerHard: "answer",
        spanishTextHard: "Ellos nunca responden las preguntas difíciles.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "BEGIN",
    sentences: [
      {
        text: "We will _____ the meeting at 9 AM.",
        answer: "begin",
        spanishText: "Comenzaremos la reunión a las 9 AM.",
        textHard: "She _____ her work early in the morning.",
        answerHard: "begins",
        spanishTextHard: "Ella comienza su trabajo temprano en la mañana.",
        type: "affirmation",
        time: "future"
      },
      {
        text: "Did you _____ the project?",
        answer: "begin",
        spanishText: "¿Comenzaste el proyecto?",
        textHard: "He _____ his speech with a joke.",
        answerHard: "began",
        spanishTextHard: "Él comenzó su discurso con un chiste.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ until late.",
        answer: "begin",
        spanishText: "Él no empieza hasta tarde.",
        textHard: "They never _____ on time.",
        answerHard: "begin",
        spanishTextHard: "Ellos nunca comienzan a tiempo.",
        type: "negation",
        time: "present"
      },
      {
        text: "They will _____ the event at midnight.",
        answer: "end",
        spanishText: "Ellos terminarán el evento a la medianoche.",
        textHard: "She always _____ her day with a walk.",
        answerHard: "ends",
        spanishTextHard: "Ella siempre termina su día con una caminata.",
        type: "affirmation",
        time: "future"
      },
      {
        text: "Did you _____ the call?",
        answer: "end",
        spanishText: "¿Terminaste la llamada?",
        textHard: "He _____ the meeting abruptly.",
        answerHard: "ended",
        spanishTextHard: "Él terminó la reunión abruptamente.",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ her tasks early.",
        answer: "end",
        spanishText: "Ella no termina sus tareas temprano.",
        textHard: "They never _____ their work on time.",
        answerHard: "end",
        spanishTextHard: "Ellos nunca terminan su trabajo a tiempo.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "BELIEVE",
    sentences: [
      {
        text: "I _____ in your ability to succeed.",
        answer: "believe",
        spanishText: "Creo en tu capacidad para tener éxito.",
        textHard: "She _____ everything he says.",
        answerHard: "believes",
        spanishTextHard: "Ella cree todo lo que él dice.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Do you _____ in ghosts?",
        answer: "believe",
        spanishText: "¿Crees en los fantasmas?",
        textHard: "He _____ the story was true.",
        answerHard: "believed",
        spanishTextHard: "Él creía que la historia era verdadera.",
        type: "question",
        time: "present"
      },
      {
        text: "He doesn't _____ what they say.",
        answer: "believe",
        spanishText: "Él no cree lo que dicen.",
        textHard: "They never _____ the rumors.",
        answerHard: "believe",
        spanishTextHard: "Ellos nunca creen los rumores.",
        type: "negation",
        time: "present"
      },
      {
        text: "She _____ his intentions.",
        answer: "doubt",
        spanishText: "Ella duda de sus intenciones.",
        textHard: "He always _____ the official story.",
        answerHard: "doubts",
        spanishTextHard: "Él siempre duda de la versión oficial.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why do you _____ me?",
        answer: "doubt",
        spanishText: "¿Por qué dudas de mí?",
        textHard: "She _____ the authenticity of the document.",
        answerHard: "doubted",
        spanishTextHard: "Ella dudó de la autenticidad del documento.",
        type: "question",
        time: "past"
      },
      {
        text: "He never _____ the evidence.",
        answer: "doubt",
        spanishText: "Él nunca duda de la evidencia.",
        textHard: "They _____ the results of the study.",
        answerHard: "doubt",
        spanishTextHard: "Ellos no dudan de los resultados del estudio.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "BORROW",
    sentences: [
      {
        text: "Can I _____ your pen?",
        answer: "borrow",
        spanishText: "¿Puedo prestarte tu bolígrafo?",
        textHard: "She _____ books from the library every week.",
        answerHard: "borrows",
        spanishTextHard: "Ella toma libros prestados de la biblioteca cada semana.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ money from him?",
        answer: "borrow",
        spanishText: "¿Le pediste dinero prestado?",
        textHard: "He _____ my car last weekend.",
        answerHard: "borrowed",
        spanishTextHard: "Él tomó prestado mi carro el fin de semana pasado.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ things often.",
        answer: "borrow",
        spanishText: "Él no pide prestadas cosas con frecuencia.",
        textHard: "They never _____ money from friends.",
        answerHard: "borrow",
        spanishTextHard: "Ellos nunca piden dinero prestado a amigos.",
        type: "negation",
        time: "present"
      },
      {
        text: "She _____ me her notes.",
        answer: "lend",
        spanishText: "Ella me prestó sus apuntes.",
        textHard: "He always _____ his tools to neighbors.",
        answerHard: "lends",
        spanishTextHard: "Él siempre le presta sus herramientas a los vecinos.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why didn't you _____ him your book?",
        answer: "lend",
        spanishText: "¿Por qué no le prestaste tu libro?",
        textHard: "She _____ her dress to her sister for the party.",
        answerHard: "lent",
        spanishTextHard: "Ella le prestó su vestido a su hermana para la fiesta.",
        type: "question",
        time: "past"
      },
      {
        text: "He never _____ his car to anyone.",
        answer: "lend",
        spanishText: "Él nunca le presta su carro a nadie.",
        textHard: "They _____ their house to tourists in the summer.",
        answerHard: "lend",
        spanishTextHard: "Ellos no prestan su casa a turistas en verano.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "BRING",
    sentences: [
      {
        text: "Can you _____ some water?",
        answer: "bring",
        spanishText: "¿Puedes traer un poco de agua?",
        textHard: "She _____ snacks to every meeting.",
        answerHard: "brings",
        spanishTextHard: "Ella trae bocadillos a cada reunión.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the documents?",
        answer: "bring",
        spanishText: "¿Trajiste los documentos?",
        textHard: "He _____ his guitar to the party.",
        answerHard: "brought",
        spanishTextHard: "Él trajo su guitarra a la fiesta.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ his laptop to work.",
        answer: "bring",
        spanishText: "Él no trae su portátil al trabajo.",
        textHard: "They never _____ gifts when they visit.",
        answerHard: "bring",
        spanishTextHard: "Ellos nunca traen regalos cuando visitan.",
        type: "negation",
        time: "present"
      },
      {
        text: "She _____ the book home.",
        answer: "take",
        spanishText: "Ella lleva el libro a casa.",
        textHard: "He always _____ his dog for a walk.",
        answerHard: "takes",
        spanishTextHard: "Él siempre lleva a su perro a caminar.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why did you _____ my pen?",
        answer: "take",
        spanishText: "¿Por qué tomaste mi bolígrafo?",
        textHard: "She _____ the last piece of cake.",
        answerHard: "took",
        spanishTextHard: "Ella tomó el último trozo de pastel.",
        type: "question",
        time: "past"
      },
      {
        text: "He never _____ his umbrella.",
        answer: "take",
        spanishText: "Él nunca lleva su paraguas.",
        textHard: "They _____ all the credit for the project.",
        answerHard: "take",
        spanishTextHard: "Ellos no se llevan todo el mérito del proyecto.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "BUILD",
    sentences: [
      {
        text: "They will _____ a new house.",
        answer: "build",
        spanishText: "Ellos construirán una casa nueva.",
        textHard: "She _____ sandcastles at the beach.",
        answerHard: "builds",
        spanishTextHard: "Ella construye castillos de arena en la playa.",
        type: "affirmation",
        time: "future"
      },
      {
        text: "Did you _____ that model?",
        answer: "build",
        spanishText: "¿Construiste ese modelo?",
        textHard: "He _____ a treehouse for his kids.",
        answerHard: "built",
        spanishTextHard: "Él construyó una casa en el árbol para sus hijos.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ anything.",
        answer: "build",
        spanishText: "Él no construye nada.",
        textHard: "They never _____ without a plan.",
        answerHard: "build",
        spanishTextHard: "Ellos nunca construyen sin un plan.",
        type: "negation",
        time: "present"
      },
      {
        text: "She _____ the old building.",
        answer: "destroy",
        spanishText: "Ella destruye el edificio viejo.",
        textHard: "He always _____ his toys.",
        answerHard: "destroys",
        spanishTextHard: "Él siempre destruye sus juguetes.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why did you _____ the bridge?",
        answer: "destroy",
        spanishText: "¿Por qué destruiste el puente?",
        textHard: "They _____ the evidence.",
        answerHard: "destroyed",
        spanishTextHard: "Ellos destruyeron la evidencia.",
        type: "question",
        time: "past"
      },
      {
        text: "He never _____ anything valuable.",
        answer: "destroy",
        spanishText: "Él nunca destruye nada valioso.",
        textHard: "She _____ all her old drawings.",
        answerHard: "destroy",
        spanishTextHard: "Ella no destruye todos sus dibujos viejos.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "BUY",
    sentences: [
      {
        text: "I will _____ a new car.",
        answer: "buy",
        spanishText: "Voy a comprar un carro nuevo.",
        textHard: "She _____ groceries every Saturday.",
        answerHard: "buys",
        spanishTextHard: "Ella compra víveres cada sábado.",
        type: "affirmation",
        time: "future"
      },
      {
        text: "Did you _____ that shirt?",
        answer: "buy",
        spanishText: "¿Compraste esa camisa?",
        textHard: "He _____ a house last year.",
        answerHard: "bought",
        spanishTextHard: "Él compró una casa el año pasado.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ expensive things.",
        answer: "buy",
        spanishText: "Él no compra cosas caras.",
        textHard: "They never _____ second-hand items.",
        answerHard: "buy",
        spanishTextHard: "Ellos nunca compran artículos de segunda mano.",
        type: "negation",
        time: "present"
      },
      {
        text: "She _____ her old bike.",
        answer: "sell",
        spanishText: "Ella vende su bicicleta vieja.",
        textHard: "He always _____ his paintings.",
        answerHard: "sells",
        spanishTextHard: "Él siempre vende sus pinturas.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why did you _____ the furniture?",
        answer: "sell",
        spanishText: "¿Por qué vendiste los muebles?",
        textHard: "They _____ their car for a good price.",
        answerHard: "sold",
        spanishTextHard: "Ellos vendieron su carro a un buen precio.",
        type: "question",
        time: "past"
      },
      {
        text: "He never _____ his collections.",
        answer: "sell",
        spanishText: "Él nunca vende sus colecciones.",
        textHard: "She _____ all her books online.",
        answerHard: "sell",
        spanishTextHard: "Ella no vende todos sus libros en línea.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "CATCH",
    sentences: [
      {
        text: "Can you _____ the ball?",
        answer: "catch",
        spanishText: "¿Puedes atrapar la pelota?",
        textHard: "She _____ the bus every morning.",
        answerHard: "catches",
        spanishTextHard: "Ella toma el autobús cada mañana.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the keys I threw?",
        answer: "catch",
        spanishText: "¿Atrapaste las llaves que tiré?",
        textHard: "He _____ a cold last week.",
        answerHard: "caught",
        spanishTextHard: "Él se resfriñó la semana pasada.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ anything I throw.",
        answer: "catch",
        spanishText: "Él no atrapa nada de lo que tiro.",
        textHard: "They never _____ the train on time.",
        answerHard: "catch",
        spanishTextHard: "Ellos nunca toman el tren a tiempo.",
        type: "negation",
        time: "present"
      },
      {
        text: "She _____ the paper into the bin.",
        answer: "throw",
        spanishText: "Ella tira el papel al basurero.",
        textHard: "He always _____ his clothes on the floor.",
        answerHard: "throws",
        spanishTextHard: "Él siempre tira su ropa al suelo.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why did you _____ the stone?",
        answer: "throw",
        spanishText: "¿Por qué tiraste la piedra?",
        textHard: "She _____ the ball to her friend.",
        answerHard: "threw",
        spanishTextHard: "Ella le lanzó la pelota a su amiga.",
        type: "question",
        time: "past"
      },
      {
        text: "He never _____ anything away.",
        answer: "throw",
        spanishText: "Él nunca tira nada.",
        textHard: "They _____ the old papers into the recycling bin.",
        answerHard: "throw",
        spanishTextHard: "Ellos no tiran los papeles viejos al reciclaje.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "COME",
    sentences: [
      {
        text: "Please _____ here at 5 PM.",
        answer: "come",
        spanishText: "Por favor ven aquí a las 5 PM.",
        textHard: "She _____ to visit every weekend.",
        answerHard: "comes",
        spanishTextHard: "Ella viene a visitar cada fin de semana.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ here by bus?",
        answer: "come",
        spanishText: "¿Viniste aquí en autobús?",
        textHard: "He _____ home late yesterday.",
        answerHard: "came",
        spanishTextHard: "Él llegó a casa tarde ayer.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ to meetings on time.",
        answer: "come",
        spanishText: "Él no viene a las reuniones a tiempo.",
        textHard: "They never _____ to the events early.",
        answerHard: "come",
        spanishTextHard: "Ellos nunca vienen a los eventos temprano.",
        type: "negation",
        time: "present"
      },
      {
        text: "She _____ to school every day.",
        answer: "go",
        spanishText: "Ella va a la escuela todos los días.",
        textHard: "He always _____ to the gym in the morning.",
        answerHard: "goes",
        spanishTextHard: "Él siempre va al gimnasio por la mañana.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why did you _____ there alone?",
        answer: "go",
        spanishText: "¿Por qué fuiste allá solo?",
        textHard: "She _____ to the market yesterday.",
        answerHard: "went",
        spanishTextHard: "Ella fue al mercado ayer.",
        type: "question",
        time: "past"
      },
      {
        text: "He never _____ to that place.",
        answer: "go",
        spanishText: "Él nunca va a ese lugar.",
        textHard: "They _____ to the park every Sunday.",
        answerHard: "go",
        spanishTextHard: "Ellos no van al parque todos los domingos.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "CONTINUE",
    sentences: [
      {
        text: "We will _____ our journey tomorrow.",
        answer: "continue",
        spanishText: "Continuaremos nuestro viaje mañana.",
        textHard: "She _____ working despite the difficulties.",
        answerHard: "continues",
        spanishTextHard: "Ella continúa trabajando a pesar de las dificultades.",
        type: "affirmation",
        time: "future"
      },
      {
        text: "Did you _____ reading the book?",
        answer: "continue",
        spanishText: "¿Continuaste leyendo el libro?",
        textHard: "He _____ his studies after the break.",
        answerHard: "continued",
        spanishTextHard: "Él continuó sus estudios después del descanso.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ his exercises.",
        answer: "continue",
        spanishText: "Él no continúa sus ejercicios.",
        textHard: "They never _____ the project after issues arise.",
        answerHard: "continue",
        spanishTextHard: "Ellos nunca continúan el proyecto cuando surgen problemas.",
        type: "negation",
        time: "present"
      },
      {
        text: "She _____ the car at the red light.",
        answer: "stop",
        spanishText: "Ella detiene el carro en el semáforo en rojo.",
        textHard: "He always _____ to think before acting.",
        answerHard: "stops",
        spanishTextHard: "Él siempre se detiene a pensar antes de actuar.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why did you _____ the music?",
        answer: "stop",
        spanishText: "¿Por qué detuviste la música?",
        textHard: "She _____ the machine during the emergency.",
        answerHard: "stopped",
        spanishTextHard: "Ella detuvo la máquina durante la emergencia.",
        type: "question",
        time: "past"
      },
      {
        text: "He never _____ working until late.",
        answer: "stop",
        spanishText: "Él nunca deja de trabajar hasta tarde.",
        textHard: "They _____ the process when it's completed.",
        answerHard: "stop",
        spanishTextHard: "Ellos no detienen el proceso cuando está terminado.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "CREATE",
    sentences: [
      {
        text: "She will _____ a new painting.",
        answer: "create",
        spanishText: "Ella creará una nueva pintura.",
        textHard: "He _____ beautiful sculptures.",
        answerHard: "creates",
        spanishTextHard: "Él crea hermosas esculturas.",
        type: "affirmation",
        time: "future"
      },
      {
        text: "Did you _____ this masterpiece?",
        answer: "create",
        spanishText: "¿Creaste esta obra maestra?",
        textHard: "She _____ a wonderful garden last year.",
        answerHard: "created",
        spanishTextHard: "Ella creó un jardín maravilloso el año pasado.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ anything new.",
        answer: "create",
        spanishText: "Él no crea nada nuevo.",
        textHard: "They never _____ without inspiration.",
        answerHard: "create",
        spanishTextHard: "Ellos nunca crean sin inspiración.",
        type: "negation",
        time: "present"
      },
      {
        text: "She _____ the old building.",
        answer: "destroy",
        spanishText: "Ella destruye el edificio viejo.",
        textHard: "He always _____ his old drafts.",
        answerHard: "destroys",
        spanishTextHard: "Él siempre destruye sus borradores viejos.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why did you _____ the evidence?",
        answer: "destroy",
        spanishText: "¿Por qué destruiste la evidencia?",
        textHard: "They _____ the old bridge last month.",
        answerHard: "destroyed",
        spanishTextHard: "Ellos destruyeron el puente viejo el mes pasado.",
        type: "question",
        time: "past"
      },
      {
        text: "He never _____ anything valuable.",
        answer: "destroy",
        spanishText: "Él nunca destruye nada valioso.",
        textHard: "She _____ all her old notes.",
        answerHard: "destroy",
        spanishTextHard: "Ella no destruye todos sus apuntes viejos.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "ENTER",
    sentences: [
      {
        text: "Please _____ through the front door.",
        answer: "enter",
        spanishText: "Por favor entra por la puerta principal.",
        textHard: "She _____ the room quietly.",
        answerHard: "enters",
        spanishTextHard: "Ella entra al cuarto en silencio.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the building?",
        answer: "enter",
        spanishText: "¿Entraste al edificio?",
        textHard: "He _____ the competition last year.",
        answerHard: "entered",
        spanishTextHard: "Él entró a la competencia el año pasado.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ without knocking.",
        answer: "enter",
        spanishText: "Él no entra sin tocar la puerta.",
        textHard: "They never _____ uninvited.",
        answerHard: "enter",
        spanishTextHard: "Ellos nunca entran sin invitación.",
        type: "negation",
        time: "present"
      },
      {
        text: "She _____ the room quickly.",
        answer: "exit",
        spanishText: "Ella sale del cuarto rápidamente.",
        textHard: "He always _____ through the back door.",
        answerHard: "exits",
        spanishTextHard: "Él siempre sale por la puerta trasera.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why did you _____ early?",
        answer: "exit",
        spanishText: "¿Por qué saliste temprano?",
        textHard: "She _____ the meeting before it ended.",
        answerHard: "exited",
        spanishTextHard: "Ella salió de la reunión antes de que terminara.",
        type: "question",
        time: "past"
      },
      {
        text: "He never _____ without saying goodbye.",
        answer: "exit",
        spanishText: "Él nunca sale sin decir adiós.",
        textHard: "They _____ the building during the fire drill.",
        answerHard: "exit",
        spanishTextHard: "Ellos no salen del edificio durante el simulacro de incendio.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "FIND",
    sentences: [
      {
        text: "I hope you can _____ your keys.",
        answer: "find",
        spanishText: "Espero que puedas encontrar tus llaves.",
        textHard: "She always _____ a solution to every problem.",
        answerHard: "finds",
        spanishTextHard: "Ella siempre encuentra una solución para cada problema.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ what you were looking for?",
        answer: "find",
        spanishText: "¿Encontraste lo que buscabas?",
        textHard: "He _____ his wallet under the couch.",
        answerHard: "found",
        spanishTextHard: "Él encontró su billetera debajo del sofá.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ anything in that messy room.",
        answer: "find",
        spanishText: "Él no encuentra nada en ese cuarto desordenado.",
        textHard: "They never _____ a parking spot here.",
        answerHard: "find",
        spanishTextHard: "Ellos nunca encuentran un lugar para estacionarse aquí.",
        type: "negation",
        time: "present"
      },
      {
        text: "Please don't _____ your ticket.",
        answer: "lose",
        spanishText: "Por favor no pierdas tu boleto.",
        textHard: "She always _____ her phone when she's in a hurry.",
        answerHard: "loses",
        spanishTextHard: "Ella siempre pierde su teléfono cuando tiene prisa.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the game last night?",
        answer: "lose",
        spanishText: "¿Perdiste el juego anoche?",
        textHard: "He _____ his keys on the way home.",
        answerHard: "lost",
        spanishTextHard: "Él perdió sus llaves camino a casa.",
        type: "question",
        time: "past"
      },
      {
        text: "She never _____ hope, no matter what.",
        answer: "lose",
        spanishText: "Ella nunca pierde la esperanza, pase lo que pase.",
        textHard: "They _____ track of time during the meeting.",
        answerHard: "lose",
        spanishTextHard: "Ellos no pierden el hilo del tiempo durante la reunión.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "FIX",
    sentences: [
      {
        text: "Can you _____ this broken chair?",
        answer: "fix",
        spanishText: "¿Puedes arreglar esta silla rota?",
        textHard: "He _____ cars in his spare time.",
        answerHard: "fixes",
        spanishTextHard: "Él arregla carros en su tiempo libre.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the leaking pipe?",
        answer: "fix",
        spanishText: "¿Arreglaste la tubería que goteaba?",
        textHard: "She _____ the computer before the meeting.",
        answerHard: "fixed",
        spanishTextHard: "Ella arregló el computador antes de la reunión.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ things properly.",
        answer: "fix",
        spanishText: "Él no arregla las cosas correctamente.",
        textHard: "They never _____ the issues in time.",
        answerHard: "fix",
        spanishTextHard: "Ellos nunca solucionan los problemas a tiempo.",
        type: "negation",
        time: "present"
      },
      {
        text: "Be careful not to _____ the vase.",
        answer: "break",
        spanishText: "Ten cuidado de no romper el jarrón.",
        textHard: "He always _____ the rules at school.",
        answerHard: "breaks",
        spanishTextHard: "Él siempre rompe las reglas en la escuela.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the window accidentally?",
        answer: "break",
        spanishText: "¿Rompiste la ventana accidentalmente?",
        textHard: "She _____ her arm during the fall.",
        answerHard: "broke",
        spanishTextHard: "Ella se rompió el brazo durante la caída.",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ her promises.",
        answer: "break",
        spanishText: "Ella no rompe sus promesas.",
        textHard: "They never _____ the equipment intentionally.",
        answerHard: "break",
        spanishTextHard: "Ellos nunca rompen el equipo intencionalmente.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "FOLLOW",
    sentences: [
      {
        text: "Please _____ the instructions carefully.",
        answer: "follow",
        spanishText: "Por favor sigue las instrucciones cuidadosamente.",
        textHard: "She _____ the recipe step by step.",
        answerHard: "follows",
        spanishTextHard: "Ella sigue la receta paso a paso.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the map to get here?",
        answer: "follow",
        spanishText: "¿Seguiste el mapa para llegar aquí?",
        textHard: "He _____ the guide through the forest.",
        answerHard: "followed",
        spanishTextHard: "Él siguió al guía a través del bosque.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ orders from anyone.",
        answer: "follow",
        spanishText: "Él no sigue órdenes de nadie.",
        textHard: "They never _____ safety procedures.",
        answerHard: "follow",
        spanishTextHard: "Ellos nunca siguen los procedimientos de seguridad.",
        type: "negation",
        time: "present"
      },
      {
        text: "She will _____ the team during the project.",
        answer: "lead",
        spanishText: "Ella liderará al equipo durante el proyecto.",
        textHard: "He _____ the group on every expedition.",
        answerHard: "leads",
        spanishTextHard: "Él lidera al grupo en cada expedición.",
        type: "affirmation",
        time: "future"
      },
      {
        text: "Did you _____ the discussion yesterday?",
        answer: "lead",
        spanishText: "¿Dirigiste la discusión ayer?",
        textHard: "She _____ the team to victory last season.",
        answerHard: "led",
        spanishTextHard: "Ella llevó al equipo a la victoria la temporada pasada.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ by example.",
        answer: "lead",
        spanishText: "Él no lidera con el ejemplo.",
        textHard: "They never _____ the meetings effectively.",
        answerHard: "lead",
        spanishTextHard: "Ellos nunca dirigen las reuniones de manera efectiva.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "GIVE",
    sentences: [
      {
        text: "Please _____ me the book.",
        answer: "give",
        spanishText: "Por favor dame el libro.",
        textHard: "She _____ advice to everyone who asks.",
        answerHard: "gives",
        spanishTextHard: "Ella da consejos a todos los que lo piden.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ him the money?",
        answer: "give",
        spanishText: "¿Le diste el dinero?",
        textHard: "He _____ her flowers on her birthday.",
        answerHard: "gave",
        spanishTextHard: "Él le dio flores en su cumpleaños.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ compliments easily.",
        answer: "give",
        spanishText: "Él no da cumplidos fácilmente.",
        textHard: "They never _____ up without a fight.",
        answerHard: "give",
        spanishTextHard: "Ellos nunca se rinden sin pelear.",
        type: "negation",
        time: "present"
      },
      {
        text: "Don't _____ the last piece of cake!",
        answer: "take",
        spanishText: "¡No tomes el último trozo de pastel!",
        textHard: "She always _____ the longest route home.",
        answerHard: "takes",
        spanishTextHard: "Ella siempre toma el camino más largo a casa.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ my umbrella by mistake?",
        answer: "take",
        spanishText: "¿Tomaste mi paraguas por error?",
        textHard: "He _____ the wrong bus this morning.",
        answerHard: "took",
        spanishTextHard: "Él tomó el autobús equivocado esta mañana.",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ things without asking.",
        answer: "take",
        spanishText: "Ella no toma cosas sin pedir permiso.",
        textHard: "They never _____ shortcuts on important projects.",
        answerHard: "take",
        spanishTextHard: "Ellos nunca toman atajos en proyectos importantes.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "GROW",
    sentences: [
      {
        text: "Plants need water to _____.",
        answer: "grow",
        spanishText: "Las plantas necesitan agua para crecer.",
        textHard: "This company _____ every year.",
        answerHard: "grows",
        spanishTextHard: "Esta empresa crece cada año.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did your business _____ last year?",
        answer: "grow",
        spanishText: "¿Creció tu negocio el año pasado?",
        textHard: "She _____ her hair very long.",
        answerHard: "grew",
        spanishTextHard: "Ella dejó crecer su cabello muy largo.",
        type: "question",
        time: "past"
      },
      {
        text: "These flowers don't _____ in cold weather.",
        answer: "grow",
        spanishText: "Estas flores no crecen en clima frío.",
        textHard: "They never _____ tired of learning.",
        answerHard: "grow",
        spanishTextHard: "Ellos nunca se cansan de aprender.",
        type: "negation",
        time: "present"
      },
      {
        text: "Hot water will _____ the fabric.",
        answer: "shrink",
        spanishText: "El agua caliente encoge la tela.",
        textHard: "The economy _____ during a recession.",
        answerHard: "shrinks",
        spanishTextHard: "La economía se contrae durante una recesión.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did your shirt _____ in the dryer?",
        answer: "shrink",
        spanishText: "¿Se encogió tu camisa en la secadora?",
        textHard: "The budget _____ after the cuts.",
        answerHard: "shrank",
        spanishTextHard: "El presupuesto se redujo después de los recortes.",
        type: "question",
        time: "past"
      },
      {
        text: "This material doesn't _____ when washed.",
        answer: "shrink",
        spanishText: "Este material no se encoge al lavarse.",
        textHard: "They never _____ from their responsibilities.",
        answerHard: "shrink",
        spanishTextHard: "Ellos nunca rehuyen sus responsabilidades.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "HELP",
    sentences: [
      {
        text: "Can you _____ me with this task?",
        answer: "help",
        spanishText: "¿Puedes ayudarme con esta tarea?",
        textHard: "She _____ her neighbors whenever they need it.",
        answerHard: "helps",
        spanishTextHard: "Ella ayuda a sus vecinos cuando lo necesitan.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ him move the furniture?",
        answer: "help",
        spanishText: "¿Lo ayudaste a mover los muebles?",
        textHard: "He _____ the lost child find her parents.",
        answerHard: "helped",
        spanishTextHard: "Él ayudó a la niña perdida a encontrar a sus padres.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ unless you ask twice.",
        answer: "help",
        spanishText: "Él no ayuda a menos que se lo pidas dos veces.",
        textHard: "They never _____ without expecting something in return.",
        answerHard: "help",
        spanishTextHard: "Ellos nunca ayudan sin esperar algo a cambio.",
        type: "negation",
        time: "present"
      },
      {
        text: "Please don't _____ her feelings.",
        answer: "ignore",
        spanishText: "Por favor no ignores sus sentimientos.",
        textHard: "He always _____ the warning signs.",
        answerHard: "ignores",
        spanishTextHard: "Él siempre ignora las señales de advertencia.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ his calls on purpose?",
        answer: "ignore",
        spanishText: "¿Ignoraste sus llamadas a propósito?",
        textHard: "She _____ all the advice she was given.",
        answerHard: "ignored",
        spanishTextHard: "Ella ignoró todos los consejos que le dieron.",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ her responsibilities.",
        answer: "ignore",
        spanishText: "Ella no ignora sus responsabilidades.",
        textHard: "They never _____ safety rules at work.",
        answerHard: "ignore",
        spanishTextHard: "Ellos nunca ignoran las normas de seguridad en el trabajo.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "HIDE",
    sentences: [
      {
        text: "Where did you _____ the gift?",
        answer: "hide",
        spanishText: "¿Dónde escondiste el regalo?",
        textHard: "She always _____ her feelings from others.",
        answerHard: "hides",
        spanishTextHard: "Ella siempre esconde sus sentimientos de los demás.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the surprise for the party?",
        answer: "hide",
        spanishText: "¿Escondiste la sorpresa para la fiesta?",
        textHard: "He _____ the documents in a safe place.",
        answerHard: "hid",
        spanishTextHard: "Él escondió los documentos en un lugar seguro.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ his emotions well.",
        answer: "hide",
        spanishText: "Él no esconde bien sus emociones.",
        textHard: "They never _____ the truth from their friends.",
        answerHard: "hide",
        spanishTextHard: "Ellos nunca le ocultan la verdad a sus amigos.",
        type: "negation",
        time: "present"
      },
      {
        text: "Can you _____ me how it works?",
        answer: "show",
        spanishText: "¿Puedes mostrarme cómo funciona?",
        textHard: "She _____ great passion in everything she does.",
        answerHard: "shows",
        spanishTextHard: "Ella muestra gran pasión en todo lo que hace.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ him around the office?",
        answer: "show",
        spanishText: "¿Le mostraste la oficina?",
        textHard: "He _____ everyone his new invention.",
        answerHard: "showed",
        spanishTextHard: "Él le mostró a todos su nuevo invento.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ his work to anyone.",
        answer: "show",
        spanishText: "Él no muestra su trabajo a nadie.",
        textHard: "They never _____ up on time.",
        answerHard: "show",
        spanishTextHard: "Ellos nunca aparecen a tiempo.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "IMPROVE",
    sentences: [
      {
        text: "You need to _____ your writing skills.",
        answer: "improve",
        spanishText: "Necesitas mejorar tus habilidades de escritura.",
        textHard: "She constantly _____ her technique.",
        answerHard: "improves",
        spanishTextHard: "Ella mejora constantemente su técnica.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did your grades _____ this semester?",
        answer: "improve",
        spanishText: "¿Mejoraron tus calificaciones este semestre?",
        textHard: "He _____ his performance after training.",
        answerHard: "improved",
        spanishTextHard: "Él mejoró su rendimiento después del entrenamiento.",
        type: "question",
        time: "past"
      },
      {
        text: "The situation doesn't _____ overnight.",
        answer: "improve",
        spanishText: "La situación no mejora de la noche a la mañana.",
        textHard: "They never _____ their habits.",
        answerHard: "improve",
        spanishTextHard: "Ellos nunca mejoran sus hábitos.",
        type: "negation",
        time: "present"
      },
      {
        text: "Stress can _____ your health.",
        answer: "worsen",
        spanishText: "El estrés puede empeorar tu salud.",
        textHard: "The traffic always _____ at rush hour.",
        answerHard: "worsens",
        spanishTextHard: "El tráfico siempre empeora en la hora pico.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did the weather _____ after the storm?",
        answer: "worsen",
        spanishText: "¿Empeoró el clima después de la tormenta?",
        textHard: "His condition _____ over the weekend.",
        answerHard: "worsened",
        spanishTextHard: "Su condición empeoró durante el fin de semana.",
        type: "question",
        time: "past"
      },
      {
        text: "The symptoms don't _____ with this medicine.",
        answer: "worsen",
        spanishText: "Los síntomas no empeoran con esta medicina.",
        textHard: "Things never _____ when you stay calm.",
        answerHard: "worsen",
        spanishTextHard: "Las cosas nunca empeoran cuando te mantienes tranquilo.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "INCREASE",
    sentences: [
      {
        text: "We need to _____ our production.",
        answer: "increase",
        spanishText: "Necesitamos aumentar nuestra producción.",
        textHard: "The price _____ every year.",
        answerHard: "increases",
        spanishTextHard: "El precio aumenta cada año.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did they _____ your salary?",
        answer: "increase",
        spanishText: "¿Te aumentaron el salario?",
        textHard: "The company _____ its profits last quarter.",
        answerHard: "increased",
        spanishTextHard: "La empresa aumentó sus ganancias el trimestre pasado.",
        type: "question",
        time: "past"
      },
      {
        text: "The temperature doesn't _____ at night.",
        answer: "increase",
        spanishText: "La temperatura no aumenta en la noche.",
        textHard: "They never _____ the budget for training.",
        answerHard: "increase",
        spanishTextHard: "Ellos nunca aumentan el presupuesto para capacitación.",
        type: "negation",
        time: "present"
      },
      {
        text: "They plan to _____ the workforce.",
        answer: "decrease",
        spanishText: "Ellos planean reducir la fuerza laboral.",
        textHard: "Exercise _____ stress levels significantly.",
        answerHard: "decreases",
        spanishTextHard: "El ejercicio reduce los niveles de estrés significativamente.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did the noise _____ after midnight?",
        answer: "decrease",
        spanishText: "¿Disminuyó el ruido después de medianoche?",
        textHard: "Sales _____ during the winter months.",
        answerHard: "decreased",
        spanishTextHard: "Las ventas disminuyeron durante los meses de invierno.",
        type: "question",
        time: "past"
      },
      {
        text: "The demand doesn't _____ during holidays.",
        answer: "decrease",
        spanishText: "La demanda no disminuye durante las fiestas.",
        textHard: "Prices never _____ in that store.",
        answerHard: "decrease",
        spanishTextHard: "Los precios nunca bajan en esa tienda.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "LAUGH",
    sentences: [
      {
        text: "That joke will make you _____.",
        answer: "laugh",
        spanishText: "Ese chiste te hará reír.",
        textHard: "She _____ at every joke he tells.",
        answerHard: "laughs",
        spanishTextHard: "Ella se ríe de cada chiste que él cuenta.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ at the movie?",
        answer: "laugh",
        spanishText: "¿Te reíste con la película?",
        textHard: "He _____ so hard he cried.",
        answerHard: "laughed",
        spanishTextHard: "Él se rió tan fuerte que lloró.",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ at rude jokes.",
        answer: "laugh",
        spanishText: "Ella no se ríe de los chistes groseros.",
        textHard: "They never _____ at others' mistakes.",
        answerHard: "laugh",
        spanishTextHard: "Ellos nunca se ríen de los errores de los demás.",
        type: "negation",
        time: "present"
      },
      {
        text: "It's okay to _____ when you feel sad.",
        answer: "cry",
        spanishText: "Está bien llorar cuando te sientes triste.",
        textHard: "She _____ whenever she watches sad movies.",
        answerHard: "cries",
        spanishTextHard: "Ella llora cada vez que ve películas tristes.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ during the funeral?",
        answer: "cry",
        spanishText: "¿Lloraste durante el funeral?",
        textHard: "He _____ when he heard the bad news.",
        answerHard: "cried",
        spanishTextHard: "Él lloró cuando escuchó las malas noticias.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ in public.",
        answer: "cry",
        spanishText: "Él no llora en público.",
        textHard: "They never _____ over small problems.",
        answerHard: "cry",
        spanishTextHard: "Ellos nunca lloran por problemas pequeños.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "LIKE",
    sentences: [
      {
        text: "Do you _____ spicy food?",
        answer: "like",
        spanishText: "¿Te gusta la comida picante?",
        textHard: "She _____ reading books before bed.",
        answerHard: "likes",
        spanishTextHard: "A ella le gusta leer libros antes de dormir.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the new restaurant?",
        answer: "like",
        spanishText: "¿Te gustó el nuevo restaurante?",
        textHard: "He _____ the movie a lot.",
        answerHard: "liked",
        spanishTextHard: "A él le gustó mucho la película.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ crowded places.",
        answer: "like",
        spanishText: "A él no le gustan los lugares llenos de gente.",
        textHard: "They never _____ waiting in long lines.",
        answerHard: "like",
        spanishTextHard: "A ellos nunca les gusta hacer largas filas.",
        type: "negation",
        time: "present"
      },
      {
        text: "I tend to _____ rainy days.",
        answer: "dislike",
        spanishText: "Tiendo a no gustarme los días lluviosos.",
        textHard: "She _____ any kind of confrontation.",
        answerHard: "dislikes",
        spanishTextHard: "A ella no le gusta ningún tipo de confrontación.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the presentation?",
        answer: "dislike",
        spanishText: "¿No te gustó la presentación?",
        textHard: "He _____ the idea from the beginning.",
        answerHard: "disliked",
        spanishTextHard: "A él no le gustó la idea desde el principio.",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ anyone without reason.",
        answer: "dislike",
        spanishText: "Ella no le tiene antipatía a nadie sin razón.",
        textHard: "They never _____ a colleague openly.",
        answerHard: "dislike",
        spanishTextHard: "Ellos nunca muestran antipatía abiertamente hacia un colega.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "LOVE",
    sentences: [
      {
        text: "I _____ spending time with my family.",
        answer: "love",
        spanishText: "Me encanta pasar tiempo con mi familia.",
        textHard: "She _____ cooking for her friends.",
        answerHard: "loves",
        spanishTextHard: "A ella le encanta cocinar para sus amigos.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the trip to the mountains?",
        answer: "love",
        spanishText: "¿Te encantó el viaje a las montañas?",
        textHard: "He _____ that song the first time he heard it.",
        answerHard: "loved",
        spanishTextHard: "A él le encantó esa canción la primera vez que la escuchó.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ being the center of attention.",
        answer: "love",
        spanishText: "A él no le gusta ser el centro de atención.",
        textHard: "They never _____ working overtime.",
        answerHard: "love",
        spanishTextHard: "A ellos nunca les gusta trabajar horas extras.",
        type: "negation",
        time: "present"
      },
      {
        text: "It's hard to _____ someone who lies.",
        answer: "hate",
        spanishText: "Es difícil odiar a alguien que miente.",
        textHard: "She _____ waking up early on weekends.",
        answerHard: "hates",
        spanishTextHard: "Ella odia levantarse temprano los fines de semana.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ living in that city?",
        answer: "hate",
        spanishText: "¿Odiaste vivir en esa ciudad?",
        textHard: "He _____ the cold weather last winter.",
        answerHard: "hated",
        spanishTextHard: "Él odió el clima frío el invierno pasado.",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ anyone truly.",
        answer: "hate",
        spanishText: "Ella realmente no odia a nadie.",
        textHard: "They never _____ each other despite disagreements.",
        answerHard: "hate",
        spanishTextHard: "Ellos nunca se odian a pesar de los desacuerdos.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "MOVE",
    sentences: [
      {
        text: "We need to _____ the furniture.",
        answer: "move",
        spanishText: "Necesitamos mover los muebles.",
        textHard: "She _____ gracefully across the dance floor.",
        answerHard: "moves",
        spanishTextHard: "Ella se mueve con gracia por la pista de baile.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ to a new apartment?",
        answer: "move",
        spanishText: "¿Te mudaste a un nuevo apartamento?",
        textHard: "He _____ all the boxes by himself.",
        answerHard: "moved",
        spanishTextHard: "Él movió todas las cajas solo.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ very fast.",
        answer: "move",
        spanishText: "Él no se mueve muy rápido.",
        textHard: "They never _____ without a plan.",
        answerHard: "move",
        spanishTextHard: "Ellos nunca se mueven sin un plan.",
        type: "negation",
        time: "present"
      },
      {
        text: "Please _____ here and enjoy the view.",
        answer: "stay",
        spanishText: "Por favor quédate aquí y disfruta la vista.",
        textHard: "She always _____ calm in difficult situations.",
        answerHard: "stays",
        spanishTextHard: "Ella siempre se mantiene tranquila en situaciones difíciles.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ at the hotel for a week?",
        answer: "stay",
        spanishText: "¿Te quedaste en el hotel una semana?",
        textHard: "He _____ late to finish the report.",
        answerHard: "stayed",
        spanishTextHard: "Él se quedó tarde para terminar el informe.",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ in one place for long.",
        answer: "stay",
        spanishText: "Ella no se queda en un lugar por mucho tiempo.",
        textHard: "They never _____ quiet during arguments.",
        answerHard: "stay",
        spanishTextHard: "Ellos nunca se quedan callados durante las discusiones.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "OPEN",
    sentences: [
      {
        text: "Can you _____ the window, please?",
        answer: "open",
        spanishText: "¿Puedes abrir la ventana, por favor?",
        textHard: "She _____ the store every morning at 8.",
        answerHard: "opens",
        spanishTextHard: "Ella abre la tienda cada mañana a las 8.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the letter I sent?",
        answer: "open",
        spanishText: "¿Abriste la carta que te envié?",
        textHard: "He _____ the package as soon as it arrived.",
        answerHard: "opened",
        spanishTextHard: "Él abrió el paquete en cuanto llegó.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ up to strangers easily.",
        answer: "open",
        spanishText: "Él no se abre fácilmente con extraños.",
        textHard: "They never _____ the office on weekends.",
        answerHard: "open",
        spanishTextHard: "Ellos nunca abren la oficina los fines de semana.",
        type: "negation",
        time: "present"
      },
      {
        text: "Please _____ the door when you leave.",
        answer: "close",
        spanishText: "Por favor cierra la puerta cuando te vayas.",
        textHard: "She always _____ the curtains before sleeping.",
        answerHard: "closes",
        spanishTextHard: "Ella siempre cierra las cortinas antes de dormir.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the account at the bank?",
        answer: "close",
        spanishText: "¿Cerraste la cuenta en el banco?",
        textHard: "He _____ the meeting without any conclusions.",
        answerHard: "closed",
        spanishTextHard: "Él cerró la reunión sin ninguna conclusión.",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ her eyes to injustice.",
        answer: "close",
        spanishText: "Ella no cierra los ojos ante la injusticia.",
        textHard: "They never _____ the shop before 9 PM.",
        answerHard: "close",
        spanishTextHard: "Ellos nunca cierran la tienda antes de las 9 PM.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "PASS",
    sentences: [
      {
        text: "I need to _____ this exam.",
        answer: "pass",
        spanishText: "Necesito pasar este examen.",
        textHard: "She _____ every test without much effort.",
        answerHard: "passes",
        spanishTextHard: "Ella pasa cada prueba sin mucho esfuerzo.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ your driving test?",
        answer: "pass",
        spanishText: "¿Pasaste tu examen de manejo?",
        textHard: "He _____ the final exam with a high score.",
        answerHard: "passed",
        spanishTextHard: "Él pasó el examen final con una puntuación alta.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ subjects he doesn't study.",
        answer: "pass",
        spanishText: "Él no aprueba materias que no estudia.",
        textHard: "They never _____ a chance to improve.",
        answerHard: "pass",
        spanishTextHard: "Ellos nunca dejan pasar una oportunidad de mejorar.",
        type: "negation",
        time: "present"
      },
      {
        text: "It's hard to _____ when you try your best.",
        answer: "fail",
        spanishText: "Es difícil fallar cuando das lo mejor de ti.",
        textHard: "He rarely _____ when he prepares well.",
        answerHard: "fails",
        spanishTextHard: "Él raramente falla cuando se prepara bien.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the job interview?",
        answer: "fail",
        spanishText: "¿Fallaste en la entrevista de trabajo?",
        textHard: "She _____ the course because she missed classes.",
        answerHard: "failed",
        spanishTextHard: "Ella reprobó el curso porque faltó a clases.",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ her clients.",
        answer: "fail",
        spanishText: "Ella no falla a sus clientes.",
        textHard: "They never _____ to meet their deadlines.",
        answerHard: "fail",
        spanishTextHard: "Ellos nunca dejan de cumplir sus plazos.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "PUSH",
    sentences: [
      {
        text: "You have to _____ the door to open it.",
        answer: "push",
        spanishText: "Tienes que empujar la puerta para abrirla.",
        textHard: "She always _____ herself to do better.",
        answerHard: "pushes",
        spanishTextHard: "Ella siempre se exige a sí misma para hacerlo mejor.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the cart down the aisle?",
        answer: "push",
        spanishText: "¿Empujaste el carrito por el pasillo?",
        textHard: "He _____ the heavy box across the room.",
        answerHard: "pushed",
        spanishTextHard: "Él empujó la caja pesada por el cuarto.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ people around.",
        answer: "push",
        spanishText: "Él no empuja a la gente.",
        textHard: "They never _____ each other during games.",
        answerHard: "push",
        spanishTextHard: "Ellos nunca se empujan entre sí durante los juegos.",
        type: "negation",
        time: "present"
      },
      {
        text: "Can you _____ me closer to the shore?",
        answer: "pull",
        spanishText: "¿Puedes jalarme más cerca de la orilla?",
        textHard: "She always _____ the door instead of pushing.",
        answerHard: "pulls",
        spanishTextHard: "Ella siempre jala la puerta en vez de empujarla.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the rope in the contest?",
        answer: "pull",
        spanishText: "¿Jalaste la cuerda en el concurso?",
        textHard: "He _____ the curtains open to let in the light.",
        answerHard: "pulled",
        spanishTextHard: "Él jaló las cortinas para dejar entrar la luz.",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ the dog too hard.",
        answer: "pull",
        spanishText: "Ella no jala al perro con demasiada fuerza.",
        textHard: "They never _____ more weight than necessary.",
        answerHard: "pull",
        spanishTextHard: "Ellos nunca jalan más peso del necesario.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "REMEMBER",
    sentences: [
      {
        text: "Try to _____ where you put the keys.",
        answer: "remember",
        spanishText: "Trata de recordar dónde pusiste las llaves.",
        textHard: "She always _____ everyone's birthdays.",
        answerHard: "remembers",
        spanishTextHard: "Ella siempre recuerda los cumpleaños de todos.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ to call your mom?",
        answer: "remember",
        spanishText: "¿Recordaste llamar a tu mamá?",
        textHard: "He _____ every detail of that day.",
        answerHard: "remembered",
        spanishTextHard: "Él recordó cada detalle de ese día.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ faces very well.",
        answer: "remember",
        spanishText: "Él no recuerda muy bien las caras.",
        textHard: "They never _____ to lock the door.",
        answerHard: "remember",
        spanishTextHard: "Ellos nunca recuerdan cerrar la puerta con llave.",
        type: "negation",
        time: "present"
      },
      {
        text: "It's easy to _____ when you're busy.",
        answer: "forget",
        spanishText: "Es fácil olvidar cuando estás ocupado.",
        textHard: "She always _____ her umbrella on rainy days.",
        answerHard: "forgets",
        spanishTextHard: "Ella siempre olvida su paraguas los días lluviosos.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ to buy milk?",
        answer: "forget",
        spanishText: "¿Olvidaste comprar leche?",
        textHard: "He _____ the meeting and missed it completely.",
        answerHard: "forgot",
        spanishTextHard: "Él olvidó la reunión y la perdió por completo.",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ a face she's seen before.",
        answer: "forget",
        spanishText: "Ella no olvida una cara que ha visto antes.",
        textHard: "They never _____ how hard the journey was.",
        answerHard: "forget",
        spanishTextHard: "Ellos nunca olvidan lo difícil que fue el camino.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "SAVE",
    sentences: [
      {
        text: "You should _____ money for the future.",
        answer: "save",
        spanishText: "Deberías ahorrar dinero para el futuro.",
        textHard: "She _____ a portion of her salary every month.",
        answerHard: "saves",
        spanishTextHard: "Ella ahorra una parte de su salario cada mes.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the file before closing?",
        answer: "save",
        spanishText: "¿Guardaste el archivo antes de cerrarlo?",
        textHard: "He _____ enough money to buy a car.",
        answerHard: "saved",
        spanishTextHard: "Él ahorró suficiente dinero para comprar un carro.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ anything for emergencies.",
        answer: "save",
        spanishText: "Él no ahorra nada para emergencias.",
        textHard: "They never _____ their work on time.",
        answerHard: "save",
        spanishTextHard: "Ellos nunca guardan su trabajo a tiempo.",
        type: "negation",
        time: "present"
      },
      {
        text: "Try not to _____ all your savings at once.",
        answer: "spend",
        spanishText: "Trata de no gastar todos tus ahorros de una vez.",
        textHard: "She _____ too much money on clothes.",
        answerHard: "spends",
        spanishTextHard: "Ella gasta demasiado dinero en ropa.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the whole budget?",
        answer: "spend",
        spanishText: "¿Gastaste todo el presupuesto?",
        textHard: "He _____ all his savings on the vacation.",
        answerHard: "spent",
        spanishTextHard: "Él gastó todos sus ahorros en las vacaciones.",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ money on unnecessary things.",
        answer: "spend",
        spanishText: "Ella no gasta dinero en cosas innecesarias.",
        textHard: "They never _____ more than they earn.",
        answerHard: "spend",
        spanishTextHard: "Ellos nunca gastan más de lo que ganan.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "SEND",
    sentences: [
      {
        text: "Please _____ me the report.",
        answer: "send",
        spanishText: "Por favor envíame el informe.",
        textHard: "She _____ emails every morning.",
        answerHard: "sends",
        spanishTextHard: "Ella envía correos electrónicos cada mañana.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the invitation?",
        answer: "send",
        spanishText: "¿Enviaste la invitación?",
        textHard: "He _____ a package to his family last week.",
        answerHard: "sent",
        spanishTextHard: "Él le envió un paquete a su familia la semana pasada.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ messages without thinking first.",
        answer: "send",
        spanishText: "Él no envía mensajes sin pensar primero.",
        textHard: "They never _____ confidential information by email.",
        answerHard: "send",
        spanishTextHard: "Ellos nunca envían información confidencial por correo.",
        type: "negation",
        time: "present"
      },
      {
        text: "I expect to _____ good news soon.",
        answer: "receive",
        spanishText: "Espero recibir buenas noticias pronto.",
        textHard: "She _____ a lot of compliments on her work.",
        answerHard: "receives",
        spanishTextHard: "Ella recibe muchos cumplidos por su trabajo.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the package I sent?",
        answer: "receive",
        spanishText: "¿Recibiste el paquete que te envié?",
        textHard: "He _____ an award for his performance.",
        answerHard: "received",
        spanishTextHard: "Él recibió un premio por su desempeño.",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ calls from unknown numbers.",
        answer: "receive",
        spanishText: "Ella no recibe llamadas de números desconocidos.",
        textHard: "They never _____ feedback on their proposals.",
        answerHard: "receive",
        spanishTextHard: "Ellos nunca reciben retroalimentación sobre sus propuestas.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "START",
    sentences: [
      {
        text: "Let's _____ the meeting now.",
        answer: "start",
        spanishText: "Empecemos la reunión ahora.",
        textHard: "She always _____ her day with exercise.",
        answerHard: "starts",
        spanishTextHard: "Ella siempre empieza su día con ejercicio.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the new project yet?",
        answer: "start",
        spanishText: "¿Ya empezaste el nuevo proyecto?",
        textHard: "He _____ the engine and drove away.",
        answerHard: "started",
        spanishTextHard: "Él arrancó el motor y se fue.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ tasks without a plan.",
        answer: "start",
        spanishText: "Él no empieza tareas sin un plan.",
        textHard: "They never _____ anything they can't complete.",
        answerHard: "start",
        spanishTextHard: "Ellos nunca empiezan nada que no puedan terminar.",
        type: "negation",
        time: "present"
      },
      {
        text: "You need to _____ the report by Friday.",
        answer: "finish",
        spanishText: "Necesitas terminar el informe antes del viernes.",
        textHard: "She always _____ what she starts.",
        answerHard: "finishes",
        spanishTextHard: "Ella siempre termina lo que empieza.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ reading the book?",
        answer: "finish",
        spanishText: "¿Terminaste de leer el libro?",
        textHard: "He _____ the project ahead of schedule.",
        answerHard: "finished",
        spanishTextHard: "Él terminó el proyecto antes de lo previsto.",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ her food.",
        answer: "finish",
        spanishText: "Ella no termina su comida.",
        textHard: "They never _____ their assignments on time.",
        answerHard: "finish",
        spanishTextHard: "Ellos nunca terminan sus tareas a tiempo.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "TEACH",
    sentences: [
      {
        text: "She wants to _____ English abroad.",
        answer: "teach",
        spanishText: "Ella quiere enseñar inglés en el extranjero.",
        textHard: "He _____ math at the local school.",
        answerHard: "teaches",
        spanishTextHard: "Él enseña matemáticas en la escuela local.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ her how to cook?",
        answer: "teach",
        spanishText: "¿Le enseñaste a cocinar?",
        textHard: "She _____ the class about climate change.",
        answerHard: "taught",
        spanishTextHard: "Ella le enseñó a la clase sobre el cambio climático.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ unless he's well-prepared.",
        answer: "teach",
        spanishText: "Él no enseña a menos que esté bien preparado.",
        textHard: "They never _____ without interactive activities.",
        answerHard: "teach",
        spanishTextHard: "Ellos nunca enseñan sin actividades interactivas.",
        type: "negation",
        time: "present"
      },
      {
        text: "It's never too late to _____.",
        answer: "learn",
        spanishText: "Nunca es demasiado tarde para aprender.",
        textHard: "She _____ something new every single day.",
        answerHard: "learns",
        spanishTextHard: "Ella aprende algo nuevo todos los días.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ how to play the guitar?",
        answer: "learn",
        spanishText: "¿Aprendiste a tocar la guitarra?",
        textHard: "He _____ three languages before he was eighteen.",
        answerHard: "learned",
        spanishTextHard: "Él aprendió tres idiomas antes de cumplir dieciocho años.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ from his mistakes.",
        answer: "learn",
        spanishText: "Él no aprende de sus errores.",
        textHard: "They never _____ new skills on their own.",
        answerHard: "learn",
        spanishTextHard: "Ellos nunca aprenden nuevas habilidades por su cuenta.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "TRY",
    sentences: [
      {
        text: "You should _____ the new dish.",
        answer: "try",
        spanishText: "Deberías probar el nuevo plato.",
        textHard: "She always _____ to help others.",
        answerHard: "tries",
        spanishTextHard: "Ella siempre intenta ayudar a los demás.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ to call him?",
        answer: "try",
        spanishText: "¿Intentaste llamarlo?",
        textHard: "He _____ his best but still failed.",
        answerHard: "tried",
        spanishTextHard: "Él lo intentó lo mejor que pudo pero aun así falló.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ new things often.",
        answer: "try",
        spanishText: "Él no prueba cosas nuevas con frecuencia.",
        textHard: "They never _____ to understand each other.",
        answerHard: "try",
        spanishTextHard: "Ellos nunca intentan entenderse.",
        type: "negation",
        time: "present"
      },
      {
        text: "Don't _____ now, you're almost there.",
        answer: "quit",
        spanishText: "No te rindas ahora, ya casi llegas.",
        textHard: "She rarely _____ when things get tough.",
        answerHard: "quits",
        spanishTextHard: "Ella raramente se rinde cuando las cosas se ponen difíciles.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ your job?",
        answer: "quit",
        spanishText: "¿Renunciaste a tu trabajo?",
        textHard: "He _____ the team after the argument.",
        answerHard: "quit",
        spanishTextHard: "Él abandonó el equipo después de la discusión.",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ easily.",
        answer: "quit",
        spanishText: "Ella no se rinde fácilmente.",
        textHard: "They never _____ before finishing what they start.",
        answerHard: "quit",
        spanishTextHard: "Ellos nunca se rinden antes de terminar lo que empiezan.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "WIN",
    sentences: [
      {
        text: "Our team is going to _____!",
        answer: "win",
        spanishText: "¡Nuestro equipo va a ganar!",
        textHard: "She _____ every competition she enters.",
        answerHard: "wins",
        spanishTextHard: "Ella gana cada competencia en la que participa.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the chess tournament?",
        answer: "win",
        spanishText: "¿Ganaste el torneo de ajedrez?",
        textHard: "He _____ the race by a wide margin.",
        answerHard: "won",
        spanishTextHard: "Él ganó la carrera por un amplio margen.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ without practicing hard.",
        answer: "win",
        spanishText: "Él no gana sin practicar mucho.",
        textHard: "They never _____ when they don't work as a team.",
        answerHard: "win",
        spanishTextHard: "Ellos nunca ganan cuando no trabajan en equipo.",
        type: "negation",
        time: "present"
      },
      {
        text: "Nobody wants to _____ the match.",
        answer: "lose",
        spanishText: "Nadie quiere perder el partido.",
        textHard: "She always _____ her temper under pressure.",
        answerHard: "loses",
        spanishTextHard: "Ella siempre pierde la calma bajo presión.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the bet?",
        answer: "lose",
        spanishText: "¿Perdiste la apuesta?",
        textHard: "He _____ the championship in the last round.",
        answerHard: "lost",
        spanishTextHard: "Él perdió el campeonato en la última ronda.",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ gracefully.",
        answer: "lose",
        spanishText: "Ella no pierde con elegancia.",
        textHard: "They never _____ without blaming someone else.",
        answerHard: "lose",
        spanishTextHard: "Ellos nunca pierden sin culpar a alguien más.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "WORK",
    sentences: [
      {
        text: "I need to _____ on my project.",
        answer: "work",
        spanishText: "Necesito trabajar en mi proyecto.",
        textHard: "She _____ late every Friday.",
        answerHard: "works",
        spanishTextHard: "Ella trabaja tarde todos los viernes.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ overtime last week?",
        answer: "work",
        spanishText: "¿Trabajaste horas extras la semana pasada?",
        textHard: "He _____ all weekend to meet the deadline.",
        answerHard: "worked",
        spanishTextHard: "Él trabajó todo el fin de semana para cumplir el plazo.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ well under pressure.",
        answer: "work",
        spanishText: "Él no trabaja bien bajo presión.",
        textHard: "They never _____ without clear instructions.",
        answerHard: "work",
        spanishTextHard: "Ellos nunca trabajan sin instrucciones claras.",
        type: "negation",
        time: "present"
      },
      {
        text: "You deserve to _____ after a long day.",
        answer: "rest",
        spanishText: "Mereces descansar después de un día largo.",
        textHard: "She always _____ on Sunday afternoons.",
        answerHard: "rests",
        spanishTextHard: "Ella siempre descansa los domingos por la tarde.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ before the exam?",
        answer: "rest",
        spanishText: "¿Descansaste antes del examen?",
        textHard: "He _____ for two hours after lunch.",
        answerHard: "rested",
        spanishTextHard: "Él descansó dos horas después del almuerzo.",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ until everything is done.",
        answer: "rest",
        spanishText: "Ella no descansa hasta que todo está hecho.",
        textHard: "They never _____ during a busy season.",
        answerHard: "rest",
        spanishTextHard: "Ellos nunca descansan durante una temporada ocupada.",
        type: "negation",
        time: "present"
      }
    ]
  },
  {
    wordId: "WAKE",
    sentences: [
      {
        text: "Can you _____ me up at 7?",
        answer: "wake",
        spanishText: "¿Puedes despertarme a las 7?",
        textHard: "She always _____ before sunrise.",
        answerHard: "wakes",
        spanishTextHard: "Ella siempre se despierta antes del amanecer.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ up early this morning?",
        answer: "wake",
        spanishText: "¿Te despertaste temprano esta mañana?",
        textHard: "He _____ up feeling refreshed.",
        answerHard: "woke",
        spanishTextHard: "Él se despertó sintiéndose renovado.",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ up easily.",
        answer: "wake",
        spanishText: "Él no se despierta fácilmente.",
        textHard: "They never _____ up without an alarm.",
        answerHard: "wake",
        spanishTextHard: "Ellos nunca se despiertan sin alarma.",
        type: "negation",
        time: "present"
      },
      {
        text: "I need to _____ at least eight hours.",
        answer: "sleep",
        spanishText: "Necesito dormir al menos ocho horas.",
        textHard: "She _____ with the light on every night.",
        answerHard: "sleeps",
        spanishTextHard: "Ella duerme con la luz encendida todas las noches.",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ well last night?",
        answer: "sleep",
        spanishText: "¿Dormiste bien anoche?",
        textHard: "He _____ through the entire alarm.",
        answerHard: "slept",
        spanishTextHard: "Él durmió durante toda la alarma.",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ more than six hours.",
        answer: "sleep",
        spanishText: "Ella no duerme más de seis horas.",
        textHard: "They never _____ enough during exam week.",
        answerHard: "sleep",
        spanishTextHard: "Ellos nunca duermen lo suficiente durante la semana de exámenes.",
        type: "negation",
        time: "present"
      }
    ]
  }

];