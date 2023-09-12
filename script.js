var startButton = document.querySelector("#start");
var intro = document.querySelector(".intro")
var quiz = document.querySelector(".quiz")
quiz.style.display = "none"
var questionEl = document.querySelector(".questionEl")
var answersListEl = document.querySelector(".answersListEl")

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
    }
]

var quizIndex = 0;


function questions(quizIndex) {
    intro.style.display = "none"
    quiz.style.display = "block"
    questionEl.innerHTML = quizData[quizIndex].question;
    var answersForQuestion = quizData[quizIndex].answerSet
    answersForQuestion.forEach(function(answerValue) {
        var button = document.createElement("button")
        button.innerHTML = answerValue;
        answersListEl.append(button)
    })

}




startButton.addEventListener("click", function() {
    questions(quizIndex)
});
