// Strings
//---------------------------------------------------------------------------------
// STRINGS

let firstName = "Max";
let lastName = "Kirwin";
const yearofBirth = 1993;

function calcAge(year) {
  return 2019 - year;
}

// ES5

console.log(
  "This is " +
    firstName +
    " " +
    lastName +
    " he was born in " +
    yearofBirth +
    ". today, he is " +
    calcAge(yearofBirth) +
    " years old"
);

//ES6

console.log(
  `this is ${firstName} ${lastName} he was born in ${yearofBirth}. today, he is ${calcAge(
    yearofBirth
  )} years old`
);

const n = `${firstName} ${lastName}`;

var l = n.startsWith("M");
let x = n.endsWith("win");

console.log(l);
console.log(x);

//True

console.log(n.includes("ir"));

//True

console.log(firstName.repeat(5));

//MaxMaxMaxMaxMax

console.log(`${firstName} `.repeat(5));

//Max Max Max Max Max
