const quizData = [
    {
      question: "What is the capital city of France?",
      answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correct: 2 
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: ["Earth", "Mars", "Jupiter", "Venus"],
      correct: 1 
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      answers: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "F. Scott Fitzgerald"],
      correct: 0 
    },
    {
      question: "What is the largest ocean on Earth?",
      answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      correct: 3 
    },
    {
      question: "In which year did World War II end?",
      answers: ["1942", "1945", "1948", "1950"],
      correct: 1 
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      answers: ["Oxygen", "Gold", "Iron", "Silver"],
      correct: 0 
    },
    {
      question: "What is the smallest unit of life?",
      answers: ["Atom", "Molecule", "Cell", "Organ"],
      correct: 2 
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      answers: ["China", "Japan", "South Korea", "Thailand"],
      correct: 1 










      
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById('Questions');
  const answerElements = Array.from(document.getElementsByClassName('answers'));
  const submitButton = document.getElementById('submitBtn');
  const restartButton = document.getElementById('restartBtn');
  
  function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerElements.forEach((element, index) => {
      element.textContent = currentQuestion.answers[index];
    });
  }
  
  function handleAnswerClick(e) {
    const selectedAnswer = e.target.textContent;
    const correctAnswer = quizData[currentQuestionIndex].answers[quizData[currentQuestionIndex].correct];
    
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
    answerElements.forEach(element => {
      element.style.display = 'none';
    });
    submitButton.style.display = 'none';
    restartButton.style.display = 'block';
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answerElements.forEach(element => {
      element.style.display = 'block';
    });
    submitButton.style.display = 'inline-block';
    restartButton.style.display = 'none';
    loadQuestion();
  }
  
  answerElements.forEach(element => {
    element.addEventListener('click', handleAnswerClick);
  });
  
  submitButton.addEventListener('click', handleAnswerClick);
  restartButton.addEventListener('click', restartQuiz);
  
  loadQuestion();
  