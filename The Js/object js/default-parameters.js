//---------------------------------------------------------------------------------
// DEFAULT PARAMETERS

// ES5

function familyPerson(firstName, yearOfBirth, lastName, nation) {
  // DEFAULT PARAMETER tenary operator
  lastName === undefined ? (lastName = "Smith") : (lastName = lastName);
  nation === undefined ? (nation = "American") : (nation = nation);

  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.lastName = lastName;
  this.nation = nation;
}

var Max = new familyPerson("max", 1990);

console.log(Max);

// familyPerson {firstName: "max", yearOfBirth: 1990, lastName: "Smith", nation: "American"}

var emily = new familyPerson("Emily", 1983, "Diaz", "spanish");

console.log(emily);

// familyPerson {firstName: "Emily", yearOfBirth: 1983, lastName: "Diaz", nation: "spanish"}

//---------------------------------------------------------------------------------

//ES6

//set default parameters in the function arguments
function famPerson(
  firstName,
  yearOfBirth,
  lastName = "Smith",
  nation = "American"
) {
  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.lastName = lastName;
  this.nation = nation;
}

var Max = new familyPerson("max", 1990);

console.log(Max);

// familyPerson {firstName: "max", yearOfBirth: 1990, lastName: "Smith", nation: "American"}

var emily = new familyPerson("Emily", 1983, "Diaz", "spanish");

console.log(emily);

// familyPerson {firstName: "Emily", yearOfBirth: 1983, lastName: "Diaz", nation: "spanish"}
