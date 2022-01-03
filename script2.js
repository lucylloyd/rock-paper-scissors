//set up a function that's going to select a random rock paper
//use randomMath to choose number then apply name
 function computerPlay () {
    let randomPlay = Math.floor(Math.random() * 3);
    
    if (randomPlay === 1) {
        computerSelection = "rock";
        
    }
    else if (randomPlay === 2) {
        computerSelection = "scissors";
        
    } 
    else { 
        computerSelection = "paper";
        }

        console.log("computer is " + computerSelection)
  
}

//make a heading to start play

const container = document.querySelector('#container');

const shoot = document.createElement('h1');
shoot.classList.add('shoot');
shoot.textContent = "Rock...Paper...Scissors...SHOOT!";
shoot.style.color = 'blue';

container.appendChild(shoot);

const select = document.createElement('h3');
select.classList.add('select');
select.textContent = "you choose:";
select.style.color = "grey";
container.appendChild(select);

const rockpic = document.createElement('img');
select.classList.add('rockpic');
rockpic.src = 'images/rock.png';
rockpic.style.border = 'thick solid blue';
rockpic.style.borderRadius = '50%'
rockpic.height = "200";
rockpic.style.margin = "10px";
container.appendChild(rockpic);
rockpic.onclick = () => selectChoice('rock');
//make that onclick selection the player selection

const scissorspic = document.createElement('img');
select.classList.add('scissorspic');
scissorspic.src = 'images/scissors.png';
scissorspic.style.borderRadius = '50%'
scissorspic.height = "200";
scissorspic.style.margin = "10px";
scissorspic.style.border = 'thick solid blue';
container.appendChild(scissorspic);
scissorspic.onclick = () => selectChoice('scissors');

const paperpic = document.createElement('img');
select.classList.add('paperpic');
paperpic.src = "images/paper.png";
paperpic.style.borderRadius = '50%'
paperpic.height = "200";
paperpic.style.margin = "10px";
paperpic.style.border = 'thick solid blue';
container.appendChild(paperpic);
paperpic.onclick = () => selectChoice("paper")
//paperpic.addEventListener = ("click", selectChoice('paper'));


function selectChoice(play) {
    yourSelection.textContent = `You chose ${play}`;
    console.log("you chose " + play);
           computerPlay();
           singleGame(play, computerSelection);
           
    }



function singleGame( playerSelection, computerSelection){
    compSelection.textContent = `Computer chose ${computerSelection}`;
    

    if (playerSelection == "paper" && computerSelection == "rock" 
    || playerSelection == "rock" && computerSelection == "scissors" 
    || playerSelection == "scissors" && computerSelection == "paper" ){
        console.log("You win, " + playerSelection + " beats " + computerSelection);

        winnerDeclaration.textContent = `You win, ${playerSelection} beats ${computerSelection}!`
tallyPlayer += 1;
 tallyGame += 1;

}

else if (playerSelection == computerSelection) {
    winnerDeclaration.textContent = `Oops! It's a match!`
    tallyGame += 1;
}
      
    else { 
        winnerDeclaration.textContent = `You lose, ${computerSelection} beats ${playerSelection}!` 
        console.log("You lose, " + computerSelection + " beats " + playerSelection);  
    tallyComp += 1;
    tallyGame += 1;
}
console.log(tallyComp);
    runningScore.textContent = `Score : you ${tallyPlayer} : computer ${tallyComp}`;
    winning();
}





//write game function with above function inside to make best of five
//play 5 games. if computer wins, add one, if player wins, add one.Give overall winner.
let tallyPlayer = 0;
    let tallyComp = 0;
    let tallyGame = 1;
 



function winning(){
    if (tallyPlayer == 5) {
        alert("You win! Well done")
    }
    else if (tallyComp == 5) {
        alert("Computer wins!")
    }
   
}


//updating the DOM with the game status
const gameStatus = document.createElement('div');
gameStatus.classList.add('gameStatus');
container.appendChild(gameStatus);


const yourSelection = document.createElement('h3');
yourSelection.classList.add('yourSelection');
yourSelection.textContent = `Your selection please`;
yourSelection.style.color = "lilac";
gameStatus.appendChild(yourSelection);

const compSelection = document.createElement('h3');
compSelection.classList.add('compSelection');

compSelection.style.color = "grey";
gameStatus.appendChild(compSelection);

const winnerDeclaration = document.createElement('h1');
winnerDeclaration.classList.add('winnerDeclaration');

winnerDeclaration.style.color = "pink";
gameStatus.appendChild(winnerDeclaration);

const runningScore = document.createElement('h2');
runningScore.classList.add('runningScore');

runningScore.style.color = "red";
gameStatus.appendChild(runningScore);

