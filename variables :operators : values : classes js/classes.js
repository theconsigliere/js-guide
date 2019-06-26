//---------------------------------------------------------------------------------
// CLASSES

// ES5

var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calcAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};

var john5 = new Person5("John", 1993, "Teacher");

// ES6
//---------------------------------------------------------------------------------

class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }
  calcAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }

  static greeting() {
    console.log("Hey there!");
  }
}

const john6 = new Person6("John", 1993, "Teacher");

console.log(john6);
// Person6 {name: "John", yearOfBirth: 1993, job: "Teacher"}

Person6.greeting();
//Hey there!
