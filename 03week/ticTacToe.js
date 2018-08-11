'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';


function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

const horizontalWin = (board, winArr)=> {
  // console.log(board[0][0]==winArr[0][0])
  
}

function verticalWin() {
  // Your code here
}

function diagonalWin() {
  // Your code here
}

const checkForWin = (row, column)=> {
  const winArr = board.slice()
  console.log(winArr[0]==board[0], winArr[0], board[0])
  
  
  // if(horizontalWin(row, column)){
  //   return true
  // } else {
  //   return false
  // }
}

//function to check that if input is less than or equal to 2
const isInputValid = (row, column) => {
  for(let i = 0; i <= board.length; i++){
    if(row <= '2' && column <= '2' ){
      // console.log(true)
      return true
    } else {
      // console.log(false)
      return false
    }
  }
}
const switchPlayer = (row, column)=>{
  if(playerTurn === 'X'){
    playerTurn = 'O';
  } else {
    playerTurn = 'X';
  }
}

//parent function 
function ticTacToe(row, column) {
  board[row][column] = playerTurn;
  if(isInputValid(row, column)){
    switchPlayer(playerTurn)
    if(checkForWin()){
      console.log('Winner!')
    }
  } else {
    console.log('Invalid Move')
  }
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });
}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
