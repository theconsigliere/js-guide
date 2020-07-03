function btn() {
  //do something here
}

var buttonRoll = document.querySelector(".btn-roll");

//no bracket as its called by the event
buttonRoll.addEventListener("click", btn);

//anonymous function, can only be used here
buttonRoll.addEventListener("click", function() {
  //do something here
});
