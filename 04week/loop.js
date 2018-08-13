'use strict';

const carsInReverse = [
    'Ford', 'Dodge', 'Toyota', 'Chevy'
  ];

const persons = {
    firstName: 'Jane',
    lastName: 'Doe',
    birthDate: 'Jan 5, 1925',
    gender: 'female'
}

for(let x in persons){
    console.log(x)
}

for(let x in persons){
    if(x === 'birthDate'){
      console.log(persons[x])
    }
}

let i = 0
while(i<=1000){
  console.log(i++)
}

let i = 0;
do{
  console.log(i)
  i++
} while (i <= 1000)

//When is a for loop better than a while loop?:

//it is better to use a for loop when you know the number of iterations 
//you need to do and when you have an incrementing variable.

//use a while loop when you are not sure how many iterations you need to carry out. 



//What is the difference between a for loop and a for...in loop?:

//use a for loop when you iterate over an array because for...in might not give you the array in order 

//use a for...in loop when you want to iterate over an object because in objects the order of access isn't as important. 



//What is the difference between a while loop and a do...while loop?

//In a while loop the condition is tested at the beginning and only runs the code if the condition is true.

//In a do...while loop the condition is tested at the end of the loop, so the do...while will execute the code block at least once
//even if the condition evaluates to false. 