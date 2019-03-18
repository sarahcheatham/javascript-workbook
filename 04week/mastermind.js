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
// let correctLetterLocations = 0;
// let correctLetters = 0;

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
  let correctLetterLocations = 0;
  let correctLetters = 0;
  let targetIndex = 0;
  for(let i = 0; i < solutionArray.length; i++){
    if(solutionArray[i] === guessArray[i]){
        correctLetterLocations++;
        solutionArray[i] = null;
    } 
    for(let j = 0; j < solutionArray.length; j++){
        targetIndex = solutionArray.indexOf(guessArray[j]);
        console.log(solutionArray[i], solutionArray[j], solutionArray[i] === solutionArray[j])
        if(targetIndex > -1 && i === j){
          correctLetters++;
          solutionArray[j] = null;
        }else if(solutionArray[i] === solutionArray[j] && solutionArray[i] !== null){
          correctLetters-1
        }
    }
  }
  return `${correctLetterLocations}-${correctLetters}`
}

const mastermind = (guess, solution)=> {
  solution = 'abcd'; // Comment this out to generate a random solution
  if(guess === solution){
    console.log('You guessed it!');
    return 'You guessed it!'
  } else{
      console.log("guess:", guess);
      console.log("solution:", solution)
      const hint = generateHint(guess, solution);
      board.push(`${hint}`)
      return `${board.length}-${hint}`
  }
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
