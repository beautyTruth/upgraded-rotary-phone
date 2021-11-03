const newYear = document.querySelector(".year");
const newYearCode = new Date().getFullYear();
newYear.textContent = newYearCode;

// JS Data types :

// 1 primitive data types
// 2 reference types

// -----------

// 1 primitive data types

// 1 Number
// 2 String
// 3 Boolean
// 4 Undefined
// 5 Null
// 6 Symbol
// 7 bigInt

// 1 reference data types

// 1 arrays
// 2 objects
// 3 functions

// array
let numbers = [1, 2, 3];
console.log(numbers);

// objects
const person = {
  name: "Phil", // key-value pair or properties
  age: 47,
};
console.log(person);

// function

function addMe() {
  return (12 + 5) * 19;
}

addMe();

console.log(addMe());

/* 
Variable declarations:

1- var

2- let

3- const

*/

// the naming conventions for these: 1) they must make sense 2) they must be understandable 3) they must be camelCase

let age = 47;
console.log(age);

let firstName = "Phil";
console.log(firstName);
