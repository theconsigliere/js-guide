// calculateAge(1985);

// function calculateAge(year) {
//   console.log(2016 - year);
//   console.log(this);
// }

var john = {
  name: "john",
  yearBirth: 1990,
  calculateAge: function() {
    console.log(this);
    console.log(2019 - this.yearBirth);

    function inner() {
      console.log(this);
    }

    inner();
  }
};

john.calculateAge();

var mike = {
  name: "mike",
  yearBirth: 1993
};

// treat function as variable so no brackets, only brackets when calling a method or funciton
mike.calculateAge = john.calculateAge;

mike.calculateAge();

//this keyword only becomes something as soon as a method is called
