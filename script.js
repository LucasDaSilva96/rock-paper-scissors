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
