/* Need a function that can randomly return an integer from a range of three possible integers(1, 2, 3). Assign each 
possible integer one of rock, paper, or scissor */
function getRandomInt() {
    let max = 4;
    let min = 1;
    return Math.floor(Math.random() * (max - min) + min);
}

// Takes output from getRandomInt as an input
function decideChoice(integer) {
    let choice;
    if (integer === 1) {
        choice = "Rock";
    }
    else if (integer === 2) {
        choice = "Paper";
    }
    else {
        choice = "Scissors";
    }
    return choice;
}

/* Take output of getRandomInt and determine what computer chose in rock, paper, scissors. */
let random_number = getRandomInt();
let choice = decideChoice(random_number);



