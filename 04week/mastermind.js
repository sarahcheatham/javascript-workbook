'use strict';

const assert = require('assert');
const readline = require('readline');
const colors = require('colors');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = 'abcd';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let correctLetterLocations = 0;
let correctLetters = 0;

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

const generateHint = (guess, solution)=> {
  const solutionArray = solution.split('');
  const guessArray = guess.split('');
  const targetIndex = [];
  for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
      if((i === j) && (solutionArray[i] === guessArray[j]) && (solution[i] !== undefined)){
        console.log(solutionArray[i], guessArray[j])
        correctLetterLocations++;
        solutionArray[i] = null;
      } else if((solutionArray[i] === guessArray[j]) && (solution[i] !== undefined)){
        correctLetters++;
        solutionArray[i] = null;
      }
    }
  }
  console.log(`${correctLetterLocations}-${correctLetters}`)
  return `${correctLetterLocations}-${correctLetters}`
}

const mastermind = (guess, solution)=> {
  solution = 'abcd'; // Comment this out to generate a random solution
  if(guess === solution){
    console.log('You guessed it!');
    return 'You guessed it!'
  } else {
    const hint = generateHint(guess, solution);
    board.push(`${guess} ${hint}`)
    // console.log(`board:${board}`)
    console.log(board.length, hint[0])
  }
  // console.log(typeof solution)
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
