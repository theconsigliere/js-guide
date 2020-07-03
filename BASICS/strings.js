/* eslint-disable */


//basic strings, single, double and backticks

const name = 'wes';
const middle = "topher";
const last = `bos`;

// escaping using '\' to include strings with apostrophes

const sentence = "shes's so \"cool\"";

const sentence2 = `shes's so "cool"`;

// outputs: shes's so "cool"

//------------------

// Multi line strings, use backticks

const song = `Ohhh

ya

I like
pizza`;

//---------------------

// CONCATENATION: two or more strings are combined into one
// INTERPOLATION: When you put a variable inside a string

//concatenation
const hello = 'hello my name is ' + name + ". Nice to meet you";

let hello2 = 'hello my name is ';
hello2 = hello2 + name;
hello2 = hello2 + ' Nice to meet you';

//outputs: hello my name is wes. Nice to meet you


//interpolation
const hello = `hello my name is ${name}. Nice to meet you. I am ${1 + 100} years old`;

//------------------------


const html = `
  <div>
    <h2>${name}</h2>
    <p>${hello}</p>
  </div>
`;

document.body.innerHTML = html;