// Functions

// when created or authored that is called a function definition

//when we run the function thats called 'calling' or 'running' a function




// Function Definition
function calculateBill(billAmount, taxRateAmount) {
//function body

console.log('running the calculation')

const total = billAmount * (1 + taxRateAmount)

// return variable when function is run
return total

}


//Function Call or Run
calculateBill()

// access total out of the function scope

const billTotal = calculateBill(100, 0.13)

console.log(`Your total is £${billTotal}`)
//your total is £12.9999

// run function within  statement with interpolation
console.log(`Your total is £${calculateBill(100, 0.13)}`)
//your total is £12.9999

/// Using variables as parameters, they get renamed it billAmount and TaxRateAmount within the function
const wesTotal = 500
const wesTaxRate = 0.3

calculateBill(wesTotal, wesTaxRate)


//------------------------------

// pass function into a function

function doctorize(name) {
    return `Dr. ${name}`;
  }
  
  function yell(name) {
    return `HEY ${name.toUpperCase()}`;
  }

yell(doctorize('max'))

// HEY DR.MAX


//--------------------------

//Defaults

//Defaults taxRate to tipRate to values given by function if not declared when function has been run
function calculateBill2(billAmount, taxRate = 0.13, tipRate = 0.15) {
    // this is the function body
    console.log('Running Calculate Bill!!');
    const total = billAmount + billAmount * taxRate + billAmount * tipRate;
    return total;
  }

  const myBill4 = calculateBill2(100, undefined, 0.2);
  //133

