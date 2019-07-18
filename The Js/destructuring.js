//---------------------------------------------------------------------------------
// DESTRUCTURING

//ES5
var john = ["john", 26];
var named = john[0];
var aged = john[1];

//ES6
//Const called name anf age with john stored in name and 26 stored in age
const [name, age] = ["john", 26];

console.log(name);
console.log(age);

// john
// 26

//-------------------------------------------------------------------------------

const obj = {
  firstName: "John",
  lastName: "Smith"
};

const { firstName, lastName } = obj;

console.log(firstName);
console.log(lastName);

// john
// smith

const { firstName: a, lastName: b } = obj;

console.log(firstName);
console.log(lastName);

// john
// smith

//-------------------------------------------------------------------------------

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [ager, retirement] = calcAgeRetirement(1993);

console.log(ager);

console.log(retirement);

//26
//39
