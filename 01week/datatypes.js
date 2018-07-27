'use strict';
const today = new Date();
const dd = today.getDate();
const mm = today.getMonth()+1;
const yyyy = today.getFullYear();
Date(dd,mm,yyyy)
//console.log(Date())

const numToString = (num)=>{
    return num.toString();
}

numToString(5)

const stringToNum = (string) =>{
    return string.number;
}

console.log(stringToNum('fifteen'))

const sumOfTwoNumbers = (num1, num2)=> {
  return num1 + num2;
}
sumOfTwoNumbers(60, 70)

const score = parseInt(Math.random() * 100, 10);
if (score > 50 && score < 95) {
  document.write('Winner!');
} else {
  document.write('Loser.');
}

const fruit = parseInt(Math.random() * 100, 10);
if (fruit > 30 || fruit < 70) {
  document.write('apples');
}

const notrue = parseInt(Math.random() * 100, 10);
if (fruit != 30 || fruit != 70) {
  document.write('oh well');
}
