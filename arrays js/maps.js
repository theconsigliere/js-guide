//---------------------------------------------------------------------------------
// MAPS

const question = new Map();

question.set("question", "What is the offical name of the js version?");

question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("correct", 3);
question.set(true, "Correct answer");
question.set(false, "Wrong answer");

console.log(question.get("question"));
// What is the offical name of the js version?

console.log(question.size);
// 8

// REMOVE SINGLE QUESTION
//---------------------------------------------------------------------------------
if (question.has(4)) {
  // How to remove answer
  question.delete(4);
}

// CLEAR ALL QUESTIONS
//---------------------------------------------------------------------------------
question.clear();

// LOOP THROUGH MAP
//---------------------------------------------------------------------------------
question.forEach((key, value) =>
  console.log(`This is ${value}, and it's set to ${key}`)
);

/* This is question, and it's set to What is the offical name of the js version?
This is 1, and it's set to ES5
This is 2, and it's set to ES6
This is 3, and it's set to ES2015
This is 4, and it's set to ES7
This is correct, and it's set to 3
This is true, and it's set to Correct answer
This is false, and it's set to Wrong answer */

// HOW TO USE MAPS
//---------------------------------------------------------------------------------

// use only answers that have key nubmers
for (let [key, value] of question.entries()) {
  if (typeof key === "number") {
    console.log(`answer ${key}: ${value}`);
  }
}
/* answer 1: ES5
answer 2: ES6
answer 3: ES2015
answer 4: ES7 */

// make sure that number typed is converted into an integer
const ans = parseInt(prompt("Write the correct answer"));

// log correct if equal to right answer
console.log(question.get(ans === question.get("correct")));
