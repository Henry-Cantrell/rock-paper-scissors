var choiceList = ["Rock", "Paper", "Scissors"];

var fetchWork = document.getElementById("computerChoiceDisplay");
var displayChoice = document.getElementById("compChoice");
var rockButton = document.getElementById("rock");
var paperButton = document.getElementById("paper");
var scissorsButton = document.getElementById("scissors");

var draw = document.createTextNode("It's a tie.");
var winner = document.createTextNode("You won!");
var loser = document.createTextNode("You lost.");
var rockText = document.createTextNode("Rock");
var paperText = document.createTextNode("Paper");
var scissorsText = document.createTextNode("Scissors");

rockButton.addEventListener("click", gameRoundRock);
paperButton.addEventListener("click", gameRoundPaper);
scissorsButton.addEventListener("click", gameRoundScissors);

function gameRoundRock () {

    var randomElement = choiceList[Math.floor(Math.random()*choiceList.length)];
    
    fetchWork.innerHTML = "";
    displayChoice.innerHTML = "";

    if (randomElement == "Rock") {
        fetchWork.appendChild(draw)
        displayChoice.appendChild(rockText)
    } else if (randomElement == "Paper") {
        fetchWork.appendChild(loser)
        displayChoice.appendChild(paperText)
    } else if (randomElement == "Scissors") {
        fetchWork.appendChild(winner)
        displayChoice.appendChild(scissorsText)
    }

}

function gameRoundPaper () {

    var randomElement = choiceList[Math.floor(Math.random()*choiceList.length)];
    
    fetchWork.innerHTML = "";
    displayChoice.innerHTML = "";

    if (randomElement == "Rock") {
        fetchWork.appendChild(winner)
        displayChoice.appendChild(rockText)
    } else if (randomElement == "Paper") {
        fetchWork.appendChild(draw)
        displayChoice.appendChild(paperText)
    } else if (randomElement == "Scissors") {
        fetchWork.appendChild(loser)
        displayChoice.appendChild(scissorsText)
    }

}

function gameRoundScissors () {

    var randomElement = choiceList[Math.floor(Math.random()*choiceList.length)];
    
    fetchWork.innerHTML = "";
    displayChoice.innerHTML = "";

    if (randomElement == "Rock") {
        fetchWork.appendChild(loser)
        displayChoice.appendChild(rockText)
    } else if (randomElement == "Paper") {
        fetchWork.appendChild(winner)
        displayChoice.appendChild(paperText)
    } else if (randomElement == "Scissors") {
        fetchWork.appendChild(draw)
        displayChoice.appendChild(scissorsText)
    }

}

