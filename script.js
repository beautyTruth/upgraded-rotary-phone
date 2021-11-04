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
// let numbers = [1, 2, 3];
// console.log(numbers);

// objects
// const person = {
//   name: "Phil", // key-value pair or properties
//   age: 47,
// };
// console.log(person);

// function

// function addMe() {
//   return (12 + 5) * 19;
// }

// addMe();

// console.log(addMe());

/* 
Variable declarations:

1- var

2- let

3- const

*/

// the naming conventions for these: 1) they must make sense 2) they must be understandable 3) they must be camelCase

// let age = 47;
// console.log(age);

// let firstName = "Phil";
// console.log(firstName);

// string methods

// new String()

// let pasta = new String("penne");
// console.log(pasta);

// string Literal

// let movie = "interstellar";
// console.log(movie);

// console.log(movie.toUpperCase());

// let movieTwo = "INTERSTELLAR";
// console.log(movieTwo.toLowerCase());

// concatenation

// let firstName = "Christopher";
// let lastName = "Nolan";

// console.log(firstName + lastName);
// console.log(firstName + " " + lastName);

// console.log(`${firstName} ${lastName}`);

// length property

// console.log(firstName.length);
// console.log(lastName.length);

// finding the index

// let kitty = "Kitty the kittycat";

// console.log(kitty);
// console.log(kitty[8]);
// console.log(kitty[4]);
// console.log(kitty[12]);
// console.log(kitty[kitty.length - 1]);

// trim method
// let rock = "       lava     ";
// console.log(rock.trim());

// indexOf method
// console.log(kitty.indexOf("t"));

// charAt method
// console.log(kitty.charAt("4"));

// slice method
// console.log(kitty.slice(4));
// console.log(kitty.slice(4, 10));

// split method
// console.log(kitty.split(" "));

// includes method
// console.log(kitty.includes("@"));
// console.log(kitty.includes("i"));

// replace method
// console.log(kitty.replace("the", "boop"));

// _*_*_*_*_*_*_comparison operators _*_*_*_*_*_*_*_*_*_*

// greater than >
// less than <
// greater than or equal to >=
// less than or equal to <=

// the == equality operator (this is type coercive and is evaluating the actual value)

// console.log(1 == 1);
// console.log(1 == "1");
// console.log("x" == "x");
// console.log(true == true);
// console.log(false == true);
// console.log(0 == "");
// console.log(undefined == null);
// console.log(false == 0);
// console.log(true == 1);

// the === strict equality operator

// console.log(1 === 1);
// console.log(1 === "1");
// console.log("x" === "x");
// console.log(true === true);
// console.log(false === true);
// console.log(0 === "");
// console.log(undefined === null);
// console.log(false === 0);
// console.log(true === 1);

// the != non-equality operator

// console.log(1 != 1);
// console.log(1 != "1");
// console.log("x" != "x");
// console.log(true != true);
// console.log(false != true);
// console.log(0 != "");
// console.log(undefined != null);
// console.log(false != 0);
// console.log(true != 1);

// the !== strict non-equality operator

// console.log(1 !== 1);
// console.log(1 !== "1");
// console.log("x" !== "x");
// console.log(true !== true);
// console.log(false !== true);
// console.log(0 !== "");
// console.log(undefined !== null);
// console.log(false !== 0);
// console.log(true !== 1);

// _+_+_+_+_+_+_+_+_ conditionals _+_+_+_+_+_+_+_+_+_+_

// the if statement -- checking for a single condition

// the else statement -- checking for two conditions

// else if statement -- checking for more than two conditions

// the switch statement -- checking for a single condition

// let score = 10;

// switch (score) {
//   case 10:
//     console.log("way to go, bro");
// }

// default statement -- checking for two conditions

// let score = 11;

// switch (score) {
//   case 10:
//     console.log("you gotti ths");
//     break;
//   default:
//     console.log("yo no gotti this mang");
// }

// switch default statement -- checking for more than two conditions

// let score = 8;
// switch (score) {
//   case 10:
//     console.log("grade a");
//     break;
//   case 9:
//     console.log("grade b");
//     break;
//   case 8:
//     console.log("grade c");
//     break;
//   case 7:
//     console.log("grade d");
//     break;
//   default:
//     console.log("grade f");
// }

// the ternary operator -- checks for ONLY two conditions

// let score = 11;

// score === 10
//   ? console.log("you got an A")
//   : console.log("you got something other than an A");

// the logical AND operator -- &&

// let age = 25;

// if (age >= 1 && age <= 12) {
//   console.log("minor");
// } else if (age >= 13 && age <= 19) {
//   console.log("teenager");
// } else {
//   console.log("adult");
// }

// the logical OR operator -- || -- in which one side of the pipes needs to be true

// if (10 > 8 || 8 < 5) {
//   console.log("success");
// }

// the logical NOT operator -- ! --

// let temp = 22;
// if (!(temp === 20)) {
//   console.log("man it's still cold doe");
// }

// array literal -- an array --  it is a collection of data

// collections of

// 1- songs
// 2- posts
// 3- comments
// 4- numbers
// 5- counts
// 6- poems

// it can be anything -- get it

let numbers = [1, 2, 3, 4, 5];
let colors = ["pink", "purple", "fuscia"];
let mixed = ["peachpuff", 45, null, undefined, NaN, false];
console.log(numbers);
console.log(colors);
console.log(mixed);

// accesing a specific value of an index
// console.log(colors[1]);
// console.log(mixed[1]);
// console.log(numbers[3]);

// changing the value of an index in an array
// numbers[4] = 25;
// console.log(numbers);

// adding an item to the end of an array

mixed[mixed.length] = "editing";
console.log(mixed);
