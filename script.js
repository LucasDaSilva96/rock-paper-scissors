"use strict";

// DOM - selections
const play_btn = document.querySelector(".play-btn");
const quote_text_box = document.querySelector(".quote");
const robot_img = document.querySelector(".robot-img");
const human_score_p = document.querySelector(".score-human");
const human_score_box = document.querySelector(".human-box");
const ai_score_p = document.querySelector(".score-robot");
const ai_score_box = document.querySelector(".ai-box");
const weapons_container = document.querySelector(".weapon-container");
// Pistol = Rock, Shotgun = Paper & Sniper = Scissors
const pistol_choice = document.querySelector(".rock");
const shotgun_choice = document.querySelector(".paper");
const sniper_choice = document.querySelector(".scissors");

// Images array
const images_array = [
  "imgs/robot-looking-up.avif",
  "imgs/robot-chargin.avif",
  "imgs/robot-flying.avif",
  "imgs/robot-brb.avif",
];

// Quotes array if player choose right
const quotes_array_correct = [
  "Good job!",
  "Keep going!",
  "The savior is here!",
  "You are the chosen one!",
];

// Quotes array if player choose wrong
const quotes_array_wrong = [
  "OMG! Save US!",
  "NO! Don't let AI win!",
  "We need help!",
  "AI is taking over...",
];
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

// Get player's choice
pistol_choice.addEventListener("click", function () {
  player_weapon = "rock";
});

shotgun_choice.addEventListener("click", function () {
  player_weapon = "paper";
});

sniper_choice.addEventListener("click", function () {
  player_weapon = "scissors";
});

// Global Variables to keep track of the points after each round.
let computer_points = 0;
let player_points = 0;

// A function that plays a single round of Rock Paper Scissors.

const game_simulator = function (computerSelection, playerSelection) {
  // Computer's choice = paper
  if (computerSelection === "paper" && playerSelection === "rock") {
    computer_points++;
    ai_score_p.textContent = `${computer_points}`;
    ai_score_box.classList.add("shadow-show");
    human_score_box.classList.remove("shadow-show");
  }

  // Computer's choice = paper
  if (computerSelection === "paper" && playerSelection === "scissors") {
    player_points++;
    human_score_p.textContent = `${player_points}`;
    human_score_box.classList.add("shadow-show");
    ai_score_box.classList.remove("shadow-show");
  }

  // Computer's choice = paper
  if (computerSelection === "paper" && playerSelection === "paper") {
    quote_text_box.textContent = "You chose the same weapon as the AI";
    ai_score_box.classList.remove("shadow-show");
    human_score_box.classList.remove("shadow-show");
  }

  // Computer's choice = rock
  if (computerSelection === "rock" && playerSelection === "rock") {
    quote_text_box.textContent = "You chose the same weapon as the AI";
    ai_score_box.classList.remove("shadow-show");
    human_score_box.classList.remove("shadow-show");
  }

  // Computer's choice = rock
  if (computerSelection === "rock" && playerSelection === "scissors") {
    computer_points++;
    ai_score_p.textContent = `${computer_points}`;
    ai_score_box.classList.add("shadow-show");
    human_score_box.classList.remove("shadow-show");
  }

  // Computer's choice = rock
  if (computerSelection === "rock" && playerSelection === "paper") {
    player_points++;
    human_score_p.textContent = `${player_points}`;
    human_score_box.classList.add("shadow-show");
    ai_score_box.classList.remove("shadow-show");
  }

  // Computer's choice = scissors
  if (computerSelection === "scissors" && playerSelection === "paper") {
    computer_points++;
    ai_score_p.textContent = `${computer_points}`;
    ai_score_box.classList.add("shadow-show");
    human_score_box.classList.remove("shadow-show");
  }

  // Computer's choice = scissors
  if (computerSelection === "scissors" && playerSelection === "rock") {
    player_points++;
    human_score_p.textContent = `${player_points}`;
    human_score_box.classList.add("shadow-show");
    ai_score_box.classList.remove("shadow-show");
  }

  // Computer's choice = scissors
  if (computerSelection === "scissors" && playerSelection === "scissors") {
    quote_text_box.textContent = "You chose the same weapon as the AI";
    ai_score_box.classList.remove("shadow-show");
    human_score_box.classList.remove("shadow-show");
  }
};

// Call the game_simulator function with the computer and player's choice.
game_simulator(get_computer_choice(choice_array), player_weapon);

// The game function - play a 5 round game that keeps score and reports a winner or loser at the end.

const game = function (rounds = 5) {
  let nr_of_rounds = rounds;

  for (let i = 1; i <= nr_of_rounds; i++) {
    // player_choice(choice_array);
    game_simulator(get_computer_choice(choice_array), player_weapon);
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
