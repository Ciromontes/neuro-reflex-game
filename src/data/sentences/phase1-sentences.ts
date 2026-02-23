// src/data/sentences/phase1-sentences.ts
// src/data/sentences/phase1-sentences.ts
import type { WordSentences } from './index';

export const phase1Sentences: WordSentences[] = [
  {
    wordId: "ACCEPT",
    sentences: [
      {
        text: "She will _____ the invitation to the party.",
        answer: "accept",
        textHard: "She _____ every invitation she gets.",
        answerHard: "accepts",
        type: "affirmation",
        time: "future"
      },
      {
        text: "Did you _____ the job offer?",
        answer: "accept",
        textHard: "He _____ the terms without reading them.",
        answerHard: "accepted",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ to go with us.",
        answer: "accept",
        textHard: "They never _____ to participate in meetings.",
        answerHard: "accept",
        type: "negation",
        time: "present"
      },
      {
        text: "They _____ to help us with the project.",
        answer: "refuse",
        textHard: "She always _____ to cooperate.",
        answerHard: "refuses",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why did you _____ my offer?",
        answer: "refuse",
        textHard: "He _____ to sign the contract last week.",
        answerHard: "refused",
        type: "question",
        time: "past"
      },
      {
        text: "She never _____ to listen to advice.",
        answer: "refuse",
        textHard: "They _____ to acknowledge the problem.",
        answerHard: "refuse",
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
        textHard: "They _____ with the new policy changes.",
        answerHard: "agree",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Do you _____ with the new policy?",
        answer: "agree",
        textHard: "She _____ with the team's decision yesterday.",
        answerHard: "agreed",
        type: "question",
        time: "past"
      },
      {
        text: "They don't _____ with the decision.",
        answer: "agree",
        textHard: "He never _____ with the proposed changes.",
        answerHard: "agrees",
        type: "negation",
        time: "present"
      },
      {
        text: "I _____ with your opinion on this matter.",
        answer: "disagree",
        textHard: "She _____ with the conclusions of the report.",
        answerHard: "disagreed",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why do you _____ with the plan?",
        answer: "disagree",
        textHard: "They _____ with the new regulations last month.",
        answerHard: "disagreed",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ with the team's approach.",
        answer: "disagree",
        textHard: "He _____ with the way the project is managed.",
        answerHard: "disagrees",
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
        textHard: "She _____ home late last night.",
        answerHard: "arrived",
        type: "affirmation",
        time: "future"
      },
      {
        text: "Did you _____ on time?",
        answer: "arrive",
        textHard: "He _____ at the office before the meeting.",
        answerHard: "arrived",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ until 6 PM.",
        answer: "arrive",
        textHard: "They never _____ before the deadline.",
        answerHard: "arrive",
        type: "negation",
        time: "present"
      },
      {
        text: "They _____ the party early.",
        answer: "leave",
        textHard: "She always _____ before the end.",
        answerHard: "leaves",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why did you _____ so soon?",
        answer: "leave",
        textHard: "He _____ the room without saying goodbye.",
        answerHard: "left",
        type: "question",
        time: "past"
      },
      {
        text: "She never _____ without notice.",
        answer: "leave",
        textHard: "They never _____ the building without permission.",
        answerHard: "leave",
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
        textHard: "She _____ for directions every time.",
        answerHard: "asks",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ about the meeting?",
        answer: "ask",
        textHard: "He _____ the teacher for help.",
        answerHard: "asked",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ many questions.",
        answer: "ask",
        textHard: "They never _____ for permission.",
        answerHard: "ask",
        type: "negation",
        time: "present"
      },
      {
        text: "She will _____ your question soon.",
        answer: "answer",
        textHard: "He always _____ quickly.",
        answerHard: "answers",
        type: "affirmation",
        time: "future"
      },
      {
        text: "Did you _____ the phone?",
        answer: "answer",
        textHard: "She _____ all the emails yesterday.",
        answerHard: "answered",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ my calls.",
        answer: "answer",
        textHard: "They never _____ the difficult questions.",
        answerHard: "answer",
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
        textHard: "She _____ her work early in the morning.",
        answerHard: "begins",
        type: "affirmation",
        time: "future"
      },
      {
        text: "Did you _____ the project?",
        answer: "begin",
        textHard: "He _____ his speech with a joke.",
        answerHard: "began",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ until late.",
        answer: "begin",
        textHard: "They never _____ on time.",
        answerHard: "begin",
        type: "negation",
        time: "present"
      },
      {
        text: "They will _____ the event at midnight.",
        answer: "end",
        textHard: "She always _____ her day with a walk.",
        answerHard: "ends",
        type: "affirmation",
        time: "future"
      },
      {
        text: "Did you _____ the call?",
        answer: "end",
        textHard: "He _____ the meeting abruptly.",
        answerHard: "ended",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ her tasks early.",
        answer: "end",
        textHard: "They never _____ their work on time.",
        answerHard: "end",
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
        textHard: "She _____ everything he says.",
        answerHard: "believes",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Do you _____ in ghosts?",
        answer: "believe",
        textHard: "He _____ the story was true.",
        answerHard: "believed",
        type: "question",
        time: "present"
      },
      {
        text: "He doesn't _____ what they say.",
        answer: "believe",
        textHard: "They never _____ the rumors.",
        answerHard: "believe",
        type: "negation",
        time: "present"
      },
      {
        text: "She _____ his intentions.",
        answer: "doubt",
        textHard: "He always _____ the official story.",
        answerHard: "doubts",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why do you _____ me?",
        answer: "doubt",
        textHard: "She _____ the authenticity of the document.",
        answerHard: "doubted",
        type: "question",
        time: "past"
      },
      {
        text: "He never _____ the evidence.",
        answer: "doubt",
        textHard: "They _____ the results of the study.",
        answerHard: "doubt",
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
        textHard: "She _____ books from the library every week.",
        answerHard: "borrows",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ money from him?",
        answer: "borrow",
        textHard: "He _____ my car last weekend.",
        answerHard: "borrowed",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ things often.",
        answer: "borrow",
        textHard: "They never _____ money from friends.",
        answerHard: "borrow",
        type: "negation",
        time: "present"
      },
      {
        text: "She _____ me her notes.",
        answer: "lend",
        textHard: "He always _____ his tools to neighbors.",
        answerHard: "lends",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why didn't you _____ him your book?",
        answer: "lend",
        textHard: "She _____ her dress to her sister for the party.",
        answerHard: "lent",
        type: "question",
        time: "past"
      },
      {
        text: "He never _____ his car to anyone.",
        answer: "lend",
        textHard: "They _____ their house to tourists in the summer.",
        answerHard: "lend",
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
        textHard: "She _____ snacks to every meeting.",
        answerHard: "brings",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the documents?",
        answer: "bring",
        textHard: "He _____ his guitar to the party.",
        answerHard: "brought",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ his laptop to work.",
        answer: "bring",
        textHard: "They never _____ gifts when they visit.",
        answerHard: "bring",
        type: "negation",
        time: "present"
      },
      {
        text: "She _____ the book home.",
        answer: "take",
        textHard: "He always _____ his dog for a walk.",
        answerHard: "takes",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why did you _____ my pen?",
        answer: "take",
        textHard: "She _____ the last piece of cake.",
        answerHard: "took",
        type: "question",
        time: "past"
      },
      {
        text: "He never _____ his umbrella.",
        answer: "take",
        textHard: "They _____ all the credit for the project.",
        answerHard: "take",
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
        textHard: "She _____ sandcastles at the beach.",
        answerHard: "builds",
        type: "affirmation",
        time: "future"
      },
      {
        text: "Did you _____ that model?",
        answer: "build",
        textHard: "He _____ a treehouse for his kids.",
        answerHard: "built",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ anything.",
        answer: "build",
        textHard: "They never _____ without a plan.",
        answerHard: "build",
        type: "negation",
        time: "present"
      },
      {
        text: "She _____ the old building.",
        answer: "destroy",
        textHard: "He always _____ his toys.",
        answerHard: "destroys",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why did you _____ the bridge?",
        answer: "destroy",
        textHard: "They _____ the evidence.",
        answerHard: "destroyed",
        type: "question",
        time: "past"
      },
      {
        text: "He never _____ anything valuable.",
        answer: "destroy",
        textHard: "She _____ all her old drawings.",
        answerHard: "destroy",
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
        textHard: "She _____ groceries every Saturday.",
        answerHard: "buys",
        type: "affirmation",
        time: "future"
      },
      {
        text: "Did you _____ that shirt?",
        answer: "buy",
        textHard: "He _____ a house last year.",
        answerHard: "bought",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ expensive things.",
        answer: "buy",
        textHard: "They never _____ second-hand items.",
        answerHard: "buy",
        type: "negation",
        time: "present"
      },
      {
        text: "She _____ her old bike.",
        answer: "sell",
        textHard: "He always _____ his paintings.",
        answerHard: "sells",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why did you _____ the furniture?",
        answer: "sell",
        textHard: "They _____ their car for a good price.",
        answerHard: "sold",
        type: "question",
        time: "past"
      },
      {
        text: "He never _____ his collections.",
        answer: "sell",
        textHard: "She _____ all her books online.",
        answerHard: "sell",
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
        textHard: "She _____ the bus every morning.",
        answerHard: "catches",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the keys I threw?",
        answer: "catch",
        textHard: "He _____ a cold last week.",
        answerHard: "caught",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ anything I throw.",
        answer: "catch",
        textHard: "They never _____ the train on time.",
        answerHard: "catch",
        type: "negation",
        time: "present"
      },
      {
        text: "She _____ the paper into the bin.",
        answer: "throw",
        textHard: "He always _____ his clothes on the floor.",
        answerHard: "throws",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why did you _____ the stone?",
        answer: "throw",
        textHard: "She _____ the ball to her friend.",
        answerHard: "threw",
        type: "question",
        time: "past"
      },
      {
        text: "He never _____ anything away.",
        answer: "throw",
        textHard: "They _____ the old papers into the recycling bin.",
        answerHard: "throw",
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
        textHard: "She _____ to visit every weekend.",
        answerHard: "comes",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ to the party last night?",
        answer: "come",
        textHard: "He _____ home late yesterday.",
        answerHard: "came",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ to meetings on time.",
        answer: "come",
        textHard: "They never _____ to the events early.",
        answerHard: "come",
        type: "negation",
        time: "present"
      },
      {
        text: "She _____ to school every day.",
        answer: "go",
        textHard: "He always _____ to the gym in the morning.",
        answerHard: "goes",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why did you _____ there alone?",
        answer: "go",
        textHard: "She _____ to the market yesterday.",
        answerHard: "went",
        type: "question",
        time: "past"
      },
      {
        text: "He never _____ to that place.",
        answer: "go",
        textHard: "They _____ to the park every Sunday.",
        answerHard: "go",
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
        textHard: "She _____ working despite the difficulties.",
        answerHard: "continues",
        type: "affirmation",
        time: "future"
      },
      {
        text: "Did you _____ reading the book?",
        answer: "continue",
        textHard: "He _____ his studies after the break.",
        answerHard: "continued",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ his exercises.",
        answer: "continue",
        textHard: "They never _____ the project after issues arise.",
        answerHard: "continue",
        type: "negation",
        time: "present"
      },
      {
        text: "She _____ the car at the red light.",
        answer: "stop",
        textHard: "He always _____ to think before acting.",
        answerHard: "stops",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why did you _____ the music?",
        answer: "stop",
        textHard: "She _____ the machine during the emergency.",
        answerHard: "stopped",
        type: "question",
        time: "past"
      },
      {
        text: "He never _____ working until late.",
        answer: "stop",
        textHard: "They _____ the process when it's completed.",
        answerHard: "stop",
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
        textHard: "He _____ beautiful sculptures.",
        answerHard: "creates",
        type: "affirmation",
        time: "future"
      },
      {
        text: "Did you _____ this masterpiece?",
        answer: "create",
        textHard: "She _____ a wonderful garden last year.",
        answerHard: "created",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ anything new.",
        answer: "create",
        textHard: "They never _____ without inspiration.",
        answerHard: "create",
        type: "negation",
        time: "present"
      },
      {
        text: "She _____ the old building.",
        answer: "destroy",
        textHard: "He always _____ his old drafts.",
        answerHard: "destroys",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why did you _____ the evidence?",
        answer: "destroy",
        textHard: "They _____ the old bridge last month.",
        answerHard: "destroyed",
        type: "question",
        time: "past"
      },
      {
        text: "He never _____ anything valuable.",
        answer: "destroy",
        textHard: "She _____ all her old notes.",
        answerHard: "destroy",
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
        textHard: "She _____ the room quietly.",
        answerHard: "enters",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the building?",
        answer: "enter",
        textHard: "He _____ the competition last year.",
        answerHard: "entered",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ without knocking.",
        answer: "enter",
        textHard: "They never _____ uninvited.",
        answerHard: "enter",
        type: "negation",
        time: "present"
      },
      {
        text: "She _____ the room quickly.",
        answer: "exit",
        textHard: "He always _____ through the back door.",
        answerHard: "exits",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Why did you _____ early?",
        answer: "exit",
        textHard: "She _____ the meeting before it ended.",
        answerHard: "exited",
        type: "question",
        time: "past"
      },
      {
        text: "He never _____ without saying goodbye.",
        answer: "exit",
        textHard: "They _____ the building during the fire drill.",
        answerHard: "exit",
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
        textHard: "She always _____ a solution to every problem.",
        answerHard: "finds",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ what you were looking for?",
        answer: "find",
        textHard: "He _____ his wallet under the couch.",
        answerHard: "found",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ anything in that messy room.",
        answer: "find",
        textHard: "They never _____ a parking spot here.",
        answerHard: "find",
        type: "negation",
        time: "present"
      },
      {
        text: "Please don't _____ your ticket.",
        answer: "lose",
        textHard: "She always _____ her phone when she's in a hurry.",
        answerHard: "loses",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the game last night?",
        answer: "lose",
        textHard: "He _____ his keys on the way home.",
        answerHard: "lost",
        type: "question",
        time: "past"
      },
      {
        text: "She never _____ hope, no matter what.",
        answer: "lose",
        textHard: "They _____ track of time during the meeting.",
        answerHard: "lose",
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
        textHard: "He _____ cars in his spare time.",
        answerHard: "fixes",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the leaking pipe?",
        answer: "fix",
        textHard: "She _____ the computer before the meeting.",
        answerHard: "fixed",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ things properly.",
        answer: "fix",
        textHard: "They never _____ the issues in time.",
        answerHard: "fix",
        type: "negation",
        time: "present"
      },
      {
        text: "Be careful not to _____ the vase.",
        answer: "break",
        textHard: "He always _____ the rules at school.",
        answerHard: "breaks",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the window accidentally?",
        answer: "break",
        textHard: "She _____ her arm during the fall.",
        answerHard: "broke",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ her promises.",
        answer: "break",
        textHard: "They never _____ the equipment intentionally.",
        answerHard: "break",
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
        textHard: "She _____ the recipe step by step.",
        answerHard: "follows",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the map to get here?",
        answer: "follow",
        textHard: "He _____ the guide through the forest.",
        answerHard: "followed",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ orders from anyone.",
        answer: "follow",
        textHard: "They never _____ safety procedures.",
        answerHard: "follow",
        type: "negation",
        time: "present"
      },
      {
        text: "She will _____ the team during the project.",
        answer: "lead",
        textHard: "He _____ the group on every expedition.",
        answerHard: "leads",
        type: "affirmation",
        time: "future"
      },
      {
        text: "Did you _____ the discussion yesterday?",
        answer: "lead",
        textHard: "She _____ the team to victory last season.",
        answerHard: "led",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ by example.",
        answer: "lead",
        textHard: "They never _____ the meetings effectively.",
        answerHard: "lead",
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
        textHard: "She _____ advice to everyone who asks.",
        answerHard: "gives",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ him the money?",
        answer: "give",
        textHard: "He _____ her flowers on her birthday.",
        answerHard: "gave",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ compliments easily.",
        answer: "give",
        textHard: "They never _____ up without a fight.",
        answerHard: "give",
        type: "negation",
        time: "present"
      },
      {
        text: "Don't _____ the last piece of cake!",
        answer: "take",
        textHard: "She always _____ the longest route home.",
        answerHard: "takes",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ my umbrella by mistake?",
        answer: "take",
        textHard: "He _____ the wrong bus this morning.",
        answerHard: "took",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ things without asking.",
        answer: "take",
        textHard: "They never _____ shortcuts on important projects.",
        answerHard: "take",
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
        textHard: "This company _____ every year.",
        answerHard: "grows",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did your business _____ last year?",
        answer: "grow",
        textHard: "She _____ her hair very long.",
        answerHard: "grew",
        type: "question",
        time: "past"
      },
      {
        text: "These flowers don't _____ in cold weather.",
        answer: "grow",
        textHard: "They never _____ tired of learning.",
        answerHard: "grow",
        type: "negation",
        time: "present"
      },
      {
        text: "Hot water will _____ the fabric.",
        answer: "shrink",
        textHard: "The economy _____ during a recession.",
        answerHard: "shrinks",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did your shirt _____ in the dryer?",
        answer: "shrink",
        textHard: "The budget _____ after the cuts.",
        answerHard: "shrank",
        type: "question",
        time: "past"
      },
      {
        text: "This material doesn't _____ when washed.",
        answer: "shrink",
        textHard: "They never _____ from their responsibilities.",
        answerHard: "shrink",
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
        textHard: "She _____ her neighbors whenever they need it.",
        answerHard: "helps",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ him move the furniture?",
        answer: "help",
        textHard: "He _____ the lost child find her parents.",
        answerHard: "helped",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ unless you ask twice.",
        answer: "help",
        textHard: "They never _____ without expecting something in return.",
        answerHard: "help",
        type: "negation",
        time: "present"
      },
      {
        text: "Please don't _____ her feelings.",
        answer: "ignore",
        textHard: "He always _____ the warning signs.",
        answerHard: "ignores",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ his calls on purpose?",
        answer: "ignore",
        textHard: "She _____ all the advice she was given.",
        answerHard: "ignored",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ her responsibilities.",
        answer: "ignore",
        textHard: "They never _____ safety rules at work.",
        answerHard: "ignore",
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
        textHard: "She always _____ her feelings from others.",
        answerHard: "hides",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the surprise for the party?",
        answer: "hide",
        textHard: "He _____ the documents in a safe place.",
        answerHard: "hid",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ his emotions well.",
        answer: "hide",
        textHard: "They never _____ the truth from their friends.",
        answerHard: "hide",
        type: "negation",
        time: "present"
      },
      {
        text: "Can you _____ me how it works?",
        answer: "show",
        textHard: "She _____ great passion in everything she does.",
        answerHard: "shows",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ him around the office?",
        answer: "show",
        textHard: "He _____ everyone his new invention.",
        answerHard: "showed",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ his work to anyone.",
        answer: "show",
        textHard: "They never _____ up on time.",
        answerHard: "show",
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
        textHard: "She constantly _____ her technique.",
        answerHard: "improves",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did your grades _____ this semester?",
        answer: "improve",
        textHard: "He _____ his performance after training.",
        answerHard: "improved",
        type: "question",
        time: "past"
      },
      {
        text: "The situation doesn't _____ overnight.",
        answer: "improve",
        textHard: "They never _____ their habits.",
        answerHard: "improve",
        type: "negation",
        time: "present"
      },
      {
        text: "Stress can _____ your health.",
        answer: "worsen",
        textHard: "The traffic always _____ at rush hour.",
        answerHard: "worsens",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did the weather _____ after the storm?",
        answer: "worsen",
        textHard: "His condition _____ over the weekend.",
        answerHard: "worsened",
        type: "question",
        time: "past"
      },
      {
        text: "The symptoms don't _____ with this medicine.",
        answer: "worsen",
        textHard: "Things never _____ when you stay calm.",
        answerHard: "worsen",
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
        textHard: "The price _____ every year.",
        answerHard: "increases",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did they _____ your salary?",
        answer: "increase",
        textHard: "The company _____ its profits last quarter.",
        answerHard: "increased",
        type: "question",
        time: "past"
      },
      {
        text: "The temperature doesn't _____ at night.",
        answer: "increase",
        textHard: "They never _____ the budget for training.",
        answerHard: "increase",
        type: "negation",
        time: "present"
      },
      {
        text: "They plan to _____ the workforce.",
        answer: "decrease",
        textHard: "Exercise _____ stress levels significantly.",
        answerHard: "decreases",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did the noise _____ after midnight?",
        answer: "decrease",
        textHard: "Sales _____ during the winter months.",
        answerHard: "decreased",
        type: "question",
        time: "past"
      },
      {
        text: "The demand doesn't _____ during holidays.",
        answer: "decrease",
        textHard: "Prices never _____ in that store.",
        answerHard: "decrease",
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
        textHard: "She _____ at every joke he tells.",
        answerHard: "laughs",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ at the movie?",
        answer: "laugh",
        textHard: "He _____ so hard he cried.",
        answerHard: "laughed",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ at rude jokes.",
        answer: "laugh",
        textHard: "They never _____ at others' mistakes.",
        answerHard: "laugh",
        type: "negation",
        time: "present"
      },
      {
        text: "It's okay to _____ when you feel sad.",
        answer: "cry",
        textHard: "She _____ whenever she watches sad movies.",
        answerHard: "cries",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ during the funeral?",
        answer: "cry",
        textHard: "He _____ when he heard the bad news.",
        answerHard: "cried",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ in public.",
        answer: "cry",
        textHard: "They never _____ over small problems.",
        answerHard: "cry",
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
        textHard: "She _____ reading books before bed.",
        answerHard: "likes",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the new restaurant?",
        answer: "like",
        textHard: "He _____ the movie a lot.",
        answerHard: "liked",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ crowded places.",
        answer: "like",
        textHard: "They never _____ waiting in long lines.",
        answerHard: "like",
        type: "negation",
        time: "present"
      },
      {
        text: "I tend to _____ rainy days.",
        answer: "dislike",
        textHard: "She _____ any kind of confrontation.",
        answerHard: "dislikes",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the presentation?",
        answer: "dislike",
        textHard: "He _____ the idea from the beginning.",
        answerHard: "disliked",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ anyone without reason.",
        answer: "dislike",
        textHard: "They never _____ a colleague openly.",
        answerHard: "dislike",
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
        textHard: "She _____ cooking for her friends.",
        answerHard: "loves",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the trip to the mountains?",
        answer: "love",
        textHard: "He _____ that song the first time he heard it.",
        answerHard: "loved",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ being the center of attention.",
        answer: "love",
        textHard: "They never _____ working overtime.",
        answerHard: "love",
        type: "negation",
        time: "present"
      },
      {
        text: "It's hard to _____ someone who lies.",
        answer: "hate",
        textHard: "She _____ waking up early on weekends.",
        answerHard: "hates",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ living in that city?",
        answer: "hate",
        textHard: "He _____ the cold weather last winter.",
        answerHard: "hated",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ anyone truly.",
        answer: "hate",
        textHard: "They never _____ each other despite disagreements.",
        answerHard: "hate",
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
        textHard: "She _____ gracefully across the dance floor.",
        answerHard: "moves",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ to a new apartment?",
        answer: "move",
        textHard: "He _____ all the boxes by himself.",
        answerHard: "moved",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ very fast.",
        answer: "move",
        textHard: "They never _____ without a plan.",
        answerHard: "move",
        type: "negation",
        time: "present"
      },
      {
        text: "Please _____ here and enjoy the view.",
        answer: "stay",
        textHard: "She always _____ calm in difficult situations.",
        answerHard: "stays",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ at the hotel for a week?",
        answer: "stay",
        textHard: "He _____ late to finish the report.",
        answerHard: "stayed",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ in one place for long.",
        answer: "stay",
        textHard: "They never _____ quiet during arguments.",
        answerHard: "stay",
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
        textHard: "She _____ the store every morning at 8.",
        answerHard: "opens",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the letter I sent?",
        answer: "open",
        textHard: "He _____ the package as soon as it arrived.",
        answerHard: "opened",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ up to strangers easily.",
        answer: "open",
        textHard: "They never _____ the office on weekends.",
        answerHard: "open",
        type: "negation",
        time: "present"
      },
      {
        text: "Please _____ the door when you leave.",
        answer: "close",
        textHard: "She always _____ the curtains before sleeping.",
        answerHard: "closes",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the account at the bank?",
        answer: "close",
        textHard: "He _____ the meeting without any conclusions.",
        answerHard: "closed",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ her eyes to injustice.",
        answer: "close",
        textHard: "They never _____ the shop before 9 PM.",
        answerHard: "close",
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
        textHard: "She _____ every test without much effort.",
        answerHard: "passes",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ your driving test?",
        answer: "pass",
        textHard: "He _____ the final exam with a high score.",
        answerHard: "passed",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ subjects he doesn't study.",
        answer: "pass",
        textHard: "They never _____ a chance to improve.",
        answerHard: "pass",
        type: "negation",
        time: "present"
      },
      {
        text: "It's hard to _____ when you try your best.",
        answer: "fail",
        textHard: "He rarely _____ when he prepares well.",
        answerHard: "fails",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the job interview?",
        answer: "fail",
        textHard: "She _____ the course because she missed classes.",
        answerHard: "failed",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ her clients.",
        answer: "fail",
        textHard: "They never _____ to meet their deadlines.",
        answerHard: "fail",
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
        textHard: "She always _____ herself to do better.",
        answerHard: "pushes",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the cart down the aisle?",
        answer: "push",
        textHard: "He _____ the heavy box across the room.",
        answerHard: "pushed",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ people around.",
        answer: "push",
        textHard: "They never _____ each other during games.",
        answerHard: "push",
        type: "negation",
        time: "present"
      },
      {
        text: "Can you _____ me closer to the shore?",
        answer: "pull",
        textHard: "She always _____ the door instead of pushing.",
        answerHard: "pulls",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the rope in the contest?",
        answer: "pull",
        textHard: "He _____ the curtains open to let in the light.",
        answerHard: "pulled",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ the dog too hard.",
        answer: "pull",
        textHard: "They never _____ more weight than necessary.",
        answerHard: "pull",
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
        textHard: "She always _____ everyone's birthdays.",
        answerHard: "remembers",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ to call your mom?",
        answer: "remember",
        textHard: "He _____ every detail of that day.",
        answerHard: "remembered",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ faces very well.",
        answer: "remember",
        textHard: "They never _____ to lock the door.",
        answerHard: "remember",
        type: "negation",
        time: "present"
      },
      {
        text: "It's easy to _____ when you're busy.",
        answer: "forget",
        textHard: "She always _____ her umbrella on rainy days.",
        answerHard: "forgets",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ to buy milk?",
        answer: "forget",
        textHard: "He _____ the meeting and missed it completely.",
        answerHard: "forgot",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ a face she's seen before.",
        answer: "forget",
        textHard: "They never _____ how hard the journey was.",
        answerHard: "forget",
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
        textHard: "She _____ a portion of her salary every month.",
        answerHard: "saves",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the file before closing?",
        answer: "save",
        textHard: "He _____ enough money to buy a car.",
        answerHard: "saved",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ anything for emergencies.",
        answer: "save",
        textHard: "They never _____ their work on time.",
        answerHard: "save",
        type: "negation",
        time: "present"
      },
      {
        text: "Try not to _____ all your savings at once.",
        answer: "spend",
        textHard: "She _____ too much money on clothes.",
        answerHard: "spends",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the whole budget?",
        answer: "spend",
        textHard: "He _____ all his savings on the vacation.",
        answerHard: "spent",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ money on unnecessary things.",
        answer: "spend",
        textHard: "They never _____ more than they earn.",
        answerHard: "spend",
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
        textHard: "She _____ emails every morning.",
        answerHard: "sends",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the invitation?",
        answer: "send",
        textHard: "He _____ a package to his family last week.",
        answerHard: "sent",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ messages without thinking first.",
        answer: "send",
        textHard: "They never _____ confidential information by email.",
        answerHard: "send",
        type: "negation",
        time: "present"
      },
      {
        text: "I expect to _____ good news soon.",
        answer: "receive",
        textHard: "She _____ a lot of compliments on her work.",
        answerHard: "receives",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the package I sent?",
        answer: "receive",
        textHard: "He _____ an award for his performance.",
        answerHard: "received",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ calls from unknown numbers.",
        answer: "receive",
        textHard: "They never _____ feedback on their proposals.",
        answerHard: "receive",
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
        textHard: "She always _____ her day with exercise.",
        answerHard: "starts",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the new project yet?",
        answer: "start",
        textHard: "He _____ the engine and drove away.",
        answerHard: "started",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ tasks without a plan.",
        answer: "start",
        textHard: "They never _____ anything they can't complete.",
        answerHard: "start",
        type: "negation",
        time: "present"
      },
      {
        text: "You need to _____ the report by Friday.",
        answer: "finish",
        textHard: "She always _____ what she starts.",
        answerHard: "finishes",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ reading the book?",
        answer: "finish",
        textHard: "He _____ the project ahead of schedule.",
        answerHard: "finished",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ her food.",
        answer: "finish",
        textHard: "They never _____ their assignments on time.",
        answerHard: "finish",
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
        textHard: "He _____ math at the local school.",
        answerHard: "teaches",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ her how to cook?",
        answer: "teach",
        textHard: "She _____ the class about climate change.",
        answerHard: "taught",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ unless he's well-prepared.",
        answer: "teach",
        textHard: "They never _____ without interactive activities.",
        answerHard: "teach",
        type: "negation",
        time: "present"
      },
      {
        text: "It's never too late to _____.",
        answer: "learn",
        textHard: "She _____ something new every single day.",
        answerHard: "learns",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ how to play the guitar?",
        answer: "learn",
        textHard: "He _____ three languages before he was eighteen.",
        answerHard: "learned",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ from his mistakes.",
        answer: "learn",
        textHard: "They never _____ new skills on their own.",
        answerHard: "learn",
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
        textHard: "She always _____ to help others.",
        answerHard: "tries",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ to call him?",
        answer: "try",
        textHard: "He _____ his best but still failed.",
        answerHard: "tried",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ new things often.",
        answer: "try",
        textHard: "They never _____ to understand each other.",
        answerHard: "try",
        type: "negation",
        time: "present"
      },
      {
        text: "Don't _____ now, you're almost there.",
        answer: "quit",
        textHard: "She rarely _____ when things get tough.",
        answerHard: "quits",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ your job?",
        answer: "quit",
        textHard: "He _____ the team after the argument.",
        answerHard: "quit",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ easily.",
        answer: "quit",
        textHard: "They never _____ before finishing what they start.",
        answerHard: "quit",
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
        textHard: "She _____ every competition she enters.",
        answerHard: "wins",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the chess tournament?",
        answer: "win",
        textHard: "He _____ the race by a wide margin.",
        answerHard: "won",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ without practicing hard.",
        answer: "win",
        textHard: "They never _____ when they don't work as a team.",
        answerHard: "win",
        type: "negation",
        time: "present"
      },
      {
        text: "Nobody wants to _____ the match.",
        answer: "lose",
        textHard: "She always _____ her temper under pressure.",
        answerHard: "loses",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ the bet?",
        answer: "lose",
        textHard: "He _____ the championship in the last round.",
        answerHard: "lost",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ gracefully.",
        answer: "lose",
        textHard: "They never _____ without blaming someone else.",
        answerHard: "lose",
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
        textHard: "She _____ late every Friday.",
        answerHard: "works",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ overtime last week?",
        answer: "work",
        textHard: "He _____ all weekend to meet the deadline.",
        answerHard: "worked",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ well under pressure.",
        answer: "work",
        textHard: "They never _____ without clear instructions.",
        answerHard: "work",
        type: "negation",
        time: "present"
      },
      {
        text: "You deserve to _____ after a long day.",
        answer: "rest",
        textHard: "She always _____ on Sunday afternoons.",
        answerHard: "rests",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ before the exam?",
        answer: "rest",
        textHard: "He _____ for two hours after lunch.",
        answerHard: "rested",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ until everything is done.",
        answer: "rest",
        textHard: "They never _____ during a busy season.",
        answerHard: "rest",
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
        textHard: "She always _____ before sunrise.",
        answerHard: "wakes",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ up early this morning?",
        answer: "wake",
        textHard: "He _____ up feeling refreshed.",
        answerHard: "woke",
        type: "question",
        time: "past"
      },
      {
        text: "He doesn't _____ up easily.",
        answer: "wake",
        textHard: "They never _____ up without an alarm.",
        answerHard: "wake",
        type: "negation",
        time: "present"
      },
      {
        text: "I need to _____ at least eight hours.",
        answer: "sleep",
        textHard: "She _____ with the light on every night.",
        answerHard: "sleeps",
        type: "affirmation",
        time: "present"
      },
      {
        text: "Did you _____ well last night?",
        answer: "sleep",
        textHard: "He _____ through the entire alarm.",
        answerHard: "slept",
        type: "question",
        time: "past"
      },
      {
        text: "She doesn't _____ more than six hours.",
        answer: "sleep",
        textHard: "They never _____ enough during exam week.",
        answerHard: "sleep",
        type: "negation",
        time: "present"
      }
    ]
  }

];