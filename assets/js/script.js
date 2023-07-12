var startBtn = document.getElementById
var introSectionEl= document.getElementById("intro-section")
var questionSectionEl=document.getElementById("question-section")
var titleEl=document.getElementById("title")
var timerEl=document.getElementById("timer")
var choicesEl = document.querySelectorAll("choices")
var questionindex=0
var questionsArray=[
    {
        title:"question 1",
        choices:["choice1, c2, c3, c4"],
        answer: "c2"
    },
    {
        title:"question 2",
        choices:["choice1, c2, c3, c4"],
        answer: "c2"
    },
    {
        title:"question 3",
        choices:["choice1, c2, c3, c4"],
        answer: "c2"
    },
    {
        title:"question 4",
        choices:["choice1, c2, c3, c4"],
        answer: "c2"
    },
    {
        title:"question 5",
        choices:["choice1, c2, c3, c4"],
        answer: "c2"
    }
]

var timeLeft=questionsArray.length* 15

/*

1. hide intro (done)
2. start timer
3. show questions
4. structure to store questions and choices

*/

var setIntervalId=0;

function startQuiz(){
    introSectionEl.classList.add("hide")
    questionSectionEl.removeAttribute("class")
    setIntervalId=setInterval(countDown,1000)

}

function countDown(){
    timerEl.textContent=timeLeft--
    if(timeLeft===0){
        clearInterval(setIntervalId)
    }
}



function showQuestions (){
    titleEl.textContent=questionsArray[questionindex].title

    choicesEl[0].textContent=questionsArray[questionindex].choices[0]

    choicesEl[1].textContent=questionsArray[questionindex].choices[1]

    choicesEl[2].textContent=questionsArray[questionindex].choices[2]

    choicesEl[3].textContent=questionsArray[questionindex].choices[3]


}

function nextQuestion (event){
    var currentElement= event.target
    if(currentElement.matches("button")){
    questionIndex++
    showQuestions()
  }
}


startbtn.addEventListener("click", startQuiz)

questionSectionEl.addEventListener("click",nextQuestion)