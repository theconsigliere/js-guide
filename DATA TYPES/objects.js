// OBJECTS
// Allow us to group to together properties (keys) and values
// uses to storing related data or functionality

// Used for when the order of the properties does not matter

// OBJECT LITERAL

const person = {
    name: 'max',
    age: 100
}

// OLD WAY 

const person = new Object({
    age: 100,
    name: 'max'
})


// Can pass a variable into a string simply like this
//------------------------------------

const age = 10

const max = {
    // variable passed in
    age,
    name: 'max',
    // strings can be passed with dashes and spaces
    'cool-dude': true,
    'really cool': false,
    // nested object
    clothing: {
        shirts: 10,
        pants: 2
    },
    // function in a object (known as a method on the object)
    sayHello: function (greeting = 'Hey') {
        return `${greeting} ${this.name}`
    }
}

//ADD A NEW PROPERTY
//------------------------------------

max.job = 'Web Designer'
//overwrite property
max.age = 50


// ACCESS PROPERTY

max.age
// 50
max.clothing
// { shirts: 10, pants: 2 }

// ACCESS STRINGS IN OBJECT

max['really-cool']
// false


// ACCESS NESTED OBJECT

max.clothing.shirts
// 10


//REMOVE PROPERTY FROM OBJECT

delete max.age


// MAKE AN OBJECT THAT CAN'T BE CHANGED
//------------------------------------
// Immutable none of the properties can be changed on object

const maxFroze = Object.freeze(max)

// maxfroze is a copy of max object that can't be changed




