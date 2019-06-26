//Ternary Operator

var title = document.querySelector("h1");

var firstName = "John";
var age = 16;

age >= 18
  ? // is age greater or equal to 18, ? asks a question if so print
    (title.innerHTML = firstName + " Drinks Beer.")
  : //   if not show this statement
    (title.innerHTML = firstName + " Drinks Juice.");

// quick way to write a if else or if else if statement
var drink = age >= 18 ? "beer" : "juice";

console.log(drink);

//
//
//
//

//Switch statement

var title = document.querySelector("h1");
var firstName = "John";

var job = prompt("what is John's job?");

switch (job) {
  // if one of the cases are true run the innerHTML statement
  case "teacher":
  case "instructor":
    title.innerHTML = firstName + " teaches kids how to code.";
    break;

  case "driver":
    title.innerHTML = firstName + " teaches kids how to drive.";
    break;

  // can include operators
  case (job = "designer"):
    title.innerHTML = firstName + " teaches kids how to design.";
    break;

  default:
    title.innerHTML = firstName + " lives his life.";
}

//
//
//
//
