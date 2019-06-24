//---------------------------------------------------------------------------------
// REST PARAMETERS

// ES5
//---------------------------------------------------------------------------------

function isFullAge5() {
  //console.log(arguments);
  // Returns Arguments(3) [1990, 1999, 1965, callee: ƒ, Symbol(Symbol.iterator): ƒ]

  //
  // turns arguemnts into an array
  var arrayOfAges = Array.prototype.slice.call(arguments);

  arrayOfAges.forEach(function(cur) {
    console.log(2019 - cur >= 18);
  });
}

isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2016, 1987);

//true
//false
// true

//---------------------------------------------------------------------------------
//ES6 REST PARAMETERS

// takes arguments places them in years variable

function isFullAge6(...years) {
  years.forEach(cur => console.log(2016 - cur >= 18));
}

isFullAge6(1990, 1999, 1965);

// true
// false
// true

//---------------------------------------------------------------------------------

// add an age limit to argument

function isFullageES6(limit, ...years) {
  years.forEach(cur => console.log(2019 - cur >= limit));
}

isFullageES6(21, 1990, 1999, 1965);

//true
// false
// true
