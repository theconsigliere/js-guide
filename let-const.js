// LET

// let is block scoped nto function scoped

let i = 23;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);

//1
//2
//3
//4
//23

//VAR

var i = 23;

for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);

//1
//2
//3
//4
//5
