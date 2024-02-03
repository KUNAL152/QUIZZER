// Quiz questions and answers
const quizData = [
    { question: 'Is the sky blue?', answer: true },
    { question: 'Is the earth flat?', answer: false },
    { question: 'Do birds fly?', answer: true },
    { question: "A slug's blood is green.", answer: true},
    { question: "The loudest animal is the African Elephant.", answer: false},
    { question: "Approximately one quarter of human bones are in the feet.", answer: true},
    { question: "The total surface area of a human lungs is the size of a football pitch.", answer: true},+
    { question: "You can lead a cow down stairs but not up stairs.", answer: false},
    { question: "No piece of square dry paper can be folded in half more than 7 times.", answer: false},
    { question: "A few ounces of chocolate can to kill a small dog.", answer: true}
    // Add more questions as needed
];

// DOM elements
const startButton = document.getElementById('start-btn');
const quizContainer = document.getElementById('quiz');
const questionElement = document.getElementById('question');
const scoreElement = document.getElementById('score');
const scoreValueElement = document.getElementById('score-value');
const restartButton = document.getElementById('restart-btn');

let currentQuestionIndex = 0;
let score = 0;

// Event listener for start button
startButton.addEventListener('click', startQuiz);

// Event listener for restart button
restartButton.addEventListener('click', restartQuiz);

// Function to start the quiz
function startQuiz() {
    startButton.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    nextQuestion();
}

// Function to display the next question
function nextQuestion() {
    if (currentQuestionIndex < quizData.length) {
        const currentQuestion = quizData[currentQuestionIndex];
        questionElement.innerText = currentQuestion.question;
    } else {
        showFinalScore();
    }
}

// Function to check the user's answer
function checkAnswer(userAnswer) {
    const currentQuestion = quizData[currentQuestionIndex];

    if (userAnswer === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;
    nextQuestion();
}

// Function to show the final score
function showFinalScore() {
    quizContainer.classList.add('hidden');
    scoreElement.classList.remove('hidden');
    scoreValueElement.innerText = score;
    restartButton.classList.remove('hidden');
}

// Function to restart the quiz
function restartQuiz() {
    startButton.classList.remove('hidden');
    quizContainer.classList.add('hidden');
    scoreElement.classList.add('hidden');
    restartButton.classList.add('hidden');

    currentQuestionIndex = 0;
    score = 0;

    nextQuestion();
}
