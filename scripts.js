const quizData = [
    {
      question: "Highest Goalscorer in the Premier League",
      answers: ["Alan Shearer", "Wayne Rooney", "Sergio Aguero", "None of these"],
      correct: 0
    },
    {
      question: "Which team won the FIFA World Cup in 2018?",
      answers: ["Brazil", "France", "Germany", "Argentina"],
      correct: 1
    },
    {
      question: "Who holds the record for the most goals scored in a calendar year?",
      answers: ["Cristiano Ronaldo", "Lionel Messi", "Pele", "Gerd Muller"],
      correct: 1
    },
    {
      question: "Which club is known as the Red Devils?",
      answers: ["Liverpool", "Manchester United", "Chelsea", "Arsenal"],
      correct: 1
    },
    {
      question: "Who won the UEFA Champions League in the 2019-2020 season?",
      answers: ["Bayern Munich", "Liverpool", "Barcelona", "Real Madrid"],
      correct: 0
    },
    {
      question: "Which country has won the most World Cups?",
      answers: ["Brazil", "Germany", "Italy", "Argentina"],
      correct: 0
    },
    {
      question: "Which player is known as the 'Egyptian King'?",
      answers: ["Mohamed Salah", "Trezeguet", "Hossam Ghaly", "Mido"],
      correct: 0
    },
    {
      question: "What year was the Premier League founded?",
      answers: ["1990", "1992", "1994", "1996"],
      correct: 1
    },
    {
      question: "Which team did Zinedine Zidane play for before retiring?",
      answers: ["Juventus", "Real Madrid", "AC Milan", "Paris Saint-Germain"],
      correct: 1
    },
    {
      question: "Who is the all-time top scorer for Barcelona?",
      answers: ["Luis Suarez", "Lionel Messi", "Ronaldinho", "Samuel Eto'o"],
      correct: 1
    },
    {
      question: "Which player won the Ballon d'Or in 2008?",
      answers: ["Cristiano Ronaldo", "Kaka", "Lionel Messi", "Xavi Hernandez"],
      correct: 0
    },
    {
      question: "Which country hosted the 2022 FIFA World Cup?",
      answers: ["Qatar", "Russia", "Brazil", "South Africa"],
      correct: 0
    }
  ];
  

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("Questions");
const answerElements = Array.from(document.getElementsByClassName("answers"));
const submitButton = document.getElementById("submitBtn");
const restartButton = document.getElementById("restartBtn");
const generalTrivia =  document.getElementsByTagName ("a");

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  answerElements.forEach((element, index) => {
    element.textContent = currentQuestion.answers[index];
  });
}

function handleAnswerClick(e) {
  const selectedAnswer = e.target.textContent;
  const correctAnswer =
    quizData[currentQuestionIndex].answers[
      quizData[currentQuestionIndex].correct
    ];

  if (selectedAnswer === correctAnswer) {
    score++;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  questionElement.textContent = `Quiz completed! Your score is ${score}/${quizData.length}.`;
  answerElements.forEach((element) => {
    element.style.display = "none";
  });
  submitButton.style.display = "none";
  restartButton.style.display = "block";
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  answerElements.forEach((element) => {
    element.style.display = "block";
  });
  submitButton.style.display = "inline-block";
  restartButton.style.display = "none";
  loadQuestion();
}

answerElements.forEach((element) => {
  element.addEventListener("click", handleAnswerClick);
});

submitButton.addEventListener("click", handleAnswerClick);
restartButton.addEventListener("click", restartQuiz);

loadQuestion();
