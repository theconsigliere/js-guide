
//INTEGER: full number
// FLOAT: number with decimal

const age = 100.5;
const name = 'wes';

// in console use this to find out type

typeof age
// outputs: number

typeof name
// outputs: string

//-----------------------------

//MATH

/// rounds numbers up or down
Math.round()

// always gives lower end of number (rounds down)
Math.floor()

// always gives upper end of number (rounds up)
Math.ceil()

// gives a random number between 0 & 1
Math.random()

// returns max number, ie returns 12
Math.max(10, 12)

// turns string into number
parseFloat('20.343')
// 20.323

// turns a float into a integer
parseInt('20.343')
// 20


//-----------------------------

//PRACTICE

const smarties = 20;
const kids = 3;

const eachKidGets = Math.floor(smarties / kids);
//outputs: Math.floor(6.66666667)
// 6

//Modulo
// what is left from 20 / 3, kids get 6 each which makes 18, then 2 is left
const dadGets = smarties % kids;
// outputs: 2
console.log(`Each kids gets ${eachKidGets}`);


//-----------------------------

//FLOATING POINTS

0.1 + 0.2
// 0.3000000004

//for explanation

window.location = `https://${0.1 + 0.2}.com`;
// https://0.30000000000000004.com/

//Your language isn't broken, it's doing floating point math. Computers can only natively store integers, so they need some way of representing decimal numbers. This representation comes with some degree of inaccuracy. 

//-----------------------------

// OTHER

10 ** 2
// 10 to the power of 2
//100

1000 ** 200
// Infinity

10 / 'dog'
// NaN aka Not a number

