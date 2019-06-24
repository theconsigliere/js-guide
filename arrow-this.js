//---------------------------------------------------------------------------------
// arrow functions 2

//ES6

const box5 = {
  color: "green",
  position: 1,
  clickMe: function() {
    // use function in method so 'This' keyword can point to local function not global
    document.querySelector(".green").addEventListener("click", () => {
      // using arrow function 'this' keyword point to variable
      var str = `this is box number ${this.position} and it is ${this.color}`;
      alert(str);
    });
  }
};

box5.clickMe();

//-----------------------------------------------------------------------------------

//function constructor

function person(name) {
  this.name = name;
}

//ES5
person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(
    function(el) {
      return this.name + " is friends with " + el;
      //use bind to set 'this' keyword
    }.bind(this)
  );

  console.log(arr);
};

var friends = ["bob", "jane", "mark"];

new person("john").myFriends5(friends);
//(3) ["john is friends with bob", "john is friends with jane", "john is friends with mark"]

//-----------------------------------------------------------------------------------

// ES6

person.prototype.myFriends6 = function(friends) {
  var arr = friends.map(el => {
    return `${this.name} is friends with ${el}`;
  });

  console.log(arr);
};

var friends = ["bob", "jane", "mark"];

new person("max").myFriends6(friends);

//(3) ["max is friends with bob", "max is friends with jane", "max is friends with mark"]
