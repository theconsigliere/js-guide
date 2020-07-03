// DIFFERENT FUNCTIONS

//Functions are first class citizens


//TRADITIONAL

 function doctorize(firstName) {
   return `Dr. ${firstName}`;
 }

 //ANONYMOUS

 function (firstName) {
    return `Dr. ${firstName}`;
  }


// FUNCTION EXPRESSION

const doctorise =  function (firstName) {
return `Dr. ${firstName}`;
}


//ARROW FUNCTION

// => : fat arrow
// -> : single arrow


const inchToCM = inches => inches * 2.54;

const add = (a, b = 3) => { a + b; }


// IIFE
// Immediately Invoked Function Expression

(function(age) {
    return `You are cool and age ${age}`;
  })(10);


//METHODS
// function that lives inside an object


const wes = {
    name: 'Westopher Bos',
    // Method!
    sayHi: function() {
    // traditional functions have a scopt of 'this' so output will be 'Hey Westopher Bos'
      console.log(`Hey ${this.name}`);
      return 'Hey Wes';
    },
    // Short hand Method
    yellHi() {
      console.log('HEY WESSSSS');
    },
    // Arrow function
    wisperHi: () => {
        // arrow functions don't have a scope of this
      console.log('hii wesss im a mouse');
    }
  }


  wes.sayHi
  // Hey Westopher Bos

  wes.yellHi
  //HEY WESSSSS

  wes.wisperHi
  // hii wesss im a mouse




//CALLBACK FUNCTIONS
//either when something has been clicked run this, or x amount of time has lapsed, run this.

//click callback

const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('Great Clicking!!');
}

button.addEventListener('click', handleClick);


//or use an anonymous function

button.addEventListener('click', function() {
    console.log('NIce Job!!!');
  });


//timer callback

setTimeout(handleClick, 1000);



//-------------------------------------------

//RETURNING AN OBJECT


function makeABaby(first, last) {
  const baby = {
    name: `${first} ${last}`,
    age: 0
  }
  return baby;
}

makeABaby('kit', 'bos')
// {name:'kit bos', age: 0}

const makeABaby2 = (first, last) => ({ name: `${first} ${last}`, age: 0 });
// {name:'kit bos', age: 0}