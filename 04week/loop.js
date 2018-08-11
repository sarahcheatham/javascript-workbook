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
