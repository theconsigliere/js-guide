// Closures
//--------------------------------------------------------------------------------

function retirement(retireAge) {
  var a = " years left until retirement";
  return function(yearOfBirth) {
    var age = 2019 - yearOfBirth;
    console.log(retireAge - age + a);
  };
}

var retirementUS = retirement(66);

var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1993);
retirementUS(1993);
retirementIceland(1993);

// an inner function has always access to the variables and parameters of its outer function, even after the outer function has returned.

//interview question
function interQ(job) {
  return function(name) {
    if (job === "designer") {
      console.log(name + ", please explain UX");
    } else if (job === "teacher") {
      console.log(name + ", please explain teaching");
    } else {
      console.log("hello " + name + ", what do you do");
    }
  };
}

interQ("designer")("Max");

//Max, please explain UX
