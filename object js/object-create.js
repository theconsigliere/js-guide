// Object.create
//--------------------------------------------------------------------------------

// define object that will act as the prototype
// then create a new object based on that very prototype

var personProto = {
  calculateAge: function() {
    console.log(2019 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1993;
john.job = "teacher";

var jane = Object.create(personProto, {
  name: { value: "jane" },
  yearOfBirth: { value: 1969 },
  job: { value: "designer" }
});

//object.create builds a object that inherits directly from the one passed into the first argument
