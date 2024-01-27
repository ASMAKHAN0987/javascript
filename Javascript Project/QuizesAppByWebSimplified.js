const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionELement = document.getElementById('question');  
const answerButtonsElement = document.getElementById('answer-buttons');
// let shuffleQuestions, currentQuestionIndex;
 let shuffleQuestions = 0, currentQuestionIndex = 0  ;
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () =>{
   currentQuestionIndex++;
   setNextQuestion();
})
//start game
function startGame() {
  startButton.classList.add("hide");
  questionContainerElement.classList.remove('hide');
  shuffleQuestions = questions.sort(() => Math.random() - .5  );  
  currentQuestionIndex = 0;
  setNextQuestion(); 
}
function setNextQuestion() {
  resetState();
  showQuestion(shuffleQuestions[currentQuestionIndex]); 
}
// show question function
function showQuestion(question){
 questionELement.innerHTML = question.question;
 question.answer.forEach(answer =>{
     const button = document.createElement('button');
     button.innerText = answer.text;
     button.classList.add('btn');
     if(answer.correct) {
      button.dataset.correct = answer.correct;
     }
     button.addEventListener('click', selectAnswer);
     answerButtonsElement.appendChild(button);
 })
}
function resetState(){
  clearStatusClass(document.body);
  nextButton.classList.add('hide'); 
  while(answerButtonsElement.firstChild){
    answerButtonsElement.removeChild 
    (answerButtonsElement.firstChild);
    console.log("first child: ",answerButtonsElement.firstChild);
  }
}
function selectAnswer(e) {
  const selectedButton = e.target;
  console.log("targetted button: ",e.target);
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body,correct);
  console.log("answer button elements children: ",answerButtonsElement.children);
  // answerBuu = answerButtonsElement.children;  

  Array.from(answerButtonsElement.children).map
  (button => {
    setStatusClass(button,button.dataset.correct); 
    console.log("buttons are: ",button);
  })
  if(shuffleQuestions.length > currentQuestionIndex+1 )
  nextButton.classList.remove('hide'); 
  else{
    startButton.innerText = "Restart";
    startButton.classList.remove('hide');
  }
}
function setStatusClass(element, correct){
  clearStatusClass(element);
  if(correct){
    element.classList.add('correct');
  }
  else{
    element.classList.add('wrong')
  }
}
function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}
const questions = [
  {
    question: "what is 2 + 2",
    answer: [ 
      {
        text: "4", 
        correct: true,
      },
      {
        text: "22",
        correct: false,
      },
    ], 
  },
  {
    question: 'Is web development fun?',
    answer: [
      { text: 'kinda',correct: false},
      { text: 'Yes!!!',correct: true},
      { text: 'Um no', correct: false},
      { text: 'IDK', correct : false}
    ]
  },
  {
    question: 'What is 4*2?',
    answer: [
      {text: '6', correct: false},
      {text: '8', correct: true}
    ]
  },
  {
    question: 'Who is best Youtuber',
    answer: [
      {text: 'webDevSimplified', correct: true},
      {text: 'Klein Powell', correct: true},
      {text: 'Code fun fun', correct: true},
      {text: 'Traverse Media', correct: true}
    ]
  }
  ];
