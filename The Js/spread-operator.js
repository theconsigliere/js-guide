//---------------------------------------------------------------------------------
// SPREAD OPERATOR

function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);

console.log(sum1);

//81

//ES5
//---------------------------------------------------------------------------------

var ages = [18, 30, 12, 21];

//APPLY sets this keyword then excepts an array as an argument for a function
var sum2 = addFourAges.apply(null, ages);

console.log(sum2);

//81

//ES6
//---------------------------------------------------------------------------------

//SPREAD OPERATOR
const sum3 = addFourAges(...ages);
console.log(sum3);

//81

//SPREAD OPERATOR EXAMPLE 2
//---------------------------------------------------------------------------------

const familySmith = ["max", "harri", "jane"];

const familyMiller = ["mary", "bob", "ann"];

const bigFamily = [...familySmith, "lily", ...familyMiller];
console.log(bigFamily);

// RETURNS (7) ["max", "harri", "jane", "lily", "mary", "bob", "ann"]

//SPREAD OPERATOR EXAMPLE 3
//---------------------------------------------------------------------------------

const h1 = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");

//create array from all elements
const all = [h1, ...boxes];

console.log(all);

//(4) [h1, div.box.green, div.box.blue, div.box.orange]

// turn nodelist of '.box' into array items

const arrayBoxes = Array.from(all);

arrayBoxes.forEach(cur => (cur.style.color = "purple"));
