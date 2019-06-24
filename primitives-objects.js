// Primitives vs Objects
//--------------------------------------------------------------------------------
//primitives
var a = 34;
var b = a;

a = 46;
console.log(a);
console.log(b);

// a = 46
//b = 34

//objects

var obj1 = {
  name: "max",
  age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);
//obj1.age & obj2.age = 30

// they are the same as both reference the same object ie pull from the same source

// functions

var age = 27;
var obj = {
  name: "max",
  city: "Exeter"
};

function change(a, b) {
  a = 30;
  b.city = "San Francisco";
}
change(age, obj);

console.log(age);
console.log(obj.city);

// age = 27
// obj.city = san francisco
