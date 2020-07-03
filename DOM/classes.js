//CLASSES

//SELECT IMG
const pic = document.querySelector('.nice');


//Get list of classes that are on img
console.log(pic.classList);


//add class to img
pic.classList.add('open');

// remove class form img
pic.classList.remove('cool');


//ADD OR REMOVE CLASSLIST WHEN IMG IS CLICKED

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);
