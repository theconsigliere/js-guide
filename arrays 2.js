//---------------------------------------------------------------------------------
// ARRAYS

const boxes = document.querySelectorAll(".box");

console.log(boxes);

// * Returns NodeList(3) [div.box.green, div.box.blue, div.box.orange]

// how to return array from nodeList
//------------------------------------------------------------------------
//------------------------------------------------------------------------

//ES5

// SLICE returns section of array

//CALL  calls method of an object, this case its calling the array prototype on the boxes variable

var boxesArr5 = Array.prototype.slice.call(boxes);

console.log(boxesArr5);

// *  RETURNS array =  (3) [div.box.green, div.box.blue, div.box.orange]

boxesArr5.forEach(function(cur) {
  cur.style.backgroundColor = "blue";
});

//ES6
//------------------------------------------------------------------------

// * The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.

const boxesArr6 = Array.from(boxes);

// returns array from nodelist

boxesArr6.forEach(cur => (cur.style.backgroundColor = "green"));

// CHANGE BOX TEXT IF BOX IS NOW BLUE
//------------------------------------------------------------------------
//------------------------------------------------------------------------

//ES5

for (var i = 0; i < boxesArr5.length; i++) {
  if (boxesArr5[i].className === "box blue") {
    continue;
  }

  boxesArr5[i].textContent = "I changed to blue";
}

//ES6
//------------------------------------------------------------------------
//FOR OFF

for (const currentElement of boxesArr6) {
  if (currentElement.className.includes("blue")) {
    continue;
  }

  currentElement.textContent = "I changed to blue";
}

// FIND ELEMENTS IN AN ARRAY
//------------------------------------------------------------------------
//------------------------------------------------------------------------
// find age that is greater than or equal to  18

// ES5

var ages = [12, 17, 8, 21, 14, 11];

var fullAge = ages.map(function(cur) {
  return cur >= 18;
});

console.log(fullAge);

// [false, false ,false, true, false, false, false]

var who = fullAge.indexOf(true);

console.log(who);

// 3

console.log(ages[who]);

// 21

//------------------------------------------------------------------------

//ES6

var ageIndex = ages.findIndex(cur => cur >= 18);

console.log(ageIndex);

// 3

var ageThatIsOlder = ages.find(cur => cur >= 18);

console.log(ageThatIsOlder);

// 21
