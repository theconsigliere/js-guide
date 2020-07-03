// Global Scope
//------------------------------

// script tag or Js file and you declare a varible, this will be accessible any where in Js file

const name = 'max'

function sayHi() {
    console.log('Hi!')
}

// var variables and functions are attached to window object

var age = 100

// in the console, is accessible by this command

window.age
// 100

// Function Scope
//------------------------------

// when variables are created in a function, they are only accessible within the function unless returned

function sayHi() {
    const name = 'max'
}

// never name a function scoped variable the same as a global variable, as its confusing


// Update a variable in a function 

function isCool(name) {

  let cool;

  if (name === 'wes') {
    cool = true;
  }
  console.log(cool);
  return cool;
}


// Block Scope 

// let and const are block scoped, var is function scoped