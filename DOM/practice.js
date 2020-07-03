// MAKE A DIV

const div = document.createElement('div');

// add a class of wrapper to it
div.classList.add('wrapper');

// put it into the body
document.body.appendChild(div);

//-----------------------------------------------------

// MAKE AN UNORDERED LIST

const ul = `<ul>
  <li>one</li>
  <li>two</li>
  <li>three</li>
</ul>`;
// add three list items with the words "one, two three" in them
// put that list into the above wrapper
div.innerHTML = ul;


//-----------------------------------------------------

//CREATE AN IMAGE

// create an image
const img = document.createElement('img');

// set the source to an image
img.src = 'https://picsum.photos/500';

// set the width to 250
img.width = 250;
img.height = 250;

// add a class of cute
img.classList.add('cute');

// add an alt of Cute Puppy
img.alt = 'Cute Puppy!';

// Append that image to the wrapper
div.appendChild(img);


// DELETE DIV USING BUTTON
//-----------------------------------------------------

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
// make out delete function
function deleteCard(event) {
  const buttonThatGotClicked = event.currentTarget;
  // buttonThatGotClicked.parentElement.remove();
  buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));