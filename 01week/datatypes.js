'use strict';
const today = new Date();
const dd = today.getDate();
const mm = today.getMonth()+1;
const yyyy = today.getFullYear();
Date(dd,mm,yyyy)
//console.log(Date())

const num = 15;
const n = num.toString();
// console.log(typeof n)

const numString = '15';
const digit = numString.number;

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
