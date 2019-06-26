//---------------------------------------------------------------------------------
// SUBCLASSES

// ES5
//---------------------------------------------------------------------------------

var Person5 = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calcAge = function() {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
};

// creating a new object called athlete5 inheriting person5 prototype properties,

Athlete5.prototype = Object.create(Person5.prototype);

// a new function using the athlete5 protoype not the person5
Athlete5.prototype.wonMedal = function() {
  this.medals++;
  console.log(this.medals);
};

var johnAthlete5 = new Athlete5("John", 1990, "Swimmer", 3, 10);

johnAthlete5.calcAge();
//29

johnAthlete5.wonMedal();
//11

//ES6
//---------------------------------------------------------------------------------

class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calcAge() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
  }
}

// extends to inherit person6 class
class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    // calls parent class
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }

  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const johnAthlete6 = new Athlete6("John", 1990, "Swimmer", 3, 10);

johnAthlete5.calcAge();
//29

johnAthlete5.wonMedal();
//11

//---------------------------------------------------------------------------------

console.log(johnAthlete5);
//Athlete5 {name: "John", yearOfBirth: 1990, job: "Swimmer", olympicGames: 3, medals: 10}
console.log(johnAthlete6);
//Athlete6 {name: "John", yearOfBirth: 1990, job: "Swimmer", olympicGames: 3, medals: 10}
