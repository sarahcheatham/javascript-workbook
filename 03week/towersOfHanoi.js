'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

let resetStacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};


function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

//make the 2 tests for this function 
const movePiece = (beforeMoveArr, beforePlaceArr) => {
  const lastNum = beforeMoveArr.pop();
  const newEndStackLength = beforePlaceArr.push(lastNum);
  return newEndStackLength
};

// function compares beforeMoveArr last item value == beforePlaceArr last item value
const isLegal = (beforeMoveArr, beforePlaceArr)=>{
  const beforeMoveLength = beforeMoveArr[beforeMoveArr.length-1];
  const beforePlaceLength= beforePlaceArr[beforePlaceArr.length-1];
  if(legalMove(beforeMoveArr, beforePlaceArr)===false){
    if(beforePlaceLength === undefined || beforeMoveLength <= beforePlaceLength){
      // console.log(true)
      return true
    } else {
      // console.log(false)
      return false
    }
  }
};
//function to check if the input is valid not a space or the correct letter
//need to work on
const legalMove = (beforeMoveArr, beforePlaceArr)=>{
  const beforeMoveLength = beforeMoveArr[beforeMoveArr.length-1];
  const beforePlaceLength = beforePlaceArr[beforePlaceArr.length-1];
  if(beforeMoveArr === null && beforePlaceArr === null || beforeMoveLength === undefined && beforePlaceLength === undefined){
    console.log(true)
    return true
  } else {
    console.log(false)
    return false
  }
  
}

const checkForWin = (beforeMoveArr, beforePlaceArr) => {
  if(stacks['b'].length === 4 || stacks['c'].length === 4){
    // console.log(true)
    return true
  } else {
    // console.log(false)
    return false
  }
};

const reset =()=>{
 stacks = resetStacks;
}

const towersOfHanoi = (startStack, endStack) => { 
  //what the array looks like before you move the last item in the key you are inputing in startStack
  const beforeMoveArr = stacks[startStack];
  //what the array looks like before you place the last item in the key you are inputing in endStack
  const beforePlaceArr = stacks[endStack];
  if(isLegal(beforeMoveArr, beforePlaceArr)){
    movePiece(beforeMoveArr, beforePlaceArr);
    if(checkForWin(beforeMoveArr, beforePlaceArr)){
      console.log('WINNER!');
      console.log(reset())
    } 
  } else {
    console.log('INVALID MOVE');
  }

};

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
