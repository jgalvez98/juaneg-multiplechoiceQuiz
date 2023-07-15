var startBtn= document.getElementById("start-btn")
var introSectionEl= document.getElementById("intro-section")
var questionSectionEl=document.getElementById("question-section")
var titleEl=document.getElementById("title")
var timerEl=document.getElementById("timer")
var choicesEl= document.querySelectorAll("choices")
var answersEl=document.getElementById("answers")
var initialsInput=document.getElementById("initial-input")
var initialSectionEl=document.getElementById("initial-section")
var highscoreSection=document.getElementById("highscore-section")
var scoreEl=document.getElementById("score")
var gobackBtnEl=document.getElementById("go-back-btn")
var clearBtnEl=document.getElementById("clear-btn")
var setIntervalId=0
var questionIndex=0
var score = 0
var highscoreSectionBtnEl=document.getElementById("highscore-sectionbtn")
var questionsArray= [
    {
        title:"Commonly used data types DO NOT include:",
        choices: [
        "1. strings",
        "2. booleans",
        "3. alerts",
        "4. numbers"],
        answer: "3.alerts",
    },
    {
        title:"The condition in an if / else statement is enclosed within ____.",
        choices: [
        "1. quotes",
        "2. curly brackets",
        "3. parentesis",
        "4. square brackets"],
        answer: "2.curly brackets"
    },
    {
        title:"Arrays in javascript can be used to store _____.",
        choices: [
        "1.numbers and strings",
        "2.other arrays",
        "3.booleans",
        "4.all of the above"],
        answer: "4.all of the above"
    },
    {
        title:"String values must be enclosed within ____ when being assigned to variables",
        choices: [
        "1. commas",
        "2. curly brackets",
        "3. quotes",
        "4. parenthesis"],
        answer: "1. commas"
    },
    {
        title:"A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: [
        "1. javascript",
        "2. terminal/bash",
        "3. for loops",
        "4. console log"],
        answer: "3. for loops"
    }
]
       // display timer function //

var timeLeft=questionsArray.length* 15

     //when btn click hide inital section and question section will show up //
function startQuiz() {
  introSectionEl.setAttribute("class","hide")
  questionSectionEl.removeAttribute("class")
  setIntervalId=setInterval(countDown, 1000)
  showQuestions()
}
// function for timer to start //
function countDown() {
    timerEl.textContent = timeLeft--;
    if (timeLeft===0) {
        clearInterval(setIntervalId)
    }
}


                   // questions function //
function showQuestions() {
    answersEl.textContent = "";
    titleEl.textContent=questionsArray[questionIndex].title
    
    choicesEl[0].textContent=questionsArray[questionIndex].choices[0]
    
    choicesEl[1].textContent=questionsArray[questionIndex].choices[1]
   
    choicesEl[2].textContent=questionsArray[questionIndex].choices[2]
   
    choicesEl[3].textContent=questionsArray[questionIndex].choices[3]
    //check value of questions right or wrong//
    choicesEl[0].addEventListener("click", (checkValue))
    choicesEl[1].addEventListener("click", (checkValue))
    choicesEl[2].addEventListener("click", (checkValue))
    choicesEl[3].addEventListener("click", (checkValue))

}

function nextQuestion(event) {
    var currentElement = event.target
    if (currentElement.matches("button") && questionIndex<questionsArray.length-1) {
        questionIndex++;
        showQuestions();
    } else{
        initialSectionEl.classList.remove("hide")
        questionSectionEl.classList.add("hide")
        clearInterval(setIntervalId)
        scoreEl.textContent=timerEl.textContent
    }

}
     //stops hiding initial section//

        //Right or Wrong question function//
function checkValue(event) {

    if (event.target.innerHTML === questionsArray[questionIndex].answer) {
        score = score + 20
        answerEl.textContent = "correct"
    } else {
        timeLeft = timeLeft - 1;
        answersEl.textContent = "incorrect"
    }
    if (questionIndex >= questionsArray.length - 1) {
        endQuiz()
    } else {
        setTimeout(nextQuestion, 600)
    }

setIntervalId=setInterval (countDown, 1000)   

}
                  // save multiple scores //
 var scores;

 if(localStorage.getItem("scores") === null) {
    scores = []
 } else {
    scores = JSON.parse(localStorage.getItem("scores"))
 }
                 // save multiple users //
 var users = []
 if (localStorage.getItem("users")) {
    users=JSON.parse(localStorage.getItem("users"))
 }

                  // save multiple name initials //
 function saveInitial() {
    var userObject= {
        initial:initialsInput.value,
        score:scoreEl.textContent
    }
    users.push(userObject)
    localStorage.setItem("users", JSON.stringify(users))
    initialSectionEl.classList.add("hide")
    highscoreSection.classList.remove("hide")
 }
             // \\ buttons // \\

startBtn.addEventListener("click", startQuiz)

questionSectionEl.addEventListener("click", nextQuestion )

//gobackBtnEl.addEventListener("click", introSectionEl)

//clearBtnEl.addEventListener("click", clear)

highscoreSectionBtnEl.addEventListener("click", saveInitial)