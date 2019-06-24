//objects

var title = document.querySelector("h1");

var max = {
  firstName: "Max",
  lastName: "Kirwin",
  birthYear: 1993,
  age: 25,
  family: ["Jayne", "Harri"],
  job: "designer",
  isMarried: false
};

console.log(max); //{firstName: "Max", lastName: "Kirwin", birthYear: 1990, age: 25, family: Array(2), …}

//retrieve specific element
console.log(max.isMarried); //false

//retrieve specific element
console.log(max["isMarried"]); //false

//make var x the birthyear value
var x = "birthYear";
console.log(max[x]); // 1993

//changes job to teacher
max.job = "teacher";

// changes value to true
max["isMarried"] = true;

var jane = new Object();
jane.name = "Jane";
jane.birthYear = 1969;
jane["lastName"] = "Kirwin";

console.log(jane); //{name: "Jane", birthYear: 1969, lastName: "Kirwin"}

//
//
//methods

var max = {
  firstName: "Max",
  lastName: "Kirwin",
  birthYear: 1993,
  family: ["Jayne", "Harri"],
  job: "designer",
  isMarried: false,
  calcAge: function(birthYear) {
    //max.age = 2019 - max.birthYear
    this.age = 2019 - this.birthYear;
  }
};
//run function so its executed by the browser
max.calcAge();

console.log(max); //returns object with age added
