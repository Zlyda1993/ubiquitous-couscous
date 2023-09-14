var startButton = document.querySelector("#start");
var intro = document.querySelector(".intro")
var quiz = document.querySelector(".quiz")
quiz.style.display = "none"
var questionEl = document.querySelector(".questionEl")
var answersListEl = document.querySelector(".answersListEl")
var timeLeft = document.querySelector("h2");
// console.log(timeLeft);
// console.log(timeLeft.textContent = "testing");
var quizData = [
    {
        question: "What does JS stand for?",
        answerSet: ["A. Just Sayin", "B. Java", "C. JavaScript", "D. Cascading Style Sheet"],
        correct: "C. JavaScript"
    },
    {
        question: "Which word is used for creating a variable in JavaScript?",
        answerSet: ["A. for", "B. else", "C. function", "D. var"],
        correct: "D. var"
    },
    {
        question: 'What does JIT stand for, in "JIT compiler"?',
        answerSet: ["A. Just In Time", "B. JavaScript Inverse Time", "C. Just Incase Try", "D. Java Is Tiny"],
        correct: "A. Just In Time"
    },
    {
        question: "What is not one of the different data types in JavaScript?",
        answerSet: ["A. String", "B. Variable", "C. Both", "D. Neither",],
        correct: "B. Variable"
    },
    {
        question: "What symbol is used for comments in JavaScript?",
        answerSet: ["A. //", "B. --", "C. ++", "D. &&"],
        correct: "A. //"
    }
]
var quizIndex = 0;
var score = 0;
var time = 60;


function questions(quizIndex) {
    intro.style.display = "none"
    quiz.style.display = "block"
    answersListEl.innerHTML = ""
    questionEl.innerHTML = quizData[quizIndex].question;
    var answersForQuestion = quizData[quizIndex].answerSet
    answersForQuestion.forEach(function (answerValue) {
        var button = document.createElement("button")
        button.innerHTML = answerValue;
        answersListEl.append(button)
        button.addEventListener("click", function (event) {
            var choice = event.target.innerHTML;
            if (choice === quizData[quizIndex].correct) {
                console.log("Right")
                score = score + 20;
            } else {
                console.log("Wrong")
                time = time - 10;
            }
            if (quizIndex < quizData.length - 1) {
                quizIndex++
                questions(quizIndex)
            } else {
                quizIndex = 0;
                quiz.style.display = "
            }
            console.log(score)
            console.log(time)
        //    if(timeLeft === 0 || quizIndex > 4) {

        //    }

        //     var finalScore = score + time;

        })
    })
}

function game() {
    var timer = setInterval(function () {
        if (time > 1) {
            console.log(time);
            timeLeft.textContent = time;
            console.log(timeLeft.textContent = time);
            time--;
        } else if (time === 1) {
            timeLeft.textContent = time;
            time--;
        } else {
            timeLeft.textContent = '';
            clearInterval(timer);
        }
       
    }, 1000);

}





startButton.addEventListener("click", function() {
    game();
    questions(quizIndex);
});

var restart = document.querySelector("#restart");

restart.addEventListener("click", function() {
    
});

var submit = document.querySelector("#submit");

submit.addEventListener("click", function() {

});