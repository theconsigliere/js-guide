// first class functions
// passing functions as arguments
//--------------------------------------------------------------------------------

var years = [1990, 1967, 1956, 2002, 2014];

// pass in the array and a function as arguments
function arrayCalc(arr, fn) {
  // to loop over we create a new array a pass the results into the new array
  var arrRes = [];
  // counter to loop over each value of current array length
  for (var i = 0; i < arr.length; i++) {
    //inserts element to end of array
    // callback function runs on each index of the array new result is then pushed into array
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

//receives el argument and returns the age based on argument
function calcAge(el) {
  return 2016 - el;
}

// CALLBACK FUNCTION
// running function as an argument
var ages = arrayCalc(years, calcAge);
console.log(ages);

//  ages = [26, 49, 60, 14, 2]

//--------------------------------------------------------------------------------

function isFullAge(el) {
  return el >= 18;
}

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);

//  fullAges = [true, true, true, false, false]

//--------------------------------------------------------------------------------

function maxHeartRate(el) {
  if (el > +18 && el < +81) {
    // rounds the integer to nearest full number
    return Math.round(206.9 - 0.67 * el);
  }
  return -1;
}

var rates = arrayCalc(ages, maxHeartRate);
console.log(rates);

// rates = [189, 174, 167, -1, -1]
