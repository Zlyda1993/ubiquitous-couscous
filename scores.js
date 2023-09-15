var localStorageHistory = JSON.parse(localStorage.getItem("userData")) || []
var scoresList = document.querySelector(".scoresList")
var clearBtn = document.querySelector("#clear")

function renderScores() {
    for(let i = 0; i < localStorageHistory.length; i++) {
        var li = document.createElement("li");
        li.textContent = localStorageHistory[i].initials + " - " + localStorageHistory[i].score;
        scoresList.appendChild(li);
    }
}

clearBtn.addEventListener("click", function() {
    localStorage.clear()
})