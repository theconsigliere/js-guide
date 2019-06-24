//logical operators

var age, _newage;
age = 25;
_newage = 26;

var diff = age < _newage;
//returns boolean, returns true
console.log(diff);

//operator precedence

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
// - is more of a precedence than >=
console.log(isFullAge);

//more operators

var x = 25;

x += 2; //means var x = x + 2 // 27
console.log(x);
x *= 2; //means var x = x * 2 // 54
console.log(x);
x++; //means var x plus one // 55

//
//
//

//boolean Operators
var title = document.querySelector("h1");

var firstName = "john";
var age = 16;

if (age < 13) {
  title.innerHTML = firstName + " is a boy.";
  //   so john is older than 13 but not older than 20, both are true so therefore john is a teenager
} else if (age >= 13 && age < 20) {
  // between 13 & 20 === age >= 13 and age < 20
  title.innerHTML = firstName + " is a teenager.";
} else {
  title.innerHTML = firstName + " is a Man.";
}

//   and = && , true if all are true
//   or = ||, true if one is true
//   not = !, inverts true/ false value
