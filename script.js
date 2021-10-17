/* Need a function that can randomly return an integer from a range of three possible integers(1, 2, 3). Assign each 
possible integer one of rock, paper, or scissor */
function getRandomInt() {
    let max = 4;
    let min = 1;
    return Math.floor(Math.random() * (max - min) + min);
}

// Takes output from getRandomInt as an input and decides what the computer chose
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

/* Compare the computer choice with the user choice and determine who won. Declare the winner. */
function Winner (computer_choice, user_choice) {
    if (user_choice === "Rock") {
        if (computer_choice === "Rock") {
            return "Tie! No one wins.";
        }
        else if (computer_choice === "Paper") {
            return "You Lost! Paper beats Rock.";
        }
        else {
            return "You Won! Rock beats Scissors.";
        }
    }
    else if (user_choice === "Paper") {
        if (computer_choice === "Rock") {
            return "You Won! Paper Beats Rock.";
        }
        else if (computer_choice === "Paper") {
            return "Tie! No one wins.";
        }
        else {
            return "You Lost! Scissors beats Paper.";
        }
    }
    else if (user_choice === "Scissors") {
        if (computer_choice === "Rock") {
            return "You Lost! Rock beats Scissors.";
        }
        else if (computer_choice === "Paper") {
            return "You Won! Scissors beats Paper.";
        }
        else {
            return "Tie! No one win.";
        }
    }
    else {
        return "Sorry the winner could not be determined.";
    }
}


/* Take output of getRandomInt and determine what computer chose in rock, paper, scissors. */
function playRound() {
    let computer_choice = decideChoice(getRandomInt());
    console.log(`computer: ${computer_choice}`);
    
    /* prompt the user for a choice and sanitize it */
    let user_choice = prompt("Want to play Rock, Paper, Scissors? If so enter your choice below.");
    user_choice = user_choice.trim();
    let length = user_choice.length;
    let substring1_choice = user_choice.charAt(0).toUpperCase();
    let substring2_choice = user_choice.slice(1, length).toLowerCase();
    user_choice = substring1_choice + substring2_choice;
    console.log(`user: ${user_choice}`);
    
    /* determine the winner and alert the user to the outcome */
    message = Winner(computer_choice, user_choice);
    console.log(message);
    /* tally wins */
    if (message.includes("Won")) {
        user++;
    }
    else if (message.includes("Lost")) {
        computer++;
    }
    else if (message.includes("Tie")) {
        tie++;
    }
    else {
        undecided++;
    }
}
/* play a 5 round game */
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    console.log(`user wins: ${user}, computer wins: ${computer}, ties: ${tie}, undecided: ${undecided}`);
}
/* global variables for keeping track of the outcome of each round */
let user = 0;
let computer = 0;
let tie = 0;
let undecided = 0;

// function that will run the entire game 
game();




