// declaration and intialization
// all selectors that are gonna use in entire program
let body = document.getElementById("body");
let quiz = document.getElementById("quiz");
let start2 = document.querySelector(".start");
let answer = document.querySelectorAll(".ans");
let quizContainer = document.querySelector("#questionContainer");
let next = document.querySelector(".next");
let restart = document.querySelector(".restart");
// global variables
let random = 0;
// question and answer array of object
let answerOption2 = [
  {
    question: "what is 2+2?",
    answer: [
      { text: "4", correct: "true" },
      { text: "22", correct: "false" },
    ],
  },
  {
    question: "Is web development fun?",
    answer: [
      { text: "yes!!!", correct: "true" },
      { text: "kinda", correct: "false" },
      { text: "um no", correct: "false" },
      { text: "IDK", correct: "false" },
    ],
  },
  {
    question: "who is best youtuber?",
    answer: [
      { text: "Klein powell", correct: "true" },
      { text: "webdev simplified", correct: "true" },
      { text: "Traverse media", correct: "true" },
      { text: "code fun fun", correct: "true" },
    ],
  },
  {
    question: "what is 4*2?",
    answer: [
      { text: "6", correct: "false" },
      { text: "8", correct: "true" },
    ],
  },
];
// start function 
start2.addEventListener("click", () => {
  quizContainer.classList.remove("hide");
  start2.classList.add("hide");
  quiz.classList.remove("hide");
  shuffleQuestions();
  HasQuestion();
});
//   for printing questions
function HasQuestion() {
  let i = 0;
  quiz.innerHTML = answerOption2[random].question;
  answerOption2[random].answer.forEach((element) => {
    answer[i].classList.remove("hide");
    answer[i].innerHTML = element["text"];
    i++;
  });
}
function shuffleQuestions() {
  answerOption2.sort(() => Math.random() - 0.5);
}
// answer checking function
function answerChecker(event) {
  let i = 0;
  answerOption2[random].answer.forEach((element) => {
    if (element["correct"] === "false") {
      answer[i].classList.add("red");
    } else {
      answer[i].classList.add("green");
    }
    if (element["text"] === event.innerHTML) {
      if (element["correct"] === "true") {
        body.classList.add("green");
      } else {
        body.classList.add("red");
      }
    }
    i++;
  });
  if(answerOption2.length > random+1){
    next.classList.remove("hide");
  }
  else {
    restart.classList.remove("hide");
  }
}
function removeRedGreenClass() {
  body.className = "";
  answer.forEach((element) => {
    if (element.classList.contains("red")) {
        element.classList.remove("red");
    } else {
      element.classList.remove("green");
    }
  });
}
function reHideOptions() {
  answer.forEach((element) => {
    element.classList.add("hide");
  });
}
function reStart() {
  removeRedGreenClass();
  reHideOptions();
  shuffleQuestions();
  random = 0;
  HasQuestion();
  restart.classList.add("hide");
}
function nextQuestion() {
  random++; 
  removeRedGreenClass();
  reHideOptions();
  HasQuestion();
  next.classList.add("hide");
}
