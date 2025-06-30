/* Juego de piedra papel tijera
El juego se jugará contra la consola, es decir, yo elijo una de las 3 opciones y me RETURN uno de los 3 VALUES

Tendremos una función que nos RETURN 3 posibilidades (aleatorias) 
Math.random() - entre 0 y 1 <-- pensar como hacerlo para 3 opciones
    ROCK
    PAPER
    SCISSOR
*/
function getComputerChoice(){
    let number = Math.floor(Math.random()*3);
    console.log(number);
    return number;
}
getComputerChoice();
/*
Tendremos otra función para obtener el INPUT del usuario
prompt(" ", ) */
function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissor?", );
    console.log(`You selected ${choice}`);
    return choice;
}
getHumanChoice();
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

/*
Después sumaremos los puntos a
    humanScore
    computerScore
*/




