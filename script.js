let humanScore = 0;
let computerScore = 0;
let round= parseInt(prompt("Enter a number of round :"))

const getComputerChoice = () => {
    let random = Math.random();

    if (random < 0.33) {
        return "rock";
    } else if(random < 0.66) {
        return "paper"
    } else{
    return "scissors" 
    }
}


const getHumanChoice = () => {
    let choice = prompt("please enter rock, paper or scissors");

    return choice ? choice.toLowerCase() : "";
}
  const playRound = (humanChoice, computerChoice) => {
    if(humanChoice === computerChoice){
        console.log("This is draw")
        return "Draw"
    }else if(humanChoice === "rock" && computerChoice === "scissors" || 
        humanChoice === "paper" && computerChoice === "rock" || 
        humanChoice === "scissors" && computerChoice === "paper"
    ){
        humanScore += 1;
        console.log("You win "+"Your Score :" + humanScore)
        return "You win"
    }else{
        computerScore += 1;
        console.log("Computer Win " + "Computer Score : " + computerScore)
        return "Computer wins"
    }
}
 const playGame = () => {
    for(let i = 1;i<= round; i++){
        const humanSelection = getHumanChoice();
        const computerSelection  = getComputerChoice();
        console.log("Your Choice: " + humanSelection);
        console.log("Computer Choice: "  +computerSelection);
        playRound(humanSelection, computerSelection);
}

if(humanScore > computerScore){
    console.log("YOU WINS! " + "Your Score : " + humanScore + "Computer Score : " + computerScore);
} else {
    console.log("YOU LOSE! " + "Your Score : " + humanScore + "Computer Score : " + computerScore)
}
 }

playGame();