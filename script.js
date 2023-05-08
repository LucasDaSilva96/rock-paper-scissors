"use strict";

// The array that contains the different choices that the computer can make.
const choice_array = ["paper", "rock", "scissors"];

// Function that simulates the computers' choice.
const get_computer_choice = function (arr) {
  // Generates a nr between 0 and arr.length.
  let random_nr = Math.floor(Math.random() * arr.length);

  // Return the array at the current random_nr position.
  return arr[random_nr];
};

// A global variable to keep track of the user's choice.
let player_weapon = "";

// Global Variables to keep track of the points after each round.
let computer_points = 0;
let player_points = 0;

// Prompt the user to make a choice from the choice_array, and the user can not input a higher value then 3 or below 1 - Function
const player_choice = function (arr) {
  let choice;

  // Keep asking the user for a valid input if input is below 0 or greater then 3.
  do {
    choice = Number(
      prompt(
        `Please choose your weapon:
        1: ${arr[0].toUpperCase()}
        2: ${arr[1].toUpperCase()}
        3: ${arr[2].toUpperCase()}`
      )
    );
  } while (choice < 1 || choice > 3);

  // The nr that the user input must be reduce by 1 because array's starts at index 0 and not 1.
  return (player_weapon = arr[choice - 1].toLowerCase());
};

// Call the function
// player_choice(choice_array);

// A function that plays a single round of Rock Paper Scissors.

const game_simulator = function (computerSelection, playerSelection) {
  // Computer's choice = paper
  if (computerSelection === "paper" && playerSelection === "rock") {
    computer_points++;
    console.log(
      `You Lose!, ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
    );
  }

  // Computer's choice = paper
  if (computerSelection === "paper" && playerSelection === "scissors") {
    player_points++;
    console.log(
      `You Win!, ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
    );
  }

  // Computer's choice = paper
  if (computerSelection === "paper" && playerSelection === "paper") {
    console.log(`Draw!`);
  }

  // Computer's choice = rock
  if (computerSelection === "rock" && playerSelection === "rock") {
    console.log(`Draw!`);
  }

  // Computer's choice = rock
  if (computerSelection === "rock" && playerSelection === "scissors") {
    computer_points++;
    console.log(
      `You Lose!, ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
    );
  }

  // Computer's choice = rock
  if (computerSelection === "rock" && playerSelection === "paper") {
    player_points++;
    console.log(
      `You Win!, ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
    );
  }

  // Computer's choice = scissors
  if (computerSelection === "scissors" && playerSelection === "paper") {
    computer_points++;
    console.log(
      `You Lose!, ${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}`
    );
  }

  // Computer's choice = scissors
  if (computerSelection === "scissors" && playerSelection === "rock") {
    player_points++;
    console.log(
      `You Win!, ${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`
    );
  }

  // Computer's choice = scissors
  if (computerSelection === "scissors" && playerSelection === "scissors") {
    console.log(`Draw!`);
  }
};

// Call the game_simulator function with the computer and player's choice.
// game_simulator(get_computer_choice(choice_array), player_weapon);

// The game function - play a 5 round game that keeps score and reports a winner or loser at the end.

const game = function (rounds = 5) {
  let nr_of_rounds = rounds;

  for (let i = 1; i <= nr_of_rounds; i++) {
    player_choice(choice_array);
    game_simulator(get_computer_choice(choice_array), player_weapon);
    console.log(`nr_of_rounds ${i}`);
  }

  if (computer_points > player_points) {
    console.log(
      `Computer is the WINNER. Score [${computer_points} - ${player_points}]`
    );
  } else if (computer_points < player_points) {
    console.log(
      `Player is the WINNER. Score [${player_points} - ${computer_points}]`
    );
  } else {
    console.log("DRAW...");
  }
};

game();
