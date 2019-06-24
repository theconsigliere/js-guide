// Loops

//i standard in js for counter variable
for (var i = 0; i < 10; i++) {
  console.log(i);
}
// 0 1 2 3 4 5 6 7 8 9

x += 2; //means var x = x + 2 // 27

for (var x = 0; x <= 10; x += 2) {
  console.log(x);
} // 0 2 4 6 8 10

//using an array with loops
var max = ["Max", "Kirwin", 1993, "Designer", false];

//loop starts at 0 then loops through every value ending at the array end

for (var i = 0; i < max.length; i++) {
  console.log(max[i]);
}

// Max
// Kirwin
// 1993
// Designer
// false

//while loop

var i = 0;
while (i < max.length) {
  console.log(max[i]);
  i++;
}

//continue and break statments

//!== strict different opererator

var max = ["Max", "Kirwin", 1993, "Designer", false];

for (var i = 0; i < max.length; i++) {
  // asks if value in array is different to a string, if so it continues, if it is a string loop is true and we run the console log
  if (typeof max[i] !== "string") {
    continue;
  }
  console.log(max[i]);
}
//Max
// Kirwin
// Designer

for (var i = 0; i < max.length; i++) {
  // asks if value in array is different to a string, if so it breaks, only showing strings values before the break
  if (typeof max[i] !== "string") break;

  console.log(max[i]);
}
// Max
// Kirwin

//looping backwards
//i = max.length (5) - 1 (4) i (4) greater than or equal to 0 execute then decrease 1
//console.log(max[4])
//console.log(max[3])
//console.log(max[2])
//console.log(max[1])
//console.log(max[0])

for (var i = max.length - 1; i >= 0; i--) {
  console.log(max[i]);
}

//false
// Designer
// 1993
// Kirwin
// Max
