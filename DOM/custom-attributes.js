//ATTRIBUTES

const pic = document.querySelector('.pic');

pic.alt = 'Cute Pup'; // setter

console.log(pic.alt); // getter

pic.width = 200;

pic.title ='cool'


// GET WIDTH OF IMAGE (PIXELS LOADED)
//-----------------------------------------
// you can get width in console but as js runs before page is fully loaded natural width wont returning anything
// unless you do this:

window.addEventListener('load', function() {
    console.log(pic.naturalWidth)
})


// DATA ATTRIBUTES
//-----------------------------------------

//set data attributes on img
pic.setAttribute('data-info', 'REALLY CUTE PUP');

//access data attributes set on img
console.log(pic.dataset);


pic.addEventListener('click', function() {
    alert(`Welcome ${custom.dataset.name} ${custom.dataset.last} `);
  });