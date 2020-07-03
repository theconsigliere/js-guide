// BLOCKS VS IIFE'S
//---------------------------------------------------------------------------------

// ES5 IIFE

(function() {
  var c = 3;
});

//console.log(c)

// BLOCK

{
  const a = 1;
  let b = 2;
}

// Info in block can not be accessed outside, as the variables are block scoped

console.log(a + b);

// returns error

{
  var c = 3;
}

console.log(c);

// Returns 3 as var is function scoped nto block scoped
