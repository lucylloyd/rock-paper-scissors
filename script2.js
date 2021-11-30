//set up a function that's going to select a random rock paper
//use randomMath to choose number then apply name
 function computerPlay () {
    let randomPlay = Math.floor(Math.random() * 3);
    
    if (randomPlay === 1) {
        computer = "rock";
        
    }
    else if (randomPlay === 2) {
        computer = "scissors";
        
    } 
    else { 
        computer = "paper";
        }

        console.log("computer is " + computer)
  
}





//* make a single round of game, with computer and player parameters
function player() {
    prompting = prompt("Rock, Paper, Scissors- SHOOT!");
    play = prompting.toLowerCase();
    console.log("You are " + play);

}


function singleGame( playerSelection, computerSelection){

    

    if (playerSelection == "paper" && computerSelection == "rock" 
    || playerSelection == "rock" && computerSelection == "scissors" 
    || playerSelection == "scissors" && computerSelection == "paper" ){
        console.log("You win, " + playerSelection + " beats " + computerSelection);
 tallyPlayer += 1;
 tallyGame += 1;

}

else if (playerSelection == computerSelection) {
    console.log("Oops! It's a match!")
    tallyGame += 1;
}
      
    else { console.log("You lose, " + computerSelection + " beats " + playerSelection);  
    tallyComp += 1;
    tallyGame += 1;
}
    
}



//write game function with above function inside to make best of five
//play 5 games. if computer wins, add one, if player wins, add one.Give overall winner.
let tallyPlayer = 0;
    let tallyComp = 0;
    let tallyGame = 1;
    
function game() {
    
    while (tallyGame <= 5) {
        computerPlay();
        player();
      
singleGame(play, computer);
console.log(tallyPlayer + " vs " + tallyComp);

    }
    
winning();
};

game()

function winning(){
    if (tallyPlayer > tallyComp) {
        alert("You win! Well done")
    }
    else if (tallyComp = tallyPlayer) {
        alert("It's a tie")
    }
    else alert("Computer wins!")
}