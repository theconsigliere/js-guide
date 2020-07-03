// MAP
//---------------------------------------------------------------------------------------------------------------------------
// ONLY ARRAYS

//The map() method creates a new array with the results of calling a provided function on every element in the calling array.

//returns index number of the element of the array we input above

var Arr = [3, 6, 8, 10];

// pass a function to map
const map = Arr.map(function(event) {
  // with old ES method make sure you return the value
  return event * 2;
});

console.log(map);

// [6, 12, 16, 20]

index = map.indexOf(20);

console.log(index);

//3

//SPLICE
//---------------------------------------------------------------------------------------------------------------------------
// the splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements
// splice needs the position of the array element and how many elements need to be removed
map.splice(index, 1);

console.log(map);
// [6, 12, 16]
