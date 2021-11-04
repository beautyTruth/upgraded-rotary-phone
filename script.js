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
