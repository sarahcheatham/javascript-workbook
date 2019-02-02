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

const generateHint = (solution, guess)=> {
  const solutionArray = solution.split('');
  const guessArray = guess.split('');
  const targetIndex = [];
  for(let i = 0; i < solutionArray.length; i++){
    for(let j = 0; j < guessArray.length; j++){
      if(i === j && solutionArray[i] === guessArray[j]){
        solutionArray[i] = null;
        correctLetterLocations++;
        const red = colors.red(solutionArray[i]);
        console.log(red)
      } else if(solutionArray[i] === guessArray[j]){
        const letterIndex = guessArray.indexOf(solutionArray[i]);
        targetIndex.push(letterIndex)
        correctLetters++;
        const hypenLetters = `-${solutionArray[i]}-`;
        // console.log(hypenLetters)
        return hypenLetters
      }
    }
  }
}

const mastermind = (guess)=> {
  solution = 'abcd'; // Comment this out to generate a random solution
  if(guess === solution){
    console.log('You guessed it!');
  } else {
    const hint = generateHint(solution, guess);
    board.push(`${guess} ${hint}`)
    console.log(board)
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
