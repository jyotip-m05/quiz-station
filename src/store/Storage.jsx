const quizzes = {
  easy: [
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswerIndex: 1
    },
    {
      question: "What color is a common apple?",
      options: ["Blue", "Green", "Purple", "Yellow"],
      correctAnswerIndex: 1
    },
    {
      question: "Which animal says 'Moo'?",
      options: ["Dog", "Cat", "Cow", "Bird"],
      correctAnswerIndex: 2
    },
    {
      question: "How many legs does a dog have?",
      options: ["2", "4", "6", "8"],
      correctAnswerIndex: 1
    },
    {
      question: "What is the opposite of 'hot'?",
      options: ["Warm", "Cold", "Big", "Fast"],
      correctAnswerIndex: 1
    },
    {
      question: "Which fruit is yellow and long?",
      options: ["Apple", "Banana", "Orange", "Grape"],
      correctAnswerIndex: 1
    },
    {
      question: "What is the shape of a normal wheel?",
      options: ["Square", "Triangle", "Circle", "Rectangle"],
      correctAnswerIndex: 2
    },
    {
      question: "How many fingers do you have on one hand?",
      options: ["3", "4", "5", "6"],
      correctAnswerIndex: 2
    },
    {
      question: "Which month comes after January?",
      options: ["March", "February", "December", "April"],
      correctAnswerIndex: 1
    },
    {
      question: "What do you use to write on paper?",
      options: ["Spoon", "Fork", "Pencil", "Knife"],
      correctAnswerIndex: 2
    },
    {
      question: "What animal lays eggs and has feathers?",
      options: ["Dog", "Fish", "Chicken", "Cat"],
      correctAnswerIndex: 2
    },
    {
      question: "Which meal is eaten in the morning?",
      options: ["Dinner", "Lunch", "Breakfast", "Snack"],
      correctAnswerIndex: 2
    },
    {
      question: "What do you wear on your feet?",
      options: ["Hat", "Gloves", "Shoes", "Scarf"],
      correctAnswerIndex: 2
    },
    {
      question: "What is the color of the sky on a clear day?",
      options: ["Green", "Blue", "Red", "Yellow"],
      correctAnswerIndex: 1
    },
    {
      question: "How many eyes does a person typically have?",
      options: ["1", "2", "3", "4"],
      correctAnswerIndex: 1
    }
  ],
  medium: [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswerIndex: 2
    },
    {
      question: "Which planet is known as the 'Red Planet'?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      correctAnswerIndex: 1
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["O2", "CO2", "H2O", "N2"],
      correctAnswerIndex: 2
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
      correctAnswerIndex: 2
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
      correctAnswerIndex: 3
    },
    {
      question: "Which country is famous for the Pyramids of Giza?",
      options: ["Greece", "Italy", "Egypt", "Mexico"],
      correctAnswerIndex: 2
    },
    {
      question: "What is the freezing point of water in Celsius?",
      options: ["-10°C", "0°C", "10°C", "100°C"],
      correctAnswerIndex: 1
    },
    {
      question: "What is the main ingredient in bread?",
      options: ["Sugar", "Eggs", "Flour", "Milk"],
      correctAnswerIndex: 2
    },
    {
      question: "Which sport is known as 'the beautiful game'?",
      options: ["Basketball", "Tennis", "Football (Soccer)", "Baseball"],
      correctAnswerIndex: 2
    },
    {
      question: "How many continents are there in the world?",
      options: ["5", "6", "7", "8"],
      correctAnswerIndex: 2
    },
    {
      question: "What is the process by which plants make their own food?",
      options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
      correctAnswerIndex: 1
    },
    {
      question: "Which famous scientist is known for discovering gravity?",
      options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Charles Darwin"],
      correctAnswerIndex: 1
    },
    {
      question: "What is the highest mountain in Africa?",
      options: ["Mount Everest", "Mount Kilimanjaro", "Mount Fuji", "Mount McKinley"],
      correctAnswerIndex: 1
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yuan", "Euro", "Dollar", "Yen"],
      correctAnswerIndex: 3
    },
    {
      question: "Which gas makes up the majority of Earth's atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      correctAnswerIndex: 2
    }
  ],
  hard: [
    {
      question: "Who developed the theory of relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
      correctAnswerIndex: 1
    },
    {
      question: "What is the smallest prime number?",
      options: ["0", "1", "2", "3"],
      correctAnswerIndex: 2
    },
    {
      question: "Which organ in the human body is responsible for pumping blood?",
      options: ["Lungs", "Brain", "Liver", "Heart"],
      correctAnswerIndex: 3
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      correctAnswerIndex: 2
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      correctAnswerIndex: 2
    },
    {
      question: "In what year did World War II end?",
      options: ["1918", "1939", "1945", "1950"],
      correctAnswerIndex: 2
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Ag", "Fe", "Au", "Pb"],
      correctAnswerIndex: 2
    },
    {
      question: "Which famous playwright wrote 'Hamlet' and 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
      correctAnswerIndex: 1
    },
    {
      question: "What is the study of earthquakes called?",
      options: ["Volcanology", "Geology", "Seismology", "Meteorology"],
      correctAnswerIndex: 2
    },
    {
      question: "Which country is the largest by land area?",
      options: ["Canada", "China", "Russia", "United States"],
      correctAnswerIndex: 2
    },
    {
      question: "What is the square root of 144?",
      options: ["10", "11", "12", "13"],
      correctAnswerIndex: 2
    },
    {
      question: "Who was the first person to step on the Moon?",
      options: ["Buzz Aldrin", "Michael Collins", "Neil Armstrong", "Yuri Gagarin"],
      correctAnswerIndex: 2
    },
    {
      question: "Which element has the atomic number 1?",
      options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
      correctAnswerIndex: 2
    },
    {
      question: "What is the name of the galaxy our solar system is in?",
      options: ["Andromeda", "Triangulum", "Pinwheel", "Milky Way"],
      correctAnswerIndex: 3
    },
    {
      question: "Which of the following is not a primary color of light (additive colors)?",
      options: ["Red", "Green", "Blue", "Yellow"],
      correctAnswerIndex: 3
    }
  ]
};

let currentSession = {
  name: "",
  difficulty: "",
  score: 0,
  timeTakenInMinutes: 0,
  questionWiseScore: [],
  questionWiseTimeTaken: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
};

// Function to save quiz result to localStorage----------------------------------------------------------------
const saveQuizResult = (result) => {
  try {
    const existingData = localStorage.getItem('quizLeaderboard');
    const leaderboard = existingData ? JSON.parse(existingData) : [];

    leaderboard.push(result);
    localStorage.setItem('quizLeaderboard', JSON.stringify(leaderboard));
    return true;
  } catch (error) {
    console.error('Error saving quiz result:', error);
    return false;
  }
};

// Function to get leaderboard data from localStorage--------------------------------------------------------------
const getLeaderboardData = () => {
  try {
    const storedData = localStorage.getItem('quizLeaderboard');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      // Sort by score (highest first) and then by time (lowest first)
      return parsedData.sort((a, b) => {
        if (b.score !== a.score) {
          return b.score - a.score;
        }
        return a.timeTakenInMinutes - b.timeTakenInMinutes;
      });
    }
    return [];
  } catch (error) {
    console.error('Error loading leaderboard data:', error);
    return [];
  }
};

// Function to reset current session-----------------------------------------------------------------------------
const resetCurrentSession = () => {
  currentSession = {
    name: "",
    difficulty: "",
    score: 0,
    timeTakenInMinutes: 0,
    questionWiseScore: [],
    questionWiseTimeTaken: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  };
};

export { quizzes, currentSession, saveQuizResult, getLeaderboardData, resetCurrentSession };
