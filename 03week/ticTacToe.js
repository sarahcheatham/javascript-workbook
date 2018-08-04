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

function horizontalWin() {
  // Your code here
  
}

function verticalWin() {
  // Your code here
}

function diagonalWin() {
  // Your code here
}

function checkForWin() {
  // Your code here
}

const isRowInputValid = (row) => {
  return row === '0' || row === '1' || row === '2'
}

const isColumnInputValid = (column) => {
  return column === '0' || column === '1' || column === '2'
}

//function to check that if input is 0, 1, or 2
//right now if you enter an incorrect row first then it will not let you enter a column
const isInputValid = (row, column) => {
  return isRowInputValid(row) && isColumnInputValid(column)
}

//parent function 
function ticTacToe(row, column) {
  // Your code here
  board[row][column] = playerTurn
  console.log(isInputValid(row, column))

  // console.log(row, column)
  // const boardLength = board.length;
  // const firstRow = board[0];
  // const firstRowLength = firstRow.length;
  // const firstRowLastElement = firstRow[firstRowLength -1];
  // // console.log(firstRowLastElement)
  // const middleRow = board[1];
  // const lastRow = board[2];
  
  // middleRow.forEach(function(item, index, array){
  //   console.log("index[" + index + "]: " + item + " ")
  //   console.log(typeof item)
  // })
  
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
