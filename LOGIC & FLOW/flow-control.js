// IF STATEMENTS


// ! = is NOT EQUAL

const max = 'max'

if (max !== 'wrong name') {
    console.log('this is a wrong name');
  } 


// || is or
// && is and

const name = 'wes';
const last = 'bos';

//BEDMAS

if (name === 'scott' || (name === 'wes' && last == 'bos')) {
console.log('Coool Name!');
}


// INCLUDES METHOD
//returns true or false depending on is variable includes argument

const isAwesomeName = 'awesome'.includes(name);
// isAwesomeName = true
if (isAwesomeName) {
    console.log('SUPER COOL AWESOME NAME');
}


//TRUTHY OR FALSY
//------------------------------

// FALSY VALUES
// 0
// undefined
// null
// NaN
// '' (empty string)

// TRUTHY VALUE
// 1
// -10, (or all other numbers)
// strings
// [] (empty or full array)
// {} (empty or full object)



// COERCION
// --------------------------------------------------

// Using ! we can turn a variable into a boolean

const name = 'max'

!name
// output false, as name does exist

!!name
// output true


// TERNARY OPERATOR
// ------------------------------------------------------

// for simple if else

// 1. Condition
// 2. what to do if true
// 3. what to do if false
const word = count === 1 ? 'item' : 'items';

// you can also use functions in ternary operators
isAdmin ? showAdminBar() : null;
// if isAdmin = true we run showAdminBar function if not nothing happens








