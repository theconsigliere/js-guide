//HOISTING
// Accessing varialbes and functions, before they have been created
//Two things that can be hoisted function declarations and variable declarations



//EXAMPLE



sayHi();


function sayHi() {
  console.log('hey!');
  console.log(add(10, 2));
}