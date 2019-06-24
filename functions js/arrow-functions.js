//---------------------------------------------------------------------------------
// arrow functions

const years = [1990, 1965, 1982, 1993];

// ES5

var ages5 = years.map(function(el) {
  return 2019 - el;
});

console.log(ages5);
//[29, 54, 37, 26]

//ES6

// 1. for just one argument & 1 line of code

let ages6 = years.map(el => 2016 - el);

console.log(ages6);
//[29, 54, 37, 26]

//2. for Two arguments

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);

console.log(ages6);
// ["Age element 1: 26.", "Age element 2: 51.", "Age element 3: 34.", "Age element 4: 23."]

//3. for multiple lines of code {} curly braces & return keyword at the end

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Àge element ${index + 1} ${age}`;
});

console.log(ages6);
//["Àge element 1 29", "Àge element 2 54", "Àge element 3 37", "Àge element 4 26"]
