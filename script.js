var startButton = document.querySelector("#start");
var intro = document.querySelector(".intro")
var quiz = document.querySelector(".quiz")
quiz.style.display = "none"
var questionEl = document.querySelector(".questionEl")
var answersListEl = document.querySelector(".answersListEl")


function questions() {
    intro.style.display = "none"
    quiz.style.display = "block"
}






startButton.addEventListener("click", questions);
