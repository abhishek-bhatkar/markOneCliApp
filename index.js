console.log("Quizz about Abhishek!");
console.log("---#---#---#---");

// declaring data

var readLineSync = require('readline-sync');

var score = 0;

var questions = [
  {
    question: "Where do I live? ",
    answer: "Ratnagiri"
  }, 
  {
    question: "My favourite sport? ",
    answer: "Cricket"
  },
  {
    question: "Where do I work? ",
    answer: "Athenahealth"
  },
  {
    question: "What is my age? ",
    answer: "24"
  }
];

// welcome function
function welcome() {
userName = readLineSync.question("What's your name? ");

console.log("Welcome "+ userName + " to quizz!");
}

// play function
function play(question, answer) {
  var userAnswer = readLineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("Wrong answer!");
   
  }

  console.log("current score: ", score);
  console.log("---#---#---#---");
}

// game function
function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

// score function
function showScores() {
  console.log("YAY! You SCORED: ", score);

}

// calling functions

welcome();
game();
showScores();





