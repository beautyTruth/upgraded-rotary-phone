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
const user2 = [
  {
    name: "Tony Montana",
    job: "cocaine importer",
  },
  "energetic self starter",
  ["organizes big cocaine buys", "hates Colombians", "likes bubblebaths"],
];

console.log(user2);
console.log(user2[0]);
console.log(user2[0]["job"]);
console.log(`${user2[0]["name"]} is an ${user2[1]} who really ${user2[2][2]}.`);
