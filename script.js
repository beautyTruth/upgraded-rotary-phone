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

// let numbers = [1, 2, 3, 4, 5];
// let colors = ["pink", "purple", "fuscia"];
// let mixed = ["peachpuff", 45, null, undefined, NaN, false];
// console.log(numbers);
// console.log(colors);
// console.log(mixed);

// accesing a specific value of an index
// console.log(colors[1]);
// console.log(mixed[1]);
// console.log(numbers[3]);

// changing the value of an index in an array
// numbers[4] = 25;
// console.log(numbers);

// adding an item to the end of an array

// mixed[mixed.length] = "editing";
// console.log(mixed);

// ----the shift method -- removes from the start of the array

// let movies = ["Interstellar", "Tommy Boy"];
// console.log(movies);

// movies.shift();
// console.log(movies);

// ----the unshift method -- adds to the beginning of the array

// movies.unshift("The Revenant");
// console.log(movies);

// ----the pop method -- removes from the end of an array

// movies.pop();
// console.log(movies);

// movies.push("Alien");
// console.log(movies);

// let numbers = [1, 2, 3, 4, 54, 115, 789, 324];
// console.log(numbers);

// slice method --- creates an array from the starting index to the ending index (but doesn't change the original array)

// let num1 = numbers.slice(1, 4);
// console.log(num1);

// let num1 = numbers.slice(-1)
// let num1 = numbers.slice(-2)
// let num1 = numbers.slice(-4);
// console.log(num1);

// splice method --- removes, replaces or adds a specified number of items and changes the array

// removing
// let num2 = numbers.splice(0, 4);
// console.log(num2);
// console.log(numbers); // this array is now changed

// removing and replacing
// let num2 = numbers.splice(0, 2, 222, 333);
// console.log(num2);
// console.log(numbers); // this array is now changed

// adding
// let num2 = numbers.splice(2, 0, 222, "The Dark Knight");
// console.log(num2);
// console.log(numbers); // this array is now changed

// the includes method -- checks to see if the array includes a specified item

// const moods1 = ["happy", "mellow", "sad", "stoked", "positive"];
// console.log(moods1.includes("mellow"));
// console.log(moods1.includes("pissed"));

// the concat method -- merges two or more arrays together
// const moods2 = ["chillin", "miffed", "bummed"];
// console.log(moods1.concat(moods2));
// console.log(moods2.concat(moods1));

// however, you cannot change or redeclare
// ex -- moods2 = [1,2,3,4,5] would create an error

// reverse method
// console.log(moods2.reverse());

// the join method
// console.log(moods2.join());
// console.log(moods2.join(""));
// console.log(moods2.join(" "));
// console.log(moods2.join("-"));

// -------all about nesting in arrays - can result in an array of array------
// const favs = [
//   [
//     "A Clockwork Orange",
//     "Barry Lyndon",
//     "Full Metal Jacket",
//     "Lolita",
//     "2001: A Space Odyssey",
//   ],
//   [
//     "Boogie Nights",
//     "There Will Be Blood",
//     "The Master",
//     "Magnolia",
//     "Inherent Vice",
//   ],
//   [
//     "The Dark Knight",
//     "Interstellar",
//     "Tenet",
//     "Inception",
//     "The Dark Knight Rises",
//   ],
//   [
//     "Christopher Nolan",
//     "Oliver Stone",
//     "Stanley Kubrick",
//     "Paul Thomas Anderson",
//   ],
//   ["Thomas Hardy", "Amy Adams", "Charlize Theron", "Daniel Day Lewis"],
// ];

// console.log(favs);
// console.log(favs[1]);
// console.log(favs[4]);
// console.log(favs[4][3]);
// console.log(
//   `${favs[4][2]} is the archetype of my ideal woman and likely most guys' archetypal ideal woman.`
// );

/*
object literal -- object -- they store key-value pairs otherwise known as properties
*/

// const address = {
//   city: "Agios Onoufrios",
//   country: "Greece",
// };

// console.log(address);

// accessing the object's data -- method 1

// console.log(address.city, "is absolutely gorgeous");
// console.log(
//   `${address.country} is my favorite place in the world.  Specifically the Aegean Sea.`
//   );

// accessing the object's data -- method 2 - array brackets

// const person = {
//   name: "Kevin",
//   age: 32,
//   "Full Address": "Brooklyn, NY",
//   job: "point forward",
//   1985: "DoB",
// };

// console.log(person);
// console.log(person["Full Address"]);
// // console.log(person[job]); // error
// console.log(person["job"]);
// console.log(person[1985]); // can use the string or the number because JavaScript coerces the type

/*
modifying and updating objects -- change the object data
*/

// const movieRatings = {
//   Interstellar: 9.9,
//   "The Dark Knight": 9.3,
//   "There Will Be Blood": 9.1,
//   "Full Metal Jacket": 8.9,
//   Platoon: 9.2,
// };

// movieRatings["Platoon"] = 9.8;
// movieRatings["Full Metal Jacket"] = 9.5;

// console.log(movieRatings);

// updating object data --- creating more key-value pairs

// movieRatings["Blade Runner"] = 9.9;
// movieRatings["Apocalypse Now"] = 9.5;

// console.log(movieRatings);

/* 
nesting objects within objects ------------
*/

// const user = {
//   stinkyBritches69: {
//     name: "Willie",
//     job: "quarterback",
//   },
//   payGrade: "Alpha",
// };

// console.log(user);
// console.log(user["stinkyBritches69"]);
// console.log(user["stinkyBritches69"].job);
// console.log(user["stinkyBritches69"]["name"]);

/* 
nesting arrays within objects ------------
*/

// const user = {
//   thunderKiss69: {
//     name: "Shabba",
//     job: "vocalist",
//   },
//   payGrade: "Alpa",
//   hobbies: ["rapping", "dat booty", "ganga", "existentialist thought"],
// };

// console.log(user);
// console.log(user["hobbies"]);
// console.log(user["hobbies"][3]);

/* 
nesting objects within arrays ------------
*/
// const user2 = [
//   {
//     name: "Tony Montana",
//     job: "cocaine importer",
//   },
//   "energetic self starter",
//   ["organizes big cocaine buys", "hates Colombians", "likes bubblebaths"],
// ];

// console.log(user2);
// console.log(user2[0]);
// console.log(user2[0]["job"]);
// console.log(`${user2[0]["name"]} is an ${user2[1]} who really ${user2[2][2]}.`);

/* 
FOR LOOPS!!!! ------------

1. a variable is defined (the starting point of the loop)
2. the ending point is defined
3. the increment is defined

the syntax:

for(initialExpression; condition; incrementExpression) {
  the code we want to run for each loop
}

for() {

}

*/

// example 1

// for (a = 1; a <= 5; a++) {
//   // console.log("I am a for loop!");
//   console.log("I am a for loop!", a);
// }

// example 2 ---- even numbers from 0 to 19

// for (b = 0; b <= 19; b += 2) {
//   console.log(b, "How are you doing?");
// }

// example 3 ---- odd numbers from 0 to 19

// for (b = 1; b < 19; b += 2) {
//   // note the starting value
//   console.log(b, "How are you doing?");
// }

// example 4 ---- every third number from 0 to 19

// for (i = 2; i <= 19; i += 3) {
//   // note the starting value
//   console.log(i, "How are you doing?");
// }

// example 5 ---- infinite loops

// the below may crash your computer; the condition is always true, so it will run until infinity

// for (c=10; c>=0; c++) {
//   console.log(c)
// }

/* 
LOOPING THROUGH ARRAYS!!!! ------------
*/

// const alienFranchise = [
//   "alien",
//   "aliens",
//   "alien3",
//   "alien resurrection",
//   "prometheus",
//   "alien covenant",
// ];

// for (e = 0; e < alienFranchise.length; e++) {
//   // console.log(e);
//   console.log(e, alienFranchise[e]);
// }

/* 
LOOPING THROUGH objects nested within ARRAYS!!!! ------------
*/

// const favBooks = [
//   {
//     bookTitle: "Ulysses",
//     author: "James Joyce",
//   },
//   {
//     bookTitle: "Gravity's Rainbow",
//     author: "Thomas Pynchon",
//   },
//   {
//     bookTitle: "Syntactic Structures",
//     author: "Noam Chomsky",
//   },
// ];

// console.log(favBooks);

// for (i = 0; i < favBooks.length; i++) {
// console.log(favBooks);
// console.log(i, favBooks[i]);
// console.log(favBooks[i]["author"]);
// console.log(favBooks[2]["author"]); // prints Noam Chomsky three times
// }

/* 
WHILE LOOPS!!!! ------------
*/

/* 
1. declare a variable -- above and outside of the loop
2. while(condition) {run this code; variable++}

let v = 1;
while() {

}

*/

// example 1
// let k = 1;
// while (k <= 10) {
//   console.log(k);
//   k++;
// }

// iterate through an array using a while loop

// const colors = [
//   "peachpuff",
//   "papayawhip",
//   "plum",
//   "gainsboro",
//   "cornflowerblue",
// ];

// let i = 0;
// while (i < colors.length) {
//   // console.log(colors);
//   console.log(i, colors[i]);
//   i++;
// }

/* 
Function DECLARATIONS!!!! ------------ AKA function statements

function myFunc(params) {
  
}

when the function is called, arguments are passed -- in the place of the appropriate paramaters
*/

// function myFunc() {
//   console.log("I am Iron Man");
// }

// myFunc();

// example 1

// function sumNums() {
//   console.log(5 + 6);
// }

// sumNums();

// example 2

// function message() {
//   let papayawhip = "#ffefd5";
//   console.log(
//     `The hexidecimal value for the papayawhip color is ${papayawhip}`
//   );
// }

// message();

// example 3

// function color(hex) {
//   console.log(hex);
// }

// color("#ffefd5");
// color("#ffeeff");
// color("#ffd5ed");

// example 4
// function calcNums(x) {
//   console.log(((x + 5) * x) / (x + 10));
// }

// calcNums(33);
// calcNums(200);
// calcNums(22);

// example 5

// function movieRating(rating) {
//   console.log(`This movie's rating is ${rating}`);
// }

// movieRating(9.5); // 9.5 -- the argument -- now goes into the awaiting paramater "rating"

// example 6

// function calcNums(x, y) {
//   console.log(x + y);
// }

// calcNums(9, 8);
// calcNums(79, 89);

// example 7

// function moviePerf(movieName, boxOffice) {
//   console.log(
//     `The film ${movieName} earned $${boxOffice} million at the box office this weekend.`
//   );
// }

// moviePerf("Tommy Boy", 300);
// moviePerf("Ernest Goes To Camp", 0.5);
// moviePerf("Boogie Nights", 998);

/* 
The return keyword!!!! ------------ "wrap it up; we are done"
*/

// example 1

// function sum(a, b) {
//   return a + b;
// }

// console.log(sum(44, 3));

// let sumNums = sum(234, 465);

// console.log(sumNums);

// example 2

// function checkScore(currentScore, passingScore) {
//   if (currentScore >= passingScore) {
//     return "Congratulations! You passed!";
//   } else {
//     return "Aww, you failed. Better luck next time!";
//   }
// }

// let testResult = checkScore(99, 69);
// let testResult = checkScore(53, 69);
// let testResult = checkScore(19, 45);
// let testResult = checkScore(32 , 32);

// console.log(testResult);

//below omits the unnecessary else statement and functions the exact same way in a more dry method
// note that a ternary operator can also be used

// function checkScore(currentScore, passingScore) {
//   if (currentScore >= passingScore) {
//     return "Congratulations! You passed!";
//   }
//   return "Aww, you failed. Better luck next time!";
// }

// let testResult = checkScore(99, 69);
// let testResult = checkScore(53, 69);
// let testResult = checkScore(19, 45);
// let testResult = checkScore(32 , 32);

/* 
Variable function scope!!!! ------------ 

let 
const
var

*/

// review the rules for let, const, and var scopes

/*
variable BLOCK scope ------ review as necessary, basically, whenever it is in the block -- {} -- it is available there. The block, global, and function scope -- you understand this, Phil, don't overthink it like minimal pairs.
*/

/* 
========= function expressions, part 1 of 4 (function EXPRESSIONS are when the result is stored in a variable -- as opposed to function statement DECLARATIONS which 
  function expressions are also nameless
  )
*/

// simple function expressions

// let calcNums = function (z, w) {
//   return (z + w) / (z - w);
// };

// console.log(calcNums(88, 89));
// console.log(calcNums(122, 89));
// console.log(calcNums(122, 89));

// function expressions in arrays and objects

function avgMikeScore(score, mikeScore) {
  return (mikeScore + 5) / score;
}

let avgJoeyScore = function (score, joeyScore) {
  return joeyScore / score;
};

// const scores = [avgMikeScore, avgJoeyScore];

// console.log(scores);

// with the FOR loop

// for (let i = 0; i < scores.length; i++) {
//   let result = scores[i](100, 20);
//   console.log(result);
// }

// the FOR OF loop (it iterates the arguments once for each item in the loop / you can name the iterator anything, obviously)

// for (let boobies of scores) {
//   let result = boobies(100, 20);
//   console.log(result);
// }

// functions as object properties

const scores = {
  mikeScore: avgMikeScore,
  joeyScore: avgJoeyScore,
};

console.log(scores.mikeScore(100, 20));
console.log(scores.joeyScore(329, 33));

// when functions are called within objects, they are converted into methods
// so, the above console logs are technically method calls

/* 
========= function expressions, part 2 of 4
*/
/* 
========= function expressions, part 3 of 4
*/
/* 
========= function expressions, part 4 of 4
*/
