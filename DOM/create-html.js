// CREATE ELEMENTS
//------------------------------

//https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement


// TO CREATE AN ELEMENT
const myParagraph = document.createElement('p')
myParagraph.textContent = 'I am a P';

const myDiv = document.createElement('div');


// ADD PARAGRAPH TO DIV

myDiv.appendChild(myParagraph);


//ADD TO PAGE
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

document.body.appendChild(myDiv);




// ADD SOMETHING TO THE TOP
// oh shoot! we need to add somethint to the top. like a heading!

const heading = document.createElement('h2');
heading.textContent = 'Cool Things';

myDiv.insertAdjacentElement('beforebegin', heading);


//CLONE ELEMENT
// true copies the element contents as well as the element itself
//--------------------------------
// https://developer.mozilla.org/en-US/docs/Web/API/Node/cloneNode


const newHeading = heading.cloneNode(true);