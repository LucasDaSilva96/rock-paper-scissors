"use strict";

// DOM - selections
const h1 = document.querySelector("h1");
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

// Random img picker
const random_img_generator = function (arr) {
  let random_nr = Math.floor(Math.random() * arr.length);
  return arr[random_nr];
};

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

// Random Quote generator
const quote_generator = function (arr) {
  let random_nr = Math.floor(Math.random() * arr.length);
  return arr[random_nr];
};
// The array that contains the different choices that the computer can make.
const choice_array = ["paper", "rock", "scissors"];

// Function that simulates the computers' choice.
const get_computer_choice = function (arr) {
  // Generates a nr between 0 and arr.length.
  let random_nr = Math.floor(Math.random() * arr.length);

  // Return the array at the current random_nr position.

  return arr[random_nr];
};

// A global variable to keep track of the user's choice and the computer's choice.
let player_weapon = "";

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
    quote_text_box.textContent = quote_generator(quotes_array_wrong);
    robot_img.src = `${random_img_generator(images_array)}`;
    point_tracker(computer_points, player_points);
  }

  // Computer's choice = paper
  if (computerSelection === "paper" && playerSelection === "scissors") {
    player_points++;
    human_score_p.textContent = `${player_points}`;
    human_score_box.classList.add("shadow-show");
    ai_score_box.classList.remove("shadow-show");
    quote_text_box.textContent = quote_generator(quotes_array_correct);
    robot_img.src = `${random_img_generator(images_array)}`;
    point_tracker(computer_points, player_points);
  }

  // Computer's choice = paper
  if (computerSelection === "paper" && playerSelection === "paper") {
    quote_text_box.textContent = "Same choose as the AI...";
    ai_score_box.classList.remove("shadow-show");
    human_score_box.classList.remove("shadow-show");
    robot_img.src = `${random_img_generator(images_array)}`;
    point_tracker(computer_points, player_points);
  }

  // Computer's choice = rock
  if (computerSelection === "rock" && playerSelection === "rock") {
    quote_text_box.textContent = "Same choose as the AI...";
    ai_score_box.classList.remove("shadow-show");
    human_score_box.classList.remove("shadow-show");
    robot_img.src = `${random_img_generator(images_array)}`;
    point_tracker(computer_points, player_points);
  }

  // Computer's choice = rock
  if (computerSelection === "rock" && playerSelection === "scissors") {
    computer_points++;
    ai_score_p.textContent = `${computer_points}`;
    ai_score_box.classList.add("shadow-show");
    human_score_box.classList.remove("shadow-show");
    quote_text_box.textContent = quote_generator(quotes_array_wrong);
    robot_img.src = `${random_img_generator(images_array)}`;
    point_tracker(computer_points, player_points);
  }

  // Computer's choice = rock
  if (computerSelection === "rock" && playerSelection === "paper") {
    player_points++;
    human_score_p.textContent = `${player_points}`;
    human_score_box.classList.add("shadow-show");
    ai_score_box.classList.remove("shadow-show");
    quote_text_box.textContent = quote_generator(quotes_array_correct);
    robot_img.src = `${random_img_generator(images_array)}`;
    point_tracker(computer_points, player_points);
  }

  // Computer's choice = scissors
  if (computerSelection === "scissors" && playerSelection === "paper") {
    computer_points++;
    ai_score_p.textContent = `${computer_points}`;
    ai_score_box.classList.add("shadow-show");
    human_score_box.classList.remove("shadow-show");
    quote_text_box.textContent = quote_generator(quotes_array_wrong);
    robot_img.src = `${random_img_generator(images_array)}`;
    point_tracker(computer_points, player_points);
  }

  // Computer's choice = scissors
  if (computerSelection === "scissors" && playerSelection === "rock") {
    player_points++;
    human_score_p.textContent = `${player_points}`;
    human_score_box.classList.add("shadow-show");
    ai_score_box.classList.remove("shadow-show");
    quote_text_box.textContent = quote_generator(quotes_array_correct);
    robot_img.src = `${random_img_generator(images_array)}`;
    point_tracker(computer_points, player_points);
  }

  // Computer's choice = scissors
  if (computerSelection === "scissors" && playerSelection === "scissors") {
    quote_text_box.textContent = "Same choose as the AI...";
    ai_score_box.classList.remove("shadow-show");
    human_score_box.classList.remove("shadow-show");
    robot_img.src = `${random_img_generator(images_array)}`;
    point_tracker(computer_points, player_points);
  }
};

// The game function - play a 5 round game that keeps score and reports a winner or loser at the end.
const point_tracker = function (computer_points, player_points) {
  if (computer_points === 5 || computer_points > 5) {
    h1.textContent = "You LOST the game...";
    play_btn.textContent = "Play Again";
    play_btn.classList.remove("no-show");
    quote_text_box.classList.add("no-show");
    weapons_container.classList.add("no-show");
  }
  if (player_points === 5 || player_points > 5) {
    h1.textContent = "You are the WINNER!";
    play_btn.textContent = "Play Again";
    play_btn.classList.remove("no-show");
    quote_text_box.classList.add("no-show");
    weapons_container.classList.add("no-show");
  }
};

// Get player's choice
const player_choice = function () {
  const boxes = document.querySelectorAll(".choice-box");
  let rounds = 1;
  boxes.forEach((el) => {
    el.addEventListener("click", function () {
      h1.textContent = `Round: ${rounds}`;
      rounds++;
      if (el.classList.contains("rock")) {
        player_weapon = "rock";

        return game_simulator(get_computer_choice(choice_array), player_weapon);
      }

      if (el.classList.contains("paper")) {
        player_weapon = "paper";

        return game_simulator(get_computer_choice(choice_array), player_weapon);
      }

      if (el.classList.contains("scissors")) {
        player_weapon = "scissors";

        return game_simulator(get_computer_choice(choice_array), player_weapon);
      }
    });
  });
};

// The Play function
play_btn.addEventListener("click", function () {
  player_points = 0;
  computer_points = 0;
  human_score_p.textContent = `${player_points}`;
  ai_score_p.textContent = `${computer_points}`;
  h1.textContent = "Save Mankind";
  play_btn.classList.add("no-show");
  quote_text_box.textContent = "Choose your weapon";
  quote_text_box.classList.remove("no-show");
  weapons_container.classList.remove("no-show");

  player_choice();
});
