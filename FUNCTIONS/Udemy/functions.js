// functions

var title = document.querySelector("h1");

function calculateAge(birthYear) {
  //birthYear not set
  return 2019 - birthYear;
}

var ageJohn = calculateAge(1990);
// argument we set will determine the value of birthYear
var ageMax = calculateAge(1993);
var ageJane = calculateAge(1957);

console.log(ageJane, ageJohn, ageMax);

//
//
//
//

function yearsRetire(year, firstName) {
  var age = calculateAge(year);
  var retire = 65 - age;
  if (retire > 0) {
    return firstName + " retires in " + retire + " years.";
  } else {
    return firstName + " is already retired.";
  }
}
// passed in year, firstName
title.innerHTML = yearsRetire(1943, "Max");

//
//
//
//
//
//
//
//

// function statements & expressions

var title = document.querySelector("h1");

//function declaration

//performs actions

function whatDo(job, firstName) {}

// function expression

//always produce value

var whatDo = function(job, firstName) {
  switch (job) {
    case "teacher":
      //once return is called it exits the function
      return firstName + " teaches kids how to code";
    case "designer":
      return firstName + " designs design";
    case "driver":
      return firstName + " drives cars";
    default:
      return firstName + " does something else";
  }
};

title.innerHTML = whatDo(
  //takes answer as job variable
  prompt("what do you do?"),
  //takes answer as firstname
  prompt("what is your name?")
);
