var startBtn= document.getElementById("start-btn")
var introSectionEl= document.getElementById("intro-section")
var questionSectionEl=document.getElementById("question-section")
var titleEl=document.getElementById("title")
var timerEl=document.getElementById("timer")
var choicesEl= document.querySelectorAll("choices")
/* var showscore = document.getElementById("score") */
var questionIndex=0
var questionsArray=[
    {
        title:"Commonly used data types DO NOT include:",
        choices:["1.strings", "2.booleans", "3.alerts", "4.numbers"],
        answer: "3.alerts"
    },
    {
        title:"The condition in an if / else statement is enclosed within ____.",
        choices:["1.quotes", "2.curly brackets", "3.parentesis", "4.square brackets"],
        answer: "2.curly brackets"
    },
    {
        title:"Arrays in javascript can be used to store _____.",
        choices:["1.numbers and strings", "2.other arrays", "3.booleans", "4.all of the above"],
        answer: "4.all of the above"
    },
    {
        title:"String values must be enclosed within ____ when being assigned to variables",
        choices:["1.commas", "2.curly", "brackets", "3.quotes", "4.parenthesis"],
        answer: "1.commas"
    },
    {
        title:"A very useful tool used during development and debugging for printing content to the debugger is:",
        choices:["1.javascript", "2.terminal/bash", "3.for loops", "4.console log"],
        answer: "3.for loops"
    },
]

var timeLeft=questionsArray.length* 15

/*

1. hide intro (done)
2. start timer (done)
3. show questions (done)
4. structure to store questions and choices
5. structure to show score/enter intials after finishing questions

*/

var setIntervalId=0;

function startQuiz(){
  introSectionEl.setAttribute("class","hide")
  questionSectionEl.removeAttribute("class")
  setIntervalId=setInterval(countDown,1000)
  showQuestions()
}

function countDown(){
    timerEl.textContent=timeLeft--
    if(timeLeft===0){
        clearInterval(setIntervalId)
    }
}


function showQuestions(){
    titleEl.textContent=questionsArray[questionIndex].title

    choicesEl[0].textContent=questionsArray[questionIndex].choices[0]

    choicesEl[1].textContent=questionsArray[questionIndex].choices[1]

    choicesEl[2].textContent=questionsArray[questionIndex].choices[2]

    choicesEl[3].textContent=questionsArray[questionIndex].choices[3]
    


}

function nextQuestion (event){
    var currentElement= event.target
    if(currentElement.matches("button")){
    questionIndex++
    showQuestions()
  }
}

/*function showscore(event){
    var currentElement= event.target
    if(currentElement.matches("")){

    }
}
*/

startBtn.addEventListener("click", startQuiz)

questionSectionEl.addEventListener("click",nextQuestion )