// arrays

var title = document.querySelector("h1");
// first element 0 , 1 , 2
var names = ["max", "john", "ringo", "Paul"];
//new version of the array
var years = new Array(1990, 1969, 1948);

console.log(names[0]); //max

console.log(names); // (3) ["max", "john", "ringo"]

console.log(names.length); // 4 shows number of how many array items we have

//mutate array data

//replaces 0 value with george
//
names[0] = "George";
console.log(names); //(4) ["George", "john", "ringo", "Paul"]

//
//counts how many are in the array 0,1,2,3 (4) values,  then adds an extra value into the 4 position making 5 values
names[names.length] = "Mary";

console.log(names); // (5) ["George", "john", "ringo", "Paul", "Mary"]

//Different data types

var John = ["Max", "Kirwin", 1993, "Designer", false];

//methods specific to arrays

John.push("black"); //adds black to end of array
console.log(John); //6) ["Max", "Kirwin", 1993, "Deisgner", false, "black"]

John.unshift("Mr."); // adds Mr. to the begining of the array
console.log(John); //  (7) ["Mr.", "Max", "Kirwin", 1993, "Deisgner", false, "black"]

John.pop(); // removes value at end of array
console.log(John); //(6) ["Mr.", "Max", "Kirwin", 1993, "Deisgner", false]

John.shift(); // removes (0) first value from the array
console.log(John); //  (5) ["Max", "Kirwin", 1993, "Designer", false]

// which position element is in an array

console.log(John.indexOf("1993")); //2

// returns -1 if element not in the array

var answer =
  John.indexOf("Teacher") === -1
    ? "John is not a teacher"
    : "John is a teacher";
console.log(answer); // John is not a teacher
