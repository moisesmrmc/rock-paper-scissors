/* Juego de piedra papel tijera
El juego se jugará contra la consola, es decir, yo elijo una de las 3 opciones y me RETURN uno de los 3 VALUES

Tendremos una función que nos RETURN 3 posibilidades (aleatorias) 
Math.random() - entre 0 y 1 <-- pensar como hacerlo para 3 opciones
    ROCK
    PAPER
    SCISSOR
*/
//rock=0 paper=1 scissors=2
function getComputerChoice(){
    let computerChoice;
    let number = Math.floor(Math.random()*3);
    if(number == 0){
        computerChoice = "rock";
        console.log(computerChoice);
    }else if (number == 1){
        computerChoice = "paper";
        console.log(computerChoice);
    }else{
        computerChoice = "scissor";
        console.log(computerChoice);
    }
    return computerChoice;
}
/*
Tendremos otra función para obtener el INPUT del usuario
prompt(" ", ) */
function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissor?", );
    let choiceLowerCase = choice.toLowerCase();
    console.log(choiceLowerCase);
    return choiceLowerCase;
}
/*
Después contaremos la puntuación de la consola y del usuario (empezarán en 0)
    humanScore 
    computerScore
*/
let humanScore = 0;
let computerScore = 0;
/*    
Ahora haremos la lógica para el enfrentamiento 
    Con el prompt del usuario y el aleatorio COMPARAREMOS siguiendo la lógica del juego
    PAPEL > PIEDRA 
    PAPEL < TIJERA
    PIEDRA > TIJERA
    IGUALES = IGUALES
*/

function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        console.log("Empate");
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats rock!");
        humanScore++;
    }
    else if(humanChoice == "paper" && computerChoice == "scissor"){
        console.log("You lose! Paper beats Scissor!");
        computerScore++;
    }
    else if(humanChoice == "scissor" && computerChoice == "rock"){
        console.log("You lose! Scissor beats Rock!");
        computerScore++;
    }
    else if(humanChoice == "scissor" && computerChoice == "paper"){
        console.log("You win! Scissor beats paper!");
        humanScore++;
    }
    else if(humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Rock beats Paper!");
        computerScore++;  
    }
    else if(humanChoice == "rock" && computerChoice == "scissor"){
        console.log("You win! Rock beats Scissor!");
        humanScore++;
    }
}
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
playRound(humanChoice,computerChoice);
console.log(`Tienes ${humanScore} punto/s`);
console.log(`La máquina tiene ${computerScore} punto/s`);

/*
Después sumaremos los puntos a
    humanScore
    computerScore
*/




