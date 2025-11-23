

const choices = ["rock", "paper", "scissors"];
let userScore =0;
let computerScore =0;

const choiceButtons = document.querySelectorAll(".choice");

const userChoiceEl = document.getElementById("user-choice");

const computerChoiceEl = document.getElementById("computer-choice");

const winnerEl = document.getElementById("winner");

const userScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");

const resetBtn = document.getElementById("reset-btn");

choiceButtons.forEach(btn =>{
    btn.addEventListener("click", ()=>{
        const userChoice = btn.id;
        playRound(userChoice);
    })
})


function getCompuetrChoice(){
    const i = Math.floor(Math.random()*choices.length);
    return choices[i];
}
function getWinner(user, computer){

        if(user === computer){
            return "draw";
        }
        else if( (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")){
        return "user";
    }else{
        return "computer";
    }
}



function updateUI(userChoice, computerChoice, result){
    userChoiceEl.textContent= `You: ${userChoice}`;
    computerChoiceEl.textContent = `Computer:${computerChoice}`;
    if(result === "user"){
        userScore++;
        winnerEl.textContent=" you win";
    }
    else if(result === "computer"){
        computerScore++;
        winnerEl.textContent=" Computer wins";
    }else{
        winnerEl.textContent="its a draw";
    }
userScoreEl.textContent = userScore;
computerScoreEl.textContent = computerScore;

}

function playRound(userChoice){
    const computerChoice = getCompuetrChoice();
    const result = getWinner(userChoice, computerChoice);
    updateUI(userChoice, computerChoice, result);
}
