'use strict';


console.log(`Pig Game Ready!`);

// game state variables
let scores, currentScore, activePlayer, playing;

// Select player 0 (player 1)
const player0El = document.querySelector('.player--0');

// Select player 1 (player 2)
const player1El = document.querySelector('.player--1');

// Select score 0 element
const score0El = document.querySelector('#score--0');

// Select score 1 element
const score1El = document.querySelector('#score--1');

const current0El = document.querySelector('#current--0');

const current1El = document.querySelector('#current--1');

const diceEl = document.querySelector('.dice');

const btnRollEl = document.querySelector('.btn--roll');

const btnHoldEl = document.querySelector('.btn--hold');

const btnNewEl = document.querySelector('.btn--new');

