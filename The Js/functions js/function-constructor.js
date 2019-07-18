// Function Constructor
//--------------------------------------------------------------------------------

// standard object

var max = {
  name: "max",
  yearOfBirth: "1993",
  job: "designer"
};

// FUNCTION CONSTRUCTOR
//--------------------------------------------------------------------------------------
var person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

//rather than having the method within the object we can create a prototype
//using inheritance
person.prototype.calculateAge = function() {
  this.age = 2019 - this.yearOfBirth;
};

var max = new person("max", 1993, "designer");

var jayne = new person("Jayne", 1957, "teacher");

var mark = new person("Mark", 1948, "retired");

//

max.calculateAge();
jayne.calculateAge();
mark.calculateAge();

//ANSWER

//age will be calculated and added to the object
// 26
//62
//71

//--------------------------------------------------------------------------------
// add a last name to the persons

person.prototype.lastName = "Smith";

console.log(max);

//lastname has been added to the object
