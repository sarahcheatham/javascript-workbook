'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = 'abcd';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let correctLetterLocations = 0;

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateHint = (solution, guess)=> {
  const solutionArray = solution.split('');
  const guessArray = guess.split('');
  for(let i = 0; i < solutionArray.length; i++){
    for(let j = 0; j < guessArray.length; j++){
      if(solutionArray[i] === guessArray[j]){
        correctLetterLocations++
        console.log(correctLetterLocations)
      }
      console.log(`solution[i]: ${solutionArray[i]}, guess[j]: ${guessArray[j]}`)
    }
  }
  console.log(`guess: ${guessArray}`)
}

const mastermind = (guess)=> {
  solution = 'abcd'; // Comment this out to generate a random solution
  if(guess === solution){
    console.log('You guessed it!');
  } else {
    generateHint(solution, guess)
  }
  console.log(typeof solution)
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
