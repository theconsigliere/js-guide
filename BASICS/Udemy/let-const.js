// LET

// let is block scoped nto function scoped

const i = 23;

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);

// 1
// 2
// 3
// 4
// 23

// VAR

let x = 23;

for (x = 0; x < 5; x++) {
  console.log(x);
}

console.log(i);

// 1
// 2
// 3
// 4
// 5
