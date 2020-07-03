// EVENTS

const button = document.querySelector('.block-button')


// Two arguments, event to listen for and a callback function

function handleClick() {
    console.log('🐛 IT GOT CLICKED!!!');
  }
  

button.addEventListener('click', handleClick)


// REMOVE EVENT LISTENER

button.removeEventListener('click', handleClick)

//--------------------------------------------------------------

// ADD EVENT LISTENERS TO MULTIPLE ITEMS

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');


buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener('click', handleClick);
  });



// OR USE A FUNCTION TO HANDLE EVENT LISTENERS

// Listen on multiple items
const buyButtonsTwo = document.querySelectorAll('button.buy');


function handleBuyButtonClick(individualButton) {
    console.log('You clicked a button!');
    individualButton.addEventListener('click', handleClick);
  }

buyButtonsTwo.forEach(handleBuyButtonClick)


//--------------------------------------------------------------

// EVENT HANDLE
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

const allButtons = document.querySelectorAll('button.all');


function handleClickAll(event) {
    console.log(event)

// the thing you have clicked on, could be button or span or h2 tag within button
    const button = event.target;

    // the thing that fired the event listener
    console.log(event.currentTarget);  


    // tells you the type of event ie click
    console.log(event.type)



    //PROPAGATION
// Propagation means bubbling up to parent elements or capturing down to child elements.

    //Stops event from bubbling up
    event.stopPropagation();


    // if this event is going to bubble up or not returns true or false
    console.log(event.bubbles)

}


buyButtons.forEach(function(clickButton) {
    clickButton.addEventListener('click', handleClickAll);
  });


  //----------------------------------------



 const photoEl = document.querySelector('.photo');



photoEl.addEventListener('mouseenter', e => {
  console.log(e.currentTarget);

  // THIS
// Is equal to what, function was called against for example in this case photoEl element
  console.log(this);
});