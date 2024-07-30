let questions = [
  {
    question: "Was ist die Hauptstadt von Frankreich?",
    option1: "Berlin",
    option2: "Madrid",
    option3: "Paris",
    option4: "Istanbul",
    correct_answer: 3,
  },
  {
    question: "Welches Element hat das chemische Symbol O?",
    option1: "Gold",
    option2: "Oxygen",
    option3: "Silber",
    option4: "Uran",
    correct_answer: 2,
  },
  {
    question: "Wer schrieb 'Die Verwandlung'?",
    option1: "Franz Kafka",
    option2: "Hermann Hesse",
    option3: "Thomas Mann",
    option4: "Isac Newton",
    correct_answer: 1,
  },
  {
    question: "Wie viele Kontinente gibt es auf der Erde?",
    option1: "5",
    option2: "6",
    option3: "7",
    option4: "over 9000",
    correct_answer: 3,
  },
  {
    question: "In welchem Jahr begann der Zweite Weltkrieg?",
    option1: "1914",
    option2: "1939",
    option3: "1945",
    option4: "1943",
    correct_answer: 2,
  },
  {
    question: "Welcher Planet ist der größte in unserem Sonnensystem?",
    option1: "Erde",
    option2: "Mars",
    option3: "Jupiter",
    option4: "Pluto",
    correct_answer: 3,
  },
  {
    question: "Wie lautet die Quadratwurzel von 64?",
    option1: "6",
    option2: "8",
    option3: "10",
    option4: "5",
    correct_answer: 2,
  },
];

let currentQuestion = 0;
let correcAnswers = 0;
let AUDIO_SUCCESS = new Audio("sounds/success.mp3");
let AUDIO_FAIL = new Audio("sounds/fail.mp3");

function init() {
  document.getElementById("all-questions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    document.getElementById("endScreen").style = "";
    document.getElementById("questionBody").style = "display:none";
    document.getElementById("amount-of-questions").innerHTML = questions.length;
    document.getElementById("correct-answers").innerHTML = correcAnswers;
    document.getElementById("header-image").src =
      "../Bilder/trophy-3037779_1280.jpg";
  } else {
    let percent = (currentQuestion + 1) / questions.length;
    percent = Math.round(percent * 100);

    document.getElementById("progressbar").innerHTML = `${percent} %`;
    document.getElementById("progressbar").style.width = `${percent}%`;
    let question = questions[currentQuestion];
    document.getElementById("questiontext").innerHTML = question["question"];

    document.getElementById("question-number").innerHTML = currentQuestion + 1;
    document.getElementById("answer_1").innerHTML = question["option1"];
    document.getElementById("answer_2").innerHTML = question["option2"];
    document.getElementById("answer_3").innerHTML = question["option3"];
    document.getElementById("answer_4").innerHTML = question["option4"];
  }
}

function answer(selection) {
  let question = questions[currentQuestion];
  let selectedQuestionNumber = selection.slice(-1);
  let idOfRightAnswer = `answer_${question["correct_answer"]}`;

  if (selectedQuestionNumber == question["correct_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    AUDIO_SUCCESS.play();
    correcAnswers++;
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document
      .getElementById(idOfRightAnswer)
      .parentNode.classList.add("bg-success");
    AUDIO_FAIL.play();
  }
  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  document.getElementById("next-button").disabled = true;
  resetAnswerButtons();
  showQuestion();
}

function resetAnswerButtons() {
  for (let i = 1; i < 5; i++) {
    document
      .getElementById(`answer_${i}`)
      .parentNode.classList.remove("bg-danger");
    document
      .getElementById(`answer_${i}`)
      .parentNode.classList.remove("bg-success");
  }
}

function restartGame() {
  document.getElementById("header-image").src = "../Bilder/ballon.jpg";
  document.getElementById("endScreen").style = "display:none";
  document.getElementById("questionBody").style = "";
  currentQuestion = 0;
  correcAnswers = 0;
  init();
}
