// french-exercise.js
const exercises = [
    { question: "Le soleil ______ dans le ciel.", answer: "brille" },
    { question: "Les oiseaux ______ dans les arbres.", answer: "chantent" },
    // Ajoutez autant d'éléments que nécessaire
];

let currentExercise = 0;
let score = 0;
const userAnswers = []; // Pour stocker les réponses de l'utilisateur

function displayCurrentQuestion() {
    document.getElementById('question').textContent = exercises[currentExercise].question;
}

function checkAnswer() {
    const userAnswer = document.getElementById('word').value.toLowerCase();
    const resultElement = document.getElementById('result');

    userAnswers[currentExercise] = userAnswer; // Stocke la réponse de l'utilisateur

    if (userAnswer === exercises[currentExercise].answer) {
        resultElement.innerHTML = "Correct! " + exercises[currentExercise].question;
        resultElement.className = '';
        score++;
    } else {
        resultElement.innerHTML = "Incorrect. Essayez encore!";
        resultElement.className = 'incorrect';
    }

    currentExercise = (currentExercise + 1) % exercises.length;

    if (currentExercise === 0) {
        showScore();
        showCorrections(); // Affiche les corrections à la fin
    } else {
        displayCurrentQuestion();
    }
}

function showScore() {
    const totalQuestions = exercises.length;
    const percentage = (score / totalQuestions) * 100;

    const scoreElement = document.getElementById('score');
    scoreElement.innerHTML = `Votre note est ${score} sur ${totalQuestions}. (${percentage}%)`;
    scoreElement.style.display = 'block';
}

function showCorrections() {
    const correctionsElement = document.getElementById('corrections');
    correctionsElement.innerHTML = '<h2>Corrections</h2><ul>';

    for (let i = 0; i < exercises.length; i++) {
        const userAnswer = userAnswers[i] || '';
        const correctAnswer = exercises[i].answer;

        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>Question ${i + 1}:</strong> Votre réponse: ${userAnswer}, Correction: ${correctAnswer}`;
        correctionsElement.appendChild(listItem);
    }

    correctionsElement.innerHTML += '</ul>';
}
